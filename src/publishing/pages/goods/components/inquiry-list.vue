<template>
  <div class="inquiry-list-wrap">
    <!-- [CASE1]: 상품문의_제한상품 -->
    <div class="inquiry-wrap">
      <div class="middle">
        <p class="text">
          식품, 일부 의료 기기 등의 상품문의는<br />
          1:1 문의하기를 이용해 주세요.
        </p>

        <div class="inquiry-button-wrap">
          <router-link to="/" class="inquiry-btn">1:1 문의하기</router-link>
        </div>
      </div>
    </div>

    <div class="inquiry-button-wrap">
      <router-link to="/" class="inquiry-btn">상품 문의</router-link>
      <router-link to="/" class="inquiry-btn">주문/배송/반품 문의</router-link>
    </div>

    <div class="inquiry-total-wrap">
      <div class="count-wrap">
        <span>총 <strong class="num">265</strong>개</span>
      </div>

      <label class="my-inquiry-wrap">
        <input type="checkbox" name="" />
        <span>내 문의글만 보기</span>
      </label>
    </div>

    <div class="inquiry-list">
      <!-- [CASE2]: 문의내역 없음 -->
      <div class="none-data">
        <p class="text">등록된 상품문의가 없습니다.</p>
      </div>

      <!--
        [CASE3]: 문의내역 리스트
        [D]: 답변 대기 일때 <div class="toggle-box"></div> 영역 없음
        [D]: 답변완료 일때 class="[complete]"
        [D]: 다른 고객 문의글(비밀글) 일때 ex> class="[secret]" disabled
        [D]: 내 문의글(비밀글) 일때 ex> class="[secret]"
       -->
      <details>
        <summary>
          <div class="info">
            <span class="id">lae***</span>
            <span class="date">2023.03.29</span>
            <span class="state">답변대기</span>
          </div>
          <div class="question-wrap">
            <p class="question">
              답변대기 답변대기 답변대기 답변대기 답변대기 답변대기 답변대기 답변대기 답변대기 답변대기 답변대기
              답변대기 답변대기 답변대기 답변대기 답변대기 답변대기
            </p>
          </div>
        </summary>
      </details>

      <details class="complete">
        <summary>
          <div class="info">
            <span class="id">lae***</span>
            <span class="date">2023.03.29</span>
            <span class="state">답변완료</span>
          </div>
          <div class="question-wrap">
            <p class="question">
              상품을 받았습니다. 그런데 혹시 팬센터 중심부분이 평면이 아니고조금 올라와있지는 않는지요 그리고 SUS 304가
              맞는지 문의드립니다. 냄비뚜껑은 자석이 붙지않고요. 손잡이도 붙지않습니다. 프라이팬 본체는 자석이 붙습니다.
              답변부탁드립니다.
            </p>
          </div>
        </summary>
        <div class="toggle-box">
          <dl>
            <dt>
              <span class="title">판매자 답변</span>
              <span class="date">2023.03.29</span>
            </dt>
            <dd>
              안녕하세요. NS홈쇼핑입니다. 프라이팬 조리시 열팽창이 일어나기 때문에 가운데가 볼록하게 제작 됩니다.
              음식물이 맞닿는 면은 STS304, 바닥면은 자성이 있는 STS430 재질을 사용하게 됩니다. 감사합니다.
            </dd>
          </dl>
        </div>
      </details>

      <details class="secret complete" disabled>
        <summary>
          <div class="info">
            <span class="id">lae***</span>
            <span class="date">2023.03.29</span>
            <span class="state">답변완료</span>
          </div>
          <div class="question-wrap">
            <p class="question">상품 문의 입니다.</p>
          </div>
        </summary>
        <div class="toggle-box">
          <dl>
            <dt>
              <span class="title">판매자 답변</span>
              <span class="date">2023.03.29</span>
            </dt>
            <dd>
              안녕하세요. NS홈쇼핑입니다. 프라이팬 조리시 열팽창이 일어나기 때문에 가운데가 볼록하게 제작 됩니다.
              음식물이 맞닿는 면은 STS304, 바닥면은 자성이 있는 STS430 재질을 사용하게 됩니다. 감사합니다.
            </dd>
          </dl>
        </div>
      </details>

      <details class="secret complete">
        <summary>
          <div class="info">
            <span class="id">lae***</span>
            <span class="date">2023.03.29</span>
            <span class="state">답변완료</span>
          </div>
          <div class="question-wrap">
            <p class="question">
              상품을 받았습니다. 그런데 혹시 팬센터 중심부분이 평면이 아니고조금 올라와있지는 않는지요 그리고 SUS 304가
              맞는지 문의드립니다. 냄비뚜껑은 자석이 붙지않고요. 손잡이도 붙지않습니다. 프라이팬 본체는 자석이 붙습니다.
              답변부탁드립니다.
            </p>
          </div>
        </summary>
        <div class="toggle-box">
          <dl>
            <dt>
              <span class="title">판매자 답변</span>
              <span class="date">2023.03.29</span>
            </dt>
            <dd>
              안녕하세요. NS홈쇼핑입니다. 프라이팬 조리시 열팽창이 일어나기 때문에 가운데가 볼록하게 제작 됩니다.
              음식물이 맞닿는 면은 STS304, 바닥면은 자성이 있는 STS430 재질을 사용하게 됩니다. 감사합니다.
            </dd>
          </dl>
        </div>
      </details>

      <!-- 상품문의 개수는 20개 노출되고 이후 더보기 버튼 노출 -->
      <div class="btn-more-wrap">
        <button type="button" class="btn-more"><i>상품문의 더보기 </i></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@use '~/pages/goods/scss/inquiry-list.scss';
</style>
