### &#x1F4DD; navigation
```html
<div class="ex-swiper">
  <Swiper :modules="[Navigation, A11y]" :navigation="{prevEl: '.ex-prev-01', nextEl: '.ex-next-01'}">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper> 
  <button class="ex-prev-01">이전으로</button>
  <button class="ex-next-01">다음으로</button>
</div>
<br />
<div class="ex-swiper">
  <Swiper :modules="[Navigation, A11y]" :loop="true" :navigation="{prevEl: '.ex-prev-02', nextEl: '.ex-next-02'}">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper> 
  <button class="ex-prev-02">이전으로</button>
  <button class="ex-next-02">다음으로</button>
</div>
```