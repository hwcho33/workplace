/**
 * @description 비어 있지 않은 배열을 나타내는 타입
 */
export type NonEmptyArray<T> = [T, ...T[]]

/**
 * @description
 * `Array.prototype.includes()`를 사용할 떄 type assertion 이슈를 해소해주는 기능
 *
 * @example
 * ```ts
 * const arr: Array<'a' | 'b' | 'c'> = ['a', 'b', 'c']
 * const element: string = 'a'
 *
 * // Array.prototype.includes를 사용 시에는 Type Error가 발생합니다.
 * // string은 'a' | 'b' | 'c'에 해당하지 않기 때문
 * arr.includes(element)
 *
 * // arrayIncludes를 사용하면 Type Error와 type assertion 없이 포함 여부 검사 가능
 * arrayIncludes(arr, element)
 * ```
 */
export function arrayIncludes<Type>(array: Type[] | readonly Type[], item: unknown, fromIndex?: number): item is Type {
  return array.includes(item as Type, fromIndex)
}

/**
 * @description 주어진 두 배열이 서로 다른지 검사
 *
 * @example
 * ```ts
 * isDifferentArray([1, 2, 3], [1, 2, 3]) // false
 * isDifferentArray([1, 2, 3], [1]) // true
 *
 * const foo = { foo: 'bar' }
 * const bar = { bar: 'foo' }
 * isDifferentArray([foo, bar], [foo, bar]) // false
 * isDifferentArray([foo, bar], [{ foo: 'bar' }, { bar: 'foo' }]) // true
 * ```
 */
export function isDiffrentArray(a: unknown[] = [], b: unknown[] = []) {
  return a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]))
}

/**
 * @description 배열이 최소 1개 이상의 원소를 가지고 있는지 확인
 *
 * @exmaple
 * ```ts
 * isNonEmptyArray([]) // false
 * isNonEmptyArray(['hi']) // true
 * isNonEmptyArray(['hi', 'hello']) // true
 * ```
 */
export function isNonEmptyArray<T>(array: T[]): array is NonEmptyArray<T> {
  return array.length >= 1
}

/**
 * @description 배열의 마지막 원소를 반환
 * `arr[arr.length - 1]`보다 선언적 코드 작성 유용
 *
 * @example
 * ```ts
 * // 배열이 일반 배열 T[] 인 경우, 비어 있을 수 있기 때문에 nullable 값을 반환
 * const arr[1, 2, 3]
 * last(arr) // number | undefined
 *
 * // 배열이 비어있지 않음이 검증되었다면, non-nullable 값을 반환
 * if (isNonEmptyArray(arr)) {
 *  last(arr) // number
 * }
 * ```
 */
export function last<T>(arr: NonEmptyArray<T>): T
export function last<T>(arr: T[]): T | undefined
export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1]
}

/**
 * @description 배열에서 임의의 원소를 선택
 * - 빈 배열은 `undefined` 반환
 * - 배열이 비어 있을 수 있다면 `T[]`, `T | undefined`를 반환
 * - 배열에 1개 이상의 원소가 있음이 보장되면 `NonEmptyArray<T>`, `T` 를 반환
 * - 배열이 최소 1개 이상의 원소가 있는지 체크하기 위해 `isNonEmptyArray` 활용 권장
 *
 * @example
 * sample([]) // undefined
 * sample([1, 2]) // 1, 2 중에서 하나를 반환
 * sample(['1', '2', '3']) // 1, 2, 3 중에서 하나를 반환
 */
export function sample<T>(arr: NonEmptyArray<T>): T
export function sample<T>(arr: T[]): T | undefined
export function sample<T>(arr: T[]): T | undefined {
  const randomIndex = Math.floor(arr.length * Math.random())
  return arr[randomIndex]
}

/**
 * @description `predicate`가 반환하는 `true/false` 값에 따라 2개의 배열로 분리하여 반환
 *
 * @example
 * ```ts
 * partition([1, 2, 3, 4, 5], x => x < 3) // [[1, 2], [3, 4, 5]]
 * ```
 */
export function partition<T>(
  items: T[], // predicate로 분리할 대상 배열
  predicate: (item: T) => boolean // 요소를 어디에 넣을지 결정하는 함수
): [T[], T[]] {
  const first: T[] = [] // predicate가 true를 반환하는 배열 요소들 `T[]`
  const second: T[] = [] // predicate가 false를 반환하는 배열 요소들 `T[]`

  for (const item of items) {
    if (predicate(item)) {
      first.push(item)
    } else {
      second.push(item)
    }
  }

  return [first, second]
}

/**
 * @description 배열을 주어진 키에 따라 그룹화합니다.
 *
 * @example
 * ```ts
 * const input = [
 *  { groupName: '부엉이', value: 1 },
 *  { groupName: '다람쥐', value: 2 },
 *  { groupName: '너구리', value: 3 },
 *  { groupName: '너구리', value: 4 },
 *  { groupName: '너구리', value: 5 },
 *  { groupName: '부엉이', value: 6 },
 * ]
 *
 * const result = groupBy(input, ({ groupName }) => groupName)
 *
 * console.info(result)
 * {
 *  부엉이: [
 *    { groupName: '부엉이', value: 1 },
 *    { groupName: '부엉이', value: 6 },
 *  ],
 *  다람쥐: [
 *    { groupName: '다람쥐', value: 2 }
 *  ],
 *  너구리: [
 *    { groupName: '너구리', value: 3 },
 *    { groupName: '너구리', value: 4 },
 *    { groupName: '너구리', value: 5 },
 *  ],
 * }
 * ```
 */
export function groupBy<T>(
  data: T[], //그룹화 대상 배열
  createKey: (item: T) => string // 그룹화 기준 키 생성 함수
) {
  return data.reduce((result: Record<string, T[]>, current) => {
    const key = createKey(current)
    const value = result[key]

    if (value == null) {
      result[key] = [current]
    } else {
      value.push(current)
    }

    return result
  }, {})
}
