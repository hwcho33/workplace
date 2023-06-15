declare const global: unknown

/**
 * @description
 * 현재 JS 런타임이 서버 환경(Node.js)인지 확인
 *
 * @example
 * ```ts
 * if (isServer()) {
 *  // Node.js 서버 환경 보장
 *  doSomething()
 * }
 * ```
 */
export function isServer() {
  return typeof window === 'undefined' && typeof global !== 'undefined'
}

/**
 * @description
 * 현재 JS 런타임이 클라이언트 환경(브라우저)인지 확인
 *
 * @example
 * if (isClient()) {
 *  // 브라우저 환경이 보장
 *  doSomething()
 * }
 */
export function isClient() {
  return !isServer()
}

/**
 * @description User-Agent 문자열 기반 OS값 반환 함수
 *
 * @return
 * - `ios`: iOS 환경
 * - `android`: Android 환경
 * - `web`: 그 외의 브라우저 환경
 * - `false`: 그 외의 서버 환경
 */
export function getOSByUserAgent() {
  if (isServer()) {
    return false
  }

  const isIos = window.navigator.userAgent.match(/NS_iOS/i) !== null
  if (isIos) {
    return 'ios'
  }

  const isAndroid = window.navigator.userAgent.match(/NS_Android/i) !== null
  if (isAndroid) {
    return 'android'
  }

  const isDesktop = !isMobileWeb()
  if (isDesktop) {
    return 'desktop'
  }

  return 'web'
}

/**
 * @description
 * 현재 JS 런타임이 Internet Explorer 환경에서 실행되었는지 확인
 * `navigator.userAgent`가 `MSIE` or `Trident` 문자열을 포함하는지 확인
 */
export function isIE() {
  if (isServer()) {
    return false
  }
  return /MSIE|Trident/i.test(window.navigator.userAgent)
}

/**
 * @description
 * 현재 JS 런타임이 Mac OS 환경에서 실행되었는지 확인
 * `navigator.platform`이 아래 문자열 중 어느 하나라도 포함하는지 확인
 * - Macintosh
 * - MacIntel
 * - MacPPc
 * - Mac68K
 */
export function isMacOS() {
  if (isServer()) {
    return false
  }
  return navigator.platform.match(/Macintosh|MacIntel|MacPPC|Mac68K/) != null
}

/**
 * @description
 * 현재 JS 런타임이 Mobile Web 환경에서 실행되었는지 확인
 * User Agent에 아래 문자열 중 어느 하나라도 포함되는지 검사
 * - ipad
 * - iphone
 * - android
 */
export function isMobileWeb() {
  if (isServer()) {
    return false
  }

  if (navigator.userAgent.match(/ipad|iphone/i) !== null || navigator.userAgent.match(/Android/i) !== null) {
    return true
  }

  return false
}

/**
 * @description
 * userAgent 내에 scheme 값을 확인하여 앱으로 접속되었는지 확인
 *
 * TO-DO: injection 돼있는 값을 이용해도 될 것 같습니다.
 */
export function isApp() {
  const navigatorUseragent = navigator.userAgent.toLowerCase()
  const appScheme = '향후 앱 개발팀에 문의 필요'

  if (navigatorUseragent.indexOf(appScheme) > -1) {
    return true
  }

  return false
}
