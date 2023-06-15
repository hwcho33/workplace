<template>
  <teleport to="body">
    <transition
      :name="`${layerType}-layer`"
      :duration="{ enter: 800, leave: 800 }"
      @before-leave="onBeforeLeave"
      @after-leave="onAfterLeave"
    >
      <div
        role="dialog"
        class="layer-wrap"
        :class="[layerType, setFixedBottom]"
        v-bind="$attrs"
        ref="dialog"
        v-if="isShow"
      >
        <div class="layer-container">
          <button class="layer-close-bt" type="button" @click="_onClose" v-if="useCloseBt">full layer 닫기</button>
          <div class="layer-header" v-if="hasSlot('header')">
            <slot name="header"></slot>
          </div>

          <div class="layer-scroll">
            <div class="layer-contents" v-if="hasSlot('contents')">
              <slot name="contents"></slot>
            </div>

            <div class="layer-bottom" v-if="hasSlot('bottom')">
              <div class="bottom-inner">
                <slot name="bottom"></slot>
              </div>
            </div>
          </div>
        </div>
        <div
          class="layer-overlay"
          @click="
            () => {
              isCloseOutside && _onClose()
            }
          "
        ></div>
      </div>
    </transition>
  </teleport>
</template>
<script lang="ts">
export default {
  name: 'Layer',
  inheritAttrs: false
}
</script>
<script lang="ts" setup>
import { useModal } from '@/composables/ui/use-modal'

export interface Props {
  modelValue: boolean
  useCloseBt?: boolean
  isCloseOutside?: boolean
  layerType?: 'center' | 'full' | 'bottom'
}

const props = withDefaults(defineProps<Props>(), {
  useCloseBt: true,
  isCloseOutside: false,
  layerType: 'center'
})

const emit = defineEmits<{
  (event: 'update:modelValue', result: boolean): void
  (event: 'onOpen'): void
  (event: 'onClose'): void
}>()

let closeFlag = true
const dialog = ref<HTMLDialogElement | null>(null)
const isShow = computed(() => props.modelValue)
const slots = useSlots()
const { blockScroll, unblockScroll } = useModal(dialog)
const setFixedBottom = computed(() => {
  const test = hasSlot('bottom') && props.layerType !== 'center'
  return test ? 'fixed-bottom' : ''
})

const hasSlot = (name: 'header' | 'contents' | 'bottom') => {
  return !!slots[name]
}
const _onClose = () => {
  if (!closeFlag) return
  emit('update:modelValue', false)
  emit('onClose')
}
const onBeforeLeave = () => {
  closeFlag = false
}
const onAfterLeave = () => {
  closeFlag = true
}

watch(
  () => props.modelValue,
  async (newItems, oldItems) => {
    if (!oldItems && !newItems) return
    if (newItems) {
      emit('onOpen')
      await nextTick()
      blockScroll()
    } else {
      await nextTick()
      unblockScroll()
    }
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
