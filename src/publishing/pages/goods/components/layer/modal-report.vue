<template>
  <Layer
    class="modal-detail-view-wrap"
    v-model="state.isShow"
    layer-type="full"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>신고하기</template>
    <template #contents>
      <div class="report-wrap">
        <div class="report-info">
          <p class="info-text">악의적이거나 부정적인 의도로 작성된 상품평을 신고해 주세요.</p>
        </div>

        <div class="report">
          <dl>
            <dt>신고 유형</dt>
            <dd>
              <div class="report-check">
                <ul class="report-check-list">
                  <li>
                    <input id="rd1" name="rd" type="radio" value="" />
                    <label for="rd1">업체 및 상품에 대한 비방 내용</label>
                  </li>
                  <li>
                    <input id="rd2" name="rd" type="radio" value="" />
                    <label for="rd2">음란, 욕설 등 부적절한 내용</label>
                  </li>
                  <li>
                    <input id="rd3" name="rd" type="radio" value="" />
                    <label for="rd3">상업적 홍보 및 과대선전</label>
                  </li>
                  <li>
                    <input id="rd4" name="rd" type="radio" value="" />
                    <label for="rd4">타쇼핑몰 및 판매처 홍보</label>
                  </li>
                  <li>
                    <input id="rd5" name="rd" type="radio" value="" />
                    <label for="rd5">상품평 취지에 어긋남(복사글 등)</label>
                  </li>
                  <li>
                    <input id="rd6" name="rd" type="radio" value="" />
                    <label for="rd6">저작권 침해 또는 불량 사진 등록</label>
                  </li>
                  <li>
                    <input id="rd7" name="rd" type="radio" value="" />
                    <label for="chk7">기타</label>
                  </li>
                </ul>
              </div>
            </dd>
            <dt>신고 내용</dt>
            <dd>
              <div class="textarea">
                <textarea
                  title="@대체텍스트"
                  cols="35"
                  rows="5"
                  placeholder="신고 내용을 자세히 입력해 주세요.&#13;&#10;(최대200자)"
                ></textarea>
                <span class="util">
                  <!-- [D]:내용이 입력되는순간 ex> class="count" -->
                  <!-- <em class="count">1</em> -->
                  <em>0</em>
                  / 200
                </span>
              </div>
              <button type="button" class="report-btn">등록하기</button>
              <ul class="report-bullet-list">
                <li>
                  신고가 접수되면 운영자가 신고대상 게시물을 검토하여
                  <strong>신고가 적절할 경우 해당 게시물을 삭제</strong>합니다.
                </li>
                <li>신중하게 다시 한번 생각해 보시고 신고해 주세요.</li>
              </ul>
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
@use '~/pages/goods/scss/layer/modal-report.scss';
</style>
