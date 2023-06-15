import { meta, routerMapper } from '~/utils'

const root = '/publishing/search'
const namePrefix = 'PublishingSearch'

const search = [
  {
    ...routerMapper({
      name: `${namePrefix}Result`,
      path: `${root}`,
      meta: meta()
    }),
    component: () => import('&/pages/search/search-result.vue')
  }
]

export default search
