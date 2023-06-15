<template>
  <div id="trigger"></div>
</template>

<script setup lang="ts">
const emit = defineEmits(['intersect'])
let observe: IntersectionObserver
const options = {
  root: null,
  threshold: 0.1
}
const handleEntryIntersect = ([entry]) => {
  if (entry && entry.isIntersecting) {
    emit('intersect')
  }
}
onMounted(() => {
  try {
    // Trigger 가 기준이 될 Element
    const triggerElement = document.querySelector('#trigger') as HTMLDivElement
    /**
     * IntersectionObserver 를 통해 Viewport 에 도달했을때 handleEntryIntersect 함수 실행
     * 전달하는 options 의 threshold 를 통해 trigger 발동 정도 조정
     */
    observe = new IntersectionObserver(([entry]) => {
      handleEntryIntersect([entry])
    }, options)
    // observe 함수를 통해 triggerElement 를 감시
    observe.observe(triggerElement)
  } catch (e) {
    console.error(e)
  }
})

onUnmounted(() => {
  observe.disconnect()
})
</script>
