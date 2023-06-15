<template>
  <!-- [D]:컨테이너 박스 가로 늘어남 ex> id="container" class="container full-width",  
       [D]:컨텐츠 박스 가로 늘어남 ex> class="layout-contents-wrap full-width",
       [D]:모바일 헤더 상단만 있을 경우 컨테이너 높이 계산됨  ex> id="container" class="container only-header-top",
       [D]:헤더 상단 없을 경우 컨테이너 높이 계산됨  ex> id="container" class="container header-none",
   -->
  <div id="container" class="container only-header-top">
    <div class="layout-contents-wrap">가운데 정렬</div>
    <div class="layout-contents-wrap full-width">FULL WIDTH</div>
  </div>
</template>

<script lang="ts" setup></script>
