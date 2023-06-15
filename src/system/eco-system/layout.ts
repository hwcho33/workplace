/**
 * @description: router meta layout mapper
 */
export function layoutMapper() {
  const route = useRoute()

  if (typeof route !== 'undefined' && route.hasOwnProperty('meta')) {
    return route.meta.layout
  }

  return 'default'
}
