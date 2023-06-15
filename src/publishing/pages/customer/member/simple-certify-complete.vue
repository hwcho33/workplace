<template>
  <div class="simple-member-wrap complete">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">회원가입 완료</h2>

    <div class="inner-wrap">
      <template v-if="!$route.query.connect">
        <div class="info-title-wrap">
          <i class="icon-naver">네이버</i>
          <h3 class="title">
            NSmall 아이디와 <br />
            연결 되었습니다.
          </h3>
          <p class="sub-title">로그인 하거나 다른 방법으로 회원가입 해주세요.</p>
        </div>
        <div class="login-btn-wrap">
          <button type="button" class="login-btn">로그인하기</button>
        </div>
      </template>
      <template v-else>
        <div class="info-title-wrap">
          <i class="icon-naver">네이버</i>
          <h3 class="title">
            가입된 네이버<br />
            계정이 있습니다.
          </h3>
          <p class="sub-title">
            NSmall 아이디와 연결하시거나 다른 방법으로 <br />
            회원가입 해주세요.
          </p>
        </div>
        <div class="login-btn-wrap">
          <button type="button" class="login-btn">연결하기</button>
        </div>
      </template>

      <div class="etc-join-wrap">
        <h3 class="title">다른 방법으로 회원가입</h3>
        <button type="button" class="join-btn">회원가입 하기</button>
        <button type="button" class="kakao-btn">카카오로 시작하기</button>
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
