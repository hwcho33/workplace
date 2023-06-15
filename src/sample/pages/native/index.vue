<template>
  <div class="text-nm">
    <div class="mb-20">
      <div data-name="title" class="text-amber-200 bg-neutral pa-3 text-xl">웹뷰 연동 테스트</div>
      <br />
      <h2>네이티브에서만 테스트 가능합니다.</h2>
      <br />
      <div>
        <div>
          <h2>IOS</h2>
          <div>
            <button @click="onClickIos">Web > App: showAlertDialog</button>
          </div>
        </div>
        <br />

        <div>
          <h2>ANDROID</h2>
          <div>
            <button @click="onClickAndroid">Web > App: showAlertDialog</button>
          </div>
        </div>
        <br />

        <div>
          <h2>IOS/ANDROID</h2>
          <div>
            <button @click="onClickNative">Web > App: showAlertDialog</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-20">
      <div data-name="title" class="text-amber-200 bg-neutral pa-3 text-xl">상세 설명</div>
      <UseMd />
    </div>
  </div>
</template>

<script lang="ts" setup>
import UseMd from './md/use.md'
import { useUtilDetectAllStore } from '~/store/common/index'
import { useWebToApp } from '~/composable/native/index'
import { NATIVE_CALL_BACK, NATIVE_MATHOD } from '~/constants/native/index'

// --------------------------------------------------------------------- [변수 및 상수]
const detectAllStore = useUtilDetectAllStore()
// const { isDesktop } = storeToRefs(detectAllStore)
// const route = useRoute()
// const router = useRouter()

const { callBridgeIos, callBridgeAndroid, callBridgeNative } = useWebToApp()

const payload = {
  command: NATIVE_MATHOD.showAlertDialog,
  name: '',
  parameters: {
    message: 'showAlertDialog 메시지 내용'
  }
}

// --------------------------------------------------------------------- [Vue 내장 메서드]
// --------------------------------------------------------------------- [생명 주기 함수]
onBeforeMount(() => {})
onMounted(() => {
  console.log('[window.navigator.userAgent]', window.navigator.userAgent)
  console.log('[detectAllStore]', detectAllStore)
  // console.log('[route]', route)
  // console.log('[router]', router)
})

// --------------------------------------------------------------------- [내부 함수 (functions)]
// 네이티브에서 비즈니스 처리 후 해당 콜백함수를 통해 결과 값을 전달한다.
// 결과값에 따라 다음 처리를 진행한다.
function setWindowCallback() {
  const callbackAlertDialog = (nativeResult: string) => {
    const res = JSON.parse(nativeResult)
    if (res.success) {
      console.log('[확인]')
    } else {
      console.log('[취소]')
    }
  }
  /**
   * 콜백 함수명은 미리명시된 항목만 사용한다.
   * http://wiki.nsmall.com:18090/wiki/pages/viewpage.action?pageId=81385802
   */
  window[NATIVE_CALL_BACK.callbackAlertDialog] = callbackAlertDialog
}

// IOS
function onClickIos() {
  console.log('[onClickIos]')
  setWindowCallback()
  callBridgeIos(payload)
}
// Android
function onClickAndroid() {
  console.log('[onClickAndroid]')
  setWindowCallback()
  callBridgeAndroid(payload)
}

// 디바이스 구분없이 통합형
function onClickNative() {
  console.log('[onClickNative]')
  setWindowCallback()
  callBridgeNative(payload)
}
</script>
