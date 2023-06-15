```html
<div class="mb-24">
  <div class="text-amber-200 bg-neutral pa-3 text-3xl">
    Nested Fade 애니매이션
  </div>
  <p class="text-2xl">
    Nested 된 div 각각에 Style Animation 을 주었고, duration attr 을 통해서
    진입, 진출에 대한 딜레이를 정할 수 있다.
  </p>
  <div class="mb-24">
    <button class="text-xl mt-5 mb-5" @click="show = !show">
      클릭하세요
    </button>
    <Transition :duration="{ enter: 500, leave: 1000 }" name="nested">
      <div v-if="show" class="outer">
        <div class="inner">안녕</div>
      </div>
    </Transition>
  </div>
</div>

<script lang="ts" setup>
  import { ref } from 'vue'
  const show = ref(false)
</script>

<style lang="scss" scoped>
.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}

.inner {
  background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* 부모 엘리먼트의 지연된 진출 */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* 중첩 셀렉터를 사용하여 중첩(자식) 엘리먼트를 트랜지션할 수도 있습니다. */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* 중첩된(자식) 엘리먼트의 지연된 진입 */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
    중첩된 불투명도 트랜지션을 처리할 때 Chrome 96 버그 해결 핵.
    버그가 수정된 다른 브라우저나 Chrome 99+에서는 필요하지 않습니다.
  */
  opacity: 0.001;
}
</style>
```