<template>
  <div class="password-change-wrap base-change">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">비밀번호 변경</h2>

    <div class="inner-wrap">
      <div class="input-form-wrap">
        <!-- is-complete, is-error, is-active -->
        <div class="input-input-wrap">
          <label for="userPw">새로운 비밀번호를 입력해 주세요.</label>
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
            <button type="button" class="certify-btn disable">확인</button>
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
