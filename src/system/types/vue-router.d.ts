// This can be directly added to any of your `.ts` files like `router.ts`
// It can also be added to a `.d.ts` file, in which case you will need to add an export
// to ensure it is treated as a module
export {}

import 'vue-router'

interface HeaderItem {
  search?: boolean
  cart?: boolean
  home?: boolean
}

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    layout?: string
    title?: string
    headerItem?: HeaderItem
    footer?: boolean
    bottomNavi?: boolean
    fullLayout?: boolean
    headerOnlyLogo?: boolean
    // must be declared by every route
    // requiresAuth: boolean
  }
}
