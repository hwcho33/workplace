/**
 * @description
 * 배열에서 동일한 값을 하나만 남겨서 중복을 제거
 * 동일 여부는 [SameValueZero](
 *  https://developer.mozilla.org/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness
 * ) 연산을 활용
 *
 * @example
 * ```ts
 * uniq([1, 2, 2, 3]) // [1, 2, 3]
 * ```
 */
export function uniq<T>(
  arr: T[] // 중복을 제거할 대상 배열
): T[] {
  return [...new Set(arr)]
}

/**
 * @name uniqBy
 *
 * @description
 * 배열에서 중복을 제거하여, 동일한 값을 하나만 남김
 * `hasher` 함수의 값을 바탕으로 동일 여부를 판단
 *
 * @example
 * ```ts
 * uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], item => item.x) // [{ x: 1 }, { x: 2 }]
 * ```
 */
export function uniqBy<T>(
  arr: T[], // 중복을 제거할 대상 배열
  hasher: (value: T) => unknown // 중복 여부 판단 hash를 생성하는 함수
): T[] {
  const result: T[] = []
  const addedElements = new Set<unknown>()

  for (const item of arr) {
    const hash = hasher(item)

    if (addedElements.has(hash)) {
      continue
    }

    addedElements.add(hash)
    result.push(item)
  }

  return result
}

/**
 * @description
 * 배열에서 중복을 제거 후 동일한 값을 하나만 남김
 * 동일 여부를 판단하는 함수를 넘길 수 있음.
 *
 * @example
 * ```ts
 * uniqWith([
 *  { 'x': 1, 'y': 2 },
 *  { 'x': 2, 'y': 1 },
 *  { 'x': 1, 'y': 2 }
 * ], isEqual)
 * // [
 * //  { 'x': 1, 'y': 2 },
 * //  { 'x': 2, 'y': 1 }
 * // ]
 * ```
 */
export function uniqWith<T>(
  arr: T[], // 중복을 제거할 대상 배열
  comparator: (x: T, y: T) => boolean // 두 요소가 동일한지 판단하는 함수
) {
  const result: T[] = []

  for (const item of arr) {
    if (result.some(x => comparator(x, item))) {
      continue
    }

    result.push(item)
  }

  return result
}
