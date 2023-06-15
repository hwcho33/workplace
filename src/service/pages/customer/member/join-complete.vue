<template>
  <div class="join-complete-wrap">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">회원가입 완료</h2>

    <div class="inner-wrap">
      <div class="info-title-wrap">
        <h2 class="title">회원가입이<br />완료 되었습니다!</h2>
        <p class="sub-title">
          <em>{{ userId }}</em
          ><br />{{ userNm }}님 환영합니다.
        </p>
      </div>

      <div class="agreement-wrap">
        <div class="agreement">
          <div class="agreement-check">
            <input
              id="allCheck"
              name="all-check"
              type="checkbox"
              value="all"
              v-model="computedAllCheck"
              @click="Toast({ content: $t('message.customer.0075', '수신 설정이 정상적으로 변경되었습니다.') })"
            />
            <label for="allCheck"> 마케팅 수신 동의 </label>
          </div>
          <div class="agreement-check box">
            <div class="col">
              <input
                id="chk1-1"
                name="chk1-1"
                type="checkbox"
                value="email"
                v-model="checkList"
                @click="Toast({ content: $t('message.customer.0075', '수신 설정이 정상적으로 변경되었습니다.') })"
              />
              <label for="chk1-1"> 이메일 </label>
            </div>
            <div class="col">
              <input
                id="chk1-2"
                name="chk1-2"
                type="checkbox"
                value="sms"
                v-model="checkList"
                @click="Toast({ content: $t('message.customer.0075', '수신 설정이 정상적으로 변경되었습니다.') })"
              />
              <label for="chk1-2">SMS</label>
            </div>
            <div class="col">
              <input
                id="chk1-3"
                name="chk1-3"
                type="checkbox"
                value="tel"
                v-model="checkList"
                @click="Toast({ content: $t('message.customer.0075', '수신 설정이 정상적으로 변경되었습니다.') })"
              />
              <label for="chk1-3">전화</label>
            </div>
          </div>
          <ul class="info-list-wrap">
            <li>수신 동의하시면 혜택 및 다양한 정보를 알려 드립니다.</li>
            <li>주문/배송 정보는 수신 동의와 관계없이 발송됩니다.</li>
          </ul>
        </div>

        <div class="agreement">
          <div class="agreement-check">
            <label>개인정보 유효기간 설정</label>
          </div>
          <div class="agreement-check box">
            <div class="col">
              <input
                id="chk2-1"
                name="chk2"
                type="radio"
                value=""
                @click="
                  Toast({ content: $t('message.customer.0076', '개인정보 유효 기간이 정상적으로 변경되었습니다.') })
                "
              />
              <label for="chk2-1"> 회원탈퇴 시 </label>
            </div>
            <div class="col">
              <input
                id="chk2-2"
                name="chk2"
                type="radio"
                value=""
                @click="
                  Toast({ content: $t('message.customer.0076', '개인정보 유효 기간이 정상적으로 변경되었습니다.') })
                "
              />
              <label for="chk2-2"> 5년 </label>
            </div>
            <div class="col">
              <input
                id="chk2-3"
                name="chk2"
                type="radio"
                value=""
                @click="
                  Toast({ content: $t('message.customer.0076', '개인정보 유효 기간이 정상적으로 변경되었습니다.') })
                "
              />
              <label for="chk2-3"> 3년 </label>
            </div>
            <div class="col">
              <input
                id="chk2-4"
                name="chk2"
                type="radio"
                value=""
                @click="
                  Toast({ content: $t('message.customer.0076', '개인정보 유효 기간이 정상적으로 변경되었습니다.') })
                "
              />
              <label for="chk2-4"> 1년 </label>
            </div>
          </div>
          <ul class="info-list-wrap">
            <li>미 설정 시, 개인정보 유효기간은 1년으로 설정됩니다.</li>
          </ul>
        </div>

        <button type="button" class="complete-btn" @click="move()">확인</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getOSByUserAgent } from '@/utils/device'
import Toast from '@/components/toast'

const router = useRouter()

const checkList = ref(<string[]>[])
let confirmBtn = false

const { userId = '', userNm = '', pageBeforeJoin = '' } = router.options.history.state
delete router.options.history.state.userId
delete router.options.history.state.userNm

const computedAllCheck = computed({
  get() {
    return checkList.value.length === 3
  },
  set(newValue) {
    checkList.value = newValue ? ['email', 'sms', 'tel'] : []
  }
})

function move() {
  //temp
  if (pageBeforeJoin) {
    confirmBtn = true
    router.push({ name: <string>pageBeforeJoin })
    return
  } else {
    // window.history.go(-3)
  }
}

onBeforeRouteLeave(() => {
  //temp
  if (confirmBtn) return
  if (pageBeforeJoin === 'Main') {
    window.history.go(-2)
  }
})
</script>

<style lang="scss">
@use '~/pages/customer/member/scss/join.scss';
</style>
