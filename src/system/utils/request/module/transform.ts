import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestOptions, Result } from '@/types/request'

export interface CreateAxiosOptions extends InternalAxiosRequestConfig {
  authenticationScheme?: string
  transform?: AxiosTransForm
  requestOptions?: RequestOptions
}

export abstract class AxiosTransForm {
  beforeRequestHook?: (config: InternalAxiosRequestConfig, options: RequestOptions) => InternalAxiosRequestConfig

  transformResponseHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any

  requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>

  requestInterceptors?: (config: InternalAxiosRequestConfig, options: CreateAxiosOptions) => InternalAxiosRequestConfig

  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>

  requestInterceptorsCatch?: (error: Error) => void

  responseInterceptorsCatch?: (axiosInstance: AxiosResponse, error: Error) => void
}
