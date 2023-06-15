import { meta, routerMapper } from '~/utils'

const root = '/goods'
const namePrefix = 'Goods'

const goods = [
  {
    ...routerMapper({
      name: `${namePrefix}Detail`,
      path: `${root}/:id`,
      meta: {
        layout: 'default',
        headerItem: { home: true, search: true, cart: true },
        navi: false
      }
    }),
    component: () => import('~/pages/goods/detail.vue')
  },
  // {
  //   ...routerMapper({
  //     name: `${namePrefix}ReviewList`,
  //     path: `${root}/review-list`,
  //     meta: meta()
  //   }),
  //   component: () => import('~/pages/goods/review-list.vue')
  // },
  {
    ...routerMapper({
      name: `${namePrefix}ReviewManage`,
      path: `${root}/review-manage`,
      meta: meta()
    }),
    component: () => import('~/pages/goods/review-manage.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}ReviewWrite`,
      path: `${root}/review-write`,
      meta: meta()
    }),
    component: () => import('~/pages/goods/review-write.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}InquiryList`,
      path: `${root}/inquiry-list`,
      meta: meta()
    }),
    component: () => import('~/pages/goods/components/inquiry-list.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}InquiryWrite`,
      path: `${root}/inquiry-write`,
      meta: meta()
    }),
    component: () => import('~/pages/goods/inquiry-write.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}InquiryPrivacy`,
      path: `${root}/inquiry-privacy`,
      meta: meta()
    }),
    component: () => import('~/pages/goods/inquiry-privacy.vue')
  }
]

export default goods
