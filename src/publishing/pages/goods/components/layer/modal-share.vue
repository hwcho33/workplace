<template>
  <Layer class="modal-share-wrap" v-model="state.isShow" @onClose="_callbackClose" @onOpen="_callbackOpen">
    <template #header>공유하기</template>
    <template #contents>
      <div class="share-list">
        <a class="share-icon share-kakao" href="#" v-if="!$route.query.pc">
          <span class="text">카카오</span>
        </a>
        <a class="share-icon share-facebook" href="#">
          <span class="text">페이스북</span>
        </a>
        <a class="share-icon share-text" href="#" v-if="!$route.query.pc">
          <span class="text">문자메세지</span>
        </a>
        <button
          class="share-icon share-url"
          type="button"
          @click="toastHandler('URL복사가 완료되었습니다.', 2000, 'bottom')"
        >
          <span class="text">URL복사</span>
        </button>
      </div>
      <div class="other-app" v-if="$route.query.app && !$route.query.mo">
        <button class="other-app-btn" type="button">다른앱 선택하기</button>
      </div>
    </template>
  </Layer>
</template>

<script lang="ts" setup>
import { Layer } from '@/components/layer'
import Toast from '@/components/toast'
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

const toastHandler = (content: string, delay: number, position: string) => {
  Toast({ content, delay, position })
}
</script>

<style lang="scss">
@use '~/pages/goods/scss/layer/modal-share';
</style>
