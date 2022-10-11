<template>
  <i :class="'k-icon-' + name"></i>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    default: '',
  }
})
</script>
<script>
export default {
  name: "KIcon"
}
</script>