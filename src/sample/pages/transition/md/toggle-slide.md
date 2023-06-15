```html
<div class="mb-24">
  <div class="text-amber-200 bg-neutral pa-3 text-3xl">
    Toggle-Slide 애니매이션
  </div>
  <div>
    <button class="text-xl mt-5 mb-5" @click="toggle = !toggle">
      클릭하세요
    </button>
    <div class="border-dashed mt-3">
      <Transition name="toggle-slide">
        <p v-if="toggle">애니매이션 등장</p>
        <p v-else>애니매이션 퇴장</p>
      </Transition>
    </div>
  </div>
</div>

<script lang="ts" setup>
  import { ref } from 'vue'
  const toggle = ref(false)
</script>

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