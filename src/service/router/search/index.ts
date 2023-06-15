import { meta, routerMapper } from '~/utils'

const root = '/search'
const namePrefix = 'Search'

const search = [
  {
    ...routerMapper({
      name: `${namePrefix}Result`,
      path: `${root}`,
      meta: meta()
    }),
    component: () => import('~/pages/search/search-result.vue')
  }
]

export default search
