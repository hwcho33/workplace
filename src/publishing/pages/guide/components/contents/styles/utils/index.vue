<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- description -->
      <Description />
      <!--// description -->
      <div style="position: relative; display: none">
        <div class="utils-rem"></div>
      </div>

      <br />
      <div style="position: relative; display: none">
        <div class="utils-vw"></div>
      </div>

      <br />
      <div style="position: relative; display: none">
        <div class="utils-ease"></div>
      </div>

      <br />
      <div style="position: relative; display: none">
        <div class="mixins-hide-txt"></div>
      </div>

      <br />

      <div style="position: relative; display: none">
        <div class="mixins-word-wrap"></div>
      </div>

      <br />
      <div style="position: relative; display: none">
        <div class="mixins-blind"></div>
      </div>

      <br />
      <div style="position: relative; width: 200px">
        <div class="mixins-eline-clamp">
          1줄 줄임 1줄 줄임 1줄 줄임 1줄 줄임 1줄 줄임 1줄 줄임 1줄 줄임 1줄 줄임 1줄 줄임
        </div>
      </div>
      <br />
      <div style="position: relative; width: 200px">
        <div class="mixins-eline-clamp2">
          2줄 줄임 2줄 줄임 2줄 줄임 2줄 줄임 2줄 줄임 2줄 줄임 2줄 줄임 2줄 줄임 2줄 줄임
        </div>
      </div>

      <br />
      <div style="position: relative; display: none">
        <div class="mixins-clear"></div>
      </div>

      <br />
      <div style="position: relative; width: 200px">
        <div class="mixins-inline-scrolling">
          <p>11</p>
          <p>22</p>
          <p>33</p>
          <p>44</p>
        </div>
      </div>

      <br />
      <div style="position: relative; display: none">
        <div class="mixins-media"></div>
      </div>
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'StylesUtils'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import Description from './index.md'
const { addIter, checkMapId } = useMapId()

// id
const id = 'utils'
addIter({
  category: 'styles',
  id
})
</script>
<style lang="scss"></style>
