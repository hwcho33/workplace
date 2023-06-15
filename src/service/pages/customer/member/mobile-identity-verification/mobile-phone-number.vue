<template>
  <!-- 인증 -->
  <div class="join-input-wrap" :class="{ 'is-complete': isCompleteWrap, 'is-error': isErrorWrap }">
    <!-- 1. 휴대폰번호 전송 -->
    <div class="input-text-wrap">
      <input
        ref="inputRef"
        type="tel"
        :placeholder="$t('label.customer.0074', '휴대폰 번호(‘-’ 없이 입력)')"
        :title="$t('label.customer.0075', '휴대폰 번호 입력')"
        :value="inputValue"
        @input="onInput"
        @blur="onBlur"
        :disabled="route.query.pageNm === 'memberJoin'"
      />
      <div class="btns-wrap">
        <button type="button" class="del-btn" v-show="isShowDeleteButton" @click="onClickDelete">
          {{ $t('label.customer.0062', '삭제') }}
        </button>
      </div>
    </div>

    <!-- is-error, is-warning -->
    <p class="info-msg is-error" v-show="isShowErrorMessage">{{ errorMessage }}</p>

    <p v-show="isRequestedNumber" class="info-msg is-warning">
      {{ $t('message.customer.0069', '입력하신 번호로 인증번호가 발송 되었습니다.') }}
    </p>

    <!-- 1-2. 휴대폰 번호 전송 버튼 -->
    <div v-if="isRequestedNumber === false" class="button-group-wrap active">
      <!-- active 영역활성화-->
      <button
        type="button"
        class="certify-btn"
        :class="{ disable: isCompleteWrap === false }"
        @click="onClickSendAuthNumber"
      >
        {{ $t('label.customer.0012', '인증번호 전송') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'
import { SHARE_PAGE_STATE_KEY } from '../mobile-identity-verification/constants/provide-key'
import { postSelfCertCertNum } from '~/api/customer'

import { useJoinUserStore } from '~/store'
// import { PROGRESS_TYPE } from './mobile-identity-verification/constants'

interface Props {
  schemaKey: string
}

// interface Emit {
//   (e: 'onRequestedNumber', value: boolean): void
// }

// --------------------------------------------------------------------- [변수 및 상수]
const props = withDefaults(defineProps<Props>(), {})

const route = useRoute()

const schemaKeyProp = toRef(props, 'schemaKey')
const {
  value: inputValue,
  errorMessage,
  handleChange,
  handleBlur,
  handleReset,
  meta,
  validate
} = useField(schemaKeyProp, undefined, {
  initialValue: ''
})

// 휴대폰입력 후 인증번호 전송 버튼 클릭시 > true
const isRequestedNumber = ref(false)

const inputRef = ref<HTMLElement | null>(null)

// 회원가입화면에서 입력한 휴대폰번호 셋팅
const joinUserStore = useJoinUserStore()
const { userJoinValidForm } = joinUserStore.getJoinUser
if (route.query.pageNm === 'memberJoin' && userJoinValidForm?.values) {
  inputValue.value = userJoinValidForm?.values['user-tel']
}

// --------------------------------------------------------------------- [Vue 내장 메서드]
const sharePageState: any = inject(SHARE_PAGE_STATE_KEY)

const isShowDeleteButton = computed<boolean>(() => {
  return (inputValue.value as string).length > 0
})

// 성공
const isCompleteWrap = computed<boolean>(() => {
  return Boolean(meta.validated) && Boolean(meta.valid)
})

// 실패
const isErrorWrap = computed<boolean>(() => {
  return Boolean(errorMessage.value)
})

// 에러메시지 유무
const isShowErrorMessage = computed<boolean>(() => {
  return Boolean(meta.validated) && Boolean(meta.valid) === false
})

// const emit = defineEmits<Emit>()
// --------------------------------------------------------------------- [생명 주기 함수]
onMounted(() => {})
// --------------------------------------------------------------------- [내부 함수 (functions)]
// 입력 제한
function getReplaceValue(event: Event) {
  const targetValue = event.target as HTMLInputElement

  // 입력 문자열 포맷팅
  targetValue.value = targetValue.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)

  const isLength12 = targetValue.value.length === 12 ? true : false
  const isFormat = /^(\d{2,3})-(\d{3,4})-(\d{4})$/.test(targetValue.value)

  // 입력 초과시 포맷팅 풀림.
  if (isLength12 && isFormat === false) {
    // 마지막 문자 제거후 포맷팅
    targetValue.value = targetValue.value.slice(0, -1).replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
  }

  return targetValue.value
}

function onInput(event: Event) {
  const value = getReplaceValue(event)
  handleChange(value)
  sharePageState.hpNumberInfo.value.hpNumber = value
  validate()
}

function onBlur(event: Event) {
  handleBlur(event)
}

function onReset() {
  handleReset()
}

function onClickDelete() {
  onReset()
}

async function onClickSendAuthNumber() {
  if (isCompleteWrap.value === false) return

  // 전체 유효성 체크
  const isValid = await sharePageState.formRef.value.validate()

  if (isValid.valid) {
    // 폼 데이터 가져오기
    const formInfo = sharePageState.formRef.value.getValues()

    const payload = {
      custNm: formInfo.authName,
      birth: formInfo.firstDigit,
      hpno: formInfo.hpNumber,
      sex: formInfo.lastDigit,
      cmnctEnt: formInfo.mobileCarrier,
      pageNm: sharePageState.progressType.value.pageNm
    }
    const { data } = await postSelfCertCertNum(payload)

    if (data.resultData) {
      sharePageState.authProgresInfo.value.certNum = data.resultData.certNum
      sharePageState.authProgresInfo.value.check1 = data.resultData.check1
      sharePageState.authProgresInfo.value.check2 = data.resultData.check2
      sharePageState.authProgresInfo.value.check3 = data.resultData.check3
    }

    // 인증번호 전달받고 인증번호 입력 프로세스 진행
    sharePageState.hpNumberInfo.value.isRequestNumber = isRequestedNumber.value = true
  }
}
</script>

<style scoped></style>
