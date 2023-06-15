import { meta, routerMapper } from '~/utils'

const root = '/store/event'
const namePrefix = 'StoreEvent'

export const event = [
  {
    ...routerMapper({
      name: `${namePrefix}Winner`,
      path: `${root}/winner`,
      meta: meta()
    }),
    component: () => import('~/pages/store/event/winner.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}WinnerSearch`,
      path: `${root}/winner-search`,
      meta: meta()
    }),
    component: () => import('~/pages/store/event/winner-search.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}WinnerDetails`,
      path: `${root}/winner-details`,
      meta: meta()
    }),
    component: () => import('~/pages/store/event/winner-details.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Attendance`,
      path: `${root}/attendance`,
      meta: meta()
    }),
    component: () => import('~/pages/store/event/attendance.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Roulette`,
      path: `${root}/roulette`,
      meta: meta()
    }),
    component: () => import('~/pages/store/event/roulette.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}LuckyBox`,
      path: `${root}/lucky-box`,
      meta: meta()
    }),
    component: () => import('~/pages/store/event/lucky-box.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}RandomCoupon`,
      path: `${root}/random-coupon`,
      meta: meta()
    }),
    component: () => import('~/pages/store/event/random-coupon.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}CouponRegister`,
      path: `${root}/coupon-register`,
      meta: meta()
    }),
    component: () => import('~/pages/store/event/coupon-register.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}PushAgree`,
      path: `${root}/push-agree`,
      meta: meta()
    }),
    component: () => import('~/pages/store/event/push-agree.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}TimeCoupon`,
      path: `${root}/time-coupon`,
      meta: meta()
    }),
    component: () => import('~/pages/store/event/time-coupon.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}EnterEvent`,
      path: `${root}/enter-event`,
      meta: meta()
    }),
    component: () => import('~/pages/store/event/enter-event.vue')
  }
]
