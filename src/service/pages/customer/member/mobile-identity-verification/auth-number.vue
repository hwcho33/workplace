<template>
  <div v-if="isRequestNumber" class="join-input-wrap certification is-active" style="margin-top: 0.8rem">
    <!-- 2. 인증번호 -->
    <div class="input-text-wrap">
      <!-- 2-1.인증번호 입력 -->
      <input
        type="text"
        :placeholder="$t('label.customer.0056', '인증번호 4자리 입력')"
        :title="$t('label.customer.0056', '인증번호 4자리 입력')"
        :value="inputAuthNumber"
        @input="onInput"
        @blur="onBlur"
      />

      <div class="cert-num-wrap">
        <span>{{ timerState.minView }}:{{ timerState.secView }}</span>
      </div>

      <p class="info-msg is-error" v-show="isShowErrorMessage">{{ errorMessage }}</p>
      <p v-if="isAuthTimeOver && isSendAuthNumber === false" class="info-msg is-error">
        {{ $t('message.customer.0070', '인증번호 입력 시간이 초과하였습니다. 다시 시도해 주세요.') }}
      </p>

      <!-- 2-2. 인증번호 전송 -->
      <div class="button-group-wrap active">
        <!-- disable -->
        <button
          type="button"
          class="retry-btn"
          :class="{ disable: isDesabledResendButton }"
          :disabled="isDesabledResendButton && isResendTimeOver === false"
          @click="_onClickRetransmission"
        >
          {{ $t('label.customer.0014', '재전송') }}
        </button>
        <button type="button" class="certify-btn" @click="_onClickAuthenticating">
          {{ $t('label.customer.0015', '인증하기') }}
        </button>
      </div>
    </div>
  </div>

  <Dialog ref="alertDialog" :option-props="alertDialogOptions" />
</template>

<script setup lang="ts">
import * as yup from 'yup'
import { useField } from 'vee-validate'
import { useTimer } from '../mobile-identity-verification/composables/use-timer'
import { SHARE_PAGE_STATE_KEY } from '../mobile-identity-verification/constants/provide-key'
import { postSelfCertCertNumRetry, postSelfCertCertNumCheck } from '~/api/customer'
import { useJoinUserStore } from '~/store'

import Dialog from '@/components/dialog/dialog-modal/index.vue'
import useSetDialogOptions from '@/components/dialog/use-set-options'

// interface Props {
//   formRef?: InstanceType<typeof Form> | null
// }

// interface Emit {
//   (e: 'onChangeAuthNumber', value: string): void
// }

// --------------------------------------------------------------------- [변수 및 상수]
// const props = withDefaults(defineProps<Props>(), {})

const router = useRouter()
const route = useRoute()
const joinUserStore = useJoinUserStore()

// 인증번호 입력 타이머
const { state: timerState, startTimer, resetTimer } = useTimer()

// 재전송 타이머
const { startTimer: resendStartTimer, resetTimer: resendResetTimer } = useTimer()

const isSendAuthNumber = ref(false)
const isAuthTimeOver = ref(false)

const inputAuthNumber = ref('') // 입력한 인증번호

// 인증번호 스키마(유효성체크)
const schema = yup.string().required('인증번호를 입력해 주세요.').min(4, '인증번호를 확인 후 다시 입력해 주세요. ')
const {
  // value: inputValue,
  errorMessage,
  handleChange,
  handleBlur,
  handleReset,
  meta,
  validate
} = useField('authNumberField', schema, {
  initialValue: ''
})

// 재전송 횟수
const resendCount = ref(0)
// 재전송 버튼 비활성화
const isDesabledResendButton = ref(false)
// 재전송 타임오버
const isResendTimeOver = ref(true)

// ----------------------------------- [알럿]
const { setBasicOptions } = useSetDialogOptions()
const alertDialog = ref<{ open: () => void } | null>(null)
const alertDialogOptions = reactive(
  setBasicOptions({
    message: 'basic',
    firstButton: '확인',
    secondButton: undefined
  })
)

// --------------------------------------------------------------------- [Vue 내장 메서드]
const sharePageState: any = inject(SHARE_PAGE_STATE_KEY)

const isRequestNumber = computed(() => {
  return sharePageState.hpNumberInfo.value.isRequestNumber
})

// 에러메시지 유무
const isShowErrorMessage = computed<boolean>(() => {
  return Boolean(meta.validated) && Boolean(meta.valid) === false
})

// const emit = defineEmits<Emit>()
// defineExpose({})

watchEffect(() => {
  const isStartAuthStateTimer = isRequestNumber.value
  if (isStartAuthStateTimer) {
    startAuthStateTimer()
  }
})
// --------------------------------------------------------------------- [생명 주기 함수]
onMounted(() => {})
// --------------------------------------------------------------------- [내부 함수 (functions)]
// 타이머: 인증번호 입력 제한시간
function startAuthStateTimer() {
  const timeOverCallback = () => {
    console.log('인증번호 시간 초과')
    isAuthTimeOver.value = true
  }
  startTimer(5, 0, timeOverCallback, '인증번호')
  // startTimer(0, 5, timeOverCallback, '인증번호')
}

function onInput(event: Event) {
  const targetValue = event.target as HTMLInputElement
  targetValue.value = targetValue.value.replace(/[^\d]/g, '').slice(0, 4) // 공백 제거
  inputAuthNumber.value = targetValue.value
}

function onBlur(event: Event) {
  handleBlur(event)
}

function onReset() {
  inputAuthNumber.value = ''
  handleReset()
}

// 인증하기 초기화
function authInit() {
  isSendAuthNumber.value = true
  resetTimer()
  resendResetTimer()
}

// 인증하기
async function _onClickAuthenticating() {
  handleChange(inputAuthNumber.value)

  // 전체 유효성 체크 (인증번호 입력은 제외)
  const isValid1 = await sharePageState.formRef.value?.validate()

  // 인증번호 유효성 체크
  const isValid2 = await validate()

  if (isValid1?.valid && isValid2.valid) {
    console.log('[유효성 체크 완료 > api 인증하기 진행]')

    const payload = {
      smsNum: inputAuthNumber.value,
      certNum: sharePageState.authProgresInfo.value.certNum,
      check1: sharePageState.authProgresInfo.value.check1,
      check2: sharePageState.authProgresInfo.value.check2,
      check3: sharePageState.authProgresInfo.value.check3,
      pageNm: sharePageState.progressType.value.pageNm
    }
    const { data } = await postSelfCertCertNumCheck(payload)

    if (data.resultData) {
      sharePageState.authProgresInfo.value.certNum = data.resultData.certNum
      sharePageState.authProgresInfo.value.check1 = data.resultData.check1
      sharePageState.authProgresInfo.value.check2 = data.resultData.check2
      sharePageState.authProgresInfo.value.check3 = data.resultData.check3
      sharePageState.authProgresInfo.value.CI = data.resultData.CI
      sharePageState.authProgresInfo.value.DI = data.resultData.DI

      authInit()

      /**
       * alert 컴포넌트
       * 이슈: 콜백 기능이 지원 되어야 한다.
       * alert 호출 후 완료 버튼 누르면 상황에 따라 화면 이동한다.
       * alertOpen($t('message.customer.0007', '휴대폰 본인인증이 완료되었습니다.'))
       * alertOpen($t('message.customer.0006', '성인인증이 완료되었습니다.'))
       */
      // const authProgresInfo = sharePageState.authProgresInfo.value

      //TV회원 회원가입: /customer/member/join-form
      if (sharePageState.progressType.value.isMemberJoin === true) {
        //route.query.pageNm === 'memberJoin'
        joinUserStore.setSelfCertNumCheck(data.resultData)
        alertOpen($t('message.customer.0007', '휴대폰 본인인증이 완료되었습니다.'))

        // alert 확인 버튼 클릭 후 이동
        router.push({
          name: 'MemberJoinForm'
        })
      }
      // 비회원 구매: 주문/결제 페이지로 이동
      else if (sharePageState.progressType.value.isOrderSheet === true) {
        alertOpen($t('message.customer.0007', '휴대폰 본인인증이 완료되었습니다.'))
      }
      // 성인인증: 선택 상품 상세 페이지로 이동
      else if (sharePageState.progressType.value.isAdultCert === true) {
        alertOpen($t('message.customer.0006', '성인인증이 완료되었습니다.'))
      }
      // 알수 없음.
      else {
        console.error('404')
      }
    }
  }
}

// 재전송 초기화
function retransmissionInit() {
  resendCount.value += 1
  isDesabledResendButton.value = true
  isResendTimeOver.value = false
  onReset()
  resetTimer() // 타이머(인증번호) 리셋
  startAuthStateTimer() // 타이머(인증번호) 시작
  startResendTimer() // 타이머(재전송) 시작
}
// 재전송
async function _onClickRetransmission() {
  const payload = {
    certNum: sharePageState.authProgresInfo.value.certNum,
    check1: sharePageState.authProgresInfo.value.check1,
    check2: sharePageState.authProgresInfo.value.check2,
    check3: sharePageState.authProgresInfo.value.check3,
    pageNm: sharePageState.progressType.value.pageNm
  }
  const { data } = await postSelfCertCertNumRetry(payload)

  if (data.resultData) {
    sharePageState.authProgresInfo.value.certNum = data.resultData.certNum
    sharePageState.authProgresInfo.value.check1 = data.resultData.check1
    sharePageState.authProgresInfo.value.check2 = data.resultData.check2
    sharePageState.authProgresInfo.value.check3 = data.resultData.check3
  }
  retransmissionInit()
}

// 재전송 타이머: 30초 이내인 경우 버튼 비활성화
function startResendTimer() {
  console.log('[재전송 횟수]', resendCount.value)
  const timeOverCallback = () => {
    console.log('재전송 버튼 활성화')
    isDesabledResendButton.value = false
    isResendTimeOver.value = true
  }
  if (resendCount.value > 10) {
    // 10회 초과시 얼럿 출력
    // alertOpen($t('message.customer.0065', '전송횟수가 초과 되었습니다. 10분 후 다시 시도해 주세요.'))
    // resendStartTimer(10, 0, timeOverCallback, '재전송 타이머 10분')
    /**
     * 10회 초과시
     * 알럿 호출: 전송횟수가 초과 되었습니다. 다시 시도해 주세요.
     * 홈(메인)으로 이동
     */
    alertOpen('전송횟수가 초과 되었습니다. 다시 시도해 주세요.')

    // 홈(메인)으로 이동
    router.push({
      path: '/'
    })
  } else {
    resendStartTimer(0, 30, timeOverCallback, '재전송 타이머 30초')
  }
}

// 알럿 오픈
function alertOpen(msg: string) {
  alertDialogOptions.message = msg
  alertDialog.value?.open()
}
// 컨펌 오픈
// function confirmOpen(msg: string) {
//   alertDialogOptions.message = msg
//   alertDialogOptions.secondButton = '취소'
//   alertDialog.value?.open()
// }
</script>
