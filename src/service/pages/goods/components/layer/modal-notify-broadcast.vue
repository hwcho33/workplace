<template>
  <Layer
    class="modal-notify-wrap broadcast"
    v-model="state.isShow"
    layer-type="bottom"
    @on-close="_callbackClose"
    @on-open="_callbackOpen"
  >
    <template #header>방송 알림 등록</template>
    <template #contents>
      <div class="notify-register-wrap">
        <p class="goods-title"><span>방송 30분 전</span> 방송 예정시간을 알려드립니다.</p>
        <div class="goods-wrap">
          <figure>
            <img src="/images/data/goods/@data-product-photo.jpg" alt="상품" />
          </figure>
          <div class="goods-info">
            <p class="goods-name">{{ items.name }}</p>
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

        <div class="notify-period-wrap">
          <span class="title">알림 횟수</span>
          <label>
            <input type="radio" name="notifyPeriod2" checked />
            <span>1회</span>
          </label>
          <label>
            <input type="radio" name="notifyPeriod2" />
            <span>방송시마다</span>
          </label>
        </div>

        <div class="sms-marketing-wrap">
          <label>
            <input type="checkbox" name="smsMrketing" v-model="state.isAgree" />         
            <span>SMS 마케팅 수신 동의</span>
          </label>
          <!-- cellPhone Number-->
        </div>

        <ul class="bullet-list">
          <li>재입고 알림을 받기 위해서는 수신 동의가 필요합니다.</li>
          <li>동의 시, 회원정보의 SMS 수신 동의 여부가 동일하게 변경됩니다.</li>
          <li>
            NSmall TV LIVE / TV Shop+ 방송 30분 전, 방송 예정 시간을 카카오톡 알림 메시지로 알려드립니다. (카카오톡 수신
            불가 시, 문자로 발송됩니다.)
          </li>
          <li>방송 알림은 방송 편성에 따라 변경될 수 있습니다.</li>
          <li>재방송은 알림에서 제외됩니다.</li>
          <li>오후 8시~다음날 오전 8시 사이의 심야/새벽 방송은 방송 당일 오후 8시에 미리 알려드립니다.</li>
        </ul>
      </div>
    </template>
    <template #bottom>
      <div>
        <button class="register-bt" type="button" @click="_onClickRegister()">등록</button>
      </div>
    </template>
  </Layer>
</template>

<script lang="ts" setup>
import { Layer } from '@/components/layer'
import Toast from '@/components/toast'

export interface Items {
  img: string
  name: string
  originPrice: string
  dcPrice: string
  dcRate: string
  url: string
  id: string
}

export interface Props {
  modelValue: boolean
  items: Items
}

const toastHandler = (content: string, delay: number, position: string) => {
  Toast({ content, delay, position })
}

const props = withDefaults(defineProps<Props>(), {})

const state = reactive({
  isShow: props.modelValue,
  isAgree: true
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
}
const _callbackOpen = () => {}

function _onClickRegister(): void {
  if (!state.isAgree) {
    alert('SMS 마케팅 수신동의를 하셔야 알림을 받으실 수 있습니다.')
  } else {
    toastHandler('방송 알림이 등록되었습니다.', 2000, 'bottom')
    _callbackClose()
  }
}
</script>

<style lang="scss">
@use '~/components/scss/layer/modal-notify-register.scss';
</style>
