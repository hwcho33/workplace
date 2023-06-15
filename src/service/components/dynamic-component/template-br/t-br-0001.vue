<template>
  <div v-if="isShowBanner" class="top-banner-wrap">
    <div v-for="(item, itemIndex) in topBannerContents" :key="itemIndex" class="top-banner-inner">
      <div class="image-wrap">
        <a v-bind="setAttrsATag(item)" @click.prevent="onClickBanner(item, itemIndex, $event)">
          <img v-bind="setAttrsImgTag(item)" />
        </a>
        <div class="btn-close-wrap">
          <a @click.stop.prevent="onClickHideForDay" class="btn-close">X</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateTopBannerStore } from '~/store/store-common/index'

type Item = {
  title: string
  imageURL: string
  goURL: string
}
// --------------------------------------------------------------------- [변수 및 상수]
const templateTopBannerStore = useTemplateTopBannerStore()
const router = useRouter()

// --------------------------------------------------------------------- [Vue 내장 메서드]
const isShowBanner = computed(() => {
  return templateTopBannerStore.isActiveTemplateTopBanner
})
const topBannerContents = computed(() => {
  return templateTopBannerStore.templateTopBanner.content
})

defineOptions({
  name: 'TopBannerTBR0001',
  inheritAttrs: true
})

// --------------------------------------------------------------------- [생명 주기 함수]
onMounted(() => {})
// --------------------------------------------------------------------- [내부 함수 (functions)]
// <a> 속성 셋팅
function setAttrsATag(item: Item) {
  const href = item.goURL
  const title = 'a태그 타이틀'
  return {
    href,
    title
  }
}

// <img> 속성 셋팅
function setAttrsImgTag(item: Item) {
  const src = item.imageURL
  const alt = ''
  const target = '_self'
  return {
    src,
    alt,
    target
  }
}

function onClickHideForDay() {
  console.log('[onClickHideForDay]')
  templateTopBannerStore.setHideForDayAction()
}

async function onClickBanner(item: Item, itemIndex: number, event: Event) {
  const areaId = templateTopBannerStore.templateTopBanner.areaId
  await router.push({
    path: item.goURL,
    query: { areaId }
  })
}
</script>

<style lang="scss" scoped>
@use '~/scss/common/utils' as *;
.top-banner-wrap {
  background: var(--gray-900);
  position: relative;
  transition: top 0.5s ease(out-expo);
  z-index: 46;

  .top-banner-inner {
    margin: 0 auto;
    max-width: $breakpoint-tablet;
    min-height: rem(50);
    text-align: center;

    img {
      height: rem(50);
    }
  }

  .top-banner-inner .image-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    & > a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    .btn-close-wrap {
      display: block;
      position: absolute;
      right: 0px;
      top: 0px;
      width: rem(30);
      height: rem(30);
      padding-top: rem(4);
      background-color: #000;
      opacity: 0.7;
      cursor: pointer;
      .btn-close {
        color: #fff;
      }
    }
  }
}
</style>
