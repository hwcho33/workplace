<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- description -->
      <Description />
      <!--// description -->

      <div style="position: relative">
        <br /><br />
        <div class="ex-label-wrap">
          <span class="tv"><i>TV쇼핑</i></span>
          <span class="store"><i>백화점</i></span>
          <span class="book"><i>쇼핑북</i></span>
          <span class="singsing"><i>씽씽배송</i></span>
          <span class="free"><i>무료배송</i></span>
          <span><i>쿠폰19%</i></span>
          <span><i>쿠폰</i></span>
          <span><i>적립99%</i></span>
          <span><i>카드99%</i></span>
          <span><i>카드할인</i></span>
          <span><i>무이자12</i></span>
          <span><i>사은품</i></span>
          <span class="save"><i>5%적립</i></span>
          <span class="discount"><i>15%할인</i></span>
          <span class="happydeal"><i>해피딜</i></span>
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

// id
const id = 'label'
addIter({
  category: 'components',
  id
})
</script>
<style lang="scss" scoped></style>
