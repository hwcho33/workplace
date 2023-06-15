# &#x1F4CC; 추천 상품

## &#x1F4C1; description
```bash
- 추천 상품 컴퍼넌트
```

## &#x1F4C1; code


### &#x1F4DD; template
```html
<GoodsRecommend title="함께 구매하면 좋은 상품" :items="goodsList" />
```

### &#x1F4DD; ts
```ts
import { request } from '@/utils/request'
import GoodsRecommend from '&/components/goods-recommend.vue'

interface ListInfo {
  img: string
  name: string
  originPrice: string
  dcPrice: string
  dcRate: string
  url: string
}

let goodsList: Ref<ListInfo[]> = ref<any>([])

onMounted(() => {
  request
    .post({
      url: '/test***/goodsList'
    })
    .then(res => {
      goodsList.value = res.data
    })
})
```

## &#x1F4C1; sample
