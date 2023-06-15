import { AxiosError, AxiosInstance } from 'axios'

export class AxiosRetry {
  async retry(axiosInstance: AxiosInstance, error: AxiosError) {
    // @ts-ignore
    const { config } = error.response
    const { waitTime, count } = config?.requestOptions?.retryRequest
    config.__retryCount = config.__retryCount || 0
    if (config.__retryCount >= count) {
      return Promise.reject(error)
    }
    config.__retryCount += 1

    await this.delay(waitTime)
    return await axiosInstance(config)
  }

  private delay(waitTime: number) {
    return new Promise(resolve => setTimeout(resolve, waitTime))
  }
}
