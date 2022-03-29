import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import routes from '@/router'
import store from '@/store'

console.log(store)

let router = null
let instance = null
let history = null

function render(props = {}) {
  const { container, routerBase } = props

  console.warn(props)
  history = createWebHashHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? routerBase : '/')

  console.log(history)
  router = createRouter({
    history,
    routes,
  })
  // 路由前置守卫
  router.beforeEach((to, from, next) => {
    // meta中有title则替换标题
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  })

  // 创建节点
  instance = createApp(App)
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('我正在作为子应用运行')
    // routes.forEach(item => {
    //   item.path = routerBase + item.path
    // })
    console.log(routes)
    props.onGlobalStateChange(state => {
      console.warn(state)
      store.commit('changeLocalGlobalMessage', state)
    }, true)
    setTimeout(() => {
      props.setGlobalState({
        globalMessage: {
          msg: 'hello world',
        },
      })
    }, 3000)
    // 将更改全局状态的方法挂载到全局
    instance.config.globalProperties.$setGlobalState = props.setGlobalState
  }
  instance
    .use(router)
    .use(store)
    .mount(container ? container.querySelector('#app') : document.getElementById('app'))
}

renderWithQiankun({
  mount(props) {
    console.log('viteapp mount')
    render(props)
    // console.log(instance.config.globalProperties.$route,"444444444");
  },
  bootstrap() {
    console.log('bootstrap')
  },
  unmount(props) {
    console.log('vite被卸载了')
    instance.unmount()
    instance._container.innerHTML = ''
    history.destroy() // 不卸载  router 会导致其他应用路由失败
    router = null
    instance = null
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑
  render()
}
