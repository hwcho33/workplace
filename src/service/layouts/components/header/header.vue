<template>
  <header class="mo-header-wrap">
    <div class="header-main-wrap">
      <div class="main-inner-wrap">
        <h1 class="header-logo">
          <router-link to="/">
            <img src="/images/common/header-logo.svg" alt="NS홈쇼핑" />
          </router-link>
        </h1>

        <div class="left-wrap">
          <button class="btn" @click="$router.go(-1)">
            <img src="/images/icons/header/icon-arrow-back.svg" alt="이전 페이지로 이동" />
          </button>

          <a
            href="#"
            class="btn"
            v-if="$route.meta.headerItem !== undefined && $route.meta.headerItem.home !== undefined"
          >
            <img src="/images/icons/header/icon-home.svg" alt="홈 이동" />
          </a>
        </div>

        <div class="title-wrap" v-if="$route.meta.title">
          <h1>{{ $route.meta.title }}</h1>
        </div>

        <div
          class="right-wrap"
          v-if="
            $route.meta.headerItem === undefined ||
            $route.meta.headerItem.search !== false ||
            $route.meta.headerItem.cart !== false
          "
        >
          <button class="btn" v-if="$route.meta.headerItem === undefined || $route.meta.headerItem.search !== false">
            <img src="/images/icons/header/icon-search.svg" alt="검색" />
          </button>

          <button
            class="btn top-cart"
            v-if="$route.meta.headerItem === undefined || $route.meta.headerItem.search !== false"
          >
            <img src="/images/icons/header/icon-cart.svg" alt="장바구니" />
            <span class="cart-count">6</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/layouts/components/scss/mixin' as *;

.mo-header-wrap {
  background: var(--white);
  width: 100%;
  height: rem(48);
  z-index: 45;

  .header-main-wrap {
    position: fixed;
    top: 0;
    width: 100%;
    height: rem(48);
    background-color: var(--white);
    z-index: 45;
    .main-inner-wrap {
      align-items: center;
      display: flex;
      height: $mobile-header-main-height;
      justify-content: space-between;
      margin: 0 auto;
      max-width: $breakpoint-tablet;
      padding: 0 rem(10);

      .header-logo {
        display: none;
        padding: 0 rem(8);

        a {
          display: block;
          height: rem(18);
          width: rem(78.6);

          img {
            max-width: none;
            width: 100%;
          }
        }
      }

      .btn {
        align-items: center;
        background: none;
        border: none;
        display: flex;
        height: rem(36);
        justify-content: center;
        padding: 0;
        width: rem(36);

        + .btn {
          margin-left: rem(4);
        }
      }

      .left-wrap {
        position: relative;
        z-index: 1;
        display: flex;
      }

      .title-wrap {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        padding: 0 rem(86);
        align-items: center;
        justify-content: center;

        h1 {
          font-size: rem(18);
          padding: 0 rem(8);

          @include eline-clamp;
        }
      }

      .right-wrap {
        position: relative;
        display: flex;
        padding-left: rem(8);
        z-index: 2;
      }

      .top-cart {
        position: relative;

        .cart-count {
          align-items: center;
          background: var(--red-500);
          border-radius: 50%;
          color: var(--white);
          display: flex;
          font-size: rem(12);
          font-weight: 500;
          height: rem(16);
          justify-content: center;
          min-width: rem(16);
          padding: 0 rem(2);
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }

    .view-more-opened & {
      position: relative;
      z-index: 45;
    }
  }

  &.home {
    .main-inner-wrap {
      .header-logo {
        display: block;
      }

      .left-wrap,
      .title-wrap {
        display: none;
      }
    }
  }

  // === header interaction ===
  // home
  &.home:deep() {
    position: fixed;
    top: 0;
    .header-main-wrap {
      position: relative;
    }
  }

  &.home.scroll-up:deep() {
    transition: top 0.5s ease(out-expo);
    top: 0;
    ~ .top-menu-wrap {
      top: rem(48);
    }
  }

  &.home.scroll-down:deep() {
    transition: top 0.5s ease(out-expo);
    top: rem(-48);
    ~ .top-menu-wrap {
      top: 0;
    }
  }

  // top-banner + home
  .top-banner-wrap ~ &.home:deep() {
    position: relative;

    ~ .top-menu-wrap {
      position: sticky;
      top: 0;
    }
  }
  .top-banner-wrap ~ &.home.scroll-up:deep() {
    position: fixed;
    ~ .top-menu-wrap {
      position: fixed;
      top: rem(48);
    }
  }
  .top-banner-wrap ~ &.home.scroll-down:deep() {
    position: fixed;
    ~ .top-menu-wrap {
      position: fixed;
      top: 0;
    }
  }
}
</style>
