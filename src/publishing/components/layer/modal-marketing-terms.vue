<template>
  <Layer
    v-model="state.isShow"
    layer-type="full"
    class="layer-terms-wrap nsmall-terms-wrap"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>마케팅 정보 수집 및 이용</template>
    <template #contents>
      <div class="separately-terms">
        <table summary="NS가 고객의 동의를 얻어 수집ㆍ이용하는 마케팅 정보 수집 및 이용">
          <caption>
            마케팅 정보 수집 및 이용
          </caption>
          <colgroup>
            <col width="33.333%" />
            <col width="33.334%" />
            <col width="33.333%" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">목적</th>
              <th scope="col">수집항목</th>
              <th scope="col">이용목적</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul class="bullet-list">
                  <li>맞춤형 서비스 제공을 위한 신규 서비스 개발 및 개선</li>
                  <li>재테크, 보험, 상조 등 상품 및 이벤트 정보 안내, 마케팅 (광고성 정보 수신 동의 고객에 한함)</li>
                </ul>
              </td>
              <td>
                <ul class="bullet-list">
                  <li>이메일, 휴대전화번호, 성별, 생년월일</li>
                </ul>
              </td>
              <td>회원 탈퇴 시 또는 법정 의무 보유기간까지</td>
            </tr>
          </tbody>
        </table>
        <p class="mark">
          (선택) 마케팅 정보 수집 및 이용에 거부할 수 있으며, 동의를 거부해도 서비스를 이용하실 수 있습니다.
        </p>
      </div>
    </template>
    <template #bottom>
      <div class="button-wrapper">
        <button type="button" class="button" @click="_callbackClose">확인</button>
      </div>
    </template>
  </Layer>
</template>

<script setup lang="ts">
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
@use '~/pages/common/terms/scss/terms.scss';
</style>
