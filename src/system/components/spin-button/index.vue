<template>
  <div class="spin-button-wrap" :class="{ 'is-disabled': isDisabled, 'is-loading': isShowSpinLoading }">
    <button type="button" class="minus-btn" @click="_onDecreaseValue" :disabled="isDisabledMinus || isDisabled">
      -
    </button>
    <label>
      <input
        type="tel"
        :value="localValue"
        @input="_onInput"
        @blur="_onChangeValue"
        :name="name"
        :placeholder="defaultMsg"
      />
    </label>
    <button type="button" class="plus-btn" @click="_onIncreaseValue" :disabled="isDisabledPlus || isDisabled">+</button>
    <span ref="spinLoadingWrap" class="spin-loading-wrap" v-if="isShowSpinLoading">
      <div class="loading">
        <span class="circle">로딩중</span><span class="circle"></span><span class="circle"></span>
      </div>
    </span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'SpinButton'
}
</script>
<script lang="ts" setup>
import { delay } from '@/utils/underscore'

export interface Props {
  name: string
  modelValue: string
  defaultMsg?: string
  isDisabled?: boolean
  min?: string
  max?: string
  step?: string
  useSpinLoading?: number
}

const props = withDefaults(defineProps<Props>(), {
  defaultMsg: '--',
  min: '1',
  max: '99',
  step: '1',
  useSpinLoading: 600
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
  (event: 'onChange', value: string): void
}>()

const isShowSpinLoading = ref(false)
const localValue = ref(props.modelValue)
const isDisabledMinus = computed(() => Number(props.modelValue) <= Number(props.min))
const isDisabledPlus = computed(() => Number(props.modelValue) >= Number(props.max))

const checkValue = (calc: number) => {
  let result = 0
  const min = Number(props.min)
  const max = Number(props.max)

  if (calc < min) {
    result = min
  } else if (calc > max) {
    result = max
  } else {
    result = calc
  }

  return String(result)
}
const showSpinLoading = async () => {
  isShowSpinLoading.value = true
  await delay(props.useSpinLoading)
  isShowSpinLoading.value = false
}
const setValue = (result: string) => {
  emit('update:modelValue', result)
  emit('onChange', result)
  localValue.value = result
}
const _onInput = (e: Event) => {
  const target = e.currentTarget as HTMLInputElement
  const targetRegEx = target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
  target.value = targetRegEx
}
const _onChangeValue = (e: Event) => {
  const target = e.currentTarget as HTMLInputElement
  if (target.value === localValue.value) return
  if (props.useSpinLoading) showSpinLoading()
  const result = checkValue(Number(target.value))
  setValue(result)
}
const _onIncreaseValue = () => {
  if (props.useSpinLoading) showSpinLoading()
  const result = checkValue(Number(localValue.value) + Number(props.step))
  setValue(result)
}
const _onDecreaseValue = () => {
  if (props.useSpinLoading) showSpinLoading()
  const result = checkValue(Number(localValue.value) - Number(props.step))
  setValue(result)
}
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
