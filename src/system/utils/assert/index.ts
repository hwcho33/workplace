import { NonEmptyArray } from '@/utils/array'

/**
 * @description
 * 입력받은 condition을 단언.
 * TypeScript의 [Asserts](
 *  https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html
 * ) 함수로 사용
 *
 * @example
 * ```ts
 * let accountId: string | null
 *
 * assert(
 *  accountId != null,
 *  new Error(`accountId값이 없습니다. 값이 "${acouuntId}"입니다.`)
 * )
 *
 * accountId // string (type guarded)
 * ```
 */
export function assert(
  condition: unknown, // Asserts 조건
  error: Error | string = new Error() // string을 넘기는 경우, `new Error`를 감싸서 throw
): asserts condition {
  if (!condition) {
    if (typeof error === 'string') {
      throw new Error(error)
    } else {
      throw error
    }
  }
}

/**
 * @description
 * 배열이 최소 1개의 원소를 가지고 있는지 검사
 * TypeScript의 [Type Guard](
 *  https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 * ) 함수로 동작
 *
 * 배열이 비어있지 않을 경우 `NonEmptyArray` 타입으로 추론
 * TypeScript의 [noUncheckedIndexAccess](
 *  https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess
 * ) 옵션을 사용하는 경우, 반환값이 있음을 타입으로 보장하기 위해서 '빈 배열이 아님' 검증 필요
 *
 * @example
 * ```ts
 * assertNonEmptyArray([]) // new Error('AssertionError: EmptyArray')를 throw
 * assertNonEmptyArray([], new Error('잘못됐어요')) // new Error('잘못됐어요')
 * assertNonEmptyArray(['hi']) // 에러 throw 하지 않음
 * ```
 */
export function assertNonEmptyArray<T>(
  arr: T[],
  error: Error | string = new Error('AssertionError: EmptyArray')
): asserts arr is NonEmptyArray<T> {
  if (arr.length < 1) {
    if (typeof error === 'string') {
      throw new Error(error)
    } else {
      throw error
    }
  }
}
