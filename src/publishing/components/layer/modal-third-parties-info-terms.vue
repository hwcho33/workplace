<template>
  <Layer
    v-model="state.isShow"
    layer-type="full"
    class="layer-terms-wrap"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>제3자 정보제공 동의</template>
    <template #contents>
      <!-- skt 개인정보 제3자 제공동의(알뜰폰) -->
      <div class="area-terms" v-if="cellPhone === 'SKT' || cellPhone === 'SKR'">
        <dl>
          <dt>개인정보 제3자 제공 동의</dt>
          <dd>"알뜰폰(MVNO)"사업자는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.</dd>
          <dd>
            <dl>
              <dt>제1조 (알뜰폰(MVNO) 사업자)</dt>
              <dd>
                SK텔레콤의 알뜰폰(MVNO) 사업자는
                SK텔링크(SK세븐모바일),아이즈비전(아이즈모바일),이마트(이마트알뜰폰),유니컴즈(모빙),LG헬로비전(헬로모바일),머천드코리아(마이월드),에스원(안심모바일),큰사람(이야기모바일),스마텔(스마텔),프리텔레콤(프리티),조이텔(조이텔),KCT(티플러스),
                KB국민은행(Liiv M)입니다.
              </dd>
            </dl>
            <dl>
              <dt>제2조 (제공목적)</dt>
              <dd>
                본 동의는 본인확인서비스를 제공하기 위하여 본인확인기관인 SK텔레콤과 본인확인서비스 이용자간
                본인확인서비스 이용에 필요한 고객정보를 위탁하여 본인확인서비스를 제공 하는 것에 대해 동의합니다.
              </dd>
            </dl>
            <dl>
              <dt>제3조 (제공정보)</dt>
              <dd>
                휴대폰 본인확인서비스 제공에 필요한 개인정보로 성명, 휴대폰번호, 생년월일, 내·외국인구분, 성별
                정보입니다
              </dd>
            </dl>
            <dl>
              <dt>제4조 (제공받는자)</dt>
              <dd>SK텔레콤</dd>
            </dl>
            <dl>
              <dt>제5조 (제공기간)</dt>
              <dd>이동통신사에서 보유중인 정보로서 별도 이용기간은 없습니다.</dd>
            </dl>
          </dd>
          <dd>
            "본인"은 정보제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 휴대폰 본인확인서비스를 이용 하실 수
            없습니다.
          </dd>
        </dl>
      </div>

      <!-- kt 개인정보 제3자 제공동의(알뜰폰) -->
      <div class="area-terms" v-if="cellPhone === 'KTF' || cellPhone === 'KTR'">
        <dl>
          <dt>개인정보 제3자 제공 동의</dt>
          <dd>"알뜰폰(MVNO)"사업자는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.</dd>
          <dd>
            <dl>
              <dt>제1조 (알뜰폰(MVNO) 사업자)</dt>
              <dd>
                ㈜케이티의 알뜰폰(MVNO) 사업자 (주)LG헬로비전(헬로모바일), (주)니즈텔레콤(니즈모바일),
                (주)더원플랫폼(아이플러스유), (주)미니게이트(M2모바일), (주)스테이지파이브(핀플레이),
                (주)와이엘랜드(여유알뜰폰), (주)위너스텔(웰), (주)파인디지털, (주)한국케이블텔레콤(티플러스),
                ACN코리아(플래시모바일), KT스카이라이프(스카이라이프모바일), KT엠모바일(KtM 모바일), KT텔레캅,
                드림라인(주)(드림모바일), 로카모빌리티(주), 머천드코리아(마이월드), 아이디스파워텔㈜,
                앤알커뮤니케이션(앤텔레콤), 에스원(안심모바일), 장성모바일, ㈜세종텔레콤(스노우맨),
                ㈜씨엔커뮤니케이션(씨앤컴), ㈜아이즈비전(아이즈모바일), ㈜에넥스텔레콤(A모바일),
                ㈜에이프러스(아시아모바일), ㈜유니컴즈(모빙), ㈜제이씨티, ㈜코드모바일(이지모바일),
                ㈜큰사람커넥트(이야기모바일), ㈜프리텔레콤(프리티), 한국피엠오(주)(밸류컴), (주)스마텔,
                KB국민은행(리브엠) 은 본인확인서비스의 제공을 위해 아래와 같이 이용자의 개인정보를 제3자에게 제공합니다
              </dd>
            </dl>
            <dl>
              <dt>제2조 (제공목적)</dt>
              <dd>본인확인서비스 제공</dd>
            </dl>
            <dl>
              <dt>제3조 (제공정보)</dt>
              <dd>성명, 휴대폰번호, 생년월일, 내·외국인구분, 성별</dd>
            </dl>
            <dl>
              <dt>제4조 (제공받는자)</dt>
              <dd>주식회사 케이티(KT)</dd>
            </dl>
            <dl>
              <dt>제5조 (제공기간)</dt>
              <dd>서비스 제공 완료시까지</dd>
            </dl>
          </dd>
          <dd>
            '본인'은 정보제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 휴대폰 본인확인서비스를 이용하실 수
            없습니다.
          </dd>
        </dl>
      </div>

      <!-- lgu+ 개인정보 제3자 제공동의(알뜰폰) -->
      <div class="area-terms" v-if="cellPhone === 'LGT' || cellPhone === 'LGR'">
        <dl>
          <dt>[개인정보 제3자 제공 동의]</dt>
          <dd>"알뜰폰(MVNO)"사업자는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.</dd>
          <dd>
            <dl>
              <dt>제1조 (알뜰폰(MVNO) 사업자)</dt>
              <dd>
                엘지유플러스의 알뜰폰(MVNO) 사업자는 인스코비(프리티), 머천드코리아(마이월드), (주)엠티티텔레콤(메리큐),
                (주)미디어로그, 이마트, 서경방송, 울산방송, 푸른방송, 남인천방송, 금강방송, 제주방송,
                (주)와이엘랜드(여유텔레콤), ACN코리아(플래시모바일), 이지모바일, 유니컴즈(모빙), 큰사람(이야기), 스마텔,
                에넥스텔레콤(A모바일), 레그원(온국민폰), 드림에이치앤비(셀모바일), 조이텔(조이텔), 에스원(안심모바일),
                원텔레콤, (주)국민은행(Liiv M), LG헬로비전(헬로모바일), 엔티온텔레콤, 인스모바일, 아시아모바일,
                슈가모바일, 코나아이 입니다.
              </dd>
            </dl>
            <dl>
              <dt>제2조 (제공목적)</dt>
              <dd>
                본 동의는 본인확인 서비스를 제공하기 위하여 본인확인기관인 (주)엘지유플러스와 본인확인서비스 이용자간
                본인확인서비스 이용에 필요한 고객정보를 위탁하여 본인확인서비스를 제공 하는 것에 대해 동의합니다.
              </dd>
            </dl>
            <dl>
              <dt>제3조 (제공정보)</dt>
              <dd>
                휴대폰 본인확인 서비스 제공에 필요한 개인정보로 성명, 휴대폰번호, 생년월일, 내·외국인구분, 성별
                정보입니다.
              </dd>
            </dl>
            <dl>
              <dt>제4조 (제공받는자)</dt>
              <dd>(주)엘지유플러스</dd>
            </dl>
            <dl>
              <dt>제5조 (제공기간)</dt>
              <dd>이동통신사에서 보유중인 정보로서 별도 이용기간은 없습니다.</dd>
            </dl>
          </dd>
          <dd>
            "본인"은 정보제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 휴대폰 본인 확인 서비스를 이용 하실 수
            없습니다.
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
