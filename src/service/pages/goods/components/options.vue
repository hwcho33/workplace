<template>
  <div class="option-wrapper">
    <div class="inner">
      <div class="option-info">
        <!-- [CASE1]: 단품없음 / 사은품_단품 -->
        <div class="count-wrap">
          <p class="count-text">
            수량을 선택해주세요.
            <span class="remaining" v-if="state.itemCount < 11">({{ state.itemCount }}개 남음)</span>
          </p>
          <SpinButton v-model="spinBtState.exValue1" name="spin-button-01" @on-change="_onChangeSpinBt" />
        </div>
        <div class="order-gift-wrap">
          <figure class="img-wrap">
            <img src="/images/data/goods/@data-product-photo.jpg" alt="사은품 상품" />
          </figure>
          <dl class="gift-info">
            <dt>사은품</dt>
            <dd>
              강화유리 범용 뚜껑 스테인레스 손잡이강화유리 범용 뚜껑 스테인레스 손잡이강화유리 범용 뚜껑 스테인레스
              손잡이강화유리 범용 뚜껑 스테인레스 손잡이
            </dd>
          </dl>
        </div>

        <!-- [CASE2]: 단품있음 -->
        <Dropdown
          v-model="state.value"
          name="custom-select"
          :items="state.item"
          defaultMsg="상품을 선택해 주세요"
          is-flat
          size="small"
          @on-change="_onChange"
        >
          <template #contents="{ items, changeValue, setActive }">
            <li v-for="item in items" :key="item.value" :class="{ 'is-active': setActive(item.value) }">
              <button type="button" @click="() => changeValue(item.value)" :disabled="item.soldOut == true">
                {{ item.title }}
              </button>
              <button
                v-if="item.restockBtn === true"
                class="restock-btn"
                :class="{ 'is-active': item.restockBtnOn }"
                @click="item.restockBtnOn = !item.restockBtnOn"
              >
                <span class="icon">재입고 알림</span>
              </button>
            </li>
          </template>
        </Dropdown>

        <div class="order-goods-info">
          <p class="goods-name">
            하림 마늘훈제치킨 반마리 210g X 12팩 소스 3종하림 마늘훈제치킨 반마리 210g X 12팩 소스 3종
          </p>
          <p class="origin-price">5,900<span>원</span></p>
          <SpinButton v-model="spinBtState.exValue2" name="spin-button-02" @on-change="_onChangeSpinBt" />
          <button type="button" class="delete-btn">삭제</button>
        </div>

        <!-- [CASE3]: 단품있음 - 계단식옵션 & 사은품옵션 -->
        <Dropdown
          v-model="state.option1"
          name="custom-select"
          :items="state.optionItem1"
          defaultMsg="색상"
          is-flat
          size="small"
          @on-change="_onChange"
        >
          <template #contents="{ items, changeValue, setActive }">
            <li v-for="item in items" :key="item.value" :class="{ 'is-active': setActive(item.value) }">
              <button type="button" @click="() => changeValue(item.value)" :disabled="item.soldOut == true">
                {{ item.title }} <span v-if="item.soldOut == true">(품절)</span>
              </button>
              <button
                v-if="item.restockBtn === true"
                class="restock-btn"
                :class="{ 'is-active': item.restockBtnOn }"
                @click="item.restockBtnOn = !item.restockBtnOn"
              >
                <span class="icon">재입고 알림</span>
              </button>
            </li>
          </template>
        </Dropdown>

        <Dropdown
          v-model="state.option2"
          name="custom-select"
          :items="state.optionItem2"
          defaultMsg="사이즈"
          is-flat
          size="small"
          isDisabled
          @on-change="_onChange"
        >
          <template #contents="{ items, changeValue, setActive }">
            <li v-for="item in items" :key="item.value1" :class="{ 'is-active': setActive(item.value1) }">
              <button type="button" @click="() => changeValue(item.value)" :disabled="item.soldOut == true">
                {{ item.title }} <span v-if="item.soldOut == true">(품절)</span>
              </button>
              <button
                v-if="item.restockBtn === true"
                class="restock-btn"
                :class="{ 'is-active': item.restockBtnOn }"
                @click="item.restockBtnOn = !item.restockBtnOn"
              >
                <span class="icon">재입고 알림</span>
              </button>
            </li>
          </template>
        </Dropdown>

        <Dropdown
          v-model="state.option3"
          name="custom-select"
          :items="state.optionItem3"
          defaultMsg="모델명"
          is-flat
          size="small"
          isDisabled
          @on-change="_onChange"
        >
          <template #contents="{ items, changeValue, setActive }">
            <li v-for="item in items" :key="item.value1" :class="{ 'is-active': setActive(item.value1) }">
              <button type="button" @click="() => changeValue(item.value)" :disabled="item.soldOut == true">
                {{ item.title }} <span v-if="item.soldOut == true">(품절)</span>
                <span v-if="item.remaining > 0" class="remaining">({{ item.remaining }}개 남은)</span>
              </button>
              <button
                v-if="item.restockBtn === true"
                class="restock-btn"
                :class="{ 'is-active': item.restockBtnOn }"
                @click="item.restockBtnOn = !item.restockBtnOn"
              >
                <span class="icon">재입고 알림</span>
              </button>
            </li>
          </template>
        </Dropdown>

        <Dropdown
          v-model="state.option4"
          name="custom-select"
          :items="state.optionItem4"
          defaultMsg="세트"
          is-flat
          size="small"
          isDisabled
          @on-change="_onChange"
        >
          <template #contents="{ items, changeValue, setActive }">
            <li v-for="item in items" :key="item.value1" :class="{ 'is-active': setActive(item.value1) }">
              <button type="button" @click="() => changeValue(item.value)" :disabled="item.soldOut == true">
                {{ item.title }} <span v-if="item.soldOut == true">(품절)</span>
                <span v-if="item.remaining > 0" class="remaining">({{ item.remaining }}개 남음)</span>
              </button>
              <button
                v-if="item.restockBtn === true"
                class="restock-btn"
                :class="{ 'is-active': item.restockBtnOn }"
                @click="item.restockBtnOn = !item.restockBtnOn"
              >
                <span class="icon">재입고 알림</span>
              </button>
            </li>
          </template>
        </Dropdown>

        <div class="order-goods-info">
          <p class="goods-name">레드, 95, X2578, 상하세트</p>
          <p class="origin-price">999,999,999<span>원</span></p>
          <SpinButton v-model="spinBtState.exValue3" name="spin-button-03" @on-change="_onChangeSpinBt" />
          <button type="button" class="delete-btn">삭제</button>
        </div>

        <Dropdown
          v-model="state.option5"
          name="custom-select"
          :items="state.optionItem5"
          defaultMsg="사은품을 선택해주세요. (선택1)"
          is-flat
          size="small"
          @on-change="_onChange"
          class="gift-select"
        >
          <template #contents="{ items, changeValue, setActive }">
            <li v-for="item in items" :key="item.value1" :class="{ 'is-active': setActive(item.value1) }">
              <button type="button" @click="() => changeValue(item.value)" :disabled="item.soldOut == true">
                {{ item.title }} <span v-if="item.soldOut == true">(품절)</span>
                <span v-if="item.remaining > 0" class="remaining">({{ item.remaining }}개 남은)</span>
              </button>
              <button
                v-if="item.restockBtn === true"
                class="restock-btn"
                :class="{ 'is-active': item.restockBtnOn }"
                @click="item.restockBtnOn = !item.restockBtnOn"
              >
                <span class="icon">재입고 알림</span>
              </button>
            </li>
          </template>
        </Dropdown>

        <Dropdown
          v-model="state.option6"
          name="custom-select"
          :items="state.optionItem4"
          defaultMsg="사은품을 선택해주세요. (선택2)"
          is-flat
          size="small"
          @on-change="_onChange"
          class="gift-select"
        >
          <template #contents="{ items, changeValue, setActive }">
            <li v-for="item in items" :key="item.value1" :class="{ 'is-active': setActive(item.value1) }">
              <button type="button" @click="() => changeValue(item.value)" :disabled="item.soldOut == true">
                {{ item.title }} <span v-if="item.soldOut == true">(품절)</span>
                <span v-if="item.remaining > 0" class="remaining">({{ item.remaining }}개 남음)</span>
              </button>
              <button
                v-if="item.restockBtn === true"
                class="restock-btn"
                :class="{ 'is-active': item.restockBtnOn }"
                @click="item.restockBtnOn = !item.restockBtnOn"
              >
                <span class="icon">재입고 알림</span>
              </button>
            </li>
          </template>
        </Dropdown>

        <div class="order-gift-wrap">
          <figure class="img-wrap">
            <img src="/images/data/goods/@data-product-photo.jpg" alt="사은품 상품" />
          </figure>
          <dl class="gift-info">
            <dt>사은품</dt>
            <dd>
              강화유리 범용 뚜껑 스테인레스 손잡이강화유리 범용 뚜껑 스테인레스 손잡이강화유리 범용 뚜껑 스테인레스
              손잡이강화유리 범용 뚜껑 스테인레스 손잡이
            </dd>
          </dl>
          <button type="button" class="delete-btn">삭제</button>
        </div>
      </div>

      <div class="total-wrap">
        <dl class="delivery-info">
          <dt>무료배송</dt>
          <dd>
            <p>내일 4/5(수) 이내 도착예정</p>
            <p class="tooltip">20,000원 이상 구매 시</p>
          </dd>
        </dl>
        <dl class="total-price">
          <dt>총 구매금액</dt>
          <dd>999,523,600<span>원</span></dd>
        </dl>
      </div>

      <div class="btn-wrap">
        <button type="button" class="gift-btn"><span class="blind">선물하기</span><i class="icon"></i></button>
        <button type="button" class="cart-btn">장바구니</button>
        <button type="button" class="buy-btn">바로구매</button>
      </div>
      <button type="button" class="btn-close" v-if="!isDesktop" @click="_onHideLayer">닫기</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'
import { Dropdown } from '@/components/dropdown'
import { useModal } from '@/composables/ui/use-modal'
import { SpinButton } from '@/components/spin-button'

export interface Props {
  modelValue?: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{
  (event: 'update:modelValue', result: boolean): void
}>()

const isDesktop = getOSByUserAgent() === 'desktop'
const spinBtState = reactive({
  exValue1: '1',
  exValue2: '1',
  exValue3: '1'
})
const state = reactive({
  itemCount: 10,
  value: '',
  value1: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  option5: '',
  option6: '',
  isShow: false,
  item: [
    {
      title: '하림 마늘 훈제치킨 반마리 210x12팩 소스 3종 추가 증정',
      value: '하림 마늘 훈제치킨 반마리 210x12팩 소스 3종 추가 증정1'
    },
    {
      title: '하림 마늘 훈제치킨 반마리 210x12팩 소스 3종 추가 증정',
      value: '하림 마늘 훈제치킨 반마리 210x12팩 소스 3종 추가 증정2',
      soldOut: true,
      restockBtn: true,
      restockBtnOn: false
    },
    {
      title: '하림 마늘 훈제치킨 반마리 210x12(품절)',
      value: '하림 마늘 훈제치킨 반마리 210x12(품절)3',
      soldOut: true,
      restockBtn: true,
      restockBtnOn: false
    },
    {
      title: '하림 마늘 훈제치킨 반마리 210x12팩 소스 3종 추가 증정',
      value: '하림 마늘 훈제치킨 반마리 210x12팩 소스 3종 추가 증정4'
    },
    {
      title: '하림 마늘 훈제치킨 반마리 210x12',
      value: '하림 마늘 훈제치킨 반마리 210x125'
    }
  ],
  item1: [
    {
      title: '심플 오리털 초경량패딩 솜',
      value: '심플 오리털 초경량패딩 솜',
      soldOut: true,
      restockBtn: true,
      restockBtnOn: false
    },
    {
      title: '심플 오리털 초경량패딩 모자 퍼심플 오리털 초경량패딩 솜심플 오리털 초경량패딩 솜',
      value: '심플 오리털 초경량패딩 모자 퍼심플 오리털 초경량패딩 솜심플 오리털 초경량패딩 솜'
    },
    {
      title: '심플 오리털 초경량패딩 모자',
      value: '심플 오리털 초경량패딩 모자'
    }
  ],
  optionItem1: [
    {
      title: '블랙 (+1,000원)',
      value: '블랙 (+1,000원)',
      soldOut: true
    },
    {
      title: '레드',
      value: '레드'
    },
    {
      title: '그레이',
      value: '그레이',
      soldOut: true,
      restockBtn: true,
      restockBtnOn: false
    },
    {
      title: '화이트',
      value: '화이트'
    },
    {
      title: '블루 (+1,000원)',
      value: '블루 (+1,000원)'
    }
  ],
  optionItem2: [
    {
      title: '80',
      value: '80',
      soldOut: true
    },
    {
      title: '85',
      value: '85'
    },
    {
      title: '90',
      value: '90'
    },
    {
      title: '95',
      value: '95'
    }
  ],
  optionItem3: [
    {
      title: 'X2578',
      value: 'X2578',
      soldOut: true
    },
    {
      title: 'X2574',
      value: 'X2574'
    }
  ],
  optionItem4: [
    {
      title: '상하세트',
      value: '상하세트',
      remaining: 10
    },
    {
      title: '여름세트',
      value: '여름세트',
      soldOut: true
    }
  ],
  optionItem5: [
    {
      title: '심플 오리털 초경량패딩 모자',
      value: '심플 오리털 초경량패딩 모자',
      remaining: 10
    },
    {
      title: '심플 오리털 초경량패딩 모자',
      value: '심플 오리털 초경량패딩 모자심플 오리털 초경량패딩 모자',
      soldOut: true
    }
  ]
})
const { blockScroll, unblockScroll } = useModal()

const _onHideLayer = () => {
  emit('update:modelValue', false)
}
const _onChange = (value: string) => {
  console.log('emit value :', value)
}
const _onChangeSpinBt = (value: string) => {
  console.log(value)
}

watch(
  () => props.modelValue,
  async (newItems, oldItems) => {
    if (!oldItems && !newItems) return
    if (newItems) {
      await nextTick()
      blockScroll()
    } else {
      await nextTick()
      unblockScroll()
    }
  },
  { immediate: true }
)
</script>

<style lang="scss">
@use '~/pages/goods/scss/options.scss';
</style>
