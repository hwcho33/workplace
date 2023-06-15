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
