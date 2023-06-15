<template>
  <svg xmlns="http://www.w3.org/2000/svg" :data-src="icon">
    <use :xlink:href="path" />
  </svg>
</template>

<script lang="ts" setup>
import { iconNames } from './index'
const props = defineProps<{
  src: string
}>()

const icon = computed(() => (iconNames.indexOf(props.src) > -1 ? props.src : 'x'))

const path = computed(() => `/images/feather-icons/${icon.value}.svg#icon_${icon.value}`)
</script>

<style lang="scss" scoped>
:root {
  --icon-display: block;
  --icon-margin: 0 10px 0 16px;
  --icon-size: 18px;
  --icon-color: currentcolor;
  --icon-stroke: 1.75;
}

svg {
  display: var(--icon-display, unset);
  margin: var(--icon-margin, unset);
  width: var(--icon-size, 1em);
  height: var(--icon-size, 1em);
  stroke-width: var(--icon-stroke, 2);
  color: var(--icon-color, currentColor);
}
</style>
