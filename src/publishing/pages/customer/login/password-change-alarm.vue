<template>
  <div class="password-change-wrap cycle-change">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">비밀번호 변경</h2>

    <div class="inner-wrap">
      <div class="input-form-wrap">
        <!-- is-complete, is-error, is-active -->
        <div class="input-input-wrap">
          <!-- is-complete, is-error, is-active -->
          <label for="userPw">고객님의 개인정보 호보를 위해 3개월마다<br />비밀번호를 변경해 주세요.</label>
          <div class="input-text-wrap">
            <input
              type="password"
              placeholder="비밀번호 (영문,숫자,특수문자 8~16자)"
              name="user-pw"
              id="userPw"
              required
            />
            <div class="btns-wrap">
              <button type="button" class="view-btn">비밀번호 보기 숨기기</button>
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
        </div>

        <div class="input-input-wrap">
          <div class="input-text-wrap">
            <input type="password" placeholder="비밀번호 확인" title="비밀번호 변경 확인 입력" required />
            <div class="btns-wrap">
              <button type="button" class="view-btn">비밀번호 보기 숨기기</button>
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg is-error">연속된 문자/숫자는 사용할 수 없습니다. 예)123, abc</p>

          <div class="button-group-wrap">
            <button type="button">30일 후에 변경</button>
            <button type="button" class="certify-btn">비밀번호 변경</button>
          </div>
        </div>
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
