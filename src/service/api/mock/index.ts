export * from './home'
export * from './auth'
export * from './publishing'
export * from './customer'
export * from './butlerwork0'

export const success = {
  code: 200,
  message: '',
  data: {},
  httpStatus: ''
}

export const fail = {
  code: null,
  message: null,
  data: null,
  httpStatus: null
}

export function mockResponse(data: any) {
  return {
    code: 200,
    message: '',
    data,
    httpStatus: ''
  }
}
