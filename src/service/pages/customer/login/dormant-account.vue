<template>
  <div class="dormant-wrap account">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">
      {{ $t('label.customer.0086', '휴면 아이디 안내') }}
    </h2>

    <div class="inner-wrap">
      <div class="dormant-info-wrap">
        <p style="white-space: pre-wrap">
          {{
            $t(
              'label.customer.0087',
              { n: nYear },
              '회원님의 아이디는 1년 이상 로그인 되지 않아\n휴면 아이디로 전환되었습니다.'
            )
          }}
        </p>
      </div>

      <ul class="bullet-list">
        <li>
          {{ $t('label.customer.0088', '아래 휴면해제하기 버튼을 선택 하시면 본인인증 후 서비스 이용이 가능합니다.') }}
        </li>
      </ul>

      <div class="button-wrapper">
        <button type="button" class="release-btn" @click="_onClickActivate">
          {{ $t('label.customer.0089', '휴면 해제하기') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
///////////////////////////////////////////////////////////////////
// 1. 의존성 (dependencies)
///////////////////////////////////////////////////////////////////
import { useUserStore } from '~/store'

///////////////////////////////////////////////////////////////////
// 2. 프레임워크 내장 모듈 (utils, modules, functions, .ts file)
///////////////////////////////////////////////////////////////////
import { getOSByUserAgent } from '@/utils/device'
import { getValidDuration, putCustRecative } from '~/api/customer'

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

// n년
const nYear = ref<string>('1')

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
    useUserStore().logout()
    router.replace('/common/system/500-error')
  }
})

onBeforeRouteLeave((to, _, next) => {
  // 뒤로가기(로그인 화면)일 경우 로그아웃 추가
  // TODO: undefinde는 추후 삭제 필요
  if (to.name === 'CustomerLogin' || to.name === undefined) {
    useUserStore().logout()
  }

  next()
})

///////////////////////////////////////////////////////////////////
// 8. 내부 함수 (functions)
///////////////////////////////////////////////////////////////////

// 휴면 해제하기 버튼 클릭
function _onClickActivate(): void {
  // PASS 호출
  // TODO: 추후 PASS 관련 지시 받으면 수정 필요!
  // const passResult = callPass()
  const passResult = confirm('PASS 인증')

  if (passResult) {
    // PASS 인증 성공
    callCustRecative()
  } else {
    // PASS 인증 실패
    Toast({
      content: $t('message.customer.0077', '본인인증을 실패하였습니다.'),
      position: 'bottom'
    })
  }
}

// PASS 인증 호출
// function callPass(): boolean {
//   // TODO: PASS 인증은 임시로 url만 변경 처리. 추후 작업 필요
//   location.href = 'https://www.kmcert.com/kmcis/web_v4/kmcisHp00.jsp'

//   return true
// }

// Cust Recative API 호출
async function callCustRecative(): Promise<void> {
  // TODO: API 나오면 수정
  const { data } = await putCustRecative({ accessToken: useUserStore().getToken })
  if (data.resultCode === '7951') {
    // 성공 - 개인정보 유효기간 변경 페이지로 이동
    router.replace('/customer/login/dormant-certify')
  } else {
    // 실패 - 실패 하면 안 되는 기능이기 때문에 서버 에러로 간주하고 500페이지로 이동.
    useUserStore().logout()
    router.replace('/common/system/500-error')
  }
}
</script>

<style lang="scss">
@use '~/pages/customer/login/scss/login.scss';
</style>
