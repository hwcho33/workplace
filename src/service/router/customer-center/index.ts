import { meta, routerMapper } from '~/utils'

const root = '/customer-center'
const namePrefix = 'CustomerCenter'

const customerCenter = [
  {
    ...routerMapper({
      name: `${namePrefix}`,
      path: `${root}`,
      meta: meta()
    }),
    component: () => import('~/pages/customer-center/customer-center.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Faq`,
      path: `${root}/faq`,
      meta: meta()
    }),
    component: () => import('~/pages/customer-center/faq.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}FaqSearch`,
      path: `${root}/faq-search`,
      meta: meta()
    }),
    component: () => import('~/pages/customer-center/faq-search.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}CounselList`,
      path: `${root}/counsel-list`,
      meta: meta()
    }),
    component: () => import('~/pages/customer-center/counsel-list.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}InquiryDetails`,
      path: `${root}/inquiry-details`,
      meta: meta()
    }),
    component: () => import('~/pages/customer-center/inquiry-details.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}Notice`,
      path: `${root}/notice`,
      meta: meta()
    }),
    component: () => import('~/pages/customer-center/notice.vue')
  },
  {
    ...routerMapper({
      name: `${namePrefix}NoticeDetails`,
      path: `${root}/notice-details`,
      meta: meta()
    }),
    component: () => import('~/pages/customer-center/notice-details.vue')
  }
]

export default customerCenter
