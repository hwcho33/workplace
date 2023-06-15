<template>
  <div class="v-spinner" :style="{ position: 'relative', fontSize: 0 }" v-show="loading">
    <div class="v-fade" :style="[spinnerStyle, animationStyle1]"></div>
    <div class="v-fade" :style="[spinnerStyle, animationStyle2]"></div>
    <div class="v-fade" :style="[spinnerStyle, animationStyle3]"></div>
    <div class="v-fade" :style="[spinnerStyle, animationStyle4]"></div>
    <div class="v-fade" :style="[spinnerStyle, animationStyle5]"></div>
    <div class="v-fade" :style="[spinnerStyle, animationStyle6]"></div>
    <div class="v-fade" :style="[spinnerStyle, animationStyle7]"></div>
    <div class="v-fade" :style="[spinnerStyle, animationStyle8]"></div>
  </div>
</template>

<script lang="ts" setup>
import type { StyleValue } from 'vue'

const props = defineProps({
  loading: { type: Boolean, default: true },
  color: { type: String, default: '#999999' },
  height: { type: String, default: '15px' },
  width: { type: String, default: '5px' },
  margin: { type: String, default: '2px' },
  radius: { type: String, default: '20px' }
})

const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.height,
    width: props.width,
    margin: props.margin,
    borderRadius: props.radius
  }
})

const ngRadius = computed(() => {
  return '-' + props.radius
})

const quarter = computed(() => {
  return parseFloat(props.radius) / 2 + parseFloat(props.radius) / 5.5 + 'px'
})

const ngQuarter = computed(() => {
  return '-' + quarter.value
})

const animationStyle1 = computed((): StyleValue => {
  return {
    top: props.radius,
    left: 0,
    animationDelay: '0.12s'
  }
})

const animationStyle2 = computed((): StyleValue => {
  return {
    top: quarter.value,
    left: quarter.value,
    animationDelay: '0.24s',
    transform: 'rotate(-45deg)'
  }
})

const animationStyle3 = computed((): StyleValue => {
  return {
    top: 0,
    left: props.radius,
    animationDelay: '0.36s',
    transform: 'rotate(90deg)'
  }
})

const animationStyle4 = computed((): StyleValue => {
  return {
    top: ngQuarter.value,
    left: quarter.value,
    animationDelay: '0.48s',
    transform: 'rotate(45deg)'
  }
})

const animationStyle5 = computed((): StyleValue => {
  return {
    top: ngRadius.value,
    left: 0,
    animationDelay: '0.60'
  }
})

const animationStyle6 = computed((): StyleValue => {
  return {
    top: ngQuarter.value,
    left: ngQuarter.value,
    animationDelay: '0.72s',
    transform: 'rotate(-45deg)'
  }
})

const animationStyle7 = computed((): StyleValue => {
  return {
    top: 0,
    left: ngQuarter.value,
    animationDelay: '0.84s',
    transform: 'rotate(90deg)'
  }
})

const animationStyle8 = computed((): StyleValue => {
  return {
    top: quarter.value,
    left: ngQuarter.value,
    animationDelay: '0.96s',
    transform: 'rotate(45deg)'
  }
})
</script>

<style lang="scss" scoped>
.v-spinner {
  .v-fade {
    -webkit-animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
    animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
  }
}

@-webkit-keyframes v-fadeStretchDelay {
  50% {
    -webkit-opacity: 0.3;
    opacity: 0.3;
  }
  100% {
    -webkit-opacity: 1;
    opacity: 1;
  }
}

@keyframes v-fadeStretchDelay {
  50% {
    -webkit-opacity: 0.3;
    opacity: 0.3;
  }
  100% {
    -webkit-opacity: 1;
    opacity: 1;
  }
}
</style>
