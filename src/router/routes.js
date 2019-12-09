
export const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "demo" */ '@/views/Index.vue'),
    meta: { title: `home` }
  }
]
