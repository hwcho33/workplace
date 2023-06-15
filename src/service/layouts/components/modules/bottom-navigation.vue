<template>
  <nav class="bottom-nav-wrap" v-if="$route.meta.bottomNavi === undefined">
    <div class="nav-wrap">
      <ul>
        <!-- [D] 활성화 이미지: active 추가 -->
        <li class="category active">
          <button>카테고리</button>
        </li>
        <li class="best">
          <a href="#">베스트 상품</a>
        </li>
        <li class="home">
          <a href="#">
            <img src="/images/icons/navigation/icon-home-bg.png" alt="홈으로 페이지 이동" class="img-bg" />
            <img src="/images/icons/navigation/icon-logo.svg" alt="" class="img-logo" />
            <img src="/images/icons/navigation/icon-home.svg" alt="" class="img-home" />
          </a>
        </li>
        <li class="mypage">
          <a href="#">마이페이지</a>
        </li>
        <!-- [D] 최근 본 상품이 있을 경우 : is-product 추가 -->
        <!-- [D] 활성화 이미지: active 추가 -->
        <!-- <li class="recent is-product"> -->
        <li class="recent">
          <router-link to="/publishing/url">
            <img src="/images/data/@data-recent-img.png" alt="상품 타이틀" />
            최근본상품
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$common-icon: '/images/icons/navigation';
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;

.bottom-nav-wrap {
  --size-nav: rem(57);

  background-color: #fff;
  bottom: 0;
  box-shadow: 0 rem(-10) rem(10) rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  height: var(--size-nav);
  left: 0;
  padding-top: rem(6);
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: transform 0.8s ease(out-expo);
  width: 100%;
  z-index: 50;
  @include safe-area;

  &.hidden {
    bottom: calc(-1 * var(--size-nav));
  }

  .nav-wrap {
    padding: 0 rem(4);

    ul {
      display: flex;

      li {
        flex-grow: 1;
        height: 4.8rem;

        button {
          align-items: center;
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        a,
        button {
          color: var(--gray-600);
          display: block;
          font-size: rem(10);
          height: 100%;
          line-height: 1;
          padding: 0 rem(12);
          position: relative;
          text-align: center;
          white-space: nowrap;

          &::before {
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: auto 100%;
            content: '';
            display: block;
            height: rem(24);
            margin: 0 auto rem(2);
            width: rem(24);
          }
        }

        $catename: category, best, mypage, recent;

        @each $name in $catename {
          &.#{$name} {
            a,
            button {
              &::before {
                background-image: url('#{$common-icon}/icon-#{$name}.svg');
              }
            }

            &.active {
              a,
              button {
                &::before {
                  background-image: url('#{$common-icon}/icon-#{$name}-active.svg');
                }
              }
            }
          }
        }

        &.home {
          flex-grow: 0;
          position: relative;
          width: rem(104);

          a {
            height: rem(72);
            left: 50%;
            position: absolute;
            top: rem(-26);
            transform: translateX(-50%);
            width: rem(72);

            &::before {
              content: none;
            }

            .img-bg {
              width: rem(72);
              height: rem(72);
              animation-delay: 1s;
              animation-direction: alternate;
              animation-duration: 1.2s;
              animation-iteration-count: infinite;
              animation-name: ani-home-bg;
              animation-timing-function: ease;
              left: 50%;
              position: absolute;
              top: 50%;
              transform: translate(-50%, -50%);
              transform-origin: 50% 50%;

              @keyframes ani-home-bg {
                0% {
                  transform: translate(-50%, -50%) scale(1);
                }

                30% {
                  transform: translate(-50%, -50%) scale(1);
                }

                70% {
                  transform: translate(-50%, -50%) scale(0.9);
                }

                100% {
                  transform: translate(-50%, -50%) scale(0.9);
                }
              }
            }

            .img-logo,
            .img-home {
              left: 50%;
              position: absolute;
              top: 50%;
              transform: translate(-50%, -65%);
              transform-origin: 50% 50%;
              width: rem(24);
              height: rem(24);
            }

            .img-logo {
              animation-delay: 1s;
              animation-direction: alternate;
              animation-duration: 1.2s;
              animation-iteration-count: infinite;
              animation-name: ani-home-logo;
              animation-timing-function: ease;
              width: rem(30);
              height: rem(28);

              @keyframes ani-home-logo {
                0% {
                  opacity: 1;
                  transform: translate(-50%, -65%) rotate(0) scale(1);
                }

                30% {
                  opacity: 1;
                  transform: translate(-50%, -65%) rotate(0) scale(1);
                }

                40% {
                  opacity: 0.8;
                  transform: translate(-50%, -65%) rotate(90deg) scale(0.9);
                }

                50% {
                  opacity: 0.4;
                  transform: translate(-50%, -65%) rotate(180deg) scale(0.7);
                }
                60% {
                  opacity: 0.2;
                  transform: translate(-50%, -65%) rotate(270deg) scale(0.6);
                }
                70% {
                  opacity: 0;
                  transform: translate(-50%, -65%) rotate(360deg) scale(0.2);
                }
                100% {
                  opacity: 0;
                  transform: translate(-50%, -65%) rotate(360deg) scale(0.2);
                }
              }
            }

            .img-home {
              animation-delay: 1s;
              animation-direction: alternate;
              animation-duration: 1.2s;
              animation-iteration-count: infinite;
              animation-name: ani-home;
              animation-timing-function: ease;
              height: rem(24);
              opacity: 0;
              width: rem(24);

              @keyframes ani-home {
                0% {
                  opacity: 0;
                  transform: translate(-50%, -65%) scale(0.4);
                }

                30% {
                  opacity: 0;
                  transform: translate(-50%, -65%) scale(0.4);
                }

                80% {
                  opacity: 1;
                  transform: translate(-50%, -65%) scale(1);
                }

                100% {
                  opacity: 1;
                  transform: translate(-50%, -65%) scale(1);
                }
              }
            }
          }
        }

        &.recent {
          a {
            img {
              display: none;
            }
          }

          &.is-product {
            a {
              position: relative;

              img {
                display: block;
                left: 50%;
                position: absolute;
                top: rem(2);
                transform: translateX(-50%);
              }

              &::before {
                background-image: url('#{$common-icon}/icon-recent-bg.svg');
              }
            }

            &.active {
              a {
                &::before {
                  background-image: url('#{$common-icon}/icon-recent-bg-active.svg');
                }
              }
            }
          }
        }
      }
    }
  }

  .scroll-down ~ & {
    transform: translate3d(0, 200%, 0);
  }
}
</style>
