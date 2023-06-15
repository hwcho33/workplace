import { meta, routerMapper } from '~/utils'

const root = '/store/category'
const namePrefix = 'StoreCategory'

export const category = [
  {
    ...routerMapper({
      name: `${namePrefix}`,
      path: `${root}`,
      meta: meta()
    }),
    component: () => import('~/pages/store/category/category.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Brand`,
      path: `${root}/brand`,
      meta: meta()
    }),
    component: () => import('~/pages/store/category/brand.vue')
  }
]
