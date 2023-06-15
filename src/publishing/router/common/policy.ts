import { meta, routerMapper } from '~/utils'

const root = '/publishing/common/policy'
const namePrefix = 'PublishingCommon'

export const policy = [
  {
    ...routerMapper({
      name: `${namePrefix}PrivacyPolicy`,
      path: `${root}/privacy-policy`,
      meta: meta({
        title: '개인정보처리 방침',
        headerItem: { search: false, cart: false },
        bottomNavi: false
      })
    }),
    component: () => import('&/pages/common/policy/privacy-policy.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}YouthPolicy`,
      path: `${root}/youth-policy`,
      meta: meta({
        title: '청소년 보호 정책',
        headerItem: { search: false, cart: false },
        bottomNavi: false
      })
    }),
    component: () => import('&/pages/common/policy/youth-policy.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}ConsumerPolicy`,
      path: `${root}/consumer-policy`,
      meta: meta({
        title: '소비자 분쟁 해결 기준',
        headerItem: { search: false, cart: false },
        bottomNavi: false
      })
    }),
    component: () => import('&/pages/common/policy/consumer-policy.vue')
  }
]
