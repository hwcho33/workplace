<template>
  <div :class="['viewport', layout.sideFold && 'viewport--fold-side']">
    <SideNavigation class="viewport__side font-mono" />
    <div id="uno-area">
      <div class="ml-24 pt-24 pb-48">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'uno.css'
import '#/scss/index.scss'

import SideNavigation from '#/layouts/components/side-navigation/index.vue'
import { layoutStore } from '#/store'

const layout = layoutStore()
</script>

<style src="./index.scss" lang="scss" scoped></style>
