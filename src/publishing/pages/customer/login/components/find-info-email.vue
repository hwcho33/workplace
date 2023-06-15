<template>
  <div class="find-input-wrap">
    <label for="userName">이름</label>
    <div class="input-text-wrap">
      <input type="text" placeholder="예) 홍길동" name="user-name" id="userName" required />
      <div class="btns-wrap">
        <button type="button" class="del-btn">삭제</button>
      </div>
    </div>
    <p class="info-msg is-error">이름을 정확하게 입력해 주세요.</p>
  </div>

  <div class="find-input-wrap">
    <!-- is-active is-auto-complete -->
    <label for="userEmail">이메일</label>
    <div class="input-text-wrap">
      <input type="text" placeholder="예) nsmall@nsmall.com" name="user-tel" id="userEmail" required />
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

    <div class="button-group-wrap">
      <button type="button" class="email-btn disable">인증메일 전송</button>
    </div>
  </div>

  <div class="find-input-wrap certification">
    <div class="input-text-wrap">
      <input
        type="text"
        placeholder="인증번호 4자리 입력"
        value=""
        name="user-certification"
        id="userId"
        title="인증번호 입력"
      />
      <div class="cert-num-wrap"><span>04:59</span></div>
    </div>
    <!--
      [MODIFY] 2023-06-08/박주형/(기획변경, 디자인변경)
      [D]: 구조 수정함.
    -->
    <p class="info-msg is-warning">입력하신 번호로 인증번호가 발송되었습니다.</p>
    <p class="info-msg is-error">인증번호를 다시 한번 확인 후 입력해 주세요.</p>

    <div class="button-group-wrap">
      <button type="button" class="retry-btn disable">재전송</button>
      <button type="button" class="certify-btn">인증하기</button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
