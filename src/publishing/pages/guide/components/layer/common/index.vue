<template>
  <div>
    <br />
    <hr style="display: block" />
    <h4>{{ title }}</h4>

    <ModalAppAdpush v-model="state.isShow_1" />
    <button type="button" @click="() => (state.isShow_1 = true)">SID_FO_CM_005(MO) - ModalAppAdpush 열기</button>

    <PcModalAppDown v-model="state.isShow_2" />
    <button type="button" @click="() => (state.isShow_2 = true)">SID_FO_CM_010(PC) - PcModalAppDown 열기</button>

    <ModalViewAsApp v-model="state.isShow_3" />
    <button type="button" @click="() => (state.isShow_3 = true)">SID_FO_CM_006(MO) - ModalViewAsApp 열기</button>
    <p>- 타입 2종: 이미지만 등록되는 경우 URL에 ?appview=image 추가 후 버튼 클릭</p>

    <br />
    <p><b>주소찾기 레이어</b></p>
    <ModalAddrssFind v-model="state.isShow_4" />
    <button type="button" @click="() => (state.isShow_4 = true)">SID_FO_CM_016(MOPC) - ModalAddrssFind 열기</button>
    <p>
      - 타입 4종: <br />
      SID_FO_CM_060(MOPC) : 주소찾기 검색결과 => URL에 ?search=true 추가 후 버튼 클릭<br />
      SID_FO_CM_061(MOPC) : 주소찾기 검색결과없음 => URL에 ?search=true&empty=true 추가 후 버튼 클릭<br />
      SID_FO_CM_062(MOPC) : 주소찾기 나머지주소 => URL에 ?detail=true 추가 후 버튼 클릭
    </p>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LayerCommon'
}
</script>
<script lang="ts" setup>
import ModalAppAdpush from '&/components/layer/modal-app-adpush.vue'
import ModalViewAsApp from '&/components/layer/modal-view-as-app.vue'
import PcModalAppDown from '&/components/layer/p.modal-app-down.vue'
import ModalAddrssFind from '&/components/layer/modal-address-find.vue'

const title = '공통 Layer'
const state = reactive({
  isShow_1: false,
  isShow_2: false,
  isShow_3: false,
  isShow_4: false
})
</script>
