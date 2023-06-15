<template>
  <slot></slot>
</template>
<script lang="ts" setup>
import { useLayoutInfo } from '~/composable/ui/use-layout'
useLayoutInfo()
</script>
