<template>
  <div class="password-change-wrap cycle-change">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">{{ $t('label.customer.0079', '비밀번호 변경') }}</h2>

    <div class="inner-wrap">
      <div class="input-form-wrap">
        <!-- is-complete, is-error, is-active -->
        <div
          class="input-input-wrap"
          :class="{
            'is-error': userPassword.meta.dirty && !userPassword.meta.valid,
            'is-complete': userPassword.meta.valid && !writingUserPassword
          }"
        >
          <label for="userPassword" style="white-space: pre-wrap">
            {{ $t('label.customer.0084', '고객님의 개인정보 호보를 위해 3개월마다\n비밀번호를 변경해 주세요.') }}
          </label>
          <div class="input-text-wrap">
            <input
              :type="isShowUserPassword ? 'text' : 'password'"
              autocomplete="off"
              :placeholder="$t('label.customer.0081', '비밀번호 (영문, 숫자, 특수문자 8~16자)')"
              maxlength="16"
              name="userPassword"
              ref="userPasswordRef"
              required
              v-model="userPassword.value.value"
              @input="_onInputUserPassword"
              @focus="_onFocusUserPassword"
              @blur="_onBlurUserPassword"
            />

            <div class="btns-wrap">
              <button
                type="button"
                class="view-btn"
                :class="{ 'is-active': isShowUserPassword }"
                @click="_onClickShowHideUserPassword"
                @blur="_onBlurUserPassword"
                v-show="String(userPassword.value.value).length > 0"
              >
                {{ $t('label.customer.0007', '비밀번호 보기 숨기기') }}
              </button>
              <button
                type="button"
                class="del-btn"
                @click="_onClickDeleteUserPassword"
                @blur="_onBlurUserPassword"
                v-show="String(userPassword.value.value).length > 0"
              >
                {{ $t('label.common.0001', '삭제') }}
              </button>
            </div>
          </div>
          <p class="info-msg is-error" v-show="userPassword.errorMessage.value">
            {{ userPassword.errorMessage.value }}
          </p>
        </div>

        <div
          class="input-input-wrap"
          :class="{
            'is-error': confirmPassword.meta.dirty && !confirmPassword.meta.valid,
            'is-complete': confirmPassword.meta.valid && !writingConfirmPassword
          }"
        >
          <div class="input-text-wrap">
            <input
              :type="isShowConfirmPassword ? 'text' : 'password'"
              autocomplete="off"
              :placeholder="$t('label.customer.0082', '비밀번호 확인')"
              maxlength="16"
              :title="$t('label.customer.0083', '비밀번호 변경 확인 입력')"
              ref="confirmPasswordRef"
              required
              v-model="confirmPassword.value.value"
              @input="_onInputConfirmPassword"
              @focus="_onFocusConfirmPassword"
              @blur="_onBlurConfirmPassword"
            />
            <div class="btns-wrap">
              <button
                type="button"
                class="view-btn"
                :class="{ 'is-active': isShowConfirmPassword }"
                @click="_onClickShowHideConfirmPassword"
                @blur="_onBlurConfirmPassword"
                v-show="String(confirmPassword.value.value).length > 0"
              >
                {{ $t('label.customer.0007', '비밀번호 보기 숨기기') }}
              </button>
              <button
                type="button"
                class="del-btn"
                @click="_onClickDeleteConfirmPassword"
                @blur="_onBlurConfirmPassword"
                v-show="String(confirmPassword.value.value).length > 0"
              >
                {{ $t('label.common.0001', '삭제') }}
              </button>
            </div>
          </div>
          <p class="info-msg is-error" v-show="confirmPassword.errorMessage.value">
            {{ confirmPassword.errorMessage.value }}
          </p>

          <div class="button-group-wrap">
            <button type="button" @click="_onClickAfter30Days">
              {{ $t('label.customer.0085', '30일 후에 변경') }}
            </button>
            <button type="button" class="certify-btn" @click="_onClickChange">
              {{ $t('label.customer.0079', '비밀번호 변경') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
///////////////////////////////////////////////////////////////////
// 1. 의존성 (dependencies)
///////////////////////////////////////////////////////////////////
import { useField } from 'vee-validate'
import * as yup from 'yup'
import { replace } from 'lodash-es'

///////////////////////////////////////////////////////////////////
// 2. 프레임워크 내장 모듈 (utils, modules, functions, .ts file)
///////////////////////////////////////////////////////////////////
import { getOSByUserAgent } from '@/utils/device'
import { putPasswordChange } from '~/api/customer'

///////////////////////////////////////////////////////////////////
// 3. 타입스크립트 관련 모듈 (types, enums, interface, class)
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// 4. 컴포넌트 (components)
///////////////////////////////////////////////////////////////////
import Toast from '@/components/toast'

///////////////////////////////////////////////////////////////////
// 5. 변수 및 상수 (variables)
///////////////////////////////////////////////////////////////////
// 라우터
const router = useRouter()

// 비밀번호 연속된 문자 체크용
const CONSECUTIV_KEY = ['QWERTYUIOP', 'POIUYTREWQ', 'ASDFGHJKL', 'LKJHGFDSA', 'ZXCVBNM', 'MNBVCXZ']

// 비밀번호
const userPassword = useField<string>(
  'userPassword',
  yup
    .string()
    .required($t('message.customer.0013', '비밀번호는 8~16자 이내로 입력해 주세요.'))
    .min(8, $t('message.customer.0013', '비밀번호는 8~16자 이내로 입력해 주세요.'))
    .max(16, $t('message.customer.0013', '비밀번호는 8~16자 이내로 입력해 주세요.'))
    .test(
      'isNotEngNumSpc',
      $t('message.customer.0072', '영문, 숫자, 특수문자 중 두 가지 이상을 조합해 주세요.'),
      value => {
        return !/[^a-zA-Z0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/.test(value)
      }
    )
    .test(
      'isSameChar3times',
      $t('message.customer.0015', '동일한 문자/숫자를 연속으로 사용할 수 없습니다. 예) 111, ddd'),
      value => {
        return !/(.)\1\1/.test(value)
      }
    )
    .test(
      'isConsecutiveChar',
      $t('message.customer.0014', '연속된 문자/숫자는 사용할 수 없습니다. 예) 123, abc'),
      value => {
        const charArray = [...value].map(p => p.charCodeAt(0))
        for (let i = 0; i < charArray.length - 2; i++) {
          const [one, two, three] = charArray.slice(i, i + 3)
          if (Math.abs(one - two) == 1 && Math.abs(two - three) == 1 && Math.abs(one - three) == 2) {
            return false
          }
        }

        for (let i = 0; i < value.length - 2; i++) {
          const threeLetters = value.slice(i, i + 3)
          if (CONSECUTIV_KEY.some(k => k.includes(threeLetters.toUpperCase()))) {
            return false
          }
        }

        return true
      }
    )
    .matches(
      /^(?=.*[a-zA-Z0-9])(?=.*[a-zA-Z\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])(?=.*[0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]).*$/,
      $t('message.customer.0072', '영문, 숫자, 특수문자 중 두 가지 이상을 조합해 주세요.')
    )
)

// 비밀번호 확인
const confirmPassword = useField<string>(
  'confirmPassword',
  yup.string().test('samePassword', $t('message.customer.0054', '비밀번호가 일치하지 않습니다.'), value => {
    return typeof value !== 'undefined' && value === userPassword.value.value
  })
)

// ref 변수
const userPasswordRef = ref<HTMLInputElement | null>(null)
const confirmPasswordRef = ref<HTMLInputElement | null>(null)

// input 포커스 여부
const writingUserPassword = ref<boolean>(false)
const writingConfirmPassword = ref<boolean>(false)

// input 비밀번호 표기 유무
const isShowUserPassword = ref<boolean>(false)
const isShowConfirmPassword = ref<boolean>(false)

///////////////////////////////////////////////////////////////////
// 6. Vue 내장 메서드
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// 7. 생명 주기 함수 (life cycle hooks)
///////////////////////////////////////////////////////////////////
onBeforeMount(() => {
  // 앞, 뒤로가기, 새로고침으로 해당 페이지 접근 방지를 위한 history 정리
  // TODO: 삼항연산자를 추가한 이유는 이전 history가 없는 경우 페이지 에러를 방지하기 위해서인데,
  // 추후 router에서 requiredAuth를 활성화 해주면 해당 방어 로직은 지워도 될 것 같음.
  router.options.history.replace(
    (router.options.history.state.back as string) !== null ? (router.options.history.state.back as string) : '/',
    router.options.history.state
  )
})

onMounted(() => {
  // 비밀번호 포커스
  userPasswordRef.value?.focus()
})

onBeforeRouteLeave((to, _, next) => {
  // 뒤로가기(로그인 화면)일 경우 메인 페이지로 이동
  // TODO: undefinde는 추후 삭제 필요
  if (to.name === 'CustomerLogin' || to.name === undefined) {
    next('/')
  } else {
    next()
  }
})

///////////////////////////////////////////////////////////////////
// 8. 내부 함수 (functions)
///////////////////////////////////////////////////////////////////
// 비밀번호 input
function _onInputUserPassword(e: InputEvent): void {
  // 공백 제거
  userPassword.setValue(replace((e.target as HTMLInputElement).value, /(\s*)/g, ''))

  if (confirmPassword.value.value) {
    confirmPassword.validate()
  }
}

// 비밀번호 focus
function _onFocusUserPassword(): void {
  writingUserPassword.value = true
}

// 비밀번호 blur
function _onBlurUserPassword(e: FocusEvent): void {
  if (
    !e.relatedTarget ||
    ((e.relatedTarget as HTMLElement).className !== 'del-btn' &&
      (e.relatedTarget as HTMLElement).className !== 'view-btn')
  ) {
    writingUserPassword.value = false
  }
}

// 비밀번호 확인 input
function _onInputConfirmPassword(e: InputEvent): void {
  // 공백 제거
  confirmPassword.setValue(replace((e.target as HTMLInputElement).value, /(\s*)/g, ''))
}

// 비밀번호 확인 focus
function _onFocusConfirmPassword(): void {
  writingConfirmPassword.value = true
}

// 비밀번호 확인 blur
function _onBlurConfirmPassword(e: FocusEvent): void {
  if (
    !e.relatedTarget ||
    ((e.relatedTarget as HTMLElement).className !== 'del-btn' &&
      (e.relatedTarget as HTMLElement).className !== 'view-btn')
  ) {
    writingConfirmPassword.value = false
  }
}

// validation check
async function isALlValid(): Promise<boolean> {
  // 비밀번호 입력 안 했을 경우는 yup validation 결과와 살짝 다르게 출력
  if (userPassword.value.value === '') {
    userPassword.setErrors($t('message.customer.0013', '비밀번호는 8~16자 이내로 입력해 주세요.'))
    return false
  }

  // 비밀번호 validation
  if (!(await userPassword.validate()).valid) {
    return false
  }

  // 비밀번호 확인 validation
  if (!(await confirmPassword.validate()).valid) {
    return false
  }

  return true
}
// 인증번호 전송 버튼 클릭
async function _onClickChange(): Promise<void> {
  // validation
  if (!(await isALlValid())) {
    return
  }

  // api 호출
  callPasswordChange()
}

// Password Change API 호출
async function callPasswordChange(): Promise<void> {
  // TODO: API 나오면 수정
  const { data } = await putPasswordChange({ loginId: String(''), paramComb: userPassword.value.value })

  switch (data.resultCode) {
    case '7951': {
      // 성공
      changeResult7951()
      break
    }
    case '7734': {
      // 실패 - 공백, 한글 사용 불가
      changeResult7734()
      break
    }
    case '7735': {
      // 실패 - 글자 수 8~16자
      changeResult7735()
      break
    }
    case '7736': {
      // 실패 - 영문 대, 소문자, 숫자, 특수문자 중 2가지 이상
      changeResult7736()
      break
    }
    case '7737': {
      // 실패 - 연속 문자(123, abc, ...) 3회 이상 불가능
      changeResult7737()
      break
    }
    case '7738': {
      // 실패 - 동일 문자(111, aaa, ...) 3회 이상 불가능
      changeResult7738()
      break
    }
    default: {
      // 7739 사용중인 비밀번호
      changeResult7739()
      break
    }
  }
}

// Password Change api result code 7951
// 성공
function changeResult7951(): void {
  // 토스트 팝업
  Toast({
    content: $t('message.customer.0074', '비밀번호가 변경되었습니다. 다시 로그인해 주세요.'),
    position: 'top'
  })

  // 메인 페이지로 전환
  router.replace('/')
}

// Password Change api result code 7734
// 공백, 한글 사용 불가
function changeResult7734(): void {
  userPassword.setErrors($t('message.customer.0072', '영문, 숫자, 특수문자 중 두 가지 이상을 조합해 주세요.'))
}

// Password Change api result code 7735
// 글자 수 8~16자
function changeResult7735(): void {
  userPassword.setErrors($t('message.customer.0013', '비밀번호는 8~16자 이내로 입력해 주세요.'))
}

// Password Change api result code 7736
// 영문 대, 소문자, 숫자, 특수문자 중 2가지 이상
function changeResult7736(): void {
  userPassword.setErrors($t('message.customer.0072', '영문, 숫자, 특수문자 중 두 가지 이상을 조합해 주세요.'))
}

// Password Change api result code 7737
// 연속 문자(123, abc, ...) 3회 이상 불가능
function changeResult7737(): void {
  userPassword.setErrors($t('message.customer.0014', '연속된 문자/숫자는 사용할 수 없습니다. 예) 123, abc'))
}

// Password Change api result code 7738
// 동일 문자(111, aaa, ...) 3회 이상 불가능
function changeResult7738(): void {
  userPassword.setErrors($t('message.customer.0015', '동일한 문자/숫자를 연속으로 사용할 수 없습니다. 예) 111, ddd'))
}

// Password Change api result code 7739
// 사용중인 비밀번호
function changeResult7739(): void {
  userPassword.setErrors($t('message.customer.0073', '현재 사용 중인 비밀번호입니다. 다른 비밀번호를 입력해 주세요.'))
}

// 30일 후에 변경 클릭
function _onClickAfter30Days(): void {
  //TODO: API 나오면 연결

  // 메인 페이지로 전환
  router.replace('/')
}

// 비밀번호 보기, 숨기기 버튼 클릭
function _onClickShowHideUserPassword(): void {
  isShowUserPassword.value = !isShowUserPassword.value
}

// 비밀번호 확인 보기, 숨기기 버튼 클릭
function _onClickShowHideConfirmPassword(): void {
  isShowConfirmPassword.value = !isShowConfirmPassword.value
}

// 비밀번호 삭제 버튼 클릭
function _onClickDeleteUserPassword(): void {
  userPassword.setValue('')
}

// 비밀번호 확인 삭제 버튼 클릭
function _onClickDeleteConfirmPassword(): void {
  confirmPassword.setValue('')
}
</script>

<style lang="scss">
@use '~/pages/customer/login/scss/login.scss';
</style>
