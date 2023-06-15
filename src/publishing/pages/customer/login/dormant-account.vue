<template>
  <div class="dormant-wrap account">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">휴면 아이디 안내</h2>

    <div class="inner-wrap">
      <div class="dormant-info-wrap">
        <p>회원님의 아이디는 N년 이상 로그인 되지 않아<br />휴면 아이디로 전환되었습니다.</p>
      </div>

      <ul class="bullet-list">
        <li>아래 휴면해제하기 버튼을 선택 하시면 본인인증 후 서비스 이용이 가능합니다.</li>
      </ul>

      <div class="button-wrapper">
        <button type="button" class="release-btn">휴먼 해제하기</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'
</script>

<style lang="scss">
@use '~/pages/customer/login/scss/login.scss';
</style>
