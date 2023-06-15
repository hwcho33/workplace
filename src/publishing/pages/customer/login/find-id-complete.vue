<template>
  <div class="info-find-wrap id-find-complete">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">아이디 찾기 완료</h2>

    <div class="inner-wrap">
      <div class="form-wrap">
        <div class="find-id-wrap">
          <div class="user">
            <p><em>김엔에스</em>님의 아이디 입니다.</p>
          </div>
          <div class="user-id-list">
            <ul>
              <li>
                <div class="user-id-radio">
                  <input id="radio1" name="user-radio" type="radio" value="" checked />
                  <label for="radio1">kimnsmall@naver.com</label>
                </div>
              </li>
              <li>
                <div class="user-id-radio">
                  <input id="radio2" name="user-radio" type="radio" value="" />
                  <label for="radio2">kimnsmall@hanmail.com</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p class="info-msg is-error">찾으시는 아이디가 없는 경우 NSmall 고객센터(1688-7700)에서 안내해 드리겠습니다.</p>
      </div>

      <div class="button-group-wrap">
        <button type="button" class="login-btn">로그인</button>
      </div>
      <p class="find-msg">비밀번호가 기억나지 않으세요? <a href="#" class="link">비밀번호 찾기</a></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'
</script>

<style lang="scss">
@use '~/pages/customer/login/scss/login.scss';
</style>
