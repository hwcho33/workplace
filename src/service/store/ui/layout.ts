export const useUiLayoutStore = defineStore('uiLayoutStore', () => {
  type ContainerClass = 'is-gray' | ''
  type FloatingRightClass = 'has-bottom' | ''
  interface State {
    containerClass: ContainerClass
    floatingRightClass: FloatingRightClass
  }
  const state = reactive<State>({
    containerClass: '',
    floatingRightClass: ''
  })
  const setContainerClass = (name: ContainerClass) => {
    state.containerClass = name
  }
  const resetContainerClass = () => {
    state.containerClass = ''
  }
  const setFloatingRightClass = (name: FloatingRightClass) => {
    state.floatingRightClass = name
  }
  const resetFloatingRightClass = () => {
    state.floatingRightClass = ''
  }
  const resetinjectClass = () => {
    state.containerClass = ''
    state.floatingRightClass = ''
  }
  return {
    ...toRefs(state),
    setContainerClass,
    resetContainerClass,
    setFloatingRightClass,
    resetFloatingRightClass,
    resetinjectClass
  }
})
