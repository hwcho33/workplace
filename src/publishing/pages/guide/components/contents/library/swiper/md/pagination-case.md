### &#x1F4DD; pagination
```html
<div class="ex-swiper">
  <Swiper :modules="[Pagination, A11y]" :pagination="{el:'.ex-pagination-01', clickable:true}">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper> 
  <div class="ex-pagination-01"></div>
</div>
<br />
<div class="ex-swiper">
  <Swiper :modules="[Pagination, A11y]" :pagination="{el:'.ex-pagination-02', type:'fraction'}">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper> 
  <div class="ex-pagination-02"></div>
</div>
```
