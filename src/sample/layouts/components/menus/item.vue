<template>
  <div class="menu-item">
    <div class="menu-item__head">
      <a :title="props.alt" :class="['menu-item__label', !linkType && 'disabled']" @click.prevent="onClickMenu">
        <FeatherIcon :src="props.icon || 'menu'" />
        <em>{{ props.label }}</em>
      </a>
    </div>
    <div class="menu-item__context">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FeatherIcon } from '@/components/feather-icon'
import { MenuModel } from '#/layouts'

const router = useRouter()

const props = defineProps<MenuModel>()

const linkType = computed(() => {
  if (!props.to) {
    return null
  }
  return /^http/.test(props.to) ? 'href' : 'router'
})

function onClickMenu(): void {
  if (linkType.value === 'router') {
    const to = props.to as string
    router.push(to)
  } else if (linkType.value === 'href') {
    window.open(props.to)
  }
}
</script>

<style src="./item.scss" lang="scss" scoped></style>
