<template>
  <div class="text-nm">
    <div class="mb-20">
      <div data-name="title" class="text-amber-200 bg-neutral pa-3 text-xl">Storage 모듈 사용 방법</div>
      <p>
        <code class="text-red">용량/시간/갯수 제한</code>이 존재하는 cookie의 사용을 지양하기 위해 설계된 모듈입니다.
      </p>
      <p>
        아울러 cookie는 데이터 전송 시 전체 쿠키를 가공하는 불필요한 과정이 필요합니다. (storage 계열은 키만 이용하면
        됩니다.)
      </p>
      <p>다음은 storage 모듈로 유효시간을 구현한 예제입니다.</p>
      <TimeMd />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TimeMd from './md/time.md'
</script>
