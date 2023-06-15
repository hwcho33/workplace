<template>
  <div class="mobile-identity-wrap">
    <!-- 타이틀 -->
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">
      {{ $t('label.customer.0061', '휴대폰 본인인증하기') }}
    </h2>

    <div class="inner-wrap">
      <div class="join-form-wrap">
        <Form ref="formRef" :validation-schema="schema" @submit="onSubmit" @invalid-submit="onInvalidSubmit">
          <!-- 인증 할 이름 -->
          <AuthenticateName :schema-key="'authName'" />

          <!-- 주민등록번호: 앞자리 & 뒷자리-->
          <ResidentRegistrationNumber :schema-key-first="'firstDigit'" :schema-key-last="'lastDigit'" />

          <!-- 통신사 -->
          <MobileCarrier :schema-key="'mobileCarrier'" />

          <!-- 통신사별 동의 확인 -->
          <AgreeList :schema-key="'agree'" />

          <!-- 핸드폰 번호 -->
          <MobilePhoneNumber :schema-key="'hpNumber'" />
        </Form>
        <!-- 인증번호 -->
        <AuthNumber ref="authNumberRef" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as yup from 'yup'
import { getOSByUserAgent } from '@/utils/device'
import dayjs from 'dayjs'
import { Form } from 'vee-validate'
import type { SubmissionHandler, InvalidSubmissionContext } from 'vee-validate'

import { SHARE_PAGE_STATE_KEY } from './mobile-identity-verification/constants/provide-key'
import { PROGRESS_TYPE } from './mobile-identity-verification/constants'
import type { MOBILE_CARRIER_TYPE } from './mobile-identity-verification/constants'

import AuthenticateName from './mobile-identity-verification/authenticate-name.vue'
import ResidentRegistrationNumber from './mobile-identity-verification/resident-registration-number.vue'
import MobileCarrier from './mobile-identity-verification/mobile-carrier.vue'
import AgreeList from './mobile-identity-verification/agree-list.vue'
import MobilePhoneNumber from './mobile-identity-verification/mobile-phone-number.vue'
import AuthNumber from './mobile-identity-verification/auth-number.vue'

// type SchemaType = yup.InferType<typeof schema>
// --------------------------------------------------------------------- [변수 및 상수]
const route = useRoute()
// const router = useRouter()

// 폼
const formRef = ref<InstanceType<typeof Form> | null>(null)
// 1. 이름
// 2. 주민등록번호
// 3. 통신사
const selectedMobileCarrier = ref<MOBILE_CARRIER_TYPE | ''>('') // 선택한 통신사
// 4. 통신사별 동의 확인
// 5. 핸드폰 번호
const hpNumberInfo = ref({
  isRequestNumber: false,
  hpNumber: ''
})

// 6. 인증 번호
const authNumberRef = ref<InstanceType<typeof AuthNumber> | null>(null)

const schema = yup.object({
  authName: getAuthName(),
  firstDigit: getFirstDigit(),
  lastDigit: getLastDigit(),
  mobileCarrier: getMobileCarrier(),
  agree: getAgree(),
  hpNumber: getHpNumber()
})

// 인증 진행 정보
const authProgresInfo = ref({
  certNum: undefined,
  check1: undefined,
  check2: undefined,
  check3: undefined,
  CI: undefined,
  DI: undefined
})

// --------------------------------------------------------------------- [Vue 내장 메서드]
const routeQuery = computed(() => {
  return route.query
})

// 진행타입
const progressType = computed(() => {
  const isPageNm = Object.keys(routeQuery.value).some(value => value === 'pageNm')

  const returnInfo = {
    isMemberJoin: false,
    isOrderSheet: false,
    isAdultCert: false,
    pageNm: ''
  }
  if (isPageNm === false) return returnInfo

  returnInfo.isMemberJoin = routeQuery.value.pageNm === PROGRESS_TYPE.MEMBER_JOIN // TV회원 회원가입
  returnInfo.isOrderSheet = routeQuery.value.pageNm === PROGRESS_TYPE.ORDER_SHEET // 비회원 구매
  returnInfo.isAdultCert = routeQuery.value.pageNm === PROGRESS_TYPE.ADULT_CERT // 성인인증

  if (returnInfo.isMemberJoin) returnInfo.pageNm = PROGRESS_TYPE.MEMBER_JOIN
  if (returnInfo.isOrderSheet) returnInfo.pageNm = PROGRESS_TYPE.ORDER_SHEET
  if (returnInfo.isAdultCert) returnInfo.pageNm = PROGRESS_TYPE.ADULT_CERT

  return returnInfo
})

// 하위 컴포넌트 공유 데이터
provide(SHARE_PAGE_STATE_KEY, {
  formRef,
  selectedMobileCarrier,
  hpNumberInfo,
  authProgresInfo,
  progressType
})

// --------------------------------------------------------------------- [생명 주기 함수]
onMounted(() => {})
// --------------------------------------------------------------------- [내부 함수 (functions)]
// 휴대폰번호(인증번호 전송)
function getHpNumber() {
  return yup
    .string()
    .required($t('message.customer.0025', '휴대폰 번호를 입력해 주세요.'))
    .test(
      'hpFormat',
      () => $t('message.customer.0026', '휴대폰 번호를 정확하게 입력해 주세요.'),
      value => {
        // const isValid = /^\d{3}-\d{3,4}-\d{4}$/.test(value)
        const isValid = /^01([0|1|6|7|8|9])-\d{3,4}-\d{4}$/.test(value)
        return isValid
      }
    )
}
// 스키마(동의 리스트)
function getAgree() {
  return yup.boolean().test(
    'requiredCheck',
    () => $t('message.customer.0034', '필수약관 동의 후 서비스를 이용할 수 있습니다.'),
    value => {
      return value
    }
  )
}

// 스키마(통신사)
function getMobileCarrier() {
  return yup.string().required($t('message.customer.0064', '이용 중인 통신사를 선택해 주세요.'))
}

// 스키마(주민번호 뒷자리): getLastDigit
function getLastDigit() {
  return (
    yup
      .string()
      .required($t('message.customer.0060', '주민등록번호 뒷자리 첫 번째 숫자(1~8)를 입력해 주세요.'))
      // 숫자 1자리로 입력해 주세요.
      .test(
        'number1to8',
        () => $t('message.customer.0060', '주민등록번호 뒷자리 첫 번째 숫자(1~8)를 입력해 주세요.'),
        value => {
          return /[1-8]/.test(value) ? true : false
        }
      )
  )
}

// 스키마(주민번호 앞자리)
function getFirstDigit() {
  return (
    yup
      .string()
      // 숫자 6자리로 입력해 주세요.
      .test(
        'numberMin1Max5',
        () => $t('message.customer.0061', '숫자 6자리로 입력해 주세요.'),
        (value: string) => {
          if (value.length > 0 && value.length <= 5) {
            return false
          } else {
            return true
          }
        }
      )
      // 날짜 형식이 올바르지 않을 경우,  MM :1~12 / DD : 1~31, 범위를 벗어 난 경우
      .test(
        'dateFormatCheck',
        () => $t('message.customer.0062', '주민등록번호 앞자리를 다시 확인해 주세요.'),
        (value: string) => {
          if (value.length !== 6) return true

          const month = Number(value.slice(2, 4))
          const day = Number(value.slice(4, 6))

          let isMonthRange = false
          if (month > 0 && month <= 12) {
            isMonthRange = true
          }

          let isDayRange = false
          if (day > 0 && day <= 31) {
            isDayRange = true
          }
          return isMonthRange && isDayRange
        }
      )
      .when(['lastDigit'], {
        is: (lastDigit: string) => /[1-8]/.test(lastDigit),
        then: schema => {
          return schema.required($t('message.customer.0063', '주민등록번호를 다시 한 번 확인해 주세요.'))
        },
        otherwise: schema => {
          return schema.required($t('message.customer.0059', '생년월일을 입력해 주세요.'))
        }
      })
      // 주민번호 마지막 번호가 1-8 입력시 마지막 날 체크
      .when(['lastDigit'], ([lastDigitValue], schema) => {
        if (Boolean(/[1-8]/.test(lastDigitValue)) === false) {
          return schema
        }

        // 주민 번호 앞자리를 이요해서 4자리 년도 구하기
        const getFourDigitYear = (firstVal: string, lastVal: string): string => {
          const lastNumber = Number(lastVal)
          // 1900년생
          if (lastNumber === 1 || lastNumber === 2 || lastNumber === 5 || lastNumber === 6) {
            return `19${firstVal.slice(0, 2)}`
          } else if (lastNumber === 3 || lastNumber === 4 || lastNumber === 7 || lastNumber === 8) {
            // 2000년생 이후
            return `20${firstVal.slice(0, 2)}`
          } else {
            // 1800년생 이후 : 9 또는 0
            return `18${firstVal.slice(0, 2)}`
          }
        }

        // 마지막 날 체크 유효성 추가
        return schema.test(
          'notValidDate',
          () => $t('message.customer.0031', '생년월일을 다시 한 번 확인해 주세요.'),
          (firstDigitValue: string) => {
            if (Boolean(/[0-9]{6}/.test(firstDigitValue)) === false) {
              return false
            }
            const year = getFourDigitYear(String(firstDigitValue), String(lastDigitValue))
            const month = firstDigitValue.slice(2, 4)
            const day = firstDigitValue.slice(4, 6)

            const birthDate = dayjs(`${year}-${month}-01`)
            const lastBirthDate = dayjs(birthDate) // dayjs 복사본

            const lastDayOfMonth: number = lastBirthDate.endOf('month').get('date') // 월 마지막 날짜
            console.log(`[when > 월 마지막 날짜]`, lastDayOfMonth, lastBirthDate.format('YYYY-MM-DD'))
            console.log(`[when > 입력한 날짜]`, Number(day), birthDate.format('YYYY-MM-DD'))

            if (Number(day) <= lastDayOfMonth) {
              return true
            } else {
              return false
            }
          }
        )
      })
  )
}

// 스키마(이름): name
function getAuthName() {
  return (
    yup
      .string()
      // 필수
      .required($t('message.customer.0017', '이름을 입력해 주세요.'))
      // 한글, 영어 만 가능
      .test(
        'notKoEn',
        () => $t('message.customer.0018', '이름을 정확하게 입력해 주세요.'),
        value => (/[^가-힣a-zA-Z]/g.test(value) ? false : true)
      )
      // 자음, 모음만 있는 한글 제한
      .test(
        'koNotConsonantVowel',
        () => $t('message.customer.0018', '이름을 정확하게 입력해 주세요.'),
        value => (/([ㄱ-ㅎㅏ-ㅣ])/.test(value) ? false : true)
      )
      // 한글일때, 한글 2자 이상 최대 10자 입력
      .test(
        'koMax10',
        () => $t('message.customer.0018', '이름을 정확하게 입력해 주세요.'),
        value => {
          const isKo = /[가-힣]/.test(value)
          const valueLength = value.length
          if (isKo && (valueLength < 2 || valueLength > 10)) {
            return false
          } else {
            return true
          }
        }
      )
      // 한글일때, 한글 2자 이상 최대 10자 입력
      .test(
        'enMax10',
        () => $t('message.customer.0018', '이름을 정확하게 입력해 주세요.'),
        value => {
          const isEn = /[a-zA-Z]/.test(value)
          const valueLength = value.length
          if (isEn && (valueLength < 2 || valueLength > 20)) {
            return false
          } else {
            return true
          }
        }
      )
      // 한/영 조합 불가
      .test(
        'notKoAndEn',
        () => $t('message.customer.0018', '이름을 정확하게 입력해 주세요.'),
        value => {
          const isKo = /[가-힣]/.test(value)
          const isEn = /[a-zA-Z]/.test(value)
          if (isKo && isEn) {
            return false
          } else {
            return true
          }
        }
      )
  )
}

// 스키마 유효성체크 성공시 실행
function onSubmit(values: SubmissionHandler) {
  console.log('[onSubmit]', JSON.stringify(values, null, 2))
  alert(JSON.stringify(values, null, 2))

  // 복합 유효성 체크 진행
}

// 스키마 유효성체크 실패시 실행
function onInvalidSubmit({ values, errors, results, evt }: InvalidSubmissionContext) {
  console.log('[onInvalidSubmit]', JSON.stringify(values, null, 2))
  console.log('[context]', values, errors, results, evt)
}

// --------------------------------------------------------------------- [변수 및 상수]
// --------------------------------------------------------------------- [Vue 내장 메서드]
// --------------------------------------------------------------------- [생명 주기 함수]
// --------------------------------------------------------------------- [내부 함수 (functions)]
</script>

<style lang="scss">
@use '~/pages/customer/member/scss/join';
</style>
