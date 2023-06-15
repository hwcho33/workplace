<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- input text -->
      <InputTextMd />
      <div style="position: relative">
        <div class="ex-input-text-wrap">
          <label for="userId">disabled 상태</label>
          <div class="input-text-wrap">
            <input type="text" placeholder="아이디" name="user-id" id="userId" disabled />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg"></p>
        </div>
        <br /><br />
        <div class="ex-input-text-wrap">
          <label for="userId">Default 상태</label>
          <div class="input-text-wrap">
            <input type="text" placeholder="아이디" name="user-id" id="userId" required />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg"></p>
        </div>
        <br /><br />
        <div class="ex-input-text-wrap is-active">
          <label for="userId">Active 상태 <em class="required">*</em></label>
          <div class="input-text-wrap">
            <input type="text" placeholder="아이디" name="user-id" value="test" id="userId" />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg">영문 숫자 특수문자 2가지 이상 조합 8~16자</p>
        </div>
        <br /><br />
        <div class="ex-input-text-wrap is-active is-auto-complete">
          <label for="userId">Active 자동완성 상태 <em class="required">*</em></label>
          <div class="input-text-wrap">
            <input type="text" placeholder="아이디" name="user-id" value="test" id="userId" />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
            <ul class="input-complete-wrap">
              <li><span class="user-id">oww1220@</span>naver.com</li>
              <li><span class="user-id">oww1220@</span>hanmail.net</li>
              <li><span class="user-id">oww1220@</span>gmail.com</li>
              <li><span class="user-id">oww1220@</span>nate.com</li>
              <li><span class="user-id">oww1220@</span>daum.net</li>
              <li><span class="user-id">oww1220@</span>kakao.com</li>
              <li><span class="user-id">oww1220@</span>hotmail.com</li>
              <li><span class="user-id">oww1220@</span>korea.com</li>
              <li><span class="user-id">oww1220@</span>icloud.com</li>
            </ul>
          </div>
        </div>
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />

        <div class="ex-input-text-wrap is-complete">
          <label for="userId">Complete 상태 <em class="required">*</em></label>
          <div class="input-text-wrap">
            <input type="text" placeholder="아이디" name="user-id" value="test" id="userId" />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg is-warning">입력하신 번호로 인증번호가 발송 되었습니다.</p>
        </div>
        <br /><br />
        <div class="ex-input-text-wrap is-error">
          <label for="userId">Error 상태 <em class="required">*</em></label>
          <div class="input-text-wrap">
            <input type="text" placeholder="아이디" name="user-id" value="test" id="userId" />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg is-error">SNS 간편가입 아이디입니다. SNS로그인(네이버,카카오,페이코)를 이용해 주세요.</p>
        </div>
        <br /><br />
        <div class="ex-input-text-wrap">
          <label for="userId">Default 인증번호 입력</label>
          <div class="input-text-wrap">
            <input type="text" placeholder="예) 1234" name="user-id" id="userId" />
            <div class="cert-num-wrap">
              <span>04:59</span>
            </div>
          </div>
        </div>
        <br /><br />
        <div class="ex-input-text-wrap is-active">
          <label for="userId">Active 인증번호 입력</label>
          <div class="input-text-wrap">
            <input type="text" placeholder="예) 1234" value="2213" name="user-id" id="userId" />
            <div class="cert-num-wrap">
              <span>04:59</span>
            </div>
          </div>
        </div>
        <br /><br />
        <div class="ex-input-text-wrap is-error">
          <label for="userId">Error 인증번호 입력</label>
          <div class="input-text-wrap">
            <input type="text" placeholder="예) 1234" value="2213" name="user-id" id="userId" />
            <div class="cert-num-wrap">
              <span>04:59</span>
            </div>
          </div>
          <p class="info-msg is-error">인증번호를 확인 후 다시 입력해 주세요.</p>
        </div>
      </div>
      <br /><br />
      <!--// input text -->
      <!-- input Password -->
      <InputPasswordMd />
      <div style="position: relative">
        <div class="ex-input-password-wrap">
          <label for="userId">Default 상태</label>
          <div class="input-text-wrap">
            <input type="password" placeholder="password" name="user-id" id="userId" required />
            <div class="btns-wrap">
              <button type="button" class="view-btn">비밀번호 보기 숨기기</button>
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg"></p>
        </div>
        <br /><br />
        <div class="ex-input-password-wrap is-active">
          <label for="userId">Active 상태 <em class="required">*</em></label>
          <div class="input-text-wrap">
            <input type="password" placeholder="password" name="user-id" value="test" id="userId" />
            <div class="btns-wrap">
              <button type="button" class="view-btn">비밀번호 보기 숨기기</button>
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg">영문 숫자 특수문자 2가지 이상 조합 8~16자</p>
        </div>
        <br /><br />
        <div class="ex-input-password-wrap is-complete">
          <label for="userId">Complete 상태 <em class="required">*</em></label>
          <div class="input-text-wrap">
            <input type="password" placeholder="password" name="user-id" value="test" id="userId" />
            <div class="btns-wrap">
              <button type="button" class="view-btn">비밀번호 보기 숨기기</button>
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg is-warning">입력하신 번호로 인증번호가 발송 되었습니다.</p>
        </div>
        <br /><br />
        <div class="ex-input-password-wrap is-error">
          <label for="userId">Error 상태 <em class="required">*</em></label>
          <div class="input-text-wrap">
            <input
              :type="state.toggleFlag ? 'text' : 'password'"
              placeholder="password"
              name="user-id"
              value="test"
              id="userId"
            />
            <div class="btns-wrap">
              <button
                type="button"
                class="view-btn"
                :class="{ 'is-active': state.toggleFlag }"
                @click="
                  () => {
                    state.toggleFlag = !state.toggleFlag
                  }
                "
              >
                비밀번호 보기 숨기기
              </button>
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg is-error">SNS 간편가입 아이디입니다. SNS로그인(네이버,카카오,페이코)를 이용해 주세요.</p>
        </div>
        <br /><br />
      </div>
      <br /><br />
      <!--// input Password -->
      <!-- input Checkbox -->
      <InputCheckboxMd />
      <div style="position: relative">
        <div class="ex-custom-check">
          <input id="test_1" name="" type="checkbox" value="test_value1" />
          <label for="test_1">기본 체크박스</label>
        </div>
        <br /><br />
        <div class="ex-custom-check">
          <input id="test_2" name="" type="checkbox" value="test_value2" disabled />
          <label for="test_2">disabled 체크박스</label>
        </div>
        <br /><br />
      </div>
      <br /><br />
      <!--// input Checkbox -->
      <!-- input Radio Button -->
      <InputRadioButtonMd />
      <div style="position: relative">
        <div class="ex-custom-radio">
          <input id="test_radio_1" name="radio01" type="radio" value="test_radio_value1" />
          <label for="test_radio_1">기본 라디오1</label>
        </div>
        <br /><br />
        <div class="ex-custom-radio">
          <input id="test_radio_2" name="radio01" type="radio" value="test_radio_value2" />
          <label for="test_radio_2">기본 라디오2</label>
        </div>
        <br /><br />
        <div class="ex-custom-radio">
          <input id="test_radio_3" name="radio01" type="radio" value="test_radio_value2" disabled />
          <label for="test_radio_3">disabled 라디오</label>
        </div>
        <br /><br />
      </div>
      <br /><br />
      <!--// input Radio Button -->
      <!-- input Toggle -->
      <InputToggleMd />
      <div style="position: relative">
        <label class="ex-toggle">
          <input type="checkbox" name="" />
          <span></span>
        </label>
        <br /><br />
        <label class="ex-toggle">
          <input type="checkbox" name="" />
          <span>내 문의글만 보기</span>
        </label>
        <br /><br />
        <label class="ex-toggle-big">
          <input type="checkbox" name="" />
          <span></span>
        </label>
        <br /><br />
        <label class="ex-toggle-big">
          <input type="checkbox" name="" />
          <span>내 문의글만 보기</span>
        </label>
        <br /><br />
      </div>
      <br /><br />
      <!--// input Toggle -->
      <!-- input head label -->
      <InputHeadLabelMd />
      <div style="position: relative">
        <label class="ex-head-label">휴대폰 번호 <em class="required">*</em></label>
        <label class="ex-head-label">인증번호</label>
      </div>
      <br /><br />
      <!--// input head label -->
      <!-- input 메시지 타입 -->
      <InputMessageMd />
      <div style="position: relative">
        <p class="ex-input-msg">SNS 간편가입 아이디입니다. SNS로그인(네이버,카카오,페이코)를 이용해 주세요.</p>
        <br />
        <p class="ex-input-msg is-error">SNS 간편가입 아이디입니다. SNS로그인(네이버,카카오,페이코)를 이용해 주세요.</p>
        <br />
        <p class="ex-input-msg is-warning">입력하신 번호로 인증번호가 발송 되었습니다.</p>
      </div>
      <!--// input 메시지 타입 -->
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'ComponentsForm'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import InputTextMd from './md/input-text.md'
import InputPasswordMd from './md/input-password.md'
import InputCheckboxMd from './md/input-checkbox.md'
import InputToggleMd from './md/input-toggle.md'
import InputRadioButtonMd from './md/input-radio-button.md'
import InputHeadLabelMd from './md/input-head-label.md'
import InputMessageMd from './md/input-message.md'
const { addIter, checkMapId } = useMapId()

// id
const id = 'form'
addIter({
  category: 'components',
  id
})
const state = reactive({
  toggleFlag: false
})
</script>
<style lang="scss"></style>
