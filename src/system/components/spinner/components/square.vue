<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-square" :style="spinnerStyle"></div>
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
    default: '50px'
  }
})

const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size
  }
})
</script>

<style lang="scss" scoped>
.v-spinner {
  text-align: center;

  .v-square {
    -webkit-animation: v-squareDelay 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
    animation: v-squareDelay 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    perspective: 100px;
    display: inline-block;
  }
}

@-webkit-keyframes v-squareDelay {
  25% {
    -webkit-transform: rotateX(180deg) rotateY(0);
    transform: rotateX(180deg) rotateY(0);
  }
  50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg);
    transform: rotateX(180deg) rotateY(180deg);
  }
  75% {
    -webkit-transform: rotateX(0) rotateY(180deg);
    transform: rotateX(0) rotateY(180deg);
  }
  100% {
    -webkit-transform: rotateX(0) rotateY(0);
    transform: rotateX(0) rotateY(0);
  }
}

@keyframes v-squareDelay {
  25% {
    -webkit-transform: rotateX(180deg) rotateY(0);
    transform: rotateX(180deg) rotateY(0);
  }
  50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg);
    transform: rotateX(180deg) rotateY(180deg);
  }
  75% {
    -webkit-transform: rotateX(0) rotateY(180deg);
    transform: rotateX(0) rotateY(180deg);
  }
  100% {
    -webkit-transform: rotateX(0) rotateY(0);
    transform: rotateX(0) rotateY(0);
  }
}
</style>
