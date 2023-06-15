<template>
  <Layer
    class="modal-head-copy-wrap"
    v-model="state.isShow"
    layer-type="full"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>전체보기</template>
    <template #contents>
      <div class="head-copy-wrap">
        <ul>
          <li>
            <a href="#"><img src="/images/data/goods/@banner-sample-01.jpg" alt="배너 이미지" /></a>
          </li>
          <li>
            <a href="#"><img src="/images/data/goods/@banner-sample-02.jpg" alt="배너 이미지" /></a>
          </li>
          <li>
            <a href="#"><img src="/images/data/goods/@banner-sample-03.jpg" alt="배너 이미지" /></a>
          </li>
          <li>
            <a href="#"><img src="/images/data/goods/@banner-sample-04.jpg" alt="배너 이미지" /></a>
          </li>
          <li>
            <a href="#"><img src="/images/data/goods/@banner-sample-05.jpg" alt="배너 이미지" /></a>
          </li>
          <li>
            <a href="#"><img src="/images/data/goods/@banner-sample-01.jpg" alt="배너 이미지" /></a>
          </li>
          <li>
            <a href="#"><img src="/images/data/goods/@banner-sample-02.jpg" alt="배너 이미지" /></a>
          </li>
          <li>
            <a href="#"><img src="/images/data/goods/@banner-sample-03.jpg" alt="배너 이미지" /></a>
          </li>
          <li>
            <a href="#"><img src="/images/data/goods/@banner-sample-04.jpg" alt="배너 이미지" /></a>
          </li>
          <li>
            <a href="#"><img src="/images/data/goods/@banner-sample-05.jpg" alt="배너 이미지" /></a>
          </li>
        </ul>
      </div>
    </template>
  </Layer>
</template>

<script lang="ts" setup>
import { Layer } from '@/components/layer'
export interface Props {
  modelValue: boolean
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

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;

.layer-wrap {
  &.modal-head-copy-wrap {
    .layer-contents {
      .head-copy-wrap {
        margin: rem(-16);
      }
    }
  }
}
</style>
