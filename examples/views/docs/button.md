## 按钮a
这是一个按钮
:::demo 这是一个按钮
```html
<template>
  <k-button @click="onClick">aadda</k-button>
</template>

<script setup>
  const onClick = () => {
    console.log('a')
  }
  return {
    onClick
  }
</script>
```
:::
