import { meta, routerMapper } from '~/utils'

const root = '/publishing/store/atypical'
const namePrefix = 'PublishingAtypical'

export const atypical = [
  {
    ...routerMapper({
      name: `${namePrefix}Home`,
      path: `${root}`,
      meta: meta()
    }),
    component: () => import('&/pages/store/atypical/home.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Brand`,
      path: `${root}/brand`,
      meta: meta()
    }),
    component: () => import('&/pages/store/category/brand.vue')
  }
]
