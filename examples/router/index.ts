import { nextTick } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import menu from './menu.js'
import hljs from 'highlight.js';

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

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

export default router
