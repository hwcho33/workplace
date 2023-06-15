<br />

# 함수 작성법
- 최상단 함수, 유틸리티
  - 함수 선언식
- 내장 함수
  - 함수 표현식
- 예시

```ts
function outerFunction(a: number) {
  const innerFunction = () => {
    return 5
  }
  
  return a + innerFunction()
}
```

<br /><br /><br /><br />

# .vue 파일 내부 작성 순서
1. HTML
2. Script
    1. 의존성 `(dependencies)`
    2. import
        1. 프레임워크 내장 모듈 `(utils, modules, functions, .ts파일)`
        2. 타입스크립트 관련 모듈 `(types, enums, interface, class)`
        3. 컴포넌트 `(components)`
    3. 변수 및 상수 `(variables)`
    4. 뷰 내장 메서드 `(vue method)`
    5. 라이프 사이클 훅 `(life cycle hook)`
    6. 내부 함수 `(functions)`
3. SCSS

<br /><br />

```html
<template>
  <div class="context">
    <Contents />
  </div>
</template>

<script lang="ts" setup>
// 1. 의존성 (dependencies)
import { Ref } from 'vue'

// 2. 프레임워크 내장 모듈 (utils, modules, functions, .ts file)
import { request } from '@/utils/request'

// 3. 타입스크립트 관련 모듈 (types, enums, interface, class)
import { ListInfomation } from '~/pages/types'

// 4. 컴포넌트 (components)
import Contents from '~/pages/components/contents/index.vue'

// 5. 변수 및 상수 (variables)
const money = ref(5500)
const a = 1
const b = ref(2)
const obj = reactive({ count: 0 })
let workList: Ref<ListInfomation[]> = ref<any>([])

// 6. 생명 주기 함수 (life cycle hooks)
onMounted(() => {
  request
    .post({
      url: '/test***/publishingList'
    })
    .then(res => {
      workList.value = res.data
    })
})

// 7. Vue 내장 메서드
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)

watchEffect(() => {
  console.log(count)
})

provide('pocketMoney', money)

defineExpose({ a, b })

// 8. 내부 함수 (functions)
function outerFunction(a: number) {
  const innerFunction = () => {
    return 5
  }
  
  return a + innerFunction()
}
</script>

<style lang="scss" scoped>
.context {
  text-align: left;
  margin: 0 auto;
}
</style>
```
