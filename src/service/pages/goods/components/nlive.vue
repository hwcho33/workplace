<template>
  <div class="nlive-wrap">
    <h3 class="title">이 영상으로 상품 확인하기</h3>

    <div class="nlive-swiper">
      <swiper
        :modules="[Navigation, A11y]"
        @swiper="_onSwiper"
        :slides-per-view="'auto'"
        :space-between="8"
        :navigation="{ prevEl: '.prev-btn', nextEl: '.next-btn' }"
        @slide-change="_onSlideChange"
      >
        <SwiperSlide>
          <div class="nlive-content">
            <div class="media-box">
              <div class="now-media-img">
                <picture>
                  <source
                    type="image/webp"
                    srcset="https://nlive.nsmall.com:9443/images/lc-image/brc/1804/main_20230520195103.jpg?f=webp&w=200"
                  />
                  <img
                    src="https://nlive.nsmall.com:9443/images/lc-image/brc/1804/main_20230520195103.jpg?f=webp&w=200"
                    alt=""
                  />
                </picture>
              </div>
              <div class="video-wrapper"></div>
              <div class="nlive-status">
                <em class="live">
                  <i class="live-icon">Nlive</i><span>LIVE</span>
                  <em class="icon-wrap">
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                  </em>
                </em>
              </div>
              <div class="nlive-info-price">
                <dl>
                  <dt>
                    <em class="img"
                      ><img src="https://nlive.nsmall.com:9443/images/lc-image/brc/1800/main_20230523182951.jpg" alt=""
                    /></em>
                    <span>하림이닭 삼계탕</span>
                  </dt>
                  <dd>
                    <strong class="percent">15%</strong>
                    <em class="price">169,900<span>원</span></em>
                  </dd>
                </dl>
              </div>
              <!-- 방송예정일 경우 노출 -->
              <!-- <div class="notify-time">
                <em class="date">02월 15일</em>
                <strong class="time">12:30</strong>
              </div> -->
            </div>

            <div class="nlive-info">
              <p>주말을 삼계탕 한마리로 든든하게 준비해요</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="nlive-content">
            <div class="media-box">
              <div class="now-media-img">
                <picture>
                  <source
                    type="image/webp"
                    srcset="https://nlive.nsmall.com:9443/images/lc-image/brc/1804/main_20230520195103.jpg?f=webp&w=200"
                  />
                  <img
                    src="https://nlive.nsmall.com:9443/images/lc-image/brc/1804/main_20230520195103.jpg?f=webp&w=200"
                    alt=""
                  />
                </picture>
              </div>
              <div class="video-wrapper"></div>
              <div class="nlive-status">
                <em class="live">
                  <i class="live-icon">Nlive</i><span>LIVE</span>
                  <em class="icon-wrap">
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                  </em>
                </em>
              </div>
              <div class="nlive-info-price">
                <dl>
                  <dt>
                    <em class="img">
                      <img
                        src="https://nlive.nsmall.com:9443/images/lc-image/brc/1800/main_20230523182951.jpg"
                        alt=""
                      />
                    </em>
                    <span>하림이닭 삼계탕</span>
                  </dt>
                  <dd>
                    <strong class="percent">15%</strong>
                    <em class="price">169,900<span>원</span></em>
                  </dd>
                </dl>
              </div>
              <div class="notify-time">
                <em class="date">02월 15일</em>
                <strong class="time">12:30</strong>
              </div>
            </div>

            <div class="nlive-info">
              <p>주말을 삼계탕 한마리로 든든하게 준비해요</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="nlive-content">
            <div class="media-box">
              <div class="now-media-img">
                <picture>
                  <source
                    type="image/webp"
                    srcset="https://nlive.nsmall.com:9443/images/lc-image/brc/1804/main_20230520195103.jpg?f=webp&w=200"
                  />
                  <img
                    src="https://nlive.nsmall.com:9443/images/lc-image/brc/1804/main_20230520195103.jpg?f=webp&w=200"
                    alt=""
                  />
                </picture>
              </div>
              <div class="video-wrapper"></div>
              <div class="nlive-status">
                <em class="live">
                  <i class="live-icon">Nlive</i><span>LIVE</span>
                  <em class="icon-wrap">
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                  </em>
                </em>
              </div>
              <div class="nlive-info-price">
                <dl>
                  <dt>
                    <em class="img">
                      <img
                        src="https://nlive.nsmall.com:9443/images/lc-image/brc/1800/main_20230523182951.jpg"
                        alt=""
                      />
                    </em>
                    <span>하림이닭 삼계탕</span>
                  </dt>
                  <dd>
                    <strong class="percent">15%</strong>
                    <em class="price">169,900<span>원</span></em>
                  </dd>
                </dl>
              </div>
              <div class="notify-time">
                <em class="date">02월 15일</em>
                <strong class="time">12:30</strong>
              </div>
            </div>

            <div class="nlive-info">
              <p>주말을 삼계탕 한마리로 든든하게 준비해요</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="nlive-content">
            <div class="media-box">
              <div class="now-media-img">
                <picture>
                  <source
                    type="image/webp"
                    srcset="https://nlive.nsmall.com:9443/images/lc-image/brc/1804/main_20230520195103.jpg?f=webp&w=200"
                  />
                  <img
                    src="https://nlive.nsmall.com:9443/images/lc-image/brc/1804/main_20230520195103.jpg?f=webp&w=200"
                    alt=""
                  />
                </picture>
              </div>
              <div class="video-wrapper"></div>
              <div class="nlive-status">
                <em class="live">
                  <i class="live-icon">Nlive</i><span>LIVE</span>
                  <em class="icon-wrap">
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                  </em>
                </em>
              </div>
              <div class="nlive-info-price">
                <dl>
                  <dt>
                    <em class="img">
                      <img
                        src="https://nlive.nsmall.com:9443/images/lc-image/brc/1800/main_20230523182951.jpg"
                        alt=""
                      />
                    </em>
                    <span>하림이닭 삼계탕</span>
                  </dt>
                  <dd>
                    <strong class="percent">15%</strong>
                    <em class="price">169,900<span>원</span></em>
                  </dd>
                </dl>
              </div>
              <div class="notify-time">
                <em class="date">02월 15일</em>
                <strong class="time">12:30</strong>
              </div>
            </div>

            <div class="nlive-info">
              <p>주말을 삼계탕 한마리로 든든하게 준비해요</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="nlive-content">
            <div class="media-box">
              <div class="now-media-img">
                <picture>
                  <source
                    type="image/webp"
                    srcset="https://nlive.nsmall.com:9443/images/lc-image/brc/1804/main_20230520195103.jpg?f=webp&w=200"
                  />
                  <img
                    src="https://nlive.nsmall.com:9443/images/lc-image/brc/1804/main_20230520195103.jpg?f=webp&w=200"
                    alt=""
                  />
                </picture>
              </div>
              <div class="video-wrapper"></div>
              <div class="nlive-status">
                <em class="live">
                  <i class="live-icon">Nlive</i><span>LIVE</span>
                  <em class="icon-wrap">
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                  </em>
                </em>
              </div>
              <div class="nlive-info-price">
                <dl>
                  <dt>
                    <em class="img">
                      <img
                        src="https://nlive.nsmall.com:9443/images/lc-image/brc/1800/main_20230523182951.jpg"
                        alt=""
                      />
                    </em>
                    <span>하림이닭 삼계탕</span>
                  </dt>
                  <dd>
                    <strong class="percent">15%</strong>
                    <em class="price">169,900<span>원</span></em>
                  </dd>
                </dl>
              </div>
              <div class="notify-time">
                <em class="date">02월 15일</em>
                <strong class="time">12:30</strong>
              </div>
            </div>

            <div class="nlive-info">
              <p>주말을 삼계탕 한마리로 든든하게 준비해요</p>
            </div>
          </div>
        </SwiperSlide>
      </swiper>
      <button class="prev-btn">이전으로</button>
      <button class="next-btn">다음으로</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Navigation } from 'swiper'
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
</script>

<style lang="scss">
@use '~/pages/goods/scss/goods.scss';
</style>
