<template>
  <!-- 이름: is-complete(체크), is-error(삭제) -->
  <div class="join-input-wrap" :class="{ 'is-complete': isCompleteWrap, 'is-error': isErrorWrap }">
    <div class="input-text-wrap">
      <input
        ref="inputRef"
        :id="schemaKey"
        :name="schemaKey"
        :value="inputValue"
        :type="'text'"
        :placeholder="$t('label.customer.0008', '이름')"
        :title="$t('label.customer.0063', '이름 입력')"
        @input="onInput"
        @blur="onBlur"
      />

      <div class="btns-wrap">
        <button type="button" class="del-btn" v-show="isShowDeleteButton" @click="onClickDelete">
          {{ $t('label.customer.0062', '삭제') }}
        </button>
      </div>
    </div>
    <!-- is-error(red), is-warning(blue) -->
    <p class="info-msg is-error" v-show="isShowErrorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'

interface Props {
  schemaKey: string
}

// interface Emit {}

// --------------------------------------------------------------------- [변수 및 상수]
const props = withDefaults(defineProps<Props>(), {})

const schemaKeyProp = toRef(props, 'schemaKey')

const {
  value: inputValue,
  errorMessage,
  handleChange,
  handleBlur,
  handleReset,
  meta,
  validate
} = useField(schemaKeyProp, undefined, { initialValue: '' })

const inputRef = ref<HTMLElement | null>(null)

// --------------------------------------------------------------------- [Vue 내장 메서드]
const isShowDeleteButton = computed<boolean>(() => {
  return (inputValue.value as string).length > 0
})

// 성공
const isCompleteWrap = computed<boolean>(() => {
  return Boolean(meta.validated) && Boolean(meta.valid)
})

// 실패
const isErrorWrap = computed<boolean>(() => {
  return Boolean(errorMessage.value)
})

// 에러메시지 유무
const isShowErrorMessage = computed<boolean>(() => {
  return Boolean(meta.validated) && Boolean(meta.valid) === false
})

// const emit = defineEmits<Emit>()
// --------------------------------------------------------------------- [생명 주기 함수]
onMounted(() => {
  inputRef.value!.focus()
})
// --------------------------------------------------------------------- [내부 함수 (functions)]
function onInput(event: Event) {
  const targetValue = event.target as HTMLInputElement
  targetValue.value = targetValue.value.replace(/[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z]/g, '') // 공백 제거
  handleChange(targetValue.value)
  validate()
}

function onBlur(event: Event) {
  handleBlur(event)
}

function onReset() {
  handleReset()
}

function onClickDelete() {
  onReset()
}
</script>

<style scoped></style>
