## index.vue(me)
```html
<template>
  <button class="px-7 py-4 ma-1 border-none rounded inline-block bg-blue-400 text-white cursor-pointer hover:bg-blue-500 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50" @click="giveMoney">손자에게 용돈 500원 더 주기</button>

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
```

## son.vue
```html
<template>
  <div class="mt-4 mr-4 border">
    <div class="text-amber-200 bg-neutral pa-3 text-3xl">아들 컴포넌트</div>
    <div class="px-4">
      <p>부모에서 직접 호출한 아들 컴포넌트입니다.</p>
      <p>잔액 - 1000원</p>
    </div>
  </div>
  <GrandSon />
</template>

<script lang="ts" setup>
import GrandSon from './grand-son.vue'
</script>
```

## grand-son.vue
```html
<template>
  <div class="mt-4 mr-4 border">
    <div class="text-amber-200 bg-neutral pa-3 text-3xl">손자 컴포넌트</div>
    <div class="px-4">
      <p>자식이 호출한 손자 컴포넌트입니다.</p>
      <p>잔액 - {{ money }}원</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const money = inject('pocketMoney')
</script>
```

## example
