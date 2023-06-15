<template>
  <Layer
    v-if="!isDesktop"
    v-model="state.isShow"
    :use-close-bt="false"
    layer-type="center"
    class="appview-modal"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #contents>
      <div class="modal-wrap">
        <div class="bnnr-wrap" v-if="!$route.query.appview">
          <img src="/images/data/@data-appview.png" class="img" alt="배너 이미지" />
          <dl class="bnnr-name">
            <dt style="color: #4c3984">TV 상품 상시 혜택</dt>
            <dd style="color: #585858">7%쿠폰 + 7%적립+ 7%추가적립 최대 두줄 까지 적용</dd>
          </dl>
        </div>
        <div class="bnnr-wrap" v-else>
          <img src="/images/data/@data-appview-full.png" class="img-full" alt="배너 이미지" />
        </div>
        <div class="btn-wrap">
          <button type="button" class="app-btn">앱으로 보기</button>
        </div>
      </div>
      <button type="button" class="close-btn" @click="_callbackClose">모바일 웹에서 쇼핑하기</button>
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
@use '~/components/scss/layer/modal-view-as-app.scss';
</style>
