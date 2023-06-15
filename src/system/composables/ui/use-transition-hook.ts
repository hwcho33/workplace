export function useDropdown() {
  const onBeforeEnter = (el: HTMLElement) => {
    el.style.height = '0'
  }
  const onEnter = (el: HTMLElement) => {
    el.style.height = el.scrollHeight + 'px'
  }
  const onBeforeLeave = (el: HTMLElement) => {
    el.style.height = el.scrollHeight + 'px'
  }
  const onLeave = (el: HTMLElement) => {
    el.style.height = '0'
  }
  return {
    onBeforeEnter,
    onEnter,
    onBeforeLeave,
    onLeave
  }
}
