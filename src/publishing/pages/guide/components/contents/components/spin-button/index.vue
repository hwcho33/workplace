<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- description -->
      <Description />
      <!--// description -->
      <!-- components -->
      <h4>값이 선택 안됨, 최소값: 1,최대값: 99,증가값: 1</h4>
      <SpinButton v-model="state.exValue1" name="spin-button-01" @onChange="_onChange" />
      <div>
        current value: <span style="color: blue">{{ state.exValue1 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>값이 선택됨, 최소값: 1,최대값: 99,증가값: 1</h4>
      <SpinButton v-model="state.exValue2" name="spin-button-02" @onChange="_onChange" />
      <div>
        current value: <span style="color: blue">{{ state.exValue2 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>값이 선택됨, 최소값: 1,최대값: 9,증가값: 1</h4>
      <SpinButton v-model="state.exValue3" max="9" name="spin-button-03" @onChange="_onChange" />
      <div>
        current value: <span style="color: blue">{{ state.exValue3 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>값이 선택됨, 최소값: 3,최대값: 99,증가값: 1</h4>
      <SpinButton v-model="state.exValue4" min="3" name="spin-button-04" @onChange="_onChange" />
      <div>
        current value: <span style="color: blue">{{ state.exValue4 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>값이 선택됨, 최소값: 1,최대값: 99,증가값: 8</h4>
      <SpinButton v-model="state.exValue5" step="8" name="spin-button-05" @onChange="_onChange" />
      <div>
        current value: <span style="color: blue">{{ state.exValue5 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>값이 선택됨, disabled</h4>
      <SpinButton v-model="state.exValue6" name="spin-button-06" isDisabled @onChange="_onChange" />
      <div>
        current value: <span style="color: blue">{{ state.exValue6 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>값이 선택됨, useSpinLoading(delay: 0) 로딩삭제</h4>
      <SpinButton v-model="state.exValue7" name="spin-button-07" :useSpinLoading="0" @onChange="_onChange" />
      <div>
        current value: <span style="color: blue">{{ state.exValue7 }}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>값이 선택됨, useSpinLoading(delay: 1000) delay 1초</h4>
      <SpinButton v-model="state.exValue8" name="spin-button-08" :useSpinLoading="1000" @onChange="_onChange" />
      <div>
        current value: <span style="color: blue">{{ state.exValue8 }}</span>
      </div>
      <!-- // components -->
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'ComponentsSpinButton'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import Description from './index.md'
import { SpinButton } from '@/components/spin-button'
const { addIter, checkMapId } = useMapId()

// id
const id = 'system/spin-button'
addIter({
  category: 'components',
  id
})

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
</script>
<style lang="scss" scoped></style>
