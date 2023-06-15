<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-scale v-scale1" :style="[spinnerStyle, spinnerDelay1]"></div>
    <div class="v-scale v-scale2" :style="[spinnerStyle, spinnerDelay2]"></div>
    <div class="v-scale v-scale3" :style="[spinnerStyle, spinnerDelay3]"></div>
    <div class="v-scale v-scale4" :style="[spinnerStyle, spinnerDelay4]"></div>
    <div class="v-scale v-scale5" :style="[spinnerStyle, spinnerDelay5]"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: '#999999'
  },
  height: {
    type: String,
    default: '35px'
  },
  width: {
    type: String,
    default: '4px'
  },
  margin: {
    type: String,
    default: '2px'
  },
  radius: {
    type: String,
    default: '2px'
  }
})

const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.height,
    width: props.width,
    margin: props.margin,
    borderRadius: props.radius,
    display: 'inline-block',
    animationName: 'v-scaleStretchDelay',
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
    animationFillMode: 'both'
  }
})

const spinnerDelay1 = computed(() => {
  return {
    animationDelay: '0.1s'
  }
})

const spinnerDelay2 = computed(() => {
  return {
    animationDelay: '0.2s'
  }
})

const spinnerDelay3 = computed(() => {
  return {
    animationDelay: '0.3s'
  }
})

const spinnerDelay4 = computed(() => {
  return {
    animationDelay: '0.4s'
  }
})

const spinnerDelay5 = computed(() => {
  return {
    animationDelay: '0.5s'
  }
})
</script>

<style lang="scss">
.v-spinner {
  text-align: center;
}

@-webkit-keyframes v-scaleStretchDelay {
  0% {
    -webkit-animation-name: inherit;
    -webkit-animation-duration: inherit;
    -webkit-animation-iteration-count: inherit;
    -webkit-animation-direction: inherit;
  }
  50% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}

@keyframes v-scaleStretchDelay {
  0% {
    -webkit-animation-name: inherit;
    -webkit-animation-duration: inherit;
    -webkit-animation-iteration-count: inherit;
    -webkit-animation-direction: inherit;
  }
  50% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}
</style>
