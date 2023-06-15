아래 코드는 **Custom** 기능 사용 예시입니다.

**Custom** 사용은 **Basic** 활용과 비슷하지만, 퍼블리싱 진행 시 Slot 이 추가되는 경우입니다.
```html
<template>
  <div class="text-amber-200 bg-neutral pa-3 text-3xl">Custom Dialog</div>

  <button @click="toggleModal">커스텀 Modal</button>

  // Basic 과 동일 하게 Dialog Element 추가 및 setCustomOptions 함수를 통해서 옵션 전달
  <Dialog ref="customDialog" :option-props="setCustomOptions({ message: 'custom' })">
    <template #header>
      <p>쿠폰입력</p>
      <button type="button" class="dialog-colse" @click="cancleTrigger">X</button>
    </template>

    <template #contents>
      <label>
        <input type="text" placeholder="번호를 입력하세요" />
      </label>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from '@/components/dialog/dialog-modal/index.vue'
import useSetDialogOptions from '@/components/dialog/useSetOptions'

const customDialog = ref<{ open: () => void; close: () => void } | null>(null)

const { setCustomOptions } = useSetDialogOptions()

const toggleModal = () => {
  customDialog.value?.open()
}

const cancleTrigger = () => {
  customDialog.value?.close()
}
```
1. Dialog Component / useSetDialogOptions **import** 필요
2. **ref** 적용
3. **option-props** 에 **setCustomOptions** 함수를 통해서 변경이 필요한 **Parameter** 전달
  - **기본 default 값은 추후 퍼블리싱에서 정의**
4. ref 적용 변수에서 expose 된 함수 (open) 사용
