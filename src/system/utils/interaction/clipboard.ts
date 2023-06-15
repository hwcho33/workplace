import { isIE } from '@/utils/device'

async function writeText(text: string): Promise<boolean> {
  if (isIE()) {
    return copyToClipboard(text)
  }

  if (!clipboardSupported()) {
    return false
  }
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return copyToClipboard(text)
  }
}

function clipboardSupported() {
  return navigator.clipboard != null
}

/**
 * @description 클립보드에 텍스트를 복사하는 유틸리티입니다.
 * 복사 성공 여부를 반환합니다.
 *
 * @example
 * ```ts
 * // 'Hello, world!' 라는 문자열을 클립보드에 복사해둡니다.
 * const isSuccess = clipboard.writeText('Hello, world!')
 *
 * if (isSuccess) {
 *  window.alert('복사 성공!')
 * }
 * ```
 */
export const clipboard = {
  writeText
}

function copyToClipboard(text: string): boolean {
  if (!clipboardCopySupported()) {
    return false
  }

  copy(text)
  return true
}

function clipboardCopySupported() {
  return document.queryCommandSupported?.('copy') ?? false
}

function isIOS() {
  return navigator.userAgent.match(/ipad|iphone/i) != null
}

function copy(text: string) {
  const focusingContainer = document.body

  const textArea = document.createElement('textArea') as HTMLTextAreaElement
  textArea.value = text
  textArea.contentEditable = 'true'
  textArea.readOnly = false
  textArea.style.userSelect = 'text'
  textArea.style.webkitUserSelect = 'text'
  focusingContainer.insertBefore(textArea, focusingContainer.firstChild)
  if (isIOS()) {
    const range = document.createRange()
    range.selectNodeContents(textArea)
    const selection = window.getSelection()

    if (selection !== null) {
      selection.removeAllRanges()
      selection.addRange(range)
    }

    textArea.setSelectionRange(0, 999999)
  } else {
    textArea.select()
  }
  document.execCommand('copy')
  focusingContainer.removeChild(textArea)
}
