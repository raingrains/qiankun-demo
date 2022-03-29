import './public-path';
import { createApp } from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

let router = null;
let instance = null;
let history = null;


function render(props = {}) {
  const { container,routerBase } = props;
  history = createWebHashHistory(window.__POWERED_BY_QIANKUN__ ? routerBase : '/');
  if(window.__POWERED_BY_QIANKUN__){
    // routes.forEach(item => {
    //   item.path = routerBase + item.path
    // })
    console.log(routes)
  console.log(history,window.__POWERED_BY_QIANKUN__ ,"HashHistory");
  }
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.use(store);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
}



export async function mount(props) {
  render(props);

//   console.log(instance.config.globalProperties.$route,"444444444");
}

export async function unmount() {
    console.log("vue3被卸载了");
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
  history.destroy();
}
