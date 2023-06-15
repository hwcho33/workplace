<template>
  <div class="text-nm">
    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">서론</div>
      <p>날짜 관련 기본 내장 객체인 <code class="text-red">new Date()</code>는 기능이 다소 부실합니다.</p>
      <p>완성도가 높고 moment보다 가벼운 dayjs 의존성을 탑재했으며, 활용법은 다음과 같습니다.</p>
    </div>
    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">지정 객체 생성</div>
      <ObjectMd />
    </div>

    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">날짜 포매팅</div>
      <FormatMd />
    </div>

    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">날짜 유효성 체크</div>
      <ValidMd />
    </div>

    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">윤년 계산</div>
      <LeapYearMd />
    </div>

    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">산술 연산</div>
      <ArithmeticMd />
    </div>

    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">쿼리 형식</div>
      <QueriesMd />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ObjectMd from './md/object.md'
import FormatMd from './md/format.md'
import ValidMd from './md/valid.md'
import LeapYearMd from './md/leap-year.md'
import QueriesMd from './md/queries.md'
import ArithmeticMd from './md/arithmetic.md'
</script>
