<template>
  <header class="desktop-header-wrap">
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

        <div class="header-search">
          <div class="header-search-inner">
            <label for="keywordSearch">
              <input type="text" id="keywordSearch" name="keyword-search" required />
            </label>
            <div class="btns-wrap">
              <button type="button" class="btn-search">
                <img src="/images/icons/common/icon-search.svg" alt="검색" />
              </button>
            </div>
          </div>

          <div class="header-search-detail">
            <div class="detail-keyword">@인기검색어 영역</div>
            <div class="detail-realtime">@실시간 검색어 영역</div>
          </div>
        </div>

        <div class="header-user">
          <a href="#" class="btn-link icon-login">
            <span class="txt">로그인</span>
          </a>
          <a href="#" class="btn-link icon-mypage">
            <span class="txt">마이페이지</span>
          </a>
          <a href="#" class="btn-link icon-history">
            <!-- <img src="/images/data/@data-header-user.jpg" alt="" /> 최근본상품 이미지 노출 시 img 태그 추가 -->
            <span class="txt">최근본상품</span>
          </a>
          <a href="#" class="btn-link icon-cart">
            <span class="txt">장바구니</span>
            <span class="num">0</span>
          </a>
        </div>

        <PcCategory />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { PcCategory } from '~/layouts/components/modules'

onMounted(() => {
  console.info('>>pc-header')
})
</script>

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/layouts/components/scss/mixin' as *;

#desktop .desktop-header-wrap {
  position: relative;
  top: 0;
  z-index: 30;

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
      top: rem(-500);
      width: 100%;
      z-index: 60;

      &:focus {
        top: 0;
      }
    }
  }

  .top-banner-inner {
    display: none;
    height: rem(50);
    margin: 0 auto;
    max-width: $breakpoint-tablet;
    text-align: center;

    img {
      height: rem(50);
    }
  }

  .header-main-wrap {
    background-color: var(--white);
    min-width: $pc-base-width;
  }

  .header-main-inner {
    align-items: center;
    display: flex;
    height: $pc-header-main-height;
    justify-content: space-between;
    margin: 0 auto;
    width: $pc-base-width;

    .header-logo {
      flex: 0 0 35rem;

      img {
        height: rem(35);
        max-width: none;
        width: rem(150);
      }
    }

    .header-search {
      &-inner {
        position: relative;

        input[type='text'] {
          border: rem(2) solid var(--gray-900);
          border-radius: rem(25);
          box-sizing: border-box;
          height: rem(44);
          padding-left: rem(25);
          padding-right: rem(55);
          width: rem(430);
        }

        .btns-wrap {
          position: absolute;
          right: rem(30);
          top: 50%;
          transform: translateY(-50%);

          .btn-search {
            border: 0;
            height: rem(24);
            vertical-align: top;
            width: rem(24);

            img {
              height: rem(24);
              width: rem(24);
            }
          }
        }
      }

      &-detail {
        display: none;
        position: absolute;
      }
    }

    .header-user {
      display: flex;
      flex: 0 0 rem(420);
      justify-content: flex-end;
      transition: all 0.2s;

      .btn-link {
        display: inline-block;
        height: rem(43);
        margin-left: rem(7);
        margin-right: rem(7);
        position: relative;
        text-align: center;
        width: rem(48);

        &.icon-login {
          background: url('/images/icons/common/icon-login.svg') no-repeat 50% 0;
          background-size: rem(24);
        }

        &.icon-mypage {
          background: url('/images/icons/common/icon-mypage.svg') no-repeat 50% 0;
          background-size: rem(24);
        }

        &.icon-history {
          background: url('/images/icons/common/icon-history.svg') no-repeat 50% 0;
          background-size: rem(24);
        }

        &.icon-cart {
          background: url('/images/icons/common/icon-cart.svg') no-repeat 50% 0;
          background-size: rem(24);
          margin-right: 0;
          width: rem(39);
        }

        img {
          border: rem(1.5) solid var(--gray-900);
          border-radius: 100%;
          height: rem(24);
          width: rem(24);
        }

        .txt {
          bottom: 0;
          color: var(--gray-600);
          display: block;
          font-size: rem(11);
          left: 50%;
          line-height: 1;
          position: absolute;
          transform: translateX(-50%);
          width: max-content;
        }

        .num {
          background-color: var(--ns-red);
          border-radius: 100%;
          color: var(--white);
          display: none;
          font-size: rem(12);
          font-weight: 500;
          height: rem(16);
          line-height: rem(16);
          margin-top: 0;
          position: absolute;
          right: 0;
          top: rem(-5);
          width: rem(16);
        }
      }
    }
  }

  &.scroll-up:deep(),
  &.scroll-down:deep() {
    position: fixed;
    top: 0;
    width: 100%;

    .header-main-wrap {
      border-bottom-width: rem(1);
      border-style: solid;
      border-color: var(--gray-300);
    }
    .header-main-inner {
      height: rem(61);
      padding-left: rem(76);
      position: relative;

      .header-logo {
        flex: 0 0 rem(142);

        img {
          height: rem(24);
          width: rem(102.48);
        }
      }

      .header-search {
        margin-right: auto;
        .header-search-inner {
          input[type='text'] {
            height: rem(40);
          }
        }
      }

      .header-user {
        border-left: rem(1) solid var(--gray-300);
        flex: 0 0 rem(208);
        height: rem(61);
        padding-top: rem(19);

        .btn-link {
          height: rem(24);
          margin-left: rem(24);
          margin-right: 0;
          width: rem(24);

          &:first-child {
            margin-left: 0;
          }

          .txt {
            display: none;
          }

          .num {
            right: rem(-7);
          }
        }
      }
    }

    ~ .container {
      padding-top: rem(175);
    }
  }
}
</style>
