<template>
  <!-- 
    [CASE1]: 상세정보 세로 1,000px 미만인 경우 더보기 버튼 비노출
    [CASE2]: 상세정보 세로 1,000px 이상일 경우 700px 까지 노출 + 더보기 버튼 노출
    [D]: 상세정보 세로 1,000px 이상일 경우 ex> class="goods-detail-img-wrap [img-more]"
    [D]: 상품정보 더보기 버튼 영역 추가 <div class="btn-more-wrap"></div>
    [D]: 상품정보 더보기 버튼 클릭 시 ex> class="goods-detail-img-wrap img-more [active]"
    -->
  <div ref="content" class="goods-detail-img-wrap" :class="{ active: state.opendImgMore, 'img-more': state.isImgMore }">
    <!-- 
      <div class="img">
        <img src="/images/data/goods/@data-product-photo.jpg" alt="상품 설명 이미지" />
        <img src="/images/data/goods/@data-goods-detail.jpg" alt="상품 설명 이미지" />
      </div>
    -->
    <div id="screen">
      <div id="img-wrapper" class="img" v-html="contentData"></div>
    </div>
    <div v-if="state.isImgMore" class="btn-more-wrap">
      <button type="button" class="btn-more" @click="_ontoggleImgMore">
        <i>{{ btnMoreText }}</i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { getOSByUserAgent } from '@/utils/device'
import { useCheckLoad, usePinchZoom } from '~/composable/ui/use-image'

export interface Props {
  contentData: string
}

const props = withDefaults(defineProps<Props>(), {})

const { setCheckLoad, removeCheckLoad } = useCheckLoad('.goods-detail-img-wrap img')
const { setPinchZoom, removePinchZoom } = usePinchZoom()
// const isDesktop = getOSByUserAgent() === 'desktop'
const breakpoint = 1000
const content = ref<HTMLElement | null>(null)
const state = reactive({
  contentData: '',
  isImgMore: false,
  opendImgMore: false
})
const btnMoreText = computed(() => (state.opendImgMore ? '상품정보 접기' : '상품정보 더보기'))

/**
 * Desktop 제외 1,000px 체크
 * [CASE1]: 상세정보 세로 1,000px 미만인 경우 더보기 버튼 비노출
 * [CASE2]: 상세정보 세로 1,000px 이상일 경우 700px 까지 노출 + 더보기 버튼 노출
 */
const setImgMoreBt = async () => {
  await nextTick()
  await setCheckLoad()
    .then((data: boolean[]) => {
      console.log('높이값 :', content.value?.clientHeight, 'img load :', data)
      // if (!isDesktop && content.value && content.value.clientHeight > breakpoint) {
      if (content.value && content.value.clientHeight > breakpoint) {
        state.isImgMore = true
      }
    })
    .catch(error => {
      console.log(error)
    })
}
const _ontoggleImgMore = () => {
  state.opendImgMore = !state.opendImgMore
}

watch(
  () => props.contentData,
  async (newItems, oldItems) => {
    if (!oldItems && !newItems) return
    if (newItems) {
      setImgMoreBt()
    }
  },
  { immediate: true }
)
onMounted(() => {
  const screen = document.getElementById('screen') as HTMLElement
  const target = document.getElementById('img-wrapper') as HTMLElement
  const preventArea = document.querySelector('.goods-detail-img-wrap') as HTMLElement
  setPinchZoom(screen, target, preventArea)
})
onUnmounted(() => {
  removeCheckLoad()
  removePinchZoom()
})
</script>

<style lang="scss" scoped>
.goods-detail-img-wrap {
  #screen {
    overflow: hidden;
  }
  #img-wrapper {
    overflow: hidden;
  }
}
</style>
