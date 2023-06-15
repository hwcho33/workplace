<template>
  <div class="text-nm">
    <div class="mb-20">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">서론</div>
      <IntroductionMd />
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">Composable 은 무엇일까?</div>
      <ComposableMd />
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">Validation Check 샘플링 코드</div>
      <ExampleMd />
      <br />
      <NameField />
      <br />
      <PhoneField />
      <br />
      <EmailField />
      <br />
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">결론</div>
      <Last />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IntroductionMd from './md/introduction.md'
import ComposableMd from './md/composable.md'
import ExampleMd from './md/example.md'
import Last from './md/last.md'
import EmailField from '#/pages/composable/components/email-field.vue'
import NameField from '#/pages/composable/components/name-field.vue'
import PhoneField from '#/pages/composable/components/phone-field.vue'
</script>
