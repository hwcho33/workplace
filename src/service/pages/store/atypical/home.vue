<template>
  <div v-if="isDesktop">
    <h1>데스크탑 페이지</h1>
  </div>
  <div v-else>
    <h1>모바일 또는 테블릿</h1>
  </div>
</template>

<script setup lang="ts">
import { useUtilDetectAllStore } from '~/store/common/index'
import { usePageHomeStore } from '~/store/store-atypical/index'

// --------------------------------------------------------------------- [변수 및 상수]
const detectAllStore = useUtilDetectAllStore()
const { isDesktop } = storeToRefs(detectAllStore)
const homeStore = usePageHomeStore()
// const route = useRoute()
// const router = useRouter()

// --------------------------------------------------------------------- [Vue 내장 메서드]
// --------------------------------------------------------------------- [생명 주기 함수]
onBeforeMount(() => {})
onMounted(() => {
  console.log('[window.navigator.userAgent]', window.navigator.userAgent)
  console.log('[detectAllStore]', detectAllStore)
  homeStore.pageInitAction()
  // console.log('[route]', route)
  // console.log('[router]', router)
})

// --------------------------------------------------------------------- [내부 함수 (functions)]
</script>

<style lang="scss"></style>
