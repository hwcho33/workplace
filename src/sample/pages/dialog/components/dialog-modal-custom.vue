<template>
  <div class="text-amber-200 bg-neutral pa-3 text-3xl">Custom Dialog</div>

  <button @click="toggleModal">커스텀 Modal</button>
  <DialogCustom />
  <CustomDialog ref="customDialog" :option-props="setCustomOptions({ message: 'custom' })">
    <template #header>
      <p>쿠폰입력</p>
      <button type="button" class="dialog-colse" @click="cancleTrigger">X</button>
    </template>

    <template #contents>
      <label>
        <input type="text" placeholder="번호를 입력하세요" />
      </label>
    </template>
  </CustomDialog>
</template>

<script setup lang="ts">
import CustomDialog from '@/components/dialog/dialog-modal/index.vue'
import DialogCustom from '../md/dialog-custom.md'
import useSetDialogOptions from '@/components/dialog/use-set-options'

const customDialog = ref<{ open: () => void; close: () => void } | null>(null)

const { setCustomOptions } = useSetDialogOptions()

const toggleModal = () => {
  customDialog.value?.open()
}

const cancleTrigger = () => {
  customDialog.value?.close()
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
  background-color: rgb(133, 186, 255);
}
</style>
