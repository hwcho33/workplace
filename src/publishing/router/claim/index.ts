import { meta, routerMapper } from '~/utils'

const root = '/publishing/claim'
const namePrefix = 'PublishingClaim'

const claim = [
  {
    ...routerMapper({
      name: `${namePrefix}Cancel`,
      path: `${root}/cancel`,
      meta: meta()
    }),
    component: () => import('&/pages/claim/cancel.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Exchange`,
      path: `${root}/exchange`,
      meta: meta({
        layout: 'home'
      })
    }),
    component: () => import('&/pages/claim/exchange.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Return`,
      path: `${root}/return`,
      meta: meta()
    }),
    component: () => import('&/pages/claim/return.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}ReturnInfo`,
      path: `${root}/return-info`,
      meta: meta()
    }),
    component: () => import('&/pages/claim/return-info.vue')
  }
]

export default claim
