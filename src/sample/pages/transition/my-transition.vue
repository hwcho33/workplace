<template>
  <div class="mt-3">
    <Transition name="toggle-slide">
      <slot></slot>
    </Transition>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
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
