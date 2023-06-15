<template>
  <div class="layer-guide-wrap">
    <div class="go-list">
      <router-link to="/publishing/guide">&#x1F30D; 퍼블 가이드 페이지로 이동</router-link>
    </div>
    <Description />
    <LayerCommon />
    <LayerTerms />
    <LayerGoods />
    <LayerOrder />
  </div>
</template>

<script setup lang="ts">
import Description from '&/pages/guide/components/layer/index.md'
import LayerCommon from '&/pages/guide/components/layer/common/index.vue'
import LayerTerms from '&/pages/guide/components/layer/terms/index.vue'
import LayerGoods from '&/pages/guide/components/layer/goods/index.vue'
import LayerOrder from '&/pages/guide/components/layer/order/index.vue'
</script>

<style lang="scss" scoped>
.layer-guide-wrap:deep() {
  padding: 1.6rem;
  font-size: 1.4rem;
  .prose pre {
    width: 100%;
  }

  .layer-guide-title {
    font-size: 1.8rem;
  }

  button {
    display: block;
    margin: 0.5rem 0;
  }
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
  h1 {
    font-size: 30px;
    margin: 0;
  }
  h2 {
    margin: 0;
    font-size: 20px;
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 5px;
  }
  h3 {
    margin: 0;
    font-size: 17px;
    margin-top: 15px;
  }
  h4 {
    color: blue;
  }
  input {
    appearance: auto;
  }
}
</style>
