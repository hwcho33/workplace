**Composable(컴포저블)** 은 **Composition API** 을 활용하여 **상태 저장 로직** 을 캡슐화 화고 재사용하는 함수이다.

이는 공식문서에서 설명하고 있습니다.

정리해서 말해보자면 **프론트앤드** 앱을 구축할 경우 여러 컴포넌트에서 효율적으로 같은 작업을 하기 위해 재사용이 필요한 함수들을 생성한다는 의미 입니다.

우리는 **Composition API** 를 사용하면서 가장 이점은 **반응형** 을 가지고 있기 떄문에 상태를 저장하고 캡슐화 한다는 말이 나온것입니다.

공식문서에서 나오는 **mouse** 예제 입니다.

```ts
// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

// 관례상, 컴포저블 함수 이름은 "use"로 시작합니다.
export function useMouse() {
  // 컴포저블로 캡슐화된 내부에서 관리되는 상태
  const x = ref(0)
  const y = ref(0)

  // 컴포저블은 시간이 지남에 따라 관리되는 상태를 업데이트할 수 있습니다.
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // 컴포저블은 또한 이것을 사용하는 컴포넌트의 수명주기에 연결되어
  // 사이드 이펙트를 설정 및 해제할 수 있습니다.
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // 관리 상태를 반환 값으로 노출
  return { x, y }
}
</script>

// index.vue
<script setup>
import { useMouse } from './mouse.js'

const { x, y } = useMouse()
</script>

<template>마우스 위치: {{ x }}, {{ y }}</template>
</script>
```
위 코드에서 볼 수 있듯이 **mouse** 의 x, y 좌표값은 **EventListener** 를 통해서 계속해서 변경됩니다.

이러한 값들을 반응형 ref 변수인 x,y 에 매핑한 후 반응형 상태 자체를 리턴해준다는 의미입니다.

이렇게 되면 실제 아래 index.vue 와 같이 마우스의 x,y 좌표가 필요한 경우 우리는 이 로직을 재사용 할 수 있게 됩니다.

단, 위와 같은 경우에는 **Vue Life Cycle** 에서 **Unmount** 되기 전에는 해당 반응형 변수가 계속해서 동작하므로 반드시 **Remove** 를 해줘야 한다는 부분이다.

이는 컴포저블이 아니더라도 필수적인 부분이기 떄문에 넘어가도록 한다.

더 자세한 예시와 mixin과의 차이는 아래 공식 문서를 참고 하시기 바랍니다.

- 공식문서 : (https://v3-docs.vuejs-korea.org/guide/reusability/composables.html)[https://v3-docs.vuejs-korea.org/guide/reusability/composables.html]