export interface NsApiResponse<T> {
  code: number
  data: { resultCode: string; resultMessage: string; resultData: T | null }
  httpStatus: string
  message: string
}
