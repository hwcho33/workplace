<template>
  <div class="top-menu-wrap">
    <div class="top-menu-inner-wrap" :class="{ 'btn-active': toggleTopMenuDetail }">
      <button class="btn-show-hide" @click="_onToggleViewMore">
        <span class="blind">탭메뉴 펼치기/닫기</span>
      </button>
      <div class="scroll-wrap">
        <p class="tab-menu-list-title">전체 서비스 보기</p>
        <ul class="tab-menu-list">
          <li
            v-for="(item, itemIndex) in topNeviContents"
            :key="itemIndex"
            class="item"
            :class="{
              'new-store': item.isDot
            }"
          >
            <a
              :href="item.goURL"
              :class="{
                'is-active': route.name === item.routeName
              }"
            >
              <span class="info-text">{{ item.subTitle }}</span>
              <span class="link-text">{{ item.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-dim" v-if="toggleTopMenuDetail" @click="_onCloseViewMore"></div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateTopNeviStore } from '~/store/store-common/index'
import { useModal } from '@/composables/ui/use-modal'

// --------------------------------------------------------------------- [변수 및 상수]
const topNeviStore = useTemplateTopNeviStore()

const route = useRoute()
const router = useRouter()

const toggleTopMenuDetail = ref(false)

const { blockScroll, unblockScroll } = useModal()
// --------------------------------------------------------------------- [Vue 내장 메서드]
const topNeviContents = computed(() => {
  return topNeviStore.templateTopNevi.content
})
defineOptions({
  name: 'TopNaviMoTNV0001',
  inheritAttrs: true
})
// --------------------------------------------------------------------- [생명 주기 함수]
onUnmounted(async () => {
  await closeLayer()
})
// --------------------------------------------------------------------- [내부 함수 (functions)]
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
  toggleTopMenuDetail.value = true
  blockScroll()
}
const closeLayer = async () => {
  document.querySelector('body')?.classList.remove('view-more-opened')
  toggleTopMenuDetail.value = false

  unblockScroll()
  await caculateCenter()
}

const _onCloseViewMore = async () => {
  await closeLayer()
}
const _onToggleViewMore = async () => {
  if (toggleTopMenuDetail.value) {
    await closeLayer()
  } else {
    openLayer()
  }
}
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
