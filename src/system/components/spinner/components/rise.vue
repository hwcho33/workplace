<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-rise v-rise-odd" :style="spinnerStyle"></div>
    <div class="v-rise v-rise-even" :style="spinnerStyle"></div>
    <div class="v-rise v-rise-odd" :style="spinnerStyle"></div>
    <div class="v-rise v-rise-even" :style="spinnerStyle"></div>
    <div class="v-rise v-rise-odd" :style="spinnerStyle"></div>
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
  size: {
    type: String,
    default: '15px'
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
    height: props.size,
    width: props.size,
    margin: props.margin,
    borderRadius: props.radius
  }
})
</script>

<style lang="scss" scoped>
.v-spinner {
  text-align: center;
  .v-rise-odd {
    -webkit-animation: v-riseOddDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);
    animation: v-riseOddDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    display: inline-block;
  }

  .v-rise-even {
    -webkit-animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);
    animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    display: inline-block;
  }
}

@-webkit-keyframes v-riseOddDelay {
  0% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  25% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  75% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  100% {
    -webkit-transform: translateY(0) scale(0.75);
    transform: translateY(0) scale(0.75);
  }
}

@keyframes v-riseOddDelay {
  0% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  25% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  75% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  100% {
    -webkit-transform: translateY(0) scale(0.75);
    transform: translateY(0) scale(0.75);
  }
}

@-webkit-keyframes v-riseEvenDelay {
  0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  25% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  50% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  75% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
  100% {
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
  }
}

@keyframes v-riseEvenDelay {
  0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  25% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  50% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  75% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
  100% {
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
  }
}
</style>
