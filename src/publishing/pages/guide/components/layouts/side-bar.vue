<template>
  <div class="sidebar-wrap">
    <div class="sidebar-toggle-bt">
      <button type="button" @click="_onClickSidebarToggle">{{ setToggleText ? '&#x23EA;' : '&#x23E9;' }}</button>
    </div>
    <div class="sidebar-scroll">
      <div class="sidebar">
        <div class="sidebar-header">
          <a class="sidebar-brand" href="#top">Publishing Style Guide</a>
        </div>
        <div v-for="(item, index) in mapIter" :key="index" class="catagory-wrap">
          <div class="catagory-bt">
            <button :class="{ active: accordionValues[index] }" type="button" @click="_onClickAccordion(index)">
              {{ item.category }}
              <i class="accordion-icon"></i>
            </button>
          </div>
          <transition :name="'accordion'" :duration="{ enter: 1000, leave: 1000 }" @before-enter="_onBeforeEnter">
            <ul v-if="accordionValues[index]" class="nav nav-sidebar">
              <li v-for="(item2, index2) in item.ids" :key="index2" :class="{ active: checkMapId(item2) }">
                <button type="button" @click="_onClickChangeId(item2)">&#x1F449; {{ item2 }}</button>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'SideBar'
}
</script>
<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'
import useMapId from '&/pages/guide/use-map-id'
import { PageToggleKey } from '&/pages/guide/symbols'

const isDesktop = getOSByUserAgent() === 'desktop'
const router = useRouter()
const { mapIter, current, checkMapId, changeCurrentId } = useMapId()
const pageToggle = inject(PageToggleKey)
const accordionValues = ref(mapIter.value.map(item => item.ids.has(current.value)))
const setToggleText = ref(pageToggle?.pageToggleState)

const toggleExpand = (element: HTMLElement) => {
  if (!element.style.height || element.style.height == '0px') {
    element.style.height =
      Array.prototype.reduce.call(
        element.childNodes,
        function (p, c) {
          return p + (c.offsetHeight || 0)
        },
        0
      ) + 'px'
  } else {
    element.style.height = '0px'
  }
}
const _onBeforeEnter = async (el: HTMLElement) => {
  await nextTick()
  toggleExpand(el)
}

const _onClickSidebarToggle = () => {
  pageToggle?.changePageToggle()
}

const _onClickChangeId = (id: string) => {
  changeCurrentId(id)
  router.push({ query: { cur: id } })
  if (!isDesktop) pageToggle?.changePageToggle()
}

const _onClickAccordion = (index: number) => {
  accordionValues.value[index] = !accordionValues.value[index]
}
</script>
<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;
.sidebar-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 60%;
  background-color: #f5f5f5;
  border-right: 1px solid #eee;
  transform: translateX(-100%);
  transition: transform 0.5s;
  z-index: 1000;
  @include media(desktop) {
    width: 16.66666667%;
  }
  .sidebar-brand {
    display: block;
    background-color: #222;
    margin-right: -21px;
    margin-left: -20px;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
    color: #fff;
  }
  .sidebar-toggle-bt {
    position: absolute;
    top: 0;
    right: -39px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      font-size: 18px;
      cursor: pointer;
      background-color: #fff;
      border: 1px solid #000;
    }
  }
  .sidebar-scroll {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .sidebar {
    display: block;
    padding: 0 20px 20px;
  }
  .catagory-wrap {
    .catagory-bt {
      margin-right: -21px;
      margin-left: -20px;
      button {
        position: relative;
        cursor: pointer;
        display: block;
        width: 100%;
        border: none;
        border-bottom: 1px solid;
        padding: 10px;
        font-size: 15px;
        font-weight: 600;
        text-align: left;
        background-color: #fff;
        .accordion-icon {
          position: absolute;
          top: 50%;
          margin-top: -15px;
          right: 20px;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .accordion-icon::before,
        .accordion-icon::after {
          content: '';
          position: absolute;
          border-radius: 50px;
          background-color: #000;
          transition: ease 0.3s all;
        }
        .accordion-icon::before {
          width: 2px;
          height: 20px;
        }
        .accordion-icon::after {
          width: 20px;
          height: 2px;
        }
        &.is-active {
          .accordion-icon::before {
            transform: rotate(90deg);
          }
        }
        &.active {
          .accordion-icon::before {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
  .nav-sidebar {
    margin-right: -21px;
    margin-bottom: 20px;
    margin-left: -20px;
  }

  .nav-sidebar > li > button {
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 0;
  }

  .nav-sidebar > .active > button,
  .nav-sidebar > .active > button:hover,
  .nav-sidebar > .active > button:focus {
    color: #fff;
    background-color: #428bca;
  }
  .nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-top: 0;
    overflow: hidden;
    border-bottom: 1px solid #000;
  }
  .nav > li {
    position: relative;
    display: block;
  }
  .nav > li > button {
    position: relative;
    display: block;
    padding: 10px 15px;
    width: 100%;
    font-size: 14px;
    box-sizing: border-box;
    text-align: left;
    border: none;
    cursor: pointer;
  }
  .nav > li > button:hover,
  .nav > li > button:focus {
    color: #fff;
    background-color: #428bca;
  }
  .accordion {
    &-enter-active {
      transition: height 0.8s cubic-bezier(0, 1, 0, 1);
    }
    &-enter-from {
      height: 0 !important;
    }
    &-leave-active {
      transition: height 0.8s cubic-bezier(0, 1, 0, 1);
    }
    &-leave-to {
      height: 0 !important;
    }
  }
}
</style>
