// types
import type { RequestOptions } from '@/types/request'
import type { AxiosRequestConfig } from 'axios'

// utils
import { httpRequest } from '@/utils/request'

// request 객체 초기 세팅 하는 부분
const request = httpRequest({
  baseURL: 'https://reqres.in/api'
})

export const sample = {
  get: (config: AxiosRequestConfig, options?: RequestOptions, successHandling?: Function, errorHandling?: Function) => {
    return request.get<void>(config, options, successHandling, errorHandling)
  },

  post: (
    config: AxiosRequestConfig,
    options?: RequestOptions,
    successHandling?: Function,
    errorHandling?: Function
  ) => {
    return request.post<void>(config, options, successHandling, errorHandling)
  },

  put: (config: AxiosRequestConfig, options?: RequestOptions, successHandling?: Function, errorHandling?: Function) => {
    return request.put<void>(config, options, successHandling, errorHandling)
  },

  delete: (
    config: AxiosRequestConfig,
    options?: RequestOptions,
    successHandling?: Function,
    errorHandling?: Function
  ) => {
    return request.delete<void>(config, options, successHandling, errorHandling)
  }
}
