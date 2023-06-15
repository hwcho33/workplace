<template>
  <aside :class="['layout-side', layout.sideFold && 'layout-side--fold']">
    <div class="layout-side__wrap">
      <header class="layout-side__header">
        <h1>
          <router-link to="/sample/make-page">
            <strong>nsmall-fo-common</strong>
            <em>NFC</em>
          </router-link>
        </h1>
        <button
          type="button"
          :class="['toggle-fold', layout.sideFold && 'toggle-fold--mini']"
          @click="layout.toggleSideFold()"
        >
          <em><FeatherIcon src="chevron-right" /></em>
        </button>
      </header>
      <div class="layout-side__body">
        <Menus
          v-if="navigation.favorite?.length > 0"
          title="Favorite"
          :items="navigation.favorite"
          class="main-navigation"
        />
        <Menus
          v-if="navigation.items?.length > 0"
          title="Sample List"
          :items="navigation.items"
          class="main-navigation"
        />
        <Menus
          v-if="navigation.localItems?.length > 0"
          title="Sample List(Test)"
          :items="navigation.localItems"
          class="main-navigation"
        />
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { layoutStore, navigationStore } from '#/store'
import Menus from '#/layouts/components/menus/index.vue'
import { FeatherIcon } from '@/components/feather-icon'

const layout = layoutStore()
const navigation = navigationStore()
</script>

<style src="./index.scss" lang="scss" scoped></style>
