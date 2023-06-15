import { isServer } from '@/utils/device'

/**
 * @description
 * 현재 스크롤된 Y값을 반환
 * Server-side에서 반환값 `0`
 */
export function getScrollYOffset(): number {
  if (isServer()) {
    return 0
  }

  /**
   * 보통의 경우 scrollLeft, scrollTop으로 스크롤 위치를 구할 수 있습니다.
   * 하지만 크롬과 파어이폭스의 경우에는 'document.body' 또는 'document.documentElement' 중 스크롤 위치를 구하는 곳이 다릅니다.
   * 따라서 'scrollTop' 값이 다를 수 있습니다.
   * 'document.documentElement'의 Bounding Rec를 구하는 것은 일관성이 있습니다.
   */
  const documentElement = document.documentElement
  const documentRect = documentElement.getBoundingClientRect()

  return -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0
}

/**
 * @description
 * 스크롤의 맨 아래까지 남은 픽셀 수를 반환
 * Server-side에서 반환값 `0`
 */
export function getScrollDiffFromBottom() {
  if (isServer() || !document.documentElement) {
    return 0
  }

  const documentElement = document.documentElement
  const body = document.body
  const scrollTop = getScrollYOffset()
  const scrollBottom = scrollTop + documentElement.clientHeight
  const scrollHeight = documentElement.scrollHeight || body.scrollHeight

  return scrollHeight - scrollBottom
}

/**
 * @description
 * 현재 화면에서 스크롤이 얼마나 되었는지를 퍼센티지로 반환
 * Server-side에서 반환값 `0`
 */
export function getScrollPercent() {
  if (isServer() || !document.documentElement) {
    return 0
  }

  const documentElement = document.documentElement
  const body = document.body
  const scrollTop = getScrollYOffset()
  const scrollHeight = (documentElement.scrollHeight || body.scrollHeight) - documentElement.clientHeight

  return (scrollTop / scrollHeight) * 100
}

type ViewportSize = Readonly<{ width: number; height: number }>

/**
 * @description
 * 현재 뷰포트의 크기를 반환
 * Server-side에서 return되는 결과가 `{ width: 0, height: 0 }`
 */
export function getViewportSize(): ViewportSize {
  if (isServer()) {
    return { width: 0, height: 0 }
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}
