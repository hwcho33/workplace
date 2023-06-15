import { meta, routerMapper } from '~/utils'

const root = '/common/terms'
const namePrefix = 'Common'

export const terms = [
  {
    ...routerMapper({
      name: `${namePrefix}NsmallTerms`,
      path: `${root}/nsmall-terms`,
      meta: meta()
    }),
    component: () => import('~/pages/common/terms/nsmall-terms.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}TvBookTerms`,
      path: `${root}/tv-book-terms`,
      meta: meta()
    }),
    component: () => import('~/pages/common/terms/tv-book-terms.vue')
  }
]
