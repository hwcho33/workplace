## &#x1F4C1; description
```bash
- swiper vue Component 케이스 가이드
- swiper@8.4.7 사용 => swiper@9 멀티loop 에러로 다운그레이드
```
- [swiper vue Component api 로 이동](https://swiperjs.com/vue)
- [swiper api 로 이동](https://swiperjs.com/swiper-api)

## &#x1F4C1; code

### &#x1F4DD; ts
```ts
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, Autoplay, Zoom, FreeMode, Thumbs, A11y } from 'swiper'
import type { Swiper as SwiperType } from 'swiper'
// import 'swiper/css' --> app.ts에 전역 연결
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/scrollbar'
import 'swiper/css/zoom'
import 'swiper/css/thumbs'

const _onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}
const _onSlideChange = () => {
  console.log('slide change')
}
```

## &#x1F4C1; sample
