<template>
  <Layer
    class="modal-detail-gift-wrap"
    v-model="state.isShow"
    layer-type="full"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>사은품 전체보기</template>
    <template #contents>
      <div class="modal-detail-gift">
        <div class="top-gifts-info">
          <ul class="bullet-list">
            <li>상품에 따라 선택 가능한 사은품 수량은 달라질 수 있습니다.</li>
            <li>증정 사은품은 구매 시 선택 가능합니다.</li>
          </ul>
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
              <div class="row">
                <div class="gift-info">
                  <p class="text">강화유리 범용 뚜껑 스테인레스외 실리콘 손잡이 2개 한세트</p>
                  <p class="date">증정기간 : 2023.03.26~04.25</p>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </template>
  </Layer>
</template>

<script lang="ts" setup>
import { Layer } from '@/components/layer'
export interface Props {
  modelValue: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const state = reactive({
  isShow: props.modelValue
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
@use '~/pages/goods/scss/layer/modal-detail-gift';
</style>
