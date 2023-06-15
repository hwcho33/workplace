<template>
  <div class="join-member-wrap join-step">
    <!-- [D]: 스텝 진행상테 style 값 변경 ex) style="--el-progress: 32" -->
    <div class="area-progress" style="--el-progress: 50">
      <em class="step"><strong>3</strong>/6</em>
    </div>

    <h3 class="step-title">이름을 알려주세요.</h3>

    <div class="join-form-wrap">
      <!-- [CASE3]: 이름 입력 -->
      <div class="join-input-wrap step3 effect">
        <label for="userName">이름</label>
        <div class="input-text-wrap">
          <input type="text" placeholder="예) 홍길동" name="user-name" id="userName" required />
          <div class="btns-wrap">
            <button type="button" class="del-btn">삭제</button>
          </div>
        </div>
        <p class="info-msg is-error">이름을 정확하게 입력해 주세요.</p>
      </div>

      <!-- [CASE4]: 휴대폰번호 입력 -->
      <div class="join-input-wrap is-complete step4 effect">
        <label for="userTel">휴대폰 번호</label>
        <div class="input-text-wrap">
          <input type="tel" placeholder="‘-’ 없이 입력" name="user-tel" id="userTel" required />
          <div class="btns-wrap">
            <button type="button" class="del-btn">삭제</button>
          </div>
        </div>

        <p class="info-msg is-warning">입력하신 번호로 인증번호가 발송 되었습니다.</p>
        <div class="button-group-wrap active">
          <!-- active 영역활성화-->
          <button type="button" class="login-btn">로그인</button>
          <button type="button" class="send-btn">인증번호 전송</button>
        </div>
      </div>

      <div class="join-input-wrap certification is-active step4 effect">
        <label for="userCertNum">인증번호 입력</label>
        <div class="input-text-wrap">
          <input type="text" placeholder="인증번호 입력" name="user-certnum" id="userCertNum" />
          <div class="cert-num-wrap">
            <span>04:59</span>
          </div>
          <p class="info-msg is-error">인증번호 입력 시간이 초과하였습니다. 다시 시도해 주세요.</p>
          <div class="button-group-wrap active">
            <button type="button" class="retry-btn disable">재전송</button>
            <button type="button" class="certify-btn disable">인증하기</button>
          </div>
        </div>
      </div>

      <!-- [CASE5]: 생년월일 입력 -->
      <div class="join-input-wrap step5 effect">
        <label for="userTel">생년월일</label>
        <div class="input-text-wrap">
          <input type="tel" placeholder="예) 19681001" name="user-id" id="userTel" required />
          <div class="btns-wrap">
            <button type="button" class="del-btn">삭제</button>
          </div>
        </div>
        <p class="info-msg is-error">숫자 8자리로 입력해 주세요.</p>
      </div>

      <!-- [CASE5]: 성별 입력 -->
      <div class="join-radio-wrap step6 effect">
        <span>성별</span>
        <div class="join-radio">
          <input id="join_radio_1" name="radio01" type="radio" value="" />
          <label for="join_radio_1" @click="() => (state.isShow = true)">여자</label>
          <input id="join_radio_2" name="radio01" type="radio" value="" />
          <label for="join_radio_2" @click="() => (state.isShow = true)">남자</label>
        </div>
        <p class="info-msg is-error">성별을 선택해 주세요.</p>
      </div>

      <div class="join-agree-btn">
        <!-- [D]: 버튼 비활성화 ex> class="disable" -->
        <button type="button" class="disable">다음</button>
      </div>
    </div>
  </div>

  <ModalJoinAgree v-model="state.isShow" />
</template>

<script lang="ts" setup>
import ModalJoinAgree from '../components/layer/modal-join-agree.vue'

const state = reactive({
  isShow: false
})
</script>

<style lang="scss">
@use '~/pages/customer/member/scss/join';
</style>
