<template>
  <div class="pub-guide-wrap" :class="{ open: pageToggleState }">
    <div class="go-list">
      <router-link to="/publishing/guide/list">&#x1F30D; 퍼블 리스트 페이지로 이동</router-link>
      <router-link to="/publishing/guide/layer">&#x1F30D; 퍼블 레이어 페이지로 이동</router-link>
    </div>
    <Contents />
    <SideBar />
  </div>
</template>
<script lang="ts">
export default {
  name: 'PubGuide'
}
</script>
<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'
import SideBar from '&/pages/guide/components/layouts/side-bar.vue'
import Contents from '&/pages/guide/components/contents/index.vue'
import { IterItem, MapIdKey, PageToggleKey } from '&/pages/guide/symbols'

// reactive state
const isDesktop = getOSByUserAgent() === 'desktop'
const route = useRoute()
const query = route.query.cur
const current = ref(query ? query : 'typography') as Ref<string>
const iter = ref<Set<IterItem>>(new Set())
const pageToggleState = ref(isDesktop ? true : false)
const changePageToggle = () => {
  pageToggleState.value = !pageToggleState.value
}

provide(MapIdKey, { current, iter })
provide(PageToggleKey, { pageToggleState, changePageToggle })
</script>
<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;
@use './index.scss';
.pub-guide-wrap {
  text-align: left;
  max-width: rem(1920);
  margin: 0 auto;
  color: #213547;
  background-color: #fff;
  &.open {
    .contents-main-wrap {
      width: 40%;
      margin-left: 60%;
      @include media(desktop) {
        width: 83.33333333%;
        margin-left: 16.66666667%;
      }
    }
    .sidebar-wrap {
      transform: translateX(0);
    }
  }
  .go-list {
    display: flex;
    align-items: center;
    justify-content: center;
    > a {
      font-size: 17px;
      height: 20px;
      padding: 20px;
      font-weight: bold;
    }
  }
}
</style>
