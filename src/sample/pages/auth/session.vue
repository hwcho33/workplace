<template>
  <div class="text-nm">
    <div class="text-amber-200 bg-neutral pa-3 text-3xl">Keycloak 연동 샘플</div>
    <section class="mt-2">
      <p>본 페이지는 Keycloak 연동 샘플입니다.</p>
      <input v-model="username" placeholder="id" class="px-7 py-5 ma-1 border-rounded rounded text-black bg-white" />
      <input
        v-model="password"
        placeholder="password"
        class="px-7 py-5 ma-1 border-rounded rounded text-black bg-white"
      />
      <button
        class="px-7 py-4 ma-1 border-none rounded inline-block bg-blue-400 text-white cursor-pointer hover:bg-blue-500 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"
        @click="login"
      >
        로그인
      </button>
      <button
        class="px-7 py-4 ma-1 border-none rounded inline-block bg-blue-400 text-white cursor-pointer hover:bg-blue-500 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"
        @click="logout"
      >
        로그아웃
      </button>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { CONTENT_TYPE } from '@/enums/http'
import { httpRequest } from '@/utils/request'

let username = ref('test')
let password = ref('test')

const requestAuth = httpRequest({
  headers: {
    'Content-Type': CONTENT_TYPE.JSON,
    'X-Requested-With': 'XMLHttpRequest'
  }
})

function reset() {
  username.value = ''
  password.value = ''
}

function login() {
  requestAuth
    .post({
      url: '/echo-server/login',
      data: {
        username: username.value,
        password: password.value
      }
    })
    .then(res => {
      console.info('### res =>', res)
      reset()
    })
    .catch(err => {
      console.info('### err =>', err)
      console.info(err.response.data)
    })
}

function logout() {
  requestAuth
    .post({
      url: '/echo-server/logout'
    })
    .then(res => {
      console.info('### res =>', res)
    })
    .catch(err => {
      console.info(err.response.data)
    })
}
</script>
