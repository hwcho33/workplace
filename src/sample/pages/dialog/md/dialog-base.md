아래 코드는 **Basic** 기능 사용 예시입니다.

```html
<template>
  <div class="text-amber-200 bg-neutral pa-3 text-3xl">Basic Dialog</div>
  <button @click="toggleModal">기본형 Modal</button>
  <Dialog ref="baseDialog" :option-props="setBasicOptions({ message: 'basic' })" />
</template>

<script setup lang="ts">
// 공통 Dialog 컴포넌트 
import Dialog from '@/components/dialog/dialog-modal/index.vue'
import useSetDialogOptions from '@/components/dialog/useSetOptions'

// 공통에서 Expose 로 전달한 함수(open, close) 활용 하기 위해 변수 선언
const baseDialog = ref<{ open: () => void } | null>(null)
// 옵션 변경을 위한 Composable 공용성 함수 활용
// 기본형 옵션의 경우 setBasicOption 함수 활용
const { setBasicOptions } = useSetDialogOptions()

const toggleModal = () => {
  // Expose 전달 함수 활용하여 open
  baseDialog.value?.open()
}
```
1. Dialog Component / useSetDialogOptions import 필요
2. ref 적용
3. option-props 에 setBasicOptions 함수를 통해서 변경이 필요한 Parameter 전달
 - 기본 default 값은 추후 퍼블리싱에서 정의
4. ref 적용 변수에서 expose 된 함수 (open) 사용
