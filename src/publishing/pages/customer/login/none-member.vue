<template>
  <div class="none-member-wrap">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">비회원 주문조회</h2>

    <div class="inner-wrap">
      <div class="input-form-wrap">
        <div class="input-input-wrap">
          <!-- is-complete, is-error, is-active -->
          <div class="input-text-wrap">
            <input
              type="tel"
              placeholder="주문시 안내 받은 12자리 숫자"
              title="주문시 안내 받은 12자리 숫자 입력"
              required
            />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
        </div>
        <div class="input-input-wrap">
          <div class="input-text-wrap">
            <input type="password" placeholder="비회원 주문 비밀번호" title="비밀번호 변경 확인 입력" required />
            <div class="btns-wrap">
              <button type="button" class="view-btn">비밀번호 보기 숨기기</button>
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg is-error">주문번호 또는 비밀번호를 다시 확인해 주세요.</p>
          <div class="button-group-wrap">
            <button type="button" class="certify-btn disable">비회원 주문조회</button>
          </div>
        </div>

        <div class="order-inquiry-info">
          <ul class="bullet-list">
            <li>비회원 주문조회는 주문번호와 주문 시 설정한 비밀번호를 통해 확인 할 수 있습니다.</li>
            <li>주문번호는 주문완료 시 이메일 또는 문자로 자동 발송 됩니다.</li>
            <li>주문번호가 기억나지 않으시면 고객센터<a href="tel:1800-0770">(1800-0770(유료)</a>로 접수해 주세요.</li>
          </ul>
        </div>
      </div>

      <div class="join-link">
        <a href="#" class="link">회원가입하고 혜택 받기</a>
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
