import { meta, routerMapper } from '~/utils'

const root = '/publishing/goods'
const namePrefix = 'PublishingGoods'

const goods = [
  {
    ...routerMapper({
      name: `${namePrefix}Detail`,
      path: `${root}/detail`,
      meta: meta({
        layout: 'default',
        headerItem: { home: true },
        bottomNavi: false
      })
    }),
    component: () => import('&/pages/goods/detail.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}loading`,
      path: `${root}/detail-loading`,
      meta: {
        layout: 'default',
        headerItem: { home: true },
        bottomNavi: false
      }
    }),
    component: () => import('&/pages/goods/detail-loading.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}ReviewManage`,
      path: `${root}/review-manage`,
      meta: meta()
    }),
    component: () => import('&/pages/goods/review-manage.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}ReviewWrite`,
      path: `${root}/review-write`,
      meta: meta()
    }),
    component: () => import('&/pages/goods/review-write.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}InquiryWrite`,
      path: `${root}/inquiry-write`,
      meta: meta()
    }),
    component: () => import('&/pages/goods/inquiry-write.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}InquiryPrivacy`,
      path: `${root}/inquiry-privacy`,
      meta: meta()
    }),
    component: () => import('&/pages/goods/inquiry-privacy.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}BundleDelivery`,
      path: `${root}/bundle-delivery`,
      meta: meta({
        title: '묶음배송 가능한 상품',
        bottomNavi: false
      })
    }),
    component: () => import('&/pages/goods/bundle-delivery.vue')
  }
]

export default goods
