<template>
  <Layer
    v-if="!isDesktop"
    v-model="state.isShow"
    :use-close-bt="false"
    layer-type="bottom"
    class="ad-push-popup"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>
      <p claa="ad-title">앱 전용 알림서비스 안내</p>
      <p class="sub-title">알림 설정하고 NSmall만의 다양한 소식을 받아보세요.</p>
    </template>
    <template #contents>
      <div class="img-wrap">
        <img src="/images/data/@data-ad-push.png" alt="특가상품+앱 전용 혜택+다양한 이벤트" />
      </div>
      <div class="btn-wrap">
        <button class="receive-btn" type="button" @click="_callbackClose">알림 받기</button>
        <button class="no-receive-btn" type="button" @click="_callbackClose">나중에 하기</button>
      </div>
    </template>
  </Layer>
</template>

<script setup lang="ts">
import { Layer } from '@/components/layer'
import { getOSByUserAgent } from '@/utils/device'
export interface Props {
  modelValue: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const state = reactive({
  isShow: props.modelValue
})

const isDesktop = getOSByUserAgent() === 'desktop'

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
@use '~/components/scss/layer/modal-app-adpush';
</style>
