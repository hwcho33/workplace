<template>
  <div class="identity-wrap">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">본인인증</h2>

    <div class="inner-wrap">
      <div class="info-title-wrap">
        <template v-if="progressType.isMemberJoin">
          <h3 class="title">NSmall 통합회원 가입을 위해 인증을 진행해 주세요.</h3>
          <p class="text">상담사 또는 리모컨으로 가입하신 고객님은 본인인증이 필요합니다.</p>
        </template>

        <template v-else-if="progressType.isOrderSheet">
          <h3 class="title">본인 확인을 위해 인증 절차를 진행해 주세요.</h3>
          <p class="text">비회원 구매 시 본인 확인을 위해 인증이 필요합니다.</p>
        </template>

        <template v-else-if="progressType.isAdultCert">
          <i class="icon-adult">성인</i>
          <h3 class="title">본 상품은 19세 미만의<br />청소년 접근이 제한 되었습니다.</h3>
          <p class="text">성인 확인을 위해 인증이 필요합니다.</p>
        </template>
      </div>

      <div class="button-group-wrap">
        <button type="button" class="button" @click="onClickCellPhone">본인 휴대폰(문자) 인증하기</button>
        <button type="button" class="button" @click="onClickPass">PASS로 인증하기</button>

        <p class="info-text" v-if="progressType.isAdultCert">
          이 정보 내용은 청소년 유해매체물로서 <strong>정보통신망 이용촉진 및 정보보호 등에 관한 법률</strong> 및
          <strong>청소년 보호법</strong>에 따라 19세 미만의 청소년이 이용할 수 없습니다.
          <em>본인인증 연령 확인결과는 1년 동안 적용됩니다.</em>
        </p>
      </div>

      <div class="info-list-wrap">
        <ul class="bullet-list">
          <li>
            본인인증을 위해 입력하신 개인정보는 본인인증기관에서 수집하는 정보이며, 이때 수집된 정보는 본인인증 외
            어떠한 용도로도 이용되거나 별도 저장되지 않습니다.
          </li>
          <li>
            정보통신망 이용촉진 및 정보보호 등의 관한 법률 제 23조 2. “주민등록번호의 사용 제한"에 따라 NSmall은
            고객님의 주민등록번호를 수집, 이용하지 않습니다.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'
import { PROGRESS_TYPE } from './mobile-identity-verification/constants'
// --------------------------------------------------------------------- [변수 및 상수]
const route = useRoute()
const router = useRouter()
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
// --------------------------------------------------------------------- [생명 주기 함수]
onMounted(() => {
  // console.log('[route]', route)
  // console.log('[routeQuery]', routeQuery.value)
  // console.log('[router]', router)
})
// --------------------------------------------------------------------- [내부 함수 (functions)]
function onClickCellPhone() {
  router.push({
    path: '/customer/member/mobile-identity-verification',
    query: routeQuery.value
  })
}
function onClickPass() {}
</script>

<style lang="scss">
@use '~/pages/customer/member/scss/join';
</style>
