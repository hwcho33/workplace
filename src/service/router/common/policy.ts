import { meta, routerMapper } from '~/utils'

const root = '/common/policy'
const namePrefix = 'Common'

export const policy = [
  {
    ...routerMapper({
      name: `${namePrefix}PrivacyPolicy`,
      path: `${root}/privacy-policy`,
      meta: meta()
    }),
    component: () => import('~/pages/common/policy/privacy-policy.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}YouthPolicy`,
      path: `${root}/youth-policy`,
      meta: meta()
    }),
    component: () => import('~/pages/common/policy/youth-policy.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}ConsumerPolicy`,
      path: `${root}/consumer-policy`,
      meta: meta()
    }),
    component: () => import('~/pages/common/policy/consumer-policy.vue')
  }
]
