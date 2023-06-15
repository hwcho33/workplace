<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- description -->
      <Description />
      <!--// description -->
      <!-- components -->
      <Pagination />
      <!-- // components -->
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'ComponentsLayer'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import Description from './index.md'
import { Pagination } from '@/components/pagination'
const { addIter, checkMapId } = useMapId()

// id
const id = 'system/pagination'
addIter({
  category: 'components',
  id
})
</script>
<style lang="scss" scoped></style>
