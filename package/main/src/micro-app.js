console.log(import.meta.env[`VITE_APP_${import.meta.env.MODE.toUpperCase()}_APP1`])
console.log(import.meta.env[`VITE_APP_${import.meta.env.MODE.toUpperCase()}_APP2`])
const microApps = [
  {
    name: 'sub-vue',
    entry: import.meta.env[`VITE_APP_${import.meta.env.MODE.toUpperCase()}_APP1`],
    activeRule: '/sub-vue',
  },
  {
    name: 'vue3',
    entry: import.meta.env[`VITE_APP_${import.meta.env.MODE.toUpperCase()}_APP2`],
    activeRule: '/vue3',
  },
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
    },
  }
})
export default apps
