export const rootPath = '/v1/home'
export const customer = '/or/api/v1/cust'

export interface Response {
  code: number
  data: any
  httpStatus: string
  message: string
}

export interface ResponseData {
  resultCode: string
  resultMessage: string
  resultData?: any
}

export * from './main'
