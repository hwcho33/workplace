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
