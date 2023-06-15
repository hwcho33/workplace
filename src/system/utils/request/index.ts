import { createNewAxios } from './logic'

// env api url
const { VITE_API_URL } = import.meta.env

/**
 * @description 별도 설정이 필요한 request 모듈
 *
 * @example
 * ```ts
 * import { httpRequest } from '@/utils/request'
 *
 * const request = httpRequest({
 *  baseURL: 'https://dummyjson.com'
 * })
 *
 * request.get({
 *  url: '/user',
 *  params: { page: 2 }
 * })
 * .then(res => {
 *  console.log(res)
 * })
 * .catch(err => {
 *  console.log(err)
 * })
 * ```
 */
export const httpRequest = (payload?: any) => {
  return payload ? createNewAxios({ ...payload }) : createNewAxios()
}

/**
 * @description 기본 설정만 이용하는 request 모듈
 * baseURL의 속성값은 .env파일에 있는 VITE_API_URL을 참조함
 *
 * @example
 * ```ts
 * import { request } from '@/utils/request'
 *
 * request.get({
 *  url: '/user',
 *  params: { page: 2 }
 * })
 * .then(res => {
 *  console.log(res)
 * })
 * .catch(err => {
 *  console.log(err)
 * })
 * ```
 */
export const request = httpRequest({
  baseURL: VITE_API_URL
})
