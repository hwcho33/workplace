<template>
  <div class="border-dashed b-6 w-285 pa-4">
    <div class="mb-2">
      <button
        class="px-7 py-4 ma-1 border-none rounded inline-block bg-blue-400 text-white cursor-pointer hover:bg-blue-500 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"
        @click="increment"
      >
        증감시키기
      </button>
    </div>
    <div class="bg-orange-400 w-270 rounded-2 px-4 py-6 ml-1 mb-3 text-white">
      counter: <span class="text-orange-800">{{ counter }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Counter',
  props: {
    counter: Number, // counter 수치
    increment: Function as PropType<() => {}> // 증감 함수
  }
})
</script>
