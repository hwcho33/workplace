<template>
  <div class="simple-member-wrap join">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">회원가입</h2>

    <div class="inner-wrap">
      <div class="info-title-wrap">
        <i class="icon-naver">네이버</i>
        <h3 class="title">
          회원가입 이후,<br />
          간편 로그인이 가능합니다.
        </h3>
      </div>

      <div class="join-form-wrap">
        <div class="join-input-wrap is-complete">
          <label for="userId">아이디(이메일 주소)</label>
          <div class="input-text-wrap">
            <input
              type="text"
              placeholder="예) nsmall@nsmall.com"
              value="kimnsmall@naver.com"
              name="user-id"
              id="userId"
              readonly
              required
            />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
        </div>

        <div class="join-input-wrap is-complete">
          <label for="userName">이름</label>
          <div class="input-text-wrap">
            <input
              type="text"
              placeholder="예) 홍길동"
              value="김엔에스"
              name="user-name"
              id="userName"
              readonly
              required
            />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
        </div>

        <div class="join-input-wrap is-complete">
          <label for="userTel">휴대폰 번호</label>
          <div class="input-text-wrap">
            <input type="tel" placeholder="‘-’ 없이 입력" name="user-tel" id="userTel" required />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>

          <p class="info-msg is-warning">입력하신 번호로 인증번호가 발송 되었습니다.</p>
          <div class="button-group-wrap">
            <!-- active 영역활성화-->
            <button type="button">로그인</button>
            <button type="button">인증번호 전송</button>
          </div>
        </div>

        <div class="join-input-wrap certification is-active">
          <label for="userCertNum">인증번호 입력</label>
          <div class="input-text-wrap">
            <input type="text" placeholder="인증번호 입력" name="user-certnum" id="userCertNum" required />
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

        <div class="join-input-wrap">
          <label for="birthDate">생년월일</label>
          <div class="input-text-wrap">
            <input type="text" placeholder="예) 19681001" name="user-id" id="userTel" required />
            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>
          <p class="info-msg is-error">숫자 8자리로 입력해 주세요.</p>
        </div>

        <div class="join-radio-wrap">
          <span>성별</span>
          <div class="join-radio">
            <input id="join_radio_1" name="radio01" type="radio" value="" />
            <label for="join_radio_1">여자</label>
            <input id="join_radio_2" name="radio01" type="radio" value="" />
            <label for="join_radio_2">남자</label>
          </div>
        </div>

        <div class="join-agree-wrap">
          <div class="all-agree">
            <input id="allCheck" name="all-check" type="checkbox" value="" />
            <label for="allCheck">전체 동의</label>
          </div>
          <div class="agree">
            <ul class="agree-list-wrap">
              <li>
                <div class="agree-list">
                  <input id="check1" name="checkbox" type="checkbox" value="" />
                  <label for="check1">(필수) 이용약관</label>
                  <button type="button" class="popup-btn">약관보기</button>
                </div>
              </li>
              <li>
                <div class="agree-list" :class="{ 'is-active': state.personalInfo }">
                  <input id="check2" name="checkbox" type="checkbox" value="" />
                  <label for="check2">(필수) 개인정보 수집 및 이용</label>
                  <button @click="() => (state.personalInfo = !state.personalInfo)">약관보기</button>
                </div>
                <transition
                  name="dropdown"
                  @before-enter="onBeforeEnter"
                  @enter="onEnter"
                  @before-leave="onBeforeLeave"
                  @leave="onLeave"
                  :duration="{ enter: 800, leave: 600 }"
                >
                  <div class="agree-transition" v-if="state.personalInfo">
                    <div class="agree-content">
                      <div class="agree-table">
                        <table>
                          <caption>
                            수집시점, 수집항목, 이용목적에 관한 표
                          </caption>
                          <colgroup>
                            <col style="width: 24%" />
                            <col style="width: 38%" />
                            <col style="width: auto" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>수집시점</th>
                              <th>수집항목</th>
                              <th>이용목적</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-center">가입</td>
                              <td>
                                필수 : 이름, 아이디(이메일 주소), 비밀번호, 휴대폰전화번호, CI/DI 본인인증 정보(TV,
                                쇼핑북, T커머스 고객의 NSmall 회원 가입 시)
                              </td>
                              <td>
                                <ul class="join-bullet-list">
                                  <li>이용자 식별 및 회원관리</li>
                                  <li>민원처리 및 고객 피해보상, 고객주문ㆍ배송ㆍ상담처리 등 서비스 전반 제공</li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">주문</td>
                              <td>필수 : 배송지 정보(성명, 휴대폰 전화번호, 주소)</td>
                              <td>
                                <ul class="join-bullet-list">
                                  <li>
                                    상품, 사은품 또는 경품 등의 배송 민원처리 및 고객 피해보상, 고객
                                    주문ㆍ배송ㆍ상담처리 등 서비스 전반 제공
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <ul class="join-bullet-list type-mark">
                        <li>
                          보유 기간 : 동의 철회 시 또는 법정 의무 보유기간까지
                          <p>
                            개인정보 수집 및 이용에 대한 동의는 서비스 이용을 위해 꼭 필요합니다. 동의 거부하실 수
                            있으나, 이 경우 서비스 이용이 제한됩니다.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </transition>
              </li>
              <li>
                <div class="agree-list" :class="{ 'is-active': state.marketingAgree }">
                  <input id="check3" name="checkbox" type="checkbox" value="" />
                  <label for="check3">(선택) 마케팅 정보 수집 및 이용</label>
                  <button @click="() => (state.marketingAgree = !state.marketingAgree)">약관보기</button>
                </div>
                <transition
                  name="dropdown"
                  @before-enter="onBeforeEnter"
                  @enter="onEnter"
                  @before-leave="onBeforeLeave"
                  @leave="onLeave"
                  :duration="{ enter: 800, leave: 600 }"
                >
                  <div class="agree-transition" v-if="state.marketingAgree">
                    <div class="agree-content">
                      <div class="agree-table">
                        <table>
                          <caption>
                            목적, 수집항목, 이용목적에 관한 표
                          </caption>
                          <colgroup>
                            <col style="width: 32%" />
                            <col style="width: 34%" />
                            <col style="width: 34%" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>목적</th>
                              <th>수집항목</th>
                              <th>이용목적</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <ul class="join-bullet-list">
                                  <li>맞춤형 서비스 제공을 위한 신규 서비스 개발 및 개선</li>
                                  <li>
                                    제테크, 보험, 상조 등 상품 및 이벤트 정보 안내, 마케팅(광고성 정보 수신 동의 고객에
                                    한함)
                                  </li>
                                </ul>
                              </td>
                              <td>
                                <ul class="join-bullet-list">
                                  <li>이메일, 휴대전화번호, 성별, 생년월일</li>
                                </ul>
                              </td>
                              <td>회원 탈퇴 시 또는 법정 의무 보유기간까지</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <ul class="join-bullet-list type-mark">
                        <li>
                          (선택) 마케팅 정보 수집 및 이용에 거부할 수 있으며, 동의를 거부해도 서비스를 이용하실 수
                          있습니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
        </div>

        <div class="agreement-wrap">
          <div class="agreement-box marketing">
            <!--
              [MODIFY] 2023-06-08/박주형/(기획변경, 디자인변경)
              [D]: 마크업 변경.
            -->
            <dl class="agreement-info">
              <dt>수신 방법 선택</dt>
              <dd>‘마케팅 정보 수집 및 이용’에 동의 후 수신 방법을 선택하고 다양한 혜택과 쇼핑 정보를 받아보세요.</dd>
            </dl>
            <div class="col-wrap">
              <div class="col">
                <input id="chk1-1" name="chk1-1" type="checkbox" value="" /><label for="chk1-1"> 이메일 </label>
              </div>
              <div class="col">
                <input id="chk1-2" name="chk1-2" type="checkbox" value="" /><label for="chk1-2">SMS</label>
              </div>
              <div class="col">
                <input id="chk1-3" name="chk1-3" type="checkbox" value="" /><label for="chk1-3">전화</label>
              </div>
            </div>
          </div>
          <div class="agreement">
            <p>개인정보 유효기간 설정</p>
            <div class="agreement-box">
              <!--
              [MODIFY] 2023-06-08/박주형/(기획변경, 디자인변경)
              [D]: 구조 수정함.
            -->
              <div class="col-wrap">
                <div class="col">
                  <input id="chk2-1" name="chk2" type="radio" value="" /><label for="chk2-1"> 회원탈퇴 시 </label>
                </div>
                <div class="col">
                  <input id="chk2-2" name="chk2" type="radio" value="" /><label for="chk2-2"> 5년 </label>
                </div>
                <div class="col">
                  <input id="chk2-3" name="chk2" type="radio" value="" /><label for="chk2-3"> 3년 </label>
                </div>
                <div class="col">
                  <input id="chk2-4" name="chk2" type="radio" value="" /><label for="chk2-4"> 1년 </label>
                </div>
              </div>
            </div>
            <ul class="info-list-wrap">
              <li>미 설정 시, 개인정보 유효기간은 1년으로 설정됩니다.</li>
            </ul>
          </div>
        </div>
        <div class="join-agree-btn">
          <button type="button" class="disable">동의하고 가입하기</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDropdown } from '@/composables/ui/use-transition-hook'
import { getOSByUserAgent } from '@/utils/device'

const state = reactive({
  personalInfo: false,
  marketingAgree: false,
  openTermLayer: false
})
const { onBeforeEnter, onEnter, onBeforeLeave, onLeave } = useDropdown()
</script>
<style lang="scss">
@use '~/pages/customer/member/scss/join';
</style>
