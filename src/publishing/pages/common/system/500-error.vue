<template>
  <div class="error-wrap">
    <span class="icon-warning"></span>
    <h3 class="title">서비스 오류 안내</h3>
    <p class="sub-title">서비스 이용에 불편을 드려 죄송합니다.</p>
    <p class="text">
      요청을 처리하지 못했습니다.<br />
      잠시 후에 다시 시도해 주세요.
    </p>
    <router-link to="/publishing" class="home-link">홈으로 이동</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss">
@use '~/pages/common/system/scss/system.scss';
</style>
