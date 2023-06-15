import { meta, routerMapper } from '~/utils'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const root = '/customer/member'
const namePrefix = 'Member'

export const member = [
  {
    ...routerMapper({
      name: `${namePrefix}Join`,
      path: `${root}/join`,
      meta: meta({
        layout: 'default',
        title: '',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('~/pages/customer/member/join.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}JoinForm`,
      path: `${root}/join-form`,
      meta: meta({
        layout: 'default',
        title: '회원가입',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('~/pages/customer/member/join-form.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}JoinComplete`,
      path: `${root}/join-complete`,
      meta: meta({
        layout: 'default',
        title: '회원가입 완료',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('~/pages/customer/member/join-complete.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}IndentityVerification`,
      path: `${root}/identity-verification`,
      meta: meta()
    }),
    component: () => import('~/pages/customer/member/identity-verification.vue'),
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      const query = to.query
      const isMemberJoin = query?.pageNm === 'memberJoin'
      const isOrderSheet = query?.pageNm === 'orderSheet'
      const isAdultCert = query?.pageNm === 'adultCert'

      if (isMemberJoin || isOrderSheet || isAdultCert) {
        next()
      } else {
        next('/common/system/404-error')
      }
    }
  },
  {
    ...routerMapper({
      name: `${namePrefix}MobileIndentityVerification`,
      path: `${root}/mobile-identity-verification`,
      meta: meta()
    }),
    component: () => import('~/pages/customer/member/mobile-identity-verification.vue'),
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      const query = to.query
      const isMemberJoin = query?.pageNm === 'memberJoin'
      const isOrderSheet = query?.pageNm === 'orderSheet'
      const isAdultCert = query?.pageNm === 'adultCert'

      if (isMemberJoin || isOrderSheet || isAdultCert) {
        next()
      } else {
        next('/common/system/404-error')
      }
    }
  },
  {
    ...routerMapper({
      name: `${namePrefix}SimpleJoin`,
      path: `${root}/simple-join`,
      meta: meta({
        layout: 'default',
        title: '회원가입',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('~/pages/customer/member/simple-join.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}SimpleCertifyComplete`,
      path: `${root}/simple-certify-complete`,
      meta: meta({
        layout: 'default',
        title: '회원가입 완료',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('~/pages/customer/member/simple-certify-complete.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}PasswordCheck`,
      path: `${root}/password-check`,
      meta: meta()
    }),
    component: () => import('~/pages/customer/member/password-check.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}InfoModify`,
      path: `${root}/info-modify`,
      meta: meta()
    }),
    component: () => import('~/pages/customer/member/info-modify.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Withdraw`,
      path: `${root}/withdraw`,
      meta: meta()
    }),
    component: () => import('~/pages/customer/member/withdraw.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}WithdrawComplete`,
      path: `${root}/withdraw-complete`,
      meta: meta()
    }),
    component: () => import('~/pages/customer/member/withdraw-complete.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Setting`,
      path: `${root}/setting`,
      meta: meta()
    }),
    component: () => import('~/pages/customer/member/setting.vue')
  }
]
