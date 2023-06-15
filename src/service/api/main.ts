import { request } from '@/utils/request'
import { rootPath } from '~/api'
import type { Response } from '~/api'

export function getTemplates(): Promise<Response> {
  return request.get({
    url: `${rootPath}/templates`
  })
}
