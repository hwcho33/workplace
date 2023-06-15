import type { AxiosResponse } from 'axios'
import type { AxiosTransForm, CreateAxiosOptions } from './module/transform'
import type { RequestOptions, Result } from '@/types/request'

import { METHOD, CONTENT_TYPE } from '@/enums/http'
import { formatRequestDate, joinTimestamp } from './module/helper'
import { AxiosModule } from './module'
import { AxiosRetry } from './module/retry'
import { cloneDeep } from 'lodash-es'
import { deepMerge, setObjToUrlParams } from '@/utils/underscore'
import { isString } from '@/utils/is'

const transform: AxiosTransForm = {
  /**
   * @description response 데이터 변형 훅입니다. (데이터 포맷이 의도된 것과 다르면 에러 발생)
   */
  transformResponseHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { isTransformResponse, isReturnNativeResponse } = options

    if (isReturnNativeResponse) {
      return res
    }

    if (!isTransformResponse) {
      return res.data
    }

    if (!res) {
      throw new Error('api request has been failed')
    }

    const { data } = res

    return data
  },

  beforeRequestHook: (config, options) => {
    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true, urlPrefix } = options

    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`
    }

    const params = config.params || {}
    const data = config.data || false
    formatDate && data && !isString(data) && formatRequestDate(data)

    if (config.method === METHOD.GET) {
      if (!isString(params)) {
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false))
      } else {
        config.url = config.url + params + `${joinTimestamp(joinTime, true)}`
        config.params = undefined
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params)

        if (
          Reflect.has(config, 'data') &&
          config.data &&
          (Object.keys(config.data).length > 0 || config.data instanceof FormData)
        ) {
          config.data = data
          config.params = params
        } else {
          config.data = params
          config.params = undefined
        }

        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(config.url as string, Object.assign({}, config.params, config.data))
        }
      } else {
        config.url = `${config.url}${params}` // config.url + params
        config.params = undefined
      }
    }

    return config
  },

  /**
   * @description request 인터셉터 처리
   */
  requestInterceptors: (config, _options) => {
    return config
  },

  /**
   * @description response 인터셉터 처리
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res
  },

  /**
   * @description response 에러 발생 시 핸들링 하는 메서드
   */
  responseInterceptorsCatch: (axiosInstance: AxiosResponse, error: any) => {
    const { config } = error || {}
    const err: string = error?.toString?.() ?? ''

    let errMessage = ''

    try {
      if (err?.includes('Network Error')) {
        errMessage = 'network error'
      }

      if (errMessage) {
        return Promise.reject(error)
      }
    } catch (error) {
      // throw new Error(error as unknown as string)
      throw new Error(error as string)
    }

    const retryRequest = new AxiosRetry()
    const { isOpenRetry } = config.requestOptions.retryRequest

    config.method?.toUpperCase() === METHOD.GET &&
      isOpenRetry && // @ts-ignore: axiosInstance 타입이 AxiosResponse라서 type error 발생
      retryRequest.retry(axiosInstance, error)

    return Promise.reject(error)
  }
}

/**
 * @description axios 객체 실제 생성되는 부분
 * @param opt
 */
export function createNewAxios(opt?: Partial<CreateAxiosOptions>) {
  return new AxiosModule(
    // for default (기본 설정)
    deepMerge(
      {
        // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
        authenticationScheme: '',

        timeout: 10 * 1000,

        // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED } // form data 포맷인 경우

        headers: {
          'Content-Type': CONTENT_TYPE.JSON
          // 'Access-Control-Allow-Origin': '*'
        }, // json 포맷

        withCredentials: false, // include http only cookies
        transform: cloneDeep(transform), // 데이터를 처리하는 메서드
        baseURL: '', // base interface address
        // default settings
        requestOptions: {
          // 주어진 requestOptions 설정에 따라 속성 재정의가 가능합니다.
          joinPrefix: true, // add prefix to url by default
          isReturnNativeResponse: false, // use this property when you need to get response headers
          isTransformResponse: true, // need to process the returnd data
          joinParamsToUrl: false, // add parameters to the url when post request
          formatDate: true, // format submit parameter time
          // errorMessageMode: 'message', // message type
          apiUrl: '', // interface address
          urlPrefix: '', // interface splicing address
          joinTime: false, // whether to add timestamp
          ignoreCancelToken: false, // 중복 request 무시
          withToken: false, // request에 token 포함 여부
          retryRequest: {
            isOpenRetry: true,
            count: 5,
            waitTime: 100
          }
        }
      },

      opt || {}
    )
  )
}
