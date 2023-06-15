import Index from './index.vue'
import { assert } from '@/utils/assert'
import type { ToastOptions } from '@/types/components'

let instance

const initInstance = () => {
  // default Container 생성
  const container: HTMLDivElement = document.createElement('div')
  // container 내부에 app mount 후 instance 에서 Component 요소(변수 및 함수) 접근 가능
  instance = createApp(Index).mount(container)
  // 해당 container Element 를 body 아래 주입
  document.body.appendChild(container)
}

const Toast = (option: ToastOptions) => {
  if (!instance) {
    initInstance()
  } else {
    assert(instance !== undefined, new Error('Instance Setting Error'))
  }

  // 기본 옵션
  const defaultOption: ToastOptions = {
    content: '',
    delay: 2000,
    position: 'bottom',
    positionValue: 0
  }

  for (const key in defaultOption) {
    instance[key] = option[key] ?? defaultOption[key]
  }

  return instance.open()
}

export default Toast
