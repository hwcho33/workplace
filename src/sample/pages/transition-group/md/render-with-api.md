```html
<div class="mb-24">
  <div class="text-amber-200 bg-neutral pa-3 text-3xl">
    API 호출 후 List Render 하기
  </div>
  <p class="text-2xl">
    List 를 fetch 하여 받아와, 뿌려주는 부분에서 ul tag 그룹별로 사용할 수
    있는 기능이다.
  </p>
  <div>
    <button class="text-xl mt-5 mb-5" @click="getApiResource">
      API Call {{ isRender ? 'Hide' : '' }}
    </button>
    <button
      v-show="isRender"
      class="text-xl mt-5 mb-5"
      @click="shuffleItems"
    >
      순서 바꾸기
    </button>
    <div class="border-dashed mt-3">
      <TransitionGroup name="list" tag="ul">
        <li v-for="item in renderList" :key="item.id">
          {{ item.username }}
        </li>
      </TransitionGroup>
    </div>
  </div>
</div>

<script lang="ts" setup>
import { httpRequest } from '@/utils/request'

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
```