## &#x1F4C1; description
```bash
SpinButton components

properties(Props)
- name: input name (필수)
- modelValue: v-model (필수)
- defaultMsg: 값 없을시 기본 메시지 (옵셔널)
- isDisabled: disabled 유무 (옵셔널)
- min: 최소값 (옵셔널)
- max: 최대값 (옵셔널)
- step: 증가값 (옵셔널)
- useSpinLoading: 로딩 유무 및 delay시간 (옵셔널) = 기본값: 600
  : 0 이상 입력시 로딩생성및 delay시간 활성화, 0 입력시 SpinLoading 제거

emit
- onChange: 선택된 value 값 파라미터로 받음
```
```ts
// Props
interface Props {
  name: string
  modelValue: string
  defaultMsg?: string
  min?: string
  max?: string
  step?: string
  useSpinLoading?: number
}

// Defaults Props
withDefaults(defineProps<Props>(), {
  defaultMsg: '--',
  min: '1',
  max: '99',
  step: '1',
  useSpinLoading: 600
})

// emit
defineEmits<{
  (event: 'update:modelValue', value: string): void
  (event: 'onChange', value: string): void
}>()
```

## &#x1F4C1; code

### &#x1F4DD; ts
```ts
import { SpinButton } from '@/components/spin-button'
const state = reactive({
  exValue1: '',
  exValue2: '1',
  exValue3: '1',
  exValue4: '3',
  exValue5: '1',
  exValue6: '1',
  exValue7: '1',
  exValue8: '1'
})
const _onChange = (value: string) => {
  console.log('emit value :', value)
}
```

### &#x1F4DD; template
```html
<!-- 값이 선택 안됨, 최소값: 1,최대값: 99,증가값: 1 -->
<SpinButton v-model="state.exValue1" name="spin-button-01" @onChange="_onChange" />

<!-- 값이 선택됨, 최소값: 1,최대값: 99,증가값: 1 -->
<SpinButton v-model="state.exValue2" name="spin-button-02" @onChange="_onChange" />

<!-- 값이 선택됨, 최소값: 1,최대값: 9,증가값: 1 -->
<SpinButton v-model="state.exValue3" max="9" name="spin-button-03" @onChange="_onChange" />

<!-- 값이 선택됨, 최소값: 3,최대값: 99,증가값: 1 -->
<SpinButton v-model="state.exValue4" min="3" name="spin-button-04" @onChange="_onChange" />

<!-- 값이 선택됨, 최소값: 1,최대값: 99,증가값: 8 -->
<SpinButton v-model="state.exValue5" step="8" name="spin-button-05" @onChange="_onChange" />

<!-- 값이 선택됨, disabled -->
<SpinButton v-model="state.exValue6" name="spin-button-06" isDisabled @onChange="_onChange" />

<!-- 값이 선택됨, useSpinLoading(delay: 0) 로딩삭제 -->
<SpinButton v-model="state.exValue7" name="spin-button-07" :useSpinLoading="0" @onChange="_onChange" />

<!-- 값이 선택됨, useSpinLoading(delay: 2000) delay 2초 -->
<SpinButton v-model="state.exValue8" name="spin-button-08" :useSpinLoading="2000" @onChange="_onChange" />
```