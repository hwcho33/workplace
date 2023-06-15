<template>
  <div v-if="!isDesktop">
    <LoadingBanner />
    <LoadingInfo />
  </div>

  <div v-else class="goods-detail-wrap">
    <div class="goods-info-wrap">
      <LoadingBanner />

      <div class="goods-detail-info">
        <LoadingInfo />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'
import LoadingBanner from '&/pages/goods/components/loading/loading-banner.vue'
import LoadingInfo from '&/pages/goods/components/loading/loading-info.vue'
const isDesktop = getOSByUserAgent() === 'desktop'
</script>
<style lang="scss">
@use '~/pages/goods/scss/goods.scss';
</style>
