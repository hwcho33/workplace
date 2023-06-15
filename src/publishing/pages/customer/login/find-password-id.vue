<template>
  <div class="info-find-wrap password-find">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">비밀번호 찾기</h2>

    <div class="inner-wrap">
      <div class="form-wrap">
        <div class="find-input-wrap">
          <!-- is-active is-auto-complete -->
          <div class="input-text-wrap">
            <input
              type="text"
              placeholder="아이디(이메일주소)"
              name="user-id"
              id="userId"
              title="아이디(이메일주소) 입력"
              value="oww"
              required
            />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
            <!-- <ul class="input-complete-wrap">
              <li><span class="user-id">oww1220@</span>naver.com</li>
              <li><span class="user-id">oww1220@</span>hanmail.net</li>
              <li><span class="user-id">oww1220@</span>gmail.com</li>
              <li><span class="user-id">oww1220@</span>nate.com</li>
              <li><span class="user-id">oww1220@</span>daum.net</li>
              <li><span class="user-id">oww1220@</span>kakao.com</li>
              <li><span class="user-id">oww1220@</span>hotmail.com</li>
              <li><span class="user-id">oww1220@</span>korea.com</li>
              <li><span class="user-id">oww1220@</span>icloud.com</li>
            </ul> -->
          </div>
          <p class="info-msg is-error">가입되지 않은 아이디입니다. 확인 후 다시 입력해 주세요.</p>
        </div>
      </div>

      <div class="button-group-wrap">
        <button type="button" class="confirm-btn disable">확인</button>
      </div>
      <p class="find-msg">아이디가 기억나지 않으세요? <a href="#" class="link">아이디 찾기</a></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'
</script>

<style lang="scss">
@use '~/pages/customer/login/scss/login.scss';
</style>
