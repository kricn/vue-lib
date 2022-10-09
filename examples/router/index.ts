import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import menu from './menu.js'

function registerRoute(navs: any[]): Array<RouteRecordRaw> {
  let routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      redirect: '/installtion',
      name: 'home',
      component: () => require.ensure([], () => require("@/views/index.vue")),
      children: [],
    }
  ];

  navs.forEach(nav => {
    routes[0].children?.push({
      path: nav.path.slice(1),
      meta: {
        title: nav.title,
      },
      name: 'component-' + (nav.title || nav.name),
      component: () => require.ensure([], () => require(`@/views/docs${nav.path}.md`)),
    })
  })

  return routes;
}

const routes: Array<RouteRecordRaw> = registerRoute(menu)

console.log(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
