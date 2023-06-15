<template>
  <div class="border-dashed b-6 w-285 pa-4">
    <div class="display-flex">
      <p class="font-bold text-5 mr-lg w-30 h-8">- {{ method }}</p>
    </div>
    <button
      :data-name="method"
      class="px-7 py-4 ma-1 border-none rounded inline-block bg-blue-400 text-white cursor-pointer hover:bg-blue-500 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"
      @click="callApi"
    >
      api 호출하기
    </button>
    <div class="color-green font-bold mt-3">{{ stateMessage }}</div>
    <div class="bg-orange-400 w-270 rounded-2 px-4 py-6 mb-3 ml-1 text-black">
      <pre>
      {{ JSON.stringify(response, null, 4) }}
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Axios',
  props: {
    response: Object,
    stateMessage: String,
    method: String,
    callApi: Function as PropType<() => {}>
  }
})
</script>
