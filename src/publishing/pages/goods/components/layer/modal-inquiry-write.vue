<template>
  <Layer
    class="modal-inquiry-write-wrap"
    v-model="state.isShow"
    layer-type="full"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>상품 문의하기</template>
    <template #contents>
      <div class="inquiry-write-wrap">
        <div class="inquiry-info">
          <p class="info-text">삼성 BESPOKE 직화오븐 <br />MC35A8599LU (35L/글램그리너리)</p>
        </div>

        <div class="inquiry">
          <div class="textarea">
            <textarea
              title="@대체텍스트"
              class="imsi"
              cols="35"
              rows="5"
              placeholder="문의 내용을 입력해 주세요.&#10;개인정보가 들어가지 않도록 주의해 주세요.&#10;(최대200자)"
            ></textarea>
            <span class="util">
              <!-- [D]:내용이 입력되는순간 ex> class="count" -->
              <!-- <em class="count">1</em> -->
              <em>0</em>
              / 200
            </span>
          </div>
          <div class="inquiry-option-select">
            <label for="sms"><input id="sms" name="inquiry-option" type="checkbox" value />SMS 답변알림 받기</label>
            <label for="private"><input id="private" name="inquiry-option" type="checkbox" value />비공개</label>
          </div>
          <button type="button" class="inquiry-btn disable" disable>문의하기</button>
          <ul class="inquiry-bullet-list">
            <li>
              주문/배송/반품 문의는 [고객센터 > 1:1 문의하기]를 이용해 주세요.
              <router-link class="inquiry-privacy-link" to="/">1:1 문의하기 바로가기</router-link>
            </li>
            <li>
              개인정보 보호를 위해 고객님의 주민번호, 전화번호, 등
              <strong>개인정보는 절대 입력하지 않도록 주의</strong>하시기 바랍니다.
            </li>
            <li>상품문의 취지에 어긋나는 글은 삭제될 수 있는 점 양해해 주시기 바랍니다.</li>
          </ul>
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
@use '~/pages/goods/scss/layer/modal-inquiry-write.scss';
</style>
