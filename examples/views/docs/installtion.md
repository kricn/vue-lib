## 安装与使用

### npm 安装
```sh
npm install mnyt-vue-lib
# 或
yarn add mnyt-vue-lib
```

### 引入组件
#### 完整引入
在 main.js 中写入以下内容：
```js
import { createApp } from 'vue'
import App from './App.vue'
import VueLib from 'mnyt-vue-lib'
import "mnyt-vue-lib/theme-chalk/src/index.scss"
createApp(App).use(VueLib).mount('#app')
```
#### 按需引入
借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：
```sh
npm install babel-plugin-component -D
```
然后，将 .babelrc 修改为：
```sh
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "mnyt-vue-lib",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
接下来，如果你只希望引入部分组件，比如 Button，那么需要在 main.js 中写入以下内容：
```js
import { createApp } from 'vue'
import App from './App.vue'
import {Button} from 'mnyt-vue-lib'
import "mnyt-vue-lib/theme-chalk/src/index.scss"
createApp(App).use(Button).mount('#app')
```
完整组件列表和引入方式（完整组件列表以 [components.json](https://github.com/kricn/vue-lib/blob/master/build/components.json) 为准）

[仓库地址](https://github.com/kricn/vue-lib)