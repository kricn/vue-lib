import { RouteRecordRaw } from 'vue-router'
const menu: RouteRecordRaw[] = [
  {
    path: 'installtion',
    component: () => import("@/views/installtion.vue"),
    name: "installtion",
    meta: {
      title: '快速开始'
    }
  },
  {
    path: 'button',
    component: () => import("@/views/button.vue"),
    name: "Button",
    meta: {
      title: '按钮'
    }
  }
]

export default menu