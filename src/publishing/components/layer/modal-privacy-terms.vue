<template>
  <Layer
    v-model="state.isShow"
    layer-type="full"
    class="layer-terms-wrap nsmall-terms-wrap"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>개인정보 수집 및 이용</template>
    <template #contents>
      <div class="separately-terms">
        <table summary="NS가 고객의 동의를 얻어 수집ㆍ이용하는 개인정보 수집 및 이용">
          <caption>
            개인정보 수집 및 이용
          </caption>
          <colgroup>
            <col width="20%" />
            <col width="40%" />
            <col width="40%" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">수집시점</th>
              <th scope="col">수집항목</th>
              <th scope="col">이용목적</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>가입</th>
              <td>
                필수 : 이름, 아이디(이메일 주소), 비밀번호, 휴대폰번호, 생년월일 성별, CI/DI 본인인증정보(TV, 쇼핑북,
                T커머스 고객의 Nsmall 회원 가입 시)
              </td>
              <td>
                <ul class="bullet-list">
                  <li>이용자 식별 및 회원관리</li>
                  <li>민원처리 및 고객 피해보상, 고객주문ㆍ배송ㆍ상담처리 등 서비스 전반 제공</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>주문</th>
              <td>필수 : 배송지 정보 (성명, 휴대폰 전화번호, 주소)</td>
              <td>
                <ul class="bullet-list">
                  <li>
                    상품, 사은품 또는 경품 등의 배송 민원처리 및 고객 피해보상, 고객주문ㆍ배송ㆍ상담처리 등 서비스 전반
                    제공
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="mark">
          보유 기간 : 동의 철회 시 또는 법정 의무 보유기간까지<br /><span
            >개인정보 수집 및 이용에 대한 동의는 서비스 이용을 위해 꼭 필요합니다. 동의 거부하실 수 있으나, 이 경우
            서비스 이용이 제한됩니다.</span
          >
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
