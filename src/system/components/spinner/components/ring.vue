<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-ring v-ring1" :style="spinnerBasicStyle">
      <div class="v-ring v-ring2" :style="spinnerStyle"></div>
      <div class="v-ring v-ring3" :style="spinnerStyle"></div>
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
    height: props.size,
    width: props.size,
    border: parseFloat(props.size) / 10 + 'px solid' + props.color,
    opacity: 0.4,
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
  .v-ring2 {
    -webkit-animation: v-ringRightRotate 2s 0s infinite linear;
    animation: v-ringRightRotate 2s 0s infinite linear;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    position: absolute;
    top: 0;
    left: 0;
    perspective: 800px;
  }
  .v-ring3 {
    -webkit-animation: v-ringLeftRotate 2s 0s infinite linear;
    animation: v-ringLeftRotate 2s 0s infinite linear;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    position: absolute;
    top: 0;
    left: 0;
    perspective: 800px;
  }
}

@-webkit-keyframes v-ringRightRotate {
  0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
    transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
  }
}

@keyframes v-ringRightRotate {
  0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
    transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
  }
}

@-webkit-keyframes v-ringLeftRotate {
  0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
  }
}

@keyframes v-ringLeftRotate {
  0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
  }
}
</style>
