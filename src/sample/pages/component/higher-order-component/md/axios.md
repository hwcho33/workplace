**HOC(High order Component)** 를 기준으로 작성한 예시 입니다. 

일반적인 **Axios** 사용은 별도 가이드 작성하였으며, **HOC** 는 하나의 **디자인 패턴** 임을 참고하여 필요한 경우 사용하시기 바랍니다.

하위 **Axios** 예제의 경우 **HOC** 와 관련된 설명외 **API** 사용법 위주로 작성이 됩니다.

## with-axios.vue
 
**HOC** 컴포넌트 중 **재사용** 이 되는 **컴포넌트** 입니다.

우리는 **setup-axios** 에서 해당 컴포넌트에 필요한 **프로퍼티** 들을 **Props** 로 전달하여 각 컴포넌트를 완성시킵니다.

결과적으로, **with-axios** 컴포넌트는 **Props** 로 전달된 값들을 뿌려주는 역할만 한다고 이해하시면 됩니다.

```html
<template>
  <div class="border-dashed b-6 w-285 pa-4">
    <div class="display-flex">
      <p class="font-bold text-5 mr-lg w-30 h-8">- {{ method }}</p>
    </div>
    <button class="px-7 py-4 ma-1 border-none rounded inline-block bg-blue-400 text-white cursor-pointer hover:bg-blue-500 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50" @click="callApi">api 호출하기</button>
    <div class="color-green font-bold mt-3">{{ stateMessage }}</div>
    <div class="bg-orange-400 w-270 rounded-2 px-4 py-6 mb-3 ml-1 text-white">
      {{ response }}
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Axios',
  props: {
    response: Object,
    stateMessage: String,
    method: String,
    callApi: Function as PropType<() => {}>
  }
})
</script>
```

## config-axios.ts

**config-axios** 파일에서 실제로 **API** 를 호출하고 응답된 값들을 **재사용 컴포넌트** 에 전달하면 됩니다.

본 프로젝트에서 **API** 호출을 위해서 **httpRequest** 을 통해 **request** 모듈을 만듭니다.

**AS-IS** 에서 **instance** 에 처음부터 **nsaxios** 로 **wrapping** 하여 사용했던것과 좀 다른 방식으로 진행됩니다.

**AS-IS** 에서 **post** 만 사용했던것과 달리 **RESTFUL** 방식을 도입함에 따라 **method** 별로 다른 **URL** 이 필요하기 때문입니다.

실제로 적용이 필요한 경우 각 **API** 별로 **config** 객체에 필요한 정보를 담은 후 **request** 를 통해서 인자로 전달하면 됩니다.

```ts
// types
import type { RequestOptions } from '#/request'
import type { AxiosRequestConfig } from 'axios'

// utils
import { httpRequest } from '@/utils/request'

// request 객체 초기 세팅 하는 부분
const request = httpRequest({
  baseURL: 'https://reqres.in/api'
})

/**
 * 실제로 사용 시 용도에 맞춰서 config 객체를 생성하여 정보를 담은 후 request 인자로 넘겨주면 됩니다.
 */
export const getConfig = {
  url: '/users',
  method: 'get',
  params: { page: 2 }
}

export const postConfig = {
  url: '/users',
  data: {
    name: 'morpheus',
    job: 'leader'
  },
  method: 'post'
}

export const putConfig = {
  url: '/users/2',
  data: {
    name: 'morpheus',
    job: 'leader'
  },
  method: 'put'
}

export const deleteConfig = {
  url: '/users/2',
  method: 'delete'
}

/**
 * config: url, method 등 정보를 담은 객체
 * options: 실제 RequestOptions 설정 중 변경이 필요한 경우 객체를 만들어 전달(deepMerge 적용하여 작성한 요소만 Merge 됨)
 * successHandling: 사용 용도 별 response 를 전달받아 실행할 동작을 만들어 작성
 * errorHandling: 에러 발생시 동작을 만들어 작성
 */
export const hocSample = {
  get: (
    config: AxiosRequestConfig,
    options?: RequestOptions,
    successHandling?: Function,
    errorHandling?: Function
  ) => {
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

  put: (
    config: AxiosRequestConfig,
    options?: RequestOptions,
    successHandling?: Function,
    errorHandling?: Function
  ) => {
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
```
## setup-axios.ts

해당 파일에서 실제로 **axios** 호출 후 응답을 가공하는 페이지 이다.

**requestApi** 함수를 통해 **API** 호출을 진행하며 이러한 **requestAPI** 를 호출하기 위한 함수를 **callApi** 로 정의하여 **Props** 로 내려준다.

```ts
// types
import type { DefineComponent } from 'vue'
import type { RequestOptions } from '#/request'
import type { AxiosRequestConfig } from 'axios'

// ts files
import { hocSample } from './config-axios'

// dependencies
import { stringify } from 'qs'
import _ from 'lodash-es'

/**
 * 해당 컴포넌트가 받는 Component 생성시 필요한 정보의 타입을 정의한다.
 */
export interface AxiosComponent {
  wrappedComponent: DefineComponent
  config: AxiosRequestConfig
  requestOption?: RequestOptions
}

/**
 * 상위 컴포넌트에서 AxiosComponent 타입의 인자를 전달받고, 해당 인자를 토대로 axios setup 을 구성한다.
 */
export default function (axios: AxiosComponent) {
  return {
    name: 'SetupAxios',

    setup() {
      // response, stateMessage 등 반응형 변수 선언
      const response = ref<object>({})
      const stateMessage = ref<string>(****)

      // 성공 시 Callback 함수 
      const successHandling = (res: any) => {
        stateMessage.value = **${res.config.url}**
        if (res && _.isEmpty(res.config.params) === false) {
          // stringify 를 통해서 params 를 QueryString 으로 변환해준다.
          // 관련된 문서를 참고 https://github.com/ljharb/qs
          stateMessage.value += **?${stringify(res.config.params)}**
        }
        stateMessage.value += ** (${res.status})**
        response.value = res
      }

      const errorHandling = () => {
        console.error('Axios Error')
      }

      // 실제 API 호출
      async function requestApi(
        config: AxiosRequestConfig,
        requestOption?: RequestOptions
      ) {
        await hocSample[config.method as string](
          config,
          requestOption,
          successHandling,
          errorHandling
        )
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
```

## example
