
**Web-App 인터페이스 사용자 가이드**  
http://wiki.nsmall.com:18090/wiki/pages/viewpage.action?pageId=81386510

---

**JS 인터페이스 목록**  
http://wiki.nsmall.com:18090/wiki/pages/viewpage.action?pageId=81385802

---

**Webview 인터페이스**  
http://wiki.nsmall.com:18090/wiki/pages/viewpage.action?pageId=81385802

### 개발진행시 샘플과 문서는 업데이트가 필요합니다.(완료되지 않은 샘플)
#### 네이티브 확인사항
>> 1. [IOS] name: '' 항목 확인 필요.
>> 2. [IOS/Android] as-is Action에 문자열('login' 또는 'logout')을 보내는 것을 TO-BE에서는 분리 할것인지 유무

```ts
// src/sample/pages/native/index.vue

<script lang="ts" setup>
import UseMd from './md/use.md'
import { useUtilDetectAllStore } from '~/store/common/index'
import { useWebToApp } from '~/composable/native/index'
import { NATIVE_CALL_BACK } from '~/constants/native/index'
import { NATIVE_CALL_BACK, NATIVE_MATHOD } from '~/constants/native/index'

// --------------------------------------------------------------------- [변수 및 상수]
const detectAllStore = useUtilDetectAllStore()
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

```



```ts
// call-back.ts
export const NATIVE_CALL_BACK = {
  /**
   * 브릿지 메소드를 호출하기전 콜백함수를 정의한다.
   * 호출 시점이 정해져 있음.
   */
  callbackLoginWithNaver: 'callbackLoginWithNaver',
  callbackLoginWithKakao: 'callbackLoginWithKakao',
  callbackLoginWithApple: 'callbackLoginWithApple',
  callbackLoginWithBio: 'callbackLoginWithBio',
  callbackAlertDialog: 'callbackAlertDialog',
  callbackContactNumber: 'callbackContactNumber',
  callbackShowAppReview: 'callbackShowAppReview',
  callbackAppVersion: 'callbackAppVersion',
  callbackAppServerVersion: 'callbackAppServerVersion',
  callbackOSVersion: 'callbackOSVersion',
  callbackPushUUID: 'callbackPushUUID',
  callbackPushAgreeYN: 'callbackPushAgreeYN',
  callbackDevicePushAgreeYN: 'callbackDevicePushAgreeYN',
  callbackBioTokenCallback: 'callbackBioTokenCallback',
  callbackIsWifiConnected: 'callbackIsWifiConnected',
  callbacksetPushAgree: 'callbacksetPushAgree',
  callbackSetBioUseYn: 'callbackSetBioUseYn',
  callbackSetOpenDevicePushSetting: 'callbackSetOpenDevicePushSetting',

  /**
   * 네이티브에서 언제든 호출가능한 콜백함수
   */
  goToDeepLinkUrl: 'goToDeepLinkUrl',
  goBackToWeb: 'goBackToWeb'
} as const

export type NATIVE_CALL_BACK = (typeof NATIVE_CALL_BACK)[keyof typeof NATIVE_CALL_BACK]

```


```ts
// native-method.ts
/**
 * 네이티브에 정의된 메소드
 */
export const NATIVE_MATHOD = {
  loginWithNaver: 'loginWithNaver',
  loginWithKakao: 'loginWithKakao',
  loginWithApple: 'loginWithApple',
  loginWithBio: 'loginWithBio',
  goBackToNative: 'goBackToNative',

  showToast: 'showToast',
  showAlertDialog: 'showAlertDialog',
  showShareDialog: 'showShareDialog',
  showContactNumber: 'showContactNumber',
  showAppReview: 'showAppReview',

  showAppUpdate: 'showAppUpdate',
  refresh: 'refresh',
  getAppVersion: 'getAppVersion',
  getOSVersion: 'getOSVersion',
  getPushUUID: 'getPushUUID',

  getPushAgreeYn: 'getPushAgreeYn',
  getDevicePushAgreeYN: 'getDevicePushAgreeYN',
  getBioToken: 'getBioToken',
  isWifiConnected: 'isWifiConnected',
  setPushAgree: 'setPushAgree',

  setBioUseYn: 'setBioUseYn',
  setOpenDevicePushSetting: 'setOpenDevicePushSetting'
} as const

export type NATIVE_MATHOD = (typeof NATIVE_MATHOD)[keyof typeof NATIVE_MATHOD]


```

```ts
// web-to-app.ts
/**
 * 컴포져블 함수를 통한 기능구현
 * 1. 재사용
 * 2. 안드로이드/IOS 구분없이 사용하는 통합 함수
 * 3. 네이티브 통신할때 JSON 객체를 자동 String 변환
 */

import { useUtilDetectAllStore } from '~/store/common/index'

export const useWebToApp = () => {
  const detectAllStore = useUtilDetectAllStore()
  const { isNativeAppAndroid, isNativeAppIos } = storeToRefs(detectAllStore)

  type Payload = {
    command: string
    name: string
    parameters: any
  }

  // 브릿지(IOS/Android)
  function callBridgeNative(payload: Payload) {
    if (isNativeAppIos.value) {
      callBridgeIos(payload)
    }
    if (isNativeAppAndroid.value) {
      callBridgeAndroid(payload)
    }
  }

  // IOS 브릿지
  function callBridgeIos(payload: Payload) {
    const payloadString = JSON.stringify(payload)
    window.webkit.messageHandlers.NSHub.postMessage(payloadString)
  }
  // Android 브릿지
  function callBridgeAndroid(payload: Payload) {
    const payloadString = JSON.stringify(payload)
    window.NSHub[payload.command](payloadString)
  }

  return {
    callBridgeIos,
    callBridgeAndroid,
    callBridgeNative
  }
}



```



```ts
// global.ts
// 타입스크립트 에러를 방지하기 하기 위함.
declare global {
  const $t: ComposerTranslation
  interface Window {
    webkit: {
      messageHandlers: {
        NSHub: {
          postMessage: (payload: any) => void
        }
      }
    }
    NSHub: any
    callbackLoginWithNaver: any
    callbackLoginWithKakao: any
    callbackLoginWithApple: any
    callbackLoginWithBio: any
    callbackAlertDialog: any
    callbackContactNumber: any
    callbackShowAppReview: any
    callbackAppVersion: any
    callbackAppServerVersion: any
    callbackOSVersion: any
    callbackPushUUID: any
    callbackPushAgreeYN: any
    callbackDevicePushAgreeYN: any
    callbackBioTokenCallback: any
    callbackIsWifiConnected: any
    callbacksetPushAgree: any
    callbackSetBioUseYn: any
    callbackSetOpenDevicePushSetting: any
    goToDeepLinkUrl: any
    goBackToWeb: any
  }
}

```
