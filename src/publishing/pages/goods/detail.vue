<template>
  <div class="goods-detail-wrap">
    <!-- 재생중인 상품 -->
    <!-- isShowPlaying: true로 변경시 확인가능 -->
    <div class="goods-playing-wrap" v-if="isShowPlaying">
      <div class="goods-playing-inner">
        <div class="goods-wrap">
          <figure>
            <img src="/images/data/goods/@data-product-photo.jpg" alt="재생중인 상품" />
          </figure>
          <div class="goods-info">
            <div class="play-time-wrap">
              <ul class="live-wrap">
                <li class="real">방송중</li>
                <li class="real">TV LIVE</li>
              </ul>
              <span class="play-time">00:00:22</span>
            </div>
            <strong class="goods-name">삼성 비스포크 직화오븐 스마트쿡 삼성 비스포크 직화오븐 스마트쿡</strong>
          </div>
        </div>
        <div class="play-progress-wrap">
          <progress value="20" max="100">20%</progress>
        </div>
        <button type="button" class="btn-close">
          <span class="blind">닫기</span>
        </button>
      </div>
    </div>

    <div class="goods-info-wrap">
      <DetailImg />

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
            <button type="button" class="btn-alarm">
              <span>방송알림</span>
            </button>
          </div>
        </div>

        <div class="detail-info-wrap">
          <span class="head-copy">최초가 219,800원</span>
          <h3 class="goods-name">
            전인화의 쿡셀 더블 블랙큐브 프라이팬X3+가마솥세트(16cm+22cm)+뚜껑X3+거치대+손잡이X2+귀리
          </h3>

          <button type="button" class="btn-origin">원산지: 상품정보 참조</button>

          <div class="price-wrap">
            <span class="dc-rate">5%</span>
            <span class="origin-price">208,810<em>원</em></span>
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
                    구매 시 고객님이 보유한 할인 쿠폰, 적립금, 상품권, 청구 할인 카드 등들 사용하여 추가 할인이 가능
                    합니다.
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
            <button class="btn-coupon"><i>할인 쿠폰 받기</i></button>
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
          <button type="button" class="btn-icon-share"><i>공유하기</i></button>
          <!-- [D]:찜선택 시  ex> class="btn-icon-wish [on]" 추가 -->
          <button
            type="button"
            class="btn-icon-wish on"
            @click="toastHandler('찜목록에 추가되었습니다.', 2000, 'bottom')"
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
                      배송도착정보는 최근 배송데이터에 기반하여 분석/예측한 기준으로 노출됩니다. 판매자/택배사의
                      사정으로 발송일/도착일/택배사정보의 변동이 있을 수 있습니다.
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
            <button type="button" class="btn-return">배송/교환/반품안내</button>
          </div>
        </div>

        <!-- desktop 옵션, 장바구니 -->
        <Options class="desktop-only-option" v-if="isDesktop" />
      </div>
    </div>

    <div class="goods-onair-wrap">
      <GoodsRecommend title="방송중인 상품의 연관상품" :items="goodsList" />
    </div>

    <div class="banner-swiper detail-banner">
      <Swiper
        :modules="[Pagination, Autoplay, A11y]"
        :pagination="{ el: '.banner-pagination-02', type: 'fraction' }"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
      >
        <!-- [D]: SwiperSlide 영역 배너 이미지 bg color 추가 필요 ex> style="background-color: [#57cad1]" -->
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
        <SwiperSlide style="background-color: #57cad1">
          <router-link to="/publishing/goods/detail/">
            <img src="/images/data/goods/@banner-sample-01.jpg" alt="배너 이미지" />
          </router-link>
        </SwiperSlide>
      </Swiper>
      <div class="banner-pagination-wrap">
        <div class="banner-pagination-02"></div>
        <button type="button" class="btn-all">
          <span class="blind">배너 전체보기</span>
        </button>
      </div>
    </div>

    <div ref="detailInfoWrap" class="goods-detail-info-wrap">
      <div class="col detail-info">
        <div class="goods-tab-wrap">
          <ul class="goods-tab-list">
            <li
              v-for="item in state.tabItems"
              :key="item.id"
              :class="{
                active: item.id === state.activeTab
              }"
            >
              <button type="button" @click="_onChangeTab(item.id)">
                {{ item.title }}<span class="num">{{ item.number }}</span>
              </button>
            </li>
          </ul>

          <div class="goods-tab-content" v-if="state.activeTab === TAB_TYPE.TAB1">
            <div class="gift-wrap">
              <dl>
                <dt>사은품</dt>
                <dd class="gift-list">
                  <!-- [CASE1]: 이미지 있을때 -->
                  <div class="row">
                    <figure>
                      <img src="/images/data/goods/@data-product-photo.jpg" alt="사은품 상품" />
                    </figure>
                    <div class="gift-info">
                      <p class="text">강화유리 범용 뚜껑 스테인레스외 실리콘 손잡이 2개 한세트</p>
                      <p class="date">증정기간 : 2023.03.26~04.25</p>
                    </div>
                  </div>
                </dd>
              </dl>
              <div class="gift-button-wrap">
                <button type="button" class="gift-btn">
                  <i>사은품 전체보기 <span>(택2)</span></i>
                </button>
              </div>
            </div>

            <div class="gift-wrap">
              <dl>
                <dt>사은품</dt>
                <dd class="gift-list">
                  <!-- [CASE1]: 이미지 있을때 -->
                  <div class="row">
                    <figure>
                      <img src="/images/data/goods/@data-product-photo.jpg" alt="사은품 상품" />
                    </figure>
                    <div class="gift-info">
                      <p class="text">강화유리 범용 뚜껑 스테인레스외 실리콘 손잡이 2개 한세트</p>
                      <p class="date">증정기간 : 2023.03.26~04.25</p>
                    </div>
                  </div>
                  <div class="row">
                    <figure>
                      <img src="/images/data/goods/@data-product-photo.jpg" alt="사은품 상품" />
                    </figure>
                    <div class="gift-info">
                      <p class="text">강화유리 범용 뚜껑 스테인레스외 실리콘 손잡이 2개 한세트</p>
                      <p class="date">증정기간 : 2023.03.26~04.25</p>
                    </div>
                  </div>
                  <div class="row">
                    <figure>
                      <img src="/images/data/goods/@data-product-photo.jpg" alt="사은품 상품" />
                    </figure>
                    <div class="gift-info">
                      <p class="text">강화유리 범용 뚜껑 스테인레스외 실리콘 손잡이 2개 한세트</p>
                      <p class="date">증정기간 : 2023.03.26~04.25</p>
                    </div>
                  </div>
                  <!-- [CASE1]: 이미지 없을때 -->
                  <div class="row">
                    <div class="gift-info">
                      <p class="text">강화유리 범용 뚜껑 스테인레스외 실리콘 손잡이 2개 한세트</p>
                      <p class="date">증정기간 : 2023.03.26~04.25</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="gift-info">
                      <p class="text">강화유리 범용 뚜껑 스테인레스외 실리콘 손잡이 2개 한세트</p>
                      <p class="date">증정기간 : 2023.03.26~04.25</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="gift-info">
                      <p class="text">강화유리 범용 뚜껑 스테인레스외 실리콘 손잡이 2개 한세트</p>
                      <p class="date">증정기간 : 2023.03.26~04.25</p>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>

            <InfoDetailImg :contentData="state.contentData" />
            <Nlive />
            <ReviewList :activeTab="state.activeTab" />
          </div>

          <div class="goods-tab-content" v-if="state.activeTab === TAB_TYPE.TAB2">
            <div class="info-table-wrap">
              <h3 class="title">방송상품 구성항목</h3>
              <table>
                <caption>
                  본상품 구성 , 특별구성, 원료/원산지(법적표시) 를 나타내는 표 입니다.
                </caption>
                <colgroup>
                  <col width="31%" />
                  <col width="69%" />
                </colgroup>
                <tr>
                  <th scope="row">본상품 구성</th>
                  <td>오븐, 회전받침, 회전접시, 발열팬, 낮은석쇠, 높은석쇠</td>
                </tr>
                <tr>
                  <th scope="row">특별구성</th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">원료/원산지 (법적표시)</th>
                  <td>말레이시아</td>
                </tr>
              </table>

              <h3 class="title">상품필수정보</h3>
              <table>
                <caption>
                  상품번호, 품명 및 모델명, KC 인증정보, 정격전압,소비전력,에너지소비효율등급, 동일모델의 출시년월,
                  제조자/수입자, 제조국, 크기, 형태 (실외기 포함), 냉난방면적 를 나타내는 표 입니다.
                </caption>
                <colgroup>
                  <col width="31%" />
                  <col width="69%" />
                </colgroup>
                <tr>
                  <th scope="row">상품번호</th>
                  <td>
                    <span class="num">32663043</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">품명 및 모델명</th>
                  <td>삼성 BESPOKE 오븐 35L / MC35A8599LC,LE,LP,LY,LF,LU,LV</td>
                </tr>
                <tr>
                  <th scope="row">KC 인증정보</th>
                  <td>HU07445-15017</td>
                </tr>
                <tr>
                  <th scope="row">정격전압,소비전력,에너지소비효율등급</th>
                  <td>정격 전압: 220V ~ 60Hz / 소비전력: 콤비: 2,850 W, 그릴: 2,000 W, 전자레인지: 1,400 W</td>
                </tr>
                <tr>
                  <th scope="row">동일모델의 출시년월</th>
                  <td>2021년 3월</td>
                </tr>
                <tr>
                  <th scope="row">제조자/수입자</th>
                  <td>제조자/수입자</td>
                </tr>
                <tr>
                  <th scope="row">제조국</th>
                  <td><span class="bold">말레이시아</span></td>
                </tr>
                <tr>
                  <th scope="row">크기, 형태 (실외기 포함)</th>
                  <td>외관 크기: (가로x높이x깊이) 528 x 404 x 481 mm / 제품/전체 무게: 27.5 kg</td>
                </tr>
                <tr>
                  <th scope="row">냉난방면적</th>
                  <td>인터넷 기술서 참조</td>
                </tr>
              </table>
            </div>
          </div>

          <div class="goods-tab-content" v-if="state.activeTab === TAB_TYPE.TAB3">
            <ReviewList :activeTab="state.activeTab" />
          </div>

          <div class="goods-tab-content" v-if="state.activeTab === TAB_TYPE.TAB4">
            <inquiryList :activeTab="state.activeTab" />
          </div>
        </div>
      </div>
      <div class="col option-info">
        <!--
          mobile/desktop
           [mobile일때]: bottom-option
           [desktop일때]: right-option
        -->
        <Options v-model="state.isShowOptions" :class="setOptionClass" />

        <!-- mobile -->
        <div class="mo-only-button" v-if="!isDesktop">
          <!-- [CASE1]: 바로구매 상품 -->
          <!-- <div class="btn-wrap">
            <button type="button" class="cart-btn">장바구니</button>
            <button type="button" class="buy-btn" @click="_onShowLayer">바로구매</button>
          </div> -->

          <!-- [CASE2]: 바로구매 & 선물하기 상품 -->
          <div class="btn-wrap">
            <button type="button" class="gift-btn"><span class="blind">선물하기</span><i class="icon"></i></button>
            <button type="button" class="cart-btn">장바구니</button>
            <button type="button" class="buy-btn" @click="_onShowLayer">바로구매</button>
          </div>

          <!-- [CASE3]: 상담신청 상품 -->
          <!-- <div class="btn-wrap">
            <button type="button" class="buy-btn">상담신청하기</button>
          </div> -->

          <!-- [CASE4]: 방송중 구매가능 상품 -->
          <!-- <div class="btn-wrap">
            <button type="button" class="buy-btn disable" disabled>방송중 구매 가능합니다</button>
          </div> -->

          <!-- [CASE5]: 방송중 상담가능 상품 -->
          <!-- <div class="btn-wrap">
            <button type="button" class="buy-btn disable" disabled>방송중 상담 가능합니다</button>
          </div> -->

          <!-- [CASE6]: 품절 상품 -->
          <!-- <div class="btn-wrap">
            <button type="button" class="sold-out disable" disabled>상품이 품절되었습니다</button>
            <button type="button" class="restock-btn"><i class="icon"></i>재입고 알림</button>
          </div> -->

          <!-- [CASE7]: 판매불가 상품 -->
          <!-- <div class="btn-wrap">
            <button type="button" class="gift-btn"><i class="icon"></i>선물하기</button>
            <button type="button" class="buy-btn" @click="_onShowLayer">NSmall에서 바로 구매하기</button>
          </div> -->
        </div>
      </div>
    </div>

    <div class="goods-push-wrap">
      <div class="goods-onair-wrap">
        <GoodsRecommend title="다른 고객이 함께 본 상품" :items="goodsList" />
        <GoodsRecommend title="다른 고객이 함께 구매한 상품" :items="goodsList" />
        <GoodsRecommend title="다른 고객이 함께 구매한 인기상품" :items="goodsList" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, A11y } from 'swiper'
import { getOSByUserAgent } from '@/utils/device'
import { delay } from '@/utils/underscore'
import { request } from '@/utils/request'
import Toast from '@/components/toast'
import Options from '&/pages/goods/components/options.vue'
import DetailImg from '&/pages/goods/components/detail-img.vue'
import ReviewList from '&/pages/goods/components/review-list.vue'
import InfoDetailImg from '&/pages/goods/components/info-detail-img.vue'
import Nlive from '&/pages/goods/components/nlive.vue'
import GoodsRecommend from '&/components/goods-recommend.vue'
import inquiryList from '&/pages/goods/components/inquiry-list.vue'

type Key = (typeof TAB_TYPE)[keyof typeof TAB_TYPE]
interface Reactive {
  tabItems: { id: Key; title: string; number: string }[]
  onair: { onairTitle: string }[]
  activeTab: Key
  contentData: string
  isShowOptions: boolean
}
interface ListInfo {
  img: string
  name: string
  originPrice: string
  dcPrice: string
  dcRate: string
  url: string
}

const testMock = `
<div>
  <img src="/images/data/goods/@data-product-photo.jpg" alt="상품 설명 이미지" />
  <img src="https://johapmall.com/web/upload/NNEditor/20200428/ECBFA1EC8580_ED9484EB9DBCEC9DB4ED8CAC_780X22500.jpg" alt="test img" />
  <br />
  <img src="https://image.nsmall.com/ec_descimages/7/21/11/98819189560791367.jpg" alt="test img" />
  <br />
  <img src="https://image.nsmall.com/ec_descimages/5/23/01/4389978049603310.jpg" alt="test img" />
  <br />
  <img src="https://image.nsmall.com/ec_descimages/9/21/11/98819897473933070.jpg" alt="test img" />
  <br />
</div>
`
const goodsList: Ref<ListInfo[]> = ref<any>([])
const isDesktop = getOSByUserAgent() === 'desktop'
const detailInfoWrap = ref<HTMLElement | null>(null)
const isShowPlaying = ref(false)
const btnTooltip01 = ref(false)
const btnTooltip02 = ref(false)
const btnTooltip03 = ref(false)
const TAB_TYPE = { TAB1: 'TAB1', TAB2: 'TAB2', TAB3: 'TAB3', TAB4: 'TAB4' } as const
const state = reactive<Reactive>({
  tabItems: [
    { id: TAB_TYPE.TAB1, title: '상품설명', number: '' },
    { id: TAB_TYPE.TAB2, title: '상품정보', number: '' },
    { id: TAB_TYPE.TAB3, title: '상품평', number: '999+' },
    { id: TAB_TYPE.TAB4, title: '상품문의', number: '999+' }
  ],
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
  activeTab: TAB_TYPE.TAB1,
  contentData: '',
  isShowOptions: false
})
const setOptionClass = computed(() => {
  const isVisible = state.isShowOptions ? 'visible' : ''
  return isDesktop ? 'right-option' : `bottom-option ${isVisible}`
})

const updateMockData = async () => {
  // 목업 비동기 등록테스트
  await delay(2000)
  state.contentData = testMock
}
const toastHandler = (content: string, delay: number, position: string) => {
  Toast({ content, delay, position })
}
const _onChangeTab = async (id: Key) => {
  state.activeTab = id
  const offsetEle = detailInfoWrap.value?.getBoundingClientRect()?.top
  const offsetEleAbsolTop = window.pageYOffset + offsetEle!
  const tabHeight = detailInfoWrap.value?.querySelector('.goods-tab-list')?.clientHeight
  await nextTick()
  window.scrollTo({ top: offsetEleAbsolTop - tabHeight!, behavior: 'smooth' })
}
const _onShowLayer = () => {
  state.isShowOptions = true
}

onMounted(() => {
  updateMockData()
  request
    .post({
      url: '/test***/goodsList'
    })
    .then(res => {
      goodsList.value = res.data
    })
})
</script>

<style lang="scss">
@use '~/pages/goods/scss/goods.scss';
</style>
