import { meta, routerMapper } from '~/utils'

const root = '/publishing/my-page'
const namePrefix = 'PublishingMyPage'

const myPage = [
  {
    ...routerMapper({
      name: `${namePrefix}`,
      path: `${root}`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/my-page.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}ExecutivesCertify`,
      path: `${root}/executives-certify`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/executives-certify.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}ExecutivesComplete`,
      path: `${root}/executives-complete`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/executives-complete.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Membership`,
      path: `${root}/membership`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/membership.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}VipLounge`,
      path: `${root}/vip-lounge`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/vip-lounge.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Save`,
      path: `${root}/save`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/save.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Coupon`,
      path: `${root}/coupon`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/coupon.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}TollPoint`,
      path: `${root}/toll-point`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/toll-point.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}GiftCard`,
      path: `${root}/gift-card`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/gift-card.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Deposit`,
      path: `${root}/deposit`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/deposit.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Notify`,
      path: `${root}/notify`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/notify.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}WishList`,
      path: `${root}/wish-list`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/wish-list.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}History`,
      path: `${root}/History`,
      meta: meta()
    }),
    component: () => import('&/pages/my-page/history.vue')
  }
]

export default myPage
