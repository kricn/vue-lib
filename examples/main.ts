import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DemoBlock from '@/components/DemoBlock.vue'
import OrangeUI from '@packages/index.js'
import "@packages/theme-chalk/src/index.scss"
import "./styles/index.scss";
const app = createApp(App)
app.component('DemoBlock', DemoBlock)
app
  .use(OrangeUI)
  .use(router)
  .mount('#app')
