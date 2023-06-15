<template>
  <Layer
    v-if="isDesktop"
    v-model="state.isShow"
    layer-type="center"
    class="app-down-wrap"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>
      <div class="qr-down-header">
        <h3 class="copy">언제 어디서나 Easy Shopping</h3>
        <h4 class="title">NS홈쇼핑 앱을 다운받아 보세요.</h4>
      </div>
    </template>
    <template #contents>
      <div class="qr-down-inner">
        <div class="qr-down">
          <figure>
            <img src="/images/data/@data-qrcode.png" alt="QR 코드" />
            <figcaption>QR코드 찍고 APP마켓으로 이동하기</figcaption>
          </figure>
        </div>

        <div class="url-send">
          <div class="phone-input-wrap">
            <label for="phoneNumber" class="title">NSmall 다운로드 URL 전송 받기</label>
            <div class="input-text-wrap">
              <input
                type="text"
                placeholder="휴대폰 번호 (‘-’ 없이 입력)"
                name="phone-number"
                id="phoneNumber"
                required
              />
              <div class="btns-wrap">
                <button type="button" class="del-btn">삭제</button>
              </div>
            </div>
          </div>

          <div class="send-btn-wrap">
            <button type="button" class="send-btn disable">보내기</button>
          </div>

          <ul class="notice-list">
            <li>*문자 전송은 무료입니다.</li>
            <li>*수신된 URL로 접속 시 통신사 별 무선데이터료가 발생될 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </template>
  </Layer>
</template>

<script setup lang="ts">
import { Layer } from '@/components/layer'
import { getOSByUserAgent } from '@/utils/device'
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

const isDesktop = getOSByUserAgent() === 'desktop'

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
@use '~/components/scss/layer/p.modal-appdown.scss';
</style>
