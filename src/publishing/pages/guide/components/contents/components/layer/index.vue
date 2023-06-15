<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- description -->
      <Description />
      <!--// description -->
      <!-- components -->
      <h4>center 레이어</h4>
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
      <br /><br />
      <Layer id="test-layer-02" v-model="state.openFlag_02" @onClose="_onClose" @onOpen="_onOpen">
        <template #header>내용이 긴 center 레이어 내용이 긴 레이어 내용이 긴 레이어</template>
        <template #contents>
          contents contentscontentscontentscontentscontentscontentscontents
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />contentscontentscontentscontentscontents<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />contentscontentscontents<br />
        </template>
        <template #bottom>
          <div>
            <button class="ex-close-bt" type="button" @click="() => (state.openFlag_02 = false)">확인</button>
          </div>
        </template>
      </Layer>
      <button type="button" @click="() => (state.openFlag_02 = true)">center Layer 내용이 긴 열기</button>
      <br /><br /><br />
      <h4>full 레이어</h4>
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
      <br /><br />
      <Layer id="test-layer-04" v-model="state.openFlag_04" layer-type="full" @onClose="_onClose" @onOpen="_onOpen">
        <template #header>내용이 긴 full 레이어 내용이 긴 레이어 내용이 긴 레이어</template>
        <template #contents>
          contents contentscontentscontentscontentscontentscontentscontents
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />contentscontentscontentscontentscontents<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />contentscontentscontents<br />
        </template>
        <template #bottom>
          <div>
            <button class="ex-close-bt" type="button" @click="() => (state.openFlag_04 = false)">확인</button>
          </div>
        </template>
      </Layer>
      <button type="button" @click="() => (state.openFlag_04 = true)">Full Layer 내용이 긴 열기</button>
      <br /><br /><br />
      <h4>bottom 레이어</h4>
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
      <br /><br />
      <Layer
        id="test-layer-06"
        v-model="state.openFlag_06"
        layer-type="bottom"
        isCloseOutside
        @onClose="_onClose"
        @onOpen="_onOpen"
      >
        <template #header>내용이 긴 bottom 레이어 내용이 긴 레이어 내용이 긴 레이어</template>
        <template #contents>
          contents contentscontentscontentscontentscontentscontentscontents
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />contentscontentscontentscontentscontents<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />contentscontentscontents<br />
        </template>
        <template #bottom>
          <div>
            <button class="ex-close-bt" type="button" @click="() => (state.openFlag_06 = false)">확인</button>
          </div>
        </template>
      </Layer>
      <button type="button" @click="() => (state.openFlag_06 = true)">bottom Layer 내용이 긴 열기</button>
      <!-- // components -->
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'ComponentsLayer'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import Description from './index.md'
import { Layer } from '@/components/layer'
const { addIter, checkMapId } = useMapId()

// id
const id = 'system/layer'
addIter({
  category: 'components',
  id
})

const state = reactive({
  openFlag_01: false,
  openFlag_02: false,
  openFlag_03: false,
  openFlag_04: false,
  openFlag_05: false,
  openFlag_06: false
})

const _onClose = () => {
  console.log('레이어 닫기 콜백')
}
const _onOpen = () => {
  console.log('레이어 열기 콜백')
}
</script>
<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;
.ex-close-bt {
  @include bg-btn-type;
}
</style>
