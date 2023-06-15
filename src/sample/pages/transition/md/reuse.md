```html
<-- 부모 -->
<div class="mb-24">
  <div class="text-amber-200 bg-neutral pa-3 text-3xl">Transition Hook</div>
  <p class="text-2xl">
    특정 Transition(Toggle-slide) 을 Slot 을 활용하여 재사용 가능하다.
  </p>
  <button class="text-xl mt-5 mb-5" @click="myTransition = !myTransition">
    클릭하세요
  </button>
  <div class="mb-24">
    <MyTransition>
      <p v-if="myTransition">재사용되었습니다.</p>
    </MyTransition>
  </div>
</div>

<script lang="ts" setup>
  import { ref } from 'vue'
  const myTransition = ref(false)
</script>ㄴ

<-- 자식 -->
<div class="mt-3">
  <Transition name="toggle-slide">
    <slot></slot>
  </Transition>
</div>


<script lang="ts" setup></script>

<style lang="scss" scoped>
/*
진입/진출 애니메이션은 다른 지속 시간과
타이밍 함수를 사용할 수 있습니다.
*/
.toggle-slide-enter-active {
  transition: all 0.3s ease-out;
}

.toggle-slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.toggle-slide-enter-from,
.toggle-slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
```