### &#x1F4DD; 멀티 loop
```html
<div class="ex-swiper">
  <swiper
    :modules="[Navigation, A11y]"
    :slides-per-view="3"
    :space-between="5"
    :loop="true"
    :loop-additional-slides="1"
    :navigation="{prevEl: '.ex-prev-05', nextEl: '.ex-next-05'}"
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper> 
  <button class="ex-prev-05">이전으로</button>
  <button class="ex-next-05">다음으로</button>
</div>
<br /><br />
<div class="ex-swiper">
  <swiper
    :modules="[Navigation, A11y]"
    :slides-per-view="4"
    :space-between="5"
    :centered-slides="true"
    :loop="true"
    :loop-additional-slides="1"
    :navigation="{prevEl: '.ex-prev-07', nextEl: '.ex-next-07'}"
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper> 
  <button class="ex-prev-07">이전으로</button>
  <button class="ex-next-07">다음으로</button>
</div>
<br /><br />
<div class="ex-swiper">
  <swiper
    :modules="[Navigation, A11y]"
    :slides-per-view="8"
    :space-between="5"
    :loop="true"
    :loop-additional-slides="1"
    :navigation="{prevEl: '.ex-prev-08', nextEl: '.ex-next-08'}"
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
  </Swiper> 
  <button class="ex-prev-08">이전으로</button>
  <button class="ex-next-08">다음으로</button>
</div>
```