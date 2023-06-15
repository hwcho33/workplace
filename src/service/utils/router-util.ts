import type { RouteMeta } from 'vue-router'

export const meta = (payload?: RouteMeta) => {
  return payload ? { layout: 'default', ...payload } : { layout: 'default' }
}

export function routerMapper({ name, path, meta }: any) {
  return { name, path, meta }
}
