<template>
  <div class="join-wrap">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">회원가입</h2>

    <div class="inner-wrap">
      <div class="info-title-wrap">
        <h2 class="title">
          <img src="/images/icons/customer/logo-nsmall.svg" alt="nsmall" />에<br />
          오신 것을 환영합니다!
        </h2>
        <p class="sub-title">회원가입하고 다양한 구매혜택을 받으세요.</p>
      </div>

      <div class="join-info">
        <div class="membership">
          <strong>NS 멤버십</strong>
          <span>등급별 혜택 제공</span>
        </div>
        <div class="coupon">
          <strong>할인 쿠폰</strong>
          <span>가입 즉시 지급</span>
        </div>
        <div class="point">
          <strong>톨 포인트</strong>
          <span>이벤트 참여 가능</span>
        </div>
      </div>

      <div class="button-wrapper">
        <a href="/publishing/customer/member/join-form" class="nsmall-join-btn">NSmall 회원가입</a>
      </div>

      <div class="button-wrapper sns-join-btn">
        <div class="sns-title">
          <p><em>3초만에</em> 쉽고 빠른 가입</p>
        </div>
        <button type="button" class="kakao-btn">카카오로 시작하기</button>
        <button type="button" class="naver-btn">네이버로 시작하기</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'
</script>

<style lang="scss">
@use '~/pages/customer/member/scss/join';
</style>
