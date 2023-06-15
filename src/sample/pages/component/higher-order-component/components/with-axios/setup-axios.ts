// types
import type { RequestOptions } from '@/types/request'
import type { AxiosRequestConfig } from 'axios'

// ts files
import { sample } from './config-axios'

// dependencies
import qs from 'qs'
import _ from 'lodash-es'

export interface AxiosComponent {
  wrappedComponent: Component
  config: AxiosRequestConfig
  requestOption?: RequestOptions
}

export default function (axios: AxiosComponent): Component {
  return {
    name: 'SetupAxios',

    setup() {
      const response = ref<object>({})
      const stateMessage = ref<string>(``)
      const successHandling = (res: any) => {
        stateMessage.value = `${res.config.url}`
        if (res && _.isEmpty(res.config.params) === false) {
          stateMessage.value += `?${qs.stringify(res.config.params)}`
        }
        stateMessage.value += ` (${res.status})`
        response.value = res
      }

      const errorHandling = (err: any) => {
        console.error('Axios Error')
        console.info('error =>', err)
      }

      async function requestApi(config: AxiosRequestConfig, requestOption?: RequestOptions) {
        // @ts-ignore
        await sample[config.method as string](config, requestOption, successHandling, errorHandling)
      }

      const callApi = () => {
        requestApi(axios.config, (axios.requestOption = {}))
      }

      return () =>
        h(axios.wrappedComponent, {
          response: response.value,
          stateMessage: stateMessage.value,
          method: axios.config.method,
          callApi
        })
    }
  }
}
