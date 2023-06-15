<template>
  <div class="v-spinner" :style="containerStyle" v-show="loading">
    <div class="v-grid" :style="[spinnerStyle, defaultStyle, animationStyle1]"></div>
    <div class="v-grid" :style="[spinnerStyle, defaultStyle, animationStyle2]"></div>
    <div class="v-grid" :style="[spinnerStyle, defaultStyle, animationStyle3]"></div>
    <div class="v-grid" :style="[spinnerStyle, defaultStyle, animationStyle4]"></div>
    <div class="v-grid" :style="[spinnerStyle, defaultStyle, animationStyle5]"></div>
    <div class="v-grid" :style="[spinnerStyle, defaultStyle, animationStyle6]"></div>
    <div class="v-grid" :style="[spinnerStyle, defaultStyle, animationStyle7]"></div>
    <div class="v-grid" :style="[spinnerStyle, defaultStyle, animationStyle8]"></div>
    <div class="v-grid" :style="[spinnerStyle, defaultStyle, animationStyle9]"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  loading: { type: Boolean, default: true },
  color: { type: String, default: '#999999' },
  size: { type: String, default: '15px' },
  margin: { type: String, default: '2px' },
  radius: { type: String, default: '100%' }
})

const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    width: props.size,
    height: props.size,
    margin: props.margin,
    borderRadius: props.radius
  }
})

const defaultStyle = computed(() => {
  return {
    animationName: 'v-gridStretchDelay',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
    display: 'inline-block'
  }
})

const animationStyle1 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration()
  }
})

const animationStyle2 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration()
  }
})

const animationStyle3 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration()
  }
})

const animationStyle4 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration()
  }
})

const animationStyle5 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration()
  }
})

const animationStyle6 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration()
  }
})

const animationStyle7 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration()
  }
})

const animationStyle8 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration()
  }
})

const animationStyle9 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration()
  }
})

const containerStyle = computed(() => {
  return {
    width: parseFloat(props.size) * 3 + parseFloat(props.margin) * 6 + 'px',
    fontSize: 0
  }
})

function random(value: number) {
  return Math.random() * value
}

function delay() {
  return random(100) / 100 - 0.2 + 's'
}

function duration() {
  return random(100) / 100 + 0.6 + 's'
}
</script>

<style lang="scss">
@-webkit-keyframes v-gridStretchDelay {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
}

@keyframes v-gridStretchDelay {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
}
</style>
