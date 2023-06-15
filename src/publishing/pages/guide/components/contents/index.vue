<template>
  <div class="contents-main-wrap">
    <Styles />
    <Components />
    <Exhibition />
    <Library />
    <Store />
    <Templates />
  </div>
</template>
<script lang="ts">
export default {
  name: 'ContentsMain'
}
</script>
<script lang="ts" setup>
import Styles from '&/pages/guide/components/contents/styles/index.vue'
import Components from '&/pages/guide/components/contents/components/index.vue'
import Library from '&/pages/guide/components/contents/library/index.vue'
import Exhibition from '&/pages/guide/components/contents/exhibition/index.vue'
import Store from '&/pages/guide/components/contents/store/index.vue'
import Templates from '&/pages/guide/components/contents/templates/index.vue'
</script>
<style lang="scss" scoped>
.contents-main-wrap {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 40px;
  transition: all 0.5s;
}
</style>
