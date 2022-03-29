const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于',
    },
    component: () => import('@/views/About.vue'),
  },
]

export default routes
