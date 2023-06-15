### &#x1F4DD; pagination, navigation
```html
<div class="ex-swiper">
  <swiper
    :modules="[Navigation, Pagination, A11y]"
    :pagination="{ el: '.ex-pagination-03', clickable: true }"
    :navigation="{ prevEl: '.ex-prev-03', nextEl: '.ex-next-03' }"
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </swiper>
  <div class="ex-pagination-03"></div>
  <button class="ex-prev-03">이전으로</button>
  <button class="ex-next-03">다음으로</button>
</div>
<br />
<div class="ex-swiper">
  <swiper
    :modules="[Navigation, Pagination, A11y]"
    :loop="true"
    :pagination="{ el: '.ex-pagination-04', clickable: true }"
    :navigation="{ prevEl: '.ex-prev-04', nextEl: '.ex-next-04' }"
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </swiper>
  <div class="ex-pagination-04"></div>
  <button class="ex-prev-04">이전으로</button>
  <button class="ex-next-04">다음으로</button>
</div>
```
