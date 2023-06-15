<template>
  <div class="find-input-wrap">
    <!-- 입력완료시 is-complete, 에러시 is-error -->
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
    <label for="userTel">휴대폰 번호</label>
    <div class="input-text-wrap">
      <input type="tel" placeholder="‘-’ 없이 입력" name="user-tel" id="userTel" value="123123" required />
      <div class="btns-wrap">
        <button type="button" class="del-btn">삭제</button>
      </div>
    </div>

    <div class="button-group-wrap">
      <button type="button" class="send-btn disable">인증번호 전송</button>
    </div>
  </div>

  <div class="find-input-wrap certification">
    <div class="input-text-wrap">
      <input
        type="tel"
        placeholder="인증번호 4자리 입력"
        value=""
        name="user-certification"
        id="userId"
        title="인증번호 입력"
      />
      <div class="cert-num-wrap">
        <span>04:59</span>
      </div>
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
