<template>
  <Layer class="modal-share-wrap" v-model="state.isShow" @on-close="_callbackClose" @on-open="_callbackOpen">
    <template #header>공유하기</template>
    <template #contents>
      <div class="share-list">
        <a class="share-icon share-kakao" v-if="!isDesktop" @click="_onClickKakao">
          <span class="text">카카오톡</span>
        </a>
        <a class="share-icon share-facebook" @click="_onClickFaceBook">
          <span class="text">페이스북</span>
        </a>
        <a class="share-icon share-text" :href="_onClickSms" v-if="!isDesktop">
          <span class="text">SMS문자</span>
        </a>
        <button class="share-icon share-url" type="button" @click="_onClickUrlCopy">
          <span class="text">URL복사</span>
        </button>
      </div>
      <div class="other-app" v-if="!isDesktop && (isAndroid || isIos)">
        <button class="other-app-btn" type="button">다른앱 선택하기</button>
      </div>
    </template>
  </Layer>
</template>

<script lang="ts" setup>
import { Layer } from '@/components/layer'
import { getOSByUserAgent } from '@/utils/device'
import Toast from '@/components/toast'

export interface Items {
  img: string
  name: string
  originPrice: string
  dcPrice: string
  dcRate: string
  url: string
  id: string
}

export interface Props {
  modelValue: boolean
  items: Items
}

interface WindowKakao extends globalThis.Window {
  Kakao: any
}

const props = withDefaults(defineProps<Props>(), {})

const state = reactive({
  isShow: props.modelValue
})

const emit = defineEmits<{
  (event: 'update:modelValue', result: boolean): void
}>()

const isDesktop = getOSByUserAgent() === 'desktop'
const isAndroid = getOSByUserAgent() === 'android'
const isIos = getOSByUserAgent() === 'ios'

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

const _onClickSms = computed(() => {
  const url = window.location.href

  if (isIos) {
    return `sms:&body=${url}`
  } else {
    return `sms:?body=${url}`
  }
})

const _callbackClose = () => {
  emit('update:modelValue', false)
}
const _callbackOpen = () => {}

const toastHandler = (content: string, delay: number, position: string) => {
  Toast({ content, delay, position })
}

function _onClickKakao(): void {
  const kakaoShare = (window as unknown as WindowKakao).Kakao

  if (!kakaoShare.isInitialized()) {
    // kakaoShare.init(import.meta.env.VITE_KAKAO_APP_KEY_JAVASCRIPT)
    kakaoShare.init('3e1a1075b4047e4e3625c832fb26294b')
  }
  kakaoShare.Share.sendDefault({
    objectType: 'commerce',
    content: {
      title: '전인화의 쿡셀',
      imageUrl: props.items.img,
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href
      }
    },
    commerce: {
      productName: props.items.name,
      regularPrice: 100000, // Number
      discountPrice: 90000 // Number
    },
    buttons: [
      {
        title: '구매하기',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href
        }
      }
    ]
  })
}

function _onClickFaceBook(): void {
  window.open(`http://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)}`)
}

function _onClickUrlCopy(): void {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      toastHandler('URL 복사가 완료되었습니다.', 2000, 'bottom')
    })
    .catch(() => {})
}
</script>

<style lang="scss">
@use '~/pages/goods/scss/layer/modal-share';
</style>
