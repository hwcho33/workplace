import { isServer } from '@/utils/device'

/**
 * @description 할당된 url의 스크립트를 동적으로 로드
 *
 * @example
 * ```ts
 * loadScript('https://dev-mfo.nsmall.com/script.js')
 * ```
 **/
export function loadScript(source: string) {
  if (isServer()) {
    return Promise.resolve()
  }

  const element = document.querySelector(`script[src="${source}"]`)

  // 이미 로드되어 있거나 로드 중
  if (element) {
    return Promise.resolve()
  }

  return new Promise(resolve => {
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.src = source
    document.body.append(script)
    script.addEventListener('load', resolve)
  })
}

interface RetryOptions {
  retries: number // 재시도 횟수
  shouldRetry?: (error: Error) => boolean // 재시도 여부
  onError?: (error: Error) => void | Promise<void> // task 수행 중 에러 발생 시점마다 호출되는 함수
}

/**
 * @description
 * task 실행을 재시도하는 함수
 *
 * @example
 * ```ts
 * function requestAlwaysFailedAPI() {
 *  console.log('called')
 *  throw new Error('Failed')
 * }
 *
 * const retryingTask = retryRequestsOf(
 *  requestAlwaysFailedAPI,
 *  {
 *    retries: 1,
 *    onError: (e) => { console.log(`hello, ${e.message}`) }
 *  }
 * )
 *
 * retryingTask()
 * // called
 * // hello, Failed!!
 * // called
 * // hello, Failed!!
 * // Uncaught Error: Failed!
 * ```
 */
export function retryRequestOf<Arguments extends any[], Result>(
  task: (...args: Arguments) => Result | Promise<Result>,
  { retries, shouldRetry = () => true, onError }: RetryOptions
) {
  return async function (...args: Arguments) {
    let retriesLeft = retries

    for await (const result of createTaskStream(task, args)) {
      switch (result.type) {
        case 'SUCCEEDED': {
          return result.value
        }
        case 'ERROR': {
          await onError?.(result.error)

          if (shouldRetry(result.error) && retriesLeft > 0) {
            retriesLeft -= 1
            continue
          } else {
            throw result.error
          }
        }
      }
    }

    throw new Error('재시도 횟수를 초과했습니다.')
  }
}

async function* createTaskStream<Arguments extends any[], Result>(
  task: (...args: Arguments) => Result | Promise<Result>,
  args: Arguments
) {
  while (true) {
    try {
      const value = await task(...args)

      yield {
        type: 'SUCCEEDED',
        value
      } as const
    } catch (error: any) {
      yield {
        type: 'ERROR',
        error
      } as const
    }
  }
}
