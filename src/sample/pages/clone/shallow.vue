<template>
  <div class="text-nm">
    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">서론</div>
      <ShallowFirstMd />
    </div>

    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">구조 분해 할당 활용</div>
      <ShallowSecondMd />
    </div>

    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">얇은 복사의 객체 참조</div>
      <ShallowThirdMd />
    </div>
  </div>
</template>

<script setup lang="ts">
import ShallowFirstMd from './md/shallow-first.md'
import ShallowSecondMd from './md/shallow-second.md'
import ShallowThirdMd from './md/shallow-third.md'
</script>
