<template>
  <div class="text-nm">
    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">서론</div>
      <DeepFirstMd />
    </div>
  </div>

  <div>
    <div class="text-amber-200 bg-neutral pa-3 text-3xl">예제</div>
    <DeepSecondMd />
  </div>
</template>

<script setup lang="ts">
import DeepFirstMd from './md/deep-first.md'
import DeepSecondMd from './md/deep-second.md'
</script>
