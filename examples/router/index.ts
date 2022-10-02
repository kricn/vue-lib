import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import menu from './menu'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
    children: [
      ...menu
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
