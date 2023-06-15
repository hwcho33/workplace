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
