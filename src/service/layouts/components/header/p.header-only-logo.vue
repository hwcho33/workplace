<template>
  <header class="desktop-header-wrap only-logo">
    <div class="skip-nav-list">
      <a href="#container-wrap" class="skip-nav-item">본문바로가기</a>
    </div>

    <div class="header-main-wrap">
      <div class="header-main-inner">
        <h1 class="header-logo">
          <router-link to="/">
            <img src="/images/common/header-logo.svg" alt="NS홈쇼핑" />
          </router-link>
        </h1>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
onMounted(() => {
  console.info('>>pc-header')
})
</script>

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/layouts/components/scss/mixin' as *;

#desktop {
  .only-logo {
    &.desktop-header-wrap {
      position: sticky;
      top: 0;
      z-index: 5;

      // 공통
      button {
        background-color: transparent;
        border: 0;
        cursor: pointer;
        padding: 0;
      }

      .blind {
        @include blind;
      }

      .skip-nav-list {
        .skip-nav-item {
          background-color: #000;
          color: var(--white);
          height: rem(40);
          line-height: rem(40);
          position: fixed;
          text-align: center;
          top: -500px;
          width: 100%;
          z-index: 60;

          &:focus {
            top: 0;
          }
        }
      }

      .header-main-wrap {
        background-color: var(--white);
        border-bottom: 1px solid var(--gray-300);
        min-width: $pc-base-width;
      }

      .header-main-inner {
        align-items: center;
        display: flex;
        height: rem(61);
        justify-content: space-between;
        margin: 0 auto;
        width: $pc-base-width;

        .header-logo {
          flex: 0 0 35rem;

          img {
            height: rem(24);
            max-width: none;
          }
        }
      }

      ~ .container {
        min-height: calc(100vh - 6.2rem);
      }

      ~ .floating-right-wrap {
        display: none;
      }
    }
  }
}
</style>
