import { createRouter, createWebHistory } from 'vue-router'
import service from '~/router'
import sample from '#/router'
import publishing from '&/router'
import { createPermissionGuard } from './navigation-guard'

import type { App } from 'vue'
import type { Router } from 'vue-router'

export const router = createRouter({
  history: createWebHistory('/'),
  routes: [...service, ...sample, ...publishing],
  scrollBehavior() {
    return { top: 0 }
  }
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export function setupRouterGuard(router: Router) {
  createPermissionGuard(router)
}
