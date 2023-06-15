<template>
  <Layer
    class="modal-dawn-delivery-wrap"
    v-model="state.isShow"
    layer-type="full"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>NSmall 새벽배송 지역</template>
    <template #contents>
      <div class="dawn-delivery-wrap">
        <div class="dawn-info-wrap">
          <div class="title-wrap">
            <span class="sub-title">지금 주문하고 새벽에 받으세요!</span>
            <h3 class="title">새벽배송 오픈</h3>
            <span class="sub-text">씽씽배송 전상품 무료배송!</span>
          </div>
          <p class="time-text">밤 10시까지 주문하면 내일 도착!</p>
        </div>

        <div class="dawn-detail-wrap">
          <div class="title-wrap">
            <h3 class="title">
              씽씽배송이란? <span class="label-sing"><i>씽씽배송</i></span>
            </h3>
            <p class="sub-text">
              보시던 상품에 씽씽배송 마크가 있다면 새벽배송 및 내일도착이 가능한 씽씽배송 상품입니다!
            </p>
          </div>

          <ul class="dawn-detail-list">
            <li class="icon-dawn">
              <span class="title">새벽도착</span>
              <p class="sub-title">수도권, 천안, 아산</p>
              <p class="sub-text">오늘 밤 10시 전 주문 내일 아침 07시 전 도착</p>
              <p class="etc-text">일부지역 제외 (섬/공단/학교/학교기숙사/병원/관공서는 배송불가)</p>
            </li>
            <li class="icon-delivery">
              <span class="title">내일도착</span>
              <p class="sub-title">전 지역 배송</p>
              <p class="sub-text">오늘 밤 10시 전 주문 내일 도착</p>
              <p class="etc-text">월요일 ~ 토요일 (일요일 및 공휴일 제외)</p>
            </li>
          </ul>

          <div class="dawn-detail-notice-wrap">
            <strong class="title">새벽배송 유의사항</strong>
            <ul class="dawn-detail-notice-list">
              <li class="icon-notice01">
                <p>공동현관에 출입번호가 있으면 정확히 입력해 주세요.</p>
              </li>
              <li class="icon-notice02">
                <p>
                  주문/결제 화면에서 <span>새벽배송 가능지역으로 배송지를 선택</span>하면 새벽배송으로 주문 가능합니다.
                </p>
              </li>
              <li class="icon-notice03">
                <p>새벽에 받고싶지 않을 경우 주문/결제 화면에서 ‘새벽배송으로 받지않기’를 선택 후 결제해주세요.</p>
              </li>
            </ul>
          </div>

          <p class="msg-warning is-warning">새벽배송 서비스 불가 지역은 일반 택배사를 통해 다음날까지 배송됩니다.</p>
        </div>
      </div>
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
@use '~/pages/goods/scss/layer/modal-dawn-delivery';
</style>
