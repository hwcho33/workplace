export function requiredParameter(target: string): any {
  const requiredParameterError = new Error(`값이 비었습니다, "${target}" 값을 확인해주세요`)

  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(requiredParameterError, requiredParameter)
  }

  throw requiredParameterError
}
