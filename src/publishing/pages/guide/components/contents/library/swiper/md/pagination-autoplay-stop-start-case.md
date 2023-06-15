### &#x1F4DD; autoplay, pagination, stop&start
```html
<div class="ex-swiper">
  <swiper
    :modules="[Pagination, Autoplay, A11y]"
    :loop="true"
    :pagination="{el: '.ex-pagination-07', clickable: true}"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false
    }"
    @swiper="_onGetSwiperIns"
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper> 
  <div class="ex-pagination-07"></div>
  <button v-if="state.isAutoPlay" class="ex-stop" @click="_onSlideStop">stop</button>
  <button v-if="!state.isAutoPlay" class="ex-start" @click="_onSlideStart">start</button>
</div>
```
```ts
const state = reactive({
  isAutoPlay: true
})
const swiperIns = ref<SwiperType | null>(null)

const _onGetSwiperIns = (swiper: SwiperType) => {
  swiperIns.value = swiper
}
const _onSlideStop = () => {
  swiperIns.value?.autoplay.stop()
  state.isAutoPlay = false
}

const _onSlideStart = () => {
  swiperIns.value?.autoplay.start()
  state.isAutoPlay = true
}
```