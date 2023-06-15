<template>
  <div class="top-menu-wrap">
    <div class="top-menu-inner-wrap" :class="{ 'btn-active': state.isViewMore }">
      <button class="btn-show-hide" @click="_onToggleViewMore"><span class="blind">탭메뉴 펼치기/닫기</span></button>
      <div class="scroll-wrap">
        <p class="tab-menu-list-title">전체 서비스 보기</p>
        <ul class="tab-menu-list">
          <li
            v-for="item in state.menuItems"
            :key="item.id"
            class="item"
            :class="{
              'new-store': item.isStore
            }"
            @click="_onChangeMenu(item.id)"
          >
            <router-link
              :to="item.linkUrl"
              :class="{
                'is-active': item.id === state.activeMenu
              }"
            >
              <span v-if="item.info" class="info-text">{{ item.info }}</span>
              <span class="link-text">{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-dim" v-if="state.isViewMore" @click="_onCloseViewMore"></div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from '@/composables/ui/use-modal'
interface MenuItems {
  id: string
  title: string
  linkUrl: string
  info?: string
  isStore?: boolean
}
interface Reactive {
  menuItems: MenuItems[]
  activeMenu: string
  isViewMore: boolean
}

const state = reactive<Reactive>({
  menuItems: [
    { id: 'menu-01', title: '홈', linkUrl: '/publishing' },
    { id: 'menu-02', title: 'TV쇼핑', linkUrl: '/publishing/customer/member/join-complete' },
    {
      id: 'menu-03',
      title: '비밀특가',
      linkUrl: '/publishing/customer/member/simple-join',
      info: '쿠폰 15%',
      isStore: true
    },
    { id: 'menu-04', title: '더블세일', linkUrl: '/goods/1', info: '2월 혜택x2' }, // detail test
    { id: 'menu-05', title: '혜택&쿠폰', linkUrl: '/publishing' },
    { id: 'menu-06', title: '라스트오더', linkUrl: '/publishing', info: '~10%적립' },
    { id: 'menu-07', title: '빠른배송', linkUrl: '/publishing' },
    { id: 'menu-08', title: '베스트', linkUrl: '/publishing', info: '실시간' },
    { id: 'menu-09', title: '추천', linkUrl: '/publishing' },
    { id: 'menu-10', title: '투데이딜', linkUrl: '/publishing' },
    { id: 'menu-11', title: '추천상품', linkUrl: '/publishing', info: '인기', isStore: true },
    { id: 'menu-12', title: '백화점', linkUrl: '/publishing' },
    { id: 'menu-13', title: '전문관', linkUrl: '/publishing' },
    { id: 'menu-14', title: '메뉴명다섯', linkUrl: '/publishing', info: '마켓팅문구칠곱' },
    { id: 'menu-15', title: '메뉴15', linkUrl: '/publishing', info: '마켓팅문구칠곱' },
    { id: 'menu-16', title: '편성표', linkUrl: '/publishing' },
    { id: 'menu-17', title: '전문관', linkUrl: '/publishing' },
    { id: 'menu-18', title: '메뉴명다섯', linkUrl: '/publishing' },
    { id: 'menu-19', title: '메뉴15', linkUrl: '/publishing' },
    { id: 'menu-20', title: '편성표', linkUrl: '/publishing' }
  ],
  activeMenu: 'menu-01',
  isViewMore: false
})

const { blockScroll, unblockScroll } = useModal()

const caculateCenter = async () => {
  await nextTick()
  const activeTarget = document.querySelector('.top-menu-wrap .tab-menu-list .item .is-active') as HTMLElement
  if (!activeTarget) return
  const scrollTarget = document.querySelector('.top-menu-wrap .scroll-wrap') as HTMLElement
  const targetLeft = activeTarget.offsetLeft
  const targetWidth = activeTarget.offsetWidth
  const documentWidth = document.body.offsetWidth
  scrollTarget.scroll({
    top: 0,
    left: targetLeft - (documentWidth - targetWidth) / 2,
    behavior: 'smooth'
  })
}

const openLayer = () => {
  document.querySelector('body')?.classList.add('view-more-opened')
  state.isViewMore = true
  blockScroll()
}
const closeLayer = () => {
  document.querySelector('body')?.classList.remove('view-more-opened')
  state.isViewMore = false
  unblockScroll()
  caculateCenter()
}
const _onChangeMenu = (id: string) => {
  state.activeMenu = id
  closeLayer()
}
const _onCloseViewMore = () => {
  closeLayer()
}
const _onToggleViewMore = () => {
  if (state.isViewMore === true) {
    closeLayer()
  } else {
    openLayer()
  }
}
onUnmounted(() => {
  closeLayer()
})
</script>

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/layouts/components/scss/mixin' as *;

.top-menu-wrap {
  background-color: var(--white);
  transition: top 0.5s ease(out-expo);
  position: fixed;
  top: rem(48);
  width: 100%;
  z-index: 46;
  border-bottom: rem(1) solid var(--gray-300);
  .top-menu-inner-wrap {
    background-color: var(--white);
    height: $mobile-header-menu-height;
    margin: 0 auto;
    max-width: $breakpoint-tablet;
    position: relative;

    &::before {
      background: linear-gradient(to right, var(--white) 40%, rgba(255, 255, 255, 0));
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      top: 0;
      width: rem(16);
      z-index: 1;
    }

    &::after {
      background: linear-gradient(to left, var(--white) 65%, rgba(255, 255, 255, 0));
      bottom: 0;
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: rem(69);
    }

    .blind {
      @include blind;
    }

    .btn-show-hide {
      align-items: center;
      background: none;
      background-color: var(--white);
      border: rem(1) solid var(--gray-300);
      border-radius: 50%;
      display: flex;
      height: rem(32);
      justify-content: center;
      position: absolute;
      right: rem(16);
      top: 50%;
      transform: translateY(-50%);
      width: rem(32);
      z-index: 1;

      &::after {
        background: url('/images/icons/header/icon-arrow-bottom.svg') no-repeat center;
        content: '';
        display: block;
        height: rem(16);
        width: rem(16);
      }

      ~ .scroll-wrap {
        .tab-menu-list {
          .item {
            &:nth-last-child(1) {
              padding-right: rem(60);
            }
          }
        }
      }
    }

    .scroll-wrap {
      height: 100%;
      overflow-x: auto;
      width: 100%;

      &::-webkit-scrollbar {
        display: none;
        background: transparent;
        height: 0;
      }

      .tab-menu-list-title {
        display: none;
      }
    }

    .link-text {
      padding-bottom: rem(8);
    }

    .tab-menu-list {
      display: flex;
      height: 100%;
      padding-left: rem(16);

      .item {
        align-items: center;
        align-items: stretch;
        display: flex;

        ~ .item {
          margin-left: rem(22);
        }

        a {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          &.is-active {
            color: var(--red-500);

            .link-text {
              font-weight: 700;

              &::after {
                background: var(--red-500);
                bottom: 0;
                content: '';
                height: rem(3);
                left: 0;
                position: absolute;
                width: 100%;
              }
            }
          }
        }

        .info-text {
          color: var(--red-500);
          font-size: rem(12);
          line-height: 1;
          padding-bottom: rem(4);
          white-space: nowrap;
        }

        .link-text {
          font-size: 1.6rem;
          line-height: 1;
          font-weight: 500;
          position: relative;
          white-space: nowrap;
        }

        &.new-store {
          .link-text {
            &::before {
              background: var(--red-500);
              border-radius: 50%;
              content: '';
              height: rem(6);
              position: absolute;
              right: rem(-6);
              top: rem(-6);
              width: rem(6);
            }
          }
        }
      }
    }

    &.btn-active {
      z-index: 45;
      &::before,
      &::after {
        content: none;
      }
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: calc(100%);
        width: 100%;
        height: rem(1);
        z-index: 10;
        background: var(--gray-300);
      }

      .link-text {
        padding-bottom: 0;
      }

      .btn-show-hide {
        &::after {
          background-image: url('/images/icons/header/icon-arrow-bottom.svg');
          transform: rotateX(180deg);
        }

        ~ .scroll-wrap {
          overflow-x: visible;

          .tab-menu-list {
            background: var(--white);
            border-radius: 0 0 rem(20) rem(20);
            bottom: rem(-1);
            flex-wrap: wrap;
            height: auto;
            left: 0;
            padding: rem(12);
            position: absolute;
            transform: translateY(100%);
            z-index: 45;
            overflow-y: auto;
            max-height: 420px;
            .item {
              display: flex;
              justify-content: center;
              margin: 0;
              padding: rem(4);
              width: 33.33%;

              &:nth-last-child(1) {
                padding-right: 0;
              }

              a {
                align-items: center;
                border: rem(1) solid var(--gray-300);
                border-radius: rem(12);
                flex: 1;
                height: rem(44);
                justify-content: center;
                padding-bottom: 0;
                width: 100%;
                .info-text {
                  font-size: rem(10);
                  padding-left: rem(3);
                  padding-right: rem(3);
                  text-overflow: ellipsis;
                  overflow: hidden;
                  width: 100%;
                  text-align: center;
                }
              }

              .link-text {
                font-size: rem(14);

                &::after {
                  content: none;
                }
              }
            }
          }
          @media screen and (max-device-height: 650px) {
            .tab-menu-list {
              overflow-y: auto;
              max-height: 348px;
            }
          }
        }
      }

      .tab-menu-list-title {
        display: block;
        left: rem(16);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .bg-dim {
    background: rgba(0, 0, 0, 0.6);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 40;
  }

  .view-more-opened & {
    z-index: 44;
    transition: none;
    .scroll-up ~ & {
      z-index: 44;
    }
    .scroll-down ~ & {
      z-index: 46;
    }
  }
}
</style>
