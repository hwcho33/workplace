<template>
  <div class="identify-wrap">
    <!-- is-complete, is-error -->
    <div
      class="join-input-wrap identify"
      :class="{ 'is-complete': isCompleteWrapFirst, 'is-error': isErrorWrap, 'is-active': isActiveWrap }"
    >
      <!-- 주민번호 > 앞자리 -->
      <div class="input-text-wrap">
        <input
          ref="inputRefFirst"
          type="tel"
          :placeholder="$t('label.customer.0064', '주민등록번호 앞 6자리')"
          :title="$t('label.customer.0065', '주민등록번호 앞 6자리 입력')"
          :id="schemaKeyFirst"
          :name="schemaKeyFirst"
          :value="inputValueFirst"
          @input="onInputFirst($event)"
          @blur="onBlurFirst($event)"
          @focus="onFocus"
        />
        <div class="btns-wrap">
          <button type="button" class="del-btn" v-show="isShowDeleteButtonFirst" @click="onClickDelete">
            {{ $t('label.customer.0062', '삭제') }}
          </button>
        </div>
      </div>

      <span class="util">-</span>

      <!-- 주민번호 > 뒷자리 -->
      <div class="input-text-wrap">
        <input
          ref="inputRefLast"
          type="tel"
          placeholder="1"
          :title="$t('label.customer.0065', '주민등록번호 뒤 1자리 입력')"
          maxlength="1"
          :id="schemaKeyLast"
          :name="schemaKeyLast"
          :value="inputValueLast"
          @input="onInputLast($event)"
          @blur="onBlurLast($event)"
          @focus="onFocus"
        />
        <span class="identity-num-after">
          <code class="blind">23456</code><i></i><i></i><i></i><i></i><i></i><i></i>
        </span>
      </div>
    </div>

    <p class="info-msg is-error" v-show="isErrorWrap">{{ inputErrorMessage[0] }}</p>
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'

interface Props {
  schemaKeyFirst: string
  schemaKeyLast: string
}

interface Emit {}
// --------------------------------------------------------------------- [변수 및 상수]
const props = withDefaults(defineProps<Props>(), {})

// --------------------------------------- [1. 주민번호 앞자리]
const schemaKeyFirstProp = toRef(props, 'schemaKeyFirst')

const {
  value: inputValueFirst,
  errorMessage: errorMessageFirst,
  handleBlur: handleBlurFirst,
  handleChange: handleChangeFirst,
  handleReset: handleResetFirst,
  meta: metaFirst,
  validate: validateFirst
} = useField(schemaKeyFirstProp, undefined, {
  initialValue: ''
})

const inputRefFirst = ref<HTMLElement | null>(null)
// --------------------------------------- [2. 주민번호 뒷자리]
const schemaKeyLastProp = toRef(props, 'schemaKeyLast')

const {
  value: inputValueLast,
  errorMessage: errorMessageLast,
  handleBlur: handleBlurLast,
  handleChange: handleChangeLast,
  handleReset: handleResetLast,
  meta: metaLast,
  validate: validateLast
} = useField(schemaKeyLastProp, undefined, {
  initialValue: ''
})
const inputRefLast = ref<HTMLElement | null>(null)

// 활성화
const isActiveWrap = ref(false)
const inputErrorMessage: Ref<string[]> = ref([])
// --------------------------------------------------------------------- [Vue 내장 메서드]
const isShowDeleteButtonFirst = computed<boolean>(() => {
  return (inputValueFirst.value as string).length > 0
})

// 성공: 주민번호 앞자리
const isCompleteWrapFirst = computed<boolean>(() => {
  return Boolean(metaFirst.validated) && Boolean(metaFirst.valid)
})

// 실패: 주민번호 앞자리
const isErrorWrapFirst = computed<boolean>(() => {
  return Boolean(errorMessageFirst.value)
})

// 성공: 주민번호 뒷자리
// const isCompleteWrapLast = computed<boolean>(() => {
//   return Boolean(metaLast.validated) && Boolean(metaLast.valid)
// })

// 실패: 주민번호 뒷자리
const isErrorWrapLast = computed<boolean>(() => {
  return Boolean(errorMessageLast.value)
})

// 성공: 복합
// const isCompleteWrap = computed<boolean>(() => {
//   return Boolean(isCompleteWrapFirst.value) && Boolean(isCompleteWrapLast.value)
// })

// 실패: 복합
const isErrorWrap = computed(() => {
  return isErrorWrapFirst.value || isErrorWrapLast.value
})

// const emit = defineEmits<Emit>()

watchEffect(() => {
  // 초기화
  inputErrorMessage.value = []

  // 실행
  if (isErrorWrapFirst.value) {
    inputErrorMessage.value.push(errorMessageFirst.value as string)
  }
  if (isErrorWrapLast.value) {
    inputErrorMessage.value.push(errorMessageLast.value as string)
  }
})
// --------------------------------------------------------------------- [생명 주기 함수]
// --------------------------------------------------------------------- [내부 함수 (functions)]

// --------------------------------------- [1. 주민번호 앞자리]
function onInputFirst(event: Event) {
  const targetValue = event.target as HTMLInputElement
  targetValue.value = targetValue.value.replace(/[^0-9]/g, '').slice(0, 6)
  handleChangeFirst(targetValue.value)
  validateFirst()
}

function onBlurFirst(event: Event) {
  isActiveWrap.value = false
  handleBlurFirst(event)
}

// --------------------------------------- [2. 주민번호 뒷자리]
function onInputLast(event: Event) {
  const targetValue = event.target as HTMLInputElement
  targetValue.value = targetValue.value.replace(/[^0-9]/, '')
  handleChangeLast(targetValue.value)
  validateLast()
}

function onBlurLast(event: Event) {
  isActiveWrap.value = false
  handleBlurLast(event)
}

function onFocus() {
  isActiveWrap.value = true
}

function onClickDelete() {
  handleResetFirst()
}
</script>

<style scoped></style>
