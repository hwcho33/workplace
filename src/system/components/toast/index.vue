<template>
  <transition name="fade">
    <div v-show="visible" :class="['toast', `toast-${position}`]" :style="`${position}: ${positionValue}px`">
      <div class="toast-content">
        {{ content }}
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import type { ToastOptions } from '@/types/components'
export default defineComponent({
  setup() {
    const state: ToastOptions = reactive({
      content: '',
      delay: 0,
      position: '',
      positionValue: 0
    })

    const visible = ref<boolean>(false)
    let timer

    const close = () => {
      clearTimeout(timer)
      visible.value = false
      timer = null
    }

    const open = () => {
      if (timer) clearTimeout(timer)

      visible.value = true
      timer = setTimeout(close, state.delay)

      return close
    }

    return {
      ...toRefs(state),
      visible,
      open,
      close
    }
  }
})
</script>

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;

.toast {
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  z-index: 100;

  // desktop
  #desktop & {
    right: rem(40);
    justify-content: flex-end;

    &-bottom {
      bottom: rem(40);
    }
  }

  &-top {
    top: rem(10);
  }

  &-bottom {
    bottom: rem(44);
  }
  .toast-content {
    text-align: center;
    padding: rem(16) rem(20);
    font-size: rem(14);
    font-weight: 400;
    line-height: 1.3;
    color: #fff;
    word-break: break-all;
    background-color: rgba(63, 63, 63, 0.95);
    border-radius: rem(12);
    max-width: rem(358);
    box-sizing: border-box;
    backdrop-filter: blur(rem(2));
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
