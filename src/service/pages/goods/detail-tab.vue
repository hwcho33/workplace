<template>
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
</template>

<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'
import Options from './components/options.vue'
import ReviewList from './components/review-list.vue'
import InfoDetailImg from './components/info-detail-img.vue'
import Nlive from './components/nlive.vue'
import inquiryList from './components/inquiry-list.vue'

type Key = (typeof TAB_TYPE)[keyof typeof TAB_TYPE]
interface Reactive {
  tabItems: { id: Key; title: string; number: string }[]
  onair: { onairTitle: string }[]
  activeTab: Key
  contentData: string
  isShowOptions: boolean
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

const isDesktop = getOSByUserAgent() === 'desktop'
const detailInfoWrap = ref<HTMLElement | null>(null)
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

// const toastHandler = (content: string, delay: number, position: string) => {
//   Toast({ content, delay, position })
// }

onMounted(() => {
  state.contentData = testMock
})

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
</script>

<style lang="scss">
@use '~/pages/goods/scss/goods.scss';
</style>
