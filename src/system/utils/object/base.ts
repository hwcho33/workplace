export type ObjectKeys<T extends Record<PropertyKey, unknown>> = Exclude<keyof T, symbol>

export type ElementType<Type extends readonly unknown[]> = Type[number]

/**
 * @description
 * [Object.keys()](
 *  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 * ) 사용 시 key 타입이 깨지는 불편함을 해소해주는 유틸리티
 *
 * @example
 * ```ts
 * const languages = {
 *  rust: 1,
 *  swift: 2,
 *  javascript: 3
 * } as const
 *
 * // Object.keys 사용 시 key 타입이 string
 * Object.keys(languages) // Array<string>
 *
 * // key 타입 유지됨
 * objectKeys(languages) // Array<'rust' | 'swift' | 'javascript'>
 * ```
 */
export function objectKeys<Type extends Record<PropertyKey, unknown>>(obj: Type): Array<ObjectKeys<Type>> {
  return Object.keys(obj) as Array<ObjectKeys<Type>>
}

/**
 * @description
 * [Object.entries()](
 *  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * ) 사용 시 key 타입이 깨지는 불편함을 해소해주는 유틸리티
 *
 * @example
 * ```ts
 * const languages = {
 *  rust: 1,
 *  swift: 2,
 *  javascript: 3
 * } as const
 *
 *
 * // Object.entries 사용 시 key 타입이 string
 * Object.entries(languages) // Array<[string, 1 | 2 | 3]>
 *
 * // key 타입 유지됨
 * objectEntries(languages) // Array<['rust' | 'swift' | 'javascript', 1 | 2 | 3]>
 * ```
 */
export function objectEntries<Type extends Record<PropertyKey, unknown>>(
  obj: Type
): Array<[ObjectKeys<Type>, Type[ObjectKeys<Type>]]> {
  return Object.entries(obj) as Array<[ObjectKeys<Type>, Type[ObjectKeys<Type>]]>
}

/**
 * @description
 * [Object.values()](
 *  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 * ) 와 동일하게 동작하는 유틸리티 (동일하게 동작하지만 선언적 코드 작성을 위함)
 *
 * @example
 * ```ts
 * const languages = {
 *  rust: 1,
 *  swift: 2,
 *  javascript: 3
 * } as const
 *
 * objectValues(languages) // Array<1 | 2 | 3>
 * ```
 */
export function objectValues<Type extends Record<PropertyKey, unknown>>(obj: Type): Array<Type[ObjectKeys<Type>]> {
  return Object.values(obj) as Array<Type[ObjectKeys<Type>]>
}

/**
 * @description
 * 객체에서 주어진 키들에 해당하는 키-값 쌍들을 제거하여 새로운 객체를 만드는 유틸리티
 *
 * @example
 * ```ts
 * const country = {
 *  KR: 'KR',
 *  US: 'US',
 *  JP: 'JP'
 * } as const
 *
 * omit(country, ['CA']) // TS2322: Type '"CA"' is not assignable to type
 * omit(country, ['KR']) // { US: 'US', JP: 'JP' }
 * ```
 */
export function omit<ObjectType extends Record<PropertyKey, unknown>, KeyTypes extends Array<ObjectKeys<ObjectType>>>(
  obj: ObjectType,
  keys: KeyTypes
) {
  return objectKeys(obj)
    .filter((k): k is Exclude<ObjectKeys<ObjectType>, ElementType<KeyTypes>> => !keys.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as Omit<ObjectType, ElementType<KeyTypes>>)
}

/**
 * @description
 * 지정한 key로만 이루어진 객체를 생성
 *
 * @example
 * ```ts
 * const country = {
 *  KR: 'KR',
 *  US: 'US',
 *  JP: 'JP'
 * } as const
 *
 * pick(country, ['CA']) // TS2322: Type '"CA"' is not assignable to type '"KR" | "US" | "JP"'
 * pick(country, ['kR']) // { KR: 'KR' }
 * ```
 */
export function pick<ObjectType extends Record<PropertyKey, unknown>, KeyTypes extends Array<ObjectKeys<ObjectType>>>(
  obj: ObjectType,
  keys: KeyTypes
) {
  const picked = {} as Pick<ObjectType, ElementType<KeyTypes>>
  for (const key of keys) {
    picked[key] = obj[key]
  }
  return picked
}

/**
 * @description
 * 비동기 함수 `func`가 짧은 시간 안에 여러 번 실행되어도 한 번만 호출되도록 함
 * 함수의 호출 결과는 첫 번쨰 `func` 함수 호출의 결과값이 됨
 *
 * @example
 * ```ts
 * async function toBatch(num: number) {
 *  return new Promise<number>(resolve => {
 *    setTimeout(() => {
 *      resolve(num)
 *    }, 1000)
 *  })
 * }
 *
 * const batchedFunction = batchRequestOf(functionToBatch)
 *
 * batchedFunc(1)
 * batchedFunc(2)
 * BatchedFunc(1)
 * ```
 */
export function batchRequestOf<F extends (...args: any[]) => any>(func: F) {
  const promiseByKey = new Map<string, Promise<ReturnType<F>>>()

  return function (...args: Parameters<F>) {
    const key = JSON.stringify(args)

    if (promiseByKey.has(key)) {
      return promiseByKey.get(key)
    } else {
      const promise = func(...args)

      promise.then(() => {
        promiseByKey.delete(key)
      })
      promiseByKey.set(key, promise)

      return promise
    }
  } as F
}

/**
 * @description 배열을 주어진 길이보다 작은 배열들로 나눔
 *
 * @example
 * ```ts
 * chunk([], 3) // --> []
 * chunk([1, 2, 3] -1) // --> []
 * chunk([1, 2, 3, 4, 5, 6], 3) // --> [[1, 2, 3], [4, 5, 6]]
 * chunk([1, 2, 3, 4, 5, 6, 7], 2) // --> [[1, 2], [3, 4], [5, 6], [7]]
 * ```
 */
export function chunk<T>(
  arr: T[], // 나눌 배열
  size: number // 각 내부 배열의 길이
) {
  if (size < 1) {
    return []
  }

  return arr.reduce((result, item, index) => {
    if (index % size > 0) {
      result[result.length - 1]!.push(item)
    } else {
      result.push([item])
    }
    return result
  }, [] as T[][])
}

/**
 * @description 객체의 특정 경로에 있는 값을 반환함
 *
 * @example
 * ```ts
 * get({ a: { b: 1 }, 'a.b' }) // 1
 * get({ a: { b: 1 }, 'a.b.c' }) // undefined
 * get<boolean>({ a: { b: true } }, 'a.b.c', false) // false
 * ```
 */
export const get = <T = any>(
  obj: Record<string, any>, // 값을 가져올 객체
  path: string, // 가져올 값의 경로
  defaultValue?: T // 경로에 해당하는 값이 없을 시 반환될 기본값
): T => {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((acc, key) => (acc !== null && acc !== undefined ? acc[key] : acc), obj)
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)

  return (result === undefined || result === obj ? defaultValue : result) as T
}

/**
 * @description 객체의 특정 경로에 있는 값을 수정
 *
 * @example
 * ```ts
 * set({ a: { b: 1 } }, 'a.b', 2) // { a: { b: 2 } }
 * ```
 */
export const set = (
  obj: Record<string, any>, // 값을 수정할 객체
  path: string, // 수정할 값의 경로
  value: any // 넣을 값(새로운 값)
) => {
  const pathArray = path.match(/([T[.\]])+/g)

  pathArray?.reduce((acc, key, i) => {
    if (acc[key] == null) {
      acc[key] = {}
    }

    if (i === pathArray.length - 1) {
      acc[key] = value
    }
    return acc[key]
  }, obj)

  return obj
}

/**
 * @description 오브젝트의 값을 map 하는 함수
 *
 * @example
 * ```ts
 * mapValues({ foo: 1, bar: 2 }, x => x * 2) // { foo: 2, bar: 4 }
 * ```
 */
export function mapValues<T extends Record<PropertyKey, any>, U>(
  value: T,
  mapper: (value: T[Exclude<keyof T, symbol>]) => U
): { [K in Exclude<keyof T, symbol>]: U } {
  const entries = Object.entries(value)

  return Object.fromEntries(
    entries.map(([k, v]) => {
      return [k, mapper(v)]
    })
  ) as any
}
