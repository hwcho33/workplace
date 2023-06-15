import { meta, routerMapper } from '~/utils'

const root = '/publishing/order'
const namePrefix = 'PublishingOrder'

const order = [
  {
    ...routerMapper({
      name: `${namePrefix}Sheet`,
      path: `${root}/sheet`,
      meta: meta()
    }),
    component: () => import('&/pages/order/sheet.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Complete`,
      path: `${root}/complete`,
      meta: meta()
    }),
    component: () => import('&/pages/order/complete.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}SheetConsult`,
      path: `${root}/sheet-consult`,
      meta: meta()
    }),
    component: () => import('&/pages/order/sheet-consult.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}CompleteConsult`,
      path: `${root}/complete-consult`,
      meta: meta()
    }),
    component: () => import('&/pages/order/complete-consult.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}PresentCetify`,
      path: `${root}/present-certify`,
      meta: meta()
    }),
    component: () => import('&/pages/order/present-certify.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}PresentRecipient`,
      path: `${root}/present-recipient`,
      meta: meta()
    }),
    component: () => import('&/pages/order/present-recipient.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}PresentComplete`,
      path: `${root}/present-complete`,
      meta: meta()
    }),
    component: () => import('&/pages/order/present-complete.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Check`,
      path: `${root}/order-check`,
      meta: meta()
    }),
    component: () => import('&/pages/order/order-check.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}DetailsList`,
      path: `${root}/details-list`,
      meta: meta()
    }),
    component: () => import('&/pages/order/details-list.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}DeliveryState`,
      path: `${root}/delivery-state`,
      meta: meta()
    }),
    component: () => import('&/pages/order/delivery-state.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}PayChange`,
      path: `${root}/pay-change`,
      meta: meta()
    }),
    component: () => import('&/pages/order/pay-change.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}AddressList`,
      path: `${root}/address-list`,
      meta: meta()
    }),
    component: () => import('&/pages/order/address-list.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}AddressModify`,
      path: `${root}/address-modify`,
      meta: meta()
    }),
    component: () => import('&/pages/order/address-modify.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}AddressSearch`,
      path: `${root}/address-search`,
      meta: meta()
    }),
    component: () => import('&/pages/order/address-search.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}CashReceipt`,
      path: `${root}/cash-receipt`,
      meta: meta()
    }),
    component: () => import('&/pages/order/cash-receipt.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Cart`,
      path: `${root}/cart`,
      meta: meta({
        title: '장바구니',
        headerItem: { search: false, cart: false },
        fullLayout: true,
        bottomNavi: false
      })
    }),
    component: () => import('&/pages/order/cart.vue')
  }
]

export default order
