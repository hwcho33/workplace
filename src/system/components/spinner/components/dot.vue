<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-dot v-dot1" :style="spinnerBasicStyle">
      <div class="v-dot v-dot2" :style="spinnerStyle"></div>
      <div class="v-dot v-dot3" :style="spinnerStyle"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { StyleValue } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: '#999999'
  },
  size: {
    type: String,
    default: '60px'
  },
  margin: {
    type: String,
    default: '2px'
  },
  radius: {
    type: String,
    default: '100%'
  }
})

const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: parseFloat(props.size) / 2 + 'px',
    width: parseFloat(props.size) / 2 + 'px',
    borderRadius: props.radius
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
  .v-dot1 {
    -webkit-animation: v-dotRotate 2s 0s infinite linear;
    animation: v-dotRotate 2s 0s infinite linear;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .v-dot2 {
    -webkit-animation: v-dotBounce 2s 0s infinite linear;
    animation: v-dotBounce 2s 0s infinite linear;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    position: absolute;
    top: 0;
    bottom: auto;
  }
  .v-dot3 {
    -webkit-animation: v-dotBounce 2s -1s infinite linear;
    animation: v-dotBounce 2s -1s infinite linear;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    position: absolute;
    top: auto;
    bottom: 0;
  }
}

@-webkit-keyframes v-dotRotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes v-dotRotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes v-dotBounce {
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

@keyframes v-dotBounce {
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
