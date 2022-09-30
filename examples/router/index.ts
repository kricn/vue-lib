import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
