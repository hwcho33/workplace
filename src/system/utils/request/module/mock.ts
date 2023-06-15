import * as mock from '~/api/mock'
import { showMode } from '@/eco-system'

export function callMockData(url: string): any {
  showMode('%c MOCKING MODE ACTIVATED ', 'orange', true)
  if (url) {
    const urlSplit = url.split('/')
    const target = urlSplit[urlSplit.length - 1]

    // @ts-ignore
    const result = mock[target]

    return result
  }

  // if url is null or undefined
  return mock.fail
}
