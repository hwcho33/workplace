<template>
  <div class="text-nm">
    <div class="mb-30">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">소스 코드</div>
      <TokenMd />
    </div>

    <div class="mb-30">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">예제</div>
      <button
        class="px-7 py-4 ma-1 border-none rounded inline-block bg-blue-400 text-white cursor-pointer hover:bg-blue-500 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"
        @click="login"
      >
        로그인
      </button>
      <button
        class="px-7 py-4 ma-1 border-none rounded inline-block bg-blue-400 text-white cursor-pointer hover:bg-blue-500 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"
        @click="getExpiredTime"
      >
        정보 호출
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
// utils
import { useUserStore } from '~/store'

// components
import TokenMd from './md/token.md'

// 모듈 호출
const userStore = useUserStore()

function login() {
  // 유저 정보
  const payload = {
    username: 'testasdf',
    password: 'test1234'
  }
  userStore.login(payload) // 로그인 시도
}

function getExpiredTime() {
  console.info(userStore.getExpiredTime)
}
</script>
