### &#x1F4DD; 기본형 및 hook콜백
```html
<div class="ex-swiper">
  <swiper :modules="[A11y]" @swiper="_onSwiper" @slide-change="_onSlideChange">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </swiper>
</div>
```