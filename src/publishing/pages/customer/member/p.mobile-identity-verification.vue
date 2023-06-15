<template>
  <div class="mobile-identity-wrap">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">휴대폰 본인인증하기</h2>

    <div class="inner-wrap">
      <div class="join-form-wrap">
        <div class="join-input-wrap">
          <!-- is-complete, is-error -->
          <div class="input-text-wrap">
            <input type="text" placeholder="이름" title="이름 입력" required />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg is-error">이미 가입된 이메일 주소입니다. 다른 이메일을 입력해 주세요.</p>
        </div>

        <div class="identify-wrap">
          <div class="join-input-wrap identify is-complete">
            <!-- is-complete, is-error -->
            <div class="input-text-wrap">
              <input
                type="tel"
                placeholder="주민등록번호 앞 6자리"
                maxlength="6"
                title="주민등록번호 앞 6자리 입력"
                value="910101"
                required
              />
              <div class="btns-wrap">
                <button type="button" class="del-btn">삭제</button>
              </div>
            </div>
            <span class="util">-</span>
            <div class="input-text-wrap">
              <input type="tel" placeholder="0" maxlength="1" title="주민등록번호 뒤 1자리 입력" required />
              <span class="identity-num-after">
                <code class="blind">23456</code><i></i><i></i><i></i><i></i><i></i><i></i>
              </span>
            </div>
          </div>
          <p class="info-msg is-error">비밀번호는 8~16자 이내로 입력해 주세요.</p>
        </div>

        <div class="carrier-radio-wrap not-active">
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

        <div class="join-agree-wrap">
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

        <div class="join-input-wrap is-complete">
          <div class="input-text-wrap">
            <input type="tel" placeholder="휴대폰 번호(‘-’ 없이 입력)" title="휴대폰 번호 입력" />
            <div class="btns-wrap"><button type="button" class="del-btn">삭제</button></div>
          </div>
          <p class="info-msg is-warning">입력하신 번호로 인증번호가 발송 되었습니다.</p>
          <div class="button-group-wrap">
            <!-- active 영역활성화-->
            <button type="button" class="certify-btn">인증번호 전송</button>
          </div>
        </div>

        <div class="join-input-wrap certification is-active">
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
  </div>
</template>

<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'
const state = reactive({
  cellPhone: ''
})
</script>

<style lang="scss">
@use '~/pages/customer/member/scss/join';
</style>
