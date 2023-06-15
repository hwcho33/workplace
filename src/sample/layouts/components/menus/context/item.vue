<template>
  <div class="context-item">
    <router-link
      v-if="linkType === 'router'"
      :to="props.to"
      :title="props.alt"
      :class="['context-item__body', props.active && props.active === route.meta.active && 'active']"
    >
      <FeatherIcon :src="props.icon || 'menu'" />
      <span>
        <slot></slot>
      </span>
    </router-link>
    <a v-else :title="props.alt" :class="['context-item__body', !linkType && 'disabled']" @click.prevent="onClickItem">
      <FeatherIcon :src="props.icon || 'menu'">
        <span>
          <slot></slot>
        </span>
      </FeatherIcon>
    </a>
    <button
      v-if="props.favorite !== undefined"
      type="button"
      title="즐겨찾기 추가"
      class="context-item__favorite"
      @click="onClickFavorite()"
    >
      <svg
        v-if="!props.favorite"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="star star--line"
      >
        <polygon :points="pointsString" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="star star--fill">
        <path :d="dString" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { newWindow } from '@/utils/underscore'
import { FeatherIcon } from '@/components/feather-icon'
import { pointsString, dString } from './item'

// const router = useRouter()

const route = useRoute()
const props = defineProps<{
  id: number
  parentId?: number
  to: string | ''
  title?: string
  icon?: string
  favorite?: boolean | undefined
  active?: string
  alt?: string
}>()

// const emits = defineEmits(['click', 'add-favorite'])

const linkType = computed(() => {
  if (!props.to) {
    return null
  }
  return /^http/.test(props.to) ? 'href' : 'router'
})

function onClickItem(): void {
  if (!props.to) {
    return
  }
  newWindow(props.to)
}

function onClickFavorite(): void {
  console.info('onClick', props.parentId, props.id)
}
</script>

<style src="./item.scss" lang="scss" scoped></style>
