<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- description -->
      <Description />
      <!--// description -->
      <!-- components -->
      <div style="position: relative">
        <ul class="ex-bullet-list">
          <li>비회원 주문조회는 주문번호와 주문 시 설정한 비밀번호를 통해 확인 할 수 있습니다.</li>
          <li>주문번호는 주문완료 시 이메일 또는 문자로 자동 발송 됩니다.</li>
          <li>주문번호가 기억나지 않으시면 고객센터 <span>(1800-0770(유료)</span>로 문의하시기 바랍니다.</li>
        </ul>
      </div>
      <!--// components -->
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'ComponentsBulletList'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import Description from './index.md'
const { addIter, checkMapId } = useMapId()

// id
const id = 'bullet-list'
addIter({
  category: 'components',
  id
})
</script>
<style lang="scss" scoped></style>
