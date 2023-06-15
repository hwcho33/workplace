<template>
  <div class="join-member-wrap">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">{{ $t('label.customer.0048', '회원가입') }}</h2>

    <div class="inner-wrap">
      <div class="join-form-wrap">
        <div class="join-input-wrap is-auto-compleate" :class="{ 'is-complete': state.verifiedIdCode === '7703' }">
          <!-- is-active, is-auto-complete, is-complete, is-error -->
          <label for="userId">{{ $t('label.customer.0001', '아이디(이메일 주소)') }}</label>
          <div class="input-text-wrap">
            <input
              id="userId"
              name="user-id"
              type="text"
              :value="userId.value.value"
              :placeholder="$t('label.customer.0002')"
              @input="changeId"
              @focus="focusId"
              @blur="verifyId"
              required
              autocomplete="off"
            />
            <div class="btns-wrap">
              <button
                v-show="userId.value.value"
                @click=";[userId.value.value, state.verifiedIdCode] = ['', '']"
                type="button"
                class="del-btn"
              >
                {{ $t('label.common.0001', '삭제') }}
              </button>
            </div>
            <ul v-show="domains.length > 0" class="input-complete-wrap">
              <li @mousedown.left="() => selectDomain(domain)" v-for="domain in domains" :key="domain">
                <span class="user-id">
                  {{ userId.value.value.split('@')[0] + '@' }}
                </span>
                <span>
                  {{ domain }}
                </span>
              </li>
            </ul>
          </div>

          <p v-show="validForm.errors.value['user-id']" class="info-msg is-error">
            {{ validForm.errors.value['user-id'] }}
          </p>
          <div
            class="button-group-wrap"
            :class="{ active: state.verifiedIdCode === '7704' || state.verifiedIdCode === '7705' }"
          >
            <!-- active 영역활성화-->
            <button type="button" class="login-btn" @mousedown.stop="router.push({ name: 'CustomerLogin' })">
              {{ $t('label.customer.0003', '로그인') }}
            </button>
            <button
              type="button"
              class="password-btn"
              @mousedown.stop="router.push({ name: 'CustomerFindPasswordId', state: { presetId: userId.value.value } })"
            >
              {{ $t('label.customer.0004', '비밀번호 찾기') }}
            </button>
          </div>
        </div>

        <div class="join-input-wrap password" :class="{ 'is-complete': state.isValidPw }">
          <label for="userPw">{{ $t('label.customer.0005', '비밀번호') }}</label>
          <div class="input-text-wrap">
            <input
              id="userPw"
              name="user-pw"
              :type="state.isShowPw ? 'text' : 'password'"
              :value="userPw.value.value"
              :placeholder="$t('label.customer.0006', '영문, 숫자, 특수문자 조합 8~16자')"
              @focus="state.isValidPw = false"
              @blur="verifyPw"
              @input="changePw"
              autocomplete="off"
              required
            />
            <div class="btns-wrap">
              <button
                type="button"
                @mousedown="state.isShowPw = !state.isShowPw"
                class="view-btn"
                :class="{ 'is-active': state.isShowPw }"
              >
                {{ $t('label.customer.0007', '비밀번호 보기 숨기기') }}
              </button>
              <button type="button" @mousedown=";[userPw.value.value, state.pwErrorMessage] = ['', '']" class="del-btn">
                {{ $t('label.common.0001', '삭제') }}
              </button>
            </div>
          </div>
          <p v-show="validForm.errors.value['user-pw']" class="info-msg is-error">
            {{ validForm.errors.value['user-pw'] }}
          </p>
        </div>

        <div class="join-input-wrap" :class="{ 'is-complete': state.isValidName }">
          <label for="userName">{{ $t('label.customer.0008', '이름') }}</label>
          <div class="input-text-wrap">
            <input
              id="userName"
              name="user-name"
              type="text"
              :placeholder="$t('label.customer.0009', '예) 홍길동')"
              :value="userName.value.value"
              @focus="state.isValidName = false"
              @blur="verifyName"
              @input="changeName"
              autocomplete="off"
              required
            />
            <div class="btns-wrap">
              <button type="button" class="del-btn" @mousedown="userName.value.value = ''">
                {{ $t('label.common.0001', '삭제') }}
              </button>
            </div>
          </div>
          <p v-show="validForm.errors.value['user-name']" class="info-msg is-error">
            {{ validForm.errors.value['user-name'] }}
          </p>
        </div>

        <div
          class="join-input-wrap"
          :class="{ 'is-complete': state.tvMemberCheckCode === '7706' || state.smsVerificationCode === '7951' }"
        >
          <label for="userTel">{{ $t('label.customer.0010', '휴대폰 번호') }}</label>
          <div class="input-text-wrap">
            <input
              id="userTel"
              name="user-tel"
              type="tel"
              :value="userTel.value.value"
              :placeholder="$t('label.customer.0011', '‘-’ 없이 입력')"
              @blur="verifyTel"
              @input="changeTel"
              autocomplete="off"
              required
            />
            <div class="btns-wrap">
              <button type="button" class="del-btn" @mousedown="deleteTel">
                {{ $t('label.common.0001', '삭제') }}
              </button>
            </div>
          </div>

          <p
            style="white-space: pre-wrap"
            v-show="validForm.errors.value['user-tel'] && !state.smsCertificationCode"
            class="info-msg is-error"
          >
            {{ validForm.errors.value['user-tel'] }}
          </p>
          <p v-if="state.time" class="info-msg is-warning">{{ $t('message.customer.0020') }}</p>
          <p v-if="state.smsVerificationCode === '7951'" class="info-msg is-warning">
            {{ $t('message.customer.0024') }}
          </p>
          <p v-if="state.smsCertificationCode === '7714'" class="info-msg is-error">
            {{
              $t('message.customer.????', '인증번호 전송에 실패하였습니다.\n 인증번호요청을 다시 해주시기 바랍니다.')
            }}
          </p>

          <div class="button-group-wrap" :class="{ active: state.tvMemberCheckCode === '7708' }">
            <!-- active 영역활성화-->
            <button type="button" class="login-btn" @mousedown.stop="router.push({ name: 'CustomerLogin' })">
              {{ $t('label.customer.0003', '로그인') }}
            </button>
            <button type="button" class="send-btn" @mousedown="sendVerificationCode">
              {{ $t('label.customer.0012', '인증번호 전송') }}
            </button>
          </div>
          <div
            class="button-group-wrap"
            :class="{ active: state.tvMemberCheckCode === '7707' || state.tvMemberCheckCode === '7710' }"
          >
            <!-- active 영역활성화-->
            <button type="button" class="login-btn" @mousedown="authenticatePhone">
              {{ $t('label.customer.0050', '휴대폰 인증하기') }}
            </button>
          </div>
        </div>

        <div v-if="state.smsCertificationCode === '7713'" class="join-input-wrap certification is-active">
          <label for="userCertnum">{{ $t('label.customer.0013', '인증번호 입력') }}</label>
          <div class="input-text-wrap">
            <input
              id="userCertnum"
              name="user-certnum"
              type="text"
              autofocus
              :value="userCertnum.value.value"
              :placeholder="$t('label.customer.0013', '인증번호 입력')"
              @input="changeCertnum"
              autocomplete="off"
            />
            <div class="cert-num-wrap">
              <span>{{ state.time }}</span>
            </div>
            <p
              v-show="validForm.errors.value['user-certnum'] || state.smsVerificationErrorMessage"
              class="info-msg is-error"
            >
              {{ validForm.errors.value['user-certnum'] || state.smsVerificationErrorMessage }}
            </p>
            <div class="button-group-wrap active">
              <button
                @click="reSendVerificationCode"
                type="button"
                class="retry-btn"
                :class="{ disable: !state.isResend }"
              >
                {{ $t('label.customer.0014', '재전송') }}
              </button>
              <button
                @click="verifySms"
                type="button"
                class="certify-btn"
                :class="{ disable: state.time === '00:00' || userCertnum.value.value.length !== 4 }"
              >
                {{ $t('label.customer.0015', '인증하기') }}
              </button>
            </div>
          </div>
        </div>

        <div class="join-input-wrap" :class="{ 'is-complete': state.isValidBirth }">
          <label for="userBirth">{{ $t('label.customer.0016', '생년월일') }}</label>
          <div class="input-text-wrap">
            <input
              id="userBirth"
              name="user-birth"
              type="tel"
              :placeholder="$t('label.customer.0017', '예) 19681001')"
              :value="userBirth.value.value"
              @input="changeBirth"
              @blur="verifyBirth"
              @focus="state.isValidBirth = false"
              autocomplete="off"
              required
            />
            <div class="btns-wrap">
              <button
                @mousedown=";[userBirth.value.value, state.birthErrorMessage] = ['', '']"
                type="button"
                class="del-btn"
              >
                {{ $t('label.common.0001', '삭제') }}
              </button>
            </div>
          </div>
          <p v-show="validForm.errors.value['user-birth'] || state.birthErrorMessage" class="info-msg is-error">
            {{ validForm.errors.value['user-birth'] || state.birthErrorMessage }}
          </p>
        </div>

        <div class="join-radio-wrap">
          <span>{{ $t('label.customer.0018', '성별') }}</span>
          <div class="join-radio">
            <input id="female" name="user-gender" type="radio" value="female" v-model="userGender.value.value" />
            <label for="female">{{ $t('label.customer.0020') }}</label>
            <input id="male" name="user-gender" type="radio" value="male" v-model="userGender.value.value" />
            <label for="male">{{ $t('label.customer.0019') }}</label>
          </div>
          <p v-show="validForm.errors.value['user-gender']" class="info-msg is-error">
            {{ validForm.errors.value['user-gender'] }}
          </p>
        </div>

        <div class="join-agree-wrap">
          <div class="agree">
            <input id="allCheck" name="all-check" type="checkbox" value="all" v-model="computedAllCheck" />
            <label for="allCheck">{{ $t('label.customer.0049', '전체 동의') }}</label>
          </div>
          <div class="agree">
            <ul class="agree-list-wrap">
              <li>
                <div class="agree-list">
                  <input
                    id="termsOfUse"
                    name="agree-list"
                    type="checkbox"
                    value="termsOfUse"
                    v-model="agreeList.value.value"
                  />
                  <label for="termsOfUse">{{ $t('label.customer.0022', '(필수) 이용약관') }}</label>
                  <button type="button" class="popup-btn" @click="() => (state.openTermLayer = true)">
                    {{ $t('label.customer.0023', '약관보기') }}
                  </button>
                </div>
              </li>
              <li>
                <div class="agree-list" :class="{ 'is-active': state.personalInfo }">
                  <input
                    id="personalInfo"
                    name="agree-list"
                    type="checkbox"
                    value="personalInfo"
                    v-model="agreeList.value.value"
                  />
                  <label for="personalInfo">{{ $t('label.customer.0024', '(필수) 개인정보 수집 및 이용') }}</label>
                  <button @click="() => (state.personalInfo = !state.personalInfo)">
                    {{ $t('label.customer.0023', '약관보기') }}
                  </button>
                </div>
                <transition
                  name="dropdown"
                  @before-enter="onBeforeEnter"
                  @enter="onEnter"
                  @before-leave="onBeforeLeave"
                  @leave="onLeave"
                  :duration="{ enter: 800, leave: 600 }"
                >
                  <div class="agree-transition" v-if="state.personalInfo">
                    <div class="agree-content">
                      <div class="agree-table">
                        <table>
                          <caption>
                            {{
                              $t('label.customer.0025', '수집시점, 수집항목, 이용목적에 관한 표')
                            }}
                          </caption>
                          <colgroup>
                            <col style="width: 24%" />
                            <col style="width: 38%" />
                            <col style="width: auto" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>{{ $t('label.customer.0026', '수집시점') }}</th>
                              <th>{{ $t('label.customer.0027', '수집항목') }}</th>
                              <th>{{ $t('label.customer.0028', '이용목적') }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-center">{{ $t('label.customer.0029', '가입') }}</td>
                              <td>
                                {{
                                  $t(
                                    'label.customer.0030',
                                    '필수 : 이름, 아이디(이메일 주소), 비밀번호, 휴대폰전화번호, CI/DI 본인인증 정보(TV, 쇼핑북, T커머스 고객의 NSmall 회원 가입 시)'
                                  )
                                }}
                              </td>
                              <td>
                                <ul class="join-bullet-list">
                                  <li>{{ $t('label.customer.0031', '이용자 식별 및 회원관리') }}</li>
                                  <li>
                                    {{
                                      $t(
                                        'label.customer.0032',
                                        '민원처리 및 고객 피해보상, 고객주문ㆍ배송ㆍ상담처리 등 서비스 전반 제공'
                                      )
                                    }}
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">{{ $t('label.customer.0033', '주문') }}</td>
                              <td>
                                {{ $t('label.customer.0034', '필수 : 배송지 정보(성명, 휴대폰 전화번호, 주소)') }}
                              </td>
                              <td>
                                <ul class="join-bullet-list">
                                  <li>
                                    {{
                                      $t(
                                        'label.customer.0035',
                                        '상품, 사은품 또는 경품 등의 배송 민원처리 및 고객 피해보상, 고객주문ㆍ배송ㆍ상담처리 등 서비스 전반 제공'
                                      )
                                    }}
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <ul class="join-bullet-list type-mark">
                        <li>
                          {{ $t('label.customer.0036', '보유 기간 : 동의 철회 시 또는 법정 의무 보유기간까지') }}
                          <p>
                            {{
                              $t(
                                'label.customer.0037',
                                '개인정보 수집 및 이용에 대한 동의는 서비스 이용을 위해 꼭 필요합니다. 동의 거부하실 수 있으나, 이 경우 서비스 이용이 제한됩니다.'
                              )
                            }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </transition>
              </li>
              <li>
                <div class="agree-list" :class="{ 'is-active': state.marketingAgree }">
                  <input
                    id="marketingAgree"
                    name="agree-list"
                    type="checkbox"
                    value="marketing"
                    v-model="agreeList.value.value"
                  />
                  <label for="marketingAgree">{{ $t('label.customer.0038', '(선택) 마케팅 정보 수집 및 이용') }}</label>
                  <button @click="() => (state.marketingAgree = !state.marketingAgree)">
                    {{ $t('label.customer.0023', '약관보기') }}
                  </button>
                  <p v-show="validForm.errors.value['agree-list']" class="info-msg is-error">
                    {{ validForm.errors.value['agree-list'] }}
                  </p>
                </div>
                <transition
                  name="dropdown"
                  @before-enter="onBeforeEnter"
                  @enter="onEnter"
                  @before-leave="onBeforeLeave"
                  @leave="onLeave"
                  :duration="{ enter: 800, leave: 600 }"
                >
                  <div class="agree-transition" v-if="state.marketingAgree">
                    <div class="agree-content">
                      <div class="agree-table">
                        <table>
                          <caption>
                            {{
                              $t('label.customer.0039', '목적, 수집항목, 이용목적에 관한 표')
                            }}
                          </caption>
                          <colgroup>
                            <col style="width: 32%" />
                            <col style="width: 34%" />
                            <col style="width: 34%" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>{{ $t('label.customer.0040', '목적') }}</th>
                              <th>{{ $t('label.customer.0027', '수집항목') }}</th>
                              <th>{{ $t('label.customer.0028', '이용목적') }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <ul class="join-bullet-list">
                                  <li>
                                    {{
                                      $t('label.customer.0041', '맞춤형 서비스 제공을 위한 신규 서비스 개발 및 개선')
                                    }}
                                  </li>
                                  <li>
                                    {{
                                      $t(
                                        'label.customer.0042',
                                        '제테크, 보험, 상조 등 상품 및 이벤트 정보 안내, 마케팅(광고성 정보 수신 동의 고객에 한함)'
                                      )
                                    }}
                                  </li>
                                </ul>
                              </td>
                              <td>
                                <ul class="join-bullet-list">
                                  <li>{{ $t('label.customer.0043', '이메일, 휴대전화번호, 성별, 생년월일') }}</li>
                                </ul>
                              </td>
                              <td>{{ $t('label.customer.0044', '회원 탈퇴 시 또는 법정 의무 보유기간까지') }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <ul class="join-bullet-list type-mark">
                        <li>
                          {{
                            $t(
                              'label.customer.0045',
                              '(선택) 마케팅 정보 수집 및 이용에 거부할 수 있으며, 동의를 거부해도 서비스를 이용하실 수 있습니다.'
                            )
                          }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
        </div>

        <div class="join-agree-btn">
          <button @click="joinMember" type="button">
            {{ $t('label.customer.0046', '동의하고 가입하기') }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <Layer class="layer-terms-wrap" v-model="state.openTermLayer" layer-type="full">
    <template #header>{{ $t('label.customer.0047') }}</template>
    <template #contents>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="state.termsOfUse"></div>
    </template>
    <template #bottom>
      <div class="button-wrapper">
        <button class="button" type="button" @click="() => (state.openTermLayer = false)">확인</button>
      </div>
    </template>
  </Layer>
  <!-- <Dialog
    ref="joinFormDialog"
    :option-props="{
      addSelector: 'joinFormDialog',
      message: $t('message.customer.0065', '전송횟수가 초과 되었습니다. 10분 후 다시 시도해 주세요.'),
      header: false,
      bottom: true,
      firstButton: '확인',
      secondButton: undefined
    }"
  /> -->
</template>

<script lang="ts" setup>
import { useField, useForm } from 'vee-validate'
import { array, object, string } from 'yup'
// import dayjs from 'dayjs'

import { getOSByUserAgent } from '@/utils/device'
import { useDropdown } from '@/composables/ui/use-transition-hook'
import { JoinRequest } from '~/api/types/customer'
import { getTermsOfUse, getVerifiedId, getTvMemberCheck, smsCertification, smsVerification, join } from '~/api/customer'
import { useJoinUserStore } from '~/store'

import { Layer } from '@/components/layer'
import type { JoinFormUser } from '../type'
// import Dialog from '@/components/dialog/dialog-modal/index.vue'
//==============================================================================================================
// const joinFormDialog = ref<{ open: () => void; close: () => void } | null>(null)
const { onBeforeEnter, onEnter, onBeforeLeave, onLeave } = useDropdown()
const router = useRouter()
const joinUserStore = useJoinUserStore()
// const { setBasicOptions } = useSetDialogOptions()
const defaultDomains = [
  'naver.com',
  'hanmail.net',
  'gmail.com',
  'nate.com',
  'daum.net',
  'kakao.com',
  'hotmail.com',
  'korea.kr',
  'korea.com',
  'icloud.com'
]
const state: JoinFormUser = reactive({
  nIntervId: 0,
  isResendCnt: 0,
  personalInfo: false,
  marketingAgree: false,
  openTermLayer: false,
  isFocusStatusOfUserId: false,
  isShowPw: false,
  isValidPw: false,
  isValidName: false,
  isValidBirth: false,
  isResend: false,
  verifiedIdCode: '',
  pwErrorMessage: '',
  telErrorMessage: '',
  tvMemberCheckCode: '',
  smsCertificationCode: '',
  smsVerificationCode: '',
  smsVerificationErrorMessage: '',
  birthErrorMessage: '',
  time: '',
  seqNum: '',
  termsOfUse: ''
})

const schema = object({
  'user-id': string()
    .required($t('message.customer.0008', '아이디(이메일주소)를 입력해 주세요.'))
    .email($t('message.customer.0009', '정확한 이메일 형식으로 입력해 주세요.'))
    .test(
      'validId',
      () => $t(`backend.customer.${state.verifiedIdCode}`),
      () => {
        if (state.verifiedIdCode === '7703') return true
        return !state.verifiedIdCode
      }
    ),
  'user-pw': string()
    .required($t('message.customer.0013', '비밀번호는 8~16자 이내로 입력해 주세요.'))
    .min(8, $t('message.customer.0013', '비밀번호는 8~16자 이내로 입력해 주세요.'))
    .max(16, $t('message.customer.0013', '비밀번호는 8~16자 이내로 입력해 주세요.'))
    .test(
      'validPw',
      () => state.pwErrorMessage,
      () => !state.pwErrorMessage
    ),
  'user-name': string()
    .required($t('message.customer.0017', '이름을 입력해 주세요.'))
    .min(2, $t('message.customer.0018', '이름을 정확하게 입력해 주세요.'))
    .test('validName', $t('message.customer.0018', '이름을 정확하게 입력해 주세요.'), value => {
      const isEn = /[a-zA-Z]/.test(value)
      const isKo = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value)
      return !(isEn && isKo)
    })
    .test('validName', $t('message.customer.0018', '이름을 정확하게 입력해 주세요.'), value => {
      const isNotIncompleteKo = /[ㄱ-ㅎㅏ-ㅣ]/.test(value)
      return !isNotIncompleteKo
    })
    .when('koEn', {
      is: () => /[a-zA-Z]/.test(userName.value.value),
      then: schema => schema.max(20, $t('message.customer.0018', '이름을 정확하게 입력해 주세요.')),
      otherwise: schema => schema.max(10, $t('message.customer.0018', '이름을 정확하게 입력해 주세요.'))
    }),
  'user-tel': string()
    .required($t('message.customer.0025', '휴대폰 번호를 입력해 주세요.'))
    .min(12, $t('message.customer.0026', '휴대폰 번호를 정확하게 입력해 주세요.'))
    .max(13, $t('message.customer.0026', '휴대폰 번호를 정확하게 입력해 주세요.'))
    .test('validTel', $t('message.customer.0026', '휴대폰 번호를 정확하게 입력해 주세요.'), value =>
      ['010', '011', '016', '017', '018', '019'].some(digit => digit.includes(value.slice(0, 3)))
    )
    .test(
      'validTel',
      () => state.telErrorMessage,
      () => !state.telErrorMessage
    ),
  'user-certnum': string().when('userCertnum', {
    is: () => state.smsCertificationCode === '7713',
    then: string =>
      string
        .required($t('message.customer.0022', '인증번호를 입력해 주세요.'))
        .length(4, $t('message.customer.0023', '인증번호를 확인 후 다시 입력해 주세요.'))
  }),
  'user-birth': string()
    .required($t('message.customer.0030', '숫자 8자리로 입력해 주세요.'))
    .min(8, $t('message.customer.0030', '숫자 8자리로 입력해 주세요.'))
    .max(8, $t('message.customer.0030', '숫자 8자리로 입력해 주세요.')),
  'user-gender': string().required($t('message.customer.0033', '성별을 선택해 주세요.')),
  'agree-list': array().test(
    'validAgreeList',
    $t('message.customer.0034', '필수약관 동의 후 서비스를 이용할 수 있습니다.'),
    items => ['personalInfo', 'termsOfUse'].every(item => items?.some(o => o === item))
  )
})

const validForm = useForm({
  validationSchema: schema
})

const [userId, userPw, userName, userTel, userCertnum, userBirth, userGender, agreeList] = [
  useField<string>('user-id'),
  useField<string>('user-pw'),
  useField<string>('user-name'),
  useField<string>('user-tel'),
  useField<string>('user-certnum'),
  useField<string>('user-birth'),
  useField<string>('user-gender'),
  useField<Array<string>>('agree-list', undefined, { initialValue: [] })
]
//==============================================================================================================
const domains = computed(() => {
  if (!state.isFocusStatusOfUserId || !userId.value.value?.indexOf('@')) return []
  const [_, domain = ''] = userId.value.value.split('@')
  if (defaultDomains.includes(domain)) return []

  return userId.value.value.includes('@') && userId.value.value.indexOf('@') !== 0
    ? defaultDomains.filter(item => item.slice(0, domain.length) === domain)
    : []
})

const computedAllCheck = computed({
  get() {
    return agreeList.value?.value?.length === 3
  },
  set(newValue) {
    agreeList.value.value = newValue ? ['termsOfUse', 'personalInfo', 'marketing'] : []
  }
})
//==============================================================================================================
onBeforeMount(() => {
  const { userJoinState, userJoinValidForm, selfCertNumCheck } = joinUserStore.getJoinUser
  if (!userJoinState.termsOfUse) getTerms()
  if (userJoinValidForm.values) {
    validForm.resetForm({ errors: userJoinValidForm.errors, values: userJoinValidForm.values })

    Object.keys(userJoinState).forEach((key: string) => {
      state[key] = userJoinState[key]
    })
    //temp 휴대폰 본인인증 API 작업중으로 미완
    if (selfCertNumCheck) {
      state.tvMemberCheckCode = ''
      state.telErrorMessage = ''
      validForm.setFieldError('user-tel', undefined)
    }
    joinUserStore.setInit()
  }
})
//==============================================================================================================
async function getTerms(): Promise<void> {
  const termRes = await getTermsOfUse({ termCd: 'SA' })
  termRes.data.resultData?.termsCtnt
  if (termRes.data.resultData) state.termsOfUse = termRes.data.resultData.termsCtnt
}

function focusId(): void {
  state.isFocusStatusOfUserId = true
  state.verifiedIdCode = ''
}

function selectDomain(domain: string): void {
  const [id] = userId.value.value.split('@')
  userId.value.value = `${id}@${domain}`
}

function changeId(e: InputEvent): void {
  userId.value.value = (<HTMLInputElement>e.target).value
  state.verifiedIdCode = ''
}

function changePw(e: InputEvent): void {
  const data = <string>e.data
  const target = <HTMLInputElement>e.target
  const isKoCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(data)
  const isEmptyCheck = /\s/.test(data)

  if (!isKoCheck && !isEmptyCheck) {
    userPw.value.value = target.value
    state.pwErrorMessage = ''
  } else {
    target.value = userPw.value.value ?? ''
  }
}

function changeName(e: InputEvent): void {
  const data = <string>e.data
  const target = <HTMLInputElement>e.target
  const allowedKey = ['insertCompositionText', 'deleteContentBackward', 'deleteContentForward'].includes(e.inputType)
  const isEnAndKoCheck = data ? /[a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(data) : false

  if (isEnAndKoCheck || allowedKey) {
    userName.value.value = target.value
  } else {
    target.value = userName.value.value ?? ''
  }
}

function changeTel(e: InputEvent): void {
  const target = <HTMLInputElement>e.target

  if (target.value.length > 13) {
    target.value = userTel.value.value
    return
  }

  if (state.nIntervId) {
    clearInterval(state.nIntervId)
    state.nIntervId = 0
  }

  state.time = ''
  state.seqNum = ''
  state.telErrorMessage = ''
  userCertnum.value.value = ''
  state.tvMemberCheckCode = ''
  state.smsVerificationCode = ''
  state.smsCertificationCode = ''
  state.smsVerificationErrorMessage = ''

  const valiedPhone = changePhoneForm(target.value)
  userTel.value.value = valiedPhone ?? ''
  target.value = valiedPhone ?? ''
}

function changeCertnum(e: InputEvent) {
  const target = <HTMLInputElement>e.target
  if (target.value.length > 4) {
    target.value = userCertnum.value.value
    return
  }

  const allowedKey = ['deleteContentBackward', 'deleteContentForward'].includes(e.inputType)
  const isNumberCheck = e.data ? /[0-9]/.test(e.data) : false
  if (allowedKey || isNumberCheck) {
    state.smsVerificationErrorMessage = ''
    userCertnum.value.value = target.value
  } else {
    target.value = userCertnum.value.value ?? ''
  }
}

function changeBirth(e: InputEvent): void {
  const target = <HTMLInputElement>e.target
  if (target.value.length > 8) {
    target.value = userBirth.value.value

    return
  }

  const allowedKey = ['deleteContentBackward', 'deleteContentForward'].includes(e.inputType)
  const isNumberCheck = e.data ? /[0-9]/.test(e.data) : false
  if (allowedKey || isNumberCheck) {
    state.birthErrorMessage = ''
    state.isValidBirth = false
    userBirth.value.value = target.value
  } else {
    target.value = userBirth.value.value ?? ''
  }
}

function deleteTel(): void {
  if (state.nIntervId) {
    clearInterval(state.nIntervId)
    state.nIntervId = 0
  }
  userTel.value.value = ''
  userCertnum.value.value = ''

  state.time = ''
  state.seqNum = ''
  state.telErrorMessage = ''
  state.tvMemberCheckCode = ''
  state.smsVerificationCode = ''
  state.smsCertificationCode = ''
  state.smsVerificationErrorMessage = ''
}

async function verifyId(): Promise<void> {
  state.isFocusStatusOfUserId = false
  const isValidUserId = (await validForm.validateField('user-id')).valid

  if (!isValidUserId) {
    state.verifiedIdCode = ''
    return
  }

  const { data } = await getVerifiedId({ loginId: userId.value.value })

  state.verifiedIdCode = data.resultCode

  switch (state.verifiedIdCode) {
    case '7703':
      break
    case '7704':
      validForm.setFieldError('user-id', $t(`backend.customer.${data.resultCode}`))
      break
    case '7705':
      validForm.setFieldError('user-id', $t(`backend.customer.${data.resultCode}`))
  }
}

async function verifyPw(): Promise<void> {
  const isValidUserPw = (await validForm.validateField('user-pw')).valid
  if (!isValidUserPw) return

  const pw = userPw.value.value
  const isSmallCheck = /[a-z]/.test(pw)
  const isCapitalCheck = /[A-Z]/.test(pw)
  const isNumberCheck = /[0-9]/.test(pw)
  const isSpecialCharCheck = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/.test(pw)
  const isRepeatReg = /([a-zA-Z0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])\1{2}/.test(pw)

  const isTwoCombination = [isSmallCheck, isCapitalCheck, isNumberCheck, isSpecialCharCheck].filter(x => x).length > 1
  if (!isTwoCombination) {
    validForm.setFieldError('user-pw', $t('message.customer.0016'))
    state.pwErrorMessage = $t('message.customer.0016')
    return
  }

  if (isRepeatReg) {
    validForm.setFieldError('user-pw', $t('message.customer.0015'))
    state.pwErrorMessage = $t('message.customer.0015')
    return
  }

  const charArray = [...pw].map(p => p.charCodeAt(0))
  for (let i = 0; i < charArray.length - 2; i++) {
    const [one, two, three] = charArray.slice(i, i + 3)
    if (Math.abs(one - two) == 1 && Math.abs(two - three) == 1 && Math.abs(one - three) == 2) {
      validForm.setFieldError('user-pw', $t('message.customer.0014'))
      state.pwErrorMessage = $t('message.customer.0014')
      return
    }
  }

  const consecutiveKey = ['QWERTYUIOP', 'POIUYTREWQ', 'ASDFGHJKL', 'LKJHGFDSA', 'ZXCVBNM', 'MNBVCXZ']
  for (let i = 0; i < pw.length - 2; i++) {
    const threeLetters = pw.slice(i, i + 3)
    if (consecutiveKey.some(k => k.includes(threeLetters.toUpperCase()))) {
      validForm.setFieldError('user-pw', $t('message.customer.0014'))
      state.pwErrorMessage = $t('message.customer.0014')
      return
    }
  }

  state.isValidPw = true
}

async function verifyName() {
  const isValidUserPw = (await validForm.validateField('user-name')).valid
  if (!isValidUserPw) return

  state.isValidName = true
}

async function verifyTel() {
  const isValidUserTel = (await validForm.validateField('user-tel')).valid
  if (!isValidUserTel) return

  //타입
  const { data } = await getTvMemberCheck({ phoneNum: userTel.value.value })
  state.tvMemberCheckCode = data.resultCode

  switch (state.tvMemberCheckCode) {
    case '7706':
      //정상처리
      break

    case '7708':
      const loginIdList = <string[]>data?.resultData?.loginIdList
      if (loginIdList?.length > 4) {
        validForm.setFieldError('user-tel', $t(`backend.customer.${data.resultCode}.moreThanFour`))
        state.telErrorMessage = $t(`backend.customer.${data.resultCode}.moreThanFour`)
        break
      }
      const stringIds = loginIdList
        .map(id => {
          const [email, domain] = id.split('@')
          return `{${email.slice(0, 2).padEnd(email.length, '*')}@${domain}}`
        })
        .join(', ')

      validForm.setFieldError('user-tel', $t(`backend.customer.${data.resultCode}.lessThanFour`, { ids: stringIds }))
      state.telErrorMessage = $t(`backend.customer.${data.resultCode}.lessThanFour`, { ids: stringIds })
      break
    case '7707':
    case '7710':
      validForm.setFieldError(
        'user-tel',
        $t(`backend.customer.${data.resultCode}`, 'TV회원으로 가입된 번호로 인증이 필요합니다.')
      )
      state.telErrorMessage = $t(`backend.customer.${data.resultCode}`, 'TV회원으로 가입된 번호로 인증이 필요합니다.')
    //API 없음
  }
}

async function verifySms() {
  if (state.time === '00:00' || userCertnum.value.value.length !== 4) return
  const { data } = await smsVerification({ certNum: userCertnum.value.value, seqNum: state.seqNum })
  // const { data } = await smsVerification({ certNum: userCertnum.value.value, seqNum: '20829263' })
  state.smsVerificationCode = data?.resultCode
  state.smsVerificationErrorMessage = ''
  switch (state.smsVerificationCode) {
    case '7951':
      if (state.nIntervId) {
        clearInterval(state.nIntervId)
        state.nIntervId = 0
      }
      state.time = ''
      // state.seqNum = ''
      state.telErrorMessage = ''
      state.tvMemberCheckCode = ''
      state.smsCertificationCode = ''
      userCertnum.value.value = ''
      break
    case '7715':
      state.smsVerificationErrorMessage = $t(
        `backend.customer.${state.smsVerificationCode}`,
        '인증번호를 입력해 주세요.'
      )

      break
    case '7717':
      state.smsVerificationErrorMessage = $t(
        `backend.customer.${state.smsVerificationCode}`,
        '입력시간이 지났습니다. 다시 시도해 주세요.'
      )

      break
    case '7718':
      state.smsVerificationErrorMessage = $t(
        `backend.customer.${state.smsVerificationCode}`,
        '인증번호를 확인 후 다시 입력해 주세요.'
      )
  }
}

async function verifyBirth(): Promise<void> {
  const isValidUserBirth = (await validForm.validateField('user-birth')).valid
  if (!isValidUserBirth) return

  const yyyy = Number(userBirth.value.value?.slice(0, 4))
  const mm = Number(userBirth.value.value?.slice(4, 6))
  const dd = Number(userBirth.value.value?.slice(6, 8))

  if (yyyy < 1900 || mm < 1 || mm > 12 || dd < 1 || dd > 31) {
    state.birthErrorMessage = $t('message.customer.0031', '생년월일을 다시 한 번 확인해 주세요.')
    return
  }

  const todate = new Date()
  const birthDate = new Date(yyyy, mm - 1, dd)

  if (Number(todate) - Number(birthDate) < 0) {
    state.birthErrorMessage = $t('message.customer.0031', '생년월일을 다시 한 번 확인해 주세요.')
    return
  }

  let y = todate.getFullYear() - birthDate.getFullYear()
  let m = todate.getMonth() - birthDate.getMonth()
  const d = todate.getDate() - birthDate.getDate()

  if (d < 0) --m
  if (m < 0) --y
  if (y < 14) {
    state.birthErrorMessage = $t('message.customer.0032', '14세 미만은 회원가입이 불가합니다.')
    return
  }

  state.isValidBirth = true
  state.birthErrorMessage = ''
}

async function sendVerificationCode(): Promise<void> {
  state.seqNum = ''
  const { data } = await smsCertification({ phoneNum: userTel.value.value })
  state.smsCertificationCode = data.resultCode

  switch (state.smsCertificationCode) {
    case '7713':
      if (data.resultData) {
        state.tvMemberCheckCode = ''
        state.seqNum = data.resultData.seqNum
        const initialValidTm = data.resultData.vaildTm
        let { vaildTm } = data.resultData

        state.nIntervId = Number(
          setInterval(() => {
            vaildTm = vaildTm - 1
            if (initialValidTm - vaildTm === 30) {
              state.isResend = true
            }
            if (vaildTm === 0) {
              validForm.setFieldError('user-certnum', $t(`message.customer.0021`))
              clearInterval(state.nIntervId)
              state.nIntervId = 0
            }
            const m = Math.floor(vaildTm / 60)
            const s = vaildTm - m * 60
            const mm = `0${String(m)}`
            const ss = s < 10 ? `0${s}` : s

            state.time = `${mm}:${ss}`
          }, 1000)
        )
      }
      break
    case '7714':
    //로직 설계 없음
  }
}

async function reSendVerificationCode(): Promise<void> {
  if (!state.isResend) return

  if (state.nIntervId) {
    clearInterval(state.nIntervId)
    state.nIntervId = 0
  }

  if (state.isResendCnt > 9) {
    //temp
    clearInterval(state.nIntervId)
    // joinFormDialog.value?.open()
    window.alert($t('message.customer.0065'))
    router.push({ name: 'Main' })
    return
  }

  userCertnum.value.value = ''

  state.smsVerificationErrorMessage = ''
  state.isResend = false
  state.isResendCnt = ++state.isResendCnt

  sendVerificationCode()
}

function authenticatePhone() {
  const formValues = { ...validForm.values }
  const { _value }: any = { ...validForm.errors }
  joinUserStore.setJoinUser({
    userJoinValidForm: { values: formValues, errors: _value },
    userJoinState: { ...state }
  })
  router.push({ name: 'MemberMobileIndentityVerification', query: { pageNm: 'memberJoin' } })
}

async function joinMember(): Promise<void> {
  const { valid } = await validForm.validate()
  console.info('valid', valid)
  if (!valid) return

  const formData = { ...validForm.values }
  const data: JoinRequest = {
    phoneNum: <string>formData['user-tel'],
    mktYes: formData['agree-list'].some((agree: string) => agree === 'marketing') ? 'Y' : 'N',
    loginId: formData['user-id'],
    custNm: formData['user-name'],
    loginPwrd: formData['user-pw'],
    birth: formData['user-birth'],
    sexCd: formData['user-gender'],
    isCertPass: 'N',
    isTvMember: 'N',
    certSeq: state.seqNum,
    prinfValidDur: '1'
  }

  const { resultCode = '', resultData } = (await join(data))?.data

  switch (resultCode) {
    case '7951':
      router.push({
        name: 'MemberJoinComplete',
        state: { ...router.options.history.state, userId: resultData?.loginId || '', userNm: resultData?.custNm || '' }
      })
      return
    case '7724':
      //temp
      window.alert($t('customer.backend.7705', '이미 가입된 이메일 주소입니다. 다른 이메일을 입력해 주세요.'))
      break
    case '7725':
    case '7726':
      //temp
      window.alert($t('customer.backend.7705', '이미 가입된 이메일 주소입니다. 다른 이메일을 입력해 주세요.'))
      break
    case '9002':
      break
    default:
      break
  }
}

//temp
const changePhoneForm = (value: string) => {
  const regexNumber = /[^0-9]/g
  let x = value.replaceAll(regexNumber, '')

  if (x.length > 11) {
    x = x.slice(0, 11)
  }

  const regex344 = /^(\d{3})(\d{4})(\d{4})$/
  if (regex344.test(x)) {
    x = x.replace(regex344, '$1-$2-$3')
    return x
  }

  const regex344n = /^(\d{3})(\d{4})(\d{4})\d+/
  if (regex344n.test(x)) {
    x = x.replace(regex344n, '$1-$2-$3')
    return x
  }

  const regex334 = /^(\d{3})(\d{3})(\d{4})$/
  if (regex334.test(x)) {
    x = x.replace(regex334, '$1-$2-$3')
    return x
  }

  const regex33n = /^(\d{3})(\d{3})(\d+)$/
  if (regex33n.test(x)) {
    x = x.replace(regex33n, '$1-$2-$3')
    return x
  }

  const regex3n = /^(\d{3})(\d+)$/
  if (regex3n.test(x)) {
    x = x.replace(regex3n, '$1-$2')
    return x
  }

  return x
}
</script>

<style lang="scss">
@use '~/pages/customer/member/scss/join';
@use '~/pages/common/terms/scss/terms';
</style>
