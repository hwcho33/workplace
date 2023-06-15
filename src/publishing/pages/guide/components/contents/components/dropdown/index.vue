<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- description -->
      <Description />
      <!--// description -->
      <!-- components -->
      <h4>값이 선택 안됨</h4>
      <Dropdown
        v-model="state.exValue1"
        name="custom-select-01"
        :items="state.exItems1"
        defaultMsg="값을 선택해 주세요"
        @onChange="_onChange"
      />
      <div>
        current value: <span style="color: blue">{{ state.exValue1 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>값이 선택됨</h4>
      <Dropdown
        v-model="state.exValue2"
        name="custom-select-02"
        :items="state.exItems2"
        defaultMsg="값을 선택해 주세요"
        @onChange="_onChange"
      />
      <div>
        current value: <span style="color: blue">{{ state.exValue2 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>에러</h4>
      <Dropdown
        v-model="state.exValue3"
        name="custom-select-03"
        is-error
        guidetMsg="필수 값입니다."
        defaultMsg="값을 선택해 주세요"
        :items="state.exItems2"
        @onChange="_onChange"
      />
      <div>
        current value: <span style="color: blue">{{ state.exValue3 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>disabled</h4>
      <Dropdown
        v-model="state.exValue4"
        name="custom-select-03"
        is-disabled
        defaultMsg="값을 선택해 주세요"
        :items="state.exItems2"
      />
      <div>
        current value: <span style="color: blue">{{ state.exValue4 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>flat ui</h4>
      <Dropdown
        v-model="state.exValue5"
        name="custom-select-05"
        :items="state.exItems2"
        defaultMsg="값을 선택해 주세요"
        is-flat
        @onChange="_onChange"
      />
      <div>
        current value: <span style="color: blue">{{ state.exValue5 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>slot</h4>
      <Dropdown
        v-model="state.exValue6"
        name="custom-select-06"
        :items="state.exItems3"
        defaultMsg="값을 선택해 주세요"
        is-flat
        @onChange="_onChange"
      >
        <template #contents="{ items, changeValue, setActive }">
          <li v-for="item in items" :key="item.value" :class="{ 'is-selected': setActive(item.value) }">
            <button type="button" @click="() => changeValue(item.value)">{{ item.title }}</button>
            <span>{{ item.subTitle }}</span>
            <a href="#">test link</a>
          </li>
        </template>
      </Dropdown>
      <div>
        current value: <span style="color: blue">{{ state.exValue6 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>slot, title value</h4>
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
          <li :class="{ 'is-selected': setActive(items[0].value) }">
            <button type="button" @click="() => changeValue(items[0].value)">{{ items[0].title }}</button>
            <span>{{ items[0].subTitle }}</span>
            <a href="#">test link111</a>
          </li>
          <li :class="{ 'is-selected': setActive(items[1].value) }">
            <button type="button" @click="() => changeValue(items[1].value)">{{ items[1].title }}</button>
            <span>{{ items[1].subTitle }}</span>
            <a href="#">test link222</a>
          </li>
          <li :class="{ 'is-selected': setActive(items[2].value) }">
            <button type="button" @click="() => changeValue(items[2].value)">{{ items[2].title }}</button>
            <span>{{ items[2].subTitle }}</span>
            <a href="#">test link333</a>
          </li>
          <li :class="{ 'is-selected': setActive(items[3].value) }">
            <button type="button" @click="() => changeValue(items[3].value)">{{ items[3].title }}</button>
            <span>{{ items[3].subTitle }}</span>
            <a href="#">test link444</a>
          </li>
        </template>
      </Dropdown>
      <div>
        current value: <span style="color: blue">{{ state.exValue7 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>small size</h4>
      <Dropdown
        v-model="state.exValue8"
        name="custom-select-08"
        size="small"
        :items="state.exItems2"
        defaultMsg="값을 선택해 주세요"
        @onChange="_onChange"
      />
      <div>
        current value: <span style="color: blue">{{ state.exValue8 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>slot, 카트 예시</h4>
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
      <div>
        current value: <span style="color: blue">{{ state.exValue9 }}</span>
      </div>
      <!-- // components -->
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'ComponentsDropdown'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import Description from './index.md'
import { Dropdown } from '@/components/dropdown'
const { addIter, checkMapId } = useMapId()

// id
const id = 'system/dropdown'
addIter({
  category: 'components',
  id
})

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
</script>
<style lang="scss" scoped></style>
