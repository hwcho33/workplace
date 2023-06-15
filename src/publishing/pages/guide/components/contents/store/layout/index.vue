<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- uiLayoutStoreMd -->
      <UiLayoutStoreMd />
      <FloatingRight />
      <button type="button" @click="_onAddClass">FloatingRight 컴퍼넌트에 클래스 주입</button>
      <br /><br />
      <button type="button" @click="_onResetClass">FloatingRight 컴퍼넌트에 클래스 삭제</button>
      <p>
        className : <span style="color: blue">{{ uiLayoutStore.floatingRightClass }}</span>
      </p>
      <p>**우측 FloatingRight 컴퍼넌트 예시</p>
      <!--// uiLayoutStoreMd -->

      <div style="position: relative"></div>
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'ContentsStoreUiLayout'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import UiLayoutStoreMd from './md/uiLayoutStore.md'
import { FloatingRight } from '~/layouts/components/modules'
import { useUiLayoutStore } from '~/store'
const { addIter, checkMapId } = useMapId()

// id
const id = 'ui/layout'
addIter({
  category: 'store(pinia)',
  id
})

const uiLayoutStore = useUiLayoutStore()
const _onAddClass = () => {
  uiLayoutStore.setFloatingRightClass('has-bottom')
}
const _onResetClass = () => {
  uiLayoutStore.resetFloatingRightClass()
}
</script>
<style lang="scss" scoped>
.has-bottom {
  background-color: aqua;
}
</style>
