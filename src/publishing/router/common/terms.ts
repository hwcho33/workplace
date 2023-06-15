import { meta, routerMapper } from '~/utils'

const root = '/publishing/common/terms'
const namePrefix = 'PublishingCommon'

export const terms = [
  {
    ...routerMapper({
      name: `${namePrefix}NsmallTerms`,
      path: `${root}/nsmall-terms`,
      meta: meta({
        title: '이용약관',
        headerItem: { search: false, cart: false },
        bottomNavi: false
      })
    }),
    component: () => import('&/pages/common/terms/nsmall-terms.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}TvBookTerms`,
      path: `${root}/tv-book-terms`,
      meta: meta({
        title: '이용약관',
        headerItem: { search: false, cart: false },
        bottomNavi: false
      })
    }),
    component: () => import('&/pages/common/terms/tv-book-terms.vue')
  }
]
