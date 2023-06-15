<template>
  <Layer
    v-model="state.isShow"
    layer-type="full"
    class="layer-address-wrap"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>주소찾기</template>

    <template #contents>
      <template v-if="!$route.query.detail">
        <div class="address-input-wrap">
          <label class="hidden" for="userId">검색</label>
          <div class="input-text-wrap">
            <input type="text" placeholder="도로명+건물번호, 건물명, 지번입력" name="user-id" id="userId" required />

            <div class="btns-wrap">
              <button type="button" class="del-btn">삭제</button>
            </div>
          </div>

          <button type="button" class="search-btn">검색</button>
        </div>

        <div class="address-example" v-if="!$route.query.search && !$route.query.empty">
          <dl>
            <dt>도로명+건물번호</dt>
            <dd>판교로 15</dd>
          </dl>
          <dl>
            <dt>건물명</dt>
            <dd>판교세븐벤처벨리1</dd>
          </dl>
          <dl>
            <dt>동/읍/면/리+번지</dt>
            <dd>삼평동 625</dd>
          </dl>
        </div>

        <div class="search-list-wrap" v-if="$route.query.search && !$route.query.empty">
          <p class="title">
            <em>판교로</em>에 대한 검색결과는 <em>45건</em>입니다.<br />
            해당하는 주소를 선택하시면 자동 입력됩니다.
          </p>
          <ul class="list">
            <li>
              <a href="#" role="button">
                <span class="zip-code">13547</span>
                <dl class="address">
                  <dt>도로명</dt>
                  <dd>경기 성남시 분당구 대왕판교로 15</dd>
                </dl>
                <dl class="address">
                  <dt>지번</dt>
                  <dd>경기 성남시 분당구 동원동 51</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#" role="button">
                <span class="zip-code">13550</span>
                <dl class="address">
                  <dt>도로명</dt>
                  <dd>
                    경기 성남시 분당구 대왕판교로 15 경기 성남시 분당구 대왕판교로 15경기 성남시 분당구 궁내동 306-12
                  </dd>
                </dl>
                <dl class="address">
                  <dt>지번</dt>
                  <dd>경기 성남시 분당구 궁내동 306-12 경기 성남시 분당구 궁내동 306-12</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#" role="button">
                <span class="zip-code">13535</span>
                <dl class="address">
                  <dt>도로명</dt>
                  <dd>경기 성남시 분당구 동판교로 52번길</dd>
                </dl>
                <dl class="address">
                  <dt>지번</dt>
                  <dd>경기 성남시 분당구 백현동 592</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#" role="button">
                <span class="zip-code">13479</span>
                <dl class="address">
                  <dt>도로명</dt>
                  <dd>경기 성남시 분당구 서판교로 44번길</dd>
                </dl>
                <dl class="address">
                  <dt>지번</dt>
                  <dd>경기 성남시 분당구 판교동 567-7</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#" role="button">
                <span class="zip-code">13479</span>
                <dl class="address">
                  <dt>도로명</dt>
                  <dd>경기 성남시 분당구 서판교로 66번길</dd>
                </dl>
                <dl class="address">
                  <dt>지번</dt>
                  <dd>경기 성남시 분당구 판교동 559-5</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#" role="button">
                <span class="zip-code">13547</span>
                <dl class="address">
                  <dt>도로명</dt>
                  <dd>경기 성남시 분당구 대왕판교로 15</dd>
                </dl>
                <dl class="address">
                  <dt>지번</dt>
                  <dd>[지번] 경기 성남시 분당구 동원동 51</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#" role="button">
                <span class="zip-code">13550</span>
                <dl class="address">
                  <dt>도로명</dt>
                  <dd>경기 성남시 분당구 대왕판교로 351번길 15</dd>
                </dl>
                <dl class="address">
                  <dt>지번</dt>
                  <dd>경기 성남시 분당구 궁내동 306-12</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#" role="button">
                <span class="zip-code">13547</span>
                <dl class="address">
                  <dt>도로명</dt>
                  <dd>경기 성남시 분당구 대왕판교로 15</dd>
                </dl>
                <dl class="address">
                  <dt>지번</dt>
                  <dd>[지번] 경기 성남시 분당구 동원동 51</dd>
                </dl>
              </a>
            </li>
          </ul>
          <Pagination />
        </div>

        <div class="search-list-wrap" v-if="$route.query.empty">
          <p class="empty">
            <span class="icon"></span>
            <em>‘판교로ㅇ'</em>에 대한 검색결과가 없습니다.<br />
            도로명, 지번, 건물명으로 다시 검색해주세요.
          </p>
        </div>
      </template>

      <template v-else>
        <div class="address-detail">
          <div class="address-text">
            <span class="zip-code">13487</span>
            <p>경기 성남시 분당구 대왕판교로 228번길 15</p>
          </div>
          <div class="input-wrap is-error">
            <div class="input-text-wrap">
              <input type="text" placeholder="나머지 주소 입력" name="user-id" id="userId" required />
              <div class="btns-wrap">
                <button type="button" class="del-btn">삭제</button>
              </div>
            </div>
            <p class="info-msg is-error">상세주소를 입력해주세요.</p>
          </div>
        </div>

        <div class="btn-wrap">
          <button class="confirm-btn disable" disabled>확인</button>
          <button class="retry-btn">주소 다시 선택</button>
        </div>
      </template>
    </template>
  </Layer>
</template>

<script setup lang="ts">
import { Layer } from '@/components/layer'
import { Pagination } from '@/components/pagination'
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
@use '~/components/scss/layer/modal-address-find.scss';
</style>
