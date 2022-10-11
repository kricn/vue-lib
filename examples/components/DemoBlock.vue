<template>
  <div
    class="demo-block"
    :class="[blockClass, { hover: hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" ref="meta">
      <div class="description" ref="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight" ref="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div
      class="demo-block-control"
      ref="control"
      :class="{ 'is-fixed': fixedControl }"
      @click="isExpanded = !isExpanded">
      <transition>
        <i :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span :class="[{ 'hovering': hovering }]">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref, useSlots, watch } from "vue";
import { useRoute } from 'vue-router';
export default defineComponent({
  name: "DemoBlock"
});
</script>
<script lang="ts" setup>
const route = useRoute()
const slots = useSlots()

const meta = ref<null | HTMLDivElement>(null);
const control = ref<null | HTMLDivElement>(null);
const highlight = ref<null | HTMLDivElement>(null);
const description = ref<null | HTMLDivElement>(null);
const hovering = ref<boolean>(false);
const isExpanded = ref<boolean>(false);
const fixedControl = ref<boolean>(false);
const scrollParent = ref<null | HTMLDivElement>(null);

const blockClass = computed(() => `demo-${ route.path.split('/').pop() }`);
const iconClass = computed(() => isExpanded.value ? 'k-icon-caret-top' : 'k-icon-caret-bottom');
const controlText = computed(() => isExpanded.value ? '隐藏代码' : '显示代码');
const codeAreaHeight = computed(() => {
  if (description.value) {
    return description.value.clientHeight +
      (highlight.value?.clientHeight || 0) + 20;
  }
  return highlight.value?.clientHeight || 0;
})

watch(isExpanded, val => {
  if (meta.value) {
    meta.value.style.height = val ? `${ codeAreaHeight.value + 1 }px` : '0';
  }
  if (!val) {
    fixedControl.value = false;
    control.value && (control.value.style.left = '0');
    removeScrollHandler();
    return;
  }
  setTimeout(() => {
    scrollParent.value = document.querySelector('.page-component__scroll > .el-scrollbar__wrap');
    scrollParent.value && scrollParent.value.addEventListener('scroll', scrollHandler);
    scrollHandler();
  }, 200);
})

const scrollHandler = () => {
  const metaInfo = meta?.value?.getBoundingClientRect();
  const top = metaInfo!.top;
  const left = metaInfo!.left;
  const bottom = metaInfo!.bottom;
  fixedControl.value = bottom > document.documentElement.clientHeight &&
    top + 44 <= document.documentElement.clientHeight;
  control.value!.style.left = fixedControl.value ? `${ left }px` : '0';
}

const removeScrollHandler = () => {
  scrollParent.value && scrollParent.value?.removeEventListener('scroll', scrollHandler);
}

onMounted(() => {
  nextTick(() => {
    if (description.value) {
      highlight.value!.style.width = '100%';
      highlight.value!.style.borderRight = 'none';
    }
  })
  return () => {
    removeScrollHandler()
  }
})


</script>
<style lang="scss">
.demo-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }

  .demo-button {
    float: right;
  }

  .source {
    padding: 24px;
  }

  .meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }

  .description {
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;

    p {
      margin: 0;
      line-height: 26px;
    }

    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }

  .highlight {
    pre {
      margin: 0;
    }

    code.hljs {
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;

      &::before {
        content: none;
      }
    }
  }

  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      transform: translateX(10px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
      opacity: 0;
      &.hovering {
        transform: translateX(-30px);
        opacity: 1;
      }
    }

    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}
</style>
