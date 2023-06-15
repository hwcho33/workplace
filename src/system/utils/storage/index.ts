// utils
import { LocalStorage, SessionStorage, MemoStorage } from './logic'

// modules
import type { Storage } from './logic'

/**
 * @description
 * 안전한 local storage accessor를 생성.
 * local storage를 사용할 수 없는 경우 inmemory storage를 생성
 *
 * @example
 * ```ts
 * const localStorage = generateStorage()
 * localStorage.set('someKey', 'someValue')
 * localStorage.get('someKey') // 'someValue'
 * ```
 */
export function generateStorage(): Storage {
  if (LocalStorage.canUse()) {
    return new LocalStorage()
  }
  return new MemoStorage()
}

/**
 * @description
 * session storage accessor를 생성.
 * session storage를 사용할 수 없는 경우 inmemory storage를 생성
 *
 * @example
 * ```ts
 * const sessionStorage = generateSessionStorage()
 * sessionStorage.set('someKey', 'someValue')
 * sessionStorage.get('someKey') // 'someValue'
 * ```
 */
export function generateSessionStorage(): Storage {
  if (SessionStorage.canUse()) {
    return new SessionStorage()
  }
  return new MemoStorage()
}

export type { Storage }
