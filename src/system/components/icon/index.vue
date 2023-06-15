<template>
  <div :class="props.class">
    <img class="icon-img" :alt="props.name" :src="path" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
  class?: string
}>()

const path = computed(() => `/images/icons/${props.name}.png`)
</script>

<style lang="scss" scoped>
:root {
  --ns-icon-display: block;
  --ns-icon-margin: 0 10px 0 16px;
  --ns-icon-size: 18px;
  --ns-icon-color: currentcolor;
  --ns-icon-stroke: 1.75;
}

.icon-img {
  display: var(--ns-icon-display, unset);
  margin: var(--ns-icon-margin, unset);
  width: var(--ns-icon-size, 1em);
  height: var(--ns-icon-size, 1em);
  stroke-width: var(--ns-icon-stroke, 2);
  color: var(--ns-icon-color, currentColor);
}
</style>
