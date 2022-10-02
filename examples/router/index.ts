import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
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
  history: createWebHistory(),
  routes
})

export default router
