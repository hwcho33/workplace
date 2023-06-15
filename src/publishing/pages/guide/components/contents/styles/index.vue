<template>
  <Typography />
  <Colors />
  <Utils />
  <Annotation />
  <!-- 하단에 추가 -->
</template>
<script lang="ts">
export default {
  name: 'StylesCategory'
}
</script>
<script lang="ts" setup>
import Typography from '&/pages/guide/components/contents/styles/typography/index.vue'
import Colors from '&/pages/guide/components/contents/styles/colors/index.vue'
import Utils from '&/pages/guide/components/contents/styles/utils/index.vue'
import Annotation from '&/pages/guide/components/contents/styles/annotation/index.vue'
</script>
<style lang="scss" scoped></style>
