<template>
  <Layer
    v-model="state.isShow"
    :use-close-bt="false"
    layer-type="bottom"
    class="layer-join-agree-wrap"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #contents>
      <div class="join-form-wrap">
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
            <dl class="agreement-info">
              <dt>수신 방법 선택</dt>
              <dd>‘마케팅 정보 수집 및 이용’에 동의 후 수신 방법을 선택하고 다양한 혜택과 쇼핑 정보를 받아보세요.</dd>
            </dl>
            <div class="col-wrap">
              <div class="col">
                <input id="chk1-1" name="chk1-1" type="checkbox" value="" />
                <label for="chk1-1" @click="toastHandler('수신 설정이 정상적으로 변경되었습니다.', 2000, 'bottom')">
                  이메일
                </label>
              </div>
              <div class="col">
                <input id="chk1-2" name="chk1-2" type="checkbox" value="" />
                <label for="chk1-2">SMS</label>
              </div>
              <div class="col">
                <input id="chk1-3" name="chk1-3" type="checkbox" value="" />
                <label for="chk1-3">전화</label>
              </div>
            </div>
          </div>

          <div class="agreement">
            <p>개인정보 유효기간 설정</p>
            <div class="agreement-box">
              <!--
              [MODIFY] 2023-06-08/박주형/(기획변경, 디자인변경)
              [D]: 마크업 변경.
            -->
              <div class="col-wrap">
                <div class="col">
                  <input id="chk2-1" name="chk2" type="radio" value="" />
                  <label
                    for="chk2-1"
                    @click="toastHandler('개인정보 유효 기간이 정상적으로 변경되었습니다.', 2000, 'bottom')"
                  >
                    회원탈퇴 시
                  </label>
                </div>
                <div class="col">
                  <input id="chk2-2" name="chk2" type="radio" value="" />
                  <label
                    for="chk2-2"
                    @click="toastHandler('개인정보 유효 기간이 정상적으로 변경되었습니다.', 10000, 'bottom')"
                  >
                    5년
                  </label>
                </div>
                <div class="col">
                  <input id="chk2-3" name="chk2" type="radio" value="" />
                  <label
                    for="chk2-3"
                    @click="toastHandler('개인정보 유효 기간이 정상적으로 변경되었습니다.', 2000, 'bottom')"
                  >
                    3년
                  </label>
                </div>
                <div class="col">
                  <input id="chk2-4" name="chk2" type="radio" value="" />
                  <label
                    for="chk2-4"
                    @click="toastHandler('개인정보 유효 기간이 정상적으로 변경되었습니다.', 2000, 'bottom')"
                  >
                    1년
                  </label>
                </div>
              </div>
            </div>

            <ul class="info-list-wrap">
              <li>미 설정 시, 개인정보 유효기간은 1년으로 설정됩니다.</li>
            </ul>
          </div>
        </div>

        <div class="join-agree-btn">
          <!-- [D]: 버튼 비활성화 ex> class="disable" -->
          <button type="button" class="disable" @click="_callbackClose">동의하고 가입하기</button>
        </div>
      </div>
    </template>
  </Layer>
</template>

<script setup lang="ts">
import { Layer } from '@/components/layer'
import { useDropdown } from '@/composables/ui/use-transition-hook'

const state = reactive({
  isShow: false,
  personalInfo: false,
  marketingAgree: false,
  openTermLayer: false
})

const emit = defineEmits<{
  (event: 'update:modelValue', result: boolean): void
}>()

const _callbackClose = () => {
  emit('update:modelValue', false)
  console.log('레이어 닫기 콜백')
}
const _callbackOpen = () => {
  console.log('레이어 열기 콜백')
}

const { onBeforeEnter, onEnter, onBeforeLeave, onLeave } = useDropdown()
</script>

<style lang="scss">
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;

.layer-join-agree-wrap {
  .join-form-wrap {
    .join-agree-wrap {
      margin: rem(24) 0 0;
    }
  }
}
</style>
