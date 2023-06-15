<template>
  <footer class="mo-footer-wrap" v-if="$route.meta.footer === undefined">
    <div class="footer-top-menu-wrap">
      <div class="menu-inner-wrap">
        <div class="convert-version-wrap">
          <a href="#" class="link-pc">PC 버전</a>
          <a href="#" class="link-app">APP 설치</a>
        </div>
      </div>
    </div>

    <div class="footer-main-wrap">
      <div class="main-inner-wrap">
        <ul class="menu-list">
          <li>
            <a href="https://ftc.go.kr/bizCommPop.do?wrkr_no=1178133642" target="_blank" title="새 창 열림">
              사업자 정보 확인
            </a>
          </li>
          <li>
            <router-link to="/publishing/common/policy/privacy-policy">
              <strong>개인정보처리 방침</strong>
            </router-link>
          </li>
          <li>
            <router-link to="/publishing/common/policy/youth-policy">청소년 보호 정책</router-link>
          </li>
          <li>
            <router-link to="/publishing/common/policy/consumer-policy">소비자 분쟁 해결기준</router-link>
          </li>
          <li>
            <router-link to="/publishing/common/terms/nsmall-terms">이용약관</router-link>
          </li>
          <li>
            <a
              href="https://image.nsmall.com/ec_comimages/nsdesign/images/common/InsuranceControl.pdf"
              target="_blank"
              title="새 창 열림"
            >
              보험대리점 내부통제기준
            </a>
          </li>
        </ul>

        <div class="btn-cs-tel">
          <a href="tel:1800-0700">
            <strong>고객센터</strong>
            <span>(1800-0700, 유료)</span>
          </a>
        </div>

        <div class="nsmall-info-wrap">
          <dl class="ns-shopping">
            <dt>상호</dt>
            <dd>(주)엔에스쇼핑</dd>
          </dl>
          <dl class="ceo">
            <dt>대표이사</dt>
            <dd>조항목</dd>
          </dl>
          <dl class="addr">
            <dt>주소</dt>
            <dd>경기도 성남시 분당구 판교로 228번길 15 NS홈쇼핑</dd>
          </dl>
          <dl>
            <dt>사업자 등록번호 :</dt>
            <dd>117-81-33642</dd>
          </dl>
          <dl>
            <dt>통신판매업 신고번호 :</dt>
            <dd>제2010-경기성남-0938호</dd>
          </dl>
          <dl>
            <dt>개인정보보호 책임자 :</dt>
            <dd>김갑종</dd>
          </dl>
          <dl>
            <dt>이메일 :</dt>
            <dd>secure&#64;nsmall.com</dd>
          </dl>
          <dl>
            <dt>호스팅 서비스 제공자 :</dt>
            <dd>㈜엔에스쇼핑</dd>
          </dl>
        </div>

        <p class="link-box-text">
          <a href="#" @click.prevent="() => (state.isShow_1 = true)">우리은행 채무 지급보증 안내</a>
        </p>

        <p class="link-box-text insurance-number">
          <a href="#" @click.prevent="() => (state.isShow_2 = true)"> 보험대리점 등록번호 : 제203128065호 </a>
        </p>

        <p class="copyright">&copy; NS Shopping All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  <ModalFooterBank v-model="state.isShow_1" />
  <ModalFooterInsurance v-model="state.isShow_2" />
</template>

<script lang="ts" setup>
import ModalFooterBank from '&/components/layer/modal-footer-bank.vue'
import ModalFooterInsurance from '&/components/layer/modal-footer-insurance.vue'
const state = reactive({
  isShow_1: false,
  isShow_2: false
})
</script>

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
.mo-footer-wrap {
  .footer-top-menu-wrap {
    border-top: 1px solid var(--gray-300);
  }

  .menu-inner-wrap {
    margin: 0 auto;
    max-width: $breakpoint-tablet;

    .convert-version-wrap {
      align-items: stretch;
      display: flex;
      height: rem(40);
      justify-content: space-around;

      a {
        font-size: rem(14);

        &:nth-of-type(1) {
          border-right: 1px solid var(--gray-300);
        }

        align-items: center;
        display: flex;
        flex: 1;
        justify-content: center;
      }
    }
  }

  .footer-main-wrap {
    border-top: 1px solid var(--gray-300);
  }

  .main-inner-wrap {
    margin: 0 auto;
    max-width: $breakpoint-tablet;
    padding: rem(20) rem(20) rem(80);

    .menu-list {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: rem(16);

      li {
        margin-right: rem(16);
        padding-bottom: rem(16);
        font-size: rem(14);
        line-height: 1;

        &:last-child {
          margin: 0;
        }
      }
    }

    .btn-cs-tel {
      margin-bottom: rem(20);

      a {
        align-items: center;
        border: 1px solid var(--gray-300);
        border-radius: rem(21);
        display: flex;
        height: 44px;
        justify-content: center;
        box-sizing: border-box;

        strong {
          color: var(--gray-900);
          font-weight: 700;
          font-size: rem(16);
          line-height: 1;
        }

        span {
          color: var(--gray-800);
          font-size: rem(14);
          margin: 0 rem(3);
          font-weight: 400;
          line-height: 1;
        }
      }
    }

    .nsmall-info-wrap,
    .copyright {
      color: var(--gray-500);
      font-size: rem(12);
      line-height: rem(18);
    }

    .nsmall-info-wrap {
      margin-bottom: rem(16);

      dl {
        dt,
        dd {
          display: inline-block;
        }

        dt {
          padding-right: rem(4);
        }

        &.ns-shopping,
        &.addr {
          dt {
            @include blind;
          }
        }

        &.ns-shopping,
        &.ceo {
          display: inline-block;
        }
      }
    }

    .link-box-text {
      display: flex;
      margin-bottom: rem(8);

      a {
        align-items: center;
        border: 1px solid var(--gray-300);
        border-radius: rem(4);
        box-sizing: border-box;
        display: flex;
        font-size: rem(12);
        height: rem(20);
        line-height: 1;
        padding: rem(4) rem(6);
      }

      &.insurance-number {
        margin-bottom: rem(20);
      }
    }
  }
}
</style>
