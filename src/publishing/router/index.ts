import { meta } from '~/utils'

import claim from '&/router/claim'
import common from '&/router/common'
import customer from '&/router/customer'
import customerCenter from '&/router/customer-center'
import myPage from '&/router/my-page'
import order from '&/router/order'
import goods from '&/router/goods'
import search from '&/router/search'
import store from '&/router/store'
import guide from '&/router/guide'

const publishing = [
  {
    name: 'PublishingMain',
    path: '/publishing',
    component: () => import(`&/pages/main/index.vue`),
    meta: meta({
      layout: 'home'
    })
  },
  ...claim,
  ...common,
  ...customer,
  ...customerCenter,
  ...myPage,
  ...order,
  ...goods,
  ...search,
  ...store,
  ...guide
]

export default publishing
