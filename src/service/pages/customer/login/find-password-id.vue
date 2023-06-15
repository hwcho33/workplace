<template>
  <div class="info-find-wrap password-find">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">
      {{ $t('label.customer.0004', '비밀번호 찾기') }}
    </h2>

    <div class="inner-wrap">
      <div class="form-wrap">
        <!-- is-active is-auto-complete -->
        <div
          class="find-input-wrap"
          :class="{
            'is-error': userId.meta.dirty && !userId.meta.valid,
            'is-complete': userId.meta.valid && !writingUserId,
            'is-auto-complete': writingUserId && includes(userId.value.value, '@') && domainList.length > 0
          }"
        >
          <div class="input-text-wrap">
            <input
              type="text"
              autocomplete="off"
              :placeholder="$t('label.customer.0076', '아이디(이메일주소)')"
              :title="$t('label.customer.0077', '아이디(이메일주소) 입력')"
              maxlength="40"
              name="userId"
              ref="userIdRef"
              required
              v-model="userId.value.value"
              @input="_onInputUserId"
              @focus="_onFocusUserId"
              @blur="_onBlurUserId"
            />
            <div class="btns-wrap">
              <button
                type="button"
                class="del-btn"
                @click="_onClickDeleteTel"
                @blur="_onBlurUserId"
                v-show="String(userId.value.value).length > 0"
              >
                {{ $t('label.common.0001', '삭제') }}
              </button>
            </div>
            <ul
              class="input-complete-wrap"
              v-show="writingUserId && includes(userId.value.value, '@') && domainList.length > 0"
            >
              <li v-for="(item, index) in domainList" :key="index" @mousedown="_onClickDomainSelect(item.domain)">
                <span class="user-id">{{ userId.value.value }}</span
                >{{ item.str }}
              </li>
            </ul>
          </div>
          <p class="info-msg is-error" v-show="userId.errorMessage.value">{{ userId.errorMessage.value }}</p>
        </div>
      </div>

      <div class="button-group-wrap">
        <button type="button" class="confirm-btn" @click="_onClickConfirm">
          {{ $t('label.common.0002', '확인') }}
        </button>
      </div>
      <p class="find-msg">
        {{ $t('label.customer.0078', '아이디가 기억나지 않으세요?') }}
        <a href="javascript:void(0)" class="link" @click="_onClickToFindId">{{
          $t('label.customer.0051', '아이디 찾기')
        }}</a>
      </p>
    </div>
    <Dialog ref="dialogRef" />
  </div>
</template>

<script lang="ts" setup>
///////////////////////////////////////////////////////////////////
// 1. 의존성 (dependencies)
///////////////////////////////////////////////////////////////////
import { useField } from 'vee-validate'
import * as yup from 'yup'
import { replace, includes, startsWith, split } from 'lodash-es'

///////////////////////////////////////////////////////////////////
// 2. 프레임워크 내장 모듈 (utils, modules, functions, .ts file)
///////////////////////////////////////////////////////////////////
import { getOSByUserAgent } from '@/utils/device'
import { getIdCheck } from '~/api/customer'

///////////////////////////////////////////////////////////////////
// 3. 타입스크립트 관련 모듈 (types, enums, interface, class)
///////////////////////////////////////////////////////////////////
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

// 아이디
const userId = useField<string>(
  'userId',
  yup
    .string()
    .required($t('message.customer.0050', '이메일 또는 아이디를 입력해 주세요.'))
    .max(40, $t('message.customer.0051', '40자 이내로 입력해 주세요.'))
)

// 출력용 도메인 목록
const domainList = ref<Email[]>([])

//ref 변수
const userIdRef = ref<HTMLInputElement | null>(null)

// input 포커스 여부
const writingUserId = ref<boolean>(false)

// 임시 20회 체크
let certFailCounter: number = 0

///////////////////////////////////////////////////////////////////
// 6. Vue 내장 메서드
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// 7. 생명 주기 함수 (life cycle hooks)
///////////////////////////////////////////////////////////////////
onMounted(() => {
  const presetId = router.options.history.state?.presetId as string

  if (!presetId) {
    // 이메일 포커스
    userIdRef.value?.focus()
    return
  }

  // 앞, 뒤로가기로 해당 페이지 접근 방지를 위한 history 정리
  delete router.options.history.state.presetId
  delete history.state.presetId
  router.options.history.replace(router.options.history.state.current as string, router.options.history.state)

  userId.value.value = presetId
  userId.validate()
})

///////////////////////////////////////////////////////////////////
// 8. 내부 함수 (functions)
///////////////////////////////////////////////////////////////////
// 이메일 input
function _onInputUserId(e: InputEvent): void {
  // 공백 제거
  userId.setValue(replace((e.target as HTMLInputElement).value, /(\s*)/g, ''))

  // @ 입력시 이메일 자동완성
  if (!includes(userId.value.value, '@')) {
    domainList.value = []
    return
  }

  const splitedEmail = split(userId.value.value, '@')
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

// 아이디 focus
function _onFocusUserId(): void {
  writingUserId.value = true
}

// 아이디 blur
function _onBlurUserId(e: FocusEvent): void {
  if (!e.relatedTarget || (e.relatedTarget as HTMLElement).className !== 'del-btn') {
    writingUserId.value = false

    domainList.value = []
  }
}

// 도메인 리스트 클릭
function _onClickDomainSelect(item: string): void {
  userId.setValue(split(userId.value.value, '@')[0] + '@' + item)

  domainList.value = []
}

// validation check
async function isALlValid(): Promise<boolean> {
  // 아이디 validation
  if (!(await userId.validate()).valid) {
    return false
  }

  return true
}
// 인증번호 전송 버튼 클릭
async function _onClickConfirm(): Promise<void> {
  // validation
  if (!(await isALlValid())) {
    return
  }

  // 인증 횟수 체크 - TODO: API에서 체크 필요
  certFailCounter++

  if (certFailCounter > 9) {
    // 얼럿
    dialogRef.value?.open({
      message: $t('message.customer.0065', '전송횟수가 초과 되었습니다. 10분 후 다시 시도해 주세요.'),
      callbackFunction: dialogCallback
    })
    return
  }

  // api 호출
  callIdCheck()
}

// ID Check API 호출
async function callIdCheck(): Promise<void> {
  const { data } = await getIdCheck({
    loginId: userId.value.value
  })

  switch (data.resultCode) {
    case '7951': {
      // 유효한 아이디
      verifResult7951()
      break
    }
    default: {
      // 7812 아이디 없음
      idCheckResult7812()
      break
    }
  }
}

// ID Check api result code 7809
// 유효한 아이디(성공)
function verifResult7951(): void {
  // 인증 페이지로 이동
  router.push({ path: '/customer/login/find-password', state: { presetId: userId.value.value } })
}

// ID Check api result code 7810
// 아이디 없음
function idCheckResult7812(): void {
  userId.setErrors($t('message.customer.0071', '가입되지 않은 아이디입니다. 다시 입력해 주세요.'))
}

// 이메일 삭제 버튼 클릭
function _onClickDeleteTel(): void {
  userId.setValue('')
}

// 아이디 찾기 버튼 클릭
function _onClickToFindId(): void {
  router.push('/customer/login/find-id')
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
