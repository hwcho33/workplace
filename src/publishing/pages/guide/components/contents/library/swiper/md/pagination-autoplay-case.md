### &#x1F4DD; autoplay, pagination
```html
<div class="ex-swiper">
  <Swiper :modules="[Pagination, Autoplay, A11y]" :loop="true" :pagination="{el:'.ex-pagination-06', clickable:true}" :autoplay="{
    delay: 2000,
  }">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper> 
  <div class="ex-pagination-06"></div>
</div>
```