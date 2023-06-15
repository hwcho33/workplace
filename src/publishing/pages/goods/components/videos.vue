<template>
  <div class="video-wrap" v-if="isShow">
    <div class="data-warning" v-if="!state.isVideoOpen">
      <div class="alert-content">
        <p class="copy">3G/LTE 등으로 접속시<br />데이터 통화료가 발생할 수 있습니다.</p>
        <div class="btn-alert-wrap">
          <button class="btn-cancel" type="button" @click="_onCloseVideo">취소</button>
          <button class="btn-confirm" type="button" @click="_onStartVideo">확인</button>
        </div>
      </div>
    </div>

    <VideoPlayer
      v-if="state.isVideoOpen"
      :src="src"
      :loop="loop"
      :poster="poster"
      playsinline
      autoplay
      controls
      muted
      :volume="volume"
    >
      <template #default="{ player, state }">
        <div class="custom-player-controls">
          <button type="button" class="btn-close" @click="_onCloseVideo">닫기</button>
          <button
            type="button"
            class="btn-play-pause"
            :class="{ 'is-play': !state.playing, 'is-pause': state.playing }"
            @click="state.playing ? player.pause() : player.play()"
          >
            {{ state.playing ? 'pause' : 'play' }}
          </button>
        </div>
      </template>
    </VideoPlayer>
  </div>
</template>

<script lang="ts" setup>
import { VideoPlayer } from '@videojs-player/vue'

export interface Props {
  modelValue: boolean
  isVideoOpen: boolean
  src: string
  poster?: string
  volume?: number
  loop?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isVideoOpen: false,
  loop: true,
  volume: 0.6
})
const isShow = computed(() => props.modelValue)
const state = reactive({
  isVideoOpen: props.isVideoOpen
})

const emit = defineEmits<{
  (event: 'update:modelValue', result: boolean): void
}>()

const _onCloseVideo = () => {
  emit('update:modelValue', false)
  if (!props.isVideoOpen) state.isVideoOpen = false
}

const _onStartVideo = () => {
  state.isVideoOpen = true
}

onUnmounted(() => {})
</script>

<style lang="scss">
@use '@/components/video-player/index.css';
</style>

<style lang="scss" scoped>
@use '~/pages/goods/scss/videos.scss';
</style>
