export function useModal(dialog?: Ref<HTMLDialogElement | null>) {
  const blockClass = 'scroll-blocked'
  let scrollTop = 0

  const blockScroll = () => {
    const body = document.querySelector('body')
    if (body && !body.style.top) {
      scrollTop = window.scrollY || document.documentElement.scrollTop
      body.classList.add(blockClass)
      body.style.top = `-${scrollTop}px`
    }
  }

  const unblockScroll = () => {
    const body = document.querySelector('body')
    if (body && body.style.top) {
      body.classList.remove(blockClass)
      body.style.top = ''
      window.scrollTo(0, scrollTop)
    }
  }

  const openLayer = () => {
    dialog?.value?.showModal()
    blockScroll()
  }

  const closeLayer = () => {
    dialog?.value?.close()
    unblockScroll()
  }

  onUnmounted(() => {
    unblockScroll()
  })

  return {
    blockScroll,
    unblockScroll,
    openLayer,
    closeLayer
  }
}
