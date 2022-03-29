import { createApp } from 'vue'
import App from './App.vue'
// import router from '@/router'
import store from '@/store'
import { registerMicroApps, setDefaultMountApp, start, initGlobalState } from 'qiankun'
import apps from './micro-app'
import 'normalize.css'

// 创建节点
const app = createApp(App)
app.use(store).mount('#app')
// console.log(store.state)

const actions = initGlobalState(store.state)

/**
 * @params Function callback
 * @params fireImmediately boolean 是否立即触发
 */
actions.onGlobalStateChange((state, prevState) => {
  console.log(state, prevState)
  store.commit('changeGlobalMessage', state)
}, false)

actions.setGlobalState(store.state)
// actions.offGlobalStateChange()
console.log(actions)

// 注册微应用
registerMicroApps(apps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    },
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    },
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    },
  ],
})

// 设置主应用启动后默认进入的微应用
setDefaultMountApp('/vue3')

start({
  sandbox: true, // 开启沙盒环境
})
