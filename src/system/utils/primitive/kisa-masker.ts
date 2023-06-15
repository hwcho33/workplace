function maskAll(str: string) {
  return str.replace(/./g, '*')
}

function isKoreanName(name: string) {
  return /[가-힣]{2,}/.test(name)
}

function maskExceptForEdge(text: string, edgeSize: number) {
  return (
    text.slice(0, edgeSize) +
    text.slice(edgeSize, text.length - edgeSize).replace(/[a-zA-Z가-힇]/g, '*') +
    text.slice(text.length - edgeSize, text.length)
  )
}

function isHyphenSeparated(phoneNumber: string) {
  return /^\d{2,3}-\d{3,4}-\d{4}$/.test(phoneNumber)
}

function isSeoulPhoneNumber(phoneNumber: string) {
  return /^02\d+$/.test(phoneNumber)
}

/**
 * @description
 * 개인정보보호위원회, KISA 기준 이름 마스킹 유틸리티
 *
 * @example
 * ```ts
 * maskName('에스') // '에*'
 * maskName('엔에스') // '엔*스'
 * ```
 */
export function maskName(name: string) {
  if (isKoreanName(name)) {
    switch (name.length) {
      case 2:
        return name.replace(/([가-힣])([가-힣]+)/, '$1*')
      default:
        return maskExceptForEdge(name, 1)
    }
  } else {
    if (name.length < 3) {
      return name
    }

    const unmaskedSideSize = name.length < 6 ? 1 : 2
    return maskExceptForEdge(name, unmaskedSideSize)
  }
}

/**
 * @description
 * 개인정보보호위원회, KISA 기준 핸드폰 번호 마스킹 유틸리티
 *
 * @example
 * ```ts
 * maskPhoneNumber('010-1234-5678') // 010-****-5678
 * maskPhoneNumber('01012345678') // 010****5678
 * ```
 */
export function maskPhoneNumber(phoneNumber: string) {
  if (isHyphenSeparated(phoneNumber)) {
    return phoneNumber.replace(/^(\d{2,3})-(\d{3,4})-(\d{4})$/, (_, p1, p2, p3) => `${p1}-${maskAll(p2)}-${p3}`)
  }

  if (isSeoulPhoneNumber(phoneNumber)) {
    return phoneNumber.replace(/^02(\d{3,4})(\d{4})/, (_, p1, p2) => `02${maskAll(p1)}${p2}`)
  }

  return phoneNumber.replace(/^(\d{3})(\d{3,4})(\d{4})/, (_, p1, p2, p3) => `${p1}${maskAll(p2)}${p3}`)
}
