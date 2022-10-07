<template>
  <div class="layout">
    <Header />
    <section class="main flex">
      <Menu />
      <div class="content f1">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import Menu from '@/components/Menu.vue';
</script>

<style lang="scss">
@import "@/styles/var.scss";
.layout {
  height: 100%;
  background-color: #fdfdfd;
  .main {
    margin: auto;
    height: 100%;
    padding-top: 70px;
    .content {
      padding: 20px;
    }
  }
}
</style>