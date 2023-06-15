import { useUiLayoutStore } from '~/store'

// store class 주입
const injectClass = (path: string) => {
  const uiLayoutStore = useUiLayoutStore()
  const containerIsGrayReg = /\/customer\/member|\/customer\/login/
  const floatingRightHasBottomReg = /\/publishing\/guide$|\/goods\/detail$|\/order\/cart$/

  console.log('is-gray:', containerIsGrayReg.test(path), 'has-bottom:', floatingRightHasBottomReg.test(path))
  uiLayoutStore.resetinjectClass()
  if (containerIsGrayReg.test(path)) uiLayoutStore.setContainerClass('is-gray')
  if (floatingRightHasBottomReg.test(path)) uiLayoutStore.setFloatingRightClass('has-bottom')
}

export function useLayoutInfo() {
  const pageLayout = ref('')
  const route = useRoute()
  watch(
    route,
    to => {
      const { layout } = to.meta
      pageLayout.value = layout as string
      injectClass(to.path)
    },
    { flush: 'pre', immediate: true, deep: true }
  )
  return {
    pageLayout,
    route
  }
}
