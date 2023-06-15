<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </component>
</template>

<script lang="ts" setup>
import { useUtilDetectAllStore } from '~/store/common/index'
// layouts
import Default from '~/layouts/default/index.vue'
import Blank from '~/layouts/blank/index.vue'
import Sample from '#/layouts/index.vue'

// utils
import { layoutMapper } from '@/eco-system'

// layout 구분
const layout = computed((): ComponentPublicInstance<any> => {
  switch (layoutMapper()) {
    case 'blank':
      return Blank
    case 'sample':
      return Sample
    case 'default':
      return Default
    case 'home':
      return Default
  }
})

const detectStore = useUtilDetectAllStore()
detectStore.detectInitAction()
</script>
