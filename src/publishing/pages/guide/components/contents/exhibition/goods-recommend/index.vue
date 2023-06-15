<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- description -->
      <Description />
      <!--// description -->

      <div style="position: relative">
        <GoodsRecommend title="함께 구매하면 좋은 상품" :items="goodsList" />
      </div>
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'ContentsGoodsRecommend'
}
</script>
<script lang="ts" setup>
import { request } from '@/utils/request'
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import Description from './index.md'
import GoodsRecommend from '&/components/goods-recommend.vue'

interface ListInfo {
  img: string
  name: string
  originPrice: string
  dcPrice: string
  dcRate: string
  url: string
}

const { addIter, checkMapId } = useMapId()
let goodsList: Ref<ListInfo[]> = ref<any>([])

// id
const id = 'goods-recommend'
addIter({
  category: 'exhibition template',
  id
})

onMounted(() => {
  request
    .post({
      url: '/test***/goodsList'
    })
    .then(res => {
      goodsList.value = res.data
    })
})
</script>
<style lang="scss" scoped></style>
