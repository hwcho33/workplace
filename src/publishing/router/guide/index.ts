import { meta, routerMapper } from '~/utils'

const root = '/publishing/guide'
const namePrefix = 'PublishingGuide'

const guide = [
  {
    ...routerMapper({
      name: `${namePrefix}`,
      path: `${root}`,
      meta: meta({
        layout: 'blank'
      })
    }),
    component: () => import('&/pages/guide/index.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}list`,
      path: `${root}/list`,
      meta: meta({
        layout: 'blank'
      })
    }),
    component: () => import('&/pages/guide/list.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}layer`,
      path: `${root}/layer`,
      meta: meta({
        layout: 'blank'
      })
    }),
    component: () => import('&/pages/guide/layer.vue')
  },
  {
    name: `${namePrefix}url`,
    path: '/publishing/url',
    component: () => import('&/pages/guide/link-list.vue'),
    meta: meta({
      layout: 'home'
    })
  }
]

export default guide
