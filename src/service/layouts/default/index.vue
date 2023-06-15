<template>
  <!-- <TopBanner v-if="pageLayout === 'home'" /> -->
  <TemplateTopBanner />
  <component :is="layoutHeader" :class="[pageLayout, scrollPosition]" />
  <component :is="layoutTopNav" v-if="pageLayout === 'home' || (isDesktop && !$route.meta.headerOnlyLogo)" />

  <div
    class="container"
    :class="{
      'full-width': $route.meta.fullLayout,
      [injectClass]: true,
      'only-header-top': $route.meta.footer === false
    }"
  >
    <slot></slot>
  </div>

  <BottomNavigation v-if="!isDesktop" />
  <FloatingRight />

  <component :is="layoutFooter" />
</template>

<script lang="ts" setup>
import { Header, PcHeader, PcHeaderOnlyLogo } from '~/layouts/components/header'
import { Footer, PcFooter } from '~/layouts/components/footer'
import { FloatingRight, TopBanner, BottomNavigation, TopMenu, PcTopMenu } from '~/layouts/components/modules'
import { getOSByUserAgent } from '@/utils/device'
import { useLayoutInfo } from '~/composable/ui/use-layout'
import { useScrollPosition } from '~/composable/ui/use-scroll'
import { useUiLayoutStore } from '~/store'
import TemplateTopBanner from '~/components/dynamic-component/template-br/t-br-0001.vue'
import TemplateNeviPC from '~/components/dynamic-component/template-nv/t-nv-0001-pc.vue'
import TemplateNeviMobile from '~/components/dynamic-component/template-nv/t-nv-0001-mo.vue'

const uiLayoutStore = useUiLayoutStore()
const osType = getOSByUserAgent()
const isDesktop = osType === 'desktop'
const route = useRoute()
const injectClass = computed(() => uiLayoutStore.containerClass)
const layoutHeader = computed(() => {
  if (isDesktop) {
    return route.meta.headerOnlyLogo ? PcHeaderOnlyLogo : PcHeader
  } else {
    return Header
  }
})
const layoutTopNav = computed(() => {
  if (isDesktop) {
    // return PcTopMenu
    return TemplateNeviPC
  } else {
    // return TopMenu
    return TemplateNeviMobile
  }
})
const layoutFooter = computed(() => {
  if (isDesktop) {
    return PcFooter
  } else {
    return Footer
  }
})
const { pageLayout } = useLayoutInfo()
const { scrollPosition } = useScrollPosition()
</script>
