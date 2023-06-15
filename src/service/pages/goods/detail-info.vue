<template>
  <div class="goods-detail-info">
    <div class="broadcast-info">
      <div class="inner-wrap">
        <span class="onair">방송중</span>
        <span class="basic">TV LIVE</span>
        <span class="time">01:00:50 <em>남음</em></span>
        <!-- [CASE1] 방송예정 -->
        <!-- <span class="expected">02.15(수) 15:30 방송예정</span> -->
        <!-- [CASE2] 남은 방송시간 -->
        <!-- <span class="time">01:00:50 <em>남음</em></span> -->
        <!-- [CASE3] 생방송 종료 -->
        <!-- <span class="end">생방송이 종료되었습니다.</span> -->
        <button type="button" class="btn-alarm" @click="_onClickBroad()">
          <!-- Login Check-->
          <ModalBroad v-model="state.isShowBroad" :items="items" />
          <span>방송알림</span>
        </button>
      </div>
    </div>

    <div class="detail-info-wrap">
      <span class="head-copy">최초가 {{ items.originPrice }}원</span>
      <h3 class="goods-name">
        {{ items.name }}
      </h3>

      <button type="button" class="btn-origin">원산지: 상품정보 참조</button>

      <div class="price-wrap">
        <span class="dc-rate" v-if="items.dcRate > '0'"> {{ items.dcRate }}%</span>
        <span class="origin-price">{{ items.originPrice }}<em>원</em></span>
        <del class="dc-price">219,800원</del>
        <span class="dc-price-staff">임직원 할인가 42,200원</span>
        <!-- [CASE]: 무형상품 -->
        <div class="notice-text">본 상품은 상담 후 구매가 가능 합니다.</div>
        <span class="origin-price"><em>월</em> 208,810<em>원</em></span>
        <span class="period-text">의무 사용기간 60개월</span>
      </div>

      <div class="label-wrap">
        <span class="tv"><i>TV쇼핑</i></span>
        <span class="store"><i>백화점</i></span>
        <span class="book"><i>쇼핑북</i></span>
        <span class="singsing"><i>씽씽배송</i></span>
        <span class="free"><i>무료배송</i></span>
        <span><i>쿠폰19%</i></span>
        <span><i>쿠폰</i></span>
        <span><i>적립99%</i></span>
        <span><i>카드99%</i></span>
        <span><i>카드할인</i></span>
        <span><i>무이자12</i></span>
        <span><i>사은품</i></span>
      </div>
    </div>

    <div class="goods-warning-wrap">
      <h4 class="title">
        <span>랜탈상품</span>
      </h4>
      <ul class="bullet-list">
        <li>이 상품은 NSmall이 상담예약신청을 대행하고 있으며, 협력사가 직접 렌탈 서비스를 제공해드립니다.</li>
        <li>상담신청 시 별도로 결제하실 금액은 없습니다.</li>
      </ul>
    </div>

    <div class="benefit-info-wrap">
      <dl class="best-price-info">
        <dt>
          최대 혜택가
          <div class="tooltip-wrap">
            <button type="button" class="btn-tooltip" @click="btnTooltip01 = true">
              <span class="blind">안내</span>
            </button>
            <div class="tooltip-box" v-if="btnTooltip01">
              <p class="text">
                최대 할인 혜택이 적용된 금액입니다.<br />
                구매 시 고객님이 보유한 할인 쿠폰, 적립금, 상품권, 청구 할인 카드 등들 사용하여 추가 할인이 가능 합니다.
              </p>
              <button type="button" class="btn-close" @click="btnTooltip01 = !btnTooltip01">
                <span class="blind">안내 닫기</span>
              </button>
            </div>
          </div>
        </dt>
        <dd><em>186,810</em>원</dd>
      </dl>

      <div class="benefit-info">
        <dl class="dc-price-info">
          <dt>총 가격할인</dt>
          <dd><em>-32,990</em>원</dd>
        </dl>

        <div class="benefit-list">
          <dl>
            <dt>방송 동일 혜택</dt>
            <dd><em>-10,000</em>원</dd>
          </dl>
          <dl>
            <dt>상품 쿠폰 10,000원</dt>
            <dd><em>-10,000</em>원</dd>
          </dl>
          <dl>
            <dt>상품 추가 쿠폰 5%</dt>
            <dd><em>-10,990</em>원</dd>
          </dl>
          <dl>
            <dt>[패밀리] 등급 2,000원 할인</dt>
            <dd><em>-2,000</em>원</dd>
          </dl>
          <dl>
            <dt>
              <!-- [D]: 버튼 클릭 시 class="btn-toggle [active]" 추가 -->
              <button type="button" class="btn-toggle active">국민/삼성/하나 카드 즉시할인 5%</button>
            </dt>
            <dd><em>-6,710</em>원</dd>
          </dl>
          <div class="toggle-box">
            <ul class="text-list">
              <li>KB국민카드 5% 즉시할인</li>
              <li>
                신한카드 5% 즉시할인
                <span class="option">(5만원 이상 결제시 최대 5,000원 할인)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="btn-coupon-wrap">
        <ModalCoupon v-model="state.isShowCoupon" />
        <button class="btn-coupon" @click="_onClickCoupon()"><i>할인 쿠폰 받기</i></button>
      </div>
    </div>

    <details class="toggle-reserves-wrap">
      <summary>
        <strong class="title icon-reserves">최대 14% <span class="price">20,860원</span> 적립</strong>
      </summary>
      <div class="toggle-box">
        <ul class="text-list">
          <li>지급시점 : 배송완료 후 지급</li>
          <li>사용기간 : 지급일로부터 30일간</li>
        </ul>
        <div class="notice-box">
          <ul class="bullet-list">
            <li>적립금 사용 후 반품 및 취소 시 상담원을 통해 결제가 요청될 수 있습니다.</li>
            <li>본 혜택은 당사 사정에 의해 사전 고지없이 변경 또는 취소될 수 있습니다.</li>
            <li>지급 적립금은 쿠폰 할인액 등의 금액을 제외한 금액으로 계산됩니다.</li>
            <li>고객님의 최종 예상 적립금은 주문완료 및 주문상세 페이지에서 확인 바랍니다.</li>
          </ul>
        </div>
      </div>
    </details>

    <div class="etc-benefit-wrap">
      <dl class="icon-free">
        <dt>무이자</dt>
        <dd>12개월</dd>
      </dl>
    </div>

    <div class="btn-share-wish-wrap">
      <ModalShare v-model="state.isShowShare" :items="items" />
      <button type="button" class="btn-icon-share" @click="_onClickShare()"><i>공유하기</i></button>
      <!-- [D]:찜선택 시  ex> class="btn-icon-wish [on]" 추가 -->
      <button
        type="button"
        :class="[state.isWishBtn ? 'btn-icon-wish on' : 'btn-icon-wish']"
        @click="_onClickWishList()"
      >
        <i>찜하기</i>
      </button>
    </div>

    <div class="banner-swiper info-banner">
      <Swiper
        :modules="[Pagination, Autoplay, A11y]"
        :pagination="{ el: '.banner-pagination', type: 'fraction' }"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
      >
        <!-- [D]: SwiperSlide 영역 배너 이미지 bg color 추가 필요 ex> style="background-color: [#57cad1]" -->
        <SwiperSlide style="background-color: #57cad1">
          <router-link to="/publishing/goods/detail/">
            <img src="/images/data/goods/@banner-sample-01.jpg" alt="배너 이미지" />
          </router-link>
        </SwiperSlide>
        <SwiperSlide style="background-color: #7b9aec">
          <router-link to="/publishing/goods/detail/">
            <img src="/images/data/goods/@banner-sample-02.jpg" alt="배너 이미지" />
          </router-link>
        </SwiperSlide>
        <SwiperSlide style="background-color: #57cad1">
          <router-link to="/publishing/goods/detail/">
            <img src="/images/data/goods/@banner-sample-01.jpg" alt="배너 이미지" />
          </router-link>
        </SwiperSlide>
        <SwiperSlide style="background-color: #7b9aec">
          <router-link to="/publishing/goods/detail/">
            <img src="/images/data/goods/@banner-sample-02.jpg" alt="배너 이미지" />
          </router-link>
        </SwiperSlide>
      </Swiper>
      <div class="banner-pagination-wrap">
        <div class="banner-pagination"></div>
        <button type="button" class="btn-all">
          <span class="blind">배너 전체보기</span>
        </button>
      </div>
    </div>

    <div class="delivery-wrap">
      <dl class="icon-delivery">
        <dt>배송예정일 <span class="text">(주문 제작상품)</span></dt>
        <dd>
          <div class="text-info">
            <span class="tomorrow">내일 10/28(금) 이내 도착예정 </span>
            <div class="tooltip-wrap">
              <button type="button" class="btn-tooltip" @click="btnTooltip02 = true">
                <span class="blind">안내</span>
              </button>
              <div class="tooltip-box" v-if="btnTooltip02">
                <p class="text">
                  배송도착정보는 최근 배송데이터에 기반하여 분석/예측한 기준으로 노출됩니다. 판매자/택배사의 사정으로
                  발송일/도착일/택배사정보의 변동이 있을 수 있습니다.
                </p>
                <button type="button" class="btn-close" @click="btnTooltip02 = !btnTooltip02">
                  <span class="blind">안내 닫기</span>
                </button>
              </div>
            </div>
          </div>
          <p class="text">
            배송비 3,000원
            <router-link to="/publishing/goods/detail/" class="btn-link">묶음배송상품 보기</router-link>
          </p>
          <p class="etc-text">20,000원 이상 구매 시 무료배송</p>
          <p class="etc-text">(추가 배송비 : 제주도 3,000원 / 도서산간 3,000원)</p>
        </dd>
      </dl>

      <!-- [CASE1]: 씽씽배송(기본배송지 도서산간일 경우 -->
      <dl class="icon-sing isolated">
        <dt><span class="blind">씽씽배송</span></dt>
        <dd>
          <p class="text">
            배송비 3,000원
            <router-link to="/publishing/goods/detail/" class="btn-link">묶음배송상품 보기</router-link>
          </p>
          <p class="etc-text">(제주도/도서산간 배송불가)</p>
          <button type="button" class="btn-sing">씽씽배송 안내</button>
        </dd>
      </dl>

      <!-- [CASE2]: 씽씽배송 -->
      <dl class="icon-sing base">
        <dt><span class="blind">씽씽배송</span></dt>
        <dd>
          <div class="text-info">
            <span class="tomorrow">
              <span class="time"><strong>2시간 28분 30초</strong> 내 주문 시</span>
              내일(월) 새벽 7시 전 도착예정
            </span>
            <div class="tooltip-wrap">
              <button type="button" class="btn-tooltip" @click="btnTooltip03 = true">
                <span class="blind">안내</span>
              </button>
              <div class="tooltip-box" v-if="btnTooltip03">
                <p class="text">내일도착 가능</p>
                <button type="button" class="btn-close" @click="btnTooltip03 = !btnTooltip03">
                  <span class="blind">안내 닫기</span>
                </button>
              </div>
            </div>
          </div>
          <p class="text">
            배송비 3,000원
            <router-link to="/publishing/goods/detail/" class="btn-link">묶음배송상품 보기</router-link>
          </p>
          <p class="etc-text">50,000원 이상 구매 시 무료배송</p>
          <p class="etc-text">(제주도/도서산간 배송불가)</p>
          <button type="button" class="btn-sing">씽씽배송 안내</button>
        </dd>
      </dl>

      <div class="btn-return-wrap">
        <ModalReturn v-model="state.isShowReturn" />
        <button type="button" class="btn-return" @click="_onClickReturn()">배송/교환/반품안내</button>
      </div>
    </div>

    <!-- desktop 옵션, 장바구니 -->
    <Options class="desktop-only-option" v-if="isDesktop" />
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, A11y } from 'swiper'
import { getOSByUserAgent } from '@/utils/device'
import Toast from '@/components/toast'
import Options from './components/options.vue'
import ModalBroad from './components/layer/modal-notify-broadcast.vue'
import ModalShare from './components/layer/modal-share.vue'
import ModalReturn from './components/layer/modal-exchange-return.vue'
import ModalCoupon from './components/layer/modal-coupon-down.vue'

export interface Items {
  img: string
  name: string
  originPrice: string
  dcPrice: string
  dcRate: string
  url: string
  id: string
}

export interface Props {
  items: Items
}

interface Reactive {
  onair: { onairTitle: string }[]
  isShowBroad: boolean
  isShowShare: boolean
  isShowReturn: boolean
  isShowCoupon: boolean
  isWishBtn: boolean
}

const isDesktop = getOSByUserAgent() === 'desktop'
const btnTooltip01 = ref(false)
const btnTooltip02 = ref(false)
const btnTooltip03 = ref(false)
const state = reactive<Reactive>({
  onair: [
    { onairTitle: '강원도 모듬버섯 1kg 새송이, 양송이, 모기' },
    { onairTitle: '강원도 버섯2' },
    { onairTitle: '강원도 모듬버섯 1kg 새송이, 양송이, 모기 , 모기 , 모기3' },
    { onairTitle: '강원도 모듬버섯 1kg 새송이, 양송이, 모기4' },
    { onairTitle: '강원도 모듬버섯 1kg 새송이, 양송이, 모기5' },
    { onairTitle: '강원도 모듬버섯 1kg 새송이, 양송이, 모기6' },
    { onairTitle: '강원도 모듬버섯 1kg 새송이, 양송이, 모기7' },
    { onairTitle: '강원도 모듬버섯 1kg 새송이, 양송이, 모기8' },
    { onairTitle: '강원도 모듬버섯 1kg 새송이, 양송이, 모기9' },
    { onairTitle: '강원도 모듬버섯 1kg 새송이, 양송이, 모기10' }
  ],
  isShowBroad: false,
  isShowShare: false,
  isShowReturn: false,
  isShowCoupon: false,
  isWishBtn: false
})

withDefaults(defineProps<Props>(), {})

const toastHandler = (content: string, delay: number, position: string) => {
  Toast({ content, delay, position })
}

const _onClickBroad = () => {
  state.isShowBroad = true
}

const _onClickShare = () => {
  state.isShowShare = true
}

const _onClickReturn = () => {
  state.isShowReturn = true
}

const _onClickCoupon = () => {
  state.isShowCoupon = true
}

const _onClickWishList = () => {
  state.isWishBtn = !state.isWishBtn

  if (state.isWishBtn) {
    toastHandler('찜목록에 추가되었습니다.', 1000, 'bottom')
  }
}
</script>

<style lang="scss">
@use '~/pages/goods/scss/goods.scss';
</style>
