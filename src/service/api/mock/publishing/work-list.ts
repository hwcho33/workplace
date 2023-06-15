import { mockResponse } from '~/api/mock'

const publishingIndex = [
  {
    service: '공통',
    list: [
      {
        id: 'SID_FO_CU_101',
        name: '로그인',
        url: '/customer/login',
        publisher: '차수영'
      },
      {
        id: 'SID_FO_CU_118',
        name: '간편 회원가입 로그인',
        url: '/customer/login/simple-account-connect',
        publisher: '차수영'
      }
    ]
  },
  {
    service: '고객',
    list: [
      {
        id: 'SID_FO_CU_118',
        name: '간편 회원가입 로그인',
        url: '/customer/login/simple-account-connect',
        publisher: '차수영'
      }
    ]
  }
]

/** @path /publishingList */
export const publishingList = mockResponse(publishingIndex)
