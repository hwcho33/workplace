<template>
  <div class="mobile-identity-wrap join-step">
    <!-- [D]: 스텝 진행상테 style 값 변경 ex) style="--el-progress: 32" -->
    <div class="area-progress" style="--el-progress: 80">
      <em class="step"><strong>5</strong>/6</em>
    </div>

    <h3 class="step-title">인증번호 확인을 위해<br />휴대폰 번호를 입력해 주세요.</h3>

    <div class="join-form-wrap">
      <!-- [CASE5]: 휴대폰 번호 입력 -->
      <div class="join-input-wrap step effect is-complete">
        <div class="input-text-wrap">
          <input type="tel" placeholder="휴대폰 번호(‘-’ 없이 입력)" title="휴대폰 번호 입력" />
          <div class="btns-wrap"><button type="button" class="del-btn">삭제</button></div>
        </div>
        <!-- <p class="info-msg is-warning">입력하신 번호로 인증번호가 발송 되었습니다.</p> -->
        <div class="button-group-wrap active">
          <!-- active 영역활성화-->
          <button type="button" class="certify-btn disable">인증번호 전송</button>
        </div>
      </div>

      <!-- [CASE6]: 휴대폰 인증번호 마무리 -->
      <div class="join-input-wrap certification step is-active">
        <div class="input-text-wrap">
          <input type="text" placeholder="인증번호 4자리 입력" title="인증번호 4자리 입력" />
          <div class="cert-num-wrap"><span>04:59</span></div>
          <p class="info-msg is-error">인증번호 입력 시간이 초과하였습니다. 다시 시도해 주세요.</p>
          <div class="button-group-wrap active">
            <button type="button" class="retry-btn disable">재전송</button>
            <button type="button" class="certify-btn disable">인증하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@use '~/pages/customer/member/scss/join';
</style>
