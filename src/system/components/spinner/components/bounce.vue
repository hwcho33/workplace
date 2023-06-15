<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-bounce v-bounce1" :style="spinnerBasicStyle">
      <div class="v-bounce v-bounce2" :style="spinnerStyle"></div>
      <div class="v-bounce v-bounce3" :style="spinnerStyle"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { StyleValue } from 'vue'

const props = defineProps({
  loading: { type: Boolean, default: true },
  color: { type: String, default: '#999999' },
  size: { type: String, default: '60px' },
  margin: { type: String, default: '2px' },
  radius: { type: String, default: '100%' }
})

const spinnerStyle = computed((): StyleValue => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    borderRadius: props.radius,
    opacity: 0.6,
    position: 'absolute',
    top: 0,
    left: 0
  }
})

const spinnerBasicStyle = computed((): StyleValue => {
  return {
    height: props.size,
    width: props.size,
    position: 'relative'
  }
})
</script>

<style lang="scss" scoped>
.v-spinner {
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  .v-bounce2 {
    -webkit-animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
    animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
  }
  .v-bounce3 {
    -webkit-animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
    animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
  }
}

@-webkit-keyframes v-bounceStretchDelay {
  0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes v-bounceStretchDelay {
  0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
