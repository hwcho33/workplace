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
