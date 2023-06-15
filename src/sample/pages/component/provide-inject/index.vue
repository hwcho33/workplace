<template>
  <div class="text-nm">
    <div class="text-amber-200 bg-neutral pa-3 text-3xl">Provide / Inject</div>
    <p>
      컴포넌트 계층간 데이터를 전달해야 할 때
      <strong class="text-green-600 underline">props</strong>를 주로 사용합니다.<br />
      깊고 중첩된 구성 요소에서
      <strong class="text-green-600 underline">props/emit</strong>만으로 최상위 계층과 하위 계층의 통신은 어렵습니다.
    </p>
    <div class="text-left">
      <img alt="provide/inject" src="https://vuejs.org/assets/prop-drilling.11201220.png" class="w-50vw" />
    </div>
    <p>
      컴포넌트 구조가 깊고, 복잡한 경우에
      <strong class="text-green-600 underline">provide / inject</strong>를 사용하면 좋습니다.<br />
      다음 예제를 통해
      <strong class="text-green-600 underline">provide / inject</strong>를 구현했습니다.
    </p>
    <ExampleMd />

    <button
      class="px-7 py-4 ma-1 border-none rounded inline-block bg-blue-400 text-white cursor-pointer hover:bg-blue-500 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"
      @click="giveMoney"
    >
      손자에게 용돈 500원 더 주기
    </button>

    <SonComponent />
  </div>
</template>

<script lang="ts" setup>
import ExampleMd from './md/example.md'
import SonComponent from './components/son.vue'

const money = ref(5500)
function giveMoney(): void {
  money.value += 500
}
provide('pocketMoney', money)
</script>
