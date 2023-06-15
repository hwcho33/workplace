## &#x1F4C1; description
```bash
Layer components
- 새로고침시 mo에서는 Full Layer, Center Layer, Bottom Layer 형태로, pc에서는 Center Layer 형태로 구현

properties(Props)
- modelValue: v-model (필수)
  : true 로 넘길시 기본 레이어 열린상태로 표기
- useCloseBt: 컴퍼넌트 내부 닫기버튼 사용여부 (옵셔널) = 기본값: true
  : false 일시 노출안됨
- isCloseOutside: 영역외 닫기 여부 (옵셔널) = 기본값: false
  : true 일시 오버레이 클릭시 닫기
- layerType: 레이어 타입 (옵셔널) = 기본값: center
  : 'center' => Center Layer | 'full' => Full Layer | 'bottom' => Bottom Layer

slots
- header: 레이어 상단 영역 (슬롯 제거시 layer-header부분 제거됨)
- contents: 레이어 컨텐츠 영역 (슬롯 제거시 layer-contents부분 제거됨)
- bottom: 레이어 하단 영역 (슬롯 제거시 layer-bottom부분 제거됨)

emit
- onOpen: 레이어 Open시 hook 콜백 (옵셔널)
- onClose: 영역외 닫기및 컴퍼넌트 내부 닫기버튼 Close시 hook 콜백 (옵셔널)
```
```ts
// Props
interface Props {
  modelValue: boolean
  useCloseBt?: boolean
  isCloseOutside?: boolean
  layerType?: 'center' | 'full' | 'bottom'
}

// Defaults Props
const props = withDefaults(defineProps<Props>(), {
  useCloseBt: true,
  isCloseOutside: false,
  layerType: 'center'
})

// emit
defineEmits<{
  (event: 'update:modelValue', result: boolean): void
  (event: 'onOpen'): void
  (event: 'onClose'): void
}>()
```

## &#x1F4C1; code

### &#x1F4DD; ts
```ts
import { Layer } from '@/components/layer'
const state = reactive({
  openFlag_01: false,
  openFlag_03: false,
  openFlag_05: false
})

const _onClose = () => {
  console.log('레이어 닫기 콜백')
}
const _onOpen = () => {
  console.log('레이어 열기 콜백')
}
```

### &#x1F4DD; template
```html

<!-- center 레이어 -->
<Layer id="test-layer-01" v-model="state.openFlag_01" @onClose="_onClose" @onOpen="_onOpen">
  <template #header>center 레이어</template>
  <template #contents> contents contentscontentscontentscontentscontentscontentscontents </template>
  <template #bottom>
    <div>
      <button class="ex-close-bt" type="button" @click="() => (state.openFlag_01 = false)">확인</button>
    </div>
  </template>
</Layer>
<button type="button" @click="() => (state.openFlag_01 = true)">center Layer 기본 열기</button>

<!-- full 레이어 -->
<Layer id="test-layer-03" v-model="state.openFlag_03" layer-type="full" @onClose="_onClose" @onOpen="_onOpen">
  <template #header>full 레이어</template>
  <template #contents> contents contentscontentscontentscontentscontentscontentscontents </template>
  <template #bottom>
    <div>
      <button class="ex-close-bt" type="button" @click="() => (state.openFlag_03 = false)">확인</button>
    </div>
  </template>
</Layer>
<button type="button" @click="() => (state.openFlag_03 = true)">Full Layer 기본 열기</button>

<!-- bottom 레이어 -->
<Layer
  id="test-layer-05"
  v-model="state.openFlag_05"
  layer-type="bottom"
  isCloseOutside
  @onClose="_onClose"
  @onOpen="_onOpen"
>
  <template #header>bottom 레이어</template>
  <template #contents> contents contentscontentscontentscontentscontentscontentscontents </template>
  <template #bottom>
    <div>
      <button class="ex-close-bt" type="button" @click="() => (state.openFlag_05 = false)">확인</button>
    </div>
  </template>
</Layer>
<button type="button" @click="() => (state.openFlag_05 = true)">bottom Layer 기본 열기</button>
```
