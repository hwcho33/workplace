<template>
  <div>
    <button @click="toastHandler('상단 토스트 메시지', 2000, 'top')">토스트 상단</button>
    <hr />
    <button @click="toastHandler('하단 토스트 메시지', 2000, 'bottom')">토스트 하단</button>
  </div>
</template>

<script setup lang="ts">
import Toast from '@/components/toast'

const toastHandler = (content: string, delay: number, position: string) => {
  Toast({ content, delay, position })
}
</script>

<style></style>
