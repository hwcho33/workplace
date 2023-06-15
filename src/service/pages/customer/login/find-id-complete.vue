<template>
  <div class="info-find-wrap id-find-complete">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">
      {{ $t('label.customer.0057', '아이디 찾기 완료') }}
    </h2>

    <div class="inner-wrap">
      <div class="form-wrap">
        <div class="find-id-wrap">
          <div class="user">
            <p>
              <em>{{ userName }}</em
              >{{ $t('label.customer.0058', '님의 아이디 입니다.') }}
            </p>
          </div>
          <div class="user-id-list">
            <ul>
              <li v-for="(item, index) in idList" :key="index">
                <div class="user-id-radio">
                  <input
                    :id="'radio' + index"
                    :name="'user-radio' + index"
                    type="radio"
                    :value="item.loginId"
                    v-model="radioValue"
                    :checked="index === 0"
                  />
                  <label :for="'radio' + index">{{ item.loginId }}</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p class="info-msg is-error" v-if="showInfo">
          {{
            $t('label.customer.0059', '찾으시는 아이디가 없는 경우 NSmall 고객센터(1688-7700)에서 안내해 드리겠습니다.')
          }}
        </p>
      </div>

      <div class="button-group-wrap">
        <button type="button" class="login-btn" @click="_onClickLogin">
          {{ $t('label.customer.0003', '로그인') }}
        </button>
      </div>
      <p class="find-msg">
        {{ $t('label.customer.0060', '비밀번호가 기억나지 않으세요?') }}
        <a href="javascript:void(0)" class="link" @click="_onClickFindPwd">
          {{ $t('label.customer.0004', '비밀번호 찾기') }}
        </a>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
///////////////////////////////////////////////////////////////////
// 1. 의존성 (dependencies)
///////////////////////////////////////////////////////////////////
import { cloneDeep } from 'lodash-es'

///////////////////////////////////////////////////////////////////
// 2. 프레임워크 내장 모듈 (utils, modules, functions, .ts file)
///////////////////////////////////////////////////////////////////
import { getOSByUserAgent } from '@/utils/device'

///////////////////////////////////////////////////////////////////
// 3. 타입스크립트 관련 모듈 (types, enums, interface, class)
///////////////////////////////////////////////////////////////////
interface LoginId {
  loginId: string
}

///////////////////////////////////////////////////////////////////
// 4. 컴포넌트 (components)
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// 5. 변수 및 상수 (variables)
///////////////////////////////////////////////////////////////////

// 라우터
const router = useRouter()

// 사용자명
const userName = ref<string>('')
// 아이디 리스트
const idList = ref<LoginId[]>([])
// radio버튼
const radioValue = ref<string>('')

// id 리스트 10개 여부
const showInfo = ref<boolean>(false)

///////////////////////////////////////////////////////////////////
// 6. Vue 내장 메서드
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// 7. 생명 주기 함수 (life cycle hooks)
///////////////////////////////////////////////////////////////////

onBeforeMount(() => {
  // router에 담겨있는 변수(사용자 이름, 사용자 아이디 리스트) 저장
  userName.value = cloneDeep(router.options.history.state?.userName as string)
  const idListStr = cloneDeep(router.options.history.state?.idListStr as string)

  // 넘겨받은 항목이 없을 경우 잘못된 접근으로 간주하고 404 페이지로 이동
  if (!userName.value || !idListStr) {
    router.replace('/common/system/404-error')
    return
  }

  // 정상적으로 넘겨 받은 경우
  idList.value = JSON.parse(idListStr)

  // radio 값 초기화
  radioValue.value = idList.value[0].loginId as string

  // 아이디가 10개 이상일 경우 경고 문구 출력
  if (idList.value.length >= 10) {
    showInfo.value = true
  }

  // router에 담겨있던 내역 삭제
  delete router.options.history.state.userName
  delete router.options.history.state.idListStr
  delete history.state.userName
  delete history.state.idListStr

  // 해당 페이지 재방문 방지를 위해 replace
  router.options.history.replace(router.options.history.state.back as string, router.options.history.state)
})

///////////////////////////////////////////////////////////////////
// 8. 내부 함수 (functions)
///////////////////////////////////////////////////////////////////

// 로그인 버튼 클릭
function _onClickLogin(): void {
  // 해당 페이지 재방문 방지를 위해 replace
  router.replace({ path: '/customer/login', state: { presetId: radioValue.value } })
}

// 비밀번호 찾기 버튼 클릭
function _onClickFindPwd(): void {
  // 해당 페이지 재방문 방지를 위해 replace
  router.replace({ path: '/customer/login/find-password-id', state: { presetId: radioValue.value } })
}
</script>

<style lang="scss">
@use '~/pages/customer/login/scss/login.scss';
</style>
