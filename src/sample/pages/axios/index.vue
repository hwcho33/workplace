<template>
  <div class="text-nm">
    <div class="mb-20">
      <div data-name="title" class="text-amber-200 bg-neutral pa-3 text-xl">Cross Origin 테스트</div>
      <div>
        <button @click="onClickApiTest">api 호출</button>
        <br />
        <button @click="onClickApiTest2">api 호출2</button>
      </div>
    </div>
    <div class="mb-20">
      <div data-name="title" class="text-amber-200 bg-neutral pa-3 text-xl">Axios 모듈 사용 방법</div>
      <UseMd />
    </div>
    <div class="mb-20">
      <div data-name="title" class="text-amber-200 bg-neutral pa-3 text-xl">Options 설정</div>
      <OptionsMd />
      <p>
        옵션에 관한 자세한 정보는
        <a href="https://axios-http.com/kr/docs/req_config" rel="noopener noreferrer" target="_blank" class="text-blue">
          Axios
        </a>
        프로젝트 웹사이트를 참고하세요.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UseMd from './md/use.md'
import OptionsMd from './md/options.md'
import { httpRequest, request } from '@/utils/request'

const requestSample = httpRequest({ baseURL: 'https://reqres.in/api', withCredentials: false })

async function onClickApiTest() {
  await request.get({
    url: `/md/api/v1/sample/result-without-page`
  })
}

async function onClickApiTest2() {
  await httpRequest({ baseURL: '/' }).get({ url: '/md/api/v1/sample/result-without-page' })
}

onMounted(() => {
  requestSample
    .get({
      url: '/user', // target url
      params: { page: 2 } // query params
    })
    .then(res => {
      // 성공
      console.info(res)
    })
    .catch(err => {
      // 에러 발생
      console.error(err)
    })

  requestSample
    .post({
      url: '/user', // target url
      data: { name: 'morpheus', job: 'leader' } // data
    })
    .then(res => {
      // 성공
      console.info(res)
    })
    .catch(err => {
      // 에러 발생
      console.error(err)
    })
})
</script>
