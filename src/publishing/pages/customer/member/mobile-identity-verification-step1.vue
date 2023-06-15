<template>
  <div class="mobile-identity-wrap join-step">
    <!-- [D]: 스텝 진행상테 style 값 변경 ex) style="--el-progress: 32" -->
    <div class="area-progress" style="--el-progress: 20">
      <em class="step"><strong>1</strong>/6</em>
    </div>

    <h3 class="step-title">이름을 알려주세요.</h3>

    <div class="join-form-wrap">
      <!-- [CASE1]: 이름 입력 -->
      <div class="join-input-wrap step1 effect">
        <!-- is-complete, is-error -->
        <div class="input-text-wrap">
          <input type="text" placeholder="이름" title="이름 입력" required />
          <div class="btns-wrap">
            <button type="button" class="del-btn">삭제</button>
          </div>
        </div>
        <p class="info-msg is-error">이미 가입된 이메일 주소입니다. 다른 이메일을 입력해 주세요.</p>
      </div>

      <!-- [CASE2]: 주민번호 입력 -->
      <div class="identify-wrap step2 fade-in">
        <div class="join-input-wrap identify is-complete" :class="{ 'is-focus': state.isFocisIdentify }">
          <!-- is-complete, is-error -->
          <div class="input-text-wrap">
            <input
              type="tel"
              placeholder="주민등록번호 앞 6자리"
              maxlength="6"
              title="주민등록번호 앞 6자리 입력"
              value="910101"
              required
              @focus="_onFocusidentify"
              @blur="_onBluridentify"
            />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <span class="util">-</span>
          <div class="input-text-wrap">
            <input
              type="tel"
              placeholder="0"
              maxlength="1"
              title="주민등록번호 뒤 1자리 입력"
              required
              @focus="_onFocusidentify"
              @blur="_onBluridentify"
            />
            <span class="identity-num-after">
              <code class="blind">23456</code><i></i><i></i><i></i><i></i><i></i><i></i>
            </span>
          </div>
        </div>
        <p class="info-msg is-error">비밀번호는 8~16자 이내로 입력해 주세요.</p>
      </div>

      <!-- STEP3 통신사 선택 CASE -->
      <div class="carrier-radio-wrap step3 fade-in">
        <label>
          <input type="radio" v-model="state.cellPhone" name="radio" value="SKT" />
          <span>SKT</span>
        </label>
        <label>
          <input type="radio" v-model="state.cellPhone" name="radio" value="KTF" />
          <span>KT</span>
        </label>
        <label>
          <input type="radio" v-model="state.cellPhone" name="radio" value="LGT" />
          <span>LGU+</span>
        </label>
        <label>
          <input type="radio" v-model="state.cellPhone" name="radio" value="SKR" />
          <span>SKT 알뜰폰</span>
        </label>
        <label>
          <input type="radio" v-model="state.cellPhone" name="radio" value="KTR" />
          <span>KT 알뜰폰</span>
        </label>
        <label>
          <input type="radio" v-model="state.cellPhone" name="radio" value="LGR" />
          <span>LGU+ 알뜰폰</span>
        </label>
        <p class="info-msg is-error">이용 중인 통신사를 선택해 주세요.</p>
      </div>

      <!-- [CASE4]: 휴대폰 인증 동의 -->
      <div class="join-agree-wrap step4 fade-in">
        <div class="all-agree">
          <input id="allCheck" name="all-check" type="checkbox" value="" />
          <label for="allCheck">휴대폰 인증 전체동의</label>
        </div>
        <div class="agree">
          <ul class="agree-list-wrap">
            <li>
              <div class="agree-list">
                <input id="check1" name="checkbox" type="checkbox" value="" />
                <label for="check1">[필수] 개인정보이용동의</label>
                <a href="#" @click.prevent="">약관보기</a>
              </div>
            </li>
            <li>
              <div class="agree-list">
                <input id="check2" name="checkbox" type="checkbox" value="" />
                <label for="check2">[필수] 고유식별정보처리동의</label>
                <a href="#" @click.prevent="">약관보기</a>
              </div>
            </li>
            <li>
              <div class="agree-list">
                <input id="check3" name="checkbox" type="checkbox" value="" />
                <label for="check3">[필수] 서비스이용약관동의</label>
                <a href="#" @click.prevent="">약관보기</a>
              </div>
            </li>
            <li>
              <div class="agree-list">
                <input id="check4" name="checkbox" type="checkbox" value="" />
                <label for="check4">[필수] 통신사이용약관동의</label>
                <a href="#" @click.prevent="">약관보기</a>
              </div>
            </li>
            <li>
              <div class="agree-list">
                <input id="check5" name="checkbox" type="checkbox" value="" />
                <label for="check5">[필수] 제3자 정보제공 동의</label>
                <a href="#" @click.prevent="">약관보기</a>
              </div>
            </li>
          </ul>
        </div>
        <p class="info-msg is-error">필수약관 동의 후 서비스를 이용할 수 있습니다.</p>
      </div>

      <div class="join-agree-btn">
        <!-- [D]: 버튼 비활성화 ex> class="disable" -->
        <button type="button" class="disable">다음</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'

const isDesktop = getOSByUserAgent() === 'desktop'

const state = reactive({
  cellPhone: '',
  isFocisIdentify: false
})

const _onFocusidentify = () => {
  state.isFocisIdentify = true
}
const _onBluridentify = () => {
  state.isFocisIdentify = false
}
</script>

<style lang="scss">
@use '~/pages/customer/member/scss/join';
</style>
