```html
<div class="mb-24">
  <div class="text-amber-200 bg-neutral pa-3 text-3xl">
    Bounce 애니메이션
  </div>
  <div>
    <button class="text-xl mt-5 mb-5" @click="bounce = !bounce">
      클릭하세요
    </button>
    <div class="mt-3">
      <Transition name="bounce">
        <p class="text-center" v-if="bounce">애니매이션 등장</p>
      </Transition>
    </div>
  </div>
</div>

<script lang="ts" setup>
  import { ref } from 'vue'
  const bounce = ref(false)
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
```