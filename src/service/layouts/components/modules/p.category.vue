<template>
  <div class="header-category-wrap">
    <button type="button" :class="['btn-category', { toggleCategory }]" @click="toggleCategory = !toggleCategory">
      <span class="blind">카테고리 메뉴</span>
    </button>
    <div class="header-category-detail" v-if="toggleCategory">@카테고리 메뉴 상세영역</div>
  </div>
</template>

<script setup lang="ts">
const toggleCategory = ref(false)
</script>

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/layouts/components/scss/mixin' as *;
.header-category-wrap {
  bottom: rem(-62);
  position: absolute;
  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
  }
  .blind {
    @include blind;
  }
  .btn-category {
    background: #dc0a0a url('/images/icons/common/icon-menu.svg') no-repeat 50% 50%;
    background-size: rem(24);
    height: $pc-header-menu-height;
    width: rem(52);

    img {
      height: rem(24);
      width: rem(24);
    }
  }

  .header-category-detail {
    position: absolute;
    width: rem(1200);
  }
  .scroll-up &,
  .scroll-down & {
    height: rem(62);
    left: 0;
    top: 0;
  }
}
</style>
