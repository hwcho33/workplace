<template>
  <Layer
    v-model="state.isShow"
    layer-type="full"
    class="layer-footer-img-wrap"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header><slot name="title"></slot></template>
    <template #contents>
      <slot name="certificate"></slot>
    </template>
  </Layer>
</template>

<script setup lang="ts">
import { Layer } from '@/components/layer'
export interface Props {
  modelValue?: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const state = reactive({
  isShow: props.modelValue
})

const emit = defineEmits<{
  (event: 'update:modelValue', result: boolean): void
}>()

watch(
  () => props.modelValue,
  newItems => {
    if (newItems) {
      state.isShow = true
    } else {
      state.isShow = false
    }
  },
  { immediate: true }
)

const _callbackClose = () => {
  emit('update:modelValue', false)
  console.log('레이어 닫기 콜백')
}
const _callbackOpen = () => {
  console.log('레이어 열기 콜백')
}
</script>

<style lang="scss">
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;
.layer-wrap {
  &.layer-footer-img-wrap {
    .layer-contents {
      text-align: center;
    }
    #desktop & {
      .layer-close-bt {
        top: rem(2);
      }
      .layer-header {
        height: auto;
        min-height: rem(64);
        padding: rem(20) rem(40);
      }
      .layer-container {
        max-width: rem(780);
        .layer-contents {
          padding-bottom: rem(36);
          &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: rem(36);
            background: var(--white);
          }
        }
      }
    }
  }
}
</style>
