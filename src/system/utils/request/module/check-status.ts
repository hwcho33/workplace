import type { ErrorMessageMode } from '@/types/request'

export function checkStatus(status: number, msg: string, errorMessageMode: ErrorMessageMode = 'message'): void {
  let errMessage = ''

  switch (status) {
    case 400:
      errMessage = `${msg}`
      break
    case 401:
      errMessage = 'the user does not have permission (token, user name, login error)'
      break
    case 403:
      errMessage = 'the user is authorized, but access is forbidden'
      break
    case 404:
      errMessage = 'network request error, the resource was not found'
      break
    case 405:
      errMessage = 'network request error, request method not allowed'
      break
    case 408:
      errMessage = 'network request timed out'
      break
    case 500:
      errMessage = 'server error, please contact the administrator'
      break
    case 501:
      errMessage = 'the network is not implemented'
      break
    case 502:
      errMessage = 'network error'
      break
    case 503:
      errMessage = 'the service is unavailable, the server is temporarily overloaded or maintained'
      break
    case 504:
      errMessage = 'network timeout'
      break
    case 505:
      errMessage = 'the http version does not support the request'
      break
    default:
  }

  if (errMessage) {
    if (errorMessageMode === 'message') {
      console.error(errMessage)
    }
  }
}
