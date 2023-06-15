<template>
  <Layer
    v-model="state.isShow"
    layer-type="full"
    class="layer-terms-wrap"
    @on-close="_callbackClose"
    @on-open="_callbackOpen"
  >
    <template #header>{{ agreementItemInfo?.termsTitle }}</template>
    <template #contents>
      <!-- skt 개인정보이용동의 약관 -->
      <div class="area-terms" v-html="agreementItemInfo?.termsCtnt"></div>
    </template>
  </Layer>
</template>

<script setup lang="ts">
import { Layer } from '@/components/layer'
// export interface Props {}
// const props = withDefaults(defineProps<Props>(), {})

type AgreementItem = {
  isRequired?: boolean | undefined
  isCheap?: boolean | undefined
  title?: string | undefined
  groupCode?: string | undefined
  code?: string | undefined
  termsCtnt?: Object | undefined
  termsTitle?: Object | undefined
  termsApplyStartDd?: Object | undefined
}
type AgreementItemNullable = Ref<AgreementItem>
let agreementItemInfo: AgreementItemNullable = ref({
  isRequired: undefined,
  isCheap: undefined,
  title: undefined,
  code: undefined,
  termsCtnt: undefined,
  termsTitle: undefined,
  termsApplyStartDd: undefined
})

const state = reactive({
  isShow: false,
  agreementItem: null
})

const _callbackClose = () => {
  console.log('레이어 닫기 콜백')
  agreementItemInfo.value = {
    isRequired: undefined,
    isCheap: undefined,
    title: undefined,
    code: undefined,
    termsCtnt: undefined,
    termsTitle: undefined,
    termsApplyStartDd: undefined
  }
}
const _callbackOpen = () => {
  console.log('레이어 열기 콜백')
}

defineExpose({
  openModalDetailInfo
})

function openModalDetailInfo(agreementItem: AgreementItem, type: string) {
  console.log('[팝업 오픈]', type)
  agreementItemInfo.value.isRequired = agreementItem.isRequired
  agreementItemInfo.value.isCheap = agreementItem.isCheap
  agreementItemInfo.value.title = agreementItem.title
  agreementItemInfo.value.code = agreementItem.code
  agreementItemInfo.value.termsCtnt = agreementItem.termsCtnt
  agreementItemInfo.value.termsTitle = agreementItem.termsTitle
  agreementItemInfo.value.termsApplyStartDd = agreementItem.termsApplyStartDd
  state.isShow = true
}
</script>

<style lang="scss">
@use '~/pages/common/terms/scss/terms';
</style>
