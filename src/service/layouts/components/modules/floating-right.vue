<template>
  <aside class="floating-right-wrap" :class="{ [injectClass]: true }">
    <a href="#" class="chatbot">
      <span class="blind">챗봇</span>
    </a>
    <button type="button" class="btn-top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
      <span class="blind">페이지 상단으로 이동</span>
    </button>
  </aside>
</template>

<script setup lang="ts">
import { useUiLayoutStore } from '~/store'
const uiLayoutStore = useUiLayoutStore()
const injectClass = computed(() => uiLayoutStore.floatingRightClass)
</script>

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;

//공통 오른쪽 하단 고정 버튼
.floating-right-wrap {
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s ease(out-expo);
  bottom: rem(40);
  line-height: 0;
  position: fixed;
  right: rem(12);
  width: rem(50);
  z-index: 30;
  @include safe-area;

  a,
  button {
    background-color: var(--white);
    background-position: 50%;
    background-repeat: no-repeat;
    border-radius: rem(50);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: inline-block;
    height: rem(50);
    vertical-align: top;
    width: rem(50);

    &.chatbot {
      background-image: url('/images/icons/common/icon-chatbot.svg');
      background-size: rem(36);
    }

    &.btn-top {
      background-image: url('/images/icons/common/icon-arrow-top.svg');
      background-size: rem(20);
      height: 0;
      opacity: 0;
      transition: all 0.3s;
    }
  }

  // 공통
  button {
    border: 0;
    cursor: pointer;
    padding: 0;
  }

  .blind {
    @include blind;
  }

  .scroll-up ~ &,
  .scroll-down ~ & {
    .btn-top {
      height: rem(50);
      margin-top: rem(16);
      opacity: 1;
    }
  }

  .bottom-nav-wrap ~ & {
    bottom: rem(70);
  }

  .scroll-down ~ .bottom-nav-wrap ~ & {
    transform: translate3d(0, 5.5rem, 0);
  }

  &.has-bottom {
    bottom: rem(100);
  }

  // desktop
  #desktop & {
    right: rem(40);
    &.has-bottom {
      bottom: rem(40);
    }
  }
}
</style>
