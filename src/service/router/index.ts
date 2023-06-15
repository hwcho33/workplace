import { meta } from '~/utils'

import claim from '~/router/claim'
import common from '~/router/common'
import customer from '~/router/customer'
import customerCenter from '~/router/customer-center'
import myPage from '~/router/my-page'
import order from '~/router/order'
import goods from '~/router/goods'
import search from '~/router/search'
import store from '~/router/store'

const service = [
  {
    name: 'Main',
    path: '/',
    component: () => import(`~/pages/main/index.vue`),
    meta: meta({
      layout: 'home'
    }),
    redirect: '/store/atypical/home'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/common/system/404-error'
  },
  ...claim,
  ...common,
  ...customer,
  ...customerCenter,
  ...myPage,
  ...order,
  ...goods,
  ...search,
  ...store
]

export default service
