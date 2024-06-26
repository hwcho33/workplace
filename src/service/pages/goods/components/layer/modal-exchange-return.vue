<template>
  <Layer
    class="modal-exchange-return-wrap"
    v-model="state.isShow"
    layer-type="full"
    @on-close="_callbackClose"
    @on-open="_callbackOpen"
  >
    <template #header>배송/교환/반품안내</template>
    <template #contents>
      <div class="exchange-return-wrap">
        <strong class="title">배송정보</strong>
        <ul class="bullet-list">
          <li>일부 상품은 도서, 산간, 오지 지역 등 교통이 불편한 지역으로 배송 시 배송비가 추가될 수 있습니다.</li>
          <li><strong>지정일 배송은 반드시 1800-0770 에서만 신청 가능</strong>합니다.</li>
        </ul>

        <strong class="title">합포장 상품</strong>
        <ul class="bullet-list">
          <li>배송비 고객부담 상품의 경우, 상품에 대해 고객님이 배송비를 지불하셔야 주문이 가능합니다.</li>
          <li>무료배송 가능 금액 이상 동일 주문을 하시면 배송비가 무료로 처리됩니다.</li>
        </ul>

        <strong class="title">반품/교환정보</strong>
        <ul class="bullet-list">
          <li>
            수령한 상품이 표시·광고의 내용과 다르거나 계약 내용과 다르게 이행된 경우에는 수령한 날로부터 3개월 이내, 그
            사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에 반품/교환이 가능합니다. 단, 고객 변심에 의한 반품/교환은
            상품을 받은 날로부터 7일 내 가능하며, 배송비는 고객 부담입니다.
          </li>
          <li>반품 신청 시 상품에 따라 업체의 확인 후 환불 처리될 수 있습니다.</li>
          <li>
            반품/교환 신청은 NSmall(고객센터 – 교환/반품 메뉴) 또는 당사 고객센터 1688-7700(유료)으로 접수 가능합니다.
          </li>
        </ul>

        <strong class="title">반품/교환 불가안내</strong>
        <ul class="bullet-list">
          <li>상품 및 구성품을 섭취/사용/설치한 이후에는 반품/교환이 불가능합니다.</li>
          <li>패션/잡화 등의 경우 상품의 택(Tag) 제거 등으로 상품 가치가 훼손된 경우에는 반품/교환이 불가능합니다.</li>
          <li>상품 및 구성품을 분실하였거나 취급 부주의로 인한 파손/고장/오염된 경우 반품/교환이 불가능합니다.</li>
          <li>
            고객의 요청에 의해 상품사양이 변경되거나, 주문 접수 후 제작되는 수제품의 제작이 시작된 경우 반품/교환이
            불가능합니다.
          </li>
          <li>반품/교환 시 고객의 귀책사유로 인해 수거가 지연될 경우에는 반품이 제한될 수 있습니다.</li>
          <li>
            모니터 해상도의 차이로 인해 색상이나 이미지가 실제와 다를 수 있으며, 이로 인한 반품 및 교환은 제한될 수
            있습니다.
          </li>
          <li>신선식품(정육, 수산물 등 생물 상품)은 수령 후 단순 변심으로 인한 취소/반품/교환이 불가합니다.</li>
          <li>
            일부 상품의 경우, 제조사의 사정(신모델 출시 등) 및 부품 가격 변동 등에 의해 가격이 변동될 수 있으며, 이로
            인한 반품 및 가격 보상은 불가합니다.
          </li>
          <li>각 상품별 상세 반품/교환 조건의 상품상세정보를 꼭 참고하시길 바랍니다.</li>
          <li>고객 과실로 인한 A/S 및 반품 기준일/품질 보증기간 이후의 A/S는 유상으로 처리됩니다.</li>
          <li>
            상품에 불량이 있는 경우 공정거래위원회에서 고시한 소비자 분쟁 해결기준에 따라 반품, 교환, A/S 등을 받을 수
            있습니다.
          </li>
        </ul>
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
}
const _callbackOpen = () => {}
</script>

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;

.layer-wrap {
  &.modal-exchange-return-wrap {
    .layer-contents {
      .exchange-return-wrap {
        letter-spacing: rem(-0.1);
        .title {
          font-size: rem(16);
          color: var(--title-text);
          font-weight: 700;
          line-height: 1.3;
          display: inline-block;
          margin-top: rem(24);
          &:first-child {
            margin-top: 0;
          }
        }

        .bullet-list {
          @include bullet-list;
          margin-top: rem(8);

          li {
            margin-top: rem(4);
            &:first-child {
              margin-top: 0;
            }
          }
        }
      }
    }
  }
}
</style>
