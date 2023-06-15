// utils
import { useUserStore } from '~/store'

// types
import type { App } from 'vue'
import type { ComposerTranslation } from 'vue-i18n'

// variables
import { LOGOUT_STATUS_KEY, HAS_LOGOUT } from '~/store'
import { t } from '@/eco-system'

// declare global scope
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

/**
 * @description This won't work on the same page that is making the changes
 */
export function setupStorageEvent(): void {
  ;(global => {
    global.addEventListener('storage', () => {
      const userStore = useUserStore()
      if (userStore.hasLogout.get(LOGOUT_STATUS_KEY) === HAS_LOGOUT.YES) {
        userStore.logout()
      }
    })
  })(window)
}

/**
 * @description
 * 전역 변수 설정
 * setup global(window) properties
 */
export function setupGlobalProperties(app: App): void {
  app.config.globalProperties.window = window
  app.config.globalProperties.window.$t = t
}
