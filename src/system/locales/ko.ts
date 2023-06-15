import { customer } from './ko/customer'
import { claim } from './ko/claim'
import { common } from './ko/common'
import { customerCenter } from './ko/customer-center'
import { error } from './ko/error'
import { main } from './ko/main'
import { myPage } from './ko/my-page'
import { order } from './ko/order'
import { product } from './ko/product'
import { search } from './ko/search'
import { store } from './ko/store'
const ko = {
  label: {
    common: common.label,
    customer: customer.label,
    claim: claim.label,
    customerCenter: customerCenter.label,
    error: error.label,
    main: main.label,
    myPage: myPage.label,
    order: order.label,
    product: product.label,
    search: search.label,
    store: store.label
  },
  message: {
    common: common.message,
    customer: customer.message,
    claim: claim.message,
    customerCenter: customerCenter.message,
    error: error.message,
    main: main.message,
    myPage: myPage.message,
    order: order.message,
    product: product.message,
    search: search.message,
    store: store.message
  },
  backend: {
    common: common.backend,
    customer: customer.backend,
    claim: claim.backend,
    customerCenter: customerCenter.backend,
    error: error.backend,
    main: main.backend,
    myPage: myPage.backend,
    order: order.backend,
    product: product.backend,
    search: search.backend,
    store: store.backend
  }
}

export default ko
