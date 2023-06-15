<template>
  <div class="text-nm">
    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">소스 코드</div>
      <IndexMd />
    </div>
    <div class="mb-6">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">예시</div>
    </div>
    <video-player src="http://vjs.zencdn.net/v/oceans.mp4" poster="//vjs.zencdn.net/v/oceans.png" :loop="false" />
  </div>
</template>

<script lang="ts" setup>
import IndexMd from './md/index.md'
import VideoPlayer from '@/components/video-player/index.vue'
</script>
