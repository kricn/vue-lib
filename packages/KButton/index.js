import KButton from './src/KButton.vue'

KButton.install = function (Vue) {
  Vue.component(KButton.name, KButton)
}

// 默认导出组件
export default KButton;