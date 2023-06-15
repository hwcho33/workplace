import { meta, routerMapper } from '~/utils'

const root = '/publishing/store/fixed'
const namePrefix = 'PublishingFixed'

export const fixed = [
  {
    ...routerMapper({
      name: `${namePrefix}Schedule`,
      path: `${root}/schedule`,
      meta: meta()
    }),
    component: () => import('&/pages/store/fixed/schedule.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Nlive`,
      path: `${root}/nlive`,
      meta: meta()
    }),
    component: () => import('&/pages/store/fixed/nlive.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}NliveCommunity`,
      path: `${root}/nlive-community`,
      meta: meta()
    }),
    component: () => import('&/pages/store/fixed/nlive-community.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}NliveCommunityDetails`,
      path: `${root}/nlive-community-details`,
      meta: meta()
    }),
    component: () => import('&/pages/store/fixed/nlive-community-details.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}NliveNsgram`,
      path: `${root}/nlive-nsgram`,
      meta: meta()
    }),
    component: () => import('&/pages/store/fixed/nlive-nsgram.vue')
  }
]
