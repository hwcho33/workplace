<template>
  <div class="top-banner-wrap">
    <div class="top-banner-inner"><img src="/images/data/main/@main-top-event-01.png" alt="" /></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
.top-banner-wrap {
  background: var(--gray-900);
  position: relative;
  transition: top 0.5s ease(out-expo);
  z-index: 46;

  .top-banner-inner {
    margin: 0 auto;
    max-width: $breakpoint-tablet;
    min-height: rem(50);
    text-align: center;

    img {
      height: rem(50);
    }
  }
}
</style>
