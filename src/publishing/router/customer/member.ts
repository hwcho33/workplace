import { meta, routerMapper } from '~/utils'

const root = '/publishing/customer/member'
const namePrefix = 'PublishingMember'

export const member = [
  {
    ...routerMapper({
      name: `${namePrefix}Join`,
      path: `${root}/join`,
      meta: meta({
        title: '회원가입',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/member/join.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}JoinFormPc`,
      path: `${root}/join-form-pc`,
      meta: meta({
        layout: 'default',
        title: '회원가입',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('&/pages/customer/member/p.join-form.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}JoinFormStep1`,
      path: `${root}/join-form-step1`,
      meta: meta({
        title: '회원가입',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('&/pages/customer/member/join-form-step1.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}JoinFormStep2`,
      path: `${root}/join-form-step2`,
      meta: meta({
        title: '회원가입',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('&/pages/customer/member/join-form-step2.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}JoinComplete`,
      path: `${root}/join-complete`,
      meta: meta({
        title: '회원가입 완료',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/member/join-complete.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}IndentityVerification`,
      path: `${root}/identity-verification`,
      meta: meta({
        title: '본인인증',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/member/identity-verification.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}MobileIndentityVerificationPc`,
      path: `${root}/mobile-identity-verification-pc`,
      meta: meta()
    }),
    component: () => import('&/pages/customer/member/p.mobile-identity-verification.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}MobileIndentityVerificationStep1`,
      path: `${root}/mobile-identity-verification-step1`,
      meta: meta({
        layout: 'default',
        title: '휴대폰 본인인증',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('&/pages/customer/member/mobile-identity-verification-step1.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}MobileIndentityVerificationStep2`,
      path: `${root}/mobile-identity-verification-step2`,
      meta: meta({
        layout: 'default',
        title: '휴대폰 본인인증',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true
      })
    }),
    component: () => import('&/pages/customer/member/mobile-identity-verification-step2.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}SimpleJoin`,
      path: `${root}/simple-join`,
      meta: meta({
        title: '회원가입',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/member/simple-join.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}SimpleCertifyComplete`,
      path: `${root}/simple-certify-complete`,
      meta: meta({
        title: '회원가입 완료',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/member/simple-certify-complete.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}PasswordCheck`,
      path: `${root}/password-check`,
      meta: meta()
    }),
    component: () => import('&/pages/customer/member/password-check.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}InfoModify`,
      path: `${root}/info-modify`,
      meta: meta()
    }),
    component: () => import('&/pages/customer/member/info-modify.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Withdraw`,
      path: `${root}/withdraw`,
      meta: meta()
    }),
    component: () => import('&/pages/customer/member/withdraw.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}WithdrawComplete`,
      path: `${root}/withdraw-complete`,
      meta: meta()
    }),
    component: () => import('&/pages/customer/member/withdraw-complete.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Setting`,
      path: `${root}/setting`,
      meta: meta()
    }),
    component: () => import('&/pages/customer/member/setting.vue')
  }
]
