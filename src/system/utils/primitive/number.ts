const units = ['', '십', '백', '천', '만', '십', '백', '천', '억', '십', '백', '천', '조', '십', '백', '천', '경']

function chunk(value: number | string, byDigits: number) {
  const result: number[] = []
  const source = String(value)

  for (let end = source.length; end >= 1; end = end - byDigits) {
    const start = Math.max(end - byDigits, 0)
    const slice = source.slice(start, end)
    result.push(Number(slice))
  }

  return result
}

function createNumberFormatterBy(formatter: (num: number) => number) {
  return function formatNumber(value: number, unit: number) {
    if (unit < 1) {
      // 부동소수점 오류 때문에 unit < 1인 경우 특별 처리
      const reciprocal = 1 / unit

      return formatter(value * reciprocal) / reciprocal
    }

    return formatter(value / unit) * unit
  }
}

function formatThousands(num: number) {
  const numString = String(num)
    .split('')
    .reverse()
    .map((digit, index) => {
      return digit !== '0' ? `${digit !== '1' ? digit : ''}${units[index]}` : ''
    })
    .reverse()
    .join('')
  return numString
}

/**
 * @description
 * 특정 값의 최댓값, 최솟값을 정하고, 그 값이 최댓값보다 크면 최댓값을 반환
 * 최솟값보다 작다면 최솟값을 반환
 * 주의: `clamp` 함수에 주어진 최솟값이 최댓값보다 크다면 에러 발생
 *
 * @example
 * ```ts
 * clamp(3, 1) // 3
 * clamp(3, 1, 5) // 3
 * clamp(3, 5) // 3
 * clamp(7, 3, 5) // 5
 * ```
 */
export function clamp(value: number, bound1: number, bound2?: number) {
  if (bound2 == null) {
    return Math.min(value, bound1)
  }

  if (bound2 < bound1) {
    throw new Error('The value of bound2 must be a number greater than bound1')
  }

  return Math.min(Math.max(value, bound1), bound2)
}

/**
 * @description 주어진 unit 단위로 value를 올림
 *
 * @example
 * ```ts
 * ceilToUnit(320980, 10000) // 330000
 * ```
 */
export const ceilToUnit = createNumberFormatterBy(Math.ceil)

/**
 * @description 주어진 unit 단위로 value를 내림
 *
 * @example
 * ```ts
 * floorToUnit(320980, 10000) // 320000
 * ```
 */
export const floorToUnit = createNumberFormatterBy(Math.floor)

/**
 * @description 주어진 unit 단위로 value를 반올림
 *
 * @example
 * ```ts
 * roundToUnit(320980, 1000) // 321000
 * ```
 */
export const roundToUnit = createNumberFormatterBy(Math.round)

/**
 * @description 주어진 숫자를 comma로 구분
 *
 * @example
 * ```ts
 * commaizeNumber(13209802) // '13,209,802'
 * commaizeNumber('13209802') // ''
 * ```
 */
export function commaizeNumber(value: string | number) {
  const numStr = String(value)
  const decimalPointIndex = numStr.indexOf('.')
  const commaizeRegExp = /(\d)(?=(\d\d\d)+(?!\d))/g

  return decimalPointIndex > -1
    ? numStr.slice(0, decimalPointIndex).replace(commaizeRegExp, '$1,') + numStr.slice(decimalPointIndex)
    : numStr.replace(commaizeRegExp, '$1,')
}

/**
 * @description
 * 주어진 숫자를 반올림하고, 숫자를 commaize합니다.
 *
 * @example
 * ```ts
 * floorAndFormatNumber(13209802.1212) // '13,209,802'
 * ```
 */
export function floorAndFormatNumber(value: number) {
  return commaizeNumber(Math.floor(value))
}

/**
 * @description
 * 숫자에서 comma를 제거합니다
 *
 * @example
 * ```ts
 * decommaizeNumber('13,209,802') // 13209802
 * ```
 */
export function decommaizeNumber(numStr: string) {
  return Number(numStr.replace(/,/g, ''))
}

/**
 * @description
 * 주어진 수(금액)를 한국어 금액 표기로 변환
 *
 * @example
 * ```ts
 * formatToKoreanNumber(13209802) // '1,320만 9,802'
 * ```
 */
export function formatToKoreanNumber(value: number, options: { floorUnit?: number; formatAllDigits?: boolean } = {}) {
  const flooredVal = floorToUnit(value, options.floorUnit || 1)

  if (flooredVal === 0) {
    return '0'
  }

  return chunk(flooredVal, 4)
    .reduce((prevFormatted, currChunkNum, index) => {
      if (currChunkNum === 0) {
        return prevFormatted
      }

      const val = options.formatAllDigits ? formatThousands(currChunkNum) : commaizeNumber(currChunkNum)

      const unit = units[index * 4]

      return `${val}${unit} ${prevFormatted}`
    }, '')
    .trim()
}

/**
 * @description
 * 주어진 수(금액)를 한국어 표기(KRW)로 변환합니다
 *
 * @example
 * ```ts
 * formatToKRW(13209802) // '1,320만 9,802원'
 * formatToKRW(13209802, { floorUnit: 10000 }) // '1,320만원'
 * formatToKRW(13209802, { ceilUnit: 10000 }) // '1,321만원'
 * formatToKRW(13200000, { formatAllDigits: true }) // '천3백2십만원'
 * ```
 */
export function formatToKRW(
  value: number, // 변환할 숫자
  options: {
    shouldHaveSpaceBeforeWon?: boolean // 원 앞에 공백이 들어감. 단독으로 금액 표시 시 true로 설정 (문장 안에서는 숫자와 원을 붙여씀)
    floorUnit?: number // 내림할 단위
    ceilUnit?: number // 올림할 단위
    formatAllDigits?: boolean // true일 때는 모든 자릿수를 format함
  } = {}
): string {
  const formattedVal = formatToKoreanNumber(value, options)

  if (options.shouldHaveSpaceBeforeWon === true) {
    return `${formattedVal}원`
  }

  return `${formattedVal}원`
}

/**
 * @description
 * 전화번호를 하이픈(`-`)이 들어간 형태로 변환
 * 서울 국번인 경우(`02XXXXZZZZ`)나 10자리인 경우(`011XXXZZZZ`) 형태 또한 대응 가능
 *
 * @example
 * ```ts
 * formatPhoneNumber('01025560000') // '010-2556-0000'
 * formatPhoneNumber('0215994905') // '02-1599-4905'
 * formatPhoneNumber('0110000000') // '011-000-0000'
 * ```
 */
export function formatPhoneNumber(phoneNumber: string) {
  const isSeoulNumber = phoneNumber.startsWith('02')

  // 서울 국번(02)인 경우에만 지역번호가 2자리입니다.
  const areaCodeEndIndex = isSeoulNumber ? 2 : 3

  // 10자리 전화번호 (또는 서울인 경우, 9자리 전화번호)에 대응하기 위해서
  // [0:areaCodeEndIndex], [areaCodeEndIndex:length-4], [length-4:length] 형식으로 나누고 join합니다.
  return [
    phoneNumber.slice(0, areaCodeEndIndex),
    phoneNumber.slice(areaCodeEndIndex, phoneNumber.length - 4),
    phoneNumber.slice(phoneNumber.length - 4)
  ].join('-')
}

/**
 * @description
 * 사업자등록번호를 하이픈(`-`)이 들어간 형태로 변환
 * 숫자가 아닌 문자가 포함되거나 10자리가 아니면 error를 throw
 *
 * 다음의 규칙을 따름
 * - 모든 사업자등록번호는 10자리
 * - 오직 숫자만 허용
 * - 구분자는 하이픈이며, 3자리-2자리-5자리 순으로 구분 (000-11-22222)
 *
 * @example
 * ```ts
 * formatBusinessRegistrationNumber('0001122222') // 000-11-22222
 * ```
 */
export function formatBusinessRegistrationNumber(businessRegistrationNumber: string) {
  if (businessRegistrationNumber.length !== 10) {
    throw new Error('사업자등록번호는 반드시 길이가 10 이어야 합니다')
  }

  if (/^\d+$/.test(businessRegistrationNumber) === false) {
    throw new Error('사업자등록번호는 [0-9] 이어야 합니다.')
  }

  return businessRegistrationNumber.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3')
}

/**
 * @description
 * `start`에서 시작하여 `end` 바로 전에 끝나는 숫자 배열을 반환
 * `end`를 생략하는 경우, 0부터 첫 번째 인자 `end` 바로 전까지의 숫자들을 반환
 * 반환되는 배열에서 `end`는 포함되지 않으므로 주의
 *
 * @example
 * ```ts
 * range(1, 5) // [1, 2, 3, 4]
 *
 * // end를 생략하는 경우
 * range(4) // [0, 1, 2, 3]
 *
 * // step으로 숫자의 간격을 설정 가능
 * range(1, 11, 3) // [1, 4, 7, 10]
 * ```
 */
export function range(
  start: number, // 시작할 숫자
  end?: number, // 끝날 숫자 (주의 `end`는 포함되지 않음)
  step = 1 // 배열에 포함될 숫자의 간격
): number[] {
  const _start = end === undefined ? 0 : start
  const _end = end === undefined ? start : end

  const output: number[] = []
  let current = _start
  while (current < _end) {
    output.push(current)
    current += step
  }
  return output
}

/**
 * @description
 * 주어진 배열에서 최댓값을 가지는 요소를 반환
 * `iteratee` 함수로 최댓값을 계산할 방법을 정함
 *
 * @example
 * ```ts
 * const targetArr = [
 *  { value: 1 },
 *  { value: 3 },
 *  { value: 2 }
 * ]
 *
 * maxBy(targetArr, ({ value } => value)) // { value: 3 }
 * ```
 */
export function maxBy<T>(
  collection: T[], // 최댓값을 찾을 대상 배열
  iteratee: (element: T) => number // 배열의 값을 계산하는 방법
): T | undefined {
  // 배열이 비어 있을 경우 undefined를 반환
  if (collection.length === 0) {
    return undefined
  }

  return collection.reduce(function (a, b) {
    return iteratee(a) >= iteratee(b) ? a : b
  }, {} as T)
}

/**
 * @description
 * 주어진 배열에서 최솟값을 가지는 요소를 반환
 * `iteratee` 함수로 최솟값을 계산할 방법을 정함
 */
export function minBy<T>(collection: T[], iteratee: (element: T) => number): T | undefined {
  if (collection.length === 0) {
    return undefined
  }

  return collection.reduce(function (a, b) {
    return iteratee(a) <= iteratee(b) ? a : b
  }, {} as T)
}
