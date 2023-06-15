<template>
  <div class="join-member-wrap join-step">
    <!-- [D]: 스텝 진행상테 style 값 변경 ex) style="--el-progress: 32" -->
    <div class="area-progress" style="--el-progress: 20">
      <em class="step"><strong>1</strong>/6</em>
    </div>

    <h3 class="step-title">아이디로 사용할<br />이메일 주소를 입력해주세요.</h3>

    <div class="join-form-wrap">
      <!-- [CASE1]: 아이디(이메일주소) 입력 -->
      <div class="join-input-wrap step1 effect">
        <!-- is-active, is-auto-complete, is-complete, is-error -->
        <label for="userId">아이디(이메일 주소)</label>
        <div class="input-text-wrap">
          <input type="text" placeholder="예) nsmall@nsmall.com" name="user-id" id="userId" required />
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

        <p class="info-msg is-error">이미 가입된 이메일 주소입니다. 다른 이메일을 입력해 주세요.</p>
        <div class="button-group-wrap active">
          <!-- active 영역활성화-->
          <button type="button" class="login-btn">로그인</button>
          <button type="button" class="password-btn">비밀번호 찾기</button>
        </div>
      </div>

      <!-- [CASE2]: 비밀번호 입력 -->
      <div class="join-input-wrap password step2">
        <label for="userPw">비밀번호</label>
        <div class="input-text-wrap">
          <input type="password" placeholder="영문, 숫자, 특수문자 조합 8~16자" name="user-pw" id="userPw" required />
          <div class="btns-wrap">
            <button type="button" class="view-btn">비밀번호 보기 숨기기</button>
            <button type="button" class="del-btn">삭제</button>
          </div>
        </div>
        <p class="info-msg is-error">비밀번호는 8~16자 이내로 입력해 주세요.</p>
      </div>

      <div class="join-agree-btn">
        <!-- [D]: 버튼 비활성화 ex> class="disable" -->
        <button type="button" class="disable">다음</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@use '~/pages/customer/member/scss/join';
</style>
