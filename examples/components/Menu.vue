<template>
  <ul class="menu">
    <li @click="onSwitch(item.path)" :class="['menu-item', route.path === item.path ? 'menu-item--active' : '']" :key="item.path" v-for="item in menus">
      <a :href="'#' + item.path">{{item?.title}}</a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import menus from '@/router/menu.js'
import { computed, watch } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter()
const onSwitch = (path: string) => {
  router.push(path);
}
</script>

<style lang="scss">
.menu {
  width: 220px;
  position: relative;
  box-shadow: 2px 0 2px #eee;
  padding: 40px 0;
  .menu-item {
    line-height: 40px;
    padding-left: 40px;
    padding-right: 10px;
    margin: 4px 0;
    font-size: 14px;
    cursor: pointer;
    position: relative;
    &.menu-item--active {
      background-color: rgba(175, 236, 255, 0.4);
      color: #00b7ff;
      &::after {
        position: absolute;
        right: 0; top: 0;
        display: block;
        width: 2px; height: 40px;
        background-color: rgb(0, 89, 255);
      }
    }
  }
}
</style>