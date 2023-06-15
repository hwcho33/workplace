<template>
  <div class="text-nm">
    <div class="mb-50">
      <div data-name="title" class="text-amber-200 bg-neutral pa-3 text-xl">사용법</div>
      <IndexMd />
    </div>

    <div>
      <div data-name="title" class="text-amber-200 bg-neutral pa-3 text-xl">사용 예시</div>
      <ul>
        <li class="list-item list-none" v-for="item in items" :key="item.id">
          <img :src="item.image" :alt="item.id" />
          <p>Name : {{ item.lastName }}</p>
        </li>
      </ul>
      <Observer @intersect="intersected" />
    </div>
  </div>
</template>

<script setup lang="ts">
// utils
import { httpRequest } from '@/utils/request'

// components
import Observer from './observe.vue'

// md
import IndexMd from './md/index.md'

// 더미 데이터를 위한 API 통신
const request = httpRequest({
  baseURL: 'https://dummyjson.com'
})

// 실제 뿌려질 데이터를 담기 위한 배열
const items = ref<any>([])
// 추가적으로 불러올 아이템 갯수
const offset = ref<number>(4)

// trigger 까지 도달했을때 불려질 함수
const intersected = async () => {
  try {
    const res = await request.get({
      url: 'users',
      params: { limit: 4, skip: offset.value }
    })

    offset.value += 4
    for (let i in res.users) {
      items.value.push(res.users[i])
    }
  } catch (e) {
    console.error(e)
  }
}
</script>
