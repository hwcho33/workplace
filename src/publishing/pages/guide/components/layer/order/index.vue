<template>
  <div>
    <br />
    <hr style="display: block" />
    <h4>{{ title }}</h4>

    <ModalCartOption v-model="state.isShow_1" />
    <button type="button" @click="() => (state.isShow_1 = true)">
      SID_FO_OD_039, SID_FO_OD_041(MOPC) - ModalCartOption 열기
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LayerOrder'
}
</script>
<script lang="ts" setup>
import ModalCartOption from '&/pages/order/components/layer/modal-cart-option.vue'

const title = '장바구니 Layer'
const state = reactive({
  isShow_1: false
})
</script>
