import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import DemoBlock from '@/components/DemoBlock.vue'
import OrangeUI from '@packages/index.js'
import "@packages/theme-chalk/src/index.scss"
import "./styles/index.scss";
import 'highlight.js/styles/color-brewer.css'
import "./styles/common.scss";
import "./demo-style/index.scss"
import icon from './icon.json';

const app = createApp(App)
app.config.globalProperties.$icon = icon  // icon 页面使用
app.component('DemoBlock', DemoBlock)
app
  .use(OrangeUI)
  .use(router)
  .mount('#app')
