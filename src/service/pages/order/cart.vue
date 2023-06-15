<template>
  <div class="cart-wrap">
    <div class="title-wrap" v-if="getOSByUserAgent() === 'desktop'">
      <h2 class="title">장바구니</h2>
      <ul class="step-wrap">
        <li class="active">장바구니</li>
        <li>주문결제</li>
        <li>주문완료</li>
      </ul>
    </div>

    <div class="tab-wrap">
      <ul class="tab-list">
        <li class="active">
          <button type="button" class="tab-btn">전체</button>
        </li>
        <li>
          <button type="button" class="tab-btn">씽씽배송</button>
        </li>
        <li>
          <button type="button" class="tab-btn">일반배송</button>
        </li>
      </ul>
    </div>

    <div class="cart-list-wrapper">
      <h3 class="blind">장바구니 목록</h3>
      <!-- [CASE1]: 장바구니 상품 없는 경우: /order/cart?empty=1 -->
      <template v-if="$route.query.empty">
        <div class="empty">
          <i class="cart-icon"></i>
          <p class="text">장바구니에 담긴 상품이 없습니다.</p>
          <router-link to="/" class="goods-btn">상품 보러 가기</router-link>
        </div>
      </template>

      <!-- [CASE2]: 장바구니 상품 있는 경우(모든상품:씽씽배송+일반배송): /order/cart -->
      <template v-else>
        <div class="check-all-wrap">
          <div class="check-all-inner">
            <div class="check-box">
              <input id="allCheck" name="all-check" type="checkbox" value="" />
              <label for="allCheck">2개 선택</label>
            </div>
            <button type="button" class="delete-btn">선택삭제<i class="icon"></i></button>
          </div>
        </div>

        <div class="cart-list-wrap">
          <div class="cart-list-inner">
            <div class="cart-list">
              <div class="check-all-wrap">
                <div class="check-box">
                  <input id="allCheck01" name="all-check-01" type="checkbox" value="" />
                  <label for="allCheck01">씽씽배송</label>
                </div>
              </div>

              <ul class="order-goods-list">
                <!--
                  [D]: 일반배송 ex> class="order-goods-info"
                  [D]: 씽씽배송 ex> class="order-goods-info [singsing]"
                -->
                <li class="order-goods-info singsing">
                  <div class="delivery-info">
                    <p class="text">
                      <i class="delivery-icon"></i>
                      내일(목) 새벽 7시 전 도착
                    </p>
                    <p class="tooltip"><strong>12시간 28분 30초</strong> 내 주문시</p>
                  </div>

                  <!--
                    [D]: 상품 ex> class="goods-wrap
                    [D]: 품절 상품 ex> class="goods-wrap [sold-out]
                    [D]: 방송중 구매 가능 상품 ex> class="goods-wrap [broadcast-goods]
                    [D]: 품절 or 방송중 구매가능 바로구매 버튼 => 재입고알림 or 방송알림 버튼으로 교체
                  -->
                  <div class="goods-wrapper">
                    <div class="goods-wrap">
                      <div class="check-box">
                        <input id="check01" name="goods" type="checkbox" value="" />
                        <label for="check01" class="blind">상품선택</label>
                      </div>
                      <router-link to="/" class="img-wrap">
                        <figure>
                          <img src="/images/data/order/@data-product-11.jpg" alt="상품이미지" />
                        </figure>
                      </router-link>
                      <div class="goods-info">
                        <div class="tag-info">
                          <span class="singsing"><i>씽씽배송</i></span>
                          <span class="free"><i>무료배송</i></span>
                          <span><i>쿠폰19%</i></span>
                          <!-- <span><i>쿠폰</i></span>
                        <span><i>적립99%</i></span>
                        <span><i>적립금</i></span>
                        <span><i>카드99%</i></span>
                        <span><i>카드할인</i></span>
                        <span><i>무이자12</i></span>
                        <span><i>사은품</i></span> -->
                        </div>
                        <router-link to="/" class="goods-name">
                          이상정의 명장 언양식 불고기 한판 220gx7팩 이상정의 명장 언양식 불고기 한판 220gx7팩이상정의
                          명장 언양식 불고기 한판 220gx7팩이상정의 명장 언양식 불고기 한판 220gx7팩
                        </router-link>
                      </div>

                      <!-- [D]: 단일 옵션 ex> class="option-info-wrap [single-option] -->
                      <div class="option-info-wrap">
                        <p class="option-name">
                          불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩
                          불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩
                        </p>
                        <div class="gift-wrap">
                          <span>사은품: 명장불고기 소스</span>
                          <span>사은품: 명장불고기 소스</span>
                          <span>사은품: 명장불고기 소스</span>
                          <span>사은품: 명장불고기 소스</span>
                          <span>사은품: 명장불고기 소스</span>
                          <span>사은품: 명장불고기 소스</span>
                        </div>
                        <div class="btn-wrap">
                          <button type="button" class="option-btn">옵션변경</button>
                          <SpinButton v-model="state.spin1" name="spin-button-wrap" @onChange="_onChange" />
                        </div>
                      </div>

                      <div class="price-info">
                        <div class="price-wrap">
                          <div class="dc-rate">15<span>%</span></div>
                          <div class="origin-price">999,999,000<span>원</span></div>
                          <div class="dc-price">999,999<span>원</span></div>
                        </div>
                        <button type="button" class="buy-btn">바로구매</button>
                      </div>

                      <button type="button" class="delete-btn">삭제</button>
                    </div>

                    <div class="goods-wrap">
                      <div class="check-box">
                        <input id="check02" name="goods" type="checkbox" />
                        <label for="check02" class="blind">상품선택</label>
                      </div>
                      <router-link to="/" class="img-wrap">
                        <figure>
                          <img src="/images/data/order/@data-product-11.jpg" alt="상품이미지" />
                        </figure>
                      </router-link>
                      <div class="goods-info">
                        <div class="tag-info">
                          <span class="singsing"><i>씽씽배송</i></span>
                          <span class="free"><i>무료배송</i></span>
                        </div>
                        <router-link to="/" class="goods-name"> 이상정의 명장 언양식 불고기 한판 220gx7팩</router-link>
                      </div>

                      <div class="option-info-wrap single-option">
                        <div class="btn-wrap">
                          <SpinButton v-model="state.spin2" name="spin-button-01" @onChange="_onChange" />
                        </div>
                      </div>

                      <div class="price-info">
                        <div class="price-wrap">
                          <div class="origin-price">999,999,000<span>원</span></div>
                        </div>
                        <button type="button" class="buy-btn">바로구매</button>
                      </div>

                      <button type="button" class="delete-btn">삭제</button>
                    </div>
                  </div>

                  <!--
                    [D]: 무료배송 : .delivery-price-info 영역삭제
                    [D]: 유료배송/착불배송 : .info, .btn-wrap 삭제
                    [D]: 조건부 무료배송_조건 만족 : .btn-wrap 삭제
                    [D]: 조건부 무료배송_조건 불만족 : 묶음배송 구매하기 버튼삭제
                    [D]: 묶음배송 상품 무료배송_조건 만족 : .info, 배송비 절약 상품 보기 버튼삭제
                    [D]: 묶음배송 상품 무료배송_조건 불만족 : 하단코드
                    [D]: 품절로 구매 불가 시 ex> delivery-price-info [sold-out]
                  -->
                  <div class="delivery-price-info">
                    <p class="delivery-price">839,999,900원 + 배송비 3,000원 = 999.999,900원</p>
                    <p class="info">(3만원 이상 무료배송)</p>
                    <router-link to="/" class="link-btn">배송비 절약 상품 보기</router-link>
                    <button type="button" class="buy-btn">묶음배송 구매하기</button>
                  </div>
                </li>

                <li class="order-goods-info singsing">
                  <div class="delivery-info">
                    <p class="text">
                      <i class="delivery-icon"></i>
                      내일(목) 새벽 7시 전 도착
                    </p>
                    <p class="tooltip"><strong>07시간 28분 30초</strong> 내 주문시</p>
                  </div>

                  <div class="goods-wrapper">
                    <div class="goods-wrap">
                      <div class="check-box">
                        <input id="check03" name="goods" type="checkbox" value="" />
                        <label for="check03" class="blind">상품선택</label>
                      </div>
                      <router-link to="/" class="img-wrap">
                        <figure>
                          <img src="/images/data/order/@data-product-07.jpg" alt="상품이미지" />
                        </figure>
                      </router-link>
                      <div class="goods-info">
                        <div class="tag-info">
                          <span class="singsing"><i>씽씽배송</i></span>
                        </div>
                        <router-link to="/" class="goods-name"> 이상정의 명장 </router-link>
                      </div>

                      <div class="option-info-wrap single-option">
                        <div class="gift-wrap">
                          <span>사은품: 명장불고기 소스</span>
                        </div>
                        <div class="btn-wrap">
                          <SpinButton v-model="state.spin1" name="spin-button-wrap" @onChange="_onChange" />
                        </div>
                      </div>

                      <div class="price-info">
                        <div class="price-wrap">
                          <div class="dc-rate">15<span>%</span></div>
                          <div class="origin-price">999,999,000<span>원</span></div>
                          <div class="dc-price">999,999<span>원</span></div>
                        </div>
                        <button type="button" class="buy-btn">바로구매</button>
                      </div>

                      <button type="button" class="delete-btn">삭제</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="cart-list">
              <div class="check-all-wrap">
                <div class="check-box">
                  <input id="allCheck02" name="all-check-02" type="checkbox" value="" />
                  <label for="allCheck02">일반배송</label>
                </div>
              </div>

              <ul class="order-goods-list">
                <li class="order-goods-info">
                  <div class="delivery-info">
                    <p class="text">
                      <i class="delivery-icon"></i>
                      <strong>모레 3/10(금)</strong>이내 도착예정
                    </p>
                  </div>

                  <div class="goods-wrapper">
                    <div class="goods-wrap">
                      <div class="check-box">
                        <input id="check04" name="goods" type="checkbox" value="" />
                        <label for="check04" class="blind">상품선택</label>
                      </div>
                      <router-link to="/" class="img-wrap">
                        <figure>
                          <img src="/images/data/order/@data-product-09.jpg" alt="상품이미지" />
                        </figure>
                      </router-link>
                      <div class="goods-info">
                        <router-link to="/" class="goods-name">
                          이상정의명장언양식불고기한판220gx7팩 이상정의 명장 언양식 불고기 한판 220gx7팩이상정의 명장
                          언양식 불고기 한판 220gx7팩이상정의 명장 언양식 불고기 한판 220gx7팩
                          이상정의명장언양식불고기한판220gx7팩 이상정의 명장 언양식 불고기 한판 220gx7팩이상정의 명장
                          언양식 불고기 한판 220gx7팩이상정의 명장
                        </router-link>
                      </div>

                      <div class="option-info-wrap">
                        <div class="gift-wrap">
                          <span>사은품: 명장불고기 소스 명장불고기 소스명장불고기 소스명장불고기 소스</span>
                          <span>사은품: 명장불고기 소스</span>
                        </div>
                        <div class="btn-wrap">
                          <button type="button" class="option-btn">옵션변경</button>
                          <SpinButton v-model="state.spin1" name="spin-button-01" @onChange="_onChange" />
                        </div>
                      </div>

                      <div class="price-info">
                        <div class="price-wrap">
                          <div class="dc-rate">15<span>%</span></div>
                          <div class="origin-price">999,999,000<span>원</span></div>
                          <div class="dc-price">999,999<span>원</span></div>
                        </div>
                        <button type="button" class="buy-btn">바로구매</button>
                      </div>

                      <button type="button" class="delete-btn">상품삭제</button>
                    </div>

                    <div class="goods-wrap broadcast-goods">
                      <div class="check-box">
                        <input id="check05" name="goods" type="checkbox" value="" />
                        <label for="check05" class="blind">상품선택</label>
                      </div>
                      <router-link to="/" class="img-wrap">
                        <figure>
                          <img src="/images/data/order/@data-product-10.jpg" alt="상품이미지" />
                        </figure>
                      </router-link>
                      <div class="goods-info">
                        <div class="tag-info">
                          <span class="free"><i>무료배송</i></span>
                        </div>
                        <router-link to="/" class="goods-name"> 이상정의 명장 언양식 불고기 한판 </router-link>
                      </div>

                      <div class="option-info-wrap single-option">
                        <div class="btn-wrap">
                          <SpinButton v-model="state.spin2" name="spin-button-01" @onChange="_onChange" />
                        </div>
                      </div>

                      <div class="price-info">
                        <div class="price-wrap">
                          <div class="origin-price">999,999,000<span>원</span></div>
                        </div>

                        <button
                          class="broadcast-btn"
                          :class="{ 'is-active': state.broadcastBtnOn }"
                          @click="state.broadcastBtnOn = !state.broadcastBtnOn"
                        >
                          <span class="icon">방송알림</span>
                        </button>
                      </div>

                      <button type="button" class="delete-btn">상품삭제</button>
                    </div>
                  </div>

                  <div class="delivery-price-info">
                    <p class="delivery-price">839,999,900원 + 배송비 무료 = 999.999,900원</p>
                    <button type="button" class="buy-btn">묶음배송 구매하기</button>
                  </div>
                </li>

                <li class="order-goods-info">
                  <div class="goods-wrapper">
                    <div class="goods-wrap sold-out">
                      <div class="check-box">
                        <input id="check06" name="goods" type="checkbox" value="" />
                        <label for="check06" class="blind">상품선택</label>
                      </div>
                      <router-link to="/" class="img-wrap">
                        <figure>
                          <img src="/images/data/order/@data-product-07.jpg" alt="상품이미지" />
                        </figure>
                      </router-link>
                      <div class="goods-info">
                        <div class="tag-info">
                          <span class="free"><i>무료배송</i></span>
                          <span><i>쿠폰19%</i></span>
                        </div>
                        <router-link to="/" class="goods-name">
                          이상정의 명장 언양식 불고기 한판 220gx7팩 이상정의 명장 언양식 불고기 한판 220gx7팩이상정의
                          명장 언양식 불고기 한판 220gx7팩이상정의 명장 언양식 불고기 한판 220gx7팩
                        </router-link>
                      </div>

                      <div class="option-info-wrap">
                        <p class="option-name">
                          불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩
                        </p>
                        <div class="btn-wrap">
                          <button type="button" class="option-btn">옵션변경</button>
                          <SpinButton v-model="state.spin3" name="spin-button-wrap" isDisabled @onChange="_onChange" />
                        </div>
                      </div>

                      <div class="price-info">
                        <div class="price-wrap">
                          <div class="origin-price">999,999,000<span>원</span></div>
                        </div>

                        <button
                          class="restock-btn"
                          :class="{ 'is-active': state.restockBtnOn }"
                          @click="state.restockBtnOn = !state.restockBtnOn"
                        >
                          <span class="icon">재입고알림</span>
                        </button>
                      </div>

                      <button type="button" class="delete-btn">상품삭제</button>
                    </div>
                  </div>

                  <div class="delivery-price-info sold-out">
                    <p class="delivery-price">839,999,900원 + 배송비 3,000원 = 999.999,900원</p>
                    <p class="info">(3만원 이상 무료배송)</p>
                    <router-link to="/" class="link-btn">배송비 절약 상품 보기</router-link>
                  </div>
                </li>

                <li class="order-goods-info">
                  <div class="goods-wrapper">
                    <div class="goods-wrap broadcast-goods">
                      <div class="check-box">
                        <input id="check06" name="goods" type="checkbox" value="" />
                        <label for="check06" class="blind">상품선택</label>
                      </div>
                      <router-link to="/" class="img-wrap">
                        <figure>
                          <img src="/images/data/order/@data-product-07.jpg" alt="상품이미지" />
                        </figure>
                      </router-link>
                      <div class="goods-info">
                        <div class="tag-info">
                          <span class="free"><i>무료배송</i></span>
                          <span><i>쿠폰19%</i></span>
                        </div>
                        <router-link to="/" class="goods-name">
                          이상정의 명장 언양식 불고기 한판 220gx7팩 이상정의 명장 언양식 불고기 한판 220gx7팩이상정의
                          명장 언양식 불고기 한판 220gx7팩이상정의 명장 언양식 불고기 한판 220gx7팩
                        </router-link>
                      </div>

                      <div class="option-info-wrap">
                        <p class="option-name">
                          불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩불고기 220gx7팩
                        </p>
                        <div class="btn-wrap">
                          <button type="button" class="option-btn">옵션변경</button>
                          <SpinButton v-model="state.spin3" name="spin-button-wrap" isDisabled @onChange="_onChange" />
                        </div>
                      </div>

                      <div class="price-info">
                        <div class="price-wrap">
                          <div class="origin-price">999,999,000<span>원</span></div>
                        </div>

                        <button
                          class="broadcast-btn"
                          :class="{ 'is-active': state.broadcastBtnOn2 }"
                          @click="state.broadcastBtnOn2 = !state.broadcastBtnOn2"
                        >
                          <span class="icon">방송알림</span>
                        </button>
                      </div>

                      <button type="button" class="delete-btn">상품삭제</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <ul class="cart-info">
              <li>최대 99개의 상품을 장바구니에 담을 수 있습니다.</li>
              <li>장바구니에 담은 상품은 최대 90일간 보관됩니다.</li>
              <li>묶음배송 상품을 취소 또는 반품할 경우, 배송비가 각각 발생할 수 있습니다.</li>
            </ul>
          </div>

          <div class="price-info-wrap">
            <div class="price-info-inner">
              <h4 class="title">결제정보</h4>
              <dl class="goods-price">
                <dt>총 상품금액</dt>
                <dd>999,413,000원</dd>
              </dl>
              <dl class="dc-price">
                <dt>총 할인금액</dt>
                <dd>-233,233원</dd>
              </dl>
              <dl class="delivery-price">
                <dt>총 배송비</dt>
                <dd>3,000원</dd>
              </dl>
              <dl class="total-price">
                <dt>총 결제 예상금액</dt>
                <dd>999,374,780<span>원</span></dd>
              </dl>
              <button type="button" class="products-btn" v-if="getOSByUserAgent() === 'desktop'">구매하기 (5)</button>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="goods-list-wrapper">
      <GoodsRecommend title="함께 구매하면 좋은 상품" :items="goodsList" />
      <GoodsRecommend title="김엔에스님이 찜한 상품" :items="goodsList" />
    </div>

    <!-- [D]: mobile에서만 노출 -->
    <div class="mo-only-button" :class="{ 'is-active': state.layerOpen }" v-if="getOSByUserAgent() !== 'desktop'">
      <div class="mo-only-inner">
        <dl class="total-price">
          <dt>합계</dt>
          <dd>
            999,998,810<span>원</span>

            <button type="button" class="price-btn" @click="toggleLayer">
              <span class="blind">총 결제 예상금액 보기</span>
            </button>
          </dd>
        </dl>
        <button type="button" class="buy-btn">구매하기(4)</button>
        <!-- <button type="button" class="buy-btn disable">상품을 선택해 주세요</button> -->
      </div>
    </div>

    <!-- [D]: mobile에서만 노출 -->
    <div class="bottom-price" :class="{ visible: state.layerOpen }" v-if="getOSByUserAgent() !== 'desktop'">
      <div class="inner">
        <div class="price-info-wrap">
          <h4 class="blind">결제정보</h4>
          <dl class="goods-price">
            <dt>총 상품금액</dt>
            <dd>999,413,000원</dd>
          </dl>
          <dl class="dc-price">
            <dt>총 할인금액</dt>
            <dd>-233,233원</dd>
          </dl>
          <dl class="delivery-price">
            <dt>총 배송비</dt>
            <dd>3,000원</dd>
          </dl>
          <dl class="total-price">
            <dt>총 결제 예상금액</dt>
            <dd>999,374,780<span>원</span></dd>
          </dl>
        </div>

        <button type="button" class="btn-close" v-if="getOSByUserAgent() !== 'desktop'" @click="toggleLayer">
          닫기
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { request } from '@/utils/request'
import { getOSByUserAgent } from '@/utils/device'
import { useModal } from '@/composables/ui/use-modal'
import { SpinButton } from '@/components/spin-button'
import GoodsRecommend from '&/components/goods-recommend.vue'
interface ListInfo {
  img: string
  name: string
  originPrice: string
  dcPrice: string
  dcRate: string
  url: string
}

let goodsList: Ref<ListInfo[]> = ref<any>([])

onMounted(() => {
  request
    .post({
      url: '/test***/goodsList'
    })
    .then(res => {
      goodsList.value = res.data
    })
})

const state = reactive({
  spin1: '1',
  spin2: '1',
  spin3: '1',
  spin4: '1',
  spin5: '1',
  spin6: '1',
  restockBtnOn: false,
  broadcastBtnOn: false,
  broadcastBtnOn2: false,
  layerOpen: false
})

const { unblockScroll, blockScroll } = useModal()
const toggleLayer = () => {
  state.layerOpen = !state.layerOpen
  if (state.layerOpen === true) {
    blockScroll()
  } else {
    unblockScroll()
  }
}

const _onChange = (value: string) => {
  console.log('emit value :', value)
}
</script>

<style lang="scss">
@use '~/pages/order/scss/cart.scss';
</style>
