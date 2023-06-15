<template>
  <div :id="localId" class="goods-list-wrap">
    <h3 class="title">{{ title }}</h3>
    <div class="goods-list">
      <Swiper
        :modules="[A11y, FreeMode, Navigation]"
        :free-mode="true"
        :navigation="{ prevEl: `#${localId} .goods-prev-btn`, nextEl: `#${localId} .goods-next-btn` }"
        :breakpoints="{ 0: { slidesPerView: 2.5, spaceBetween: 8 }, 768: { slidesPerView: 6, spaceBetween: 24 } }"
      >
        <SwiperSlide v-for="(item, index) in items" :key="index">
          <router-link to="/">
            <figure class="img">
              <img :src="item.img" :alt="item.name" />
            </figure>
            <div class="goods-wrap">
              <strong class="goods-name">
                {{ item.name }}
              </strong>
              <div class="price-info">
                <div class="origin-price">{{ item.dcPrice }}<span>원</span></div>
              </div>
            </div>
          </router-link>
          <button type="button" class="cart-btn">장바구니 버튼</button>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-btn-wrap" v-if="getOSByUserAgent() === 'desktop'">
        <button type="button" class="goods-prev-btn">이전으로</button>
        <button type="button" class="goods-next-btn">다음으로</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, FreeMode, A11y } from 'swiper'
import { uniqueId } from 'lodash-es'
import { getOSByUserAgent } from '@/utils/device'

export interface Items {
  img: string
  name: string
  originPrice: string
  dcPrice: string
  dcRate: string
  url: string
}
export interface Props {
  title: string
  items: Items[]
}

withDefaults(defineProps<Props>(), {})

const localId = `${uniqueId('__goods-list-')}`
</script>
<style lang="scss" scoped>
@use '~/components/scss/goods-recommend.scss';
</style>
