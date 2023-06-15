<template>
  <div>
    <br />
    <hr style="display: block" />
    <h4>{{ title }}</h4>

    <ModalDetailView v-model="state.isShow_1" />
    <button type="button" @click="() => (state.isShow_1 = true)">
      SID_FO_PD_003(MOPC) - ModalDetailView 열기
      <!-- 상세 이미지 -->
    </button>
    <ModalShare v-model="state.isShow_2" />
    <button type="button" @click="() => (state.isShow_2 = true)">
      SID_FO_PD_005(MOPC) - ModalShare 열기
      <!-- 공유하기/찜하기 -->
    </button>
    <p>
      - 타입 3종: <br />
      1. 기본/MO 일때: URL에 ?mo=true 추가 후 버튼 클릭<br />
      2. APP 일떄 : URL에 ?app=true 추가 후 버튼 클릭<br />
      3. PC : URL에 ?pc=true 추가 후 버튼 클릭
    </p>
    <ModalHeadCopyBanner v-model="state.isShow_3" />
    <button type="button" @click="() => (state.isShow_3 = true)">
      SID_FO_PD_011(MOPC) - ModalHeadCopyBanner 열기
      <!-- 배너리스트 -->
    </button>
    <ModalDetailCart v-model="state.isShow_4" />
    <button type="button" @click="() => (state.isShow_4 = true)">SID_FO_PD_028(MOPC) - ModalDetailCart 열기</button>
    <ModalDawnDelivery v-model="state.isShow_5" />
    <button type="button" @click="() => (state.isShow_5 = true)">
      SID_FO_PD_009 , SID-FO-PD_009(MOPC) - ModalDawnDelivery 열기
      <!-- NSmall 새벽배송 지역 -->
    </button>
    <ModalExchangeReturn v-model="state.isShow_6" />
    <button type="button" @click="() => (state.isShow_6 = true)">
      SID_FO_PD_022/SID_FO_PD_113(MOPC) - ModalExchangeReturn 열기
      <!-- 배송/교환/반품안내 -->
    </button>
    <ModalCouponDown v-model="state.isShow_7" />
    <button type="button" @click="() => (state.isShow_7 = true)">
      SID_FO_PD_032/SID_FO_PD_101(MOPC) - ModalCouponDown 열기
      <!-- 쿠폰받기 -->
    </button>
    <ModalNotifyRegister v-model="state.isShow_8" />
    <button type="button" @click="() => (state.isShow_8 = true)">
      SID_FO_PD_038(MOPC) - ModalNotifyRegister 열기
      <!-- 재입고 알림 등록 -->
    </button>
    <ModalNotifyRegister2 v-model="state.isShow_9" />
    <button type="button" @click="() => (state.isShow_9 = true)">
      SID_FO_PD_031(MOPC) - ModalNotifyRegister2 열기
      <!-- 방송 알림 등록 -->
    </button>

    <ModalReport v-model="state.isShow_10" />
    <button type="button" @click="() => (state.isShow_10 = true)">
      SID_FO_PD_048(MOPC) - ModalReport 열기
      <!-- 신고하기 -->
    </button>
    <modalInquiryWrite v-model="state.isShow_11" />
    <button type="button" @click="() => (state.isShow_11 = true)">
      SID_FO_PD_049(MOPC) - modalInquiryWrite 열기
      <!-- 상품 문의하기 -->
    </button>

    <ModalDetailGift v-model="state.isShow_12" />
    <button type="button" @click="() => (state.isShow_12 = true)">
      SID_FO_PD_052(MOPC) - ModalDetailGift 열기
      <!-- 사은품 전체보기 -->
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LayerGoods'
}
</script>
<script lang="ts" setup>
import ModalDetailView from '&/pages/goods/components/layer/modal-detail-view.vue'
import ModalShare from '&/pages/goods/components/layer/modal-share.vue'
import ModalHeadCopyBanner from '&/pages/goods/components/layer/modal-head-copy-banner.vue'
import ModalDetailCart from '&/pages/goods/components/layer/modal-detail-cart.vue'
import ModalDawnDelivery from '&/pages/goods/components/layer/modal-dawn-delivery.vue'
import ModalExchangeReturn from '&/pages/goods/components/layer/modal-exchange-return.vue'
import ModalCouponDown from '&/pages/goods/components/layer/modal-coupon-down.vue'
import ModalNotifyRegister from '&/components/layer/modal-notify-register.vue'
import ModalNotifyRegister2 from '&/components/layer/modal-notify-register2.vue'
import ModalReport from '&/pages/goods/components/layer/modal-report.vue'
import modalInquiryWrite from '&/pages/goods/components/layer/modal-inquiry-write.vue'
import ModalDetailGift from '&/pages/goods/components/layer/modal-detail-gift.vue'

const title = '상품 Layer'
const state = reactive({
  isShow_1: false,
  isShow_2: false,
  isShow_3: false,
  isShow_4: false,
  isShow_5: false,
  isShow_6: false,
  isShow_7: false,
  isShow_8: false,
  isShow_9: false,
  isShow_10: false,
  isShow_11: false,
  isShow_12: false
})
</script>
