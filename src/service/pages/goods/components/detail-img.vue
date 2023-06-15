<template>
  <div class="goods-detail-img">
    <div class="img-info">
      <div class="img-swiper">
        <!-- mobile -->
        <Swiper v-if="!isDesktop" :modules="[Pagination, A11y]" :pagination="isPagination">
          <SwiperSlide v-for="(item, index) in state.detailItems" :key="index">
            <div v-if="item.isVideo" class="item is-video">
              <img :src="item.src" :alt="item.title" />
              <button v-if="!state.isShow" type="button" class="btn-play" @click="_onOpenVideo(item.videoSrc)">
                play
              </button>
            </div>
            <button type="button" v-else class="item">
              <img :src="item.src" :alt="item.title" />
            </button>
          </SwiperSlide>
        </Swiper>

        <!-- desktop -->
        <Swiper v-else :modules="[Thumbs, A11y]" :thumbs="{ swiper: thumbsSwiper }">
          <SwiperSlide v-for="(item, index) in state.detailItems" :key="index">
            <div v-if="item.isVideo" class="item is-video">
              <img :src="item.src" :alt="item.title" />
              <button v-if="!state.isShow" type="button" class="btn-play" @click="_onOpenVideo(item.videoSrc)">
                play
              </button>
            </div>
            <button type="button" v-else class="item">
              <img :src="item.src" :alt="item.title" />
            </button>
          </SwiperSlide>
        </Swiper>

        <!-- mobile -->
        <div v-if="!isDesktop" class="pagination"></div>
      </div>

      <Videos :src="state.videoSrc" v-model="state.isShow" :isVideoOpen="isVideoOpen" />
    </div>

    <!-- desktop -->
    <div class="detail-add-swiper" v-if="isDesktop">
      <Swiper
        @swiper="setThumbsSwiper"
        :modules="[A11y, Thumbs]"
        :space-between="8"
        :slides-per-view="5"
        :watchSlidesProgress="true"
      >
        <SwiperSlide v-for="(item, index) in state.detailItems" :key="index">
          <button type="button" class="item">
            <img :src="item.src" :alt="item.title" />
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, A11y, Thumbs } from 'swiper'
import { getOSByUserAgent } from '@/utils/device'
import type { Swiper as SwiperType } from 'swiper'
import type { PaginationOptions } from 'swiper/types'
import Videos from '&/pages/goods/components/videos.vue'
import 'swiper/css/thumbs'

const isDesktop = getOSByUserAgent() === 'desktop'
const thumbsSwiper = ref<SwiperType | null>(null)
const state = reactive({
  isShow: false,
  isVideoOpen: false,
  videoSrc: '',
  detailItems: [
    {
      src: '/images/data/goods/@data-product-photo.jpg',
      title: '상품이미지 설명1',
      videoSrc: '//vjs.zencdn.net/v/oceans.mp4',
      isVideo: true
    },
    {
      src: '//product-image.prod-nsmall.com/itemimg/7/31/637/31367637_Q.jpg',
      title: '상품이미지 설명2',
      videoSrc: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4',
      isVideo: true
    },
    { src: '//product-image.prod-nsmall.com/itemimg/2/31/562/31326562_Q.jpg', title: '상품이미지 설명3' },
    { src: '//product-image.prod-nsmall.com/itemimg/2/31/642/31367642_Q.jpg', title: '상품이미지 설명4' },
    { src: '//product-image.prod-nsmall.com/itemimg/9/31/639/31367639_Q.jpg', title: '상품이미지 설명5' }
  ]
})
const isVideoOpen = isDesktop ? true : false
const isPagination: PaginationOptions | boolean =
  state.detailItems.length > 1 ? { el: '.img-swiper .pagination', type: 'fraction' } : false

const setThumbsSwiper = (swiper: SwiperType) => {
  thumbsSwiper.value = swiper
}

const resetThumbsSwiper = () => {
  thumbsSwiper.value?.destroy()
  thumbsSwiper.value = null
}

const _onOpenVideo = (src: string) => {
  state.isShow = true
  state.videoSrc = src
}

onUnmounted(() => {
  resetThumbsSwiper()
})
</script>
<style lang="scss" scoped>
@use '~/pages/goods/scss/detail-img.scss';
</style>
