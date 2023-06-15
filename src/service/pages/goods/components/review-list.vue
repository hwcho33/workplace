<template>
  <div class="review-list-wrap">
    <!--
      [CASE1]: 리뷰가 없는 경우 (상품설명, 상품평),
      [CASE2-1]: 상품설명 tab 요약본 - v-if="activeTab === 'TAB1',
      [CASE2-2]: 상품평 tab
    -->

    <!-- 리뷰 없을 경우노출  -->
    <div class="none-review">
      <em>등록된 상품평이 없습니다. </em>
      <p>이 상품의 첫 번째 상품평을 남겨주세요.</p>
    </div>

    <div class="general-review-wrap" :class="{ tab1: activeTab === 'TAB1' }">
      <strong class="title" v-if="activeTab === 'TAB1'">상품평 <em>(1,999)</em></strong>
      <div class="general-review">
        <div class="star-wrap">
          <i>별점</i>
          <span class="count">4.9</span>
          <span class="total">/ 5.0</span>
        </div>
        <p class="review-text"><strong>1,999</strong> 명의 고객이 평가했어요.</p>
      </div>

      <!-- 활성화 active -->
      <div class="rating-progressbar" :class="{ active: state.isOpendReview }">
        <!--
          [MODIFY] 2023-06-05/박주형/기획,디자인 변경
          [D]: 태그 변경함
        -->
        <ul>
          <li>
            <dl>
              <dt>편리성</dt>
              <dd>사용이 간편해요</dd>
              <dd class="graph-wrap">
                <i class="dash"></i>
                <em class="percent">18%</em>
              </dd>
            </dl>
            <ul class="graph-list">
              <li>
                <div class="graph-wrap">
                  <em class="title">사용이 간편해요</em>
                  <div class="graph">
                    <span style="width: 18%"></span>
                  </div>
                  <em class="percent">18%</em>
                </div>
              </li>
              <li>
                <div class="graph-wrap">
                  <em class="title">보통이에요</em>
                  <div class="graph">
                    <span style="width: 18%"></span>
                  </div>
                  <em class="percent">18%</em>
                </div>
              </li>
              <li>
                <div class="graph-wrap">
                  <em class="title">아쉬워요</em>
                  <div class="graph">
                    <span style="width: 18%"></span>
                  </div>
                  <em class="percent">18%</em>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <dl>
              <dt>서비스 품질</dt>
              <dd>아주 맘에 들어요</dd>
              <dd class="graph-wrap">
                <i class="dash"></i>
                <em class="percent">68%</em>
              </dd>
            </dl>
            <ul class="graph-list">
              <li>
                <div class="graph-wrap">
                  <em class="title">아주 맘에 들어요</em>
                  <div class="graph">
                    <span style="width: 18%"></span>
                  </div>
                  <em class="percent">18%</em>
                </div>
              </li>
              <li>
                <div class="graph-wrap">
                  <em class="title">좋아요</em>
                  <div class="graph">
                    <span style="width: 18%"></span>
                  </div>
                  <em class="percent">18%</em>
                </div>
              </li>
              <li>
                <div class="graph-wrap">
                  <em class="title">아쉬워요</em>
                  <div class="graph">
                    <span style="width: 18%"></span>
                  </div>
                  <em class="percent">18%</em>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <dl>
              <dt>디자인</dt>
              <dd>정말 마음에 들어요</dd>
              <dd class="graph-wrap">
                <i class="dash"></i>
                <em class="percent">90%</em>
              </dd>
            </dl>
            <ul class="graph-list">
              <li>
                <div class="graph-wrap">
                  <em class="title">정말 마음에 들어요</em>
                  <div class="graph">
                    <span style="width: 18%"></span>
                  </div>
                  <em class="percent">18%</em>
                </div>
              </li>
              <li>
                <div class="graph-wrap">
                  <em class="title">사진과 같아요</em>
                  <div class="graph">
                    <span style="width: 18%"></span>
                  </div>
                  <em class="percent">18%</em>
                </div>
              </li>
              <li>
                <div class="graph-wrap">
                  <em class="title">아쉬워요</em>
                  <div class="graph">
                    <span style="width: 18%"></span>
                  </div>
                  <em class="percent">18%</em>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div class="detail-btn-wrap" v-if="activeTab !== 'TAB1'">
          <button type="button" @click="_onMoreReview">{{ setReviewTitle }}</button>
        </div>
      </div>
    </div>

    <div class="total-review-contents">
      <!-- 비제한 상품일 경우노출 -->
      <div class="img-video-wrap">
        <div class="img-video-info">
          <strong class="title" v-if="activeTab === 'TAB1'">사진 <em>(125)</em></strong>
          <strong class="title" v-else>사진&동영상 <em>(125)</em></strong>

          <ul>
            <li v-for="index in 6" :key="index">
              <div class="img">
                <button type="button">
                  <img src="//image.nsmall.com/ec_custimages/itemval/804/10424804_1.jpeg" alt="임시 이미지" />
                </button>
              </div>
            </li>
          </ul>

          <button type="button" class="more-btn" v-if="activeTab === 'TAB1'">사진 모아보기</button>
          <button type="button" class="more-btn" v-else>더보기</button>
        </div>
      </div>

      <Dropdown
        v-if="activeTab !== 'TAB1'"
        v-model="state.exValue1"
        name="custom-select-01"
        :items="state.exItems1"
        defaultMsg="상품 전체"
        @onChange="_onChange"
      />

      <div class="total-review-wrap">
        <div class="count-sort-wrap" v-if="activeTab !== 'TAB1'">
          <div class="count-wrap">
            <em>총 <strong>1,999</strong>건</em>
            <button type="button" class="tool-tip">안내</button>
          </div>

          <div class="sort-wrap">
            <button type="button" class="sort-btn" @click="() => (state.isOpenSort = !state.isOpenSort)">
              {{ setSortTilte }}
            </button>
            <div v-if="state.isOpenSort" class="sort-list">
              <ul>
                <li
                  v-for="item in state.sortItems"
                  :key="item.value"
                  :class="{ active: item.value === state.sortItemActive }"
                >
                  <button type="button" :value="item.value" @click="_onChangeSort(item.value)">{{ item.title }}</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- [D]:상품설명 내 상품평 요약본인 경우 ex> class="[summary]" -->
        <ul class="goods-review-list-wrap" :class="{ summary: activeTab === 'TAB1' }">
          <li>
            <div class="review-info-wrap">
              <div class="rating">
                <em>5.0</em>
                <div class="star-wrap">
                  <span style="width: 80%">별점</span>
                </div>
              </div>
              <div class="user-info">
                <em class="name">lae***</em>
                <em class="date">23.03.29</em>
                <button type="button" class="report" v-if="activeTab !== 'TAB1'">신고</button>
              </div>
              <div class="review-option">
                <p><em>옵션 : 35L</em><span>/</span><em>글램 그리너리</em></p>
              </div>
            </div>

            <div class="review-content-wrap">
              <!-- 비제한 상품일 경우 노출 -->
              <p class="text-review">
                웍이 포함되어 있어 좋아요 배송 엄청 빠르네요 박스밖으로 손잡이 하나가 조금 삐져 나왔지만 흠집은 안났고
                귀리는 터져 흩어져 있지만 괜찮아요 사용후 다시 올릴게요~
              </p>

              <div class="goods-summary-review" v-if="activeTab !== 'TAB1'">
                <!--
                  [MODIFY] 2023-06-05/박주형/기획,디자인 변경
                  [D]: 태그 변경함
                -->
                <div class="review-box">
                  <dl>
                    <dt>디자인</dt>
                    <dd>사진과 같아요</dd>
                  </dl>
                  <dl>
                    <dt>편리성</dt>
                    <dd>사용하기 편리해요</dd>
                  </dl>
                  <dl>
                    <dt>서비스 품질</dt>
                    <dd>아주 맘에 들어요</dd>
                  </dl>
                </div>
              </div>

              <!-- 비제한 상품일 경우 노출, 등록된 이미지 없을 경우 삭제 -->
              <div class="review-img">
                <ul>
                  <li v-for="index in 4" :key="index">
                    <div class="img">
                      <button type="button">
                        <img src="//image.nsmall.com/ec_custimages/itemval/667/10422667_1.jpg" alt="임시 이미지" />
                      </button>
                    </div>
                  </li>
                </ul>
                <!-- 등록이미지 1개일 경우 비노출 -->
                <div class="image-count"><span>+3</span></div>
              </div>
              <div class="goods-help" v-if="activeTab !== 'TAB1'">
                <p class="text">이 상품평이 도움되셨다면 ‘좋아요’를 눌러주세요</p>
                <button type="button" class="thumb-up-btn t1">
                  <i class="icon-good">좋아요</i>
                  <em>365</em>
                </button>
              </div>
            </div>
          </li>

          <li>
            <div class="review-info-wrap">
              <div class="rating">
                <em>5.0</em>
                <div class="star-wrap">
                  <span style="width: 80%">별점</span>
                </div>
              </div>
              <div class="user-info">
                <em class="name">lae***</em>
                <em class="date">23.03.29</em>
                <button type="button" class="report" v-if="activeTab !== 'TAB1'">신고</button>
              </div>
              <div class="review-option">
                <p><em>옵션 : 35L</em><span>/</span><em>글램 그리너리</em></p>
              </div>
            </div>

            <div class="review-content-wrap">
              <!-- 비제한 상품일 경우 노출 -->
              <p class="text-review">
                후라이팬 고르는중에 내맘에 쏙 들어오길래 방송할때 기다렸다가 쿠폰할인해서 구매했어요 구성또한 맘에들고
                달라붙지않는다는거 큰 걱정은 팔에 힘이약해 손목나갈까 걱정이었는데 대놓고 무겁지않아 부분부분 정말 다행
                사은품으로 주신 귀리 얼른해먹었어요(깨진게많아 좀 거슬렸어요)블랙에디션에 레드에디션 작지만 달걀후라이용
                스텐제품 맘에들어요 구성 모두 고급지내요 아주 만족합니다~맘에든 쇼핑 목록이네요
              </p>

              <div class="goods-summary-review" v-if="activeTab !== 'TAB1'">
                <!--
                  [MODIFY] 2023-06-05/박주형/기획,디자인 변경
                  [D]: 태그 변경함
                -->
                <div class="review-box">
                  <dl>
                    <dt>디자인</dt>
                    <dd>사진과 같아요</dd>
                  </dl>
                  <dl>
                    <dt>편리성</dt>
                    <dd>사용하기 편리해요</dd>
                  </dl>
                  <dl>
                    <dt>서비스 품질</dt>
                    <dd>아주 맘에 들어요</dd>
                  </dl>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="review-info-wrap">
              <div class="rating">
                <em>5.0</em>
                <div class="star-wrap">
                  <span style="width: 80%">별점</span>
                </div>
              </div>
              <div class="user-info">
                <em class="name">lae***</em>
                <em class="date">23.03.29</em>
                <button type="button" class="report" v-if="activeTab !== 'TAB1'">신고</button>
              </div>
              <div class="review-option">
                <p><em>옵션 : 35L</em><span>/</span><em>글램 그리너리</em></p>
              </div>
            </div>

            <div class="review-content-wrap">
              <!-- 비제한 상품일 경우 노출 -->
              <p class="text-review">인덕션용이라 무거순것 말고는 좋네요</p>

              <div class="goods-summary-review" v-if="activeTab !== 'TAB1'">
                <!--
                  [MODIFY] 2023-06-05/박주형/기획,디자인 변경
                  [D]: 태그 변경함
                -->
                <div class="review-box">
                  <dl>
                    <dt>디자인</dt>
                    <dd>사진과 같아요</dd>
                  </dl>
                  <dl>
                    <dt>편리성</dt>
                    <dd>사용하기 편리해요</dd>
                  </dl>
                  <dl>
                    <dt>서비스 품질</dt>
                    <dd>아주 맘에 들어요</dd>
                  </dl>
                </div>
              </div>

              <!-- 비제한 상품일 경우 노출, 등록된 이미지 없을 경우 삭제 -->
              <div class="review-img">
                <ul>
                  <li>
                    <div class="img">
                      <button type="button">
                        <img src="//image.nsmall.com/ec_custimages/itemval/672/10629672_1.jpg" alt="임시 이미지" />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="goods-help" v-if="activeTab !== 'TAB1'">
                <p class="text">이 상품평이 도움되셨다면 ‘좋아요’를 눌러주세요</p>
                <button type="button" class="thumb-up-btn zero">
                  <i class="icon-good">좋아요</i>
                  <em>0</em>
                </button>
              </div>
            </div>
          </li>
        </ul>

        <button type="button" class="more-btn" v-if="activeTab === 'TAB1'">
          <span>상품평 모두보기</span>
        </button>

        <button type="button" class="more-btn more" v-else>
          <span>상품평 더보기</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { find } from 'lodash-es'
import { Dropdown } from '@/components/dropdown'

export interface Props {
  activeTab: string
}
type SortItemValue = 'highRating' | 'recent'

interface SortItem {
  value: SortItemValue
  title: string
}

const props = withDefaults(defineProps<Props>(), {})
const state = reactive({
  limitedGoods: false,
  isOpendReview: false,
  isOpenSort: false,
  sortItemActive: 'highRating' satisfies SortItemValue,
  sortItems: [
    {
      value: 'highRating',
      title: '높은평점순'
    },
    {
      value: 'recent',
      title: '최신순'
    }
  ] satisfies SortItem[],
  exValue1: '',
  exItems1: [
    {
      title: '전체',
      value: '전체'
    },
    {
      title: '40L',
      value: '40L'
    },
    {
      title: '옵션1 속성값',
      value: '옵션1 속성값'
    }
  ],
  activeTab: ''
})
const setSortTilte = computed(() => {
  const current = find(state.sortItems, (item: SortItem) => item.value === state.sortItemActive)
  return current?.title
})
const setReviewTitle = computed(() => {
  return state.isOpendReview ? '간단히 보기' : '자세히 보기'
})

const _onChangeSort = (value: SortItemValue) => {
  state.sortItemActive = value
  state.isOpenSort = false
}
const _onMoreReview = () => {
  state.isOpendReview = !state.isOpendReview
}
const _onChange = (value: string) => {
  console.log('emit value :', value)
}

watch(
  () => props.activeTab,
  async (newItems, oldItems) => {
    if (!oldItems && !newItems) return
  }
)
</script>

<style lang="scss">
@use '~/pages/goods/scss/review-list.scss';
</style>
