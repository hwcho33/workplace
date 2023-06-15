// dependencies
import axios from 'axios'
import qs from 'qs'
import { cloneDeep } from 'lodash-es'

// utils
import { AxiosCanceler } from './cancle'
import { isFunction } from '@/utils/is'
import { CONTENT_TYPE, METHOD } from '@/enums/http'
import { callMockData } from './mock'

// types
import type { InternalAxiosRequestConfig, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { UploadFileParams, RequestOptions, Result } from '@/types/request'
import type { CreateAxiosOptions } from './transform'

/**
 * @description: axios module
 */
export class AxiosModule {
  private axiosInstance: AxiosInstance
  private readonly options: CreateAxiosOptions

  constructor(options: CreateAxiosOptions) {
    this.options = options
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  // create axios instance
  private createAxios(config: CreateAxiosOptions): void {
    this.axiosInstance = axios.create(config)
  }

  // get transform objcect(create axios options object)
  private getTransform() {
    const { transform } = this.options
    return transform
  }

  // return axios instance
  getAxios(): AxiosInstance {
    return this.axiosInstance
  }

  // reconfig axios
  configAxios(config: CreateAxiosOptions) {
    if (!this.axiosInstance) {
      return
    }
    this.createAxios(config)
  }

  // set default axios request header
  setHeader(headers: any): void {
    if (!this.axiosInstance) {
      return
    }
    Object.assign(this.axiosInstance.defaults.headers, headers)
  }

  private setupInterceptors() {
    const transform = this.getTransform()

    if (!transform) {
      return
    }

    const { requestInterceptors, requestInterceptorsCatch, responseInterceptors, responseInterceptorsCatch } = transform

    const axiosCanceler = new AxiosCanceler()

    // Request interceptor configuration processing
    this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      // If cancel repeat request is turned on, then cancel repeat request is prohibited
      // @ts-ignore
      const { ignoreCancelToken } = config.requestOptions
      const ignoreCancel =
        ignoreCancelToken !== undefined ? ignoreCancelToken : this.options.requestOptions?.ignoreCancelToken

      !ignoreCancel && axiosCanceler.addPending(config)
      if (requestInterceptors && isFunction(requestInterceptors)) {
        config = requestInterceptors(config, this.options)
      }
      return config
    }, undefined)

    // request interceptor error capture
    requestInterceptorsCatch &&
      isFunction(requestInterceptors) &&
      this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch)

    // response result interceptor processing
    this.axiosInstance.interceptors.response.use((res: AxiosResponse<any>) => {
      res && axiosCanceler.removePending(res.config)
      if (responseInterceptors && isFunction(responseInterceptors)) {
        res = responseInterceptors(res)
      }
      return res
    }, undefined)

    // response result interceptor error capture
    responseInterceptorsCatch &&
      isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(undefined, error => {
        // @ts-ignore
        return responseInterceptorsCatch(this.axiosInstance, error)
      })
  }

  // file upload
  uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
    const formData = new window.FormData()
    const customFilename = params.name || 'file'

    if (params.filename) {
      formData.append(customFilename, params.file, params.filename)
    } else {
      formData.append(customFilename, params.file)
    }

    if (params.data) {
      Object.keys(params.data).forEach(key => {
        const value = params.data![key]
        if (Array.isArray(value)) {
          value.forEach(item => {
            formData.append(`${key}[]`, item)
          })
          return
        }
        formData.append(key, params.data![key])
      })
    }

    return this.axiosInstance.request<T>({
      ...config,
      method: METHOD.POST,
      data: formData,
      headers: {
        'Content-Type': CONTENT_TYPE.FORM_DATA,
        ignoreCancelToken: true
      }
    })
  }

  // support formData
  supportFormData(config: InternalAxiosRequestConfig) {
    const headers = config.headers || this.options.headers
    const contentType = headers?.['Content-Type'] || headers?.['content-type']

    if (
      contentType !== CONTENT_TYPE.FORM_URLENCODED ||
      !Reflect.has(config, 'data') ||
      config.method?.toUpperCase() === METHOD.GET
    ) {
      return config
    }

    return {
      ...config,
      data: qs.stringify(config.data, { arrayFormat: 'brackets' })
    }
  }

  get<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
    successHandling?: Function,
    errorHandling?: Function
  ): Promise<T> {
    return this.request({ ...config, method: METHOD.GET }, options, successHandling, errorHandling)
  }

  post<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
    successHandling?: Function,
    errorHandling?: Function
  ): Promise<T> {
    return this.request({ ...config, method: METHOD.POST }, options, successHandling, errorHandling)
  }

  put<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
    successHandling?: Function,
    errorHandling?: Function
  ): Promise<T> {
    return this.request({ ...config, method: METHOD.PUT }, options, successHandling, errorHandling)
  }

  patch<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
    successHandling?: Function,
    errorHandling?: Function
  ): Promise<T> {
    return this.request({ ...config, method: METHOD.PATCH }, options, successHandling, errorHandling)
  }

  delete<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
    successHandling?: Function,
    errorHandling?: Function
  ): Promise<T> {
    return this.request({ ...config, method: METHOD.DELETE }, options, successHandling, errorHandling)
  }

  request<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
    successHandling?: Function,
    errorHandling?: Function
  ): Promise<T> {
    // mock test 모드 작동
    const { VITE_MODE } = import.meta.env

    // .env 파일 기준 mode 확인
    if (config.url?.includes('test***') || VITE_MODE === 'test') {
      return new Promise(resolve => {
        resolve(callMockData(String(config.url)))
      })
    }

    let conf = cloneDeep(config) as CreateAxiosOptions
    const transform = this.getTransform()

    const { requestOptions } = this.options
    const opt: RequestOptions = Object.assign({}, requestOptions, options)

    const { beforeRequestHook, requestCatchHook, transformResponseHook } = transform || {}

    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt)
    }

    conf.requestOptions = opt

    conf = this.supportFormData(conf)
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          if (transformResponseHook && isFunction(transformResponseHook)) {
            try {
              const ret = transformResponseHook(res, opt)
              resolve(ret)

              if (successHandling) {
                successHandling(res)
              }
            } catch (err) {
              reject(err || new Error('requet error'))
            }
            return
          }
          resolve(res as unknown as Promise<T>)
        })
        .catch((e: any) => {
          if (errorHandling) {
            errorHandling(e)
          }
          if (requestCatchHook && isFunction(requestCatchHook)) {
            reject(requestCatchHook(e, opt))
          }
          if (e.response?.data?.data) {
            resolve(e.response.data)
            return
          } else {
            if (axios.isAxiosError(e)) console.error(e)
            reject(e)
          }
        })
    })
  }
}
