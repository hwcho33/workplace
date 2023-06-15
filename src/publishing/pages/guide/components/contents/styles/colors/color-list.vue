<template>
  <ul class="color-list-wrap">
    <li v-for="(item, index) in items" :key="index">
      <ColorListItem :variable-name="item.variableName" :hex-color-code="item.hexColorCode" :title="item.title" />
    </li>
  </ul>
</template>
<script lang="ts">
export default {
  name: 'StylesColorList'
}
</script>
<script lang="ts" setup>
import ColorListItem from './color-list-item.vue'
export interface Items {
  title: string
  variableName: string
  hexColorCode: string
}
export interface Props {
  items: Items[]
}
withDefaults(defineProps<Props>(), {
  items: () => [] as Items[]
})
</script>
<style lang="scss" scoped>
.color-list-wrap {
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  > li {
    list-style: none;
    display: inline-flex;
    width: 33.333%;
    margin-bottom: 15px;
  }
}
</style>
