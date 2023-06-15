<template>
  <Layer
    class="modal-detail-view-wrap"
    v-model="state.isShow"
    layer-type="full"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>상세 이미지</template>
    <template #contents>
      <div class="detail-view-wrap">
        <div class="detail-view-swiper">
          <Swiper
            :modules="[A11y, Zoom, Thumbs, Navigation]"
            :zoom="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :navigation="{ prevEl: '.btn-prev', nextEl: '.btn-next' }"
          >
            <SwiperSlide>
              <div class="swiper-zoom-container">
                <img src="/images/data/goods/@data-product-photo.jpg" alt="상품이미지 설명1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-zoom-container">
                <img src="//product-image.prod-nsmall.com/itemimg/7/31/637/31367637_V.jpg" alt="상품이미지 설명2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-zoom-container">
                <img src="//product-image.prod-nsmall.com/itemimg/2/31/562/31326562_V.jpg" alt="상품이미지 설명3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-zoom-container">
                <img src="//product-image.prod-nsmall.com/itemimg/2/31/642/31367642_V.jpg" alt="상품이미지 설명4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-zoom-container">
                <img src="//product-image.prod-nsmall.com/itemimg/9/31/639/31367639_V.jpg" alt="상품이미지 설명5" />
              </div>
            </SwiperSlide>
          </Swiper>
          <button class="btn-prev">이전으로</button>
          <button class="btn-next">다음으로</button>
        </div>

        <div class="detail-add-swiper">
          <Swiper
            @swiper="setThumbsSwiper"
            :modules="[A11y, FreeMode, Thumbs]"
            :space-between="8"
            :slides-per-view="5"
            :freeMode="true"
            :watchSlidesProgress="true"
          >
            <SwiperSlide>
              <a href="javascript:void(0)" class="btn">
                <img src="/images/data/goods/@data-product-photo.jpg" alt="상품이미지 썸네일1" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="javascript:void(0)" class="btn">
                <img src="//product-image.prod-nsmall.com/itemimg/7/31/637/31367637_Q.jpg" alt="상품이미지 썸네일2" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="javascript:void(0)" class="btn">
                <img src="//product-image.prod-nsmall.com/itemimg/2/31/562/31326562_Q.jpg" alt="상품이미지 썸네일3" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="javascript:void(0)" class="btn">
                <img src="//product-image.prod-nsmall.com/itemimg/2/31/642/31367642_Q.jpg" alt="상품이미지 썸네일4" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="javascript:void(0)" class="btn">
                <img src="//product-image.prod-nsmall.com/itemimg/9/31/639/31367639_Q.jpg" alt="상품이미지 썸네일5" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </template>
  </Layer>
</template>

<script lang="ts" setup>
import { Layer } from '@/components/layer'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Zoom, FreeMode, Thumbs, Navigation } from 'swiper'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css/zoom'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'

export interface Props {
  modelValue: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const thumbsSwiper = ref<SwiperType | null>(null)

const state = reactive({
  isShow: props.modelValue
})

const emit = defineEmits<{
  (event: 'update:modelValue', result: boolean): void
}>()

watch(
  () => props.modelValue,
  newItems => {
    if (newItems) {
      state.isShow = true
    } else {
      state.isShow = false
    }
  },
  { immediate: true }
)

const setThumbsSwiper = (swiper: SwiperType) => {
  thumbsSwiper.value = swiper
}

const resetThumbsSwiper = () => {
  thumbsSwiper.value?.destroy()
  thumbsSwiper.value = null
}

const _callbackClose = () => {
  emit('update:modelValue', false)
  resetThumbsSwiper()
  console.log('레이어 닫기 콜백')
}
const _callbackOpen = () => {
  console.log('레이어 열기 콜백')
}

onUnmounted(() => {
  resetThumbsSwiper()
})
</script>

<style lang="scss">
@use '~/pages/goods/scss/layer/modal-detail-view';
</style>
