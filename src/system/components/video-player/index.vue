<template>
  <VideoPlayer :src="props.src" :poster="props.poster" controls :loop="props.loop" :volume="0.6" />
</template>

<script lang="ts" setup>
import { VideoPlayer } from '@videojs-player/vue'

const props = defineProps({
  src: String,
  poster: String,
  loop: Boolean
})
</script>

<style lang="scss">
@use './index.css';
</style>
