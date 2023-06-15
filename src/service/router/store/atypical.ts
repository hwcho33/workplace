import { meta, routerMapper } from '~/utils'

const root = '/store/atypical'
const namePrefix = 'Atypical'

export const atypical = [
  {
    ...routerMapper({
      name: `${namePrefix}Home`,
      path: `${root}/home`,
      meta: meta({
        layout: 'home'
      })
    }),
    component: () => import('~/pages/store/atypical/home.vue')
  },
  // {
  //   ...routerMapper({
  //     name: `${namePrefix}Home`,
  //     path: `${root}`,
  //     meta: {
  //       layout: 'home'
  //     }
  //   }),
  //   component: () => import('~/pages/store/category/category.vue')
  // },
  {
    ...routerMapper({
      name: `${namePrefix}Brand`,
      path: `${root}/brand`,
      meta: meta()
    }),
    component: () => import('~/pages/store/category/brand.vue')
  }
]
