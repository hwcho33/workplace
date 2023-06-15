import { deepMerge } from '@/utils/underscore'

interface DialogPropsType {
  addSelector?: string
  message?: string
  firstButton?: string
  secondButton?: string
  header?: boolean
  bottom?: boolean
}

export default function useSetDialogOptions() {
  const setBasicOptions = (props: DialogPropsType) => {
    const baseDefaultOption = {
      addSelector: 'base',
      message: '가입하시겠어요?',
      firstButton: 'cancel',
      secondButton: 'confirm',
      header: false,
      bottom: true
    }
    return deepMerge(baseDefaultOption, props || {})
  }

  const setCustomOptions = (props: DialogPropsType) => {
    const customDefaultOption = {
      addSelector: 'custom',
      message: false,
      firstButton: false,
      secondButton: false,
      header: true,
      bottom: false
    }

    return deepMerge(customDefaultOption, props || {})
  }

  return { setBasicOptions, setCustomOptions }
}
