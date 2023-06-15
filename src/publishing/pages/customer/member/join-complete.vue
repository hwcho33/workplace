<template>
  <div class="join-complete-wrap">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">회원가입 완료</h2>

    <div class="inner-wrap">
      <div class="info-title-wrap">
        <h2 class="title">김엔에스님<br />NSmall 가입을 환영합니다!</h2>
        <p class="sub-title"><em>kimnsmall@naver.com</em></p>
      </div>

      <button type="button" class="complete-btn">확인</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getOSByUserAgent } from '@/utils/device'
import Toast from '@/components/toast'

const toastHandler = (content: string, delay: number, position: string) => {
  Toast({ content, delay, position })
}
</script>

<style lang="scss">
@use '~/pages/customer/member/scss/join.scss';
</style>
