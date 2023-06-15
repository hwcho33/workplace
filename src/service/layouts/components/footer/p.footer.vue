<template>
  <footer class="desktop-footer-wrap" v-if="$route.meta.footer === undefined">
    <div class="footer-top-menu-wrap">
      <div class="menu-inner-wrap">
        <ul class="menu-list">
          <li>
            <a href="http://pr.nsmall.com/index.do" target="_blank" title="새 창 열림">회사소개</a>
          </li>
          <li>
            <a href="http://pr.nsmall.com/manage/talent.do" target="_blank" title="새 창 열림">인재 채용</a>
          </li>
          <li>
            <a href="http://pr.nsmall.com/business/procedure.do" target="_blank" title="새 창 열림">입점안내</a>
          </li>
          <li>
            <router-link to="/publishing/common/terms/nsmall-terms">이용약관</router-link>
          </li>
          <li>
            <router-link to="/publishing/common/policy/privacy-policy"><strong>개인정보처리 방침</strong></router-link>
          </li>
          <li>
            <router-link to="/publishing/common/policy/youth-policy">청소년 보호 정책</router-link>
          </li>
          <li>
            <router-link to="/publishing/common/policy/consumer-policy">소비자 분쟁 해결기준</router-link>
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
          <li>
            <a href="https://github.com/nsshopping/Affiliate-API" target="_blank" title="새 창 열림">OPEN API</a>
          </li>
        </ul>

        <div class="family-site-wrap">
          <button class="site-btn" :class="[famimlySite ? 'active' : '']" @click="toggleFamilySite">
            패밀리 사이트
          </button>
          <ul class="site-list">
            <li>
              <a href="https://www.harim.com/main/" target="_blank">
                <img src="/images/common/p.family-logo-1.jpg" alt="" />하림
              </a>
            </li>
            <li>
              <a href="https://m.glyde.co.kr/" target="_blank">
                <img src="/images/common/p.family-logo-2.jpg" alt="" />글라이드
              </a>
            </li>
            <li>
              <a href="https://www.pethooh.com/" target="_blank">
                <img src="/images/common/p.family-logo-3.jpg" alt="" />팻후
              </a>
            </li>
            <li>
              <a href="https://farmsco.com/" target="_blank"
                ><img src="/images/common/p.family-logo-4.jpg" alt="" />팜스코
              </a>
            </li>
            <li>
              <a href="https://www.sj.co.kr/" target="_blank">
                <img src="/images/common/p.family-logo-5.jpg" alt="" />선진
              </a>
            </li>
            <li>
              <a href="https://www.orpum.co.kr/" target="_blank">
                <img src="/images/common/p.family-logo-6.jpg" alt="" />올품
              </a>
            </li>
            <li>
              <a href="https://www.orimart.co.kr/" target="_blank">
                <img src="/images/common/p.family-logo-7.jpg" alt="" />주원산오리
              </a>
            </li>
            <li>
              <a href="http://www.mexican.co.kr/2020/inner.php?sMenu=main" target="_blank">
                <img src="/images/common/p.family-logo-8.jpg" alt="" />맥시칸 치킨
              </a>
            </li>
            <li>
              <a href="http://nbicorn.com/main/index.html" target="_blank">
                <img src="/images/common/p.family-logo-9.jpg" alt="" />엔바이콘
              </a>
            </li>
            <li>
              <a href="http://www.ddck.co.kr/default/" target="_blank">
                <img src="/images/common/p.family-logo-10.jpg" alt="" />디디치킨
              </a>
            </li>
            <li>
              <a href="http://www.jeilfeed.co.kr/" target="_blank">
                <img src="/images/common/p.family-logo-11.jpg" alt="" />천하제일 사료
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-main-wrap">
      <div class="main-inner-wrap">
        <div class="left-wrap">
          <div class="nsmall-info-wrap">
            <dl class="ns-shopping">
              <dt>상호</dt>
              <dd><strong>(주)엔에스쇼핑</strong></dd>
            </dl>

            <div class="row">
              <dl class="ceo">
                <dt>대표이사 :</dt>
                <dd>조항목</dd>
              </dl>
              <dl class="addr">
                <dt>주소 :</dt>
                <dd>경기도 성남시 분당구 판교로 228번길 15 NS홈쇼핑</dd>
              </dl>
              <dl>
                <dt>사업자 등록번호 :</dt>
                <dd>117-81-33642</dd>
              </dl>
            </div>

            <div class="row">
              <dl>
                <dt>개인정보보호 책임자 :</dt>
                <dd>김갑종</dd>
              </dl>
              <dl class="email">
                <dt>이메일 :</dt>
                <dd>secure&#64;nsmall.com</dd>
              </dl>
              <dl>
                <dt>호스팅 서비스 제공자 :</dt>
                <dd>㈜엔에스쇼핑</dd>
              </dl>
              <dl>
                <dt>통신판매업 신고번호 :</dt>
                <dd>제 2010-경기성남-0938호</dd>
              </dl>
            </div>

            <div class="row">
              <dl>
                <dt>고객센터 :</dt>
                <dd>
                  <a href="tel:1688-7700">1688-7700(유료)</a>
                </dd>
              </dl>
              <dl>
                <dt>팩스</dt>
                <dd>02-6944-8105</dd>
              </dl>
            </div>
          </div>

          <p class="link-box-text">
            <a href="https://ftc.go.kr/bizCommPop.do?wrkr_no=1178133642" target="_blank" title="새 창 열림">
              사업자정보확인
            </a>
          </p>
          <p class="link-box-text insurance-number">
            <a href="#" @click.prevent="() => (state.isShow_4 = true)"> 보험대리점 등록번호: 제 203128065호 </a>
          </p>

          <p class="copyright">COPYRIGHT&copy; NSMALL ALL RIGHTS RESERVED CONTACT WEBMASTER FOR MORE INFORMATION.</p>

          <ul class="link-banner-list">
            <li>
              <a href="#" role="button" @click.prevent="() => (state.isShow_1 = true)">
                <img src="/images/common/p.footer-banner-1.jpg" alt="공정거래위원회 CCM인증" />
              </a>
            </li>
            <li>
              <a href="#" role="button" @click.prevent="() => (state.isShow_2 = true)">
                <img src="/images/common/p.footer-banner-2.jpg" alt="ISMS 마크" />
              </a>
            </li>
            <li>
              <img src="/images/common/p.footer-banner-3.jpg" alt="한국온라인쇼핑협회 정회원사" />
            </li>
            <li>
              <img src="/images/common/p.footer-banner-4.jpg" alt="한국전자인증 국가공인 인증기관" />
            </li>
            <li>
              <img src="/images/common/p.footer-banner-5.jpg" alt="제품안전인증검색 불법제품신고센터" />
            </li>
          </ul>
        </div>

        <div class="right-wrap">
          <dl>
            <dt>
              <strong>우리은행 채무 지급보증 안내</strong>
            </dt>
            <dd>
              당사는 고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고
              있습니다.
              <a href="#" class="text-link" @click.prevent="() => (state.isShow_3 = true)">서비스가입 사실 확인</a>
            </dd>
          </dl>

          <dl>
            <dt>
              <strong>ACE 손해보험 개인정보 손해배상책임보험 안내</strong>
            </dt>
            <dd class="info-text">
              당사는 ACE손해보험 주식회사와 개인정보손해보험 계약을 체결하여 고객의 개인정보를 보호하고 있습니다.
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </footer>
  <ModalFooterCcm v-model="state.isShow_1" />
  <ModalFooterIsms v-model="state.isShow_2" />
  <ModalFooterBank v-model="state.isShow_3" />
  <ModalFooterInsurance v-model="state.isShow_4" />
</template>

<script lang="ts" setup>
import ModalFooterBank from '&/components/layer/modal-footer-bank.vue'
import ModalFooterCcm from '&/components/layer/modal-footer-ccm.vue'
import ModalFooterInsurance from '&/components/layer/modal-footer-insurance.vue'
import ModalFooterIsms from '&/components/layer/modal-footer-isms.vue'
const state = reactive({
  isShow_1: false,
  isShow_2: false,
  isShow_3: false,
  isShow_4: false
})
const famimlySite = ref<boolean>(false)
function toggleFamilySite(): void {
  famimlySite.value = !famimlySite.value
}
</script>
<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
@use '~/layouts/components/scss/mixin' as *;
.desktop-footer-wrap {
  background-color: var(--white);

  .footer-top-menu-wrap {
    border-bottom: 1px solid var(--gray-300);
    border-top: 1px solid var(--gray-300);
  }

  .menu-inner-wrap {
    display: flex;
    height: $pc-footer-menu-height;
    margin: 0 auto;
    max-width: $pc-base-width;

    .menu-list {
      align-items: center;
      display: flex;
      flex: 1;

      li {
        margin-right: rem(16);
        font-size: rem(14);
        line-height: 1;

        &:last-child {
          margin: 0;
        }
      }
    }

    .family-site-wrap {
      position: relative;
      width: rem(180);

      .site-btn {
        align-items: center;
        background: transparent;
        border: none;
        border-left: 1px solid var(--gray-300);
        border-right: 1px solid var(--gray-300);
        cursor: pointer;
        display: flex;
        height: 100%;
        justify-content: center;
        padding: 0;
        width: 100%;
        font-size: rem(14);

        &::after {
          background: url('/images/icons/footer/icon-arrow-family-site.svg') no-repeat center/100%;
          content: '';
          display: inline-block;
          height: rem(12);
          margin-left: rem(8);
          width: rem(12);
        }

        &.active {
          + .site-list {
            display: flex;
          }

          &::after {
            transform: rotateX(180deg);
          }
        }
      }

      .site-list {
        background-color: var(--white);
        border: 1px solid var(--gray-300);
        bottom: 0;
        display: none;
        flex-direction: column;
        font-size: 14px;
        height: rem(398);
        justify-content: space-between;
        padding: rem(12) rem(16);
        position: absolute;
        transform: translate(0, rem(-61));
        width: rem(180);
        z-index: 1;

        a {
          align-items: center;
          display: flex;
        }
      }
    }
  }

  .main-inner-wrap {
    color: var(--gray-500);
    display: flex;
    font-size: rem(12);
    margin: 0 auto;
    max-width: $pc-base-width;
    min-height: $pc-footer-main-height;
    min-width: $pc-base-width;
    padding: rem(48) 0 rem(60);

    .left-wrap {
      flex: 1;
    }

    .right-wrap {
      width: rem(281);

      dl {
        + dl {
          margin-top: rem(36);
        }

        dt {
          color: var(--gray-900);
          padding-bottom: rem(8);
        }

        dd {
          a {
            border: 1px solid var(--gray-300);
            border-radius: rem(4);
            display: inline-block;
            line-height: 1;
            margin-top: rem(8);
            padding: rem(4) rem(6);
          }
        }
      }
    }

    .row {
      &:last-child {
        color: var(--gray-700);

        a {
          color: var(--gray-700);
        }
      }
    }

    .nsmall-info-wrap {
      margin-bottom: rem(8);

      dl {
        display: inline-block;

        &:not(:last-of-type) {
          &::after {
            content: '/';
            padding: 0 rem(4);
          }
        }

        dt,
        dd {
          display: inline-block;
        }

        dt {
          padding-right: rem(4);
        }

        &.ns-shopping {
          color: var(--gray-900);
          display: block;
          line-height: 1;
          margin-bottom: rem(8);

          &::after {
            display: none;
          }

          dt {
            @include blind;
          }
        }
      }
    }

    .link-box-text {
      display: inline-block;
      line-height: 1;

      a {
        border: 1px solid var(--gray-300);
        border-radius: rem(4);
        display: inline-block;
        padding: rem(4) rem(6);
        line-height: 1;
        box-sizing: border-box;
      }

      &.insurance-number {
        a {
          margin-left: rem(8);
        }
      }
    }

    .copyright {
      margin-top: rem(16);
    }

    .link-banner-list {
      align-items: center;
      display: flex;
      margin-top: rem(36);

      li {
        margin-right: rem(30);

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
