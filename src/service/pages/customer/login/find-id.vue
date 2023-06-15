<template>
  <div class="info-find-wrap phone-method">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">
      {{ $t('label.customer.0051', '아이디 찾기') }}
    </h2>

    <div class="inner-wrap">
      <div class="form-wrap">
        <div class="find-tab-wrap">
          <ul>
            <li :class="{ active: isPhone }">
              <div class="tab-btn">
                <a href="javascript:void(0)" @click="_onClickToByPhone">
                  {{ $t('label.customer.0052', '휴대폰 인증') }}
                </a>
              </div>
            </li>
            <li :class="{ active: !isPhone }">
              <div class="tab-btn">
                <a href="javascript:void(0)" @click="_onClickToByEmail">
                  {{ $t('label.customer.0053', '이메일 인증') }}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <!-- 이름 -->
        <div
          class="find-input-wrap"
          :class="{
            'is-error': userName.meta.dirty && !userName.meta.valid,
            'is-complete': userName.meta.valid && !writingUserName
          }"
        >
          <label for="userName">{{ $t('label.customer.0008', '이름') }}</label>
          <div class="input-text-wrap">
            <input
              type="text"
              autocomplete="off"
              :placeholder="$t('label.customer.0009', '예) 홍길동')"
              name="userName"
              ref="userNameRef"
              required
              v-model="userName.value.value"
              @input="_onInputUserName"
              @focus="_onFocusUserName"
              @blur="_onBlurUserName"
            />
            <div class="btns-wrap">
              <button
                type="button"
                class="del-btn"
                @click="_onClickDeleteName"
                @blur="_onBlurUserName"
                v-show="String(userName.value.value).length > 0"
              >
                {{ $t('label.common.0001', '삭제') }}
              </button>
            </div>
          </div>
          <p class="info-msg is-error" v-show="userName.errorMessage.value">{{ userName.errorMessage.value }}</p>
        </div>

        <!-- 휴대폰 인증 -->
        <div
          class="find-input-wrap"
          :class="{
            'is-error': userTel.meta.dirty && !userTel.meta.valid,
            'is-complete': userTel.meta.valid && !writingUserTel
          }"
          v-show="isPhone"
        >
          <label for="userTel">{{ $t('label.customer.0010', '휴대폰 번호') }}</label>
          <div class="input-text-wrap">
            <input
              type="tel"
              autocomplete="off"
              :placeholder="$t('label.customer.0011', '‘-’ 없이 입력')"
              maxlength="11"
              name="userTel"
              ref="userTelRef"
              required
              v-model="userTel.value.value"
              @input="_onInputUserTel"
              @paste="_onPasteUserTel"
              @focus="_onFocusUserTel"
              @blur="_onBlurUserTel"
            />
            <div class="btns-wrap">
              <button
                type="button"
                class="del-btn"
                @click="_onClickDeleteTel"
                @blur="_onBlurUserTel"
                v-show="String(userTel.value.value).length > 0"
              >
                {{ $t('label.common.0001', '삭제') }}
              </button>
            </div>
          </div>
          <p class="info-msg is-error" v-show="userTel.errorMessage.value">{{ userTel.errorMessage.value }}</p>

          <div class="button-group-wrap">
            <button type="button" class="send-btn" @click="_onClickSend" v-show="!showCertForm">
              {{ $t('label.customer.0012', '인증번호 전송') }}
            </button>
          </div>
        </div>

        <!-- 이메일 인증 -->
        <div
          class="find-input-wrap"
          :class="{
            'is-error': userEmail.meta.dirty && !userEmail.meta.valid,
            'is-complete': userEmail.meta.valid && !writingUserEmail,
            'is-auto-complete': writingUserEmail && includes(userEmail.value.value, '@') && domainList.length > 0
          }"
          v-show="!isPhone"
        >
          <label for="userEmail">{{ $t('label.customer.0054', '이메일') }}</label>
          <div class="input-text-wrap">
            <input
              type="text"
              autocomplete="off"
              :placeholder="$t('label.customer.0002', '예) nsmall@nsmall.com')"
              maxlength="40"
              name="userEmail"
              ref="userEmailRef"
              required
              v-model="userEmail.value.value"
              @input="_onInputUserEmail"
              @focus="_onFocusUserEmail"
              @blur="_onBlurUserEmail"
            />
            <div class="btns-wrap">
              <button
                type="button"
                class="del-btn"
                @click="_onClickDeleteTel"
                @blur="_onBlurUserEmail"
                v-show="String(userEmail.value.value).length > 0"
              >
                {{ $t('label.common.0001', '삭제') }}
              </button>
            </div>
            <ul
              class="input-complete-wrap"
              v-show="writingUserEmail && includes(userEmail.value.value, '@') && domainList.length > 0"
            >
              <li v-for="(item, index) in domainList" :key="index" @mousedown="_onClickDomainSelect(item.domain)">
                <span class="user-id">{{ userEmail.value.value }}</span
                >{{ item.str }}
              </li>
            </ul>
          </div>
          <p class="info-msg is-error" v-show="userEmail.errorMessage.value">{{ userEmail.errorMessage.value }}</p>

          <div class="button-group-wrap">
            <button type="button" class="email-btn" @click="_onClickSend" v-show="!showCertForm">
              {{ $t('label.customer.0055', '인증메일 전송') }}
            </button>
          </div>
        </div>

        <!-- 인증번호 확인 -->
        <div
          class="find-input-wrap certification"
          :class="{ 'is-error': certNum.meta.dirty && !certNum.meta.valid }"
          v-if="showCertForm"
        >
          <div class="input-text-wrap">
            <input
              type="tel"
              autocomplete="off"
              :placeholder="$t('label.customer.0056', '인증번호 4자리 입력')"
              maxlength="4"
              name="certNum"
              ref="certNumRef"
              required
              :title="$t('label.customer.0013', '인증번호 입력')"
              v-model="certNum.value.value"
              @input="_onInputCertNum"
            />
            <div class="cert-num-wrap">
              <span>{{ timerStr }}</span>
            </div>
          </div>
          <p class="info-msg is-error" v-show="certNum.errorMessage.value">{{ certNum.errorMessage.value }}</p>
          <p class="info-msg is-warning" v-show="!certNum.errorMessage.value">
            {{ $t('message.customer.0020', '입력하신 번호로 인증번호가 발송되었습니다.') }}
          </p>

          <div class="button-group-wrap">
            <button
              type="button"
              class="retry-btn"
              :class="{ disable: !isResendable }"
              :disabled="!isResendable"
              @click="_onClickResend"
            >
              {{ $t('label.customer.0014', '재전송') }}
            </button>
            <button type="button" class="certify-btn" @click="_onClickVerification">
              {{ $t('label.customer.0015', '인증하기') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Dialog ref="dialogRef" />
</template>

<script lang="ts" setup>
///////////////////////////////////////////////////////////////////
// 1. 의존성 (dependencies)
///////////////////////////////////////////////////////////////////
import { useField } from 'vee-validate'
import * as yup from 'yup'
import { replace, padStart, includes, startsWith, split } from 'lodash-es'

///////////////////////////////////////////////////////////////////
// 2. 프레임워크 내장 모듈 (utils, modules, functions, .ts file)
///////////////////////////////////////////////////////////////////
import { getOSByUserAgent } from '@/utils/device'
import { postIdSearchSend, getIdSearchVerification } from '~/api/customer'

///////////////////////////////////////////////////////////////////
// 3. 타입스크립트 관련 모듈 (types, enums, interface, class)
///////////////////////////////////////////////////////////////////
import type { SearchType, IdSearchSendResponse, IdSearchVerificationResponse } from '~/api/types/customer'

interface Email {
  str: string
  domain: string
}

///////////////////////////////////////////////////////////////////
// 4. 컴포넌트 (components)
///////////////////////////////////////////////////////////////////
import Dialog from '@/components/dialog/dialog-modal/dialog.vue'

///////////////////////////////////////////////////////////////////
// 5. 변수 및 상수 (variables)
///////////////////////////////////////////////////////////////////
// 라우터
const router = useRouter()

// dialog ref
const dialogRef = ref<InstanceType<typeof Dialog>>()

// 페이지 구분 휴대폰 인증 or 이메일 인증
const isPhone = ref<boolean>(true)

// API 검색 타입
let SEARCH_TYPE: SearchType = 'PHONE'

// 사용자 이름
const userName = useField<string>(
  'userName',
  yup
    .string()
    .required($t('message.customer.0017', '이름을 입력해 주세요.'))
    .matches(/^([가-힣]{2,10}|[a-zA-Z]{2,20})$/, $t('message.customer.0018', '이름을 정확하게 입력해 주세요.'))
)

// 휴대폰 번호
const userTel = useField<string>(
  'userTel',
  yup
    .string()
    .required($t('message.customer.0025', '휴대폰 번호를 입력해 주세요.'))
    .matches(
      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
      $t('message.customer.0026', '휴대폰 번호를 정확하게 입력해 주세요.')
    )
)

// 이메일 도메인 목록
const DOMAIN_LIST: string[] = [
  'naver.com',
  'hanmail.net',
  'gmail.com',
  'nate.com',
  'daum.net',
  'kakao.com',
  'hotmail.com',
  'korea.com',
  'korea.kr',
  'icloud.com'
]

// 이메일
const userEmail = useField<string>(
  'userEmail',
  yup
    .string()
    .required($t('message.customer.0050', '이메일을 입력해 주세요.'))
    .max(40, $t('message.customer.0051', '40자 이내로 입력해 주세요.'))
    .email($t('message.customer.0009', '정확한 이메일 형식으로 입력해 주세요.'))
)

// 출력용 도메인 목록
const domainList = ref<Email[]>([])

// 인증번호
const certNum = useField<string>(
  'certNum',
  yup
    .string()
    .required($t('message.customer.0022', '인증번호를 입력해 주세요.'))
    .matches(/^[0-9]{4}$/, $t('message.customer.0023', '인증번호를 확인 후 다시 입력해 주세요.'))
)

//ref 변수
const userNameRef = ref<HTMLInputElement | null>(null)
const userTelRef = ref<HTMLInputElement | null>(null)
const userEmailRef = ref<HTMLInputElement | null>(null)
const certNumRef = ref<HTMLInputElement | null>(null)

// input 포커스 여부
const writingUserName = ref<boolean>(false)
const writingUserTel = ref<boolean>(false)
const writingUserEmail = ref<boolean>(false)

// input 변경 감지 버퍼
let userNameBuffer: string = ''
let userTelBuffer: string = ''
let userEmailBuffer: string = ''

// 인증번호 영역 보이기 여부
const showCertForm = ref<boolean>(false)

// 인증번호 seq
let certSeq: number = -1

// 타이머 관련
let timerInterval: NodeJS.Timer
let timerSec = ref<number>(300)

// 재발송 가능 여부
const isResendable = ref<boolean>(false)

// TODO: 인증 발송 10회 체크는 API단에서 체크해야 하므로 아래 방식은 변경 필요
// 휴대폰 인증 발송 10회 체크
let phoneSendFailCounter: number = 0
// 이메일 인증 발송 10회 체크
let emailSendFailCounter: number = 0

///////////////////////////////////////////////////////////////////
// 6. Vue 내장 메서드
///////////////////////////////////////////////////////////////////
// 인증 번호 출력 computed
const timerStr = computed<string>(() => {
  const divSec = timerSec.value / 60
  const mm = Math.floor(divSec)
  const ss = Math.round((divSec - mm) * 60)
  return padStart(String(mm), 2, '0') + ':' + padStart(String(ss), 2, '0')
})

///////////////////////////////////////////////////////////////////
// 7. 생명 주기 함수 (life cycle hooks)
///////////////////////////////////////////////////////////////////
onMounted(() => {
  // 이름 포커스
  userNameRef.value?.focus()
})

onUnmounted(() => {
  stopTimer()
})

///////////////////////////////////////////////////////////////////
// 8. 내부 함수 (functions)
///////////////////////////////////////////////////////////////////
// 이름 input
function _onInputUserName(e: InputEvent): void {
  // 공백 제거
  userName.setValue(replace((e.target as HTMLInputElement).value, /(\s*)/g, ''))
}

// 이름 focus
function _onFocusUserName(): void {
  writingUserName.value = true
}

// 이름 blur
function _onBlurUserName(e: FocusEvent): void {
  if (!e.relatedTarget || (e.relatedTarget as HTMLElement).className !== 'del-btn') {
    writingUserName.value = false

    // 인증번호 확인 기능이 활성화 되어있는 경우 값의 변경이 이루어지면 초기화
    if (!showCertForm.value) {
      userNameBuffer = userName.value.value
    } else {
      if (userNameBuffer !== userName.value.value) {
        resetCertForm()
      }
    }
  }
}

// 휴대폰 번호 input
function _onInputUserTel(e: InputEvent): void {
  // 숫자만
  userTel.setValue(replace((e.target as HTMLInputElement).value, /[^0-9]/g, ''))
}

// 휴대폰 번호 paste
function _onPasteUserTel(e: ClipboardEvent): void {
  e.preventDefault()
  // 숫자만
  userTel.setValue(replace(String(e.clipboardData?.getData('text/plain')), /[^0-9]/g, ''))
}

// 휴대폰 번호 focus
function _onFocusUserTel(): void {
  writingUserTel.value = true
  // 숫자만 남김
  if (userTel.value.value) {
    userTel.setValue(replace(userTel.value.value, /[^0-9]/g, ''))
  }
}

// 휴대폰 번호 blur
function _onBlurUserTel(e: FocusEvent): void {
  const replacedUserTel = replace(userTel.value.value, /[^0-9]/g, '')

  if (!e.relatedTarget || (e.relatedTarget as HTMLElement).className !== 'del-btn') {
    writingUserTel.value = false

    // 인증번호 확인 기능이 활성화 되어있는 경우 값의 변경이 이루어지면 초기화
    if (!showCertForm.value) {
      userTelBuffer = replacedUserTel
    } else {
      if (userTelBuffer !== replacedUserTel) {
        resetCertForm()
      }
    }
  }

  // 휴대폰 번호 양식 적용
  if (userTel.value.value) {
    userTel.setValue(replace(replacedUserTel, /^(\d{3})(\d{3,4})(\d{4})$/, `$1-$2-$3`))
  }
}

// 이메일 input
function _onInputUserEmail(e: InputEvent): void {
  // 공백 제거
  userEmail.setValue(replace((e.target as HTMLInputElement).value, /(\s*)/g, ''))

  // @ 입력시 이메일 자동완성
  if (!includes(userEmail.value.value, '@')) {
    domainList.value = []
    return
  }

  const splitedEmail = split(userEmail.value.value, '@')
  if (splitedEmail.length !== 2) {
    domainList.value = []
    return
  }

  const domain = splitedEmail[1]
  domainList.value = DOMAIN_LIST.filter(val => {
    return startsWith(val, domain) && domain !== val
  }).map(val => {
    return { str: replace(val, domain, ''), domain: val }
  })
}

// 이메일 focus
function _onFocusUserEmail(): void {
  writingUserEmail.value = true
}

// 이메일 blur
function _onBlurUserEmail(e: FocusEvent): void {
  if (!e.relatedTarget || (e.relatedTarget as HTMLElement).className !== 'del-btn') {
    writingUserEmail.value = false

    domainList.value = []

    // 인증번호 확인 기능이 활성화 되어있는 경우 값의 변경이 이루어지면 초기화
    if (!showCertForm.value) {
      userEmailBuffer = userEmail.value.value
    } else {
      if (userEmailBuffer !== userEmail.value.value) {
        resetCertForm()
      }
    }
  }
}

// 도메인 리스트 클릭
function _onClickDomainSelect(item: string): void {
  userEmail.setValue(split(userEmail.value.value, '@')[0] + '@' + item)

  domainList.value = []
}

// 인증번호 input
function _onInputCertNum(e: InputEvent): void {
  // 숫자만
  certNum.setValue(replace((e.target as HTMLInputElement).value, /[^0-9]/g, ''))
}

// validation check
async function isALlValid(withCert: boolean = false): Promise<boolean> {
  // 이름 validation
  if (!(await userName.validate()).valid) {
    return false
  }

  // 휴대폰 번호 validation
  if (isPhone.value && !(await userTel.validate()).valid) {
    return false
  }

  // 이메일 validation
  if (!isPhone.value && !(await userEmail.validate()).valid) {
    return false
  }

  // 인증번호 validation
  if (withCert) {
    if (timerSec.value <= 0) {
      certNum.setErrors($t('message.customer.0021', '입력시간이 지났습니다. 다시 시도해 주세요.'))
      return false
    }

    if (!(await certNum.validate()).valid) {
      return false
    }
  }

  return true
}
// 인증번호 전송 버튼 클릭
async function _onClickSend(): Promise<void> {
  router.push('/customer/login/dormant-account')
  // validation
  if (!(await isALlValid(false))) {
    return
  }

  // 인증번호 횟수 체크 - TODO: API에서 체크 필요
  isPhone.value ? phoneSendFailCounter++ : emailSendFailCounter++

  if ((isPhone.value && phoneSendFailCounter > 9) || (!isPhone.value && emailSendFailCounter > 9)) {
    // 얼럿
    dialogRef.value?.open({
      message: $t('message.customer.0065', '전송횟수가 초과 되었습니다. 10분 후 다시 시도해 주세요.'),
      callbackFunction: dialogCallback
    })
    return
  }

  // API 호출
  callIdSearchSend()
}

// 재전송 버튼 클릭
function _onClickResend(): void {
  // 재전송 30초 제한 확인
  if (timerSec.value > 270) {
    certNum.setErrors($t('message.customer.0067', '인증번호 요청 후 30초 후에 재전송이 가능합니다.'))
    return
  }

  certNum.validate()

  // API 호출
  _onClickSend()
}

// ID찾기 인증번호 전송 api 호출
async function callIdSearchSend(): Promise<void> {
  const { data } = await postIdSearchSend({
    srchType: SEARCH_TYPE,
    phoneNum: isPhone.value ? userTel.value.value : undefined,
    email: !isPhone.value ? userEmail.value.value : undefined,
    custNm: userName.value.value
  })

  switch (data.resultCode) {
    case '7806': {
      // 전송 완료
      // resultData가 null이면 실패로 간주
      data.resultData ? sendResult7806(data.resultData) : sendResult7807()
      break
    }
    case '7807': {
      // 전송 실패
      sendResult7807()
      break
    }
    default: {
      // 7808 회원 정보 찾을 수 없음
      sendResult7808()
    }
  }
}

// 인증번호 전송 api result code 7806
// 전송 완료
function sendResult7806(resultData: IdSearchSendResponse): void {
  // 타이머 시간 설정. -1초는 싱크를 위해
  timerSec.value = Number(resultData.vaildTm) - 1
  certSeq = Number(resultData.seqNum)

  // 타이머 시작
  startTimer()

  certNum.value.value = ''

  // 인증번호 전송 버튼 숨기기, 인증하기 폼 호출
  showCertForm.value = true

  // 인증번호 포커스
  nextTick(() => {
    certNumRef.value?.focus()
  })
}

// 인증번호 전송 api result code 7807
// 전송 실패
function sendResult7807(): void {
  userName.setErrors('')
  userTel.setErrors(
    $t('message.customer.0068', '인증번호 전송에 실패하였습니다. 인증번호 요청을 다시 해주시기 바랍니다.')
  )
}

// 인증번호 전송 api result code 7808
// 회원 정보 찾을 수 없음
function sendResult7808(): void {
  userName.setErrors('')
  userTel.setErrors($t('message.customer.0049', '입력하신 정보와 일치하는 회원정보가 없습니다.'))
}

// 타이머 시작
function startTimer(): void {
  stopTimer()
  // 재발송 가능 정지
  isResendable.value = false

  timerInterval = setInterval(() => {
    timerSec.value--

    if (timerSec.value <= 0) {
      expireTimer()
    }
    // 30초 지나면 재발송 가능하게
    if (timerSec.value <= 270) {
      isResendable.value = true
    }
  }, 1000)
}
// 타이머 종료
function stopTimer(): void {
  clearInterval(timerInterval)
}
// 타이머 만료
function expireTimer(): void {
  stopTimer()
  certNum.setErrors($t('message.customer.0021', '입력시간이 지났습니다. 다시 시도해 주세요.'))
}

// 인증 버튼 클릭
async function _onClickVerification(): Promise<void> {
  // validation
  if (!(await isALlValid(true))) {
    return
  }

  // API 호출
  callIdSearchVerification()
}

// ID 인증 확인 API 호출
async function callIdSearchVerification(): Promise<void> {
  const { data } = await getIdSearchVerification({
    srchType: SEARCH_TYPE,
    phoneNum: isPhone.value ? userTel.value.value : undefined,
    email: !isPhone.value ? userEmail.value.value : undefined,
    custNm: userName.value.value,
    certNum: Number(certNum.value.value),
    seqNum: Number(certSeq)
  })

  switch (data.resultCode) {
    case '7809': {
      // 인증번호 확인
      // resultData가 null이면 인증번호 불일치로 간주
      data.resultData ? verifResult7809(data.resultData) : verifResult7810()
      break
    }
    case '7810': {
      // 인증번호 불일치
      verifResult7810()
      break
    }
    case '7811': {
      // 인증번호 시간 초과
      verifResult7811()
      break
    }
    default: {
      // 7808 회원 정보 찾을 수 없음
      verifResult7808()
      break
    }
  }
}

// 인증 api result code 7809
// 인증번호 확인(성공)
function verifResult7809(data: IdSearchVerificationResponse): void {
  // 아이디 찾기 완료
  router.push({
    path: '/customer/login/find-id-complete',
    state: { userName: userName.value.value, idListStr: JSON.stringify(data.loginIdList) }
  })
}

// 인증 api result code 7810
// 인증번호 불일치
function verifResult7810(): void {
  certNum.setErrors($t('message.customer.0023', '인증번호를 확인 후 다시 입력해 주세요.'))
}

// 인증 api result code 7811
// 입력시간 초과
function verifResult7811(): void {
  certNum.setErrors($t('message.customer.0021', '입력시간이 지났습니다. 다시 시도해 주세요.'))
}

// 인증 api result code 7808
// 회원정보를 찾을 수 없음
function verifResult7808(): void {
  certNum.setErrors($t('message.customer.0049', '입력하신 정보와 일치하는 회원정보가 없습니다.'))
}

// 이름 삭제 버튼 클릭
function _onClickDeleteName(): void {
  userName.setValue('')
}

// 휴대폰 번호 삭제 버튼 클릭
function _onClickDeleteTel(): void {
  userTel.setValue('')
}

// 인증하기 영역 초기화
function resetCertForm() {
  stopTimer()

  showCertForm.value = false
}

// 휴대폰 인증 버튼 클릭
function _onClickToByPhone(): void {
  if (!isPhone.value) {
    isPhone.value = true
    SEARCH_TYPE = 'PHONE'

    resetCertForm()

    nextTick(() => {
      if (!userName.meta.valid) {
        userNameRef.value?.focus()
        return
      }

      if (!userTel.meta.valid) {
        userTelRef.value?.focus()
      }
    })
  }
}

// 이메일 인증 버튼 클릭
function _onClickToByEmail(): void {
  if (isPhone.value) {
    isPhone.value = false
    SEARCH_TYPE = 'EMAIL'

    resetCertForm()

    nextTick(() => {
      if (!userName.meta.valid) {
        userNameRef.value?.focus()
        return
      }

      if (!userEmail.meta.valid) {
        userEmailRef.value?.focus()
      }
    })
  }
}

// 10회 오류시 발생하는 dialog callback
function dialogCallback(_: boolean, __: Function) {
  // 메인 화면으로 이동
  router.push('/')
}
</script>

<style lang="scss">
@use '~/pages/customer/login/scss/login.scss';
</style>
