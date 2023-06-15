<template>
  <nav class="menus">
    <h1 class="menus__title">{{ props.title }}</h1>
    <ul class="menus__index">
      <li v-for="(item, index) in props.items" :key="index">
        <Item :label="item.label" :to="item.to" :icon="item.icon">
          <Context v-if="item.children?.length > 0">
            <ContextItem
              v-for="menu in item.children"
              :id="menu.id"
              :parent-id="item.id"
              :to="menu.to"
              :icon="menu.icon"
              :favorite="menu.favorite"
              :active="menu.active"
              :key="menu.id"
            >
              {{ menu.label }}
            </ContextItem>
          </Context>
        </Item>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import Item from './item.vue'
import Context from './context/index.vue'
import ContextItem from './context/item.vue'

const props = defineProps<{
  title: string
  items: any
}>()

/**
function onClickFavorite(): void {
  // TODO: 즐겨찾기 기능 구현 예정입니다.
  console.log('onClickFavorite')
}
 */
</script>

<style src="./index.scss" lang="scss" scoped></style>
