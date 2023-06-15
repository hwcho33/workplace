## index.vue
```html
<template>
  <div class="my-10">
    <CounterIncrementOne />
  </div>

  <div class="my-10">
    <CounterIncrementTwo />
  </div>

  <div class="my-10">
    <CounterIncrementFour />
  </div>
</template>

<script lang="ts">
import setupCounter from './components/setup-counter'
import Counter from './components/counter.vue'
import type { DefineComponent } from 'vue'

const CounterIncrementOne = setupCounter({
  wrappedComponent: Counter as PropType<DefineComponent>,
  number: 1
})

const CounterIncrementTwo = setupCounter({
  wrappedComponent: Counter as PropType<DefineComponent>,
  number: 2
})

const CounterIncrementFour = setupCounter({
  wrappedComponent: Counter as PropType<DefineComponent>,
  number: 4
})
</script>
```

## counter.vue
```html
<template>
  <div class="border-dashed b-6 w-115 pa-4">
    <div class="bg-orange-400 w-100 rounded-2 px-4 py-6 mb-3 text-white">
      counter: <span class="text-orange-800">{{ counter }}</span>
    </div>
    <button class="px-7 py-4 ma-1 border-none rounded inline-block bg-blue-400 text-white cursor-pointer hover:bg-blue-500 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50" @click="increment">증감시키기</button>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Counter',
  props: {
    counter: Number,
    increment: Function as PropType<() => {}>
  }
})
</script>
```

## setup-counter.ts
```ts
import type { DefineComponent } from 'vue'

export interface CounterComponent {
  wrappedComponent: DefineComponent
  number: number
}

export default function (counter: CounterComponent) {
  return {
    name: 'SetupCounter',

    setup() {
      const count = ref(0)

      function inc(value: number) {
        count.value += value
      }

      const increment = () => inc(counter.number)

      return () =>
        h(counter.wrappedComponent, { counter: count.value, increment })
    }
  }
}
```



## example
