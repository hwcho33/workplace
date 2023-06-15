<template>
  <div class="dormant-wrap certify">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">휴면 아이디 해제 완료</h2>

    <div class="inner-wrap">
      <div class="dormant-info-wrap">
        <p>
          NSmall을 다시 찾아주셔서 감사합니다.<br />이번 로그인으로 인해 고객님의 휴면계정 상태가 해제되어 분리 보관
          되었던 되었던 개인정보가 다시 통합 관리됩니다.
        </p>
      </div>

      <div class="info-text-wrap">
        <h3 class="title">휴면 계정 이관</h3>
        <p class="text">
          N년 이상 서비스를 이용하지 않은 고객은 "휴면고객” 으로 전환, 개인정보를 분리하여 별도로 안전하게 보관 합니다.
        </p>
      </div>

      <div class="agreement-wrap">
        <p class="title">개인정보 유효기간 설정</p>
        <div class="agreement">
          <div class="agreement-check">
            <div class="col">
              <input id="chk2-1" name="chk2" type="radio" value="" /><label
                for="chk2-1"
                @click="toastHandler('수신 설정이 정상적으로 변경되었습니다.', 2000, 'bottom')"
              >
                회원탈퇴 시
              </label>
            </div>
            <div class="col">
              <input id="chk2-2" name="chk2" type="radio" value="" /><label
                for="chk2-2"
                @click="toastHandler('수신 설정이 정상적으로 변경되었습니다.', 2000, 'bottom')"
              >
                5년
              </label>
            </div>
            <div class="col">
              <input id="chk2-3" name="chk2" type="radio" value="" /><label
                for="chk2-3"
                @click="toastHandler('수신 설정이 정상적으로 변경되었습니다.', 2000, 'bottom')"
              >
                3년
              </label>
            </div>
            <div class="col">
              <input id="chk2-4" name="chk2" type="radio" value="" /><label
                for="chk2-4"
                @click="toastHandler('수신 설정이 정상적으로 변경되었습니다.', 2000, 'bottom')"
              >
                1년
              </label>
            </div>
          </div>
        </div>
      </div>

      <ul class="bullet-list">
        <li>미 설정 시, 개인정보 유효기간은 1년으로 설정됩니다</li>
        <li>
          개인정보 유효기간 경과 시, 개인정보를 파기 또는 분리 저장, 관리합니다. 다만, 별도의 요청이 없는 경우
          유효기간은 1년으로 합니다.
        </li>
      </ul>

      <div class="button-wrapper">
        <button type="button" class="setting-btn">개인정보 유효 기간 설정</button>
      </div>
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
@use '~/pages/customer/login/scss/login.scss';
</style>
