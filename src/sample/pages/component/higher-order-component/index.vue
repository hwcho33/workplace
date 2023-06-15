<template>
  <div class="text-nm">
    <div class="text-amber-200 bg-neutral pa-3 text-3xl">Higher Order Component</div>
    <p>
      고차 컴포넌트(HOC, Higher)는 컴포넌트 로직을 재사용하기 위한 기술이며, HOC는 컴포넌트를 가져와 새로운 컴포넌트로
      반환해주는 함수입니다.
      <strong class="text-red">(Vue API가 아닌 디자인 패턴)</strong>
    </p>
    <p>다음은 Counter 컴포넌트로 만들어진 예시입니다.</p>

    <CounterMd />

    <div class="my-10">
      <CounterIncrementOne />
    </div>

    <div class="my-10">
      <CounterIncrementTwo />
    </div>

    <div class="my-10">
      <CounterIncrementFour />
    </div>

    <hr class="mt-20 b-6 color-gray" />
    <hr class="mb-20 b-6 color-gray" />

    <p>다음은 Axios 컴포넌트로 만들어진 예시입니다.</p>

    <AxiosMd />

    <div class="my-10">
      <GetSample />
    </div>
    <div class="my-10">
      <PostSample />
    </div>
    <div class="my-10">
      <PutSample />
    </div>
    <div class="my-10">
      <DeleteSample />
    </div>
  </div>
</template>

<script setup lang="ts">
// enums
import { METHOD } from '@/enums/http'

// ts
import setupCounter from './components/counter/setup-counter'
import setupAxios from './components/with-axios/setup-axios'

// components
import Counter from './components/counter/counter.vue'
import AxiosTemplate from './components/with-axios/with-axios.vue'

// md files
import CounterMd from './md/counter.md'
import AxiosMd from './md/axios.md'

// counter higher order components
const CounterIncrementOne = setupCounter({
  wrappedComponent: Counter as PropType<Component>,
  number: 1
})

const CounterIncrementTwo = setupCounter({
  wrappedComponent: Counter as PropType<Component>,
  number: 2
})

const CounterIncrementFour = setupCounter({
  wrappedComponent: Counter as PropType<Component>,
  number: 4
})

// axios higher order components
const GetSample = setupAxios({
  wrappedComponent: AxiosTemplate as PropType<Component>,
  config: {
    url: '/users',
    params: { page: 2 },
    method: METHOD.GET
  }
})

const PostSample = setupAxios({
  wrappedComponent: AxiosTemplate as PropType<Component>,
  config: {
    url: '/users',
    data: {
      name: 'morpheus',
      job: 'leader'
    },
    method: METHOD.POST
  }
})

const PutSample = setupAxios({
  wrappedComponent: AxiosTemplate as PropType<Component>,
  config: {
    url: '/users/2',
    data: {
      name: 'morpheus',
      job: 'leader'
    },
    method: METHOD.PUT
  }
})

const DeleteSample = setupAxios({
  wrappedComponent: AxiosTemplate as PropType<Component>,
  config: {
    url: '/users/2',
    method: METHOD.DELETE
  }
})
</script>
