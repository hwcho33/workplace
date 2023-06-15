<template>
  <div class="text-amber-200 bg-neutral pa-3 text-3xl">Basic Dialog</div>
  <button @click="toggleModal">기본형 Modal</button>
  <BaseDialogMd />
  <Dialog ref="baseDialog" :option-props="setBasicOptions({ message: 'basic' })" />
</template>

<script setup lang="ts">
import Dialog from '@/components/dialog/dialog-modal/index.vue'
import BaseDialogMd from '../md/dialog-base.md'
import useSetDialogOptions from '@/components/dialog/use-set-options'

const baseDialog = ref<{ open: () => void } | null>(null)
const { setBasicOptions } = useSetDialogOptions()

const toggleModal = () => {
  baseDialog.value?.open()
}
</script>

<style lang="scss" scoped>
* {
  margin: 10px 0;
}

button {
  width: 150px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  font-size: 20px;
  font-weight: 800;
  background-color: rgb(239, 242, 93);
}
</style>
