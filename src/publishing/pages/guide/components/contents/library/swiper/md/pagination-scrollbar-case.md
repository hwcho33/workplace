### &#x1F4DD; pagination, scrollbar
```html
<div class="ex-swiper">
  <Swiper :modules="[Pagination, Scrollbar, A11y]" :scrollbar="{el: '.ex-scrollbar-01', draggable: true}" :pagination="{el:'.ex-pagination-05', clickable:true}" >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper> 
  <div class="ex-pagination-05"></div>
  <div class="ex-scrollbar-01" style="width: 470px;height:10px;background-color:#f5f5f5;"></div>
</div>
```