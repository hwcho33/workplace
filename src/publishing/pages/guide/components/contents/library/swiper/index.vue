<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <MainMd />
      <NormalCaseMd />
      <div class="ex-swiper">
        <swiper :modules="[A11y]" @swiper="_onSwiper" @slide-change="_onSlideChange">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </swiper>
      </div>
      <br /><br />

      <LoopCaseMd />
      <div class="ex-swiper">
        <Swiper :modules="[A11y]" :loop="true">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>

      <br /><br />
      <PaginationCaseMd />
      <div class="ex-swiper">
        <Swiper :modules="[Pagination, A11y]" :pagination="{ el: '.ex-pagination-01', clickable: true }">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        <div class="ex-pagination-01"></div>
      </div>
      <br />
      <div class="ex-swiper">
        <Swiper :modules="[Pagination, A11y]" :pagination="{ el: '.ex-pagination-02', type: 'fraction' }">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        <div class="ex-pagination-02"></div>
      </div>

      <br /><br />
      <NavigationCaseMd />
      <div class="ex-swiper">
        <Swiper :modules="[Navigation, A11y]" :navigation="{ prevEl: '.ex-prev-01', nextEl: '.ex-next-01' }">
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
        <Swiper
          :modules="[Navigation, A11y]"
          :loop="true"
          :navigation="{ prevEl: '.ex-prev-02', nextEl: '.ex-next-02' }"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        <button class="ex-prev-02">이전으로</button>
        <button class="ex-next-02">다음으로</button>
      </div>

      <br /><br />
      <PaginationNavigationCaseMd />
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

      <br /><br />
      <PaginationScrollbarCaseMd />
      <div class="ex-swiper">
        <Swiper
          :modules="[Pagination, Scrollbar, A11y]"
          :scrollbar="{ el: '.ex-scrollbar-01', draggable: true }"
          :pagination="{ el: '.ex-pagination-05', clickable: true }"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        <div class="ex-pagination-05"></div>
        <div class="ex-scrollbar-01" style="width: 470px; height: 10px; background-color: #f5f5f5"></div>
      </div>

      <br /><br />
      <PaginationAutoplayCaseMd />
      <div class="ex-swiper">
        <Swiper
          :modules="[Pagination, Autoplay, A11y]"
          :loop="true"
          :pagination="{ el: '.ex-pagination-06', clickable: true }"
          :autoplay="{
            delay: 2000
          }"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        <div class="ex-pagination-06"></div>
      </div>

      <br /><br />
      <PaginationAutoplayStopStartCaseMd />
      <div class="ex-swiper">
        <swiper
          :modules="[Pagination, Autoplay, A11y]"
          :loop="true"
          :pagination="{ el: '.ex-pagination-07', clickable: true }"
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
        </swiper>
        <div class="ex-pagination-07"></div>
        <button v-if="state.isAutoPlay" class="ex-stop" @click="_onSlideStop">stop</button>
        <button v-if="!state.isAutoPlay" class="ex-start" @click="_onSlideStart">start</button>
      </div>

      <br /><br />
      <MultiCaseMd />
      <div class="ex-swiper">
        <Swiper :modules="[A11y]" :slides-per-view="2" :space-between="10">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
        </Swiper>
      </div>
      <br />
      <div class="ex-swiper">
        <Swiper :modules="[A11y]" :slides-per-view="3" :centered-slides="true" :space-between="10">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
        </Swiper>
      </div>
      <br />
      <div class="ex-swiper">
        <Swiper :modules="[A11y, FreeMode]" :slides-per-view="4" :free-mode="true" :space-between="10">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
        </Swiper>
      </div>

      <br /><br />
      <MultiLoopCaseMd />
      <div class="ex-swiper">
        <swiper
          :modules="[Navigation, A11y]"
          :slides-per-view="3"
          :space-between="5"
          :loop="true"
          :loop-additional-slides="1"
          :navigation="{ prevEl: '.ex-prev-05', nextEl: '.ex-next-05' }"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </swiper>
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
          :navigation="{ prevEl: '.ex-prev-07', nextEl: '.ex-next-07' }"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </swiper>
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
          :navigation="{ prevEl: '.ex-prev-08', nextEl: '.ex-next-08' }"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
        </swiper>
        <button class="ex-prev-08">이전으로</button>
        <button class="ex-next-08">다음으로</button>
      </div>
      <br /><br />
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'ContentsSwiper'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import useMapId from '&/pages/guide/use-map-id'
import MainMd from './md/main.md'
import NormalCaseMd from './md/normal-case.md'
import LoopCaseMd from './md/loop-case.md'
import PaginationCaseMd from './md/pagination-case.md'
import NavigationCaseMd from './md/navigation-case.md'
import PaginationNavigationCaseMd from './md/pagination-navigation-case.md'
import PaginationScrollbarCaseMd from './md/pagination-scrollbar-case.md'
import PaginationAutoplayCaseMd from './md/pagination-autoplay-case.md'
import PaginationAutoplayStopStartCaseMd from './md/pagination-autoplay-stop-start-case.md'
import MultiCaseMd from './md/multi-case.md'
import MultiLoopCaseMd from './md/multi-loop-case.md'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, Autoplay, FreeMode, A11y } from 'swiper'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/scrollbar'
import 'swiper/css/zoom'
import 'swiper/css/thumbs'

const { addIter, checkMapId } = useMapId()

// id
const id = 'swiper'
addIter({
  category: 'library',
  id
})

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

const _onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}
const _onSlideChange = () => {
  console.log('slide change')
}
</script>
<style lang="scss" scoped></style>
