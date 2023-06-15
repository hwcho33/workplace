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
