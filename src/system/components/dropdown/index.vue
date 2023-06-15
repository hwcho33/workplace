<template>
  <div
    class="dropdown-wrap"
    :class="{
      'is-active': isShow,
      'is-error': isError,
      'is-disabled': isDisabled,
      'is-flat': isFlat,
      'is-selected': localValue,
      'is-slot': hasSlot('contents'),
      'is-small': isSmallSize
    }"
  >
    <input type="hidden" v-model="localValue" :name="name" :disabled="isDisabled" />
    <div class="dropdown-result" :class="{ 'is-default': setDefault }">
      <button type="button" @click="_onChangeShow">{{ setResultText }}</button>
    </div>
    <transition
      name="dropdown"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      :duration="{ enter: 800, leave: 200 }"
    >
      <ul class="dropdown-list" v-if="isShow">
        <slot
          v-if="hasSlot('contents')"
          name="contents"
          :items="items"
          :changeValue="_onChangeValue"
          :setActive="setActive"
        ></slot>
        <li v-else v-for="item in items" :key="item.value" :class="{ 'is-selected': setActive(item.value) }">
          <button type="button" @click="() => _onChangeValue(item.value)">{{ item.title }}</button>
        </li>
      </ul>
    </transition>
    <p v-if="guidetMsg" class="dropdown-msg" :class="{ 'is-error': isError }">{{ guidetMsg }}</p>
  </div>
</template>
<script lang="ts">
export default {
  name: 'DropDown'
}
</script>
<script lang="ts" setup>
import { useDropdown } from '@/composables/ui/use-transition-hook'
import { find } from 'lodash-es'

export interface Items {
  title?: string
  value: string
}
export interface Props {
  name: string
  isFlat?: boolean
  isTitle?: boolean
  isError?: boolean
  isDisabled?: boolean
  guidetMsg?: string
  defaultMsg?: string
  size?: 'small' | 'normal'
  modelValue: string
  items: (Items & { [key: string]: any })[]
}

const props = withDefaults(defineProps<Props>(), {
  defaultMsg: '--Please choose an option--',
  size: 'normal',
  isFlat: false,
  isTitle: false
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
  (event: 'onChange', value: string): void
}>()

const isShow = ref(false)
const localValue = ref(props.modelValue)
const setResultText = computed(() => {
  if (props.isTitle) {
    const current = find(props.items, (item: Items) => item.value === props.modelValue)
    return props.modelValue ? current?.title : props.defaultMsg
  } else {
    return props.modelValue ? props.modelValue : props.defaultMsg
  }
})
const setDefault = props.modelValue === ''
const isSmallSize = props.size === 'small'
const setActive = (value: string) => value === localValue.value
const slots = useSlots()
const { onBeforeEnter, onEnter, onBeforeLeave, onLeave } = useDropdown()

const hasSlot = (name: 'contents') => {
  return !!slots[name]
}
const onCloseOutside = (e: Event) => {
  const target = e.target as HTMLDivElement
  const dropDown = target.closest('.dropdown-wrap')
  if (!dropDown) isShow.value = false
}
const _onChangeValue = (value: string) => {
  emit('update:modelValue', value)
  emit('onChange', value)
  localValue.value = value
  isShow.value = false
}
const _onChangeShow = () => {
  isShow.value = !isShow.value
}

onMounted(() => {
  document.addEventListener('click', onCloseOutside)
})
onUnmounted(() => {
  document.removeEventListener('click', onCloseOutside)
})
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
