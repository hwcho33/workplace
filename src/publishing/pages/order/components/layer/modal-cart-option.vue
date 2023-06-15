<template>
  <Layer
    class="modal-cart-option"
    v-model="state.isShow"
    layer-type="full"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>옵션변경</template>
    <template #contents>
      <div class="goods-wrap">
        <figure class="img-wrap">
          <img src="/images/data/order/@data-product-08.jpg" alt="상품이미지" />
        </figure>
        <div class="goods-info">
          <div class="goods-name">
            [갤러리아] [23S/S][5차 예약 판매]로고 밴딩 셔츠 레이어드 세트 원피스 로고 밴딩 셔츠 레이어드 세트 원피스
            로고 밴딩 셔츠 레이어드 세트 원피스 [갤러리아] [23S/S][5차 예약 판매]로고 밴딩 셔츠 레이어드 세트 원피스
            로고 밴딩 셔츠 레이어드 세트 원피스 로고 밴딩 셔츠 레이어드 세트 원피스 [갤러리아] [23S/S][5차 예약
            판매]로고 밴딩 셔츠 레이어드 세트 원피스 로고 밴딩 셔츠 레이어드 세트 원피스 로고 밴딩 셔츠 레이어드 세트
            원피스
          </div>
        </div>
      </div>

      <div class="cart-option-wrap">
        <Dropdown
          v-model="state.value1"
          name="custom-select"
          :items="state.item1"
          defaultMsg="상품번호"
          size="small"
          is-flat
        >
          <template #contents="{ items, changeValue, setActive }">
            <li v-for="item in items" :key="item.value" :class="{ 'is-selected': setActive(item.value) }">
              <button type="button" @click="() => changeValue(item.value)" :disabled="item.soldOut == true">
                {{ item.title }}
                <span v-if="item.soldOut == true">(품절)</span>
                <span v-if="item.remaining > 0" class="remaining">({{ item.remaining }}개 남음)</span>
              </button>
            </li>
          </template>
        </Dropdown>

        <Dropdown
          v-model="state.value2"
          name="custom-select"
          :items="state.item2"
          defaultMsg="색상"
          size="small"
          is-flat
        >
          <template #contents="{ items, changeValue, setActive }">
            <li v-for="item in items" :key="item.value" :class="{ 'is-selected': setActive(item.value) }">
              <button type="button" @click="() => changeValue(item.value)" :disabled="item.soldOut == true">
                {{ item.title }}
                <span v-if="item.soldOut == true">(품절)</span>
                <span v-if="item.remaining > 0" class="remaining">({{ item.remaining }}개 남음)</span>
              </button>
            </li>
          </template>
        </Dropdown>

        <Dropdown
          v-model="state.value3"
          name="custom-select"
          :items="state.item3"
          defaultMsg="사이즈"
          size="small"
          is-flat
        >
          <template #contents="{ items, changeValue, setActive }">
            <li v-for="item in items" :key="item.value" :class="{ 'is-selected': setActive(item.value) }">
              <button type="button" @click="() => changeValue(item.value)" :disabled="item.soldOut == true">
                {{ item.title }}
                <span v-if="item.soldOut == true">(품절)</span>
                <span v-if="item.remaining > 0" class="remaining">({{ item.remaining }}개 남음)</span>
              </button>
            </li>
          </template>
        </Dropdown>

        <Dropdown
          v-model="state.value4"
          name="custom-select"
          :items="state.item4"
          defaultMsg="세트"
          size="small"
          is-flat
          is-title
        >
          <template #contents="{ items, changeValue, setActive }">
            <li v-for="item in items" :key="item.value" :class="{ 'is-selected': setActive(item.value) }">
              <button type="button" @click="() => changeValue(item.value)" :disabled="item.soldOut == true">
                {{ item.title }}
                <span v-if="item.soldOut == true">(품절)</span>
                <span v-if="item.remaining > 0" class="remaining">({{ item.remaining }}개 남음)</span>
              </button>
            </li>
          </template>
        </Dropdown>
      </div>

      <div class="option-info">
        <p class="origin-price">999,999,999<span>원</span></p>
        <SpinButton v-model="state.spin1" name="spin-button-01" />
      </div>

      <div class="gift-option-wrap">
        <strong class="gift-title">사은품</strong>

        <Dropdown
          v-model="state.giftValue1"
          name="custom-select-01"
          :items="state.giftItem1"
          defaultMsg="사은품을 선택해 주세요"
          size="small"
          is-flat
        />
        <Dropdown
          v-model="state.giftValue2"
          name="custom-select-01"
          :items="state.giftItem2"
          defaultMsg="사은품을 선택해 주세요"
          size="small"
          is-flat
        />
        <Dropdown
          v-model="state.giftValue3"
          name="custom-select-01"
          :items="state.giftItem3"
          defaultMsg="사은품을 선택해 주세요"
          size="small"
          is-flat
        />
        <Dropdown
          v-model="state.giftValue4"
          name="custom-select-01"
          :items="state.giftItem4"
          defaultMsg="사은품을 선택해 주세요"
          size="small"
          is-flat
        />
        <Dropdown
          v-model="state.giftValue5"
          name="custom-select-01"
          :items="state.giftItem5"
          defaultMsg="사은품을 선택해 주세요"
          size="small"
          is-flat
        />
        <Dropdown
          v-model="state.giftValue6"
          name="custom-select-01"
          :items="state.giftItem6"
          defaultMsg="사은품을 선택해 주세요"
          size="small"
          is-flat
        />
      </div>
    </template>
    <template #bottom>
      <div class="btn-wrap">
        <button class="cancle-btn" type="button">취소</button>
        <button class="change-btn" type="button">변경하기</button>
      </div>
    </template>
  </Layer>
</template>

<script lang="ts" setup>
import { Layer } from '@/components/layer'
import { Dropdown } from '@/components/dropdown'
import { SpinButton } from '@/components/spin-button'
export interface Props {
  modelValue: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const state = reactive({
  isShow: props.modelValue,
  spin1: '1',
  value1: 'CY158742',
  value2: '블랙',
  value3: 'M',
  value4: 'value3',
  giftValue1: '여분 단추',
  giftValue2: '고급 가죽 벨트',
  giftValue3: '여성 검정 속바지',
  giftValue4: '여성스타킹',
  giftValue5: '무릎 양말 화이트',
  giftValue6: '미니 스팀 다리미',
  item1: [
    {
      title: 'CY158742',
      value: 'CY158742',
      remaining: 10
    },
    {
      title: 'YY158742',
      value: 'YY158742',
      soldOut: true,
      remaining: 0
    },
    {
      title: 'AY158742',
      value: 'AY158742',
      soldOut: true,
      remaining: 0
    },
    {
      title: 'X158742',
      value: 'X158742',
      remaining: 5
    }
  ],
  item2: [
    {
      title: '화이트',
      value: '화이트',
      soldOut: true
    },
    {
      title: '블랙',
      value: '블랙'
    }
  ],
  item3: [
    {
      title: 'S',
      value: 'S',
      soldOut: true
    },
    {
      title: 'M',
      value: 'M'
    },
    {
      title: 'L',
      value: 'L'
    }
  ],
  item4: [
    {
      title: '봄 가을 상하 세트',
      value: 'value1',
      remaining: 5
    },
    {
      title: '여름세트',
      value: 'value2',
      remaining: 0,
      soldOut: true
    },
    {
      title: '상하세트',
      value: 'value3',
      remaining: 151
    }
  ],
  giftItem1: [
    {
      title: '여분 단추',
      value: '여분 단추'
    },
    {
      title: '여분 단추2',
      value: '여분 단추2'
    }
  ],
  giftItem2: [
    {
      title: '고급 가죽 벨트',
      value: '고급 가죽 벨트'
    },
    {
      title: '벨트',
      value: '벨트'
    },
    {
      title: '벨트2',
      value: '벨트2'
    }
  ],
  giftItem3: [
    {
      title: '여성 검정 속바지',
      value: '여성 검정 속바지'
    },
    {
      title: '여성 검정 속바지2',
      value: '여성 검정 속바지2'
    }
  ],
  giftItem4: [
    {
      title: '여성스타킹',
      value: '여성스타킹'
    },
    {
      title: '여성스타킹2',
      value: '여성스타킹2'
    }
  ],
  giftItem5: [
    {
      title: '무릎 양말 화이트',
      value: '무릎 양말 화이트'
    },
    {
      title: '무릎 양말 블랙',
      value: '무릎 양말 블랙'
    }
  ],
  giftItem6: [
    {
      title: '미니 스팀 다리미',
      value: '미니 스팀 다리미'
    },
    {
      title: '다리미',
      value: '다리미'
    }
  ]
})

const emit = defineEmits<{
  (event: 'update:modelValue', result: boolean): void
}>()

watch(
  () => props.modelValue,
  newItems => {
    if (newItems) {
      state.isShow = true
    } else {
      state.isShow = false
    }
  },
  { immediate: true }
)

const _callbackClose = () => {
  emit('update:modelValue', false)
  console.log('레이어 닫기 콜백')
}
const _callbackOpen = () => {
  console.log('레이어 열기 콜백')
}
</script>

<style lang="scss">
@use '~/pages/order/scss/layer/modal-cart-option';
</style>
