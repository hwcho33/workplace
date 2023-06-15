import { meta, routerMapper } from '~/utils'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { includes } from 'lodash-es'

const root = '/customer/login'
const namePrefix = 'Customer'

export const login = [
  {
    ...routerMapper({
      name: `${namePrefix}Login`,
      path: `${root}`,
      meta: {
        layout: 'default',
        title: '로그인',
        headerItem: false,
        footer: false,
        navi: false
      }
    }),
    component: () => import('~/pages/customer/login/login.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}CertifySelect`,
      path: `${root}/certify-select`,
      meta: meta()
    }),
    component: () => import('~/pages/customer/login/certify-select.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}FindId`,
      path: `${root}/find-id`,
      meta: meta({
        layout: 'default',
        title: '아이디 찾기',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('~/pages/customer/login/find-id.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}FindIdComplete`,
      path: `${root}/find-id-complete`,
      meta: meta({
        layout: 'default',
        title: '아이디 찾기 완료',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('~/pages/customer/login/find-id-complete.vue'),
    beforeEnter: (_: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      // 해당 페이지에 접근을 허용할 페이지 name 목록
      // TODO: 추후 프로세스에 따라 목록 추가/변경 필요
      const ACCESS_ALLOW_PAGES = [
        `${namePrefix}FindId` // 아이디 찾기 > 휴대폰/이메일 인증
      ]

      // 접근 허용 페이지에서 이동한 게 아니라면 404 화면으로 이동
      if (!includes(ACCESS_ALLOW_PAGES, from.name)) {
        next('/common/system/404-error')
      } else {
        next()
      }
    }
  },
  {
    ...routerMapper({
      name: `${namePrefix}FindPasswordId`,
      path: `${root}/find-password-id`,
      meta: meta({
        layout: 'default',
        title: '비밀번호 찾기',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('~/pages/customer/login/find-password-id.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}FindPassword`,
      path: `${root}/find-password`,
      meta: meta({
        layout: 'default',
        title: '비밀번호 찾기',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('~/pages/customer/login/find-password.vue'),
    beforeEnter: (_: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      // 해당 페이지에 접근을 허용할 페이지 name 목록
      // TODO: 추후 프로세스에 따라 목록 추가/변경 필요
      const ACCESS_ALLOW_PAGES = [
        `${namePrefix}FindPasswordId` // 비밀번호 찾기 > 아이디 확인
      ]

      // 접근 허용 페이지에서 이동한 게 아니라면 404 화면으로 이동
      if (!includes(ACCESS_ALLOW_PAGES, from.name)) {
        next('/common/system/404-error')
      } else {
        next()
      }
    }
  },
  {
    ...routerMapper({
      name: `${namePrefix}PasswordChange`,
      path: `${root}/password-change`,
      meta: meta({
        layout: 'default',
        title: '비밀번호 변경',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('~/pages/customer/login/password-change.vue'),
    beforeEnter: (_: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      // 해당 페이지에 접근을 허용할 페이지 name 목록
      // TODO: 추후 프로세스에 따라 목록 추가/변경 필요
      const ACCESS_ALLOW_PAGES = [
        `${namePrefix}FindPassword` // 비밀번호 찾기 > 휴대폰/이메일 인증
      ]

      // 접근 허용 페이지에서 이동한 게 아니라면 404 화면으로 이동
      if (!includes(ACCESS_ALLOW_PAGES, from.name)) {
        next('/common/system/404-error')
      } else {
        next()
      }
    }
  },
  {
    ...routerMapper({
      name: `${namePrefix}PasswordChangeAlarm`,
      path: `${root}/password-change-alarm`,
      meta: meta({
        layout: 'default',
        title: '비밀번호 변경',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
        // TODO: 추후 requiresAuth 옵션에 대한 개발(로그인 등)이 끝나면 활성화 필요
        // requiresAuth: true
      })
    }),
    component: () => import('~/pages/customer/login/password-change-alarm.vue'),
    beforeEnter: (_: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      // 해당 페이지에 접근을 허용할 페이지 name 목록
      // TODO: 추후 프로세스에 따라 목록 추가/변경 필요
      const ACCESS_ALLOW_PAGES = [
        `${namePrefix}Login`, // 로그인
        `${namePrefix}DormantCertify`, // 휴면 아이디 해제 완료
        undefined // TODO: URL 변경으로 접근 허용. 추후 삭제 필요
      ]

      // 접근 허용 페이지에서 이동한 게 아니라면 404 화면으로 이동
      if (!includes(ACCESS_ALLOW_PAGES, from.name)) {
        next('/common/system/404-error')
      } else {
        next()
      }
    }
  },
  {
    ...routerMapper({
      name: `${namePrefix}DormantAccount`,
      path: `${root}/dormant-account`,
      meta: meta({
        title: '휴면 아이디 안내',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
        // TODO: 추후 requiresAuth 옵션에 대한 개발(로그인 등)이 끝나면 활성화 필요
        // requiresAuth: true
      })
    }),
    component: () => import('~/pages/customer/login/dormant-account.vue'),
    beforeEnter: (_: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      // 해당 페이지에 접근을 허용할 페이지 name 목록
      // TODO: 추후 프로세스에 따라 목록 추가/변경 필요
      const ACCESS_ALLOW_PAGES = [
        `${namePrefix}Login`, // 로그인
        undefined // TODO: URL 변경으로 접근 허용. 추후 삭제 필요
      ]
      // 접근 허용 페이지에서 이동한 게 아니라면 404 화면으로 이동
      if (!includes(ACCESS_ALLOW_PAGES, from.name)) {
        next('/common/system/404-error')
      } else {
        next()
      }
    }
  },
  {
    ...routerMapper({
      name: `${namePrefix}DormantCertify`,
      path: `${root}/dormant-certify`,
      meta: meta({
        title: '휴면 아이디 해제 완료',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
        // TODO: 추후 requiresAuth 옵션에 대한 개발(로그인 등)이 끝나면 활성화 필요
        // requiresAuth: true
      })
    }),
    component: () => import('~/pages/customer/login/dormant-certify.vue'),
    beforeEnter: (_: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      // 해당 페이지에 접근을 허용할 페이지 name 목록
      // TODO: 추후 프로세스에 따라 목록 추가/변경 필요
      const ACCESS_ALLOW_PAGES = [
        `${namePrefix}DormantAccount` // 휴면 아이디 안내
      ]

      // 접근 허용 페이지에서 이동한 게 아니라면 404 화면으로 이동
      if (!includes(ACCESS_ALLOW_PAGES, from.name)) {
        next('/common/system/404-error')
      } else {
        next()
      }
    }
  },
  {
    ...routerMapper({
      name: `${namePrefix}NoneMember`,
      path: `${root}/none-member`,
      meta: meta()
    }),
    component: () => import('~/pages/customer/login/none-member.vue')
  }
]
