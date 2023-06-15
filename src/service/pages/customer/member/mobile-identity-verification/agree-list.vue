<template>
  <!-- 동의 -->
  <div class="join-agree-wrap">
    <!--전체동의-->
    <div class="agree">
      <input id="allCheck" name="all-check" type="checkbox" v-model="allSelected" />
      <label for="allCheck">{{ $t('label.customer.0073', '휴대폰 인증 전체동의') }}</label>
    </div>

    <!-- 개별동의 -->
    <div class="agree">
      <ul class="agree-list-wrap">
        <template v-for="(agreeInfoItem, agreeInfoIndex) in agreeInfoComputed" :key="agreeInfoIndex">
          <li>
            <div class="agree-list">
              <input
                :id="`check-${agreeInfoIndex}`"
                name="checkbox"
                type="checkbox"
                v-model="selectList"
                :value="agreeInfoItem.code"
              />
              <label :for="`check-${agreeInfoIndex}`">{{ agreeInfoItem.title }}</label>
              <a href="#" @click.prevent="onClickModalOpen(agreeInfoItem)"
                >{{ $t('label.customer.0023', '약관보기') }}
              </a>
            </div>
          </li>
        </template>
      </ul>
    </div>

    <p class="info-msg is-error" v-show="isShowErrorMessage">{{ errorMessage }}</p>
  </div>

  <!-- 레이어 팝업 -->
  <ModalAgreeDetailInfo ref="modalAgreeDetailInfoRef" />
</template>

<script setup lang="ts">
import { uniq } from 'lodash-es'
import { useField } from 'vee-validate'
import { SHARE_PAGE_STATE_KEY } from '../mobile-identity-verification/constants/provide-key'
import { MOBILE_CARRIER_CHEAP_TYPE, AGREE_TYPE } from '../mobile-identity-verification/constants'
import { getSelfCertTerm } from '~/api/customer'
import ModalAgreeDetailInfo from './modal/modal-agree-detail-info.vue'

type AgreeInfo = AgreeInfoItem[]
type AgreeInfoItem = {
  isRequired?: boolean | undefined
  isCheap?: boolean | undefined
  title?: string | undefined
  groupCode?: string | undefined
  code?: string | undefined
  termsCtnt?: Object | undefined
  termsTitle?: Object | undefined
  termsApplyStartDd?: Object | undefined
}
interface Props {
  schemaKey: string
}

// interface Emit {
//   (e: 'submit', value: any): void
// }

// --------------------------------------------------------------------- [변수 및 상수]
const props = withDefaults(defineProps<Props>(), {})
const schemaKeyProp = toRef(props, 'schemaKey')

// 동의
const agreeInfo = ref<AgreeInfo>([
  {
    isRequired: true,
    isCheap: false,
    title: '[필수] 개인정보이용동의',
    code: AGREE_TYPE.PERSONAL,
    termsCtnt: undefined,
    termsTitle: undefined,
    termsApplyStartDd: undefined
  },
  {
    isRequired: true,
    isCheap: false,
    title: '[필수] 고유식별정보처리동의',
    code: AGREE_TYPE.DISCERN,
    termsCtnt: undefined,
    termsTitle: undefined,
    termsApplyStartDd: undefined
  },
  {
    isRequired: true,
    isCheap: false,
    title: '[필수] 서비스이용약관동의',
    code: AGREE_TYPE.SERVICE,
    termsCtnt: undefined,
    termsTitle: undefined,
    termsApplyStartDd: undefined
  },
  {
    isRequired: true,
    isCheap: false,
    title: '[필수] 통신사이용약관동의',
    code: AGREE_TYPE.MOBILE_CARRIER,
    termsCtnt: undefined,
    termsTitle: undefined,
    termsApplyStartDd: undefined
  },
  // 알뜰폰 사용자만 보인다.
  {
    isRequired: true,
    isCheap: true,
    title: '[필수] 제3자 정보제공 동의',
    code: AGREE_TYPE.THIRDPARTY,
    termsCtnt: undefined,
    termsTitle: undefined,
    termsApplyStartDd: undefined
  }
])

const { errorMessage, handleChange, meta, validate } = useField(schemaKeyProp, undefined, {
  initialValue: false
})

// 개별선택
const selectList = ref<(string | undefined)[]>([])

// 레이어 팝업
const modalAgreeDetailInfoRef = ref<typeof ModalAgreeDetailInfo | null>(null)

// --------------------------------------------------------------------- [Vue 내장 메서드]
const sharePageState: any = inject(SHARE_PAGE_STATE_KEY)

// 통신사(알뜬폰) 선택에 따른 동의 리스트
const agreeInfoComputed = computed<AgreeInfo>(() => {
  if (isCheapPhone.value) {
    return agreeInfo.value
  } else {
    return agreeInfo.value.filter(item => item.isCheap === false)
  }
})

// 필수적으로 체크할 리스트
const requiredCheckList = computed<string[]>(() => {
  return <string[]>agreeInfoComputed.value.filter(item => item.isRequired === true).map(item => item.code)
})

// 선택한 통신사
const selectedMobileCarrierType = computed(() => {
  return sharePageState.selectedMobileCarrier.value
})

// 알뜰폰 선택 유무
const isCheapPhone = computed(() => {
  return [MOBILE_CARRIER_CHEAP_TYPE.SKM, MOBILE_CARRIER_CHEAP_TYPE.KTM, MOBILE_CARRIER_CHEAP_TYPE.LGM].includes(
    selectedMobileCarrierType.value
  )
})

// 전체선택
const allSelected = computed<boolean>({
  get() {
    return isValidCheck.value
  },
  set(value) {
    return (selectList.value = value ? allCheckList.value : [])
  }
})

// 모두 체크한 리스트
const allCheckList = computed<string[]>(() => {
  return <string[]>agreeInfoComputed.value.map(item => item.code)
})

// 에러메시지 유무
const isShowErrorMessage = computed<boolean>(() => {
  return Boolean(meta.validated) && Boolean(meta.valid) === false
})

// 필수 항목 모두 체크 유무
const isValidCheck = computed(() => {
  return requiredCheckList.value.every(v => {
    return selectList.value.includes(v)
  })
})

// 동의항목 변경시 유효성 체크
watch(selectList, async () => {
  const isValid = await validMobileCarrier()
  if (isValid === false) return
  handleChange(isValidCheck.value)
  validate()
})

// 통신사 선택에 따른 API 호출
watch(selectedMobileCarrierType, async type => {
  const payload = {
    cmnctEnt: type
  }
  const { data } = await getSelfCertTerm(payload)

  // 데이터 업데이트
  data.resultData?.termsList.forEach((termsItem, tremsIndex) => {
    agreeInfo.value[tremsIndex].termsCtnt = termsItem.termsCtnt
    agreeInfo.value[tremsIndex].termsTitle = termsItem.termsTitle
    agreeInfo.value[tremsIndex].termsApplyStartDd = termsItem.termsApplyStartDd
  })
})

// const emit = defineEmits<Emit>()

defineExpose({
  requiredCheckList: requiredCheckList.value
})
// --------------------------------------------------------------------- [생명 주기 함수]
// --------------------------------------------------------------------- [내부 함수 (functions)]
// 통신사 선택 유효성 체크
async function validMobileCarrier(): Promise<boolean> {
  const isValid = await sharePageState.formRef.value!.validateField('mobileCarrier')
  return isValid.valid
}

// 팝업 오픈
async function onClickModalOpen(agreeInfoItem: AgreeInfoItem): Promise<void> {
  const isValid = await validMobileCarrier()

  if (isValid === false) return

  selectList.value.push(agreeInfoItem.code)
  selectList.value = uniq(selectList.value)

  /**
   * 레이어 팝업 오픈
   */
  modalAgreeDetailInfoRef!.value?.openModalDetailInfo(agreeInfoItem, selectedMobileCarrierType.value)
}
</script>

<style scoped></style>
