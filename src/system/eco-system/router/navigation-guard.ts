import { useUserStore } from '~/store'
import type { Router } from 'vue-router'

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, _, next) => {
    if (to.meta.requiresAuth) {
      const userStore = useUserStore()
      if (userStore.hasAuthenticated === false) {
        next({ name: 'login' })
      }
    }
    next()
  })
}
