<template>
  <div class="error-wrap">
    <span class="icon-warning"></span>
    <h3 class="title">404 ERROR</h3>
    <p class="sub-title">페이지를 찾을 수 없습니다.</p>
    <p class="text">
      주소가 잘못 입력되었거나, 변경 혹은 삭제되어<br />
      요청하신 페이지를 찾을 수 없습니다.
    </p>
    <router-link to="/publishing" class="home-link">홈으로 이동</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss">
@use '~/pages/common/system/scss/system.scss';
</style>
