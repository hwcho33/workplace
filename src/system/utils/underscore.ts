import { isObject } from './is'

/**
 * @description
 * 매개변수 ms의 milisecond 값 기준 setTimeout
 *
 * @example
 * ```ts
 * delay(3000)
 * ```
 *
 * @return
 * ```ts
 * new Promise(resolve => setTimeout(resolve, 3000))
 * ```
 */
export function delay(ms = 1000): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src
}

export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = ''
  for (const key in obj) {
    parameters += `${key}=` + encodeURIComponent(obj[key]) + '&'
  }
  parameters = parameters.replace(/&$/, '')

  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters
}

export function pureObject(src: any): any {
  if (!src) {
    return null
  }

  try {
    return JSON.parse(JSON.stringify(src))
  } catch (e) {
    console.error(e)
    return null
  }
}

export function newWindow(url: string): void {
  const pop: any = window.open(url)

  try {
    pop.focus()
  } catch (e) {
    console.error(e)
    alert(`팝업 연결에 실패했습니다. ${e}`)
  }
}
