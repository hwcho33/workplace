<template>
  <Layer
    class="modal-notify-wrap restock"
    v-model="state.isShow"
    layer-type="bottom"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>재입고 알림 등록</template>
    <template #contents>
      <div class="notify-register-wrap">
        <p class="goods-title">상품이 <span>재입고</span> 될 경우 안내드립니다.</p>
        <div class="goods-wrap">
          <figure>
            <img src="/images/data/goods/@data-product-photo.jpg" alt="재입고 상품" />
          </figure>
          <div class="goods-info">
            <p class="goods-name">[에그파파] 에그파파 국내산 생닭 냉장 닭가슴살 5kg(1kgX5팩)</p>
          </div>
        </div>

        <div class="notify-period-wrap">
          <span class="title">알림기간</span>
          <label>
            <input type="radio" name="notifyPeriod" checked />
            <span>1개월</span>
          </label>
          <label>
            <input type="radio" name="notifyPeriod" />
            <span>2개월</span>
          </label>
          <label>
            <input type="radio" name="notifyPeriod" />
            <span>3개월</span>
          </label>
        </div>

        <div class="sms-marketing-wrap">
          <label>
            <input type="checkbox" name="smsMrketing" checked />
            <span>SMS 마케팅 수신 동의</span>
          </label>
        </div>

        <ul class="bullet-list">
          <li>
            품절상품이 재입고 될 경우 카카오톡 알림 메시지로 알려드립니다. (카카오톡 수신 불가 시, 문자로 발송됩니다.)
          </li>
          <li>재입고 알림 수신 후 인기상품의 경우 조기품절 될 수 있습니다.</li>
          <li>재입고 알림은 1회 발송되며, 다시 알림을 받고 싶으신 경우 재신청 하실 수 있습니다.</li>
          <li>신청일 기준 3개월이 지난 신청내역은 자동 삭제됩니다.</li>
          <li>
            오전 8시~오후 8시 사이에 알림이 발송되며 오후 8시~익일 오전 8시 사이의 알림은 익일 오전 8시에 일괄
            발송됩니다.
          </li>
          <li>재입고 알림은 최대 20개까지 등록 가능합니다.</li>
        </ul>
      </div>
    </template>
    <template #bottom>
      <div>
        <button
          class="register-bt"
          type="button"
          @click="toastHandler('재입고 알림이 등록되었습니다.', 2000, 'bottom')"
        >
          등록
        </button>
      </div>
    </template>
  </Layer>
</template>

<script lang="ts" setup>
import { Layer } from '@/components/layer'
import Toast from '@/components/toast'

const toastHandler = (content: string, delay: number, position: string) => {
  Toast({ content, delay, position })
}
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
@use '~/components/scss/layer/modal-notify-register.scss';
</style>
