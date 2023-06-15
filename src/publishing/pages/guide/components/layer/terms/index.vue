<template>
  <div>
    <br />
    <hr style="display: block" />
    <h4>{{ title }}</h4>

    <ModalMarketingTerms v-model="state.isShow_1" />
    <button type="button" @click="() => (state.isShow_1 = true)">SID_FO_CU_027(MOPC) - ModalMarketingTerms 열기</button>

    <ModalNsmallTerms v-model="state.isShow_2" />
    <button type="button" @click="() => (state.isShow_2 = true)">SID_FO_CU_003(MOPC) - ModalNsmallTerms 열기</button>

    <ModalPrivacyTerms v-model="state.isShow_3" />
    <button type="button" @click="() => (state.isShow_3 = true)">SID_FO_CU_026(MOPC) - ModalPrivacyTerms 열기</button>

    <br />
    <p><b>통신사 분기 레이어</b></p>
    <div class="carrier-radio-wrap">
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
    </div>
    <ModalPersonalInfoTerms v-model="state.isShow_4" :cellPhone="state.cellPhone" />
    <button type="button" @click="() => (state.isShow_4 = true)">
      SID_FO_CU_021(MOPC) - ModalPersonalInfoTerms 열기
    </button>
    <ModalIdentificationInfoTerms v-model="state.isShow_5" :cellPhone="state.cellPhone" />
    <button type="button" @click="() => (state.isShow_5 = true)">
      SID_FO_CU_022(MOPC) - ModalIdentificationInfoTerms 열기
    </button>
    <ModalServiceTerms v-model="state.isShow_6" :cellPhone="state.cellPhone" />
    <button type="button" @click="() => (state.isShow_6 = true)">SID_FO_CU_023(MOPC) - ModalServiceTerms 열기</button>
    <ModalTelecommunicationTerms v-model="state.isShow_7" :cellPhone="state.cellPhone" />
    <button type="button" @click="() => (state.isShow_7 = true)">
      SID_FO_CU_024(MOPC) - ModalTelecommunicationTerms 열기
    </button>
    <ModalThirdPartiesInfoTerms v-model="state.isShow_8" :cellPhone="state.cellPhone" />
    <button type="button" @click="() => (state.isShow_8 = true)">
      SID_FO_CU_025(MOPC) - ModalThirdPartiesInfoTerms 열기
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LayerTerms'
}
</script>
<script lang="ts" setup>
import ModalMarketingTerms from '&/components/layer/modal-marketing-terms.vue'
import ModalNsmallTerms from '&/components/layer/modal-nsmall-terms.vue'
import ModalPrivacyTerms from '&/components/layer/modal-privacy-terms.vue'
import ModalPersonalInfoTerms from '&/components/layer/modal-personal-info-terms.vue'
import ModalIdentificationInfoTerms from '&/components/layer/modal-identification-info-terms.vue'
import ModalServiceTerms from '&/components/layer/modal-service-terms.vue'
import ModalTelecommunicationTerms from '&/components/layer/modal-telecommunication-terms.vue'
import ModalThirdPartiesInfoTerms from '&/components/layer/modal-third-parties-info-terms.vue'

const title = '약관 Layer'
const state = reactive({
  cellPhone: 'KTF',
  isShow_1: false,
  isShow_2: false,
  isShow_3: false,
  isShow_4: false,
  isShow_5: false,
  isShow_6: false,
  isShow_7: false,
  isShow_8: false
})
</script>
