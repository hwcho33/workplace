<template>
  <div class="color-item-wrap">
    <div class="color-item-info">
      <div class="title-txt">{{ title }}</div>
      <div class="var-txt">
        <span>{{ variableName }}</span>
      </div>
    </div>
    <div class="color-item-box">
      <div class="box-item" :style="{'background-color': hexColorCode}"></div>
      <div class="hex-txt">{{ hexColorCode }}</div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'StylesColorListItem'
}
</script>
<script lang="ts" setup>
export interface Props {
  title: string
  variableName: string
  hexColorCode: string
}
withDefaults(defineProps<Props>(), {
  title: '',
  var: '',
  hex: ''
})
</script>
<style lang="scss" scoped>
.color-item-wrap {
  width: 90%;
  border: 1px solid #000;
  .title-txt {
    font-size: 14px;
    font-weight: 700;
    padding: 5px 10px;
    background-color: beige;
  }
  .var-txt {
    font-size: 13px;
    padding: 5px 10px;
    border-bottom: 1px solid #000;
    span {
      font-weight: 700;
    }
  }
  .box-item {
    height: 50px;
  }
  .hex-txt {
    font-size: 13px;
    text-align: center;
    border-top: 1px solid #000;
  }
}
</style>
