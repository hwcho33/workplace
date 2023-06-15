import UAParser from 'ua-parser-js'

// --------------------------------------------------------------------- [TYPE]
type DetectInfo = {
  browser: {
    major: string | undefined
    name: string | undefined
    version: string | undefined
  }
  device: {
    model: string | undefined
    type: string | undefined
    vendor: string | undefined
  }
  os: {
    name: string | undefined
    version: string | undefined
  }
  ua: string | undefined
}

export const useUtilDetectAllStore = defineStore('UtilDetectAll', () => {
  // --------------------------------------------------------------------- [STATE]
  const detectInfo = ref<DetectInfo>({
    browser: {
      major: undefined,
      name: undefined,
      version: undefined
    },
    device: {
      model: undefined,
      type: undefined,
      vendor: undefined
    },
    os: {
      name: '',
      version: ''
    },
    ua: undefined
  })

  // --------------------------------------------------------------------- [GETTER]
  const isIos = computed(() => {
    if (detectInfo.value.os) {
      return detectInfo.value.os.name === 'iOS'
    } else {
      return false
    }
  })

  const isAndroid = computed(() => {
    if (detectInfo.value.os) {
      return detectInfo.value.os.name === 'Android'
    } else {
      return false
    }
  })

  const isMobile = computed(() => {
    if (detectInfo.value.device.type === 'mobile') {
      return true
    } else {
      return false
    }
  })

  const isTablet = computed(() => {
    if (detectInfo.value.device.type === 'tablet') {
      return true
    } else {
      return false
    }
  })

  const isDesktop = computed(() => {
    return Boolean(isMobile.value) === false && Boolean(isTablet.value) === false
  })

  const isNativeAppIos = computed(() => {
    const ua = detectInfo.value.ua ?? ''
    if (/NS_iOS/i.test(ua)) {
      return true
    } else {
      return false
    }
  })

  const isNativeAppAndroid = computed(() => {
    const ua = detectInfo.value.ua ?? ''
    if (/NS_ANDROID/i.test(ua)) {
      return true
    } else {
      return false
    }
  })

  const isNativeApp = computed(() => {
    return isNativeAppIos.value || isNativeAppAndroid.value
  })

  const nativeAppVersion = computed(() => {
    const ua = detectInfo.value.ua ?? ''
    // const appversionInfo = /appversion\s\d{1,2}.\d{1,2}.\d{1,2}/.exec(ua)
    const appversionInfo = /(NS_ANDROID|NS_iOS)\/\d{1,2}.\d{1,2}.\d{1,2}/.exec(ua)

    if (isNativeApp && appversionInfo !== null) {
      return appversionInfo[0].split('/', 2)[1]
    } else {
      return null
    }
  })

  const isHasNotch = computed(() => {
    const ua = detectInfo.value.ua ?? ''
    if (/hasNotch/i.test(ua) && isNativeAppIos.value) {
      return true
    } else {
      return false
    }
  })

  // --------------------------------------------------------------------- [ACTION]
  // 초기화
  function detectInitAction() {
    const parser = new UAParser()
    // testNativeApp(parser) // 테스트용

    detectInfo.value.browser = parser.getBrowser()
    detectInfo.value.device = parser.getDevice()
    detectInfo.value.os = parser.getOS()
    detectInfo.value.ua = parser.getUA()

    domClassInitAction()
  }

  // 테스트용
  function testNativeApp(parser: any) {
    const uaAndroid =
      'Mozilla/5.0 (Linux; Android 13; SM-F936N Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/113.0.5672.162 Mobile Safari/537.36 NS_ANDROID/0.6.0'

    const uaIos =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NS_iOS/0.6.0 (hasNotch)'

    parser.setUA(uaIos)
  }

  // html tag class 추가, 필요시 사용
  function domClassInitAction() {
    if (isIos.value) addClassAction('isIos')
    if (isAndroid.value) addClassAction('isAndroid')
    if (isDesktop.value) addClassAction('isDesktop')
    if (isMobile.value) addClassAction('isMobile')
    if (isTablet.value) addClassAction('isTablet')
    if (isNativeAppIos.value) addClassAction('isNativeAppIos')
    if (isNativeAppAndroid.value) addClassAction('isNativeAppAndroid')
    if (isNativeApp.value) addClassAction('isNativeApp')
    if (nativeAppVersion.value) addClassAction(`nativeAppVersion.${nativeAppVersion.value}`)
    if (isHasNotch.value) addClassAction(`isHasNotch`)
  }

  function addClassAction(className: string) {
    const el = document.querySelector('html')
    el!.classList.add(className)
  }

  return {
    detectInfo: readonly(detectInfo),
    isIos,
    isAndroid,
    isDesktop,
    isMobile,
    isTablet,
    isNativeAppIos,
    isNativeAppAndroid,
    isNativeApp,
    nativeAppVersion,
    isHasNotch,
    detectInitAction
  }
})
