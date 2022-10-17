<template>
  <header class="header">
     <div class="header-inner fbetween">
      <div class="logo">Vue-lib</div>
      <div class="right">
        <a href="https://github.com/kricn/vue-lib" target="_blank">github仓库</a>
      </div>
     </div>
  </header>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
@import '@/styles/var.scss';
.header {
  width: 100%;
  height: $headerHeight;
  position: fixed;
  top: 0; left: 0;
  box-shadow: 0 2px 2px #eee;
  background-color: #fff;
  .header-inner {
    margin: auto;
    line-height: $headerHeight;
    padding: 0 40px;
    .logo {
      font-size: 32px;
      color: rgb(21, 163, 245);
    }
  }
}
</style>