```ts
// utils
import { httpRequest } from '@/utils/request'

// components
import Observer from './observe.vue'

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
```

```ts
import {request} from '@/utils/request'

const getDataList: any = async () => {
  try {
    const result = await request.get({
      url: '/v1/home/topbanner'
    })
    return result
  } catch(e) {
    console.error(e)
  }
}
```