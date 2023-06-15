<template>
  <div class="carrier-radio-wrap">
    <label v-for="(mobileCarrierInfoItem, mobileCarrierInfoIndex) in mobileCarrierInfo" :key="mobileCarrierInfoIndex">
      <input type="radio" name="radio" :value="mobileCarrierInfoItem.code" @change="onChange" />
      <span>{{ mobileCarrierInfoItem.name }}</span>
    </label>

    <!-- is-error(red), is-warning(blue) -->
    <p class="info-msg is-error" v-show="isShowErrorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'
import { SHARE_PAGE_STATE_KEY } from '../mobile-identity-verification/constants/provide-key'
import { MOBILE_CARRIER_TYPE } from '../mobile-identity-verification/constants'

interface Props {
  schemaKey: string
}

// interface Emit {
//   (e: 'update:selectedMobileCarrier', value: MobileCarrierType): void
// }

// --------------------------------------------------------------------- [변수 및 상수]
const props = withDefaults(defineProps<Props>(), {})

// 통신사 화면 목록
const mobileCarrierInfo = reactive([
  {
    name: $t('label.customer.0067', 'SKT'),
    code: MOBILE_CARRIER_TYPE.SKT
  },
  {
    name: $t('label.customer.0068', 'KT'),
    code: MOBILE_CARRIER_TYPE.KTF
  },
  {
    name: $t('label.customer.0069', 'LGU+'),
    code: MOBILE_CARRIER_TYPE.LGT
  },
  {
    name: $t('label.customer.0070', 'SKT 알뜰폰'),
    code: MOBILE_CARRIER_TYPE.SKM
  },
  {
    name: $t('label.customer.0071', 'KT 알뜰폰'),
    code: MOBILE_CARRIER_TYPE.KTM
  },
  {
    name: $t('label.customer.0072', 'LGU+ 알뜰폰'),
    code: MOBILE_CARRIER_TYPE.LGM
  }
])

// vee-validate 필드 연결
const schemaKeyProp = toRef(props, 'schemaKey')
const {
  // value: inputValue,
  errorMessage,
  handleChange,
  handleReset,
  meta,
  validate
} = useField(schemaKeyProp, undefined, {
  initialValue: ''
})

const sharePageState: any = inject(SHARE_PAGE_STATE_KEY)
// --------------------------------------------------------------------- [Vue 내장 메서드]
// 에러메시지 유무
const isShowErrorMessage = computed<boolean>(() => {
  return Boolean(meta.validated) && Boolean(meta.valid) === false
})

// const emit = defineEmits<Emit>()
// --------------------------------------------------------------------- [생명 주기 함수]
// --------------------------------------------------------------------- [내부 함수 (functions)]
function onChange(event: Event) {
  const targetValue = event.target as HTMLInputElement
  handleChange(targetValue.value)
  sharePageState.selectedMobileCarrier.value = targetValue.value
}
</script>

<style scoped></style>
