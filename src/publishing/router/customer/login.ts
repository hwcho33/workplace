import { meta, routerMapper } from '~/utils'

const root = '/publishing/customer/login'
const namePrefix = 'PublishingCustomer'

export const login = [
  {
    ...routerMapper({
      name: `${namePrefix}Login`,
      path: `${root}`,
      meta: meta({
        title: '로그인',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/login/login.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}SimpleConnect`,
      path: `${root}/simple-connect`,
      meta: meta({
        title: '아이디 연결',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/login/simple-connect.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}FindId`,
      path: `${root}/find-id`,
      meta: meta({
        title: '아이디 찾기',
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/login/find-info.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}FindPassword`,
      path: `${root}/find-password`,
      meta: meta({
        title: '비밀번호 찾기',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/login/find-info.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}FindIdComplete`,
      path: `${root}/find-id-complete`,
      meta: meta({
        title: '아이디 찾기 완료',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/login/find-id-complete.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}FindPasswordId`,
      path: `${root}/find-password-id`,
      meta: meta({
        title: '비밀번호 찾기',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/login/find-password-id.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}PasswordChange`,
      path: `${root}/password-change`,
      meta: meta({
        title: '비밀번호 변경',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/login/password-change.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}PasswordChangeAlarm`,
      path: `${root}/password-change-alarm`,
      meta: meta({
        title: '비밀번호 변경',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/login/password-change-alarm.vue')
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
      })
    }),
    component: () => import('&/pages/customer/login/dormant-account.vue')
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
      })
    }),
    component: () => import('&/pages/customer/login/dormant-certify.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}NoneMember`,
      path: `${root}/none-member`,
      meta: meta({
        title: '비회원 주문조회',
        headerItem: { search: false, cart: false },
        footer: false,
        bottomNavi: false,
        headerOnlyLogo: true,
        fullLayout: true
      })
    }),
    component: () => import('&/pages/customer/login/none-member.vue')
  }
]
