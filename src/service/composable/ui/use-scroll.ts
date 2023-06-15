export function useScrollPosition() {
  const SCROLL_TYPE = { DOWN: 'scroll-down', UP: 'scroll-up', NONE: '', LAST: 'scroll-last' } as const
  type Key = (typeof SCROLL_TYPE)[keyof typeof SCROLL_TYPE]
  const scrollPosition = ref<Key>(SCROLL_TYPE.NONE)
  let lastScrollY = 0
  const onScrollPosition = () => {
    const headerHeight = document.querySelector('.header-main-wrap')?.clientHeight
    const topBannerHeight = document.querySelector('.top-banner-wrap')?.clientHeight
    const scrollY = window.scrollY
    const maxScrollY = document.body.clientHeight - window.innerHeight
    const totalHeight = (headerHeight ? headerHeight : 0) + (topBannerHeight ? topBannerHeight : 0)
    const lastScrollThreshold = 100

    if (scrollY < maxScrollY - lastScrollThreshold && lastScrollY > totalHeight) {
      // 최대 바운스 범위
      if (scrollY > lastScrollY) {
        // 스크롤 다운
        scrollPosition.value = SCROLL_TYPE.DOWN
      } else {
        // 스크롤 업
        scrollPosition.value = SCROLL_TYPE.UP
      }
    } else if (lastScrollY <= totalHeight) {
      // 최상단 바운스
      scrollPosition.value = SCROLL_TYPE.NONE
    } else {
      // 마지막 스크롤
      // scrollPosition.value = SCROLL_TYPE.LAST
    }

    if (scrollY <= 0) {
      // 최상단 지점일시 리셋
      scrollPosition.value = SCROLL_TYPE.NONE
    }

    // 최종 스크롤 값 캐싱
    lastScrollY = scrollY
  }
  onMounted(() => {
    window.addEventListener('scroll', onScrollPosition)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScrollPosition)
  })

  return {
    scrollPosition
  }
}
