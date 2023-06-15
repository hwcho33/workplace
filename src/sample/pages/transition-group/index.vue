<template>
  <div class="text-nm">
    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">서론</div>
      <p>
        TransitionGroup 은 렌더링되는 엘리먼트 또는 컴포넌트의 삽입, 제거 및 순서 변경을 애니메이션으로 만들기 위해
        설계된 빌트인 컴포넌트입니다.
      </p>
      <p>
        기본적인 예제에 대한 컴포넌트 예제를 작성할 예정이며 또한, 하위 예제의 경우 공식문서에 모두 작성되어 있습니다.
      </p>
      <p>자세한 정보는 공식문서를 참조하시기 바랍니다.</p>

      <a
        href="https://v3-docs.vuejs-korea.org/guide/built-ins/transition-group.html#enter-leave-transitions"
        target="_blank"
        >공식문서 링크</a
      >
    </div>
    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">API 호출 후 List Render 하기</div>
      <p class="text-2xl">List 를 fetch 하여 받아와, 뿌려주는 부분에서 ul tag 그룹별로 사용할 수 있는 기능이다.</p>
      <div>
        <button class="text-xl mt-5 mb-5" @click="getApiResource">API Call {{ isRender ? 'Hide' : '' }}</button>
        <button v-show="isRender" class="text-xl mt-5 mb-5" @click="shuffleItems">순서 바꾸기</button>
        <div class="border-dashed mt-3">
          <TransitionGroup name="list" tag="ul">
            <li v-for="item in renderList" :key="item.id">
              {{ item.username }}
            </li>
          </TransitionGroup>
        </div>
      </div>
    </div>
    <RenderWithApi />
    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">검색 필러링 애니메이션</div>
      <p class="text-2xl">검색 시 목록 Computed 활용 애니메이션 적용</p>
      <div>
        <input v-model="keyword" />

        <div class="border-dashed mt-3">
          <TransitionGroup name="list" tag="ul">
            <li v-for="(item, idx) in computedKeyword" :key="idx">
              {{ item }}
            </li>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </div>
  <SearchWithComputed />
</template>

<script lang="ts" setup>
import { httpRequest } from '@/utils/request'
import RenderWithApi from './md/render-with-api.md'
import SearchWithComputed from './md/search-with-computed.md'
const request = httpRequest({
  baseURL: 'https://dummyjson.com'
})

const isRender = ref<boolean>(false)
const renderList = ref<any>([])
const offset = ref<number>(4)

/**
 * API CAll 관련 함수
 */
const getApiResource = async () => {
  try {
    if (!isRender.value) {
      const res = await request.get({
        url: 'users',
        params: { limit: 4, skip: offset.value }
      })

      offset.value += 4
      for (let i in res.users) {
        renderList.value.push(res.users[i])
      }
      isRender.value = true
    } else {
      renderList.value = []
      isRender.value = false
    }
  } catch (e) {
    console.error(e)
  }
}

const shuffleItems = () => {
  renderList.value.sort(() => Math.random() - 0.5)
}

/**
 * 검색 기능 관련 소스
 */

const keyword = ref<string>('')

const computedList = ['Hyunwoo', 'Byungsu', 'SungYong', 'SangChul']
const computedKeyword = computed(() => {
  return computedList.filter(item => item.toLowerCase().includes(keyword.value))
})
</script>

<style lang="scss" scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
