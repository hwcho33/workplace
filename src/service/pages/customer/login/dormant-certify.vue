<template>
  <div class="dormant-wrap certify">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">
      {{ $t('label.customer.0090', '휴면 아이디 해제 완료') }}
    </h2>

    <div class="inner-wrap">
      <div class="dormant-info-wrap">
        <p style="white-space: pre-wrap">
          {{
            $t(
              'label.customer.0091',
              'NSmall을 다시 찾아주셔서 감사합니다.\n이번 로그인으로 인해 고객님의 휴면계정 상태가 해제되어 분리 보관 되었던 개인정보가 다시 통합 관리됩니다.'
            )
          }}
        </p>
      </div>

      <div class="info-text-wrap">
        <h3 class="title">{{ $t('label.customer.0092', '휴면 계정 이관') }}</h3>
        <p class="text">
          {{
            $t(
              'label.customer.0093',
              { n: nYear },
              '1년 이상 서비스를 이용하지 않은 고객은 "휴면고객” 으로 전환, 개인정보를 분리하여 별도로 안전하게 보관 합니다.'
            )
          }}
        </p>
      </div>

      <div class="agreement-wrap">
        <p class="title">{{ $t('label.customer.0094', '개인정보 유효기간 설정') }}</p>
        <div class="agreement">
          <div class="agreement-check">
            <div class="col">
              <input id="chk2-1" type="radio" value="9" v-model="radio" />
              <label for="chk2-1"> {{ $t('label.customer.0095', '회원탈퇴 시') }} </label>
            </div>
            <div class="col">
              <input id="chk2-2" type="radio" value="5" v-model="radio" />
              <label for="chk2-2"> {{ $t('label.customer.0096', { n: 5 }, '5년') }} </label>
            </div>
            <div class="col">
              <input id="chk2-3" type="radio" value="3" v-model="radio" />
              <label for="chk2-3"> {{ $t('label.customer.0096', { n: 3 }, '3년') }} </label>
            </div>
            <div class="col">
              <input id="chk2-4" type="radio" value="1" v-model="radio" />
              <label for="chk2-4"> {{ $t('label.customer.0096', { n: 1 }, '1년') }} </label>
            </div>
          </div>
        </div>
      </div>
      <ul class="bullet-list">
        <li>{{ $t('label.customer.0097', '미 설정 시, 개인정보 유효기간은 1년으로 설정됩니다.') }}</li>
        <li>
          {{
            $t(
              'label.customer.0098',
              '개인정보 유효기간 경과 시, 개인정보를 파기 또는 분리 저장, 관리합니다. 다만, 별도의 요청이 없는 경우 유효기간은 1년으로 합니다.'
            )
          }}
        </li>
      </ul>

      <div class="button-wrapper">
        <button type="button" class="setting-btn" @click="_onClickSetDormant">
          {{ $t('label.customer.0099', '개인정보 유효 기간 설정') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
///////////////////////////////////////////////////////////////////
// 1. 의존성 (dependencies)
///////////////////////////////////////////////////////////////////
import { useUserStore } from '~/store'

///////////////////////////////////////////////////////////////////
// 2. 프레임워크 내장 모듈 (utils, modules, functions, .ts file)
///////////////////////////////////////////////////////////////////
import { getOSByUserAgent } from '@/utils/device'
import { getValidDuration, postDormantVaildDuration } from '~/api/customer'

///////////////////////////////////////////////////////////////////
// 3. 타입스크립트 관련 모듈 (types, enums, interface, class)
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// 4. 컴포넌트 (components)
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// 5. 변수 및 상수 (variables)
///////////////////////////////////////////////////////////////////
// 라우터
const router = useRouter()

// n년
const nYear = ref<string>('1')

// 라디오
const radio = ref<string>('')

// user store > email
// TODO: 로그인 로직 완료시 userStore에 있는 id 가져오는 변수명이 변경될 가능성 있음.
const loginId = useUserStore().getUser.email ?? 'sampleId@naver.com'

///////////////////////////////////////////////////////////////////
// 6. Vue 내장 메서드
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// 7. 생명 주기 함수 (life cycle hooks)
///////////////////////////////////////////////////////////////////
onBeforeMount(async () => {
  // 게인정보 유효기간 조회
  // TODO: 로그인시 userStore에 개인정보 유효기간도 넣는다면 store에서 꺼내 쓰는 방법으로 변경 필요
  const { data } = await getValidDuration({ accessToken: useUserStore().getToken, loginId })

  if (data.resultCode === '7951') {
    // 성공
    nYear.value = data.resultData?.validDur as string
  } else {
    // 실패 - 실패 하면 안 되는 기능이기 때문에 서버 에러로 간주하고 500페이지로 이동.
    router.replace('/common/system/500-error')
  }
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

// 휴면 해제하기 버튼 클릭
async function _onClickSetDormant(): Promise<void> {
  // TODO: API 나오면 수정
  // validDur(유효기간)은 기본이 '1'
  await postDormantVaildDuration({ accessToken: useUserStore().getToken, validDur: radio.value || '1' })

  // 결과와 상관 없이 router 이동
  router.replace('/customer/login/password-change-alarm')
}
</script>

<style lang="scss">
@use '~/pages/customer/login/scss/login.scss';
</style>
