import { meta, routerMapper } from '~/utils'

const root = '/publishing/store/category'
const namePrefix = 'PublishingStoreCategory'

export const category = [
  {
    ...routerMapper({
      name: `${namePrefix}`,
      path: `${root}`,
      meta: meta()
    }),
    component: () => import('&/pages/store/category/category.vue')
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
