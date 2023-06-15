<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- description -->
      <Description />
      <!--// description -->

      <div style="position: relative"></div>
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'ContentsTest'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import Description from './index.md'
const { addIter, checkMapId } = useMapId()

// id
const id = 'template'
addIter({
  category: '기본 템플릿',
  id
})
</script>
<style lang="scss" scoped></style>
