<template>
  <ul class="pagination-wrap">
    <li class="page-item">
      <button type="button" class="prev-btn" disabled>
        <span class="blind">이전으로</span>
      </button>
    </li>
    <li class="page-item">
      <button type="button" class="active">1</button>
    </li>
    <li class="page-item">
      <button type="button">2</button>
    </li>
    <li class="page-item">
      <button type="button">3</button>
    </li>
    <li class="page-item">
      <button type="button">4</button>
    </li>
    <li class="page-item">
      <button type="button">5</button>
    </li>
    <li class="page-item">
      <button type="button" class="next-btn">
        <span class="blind">다음으로</span>
      </button>
    </li>
  </ul>
</template>
<script lang="ts">
export default {
  name: 'Pagination'
}
</script>
<script lang="ts" setup>
/*
export interface Props {}
const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<{}>()
*/
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
