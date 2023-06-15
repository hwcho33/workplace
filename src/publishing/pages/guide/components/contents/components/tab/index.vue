<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- description -->
      <Description />
      <!--// description -->

      <div style="position: relative">
        <br /><br />
        <div class="ex-tab-wrap ex-size2">
          <ul>
            <li
              v-for="item in state.tab_Size2_Items"
              :key="item.id"
              :class="{
                active: item.id === state.active_Size2_Tab
              }"
            >
              <div class="tab-btn">
                <a href="javascript:void(0)" @click.prevent="_onChangeTab_SIZE_2(item.id)">{{ item.title }}</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div v-if="state.active_Size2_Tab === TAB_SIZE_2.TAB1">Tab1</div>
          <div v-if="state.active_Size2_Tab === TAB_SIZE_2.TAB2">Tab2</div>
        </div>
        <br /><br />
        <div class="ex-tab-wrap ex-size3">
          <ul>
            <li
              v-for="item in state.tab_Size3_Items"
              :key="item.id"
              :class="{
                active: item.id === state.active_Size3_Tab
              }"
            >
              <div class="tab-btn">
                <a href="javascript:void(0)" @click.prevent="_onChangeTab_SIZE_3(item.id)">{{ item.title }}</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div v-if="state.active_Size3_Tab === TAB_SIZE_3.TAB1">Tab1</div>
          <div v-if="state.active_Size3_Tab === TAB_SIZE_3.TAB2">Tab2</div>
          <div v-if="state.active_Size3_Tab === TAB_SIZE_3.TAB3">Tab3</div>
        </div>
        <br /><br />
        <div class="ex-tab-wrap ex-size4">
          <ul>
            <li
              v-for="item in state.tab_Size4_Items"
              :key="item.id"
              :class="{
                active: item.id === state.active_Size4_Tab
              }"
            >
              <div class="tab-btn">
                <a href="javascript:void(0)" @click.prevent="_onChangeTab_SIZE_4(item.id)">{{ item.title }}</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div v-if="state.active_Size4_Tab === TAB_SIZE_4.TAB1">Tab1</div>
          <div v-if="state.active_Size4_Tab === TAB_SIZE_4.TAB2">Tab2</div>
          <div v-if="state.active_Size4_Tab === TAB_SIZE_4.TAB3">Tab3</div>
          <div v-if="state.active_Size4_Tab === TAB_SIZE_4.TAB4">Tab4</div>
        </div>
        <br /><br />
        <div class="ex-tab-wrap ex-size5">
          <ul>
            <li
              v-for="item in state.tab_Size5_Items"
              :key="item.id"
              :class="{
                active: item.id === state.active_Size5_Tab
              }"
            >
              <div class="tab-btn">
                <a href="javascript:void(0)" @click.prevent="_onChangeTab_SIZE_5(item.id)">{{ item.title }}</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div v-if="state.active_Size5_Tab === TAB_SIZE_5.TAB1">Tab1</div>
          <div v-if="state.active_Size5_Tab === TAB_SIZE_5.TAB2">Tab2</div>
          <div v-if="state.active_Size5_Tab === TAB_SIZE_5.TAB3">Tab3</div>
          <div v-if="state.active_Size5_Tab === TAB_SIZE_5.TAB4">Tab4</div>
          <div v-if="state.active_Size5_Tab === TAB_SIZE_5.TAB5">Tab5</div>
        </div>
        <br /><br />
        <div class="ex-tab-wrap ex-size6">
          <ul>
            <li
              v-for="item in state.tab_Size6_Items"
              :key="item.id"
              :class="{
                active: item.id === state.active_Size6_Tab
              }"
            >
              <div class="tab-btn">
                <a href="javascript:void(0)" @click.prevent="_onChangeTab_SIZE_6(item.id)">{{ item.title }}</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div v-if="state.active_Size6_Tab === TAB_SIZE_6.TAB1">Tab1</div>
          <div v-if="state.active_Size6_Tab === TAB_SIZE_6.TAB2">Tab2</div>
          <div v-if="state.active_Size6_Tab === TAB_SIZE_6.TAB3">Tab3</div>
          <div v-if="state.active_Size6_Tab === TAB_SIZE_6.TAB4">Tab4</div>
          <div v-if="state.active_Size6_Tab === TAB_SIZE_6.TAB5">Tab5</div>
          <div v-if="state.active_Size6_Tab === TAB_SIZE_6.TAB6">Tab6</div>
        </div>
        <br /><br />
        <div class="ex-tab-wrap ex-size7">
          <ul>
            <li
              v-for="item in state.tab_Size7_Items"
              :key="item.id"
              :class="{
                active: item.id === state.active_Size7_Tab
              }"
            >
              <div class="tab-btn">
                <a href="javascript:void(0)" @click.prevent="_onChangeTab_SIZE_7(item.id)">{{ item.title }}</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div v-if="state.active_Size7_Tab === TAB_SIZE_7.TAB1">Tab1</div>
          <div v-if="state.active_Size7_Tab === TAB_SIZE_7.TAB2">Tab2</div>
          <div v-if="state.active_Size7_Tab === TAB_SIZE_7.TAB3">Tab3</div>
          <div v-if="state.active_Size7_Tab === TAB_SIZE_7.TAB4">Tab4</div>
          <div v-if="state.active_Size7_Tab === TAB_SIZE_7.TAB5">Tab5</div>
          <div v-if="state.active_Size7_Tab === TAB_SIZE_7.TAB6">Tab6</div>
          <div v-if="state.active_Size7_Tab === TAB_SIZE_7.TAB7">Tab7</div>
        </div>
        <br /><br />
      </div>
    </template>
  </ContentBox>
</template>

<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import Description from './index.md'
const { addIter, checkMapId } = useMapId()

const TAB_SIZE_2 = { TAB1: 'TAB1', TAB2: 'TAB2' } as const
const TAB_SIZE_3 = { TAB1: 'TAB1', TAB2: 'TAB2', TAB3: 'TAB3' } as const
const TAB_SIZE_4 = { TAB1: 'TAB1', TAB2: 'TAB2', TAB3: 'TAB3', TAB4: 'TAB4' } as const
const TAB_SIZE_5 = { TAB1: 'TAB1', TAB2: 'TAB2', TAB3: 'TAB3', TAB4: 'TAB4', TAB5: 'TAB5' } as const
const TAB_SIZE_6 = { TAB1: 'TAB1', TAB2: 'TAB2', TAB3: 'TAB3', TAB4: 'TAB4', TAB5: 'TAB5', TAB6: 'TAB6' } as const
const TAB_SIZE_7 = {
  TAB1: 'TAB1',
  TAB2: 'TAB2',
  TAB3: 'TAB3',
  TAB4: 'TAB4',
  TAB5: 'TAB5',
  TAB6: 'TAB6',
  TAB7: 'TAB7'
} as const

type KEY_SIZE_2 = (typeof TAB_SIZE_2)[keyof typeof TAB_SIZE_2]
type KEY_SIZE_3 = (typeof TAB_SIZE_3)[keyof typeof TAB_SIZE_3]
type KEY_SIZE_4 = (typeof TAB_SIZE_4)[keyof typeof TAB_SIZE_4]
type KEY_SIZE_5 = (typeof TAB_SIZE_5)[keyof typeof TAB_SIZE_5]
type KEY_SIZE_6 = (typeof TAB_SIZE_6)[keyof typeof TAB_SIZE_6]
type KEY_SIZE_7 = (typeof TAB_SIZE_7)[keyof typeof TAB_SIZE_7]
interface Reactive {
  tab_Size2_Items: { id: KEY_SIZE_2; title: string }[]
  active_Size2_Tab: KEY_SIZE_2
  tab_Size3_Items: { id: KEY_SIZE_3; title: string }[]
  active_Size3_Tab: KEY_SIZE_3
  tab_Size4_Items: { id: KEY_SIZE_4; title: string }[]
  active_Size4_Tab: KEY_SIZE_4
  tab_Size5_Items: { id: KEY_SIZE_5; title: string }[]
  active_Size5_Tab: KEY_SIZE_5
  tab_Size6_Items: { id: KEY_SIZE_6; title: string }[]
  active_Size6_Tab: KEY_SIZE_6
  tab_Size7_Items: { id: KEY_SIZE_7; title: string }[]
  active_Size7_Tab: KEY_SIZE_7
}

// id
const id = 'tab'
addIter({
  category: 'components',
  id
})

const state = reactive<Reactive>({
  tab_Size2_Items: [
    { id: TAB_SIZE_2.TAB1, title: '휴대폰' },
    { id: TAB_SIZE_2.TAB2, title: '이메일' }
  ],
  active_Size2_Tab: TAB_SIZE_2.TAB1,
  tab_Size3_Items: [
    { id: TAB_SIZE_3.TAB1, title: '휴대폰' },
    { id: TAB_SIZE_3.TAB2, title: '이메일' },
    { id: TAB_SIZE_3.TAB3, title: '탭3번' }
  ],
  active_Size3_Tab: TAB_SIZE_3.TAB1,
  tab_Size4_Items: [
    { id: TAB_SIZE_4.TAB1, title: '휴대폰' },
    { id: TAB_SIZE_4.TAB2, title: '이메일' },
    { id: TAB_SIZE_4.TAB3, title: '탭3번' },
    { id: TAB_SIZE_4.TAB4, title: '탭4번' }
  ],
  active_Size4_Tab: TAB_SIZE_4.TAB3,
  tab_Size5_Items: [
    { id: TAB_SIZE_5.TAB1, title: '휴대폰' },
    { id: TAB_SIZE_5.TAB2, title: '이메일' },
    { id: TAB_SIZE_5.TAB3, title: '탭3번' },
    { id: TAB_SIZE_5.TAB4, title: '탭4번' },
    { id: TAB_SIZE_5.TAB5, title: '탭5번' }
  ],
  active_Size5_Tab: TAB_SIZE_5.TAB4,
  tab_Size6_Items: [
    { id: TAB_SIZE_6.TAB1, title: '휴대폰' },
    { id: TAB_SIZE_6.TAB2, title: '이메일' },
    { id: TAB_SIZE_6.TAB3, title: '탭3번' },
    { id: TAB_SIZE_6.TAB4, title: '탭4번' },
    { id: TAB_SIZE_6.TAB5, title: '탭5번' },
    { id: TAB_SIZE_6.TAB6, title: '탭6번' }
  ],
  active_Size6_Tab: TAB_SIZE_6.TAB5,
  tab_Size7_Items: [
    { id: TAB_SIZE_7.TAB1, title: '휴대폰' },
    { id: TAB_SIZE_7.TAB2, title: '이메일' },
    { id: TAB_SIZE_7.TAB3, title: '탭3번' },
    { id: TAB_SIZE_7.TAB4, title: '탭4번' },
    { id: TAB_SIZE_7.TAB5, title: '탭5번' },
    { id: TAB_SIZE_7.TAB6, title: '탭6번' },
    { id: TAB_SIZE_7.TAB7, title: '탭7번' }
  ],
  active_Size7_Tab: TAB_SIZE_7.TAB3
})

const _onChangeTab_SIZE_2 = (id: KEY_SIZE_2) => {
  state.active_Size2_Tab = id
}
const _onChangeTab_SIZE_3 = (id: KEY_SIZE_3) => {
  state.active_Size3_Tab = id
}
const _onChangeTab_SIZE_4 = (id: KEY_SIZE_4) => {
  state.active_Size4_Tab = id
}
const _onChangeTab_SIZE_5 = (id: KEY_SIZE_5) => {
  state.active_Size5_Tab = id
}
const _onChangeTab_SIZE_6 = (id: KEY_SIZE_6) => {
  state.active_Size6_Tab = id
}
const _onChangeTab_SIZE_7 = (id: KEY_SIZE_7) => {
  state.active_Size7_Tab = id
}
</script>
<style lang="scss" scoped></style>
