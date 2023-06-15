<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- border 버튼 mixin  -->
      <BorderBtnMd />
      <div style="position: relative">
        <div class="ex-button-wrapper">
          <button class="ex-btn-01">border-red</button>
          <button class="ex-btn-02">border-black</button>
          <button class="ex-btn-02 disable">border-disable</button>
        </div>

        <br />

        <div class="ex-button-wrapper">
          <button class="ex-btn-03">border-red</button>
          <button class="ex-btn-04">border-black</button>
          <button class="ex-btn-04 disable">border-disable</button>
        </div>
      </div>
      <br /><br />
      <!--// border 버튼 mixin -->
      <!-- filled 버튼 mixin -->
      <BgBtnMd />
      <div style="position: relative">
        <div class="ex-button-wrapper">
          <button class="ex-btn-05"><i style="margin-right: 5">icon</i>filled-red</button>
          <a href="#" class="ex-btn-06"> <i style="margin-right: 5">icon</i> filled-black </a>
          <button class="ex-btn-06 disable">filled-disable</button>
        </div>

        <br />

        <div class="ex-button-wrapper">
          <button class="ex-btn-07"><i style="margin-right: 5">icon</i>filled-red</button>
          <a href="#" class="ex-btn-08"> <i style="margin-right: 5">icon</i> filled-black </a>
          <button class="ex-btn-08 disable">filled-disable</button>
        </div>
      </div>
      <br /><br />
      <!--// filled 버튼 mixin -->
      <!-- button wrapper mixin -->
      <ButtonWrapperMd />
      <div style="position: relative">
        <div class="ex-button-wrapper-type1">
          <button class="ex-btn-05">medium-filled-red</button>
          <button class="ex-btn-01">medium-ghost-red</button>
        </div>
        <br /><br />
        <div class="ex-button-wrapper-type2">
          <button class="ex-btn-05"><i style="margin-right: 5">icon</i>medium-filled-red</button>
          <a class="ex-btn-01"><i style="margin-right: 5">icon</i> medium-ghost-red</a>
          <button class="ex-btn-02">medium-ghost-black</button>
        </div>
        <br /><br />
        <div class="ex-button-wrapper-type3">
          <a class="ex-btn-01" style="width: 10rem"><i style="margin-right: 5">icon</i></a>
          <button class="ex-btn-05">medium-filled-red</button>
          <button class="ex-btn-02">medium-ghost-black</button>
        </div>
      </div>
      <br /><br />
      <!--// button wrapper mixin -->
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'ComponentsButton'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import BorderBtnMd from './md/border-btn.md'
import BgBtnMd from './md/bg-btn.md'
import ButtonWrapperMd from './md/button-wrapper.md'
const { addIter, checkMapId } = useMapId()

// id
const id = 'button'
addIter({
  category: 'components',
  id
})
</script>
<style lang="scss"></style>
