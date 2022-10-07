<template>
  <header class="header">
     <div class="header-inner">
      <div class="logo">Vue-lib</div>
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
  .header-inner {
    margin: auto;
    line-height: $headerHeight;
    .logo {
      font-size: 32px;
      color: rgb(21, 163, 245);
      padding-left: 40px;
    }
  }
}
</style>