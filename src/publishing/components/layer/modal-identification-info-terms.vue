<template>
  <Layer
    v-model="state.isShow"
    layer-type="full"
    class="layer-terms-wrap"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>고유식별정보처리동의</template>
    <template #contents>
      <!-- skt 고유식별정보처리동의 약관 -->
      <div class="area-terms" v-if="cellPhone === 'SKT' || cellPhone === 'SKR'">
        <dl>
          <dt>SK텔레콤 귀중</dt>
          <dd>
            본인은 SK텔레콤(주)(이하 ‘회사’라 합니다)가 제공하는 본인확인서비스(이하 ‘서비스’라 합니다)를 이용하기 위해,
            다음과 같이 본인의 개인정보를 회사가 아래 기재된 제3자에게 제공하는 것에 동의합니다.
          </dd>
          <dd>
            <dl class="mark-dash">
              <dt>1. 개인정보를 제공받는 자</dt>
              <dd>NICE평가정보(주), SCI평가정보(주)</dd>
            </dl>
            <dl class="mark-dash">
              <dt>2. 개인정보를 제공받는 자의 개인정보 이용목적</dt>
              <dd>연계정보(CI)/중복가입확인정보(DI) 생성 및 회사에 제공</dd>
              <dd>부정 이용 방지 및 민원 처리</dd>
            </dl>
            <dl class="mark-dash">
              <dt>3. 제공하는 개인정보 항목</dt>
              <dd>회사가 보유하고 있는 이용자의 주민등록번호</dd>
            </dl>
            <dl class="mark-dash">
              <dt>4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간</dt>
              <dd>연계정보(CI)/중복가입확인정보(DI) 생성 후 3개월</dd>
            </dl>
            <dl>
              <dt>5. 위 개인정보 제공에 동의하지 않으실 경우,</dt>
              <dd>서비스를 이용할 수 없습니다</dd>
            </dl>
          </dd>
        </dl>
        <dl>
          <dt>[NICE평가정보 귀중]</dt>
          <dd>
            NICE평가정보(주) (이하 “회사”)가 에스케이텔레콤(주), (주)케이티, LG유플러스(주)의 업무 대행을 통해 제공하는
            휴대폰본인확인서비스와 관련하여 고객으로부터 수집한 고유식별정보를 이용 및 처리하거나 제3자에게 제공하고자
            할 때에는 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’에 따라서 고객으로 부터 동의를 받아야 합니다.
          </dd>
          <dd>
            <dl>
              <dt>제1조 [고유식별정보의 이용 및 처리 목적]</dt>
              <dd>
                <em>"회사"는 고객의 고유식별정보를 아래의 목적으로 이용 및 처리할 수 있습니다.</em>
                <ul>
                  <li>1. 본인확인서비스 제공</li>
                  <li>2. 부정 이용 방지 및 수사의뢰</li>
                  <li>3. 휴대폰번호보호서비스 해제 (서비스 가입자에 한함)</li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>제2조 [고유식별정보의 이용 및 처리 내용]</dt>
              <dd>
                에스케이텔레콤(주), (주)케이티, LG유플러스(주)의 통신사 또는 통신사의 대행업무를 수행하는 사업자에
                정보를 전송하여 방송통신위원회에서 고시로 지정한 휴대폰본인확인기관을 통해 본인여부를 확인하고 결과를
                제공받기 위해 고유식별정보가 이용 및 처리됩니다.
              </dd>
              <dd>
                <div class="mark-dash">이용 및 처리되는 고유식별정보: 주민등록번호(내국인), 외국인등록번호(외국인)</div>
              </dd>
              <dd>상기와 같이 고유식별정보 이용 및 처리에 동의합니다.</dd>
            </dl>
          </dd>
        </dl>
      </div>

      <!-- kt 고유식별정보처리동의 약관 -->
      <div class="area-terms" v-if="cellPhone === 'KTF' || cellPhone === 'KTR'">
        <dl>
          <dt>(주)케이티 귀중</dt>
          <dd>
            주)케이티 (이하 "본인확인기관")가 NICE평가정보(주) (이하 "회사")을 통해 제공하는 휴대폰 본인확인 서비스
            관련하여 이용자로부터 수집한 고유식별정보를 이용하거나 타인에게 제공할 때에는 '정보통신망 이용촉진 및
            정보보호 등에 관한 법률'(이하 "정보통신망법")에 따라 이용자의 동의를 얻어야 합니다.
          </dd>
          <dd>
            <dl>
              <dt>■ 제1조[고유식별정보의 처리 동의]</dt>
              <dd>
                "본인확인기관"은 정보통신망법 제23조의2 제2항에 따라 인터넷상에서 주민등록번호를 입력하지 않고도
                본인임을 확인할 수 있는 휴대폰 본인확인서비스를 제공하기 위해 고유식별정보를 처리합니다.
              </dd>
            </dl>
            <dl>
              <dt>■ 제2조[고유식별정보의 제공 동의]</dt>
              <dd>
                "본인확인기관 지정 등에 관한 기준(방송통신위원회 고시)"에 따라 "회사"와 계약한 정보통신서비스 제공자 의
                연계서비스 및 중복가입확인을 위해 아래와 같이 본인의 고유식별정보를 '다른 본인확인기관'에 제공하는 것에
                동의합니다.
              </dd>
              <dd>
                <em>[고유식별정보 제공 동의]</em>
                <dl>
                  <dt>1. 제공자(본인확인기관)</dt>
                  <dd>(주)케이티</dd>
                </dl>
                <dl>
                  <dt>2. 제공 받는자(본인확인기관)</dt>
                  <dd>코리아크레딧뷰로㈜, SCI평가정보㈜</dd>
                </dl>
                <dl>
                  <dt>3. 제공하는 항목</dt>
                  <dd>주민등록번호(내국인), 외국인등록번호(국내거주외국인)</dd>
                </dl>
                <dl>
                  <dt>4. 제공 목적</dt>
                  <dd>CI(연계정보), DI(중복가입확인정보)의 생성 및 전달</dd>
                </dl>
                <dl>
                  <dt>5. 보유 및 이용기간</dt>
                  <dd>CI(연계정보), DI(중복가입확인정보) 생성 즉시 폐기</dd>
                </dl>
              </dd>
            </dl>
          </dd>
        </dl>
        <dl>
          <dt>[NICE평가정보 귀중]</dt>
          <dd>
            NICE평가정보(주) (이하 “회사”)가 에스케이텔레콤(주), (주)케이티, LG유플러스(주)의 업무 대행을 통해 제공하는
            휴대폰본인확인서비스와 관련하여 고객으로부터 수집한 고유식별정보를 이용 및 처리하거나 제3자에게 제공하고자
            할 때에는 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’에 따라서 고객으로 부터 동의를 받아야 합니다.
          </dd>
          <dd>
            <dl>
              <dt>제1조 [고유식별정보의 이용 및 처리 목적]</dt>
              <dd>
                <em>“회사”는 고객의 고유식별정보를 아래의 목적으로 이용 및 처리할 수 있습니다.</em>
                <ul>
                  <li>1. 본인확인서비스 제공</li>
                  <li>2. 부정 이용 방지 및 수사의뢰</li>
                  <li>3. 휴대폰번호보호서비스 해제 (서비스 가입자에 한함)</li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>제2조 [고유식별정보의 이용 및 처리 내용]</dt>
              <dd>
                에스케이텔레콤(주), (주)케이티, LG유플러스(주)의 통신사 또는 통신사의 대행업무를 수행하는 사업자에
                정보를 전송하여 방송통신위원회에서 고시로 지정한 휴대폰본인확인기관을 통해 본인여부를 확인하고 결과를
                제공받기 위해 고유식별정보가 이용 및 처리됩니다.
              </dd>
              <dd>
                <div class="mark-dash">이용 및 처리되는 고유식별정보: 주민등록번호(내국인), 외국인등록번호(외국인)</div>
              </dd>
              <dd>상기와 같이 고유식별정보 이용 및 처리에 동의합니다.</dd>
            </dl>
          </dd>
        </dl>
      </div>

      <!-- lgu+ 고유식별처리정보동의 약관 -->
      <div class="area-terms" v-if="cellPhone === 'LGT' || cellPhone === 'LGR'">
        <dl>
          <dt>LG유플러스(주) 귀중</dt>
          <dd>
            LG유플러스(주)(이하 ‘회사’)가 휴대폰본인확인서비스(이하 ‘서비스’)를 제공하기 위해 고유식별정보를 다음과 같이
            제3자에게 제공 및 처리 하는 데에 동의합니다.
          </dd>
          <dd>
            <dl class="mark-dash">
              <dt>1. 고유식별정보를 제공받는자</dt>
              <dd>NICE평가정보㈜, SCI평가정보㈜, 코리아크레딧뷰로㈜</dd>
            </dl>
            <dl class="mark-dash">
              <dt>2. 고유식별정보를 제공받는자의 목적</dt>
              <dd>연계정보(CI)와 중복가입확인정보(DI)의 생성 및 ‘회사’ 제공</dd>
              <dd>부정 이용 방지 및 민원 처리</dd>
            </dl>
            <dl>
              <dt>3. 고유식별정보 제공 항목:</dt>
              <dd>‘회사’가 보유하고 있는 고객의 주민등록번호와 외국인등록번호</dd>
            </dl>
            <dl>
              <dt>4. 고유식별정보를 제공받는 자의 보유 및 이용기간:</dt>
              <dd>제공받는자의 개인정보처리방침에 따름</dd>
            </dl>
            <dl>
              <dt>5. 상기 고유식별정보 처리에 대한 내용에 동의하지 않으실 경우,</dt>
              <dd>‘서비스’를 이용할 수 없습니다.</dd>
              <dd>상기와 같이 고유식별정보 이용 및 처리에 동의합니다.</dd>
            </dl>
          </dd>
        </dl>
        <dl>
          <dt>[NICE평가정보 귀중]</dt>
          <dd>
            NICE평가정보(주) (이하 “회사”)가 에스케이텔레콤(주), (주)케이티, LG유플러스(주)의 업무 대행을 통해 제공하는
            휴대폰본인확인서비스와 관련하여 고객으로부터 수집한 고유식별정보를 이용 및 처리하거나 제3자에게 제공하고자
            할 때에는 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’에 따라서 고객으로 부터 동의를 받아야 합니다.
          </dd>
          <dd>
            <dl>
              <dt>제1조 [고유식별정보의 이용 및 처리 목적]</dt>
              <dd>
                <em>“회사”는 고객의 고유식별정보를 아래의 목적으로 이용 및 처리할 수 있습니다.</em>
                <ul>
                  <li>1. 본인확인서비스 제공</li>
                  <li>2. 부정 이용 방지 및 수사의뢰</li>
                  <li>3. 휴대폰번호보호서비스 해제 (서비스 가입자에 한함)</li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>제2조 [고유식별정보의 이용 및 처리 내용]</dt>
              <dd>
                에스케이텔레콤(주), (주)케이티, LG유플러스(주)의 통신사 또는 통신사의 대행업무를 수행하는 사업자에
                정보를 전송하여 방송통신위원회에서 고시로 지정한 휴대폰본인확인기관을 통해 본인여부를 확인하고 결과를
                제공받기 위해 고유식별정보가 이용 및 처리됩니다.
              </dd>
              <dd>
                <div class="mark-dash">이용 및 처리되는 고유식별정보: 주민등록번호(내국인), 외국인등록번호(외국인)</div>
              </dd>
              <dd>상기와 같이 고유식별정보 이용 및 처리에 동의합니다.</dd>
            </dl>
          </dd>
        </dl>
      </div>
    </template>
    <template #bottom>
      <div class="button-wrapper">
        <button type="button" class="button" @click="_callbackClose">확인</button>
      </div>
    </template>
  </Layer>
</template>

<script setup lang="ts">
import { Layer } from '@/components/layer'
export interface Props {
  modelValue: boolean
  cellPhone: string
}

const props = withDefaults(defineProps<Props>(), {})

const state = reactive({
  isShow: props.modelValue
})

const emit = defineEmits<{
  (event: 'update:modelValue', result: boolean): void
}>()

watch(
  () => props.modelValue,
  newItems => {
    if (newItems) {
      state.isShow = true
    } else {
      state.isShow = false
    }
  },
  { immediate: true }
)

const _callbackClose = () => {
  emit('update:modelValue', false)
  console.log('레이어 닫기 콜백')
}
const _callbackOpen = () => {
  console.log('레이어 열기 콜백')
}
</script>

<style lang="scss">
@use '~/pages/common/terms/scss/terms';
</style>
