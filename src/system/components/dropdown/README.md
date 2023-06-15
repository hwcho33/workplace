## &#x1F4C1; description
```bash
Dropdown components

properties(Props)
- name: 내장 input hidden 연결용 (필수)
- isError: 에러 유무 (옵셔널)
- isTitle: 보여지는 값을 title값으로 표시(옵셔널)
- isFlat: true일시 아코디언방식(옵셔널)
- isDisabled: disabled 유무 (옵셔널)
- guidetMsg: 하단 메시지 (옵셔널)
- defaultMsg: 셀렉트 값 없을시 기본 메시지 (옵셔널)
- size: Dropdown 크기(옵셔널)
- modelValue: v-model (필수)
- items: Items[] (필수)

Items
- title: 커스텀 셀렉트 타이틀값
- value: 커스텀 셀렉트 value

slots
- contents: 드롭다운 컨텐츠 영역 (옵셔널)

emit
- onChange: 선택된 value 값 파라미터로 받음
```
```ts
// Props
interface Items {
  title?: string
  value: string
}
interface Props {
  name: string
  isFlat?: boolean
  isTitle?: boolean
  isError?: boolean
  isDisabled?: boolean
  guidetMsg?: string
  defaultMsg?: string
  size?: 'small' | 'normal'
  modelValue: string
  items: (Items & { [key: string]: any })[]
}

// Defaults Props
withDefaults(defineProps<Props>(), {
  defaultMsg: '--Please choose an option--',
  size: 'normal',
  isFlat: false,
  isTitle: false
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
import { Dropdown } from '@/components/dropdown'
const state = reactive({
  exValue1: '',
  exValue2: 'turtle',
  exValue3: '',
  exValue4: 'cat',
  exValue5: 'hamster',
  exValue6: 'dog',
  exValue7: '',
  exValue8: '',
  exValue9: '',
  exItems1: [
    {
      title: 'Dog',
      value: 'dog'
    },
    {
      title: 'Cat',
      value: 'cat'
    },
    {
      title: 'Hamster',
      value: 'hamster'
    }
  ],
  exItems2: [
    {
      title: 'Dog',
      value: 'dog'
    },
    {
      title: 'Cat',
      value: 'cat'
    },
    {
      title: 'Hamster',
      value: 'hamster'
    },
    {
      title: 'Cow',
      value: 'cow'
    },
    {
      title: 'Rat',
      value: 'rat'
    },
    {
      title: 'Turtle',
      value: 'turtle'
    }
  ],
  exItems3: [
    {
      title: '개**',
      value: 'dog',
      subTitle: 'test11'
    },
    {
      title: '고양이[4마리]',
      value: 'cat'
    },
    {
      title: '햄스터 - 소',
      value: 'hamster',
      subTitle: 'test22'
    },
    {
      title: '소(100마리)',
      value: 'cow'
    }
  ],
  exItems4: [
    {
      title: '봄 가을 상하 세트',
      value: 'value1',
      remaining: 5
    },
    {
      title: '여름세트',
      value: 'value2',
      remaining: 0,
      soldOut: true,
      restockBtn: true
    },
    {
      title: '상하세트',
      value: 'value3',
      remaining: 151
    }
  ]
})
const _onChange = (value: string) => {
  console.log('emit value :', value)
}
```

### &#x1F4DD; template
```html
<!-- 값이 선택 안됨 -->
<Dropdown
  v-model="state.exValue1"
  name="custom-select-01"
  :items="state.exItems1"
  defaultMsg="값을 선택해 주세요"
  @onChange="_onChange"
/>

<!-- 값이 선택됨 -->
<Dropdown
  v-model="state.exValue2"
  name="custom-select-02"
  :items="state.exItems2"
  defaultMsg="값을 선택해 주세요"
  @onChange="_onChange"
/>

<!-- 에러 -->
<Dropdown
  v-model="state.exValue3"
  name="custom-select-03"
  is-error
  guidetMsg="필수 값입니다."
  defaultMsg="값을 선택해 주세요"
  :items="state.exItems2"
  @onChange="_onChange"
/>

<!-- disabled -->
<Dropdown
  v-model="state.exValue4"
  name="custom-select-03"
  is-disabled
  defaultMsg="값을 선택해 주세요"
  :items="state.exItems2"
/>

<!-- flat -->
<Dropdown
  v-model="state.exValue5"
  name="custom-select-05"
  :items="state.exItems2"
  defaultMsg="값을 선택해 주세요"
  is-flat
  @onChange="_onChange"
/>

<!-- slot -->
<Dropdown
  v-model="state.exValue6"
  name="custom-select-06"
  :items="state.exItems3"
  defaultMsg="값을 선택해 주세요"
  is-flat
  @onChange="_onChange"
>
  <template #contents="{ items, changeValue, setActive }">
    <li v-for="item in items" :key="item.value" :class="{ 'is-active': setActive(item.value) }">
      <button type="button" @click="() => changeValue(item.value)">{{ item.title }}</button>
      <span>{{ item.subTitle }}</span>
      <a href="#">test link</a>
    </li>
  </template>
</Dropdown>

<!-- slot, title value -->
<Dropdown
  v-model="state.exValue7"
  name="custom-select-07"
  :items="state.exItems3"
  defaultMsg="값을 선택해 주세요"
  is-flat
  is-title
  @onChange="_onChange"
>
  <template #contents="{ items, changeValue, setActive }">
    <li :class="{ 'is-active': setActive(items[0].value) }">
      <button type="button" @click="() => changeValue(items[0].value)">{{ items[0].title }}</button>
      <span>{{ items[0].subTitle }}</span>
      <a href="#">test link111</a>
    </li>
    <li :class="{ 'is-active': setActive(items[1].value) }">
      <button type="button" @click="() => changeValue(items[1].value)">{{ items[1].title }}</button>
      <span>{{ items[1].subTitle }}</span>
      <a href="#">test link222</a>
    </li>
    <li :class="{ 'is-active': setActive(items[2].value) }">
      <button type="button" @click="() => changeValue(items[2].value)">{{ items[2].title }}</button>
      <span>{{ items[2].subTitle }}</span>
      <a href="#">test link333</a>
    </li>
    <li :class="{ 'is-active': setActive(items[3].value) }">
      <button type="button" @click="() => changeValue(items[3].value)">{{ items[3].title }}</button>
      <span>{{ items[3].subTitle }}</span>
      <a href="#">test link444</a>
    </li>
  </template>
</Dropdown>

<!-- small size -->
<Dropdown
  v-model="state.exValue8"
  name="custom-select-08"
  size="small"
  :items="state.exItems2"
  defaultMsg="값을 선택해 주세요"
  @onChange="_onChange"
/>
<!-- slot, 카트 예시 -->
<Dropdown
  v-model="state.exValue9"
  name="custom-select"
  :items="state.exItems4"
  defaultMsg="세트"
  is-flat
  is-title
>
  <template #contents="{ items, changeValue, setActive }">
    <li v-for="item in items" :key="item.value" :class="{ 'is-selected': setActive(item.value) }">
      <button type="button" @click="() => changeValue(item.value)" :disabled="item.soldOut == true">
        {{ item.title }}
        <span v-if="item.soldOut == true">(품절)</span>
        <span v-if="item.remaining > 0" class="remaining">({{ item.remaining }}개 남음)</span>
      </button>
      <button
        v-if="item.restockBtn === true"
        class="restock-btn"
        :class="{ 'is-active': item.restockBtnOn }"
        @click="item.restockBtnOn = !item.restockBtnOn"
      >
        <span class="icon">재입고 알림</span>
      </button>
    </li>
  </template>
</Dropdown>
```