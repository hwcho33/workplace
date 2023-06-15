<template>
  <div id="dialog-area" class="text-nm">
    <div class="text-amber-200 bg-neutral pa-3 text-3xl">서론</div>
    <DialogInfo />
    <BasicDialog />
    <CustomDialog />
  </div>
</template>

<script lang="ts" setup>
import BasicDialog from './components/dialog-modal-base.vue'
import DialogInfo from './md/dialog-info.md'
import CustomDialog from './components/dialog-modal-custom.vue'
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
