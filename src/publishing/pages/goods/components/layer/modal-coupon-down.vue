<template>
  <Layer class="modal-coupon-down-wrap" v-model="state.isShow" @onClose="_callbackClose" @onOpen="_callbackOpen">
    <template #header>쿠폰받기</template>
    <template #contents>
      <div class="coupon-down-wrap">
        <p class="sub-title">
          이 상품에서 사용가능한 쿠폰입니다.<br />
          다운로드 받은 쿠폰은 구매 시에 사용해 주세요.
        </p>
        <ul class="coupon-down-list">
          <li class="disabled">
            <button type="button" class="btn-coupon">
              <div class="coupon-wrap">
                <span class="dc-rate">25<em>%</em></span>
                <span class="coupon-name">패밀리 TV상품 25% 할인 쿠폰</span>
                <div class="date-wrap">
                  <span class="date">~2023.04.30</span>
                  <span class="expiry-date">10일 남음</span>
                  <span class="coupon-option">50,000원 이상 구매 시 최대 10,000원</span>
                </div>
              </div>
            </button>
          </li>
          <li>
            <button type="button" class="btn-coupon">
              <div class="coupon-wrap">
                <span class="dc-price">2,000<em>원</em></span>
                <span class="coupon-name">패밀리 TV쇼핑,TV상품 2,000원 할인 다운로드 쿠폰</span>
                <div class="date-wrap">
                  <span class="date">~2023.04.30</span>
                  <span class="expiry-date">10일 남음</span>
                  <span class="coupon-option">20,000원 이상 구매 시 최대 2,000원</span>
                </div>
              </div>
            </button>
          </li>
          <li>
            <button type="button" class="btn-coupon">
              <div class="coupon-wrap">
                <span class="dc-price">10,000<em>원</em></span>
                <span class="coupon-name">추가 10,000원 할인 다운로드 쿠폰</span>
                <div class="date-wrap">
                  <span class="date">~2023.04.30</span>
                  <span class="expiry-date">10일 남음</span>
                  <span class="coupon-option">50,000원 이상 구매 시 최대 10,000원</span>
                </div>
              </div>
            </button>
          </li>
          <li>
            <button type="button" class="btn-coupon">
              <div class="coupon-wrap">
                <span class="dc-price">10,000<em>원</em></span>
                <span class="coupon-name">추가 10,000원 할인 다운로드 쿠폰</span>
                <div class="date-wrap">
                  <span class="date">~2023.04.30</span>
                  <span class="expiry-date">10일 남음</span>
                  <span class="coupon-option">50,000원 이상 구매 시 최대 10,000원</span>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </template>
    <template #bottom>
      <button class="coupon-all-bt" type="button">쿠폰 전체 받기</button>
    </template>
  </Layer>
</template>

<script lang="ts" setup>
import { Layer } from '@/components/layer'
export interface Props {
  modelValue: boolean
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
</script>

<style lang="scss">
@use '~/pages/goods/scss/layer/modal-coupon-down';
</style>
