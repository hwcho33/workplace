<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- description -->
      <Description />
      <!--// description -->

      <div style="position: relative">
        <router-link class="ex-link" to="/publishing/customer/member/join-complete">회원가입 완료 페이지로</router-link>
        <br /><br />
        <button
          class="ex-link"
          @click="$router.push({ path: '/publishing/customer/member/simple-join', query: { testId: 12 } })"
        >
          template router
        </button>
        <br /><br />
        <button class="ex-link" @click="_onClickChangeId">ts router</button>
      </div>
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'ContentsTest'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import Description from './index.md'
const { addIter, checkMapId } = useMapId()

// id
const id = 'vue-router'
addIter({
  category: 'library',
  id
})
const router = useRouter()
const _onClickChangeId = () => {
  router.push({ path: '/publishing/customer/member/simple-join', query: { testId: 12 } })
}
</script>
<style lang="scss" scoped>
.ex-link {
  background-color: #f7f7f7;
  border: 1px solid #000;
  padding: 3px 10px;
  display: inline-flex;
  border-radius: 10px;
}
</style>
