<template>
  <div class="typography-item-wrap" :style="{ 'font-weight': fontSize }">
    <ul>
      <li v-for="(item, index) in sequence" :key="index">
        <div class="typography-px" :style="{ 'font-size': `${item}px` }">{{ item }}px &#x1F4BF;</div>
        <div class="typography-cont" :style="{ 'font-size': `${item}px` }">
          <p>{{ text1 }}</p>
          <p>{{ text2 }}</p>
          <p>{{ text3 }}</p>
          <p>{{ text4 }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  name: 'StylesTypographyItem'
}
</script>
<script lang="ts" setup>
export interface Props {
  fontSize: number
}
withDefaults(defineProps<Props>(), {
  fontSize: 400
})
const sequence = [10, 12, 14, 16, 18, 20, 25, 28, 32, 40, 48]
const text1 = `
건강한 아이디어 엔에스 홈쇼핑 
`
const text2 = `
abcdefghijklmnopqrstuvwxyz
`
const text3 = `
12345667890 
`
const text4 = `
!@#$%^&*()-+(※)
`
</script>
<style lang="scss" scoped>
.typography-item-wrap {
  > ul {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px;
    > li {
      padding: 0;
      list-style: none;
      display: flex;
    }
  }
  .typography-px {
    margin-right: 15px;
    color: #428bca;
  }
  .typography-cont {
    overflow: hidden;
    p {
      padding: 5px;
      margin: 0;
    }
  }
}
</style>
