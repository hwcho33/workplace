<template>
  <div class="goods-detail-wrap">
    <!-- 재생중인 상품 -->
    <!-- isShowPlaying: true로 변경시 확인가능 -->
    <div class="goods-playing-wrap" v-if="isShowPlaying">
      <div class="goods-playing-inner">
        <div class="goods-wrap">
          <figure>
            <img src="/images/data/goods/@data-product-photo.jpg" alt="재생중인 상품" />
          </figure>
          <div class="goods-info">
            <div class="play-time-wrap">
              <ul class="live-wrap">
                <li class="real">방송중</li>
                <li class="real">TV LIVE</li>
              </ul>
              <span class="play-time">00:00:22</span>
            </div>
            <strong class="goods-name">삼성 비스포크 직화오븐 스마트쿡 삼성 비스포크 직화오븐 스마트쿡</strong>
          </div>
        </div>
        <div class="play-progress-wrap">
          <progress value="20" max="100">20%</progress>
        </div>
        <button type="button" class="btn-close">
          <span class="blind">닫기</span>
        </button>
      </div>
    </div>

    <div class="goods-info-wrap">
      <DetailImg />
      <DetailInfo :items="state.items" />
    </div>

    <div class="goods-onair-wrap">
      <GoodsRecommend title="방송중인 상품의 연관상품" :items="goodsList" />
    </div>

    <div class="banner-swiper detail-banner">
      <Swiper
        :modules="[Pagination, Autoplay, A11y]"
        :pagination="{ el: '.banner-pagination-02', type: 'fraction' }"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
      >
        <!-- [D]: SwiperSlide 영역 배너 이미지 bg color 추가 필요 ex> style="background-color: [#57cad1]" -->
        <SwiperSlide style="background-color: #7b9aec">
          <router-link to="/publishing/goods/detail/">
            <img src="/images/data/goods/@banner-sample-02.jpg" alt="배너 이미지" />
          </router-link>
        </SwiperSlide>
        <SwiperSlide style="background-color: #57cad1">
          <router-link to="/publishing/goods/detail/">
            <img src="/images/data/goods/@banner-sample-01.jpg" alt="배너 이미지" />
          </router-link>
        </SwiperSlide>
        <SwiperSlide style="background-color: #7b9aec">
          <router-link to="/publishing/goods/detail/">
            <img src="/images/data/goods/@banner-sample-02.jpg" alt="배너 이미지" />
          </router-link>
        </SwiperSlide>
        <SwiperSlide style="background-color: #57cad1">
          <router-link to="/publishing/goods/detail/">
            <img src="/images/data/goods/@banner-sample-01.jpg" alt="배너 이미지" />
          </router-link>
        </SwiperSlide>
      </Swiper>
      <div class="banner-pagination-wrap">
        <div class="banner-pagination-02"></div>
        <button type="button" class="btn-all">
          <span class="blind">배너 전체보기</span>
        </button>
      </div>
    </div>

    <DetailTab />

    <div class="goods-push-wrap">
      <div class="goods-onair-wrap">
        <GoodsRecommend title="다른 고객이 함께 본 상품" :items="goodsList" />
        <GoodsRecommend title="다른 고객이 함께 구매한 상품" :items="goodsList" />
        <GoodsRecommend title="다른 고객이 함께 구매한 인기상품" :items="goodsList" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, A11y } from 'swiper'
// import { getOSByUserAgent } from '@/utils/device'
import { request } from '@/utils/request'
import DetailTab from './detail-tab.vue'
import DetailInfo from './detail-info.vue'
import DetailImg from './components/detail-img.vue'
import GoodsRecommend from './components/goods-recommend.vue'

interface ListInfo {
  img: string
  name: string
  originPrice: string
  dcPrice: string
  dcRate: string
  url: string
  id: string
}

interface Reactive {
  items: {
    img: string
    name: string
    originPrice: string
    dcPrice: string
    dcRate: string
    url: string
    id: string
  }
}

const goodsList: Ref<ListInfo[]> = ref<any>([])
// const isDesktop = getOSByUserAgent() === 'desktop'
const isShowPlaying = ref(false)
const state = reactive<Reactive>({
  items: {
    img: 'http://k.kakaocdn.net/dn/dScJiJ/btqB3cwK1Hi/pv5qHVwetz5RZfPZR3C5K1/kakaolink40_original.png',
    name: '전인화의 쿡셀 더블 블랙큐브 프라이팬X3+가마솥세트(16cm+22cm)+뚜껑X3+28양수구이+바이마르 블랙빈자기14P+거치대+손잡이X2+귀리',
    originPrice: '199,900',
    dcPrice: '199,900',
    dcRate: '0',
    url: '/',
    id: '00000006'
  }
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

<style lang="scss">
@use '~/pages/goods/scss/goods.scss';
</style>
