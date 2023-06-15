<template>
  <Layer
    v-model="state.isShow"
    layer-type="bottom"
    class="goods-cart-popup"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #contents>
      <div class="goods-cart-wrap">
        <figure class="img-wrap">
          <img src="/images/data/order/@data-product-03.jpg" alt="장바구니 상품" />
        </figure>
        <!-- <p class="text">장바구니에 상품을 담았습니다.</p> -->
        <p class="text">이미 장바구니에 담은 상품이 있어 수량이 추가되었습니다.</p>
      </div>

      <div class="goods-list-wrap">
        <h3 class="title">다른 고객님이 함께 구매한 상품</h3>

        <div class="goods-list">
          <Swiper
            :modules="[A11y, FreeMode, Navigation]"
            :free-mode="true"
            :navigation="{ prevEl: '.goods-prev-btn', nextEl: '.goods-next-btn' }"
            :breakpoints="{
              0: { slidesPerView: 2.5, spaceBetween: 8, slidesOffsetBefore: 16, slidesOffsetAfter: 16 },
              768: { slidesPerView: 4, spaceBetween: 16, slidesOffsetBefore: 16, slidesOffsetAfter: 16 }
            }"
          >
            <SwiperSlide v-for="(item, index) in goodsList" :key="index">
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
            </SwiperSlide>
          </Swiper>

          <div class="swiper-btn-wrap" v-if="getOSByUserAgent() === 'desktop'">
            <button class="goods-prev-btn">이전으로</button>
            <button class="goods-next-btn">다음으로</button>
          </div>
        </div>
      </div>
    </template>
    <template #bottom>
      <div class="btn-wrap">
        <button class="close-btn" type="button" @click="_callbackClose">계속 쇼핑하기</button>
        <router-link to="/" class="cart-link">장바구니 보러가기</router-link>
      </div>
    </template>
  </Layer>
</template>

<script setup lang="ts">
import { request } from '@/utils/request'
import { Layer } from '@/components/layer'
import { getOSByUserAgent } from '@/utils/device'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, FreeMode, A11y } from 'swiper'
export interface Props {
  modelValue: boolean
}
interface ListInfo {
  img: string
  name: string
  originPrice: string
  dcPrice: string
  dcRate: string
  url: string
}

const props = withDefaults(defineProps<Props>(), {})

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
const _callbackClose = () => {
  emit('update:modelValue', false)
  console.log('레이어 닫기 콜백')
}
const _callbackOpen = () => {
  console.log('레이어 열기 콜백')
}

let goodsList: Ref<ListInfo[]> = ref<any>([])

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
@use '~/pages/goods/scss/layer/modal-detail-cart';
</style>
