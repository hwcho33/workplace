<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- description -->
      <Description />
      <!--// description -->
      <h3>&#x1F4DD; Regular 400</h3>
      <TypographyItem :font-size="400" />
      <br />
      <h3>&#x1F4DD; Medium 500</h3>
      <TypographyItem :font-size="500" />
      <br />
      <h3>&#x1F4DD; Bold 700</h3>
      <TypographyItem :font-size="700" />
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'StylesTypography'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import TypographyItem from './typography-item.vue'
import useMapId from '&/pages/guide/use-map-id'
import Description from './index.md'

const { addIter, checkMapId } = useMapId()

// id
const id = 'typography'
addIter({
  category: 'styles',
  id
})
</script>
<style lang="scss" scoped></style>
