<template>
  <div class="bundle-delivery-wrap">
    <div class="store-search-wrap">
      <label for="inStore"><span class="price">30,000원</span>이상 상품 주문시 배송비 무료</label>
      <div class="input-text-wrap">
        <input type="text" placeholder="매장 내 검색" name="in-store" id="inStore" required />
        <div class="btns-wrap">
          <button type="button" class="del-btn">삭제</button>
          <button type="button" class="search-btn">검색</button>
        </div>
      </div>
    </div>

    <div class="bundle-sort-wrap">
      <div class="count-wrap">
        <span>전체 <strong class="num">265</strong>개</span>
      </div>

      <div class="sort-wrap" :class="{ active: state.isOpenSort }">
        <button type="button" class="sort-btn" @click="() => (state.isOpenSort = !state.isOpenSort)">
          {{ setSortTilte }}
        </button>
        <div v-if="state.isOpenSort" class="sort-list-wrap">
          <ul class="sort-list">
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

      <div class="view-type-wrap">
        <button
          v-for="item in state.viewTypeItems"
          :key="item.value"
          type="button"
          class="list-btn"
          :class="{
            'list-btn': item.value === 'list',
            'grid-btn': item.value === 'grid',
            active: item.value === state.viewTypeActive
          }"
          @click="_onChangeViewType(item.value)"
        >
          <span class="blind">{{ item.title }}</span>
        </button>
      </div>
    </div>

    <!-- search result empty -->
    <div class="bundle-list-wrap">
      <!-- 
        [CASE1]: 묶음배송리스트형 - (23-05-23 기준 디자인없음 임시 내용 추가 상태)
        [D]: MO디폴트 리트스형 ex> class="bundle-list"
        [D]: PC디폴트 그리드형 ex> class="bundle-list [grid]"
      -->
      <ul class="bundle-list" v-if="$route.query.bundleList">
        <li>
          <router-link to="/publishing/goods/bundle-delivery">
            <figure>
              <img src="/images/data/goods/@data-product-photo.jpg" alt="묶음배송 가능한 상품" />
            </figure>
            <div class="goods-info">
              <strong class="goods-name">상품명 최대 2줄 노출 엔쿡 송탄식 부대찌개 500gX8팩</strong>

              <div class="price-wrap">
                <span class="origin-price">9,999,999<em>원</em></span>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/publishing/goods/bundle-delivery">
            <figure>
              <img src="/images/data/goods/@data-product-photo.jpg" alt="묶음배송 가능한 상품" />
            </figure>
            <div class="goods-info">
              <strong class="goods-name">상품명 최대 2줄 노출 엔쿡 송탄식 부대찌개 500gX8팩</strong>

              <div class="price-wrap">
                <span class="origin-price">9,999,999<em>원</em></span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>

      <!-- [CASE2]: 검색 결과 없을 경우 -->
      <div class="none-data" v-else>
        <p><span>'하림 닭가슴살'</span>에 대한 검색결과가 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { find } from 'lodash-es'

type SortItemValue = 'recommend' | 'salesRate' | 'lowPrice' | 'highPrice' | 'review'
interface SortItem {
  value: SortItemValue
  title: string
}
type viewTypeValue = 'list' | 'grid'
interface viewTypeItem {
  value: viewTypeValue
  title: string
}

const state = reactive({
  isOpenSort: false,
  sortItemActive: 'recommend' satisfies SortItemValue,
  sortItems: [
    {
      value: 'recommend',
      title: 'NS추천순'
    },
    {
      value: 'salesRate',
      title: '판매량순'
    },
    {
      value: 'lowPrice',
      title: '낮은 가격순'
    },
    {
      value: 'highPrice',
      title: '높은 가격순'
    },
    {
      value: 'review',
      title: '상품평순'
    }
  ] satisfies SortItem[],
  viewTypeActive: 'list' satisfies viewTypeValue,
  viewTypeItems: [
    {
      value: 'list',
      title: '리스트형 보기'
    },
    {
      value: 'grid',
      title: '그리드형 보기'
    }
  ] satisfies viewTypeItem[]
})
const setSortTilte = computed(() => {
  const current = find(state.sortItems, (item: SortItem) => item.value === state.sortItemActive)
  return current?.title
})
const _onChangeSort = (value: SortItemValue) => {
  state.sortItemActive = value
  state.isOpenSort = false
}
const _onChangeViewType = (value: viewTypeValue) => {
  state.viewTypeActive = value
}
</script>

<style lang="scss">
@use '~/pages/goods/scss/bundle-delivery.scss';
</style>
