import { meta, routerMapper } from '~/utils'

const root = '/publishing/common/system'
const namePrefix = 'PublishingCommon'

export const system = [
  {
    ...routerMapper({
      name: `${namePrefix}404Error`,
      path: `${root}/404-error`,
      meta: meta({
        headerItem: { search: false, cart: false },
        bottomNavi: false
      })
    }),
    component: () => import('&/pages/common/system/404-error.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}500Error`,
      path: `${root}/500-error`,
      meta: meta({
        headerItem: { search: false, cart: false },
        bottomNavi: false
      })
    }),
    component: () => import('&/pages/common/system/500-error.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}505Error`,
      path: `${root}/505-error`,
      meta: meta({
        headerItem: { search: false, cart: false },
        bottomNavi: false
      })
    }),
    component: () => import('&/pages/common/system/505-error.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}NetworkError`,
      path: `${root}/network-error`,
      meta: meta({
        bottomNavi: false
      })
    }),
    component: () => import('&/pages/common/system/network-error.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}SystemCheck`,
      path: `${root}/system-check`,
      meta: meta({
        layout: 'blank'
      })
    }),
    component: () => import('&/pages/common/system/system-check.vue')
  }
]
