<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-clip" :style="spinnerStyle"></div>
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
    default: '35px'
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
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: props.color + '' + props.color + ' transparent',
    borderRadius: props.radius,
    background: 'transparent'
  }
})
</script>

<style lang="scss" scoped>
.v-spinner {
  text-align: center;
  .v-clip {
    -webkit-animation: v-clipDelay 0.75s 0s infinite linear;
    animation: v-clipDelay 0.75s 0s infinite linear;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    display: inline-block;
  }
}

@-webkit-keyframes v-clipDelay {
  0% {
    -webkit-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
  }
  50% {
    -webkit-transform: rotate(180deg) scale(0.8);
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
  }
}

@keyframes v-clipDelay {
  0% {
    -webkit-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
  }
  50% {
    -webkit-transform: rotate(180deg) scale(0.8);
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
  }
}
</style>
