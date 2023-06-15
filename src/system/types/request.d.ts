export type ErrorMessageMode = 'none' | 'modal' | 'message'

export interface RequestOptions {
  joinParamsToUrl?: boolean
  formatDate?: boolean
  isTransformResponse?: boolean
  isReturnNativeResponse?: boolean
  joinPrefix?: boolean
  urlPrefix?: string
  apiUrl?: string
  errorMessageMode?: ErrorMessageMode
  joinTime?: boolean
  ignoreCancelToken?: boolean
  withToken?: boolean
  retryRequest?: {
    isOpenRetry: boolean
    count: number
    waitTime: number
  }
}

export interface Result<T = any> {
  code: number
  type: 'success' | 'error' | 'warning'
  message: string
  result: T
}

export interface UploadFileParams {
  data?: Recordable
  name?: string
  file: File | Blob
  filename?: string
  [key: string]: any
}
