<template>
  <div class="top-menu-wrap">
    <div class="top-menu-inner-wrap">
      <div class="top-menu">
        <!-- 기본 네비게이션 메뉴 -->
        <ul class="top-menu-list">
          <li
            v-for="(item, itemIndex) in topNeviContents"
            :key="itemIndex"
            :class="{ new: item.isDot, active: route.name === item.routeName }"
          >
            <a :href="item.goURL">
              <em class="sub-title">{{ item.subTitle }}</em>
              <span>{{ item.title }}</span>
            </a>
          </li>
        </ul>

        <button type="button" class="menu-detail-btn" @click="toggleTopMenuDetail = !toggleTopMenuDetail">
          <span class="blind">메뉴 상세 보기</span>
        </button>

        <div class="top-menu-detail" v-if="toggleTopMenuDetail">
          <span class="title">전체 서비스 보기</span>

          <!-- 기본 네비게이션 메뉴 > 전체보기 -->
          <ul class="top-menu-list">
            <li
              v-for="(item, itemIndex) in topNeviContents"
              :key="itemIndex"
              :class="{ new: item.isDot, active: route.name === item.routeName }"
            >
              <a :href="item.goURL">
                <em class="sub-title">{{ item.subTitle }}</em>
                <span>{{ item.title }}</span>
              </a>
            </li>
          </ul>
          <button type="button" class="menu-close-btn" @click="toggleTopMenuDetail = !toggleTopMenuDetail">
            <span class="blind">메뉴 상세 닫기</span>
          </button>
        </div>
      </div>

      <div class="top-menu-shortcuts">
        <a href="/customer/member/join">회원가입</a>
        <a href="#">고객센터</a>
        <a href="#">바로방문 <span>ON</span></a>
        <a href="#">앱다운로드</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateTopNeviStore } from '~/store/store-common/index'

// --------------------------------------------------------------------- [변수 및 상수]
const topNeviStore = useTemplateTopNeviStore()

const route = useRoute()
const router = useRouter()

const toggleTopMenuDetail = ref(false)
// --------------------------------------------------------------------- [Vue 내장 메서드]
const topNeviContents = computed(() => {
  return topNeviStore.templateTopNevi.content
})
defineOptions({
  name: 'TopNaviPcTNV0001',
  inheritAttrs: true
})
// --------------------------------------------------------------------- [생명 주기 함수]
onMounted(() => {
  const tabTopMenu = document.querySelectorAll('.top-menu-list li a')
  tabTopMenu.forEach(tab => {
    tab.addEventListener('click', onClickActive)
  })
})

onUnmounted(() => {
  const tabTopMenu = document.querySelectorAll('.top-menu-list li a')
  tabTopMenu.forEach(tab => {
    tab.removeEventListener('click', onClickActive)
  })
})
// --------------------------------------------------------------------- [내부 함수 (functions)]

const siblings = (el: HTMLElement) => {
  return Array.from(el.parentElement!.children).filter(e => e !== el)
}

const onClickActive = (e: Event) => {
  const target = e.currentTarget as HTMLElement
  if (target.parentElement) {
    siblings(target.parentElement).forEach(tab => {
      tab.classList.remove('active')
    })
    target.parentElement.classList.add('active')
  }
}
</script>

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/layouts/components/scss/mixin' as *;

.top-menu-wrap {
  background-color: var(--white);
  border-width: rem(1) 0;
  border-style: solid;
  border-color: var(--gray-300);
  height: rem(62);
  min-width: $pc-base-width;
  position: relative;
  z-index: 5;
  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
  }
  .blind {
    @include blind;
  }
  .top-menu-inner-wrap {
    display: flex;
    margin: 0 auto;
    max-width: $pc-base-width;
    padding-left: rem(72);

    .top-menu {
      position: relative;
      width: rem(874);

      .top-menu-list {
        overflow: hidden;
        white-space: nowrap;

        li {
          display: inline-block;
          margin-left: rem(20);
          margin-right: rem(20);
          position: relative;

          &.active {
            a {
              color: var(--ns-red);
              font-weight: 700;

              &::before {
                background-color: var(--ns-red);
                bottom: 0;
                content: '';
                height: rem(3);
                left: 0;
                position: absolute;
                right: 0;
              }
            }
          }

          &.new {
            &::before {
              background-color: var(--ns-red);
              border-radius: 100%;
              content: '';
              height: rem(6);
              position: absolute;
              right: rem(-6);
              top: rem(25);
              width: rem(6);
            }
          }

          a {
            box-sizing: border-box;
            color: var(--gray-900);
            display: inline-block;
            font-weight: 500;
            height: rem(61);
            letter-spacing: 0;
            padding-top: rem(31);
            position: relative;
            vertical-align: top;

            .sub-title {
              color: var(--ns-red);
              font-size: rem(12);
              font-weight: 400;
              left: 50%;
              max-width: rem(72);
              overflow: hidden;
              position: absolute;
              top: rem(14);
              transform: translateX(-50%);
            }

            span {
              display: inline-block;
              line-height: 1;
              max-width: rem(70);
              overflow: hidden;
            }
          }
        }
      }

      .menu-detail-btn {
        background: linear-gradient(270deg, #fff 84%, rgba(255, 255, 255, 0) 128%);
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 16%,
          rgba(255, 255, 255, 1) 100%
        );
        height: rem(60);
        position: absolute;
        right: 0;
        top: 0;
        width: rem(95);

        &::before {
          background: url('/images/icons/common/btn-gnb-down.svg') no-repeat 50%;
          content: '';
          height: rem(32);
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: rem(32);
        }
      }

      .top-menu-detail {
        background-color: var(--white);
        border: rem(1) solid var(--gray-900);
        border-radius: rem(20);
        left: rem(-4);
        overflow: hidden;
        position: absolute;
        top: rem(-1);
        width: rem(860);
        z-index: 6;

        .title {
          border-bottom: rem(1) solid var(--gray-200);
          border-radius: rem(20) rem(20) 0 0;
          color: var(--gray-900);
          display: block;
          height: rem(61);
          line-height: 1;
          padding: rem(23) rem(36) 0;
        }

        .top-menu-list {
          margin-bottom: rem(-1);
          margin-left: 0;
          padding-left: rem(16);
          padding-right: rem(16);
          padding-top: rem(24);
          white-space: normal;

          li {
            margin-bottom: rem(36);
            white-space: nowrap;

            &.active {
              a {
                color: var(--gray-900);
                font-weight: 500;

                &::before {
                  content: none;
                }
              }
            }

            &.new {
              &::before {
                top: rem(10);
              }
            }

            a {
              height: rem(32);
              line-height: 1;
              padding-top: rem(16);

              .sub-title {
                top: 0;
              }
            }
          }
        }

        .menu-close-btn {
          background: url('/images/icons/common/icon-delete.svg') no-repeat 0 0;
          background-size: rem(20);
          height: rem(20);
          position: absolute;
          right: rem(20);
          top: rem(20);
          width: rem(20);
        }
      }
    }

    .top-menu-shortcuts {
      align-items: center;
      border-left: rem(1) solid var(--gray-300);
      display: flex;
      flex: 1;
      font-size: rem(12);
      font-weight: 500;
      justify-content: end;
      text-align: right;

      a {
        margin-left: rem(12);
        &:first-child {
          margin-left: 0;
        }

        span {
          color: var(--ns-red);
        }
      }

      a:first-child:nth-last-child(3),
      a:first-child:nth-last-child(3) ~ a {
        margin-left: rem(28);
      }
    }
  }
  .scroll-up ~ &,
  .scroll-down ~ & {
    display: none;
  }
}
</style>
