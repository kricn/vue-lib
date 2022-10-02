import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import OrangeUI from '@packages/index.js'
import "@packages/theme-chalk/src/index.scss"
const app = createApp(App)
app.use(OrangeUI).use(router).mount('#app')
