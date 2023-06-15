<template>
  <div>
    <div class="go-list">
      <router-link to="/publishing/guide">&#x1F30D; 퍼블 가이드 페이지로 이동</router-link>
    </div>
    <iframe
      src="//javascript.ivyro.net/nsmall/"
      style="width: 100%; height: calc(100vh - 12px)"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.go-list {
  display: flex;
  align-items: center;
  justify-content: center;
  > a {
    font-size: 17px;
    height: 20px;
    padding: 20px;
    font-weight: bold;
  }
}
</style>
