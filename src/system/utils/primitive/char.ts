const 두글자성씨 = [
  '남궁',
  '황보',
  '제갈',
  '사공',
  '선우',
  '서문',
  '독고',
  '동방',
  '어금',
  '망절',
  '무본',
  '황목',
  '등정',
  '장곡',
  '강전'
]

const isKorean = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣0-9]*$/

/**
 * @description
 * 한글 이름을 `[성, 이름]`으로 분류하는 parser
 *
 * 다음 규칙을 따름
 * - 두 글자 이름: `[성, 이름]`
 * - 세 글자 이름: (두 글자 성씨: `['', 풀네임]` / 한 글자 성씨: `[성, 이름]`)
 * - 그 외: `['', 풀네임]`
 *
 * @example
 * ```ts
 * parseName('엔에스') // ['엔', '에스']
 * parseName('에스') // ['에', '스']
 * parseName('김엔에스') // ['', '김엔에스']
 * parseName('Kim Shopping') // ['', 'Kim Shopping]
 * ```
 */
export function parseName(koreanName: string) {
  if (!isKorean.test(koreanName)) {
    return ['', koreanName]
  }

  switch (koreanName.length) {
    case 2:
      return [koreanName.slice(0, 1), koreanName.slice(1)]
    case 3: {
      if (두글자성씨.includes(koreanName.slice(0, 2))) {
        return ['', koreanName]
      }
      return [koreanName.slice(0, 1), koreanName.slice(1)]
    }
    default: {
      return ['', koreanName]
    }
  }
}

/**
 * @description
 * 입력받은 이름의 일부를 masking합니다
 *
 * @example
 * ```ts
 * maskName('쇼핑') // '쇼*'
 * maskName('엔에스') // '엔*스'
 * maskName('엔에스쇼') // '엔**쇼'
 * maskName('NS SH OPP') // 'N*******P'
 * maskName('엔에스', { maskChar: '#' }) // '엔#스'
 * ```
 */
export function maskName(
  name: string, // 마스킹할 이름
  { maskChar = '*' }: { maskChar?: string } = {} // 마스킹 시 사용할 문자(default = '*')
) {
  const firstLetter = name.slice(0, 1)

  // 두 글자 이름인 경우, 두 번째 글자를 마스킹해야 하기 때문에
  // 마스킹을 하지 않는 마지막 글자의 최소 시작 인덱스는 2가 된다.
  const lastLetterIndex = Math.max(2, name.length - 1)
  const lastLetter = name.slice(lastLetterIndex)

  const middleLength = name.length - 1 - lastLetter.length
  const middle = Array.from({ length: middleLength }).fill(maskChar).join('')

  return `${firstLetter}${middle}${lastLetter}`
}

let nextUniqueId = 0
/**
 * @description 고유한 ID를 생성하여 반환
 *
 * @example
 * generateID('ns') // 'ns1'
 * generateID('ns') // 'ns2'
 * generateID('ns') // 'ns3'
 */
export function generateID(prefix = '') {
  nextUniqueId = nextUniqueId + 1
  return `${prefix}${nextUniqueId}`
}

/**
 * @description 주어진 값이 null이나 undefined가 아닌지 확인
 *
 * @example
 * isNotNil(null) // false
 * isNotNil(undefined) // false
 * isNotNil(1) // true
 */
export function isNotNil<T>(val: T | undefined | null): val is T {
  return val != null
}

/**
 * @description 특수 문자를 HTML 엔티티로 치환
 *
 * @example
 * ```ts
 * escapeHTML('알림 > 수신') // '알림 &gt; 수신'
 * ```
 */
export function escapeHTML(text: string) {
  return text.replace(/[&<>'"]/g, entity => {
    switch (entity) {
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case "'":
        return '&#39;'
      case '"':
        return '&quot;'
      default:
        return entity
    }
  })
}
