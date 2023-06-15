import { mockResponse } from '~/api/mock'

/**
 * 개인정보 유효기간 조회 mock
 */
export const validDuration = mockResponse({
  // 7951 정상
  resultCode: '7951',
  resultMessage: '정상적으로 처리되었습니다.',
  resultData: {
    validDur: '3'
  }
})

/**
 * 개인정보 유효기간 변경 mock
 */
export const dormantVaildDuration = mockResponse({
  // 7951 정상
  resultCode: '7951',
  resultMessage: '정상적으로 처리되었습니다.',
  resultData: null
})

/**
 * 휴면 고객 복원 mock
 */
export const custRecative = mockResponse({
  // 7951 정상
  resultCode: '7951',
  resultMessage: '정상적으로 처리되었습니다.',
  resultData: null
})
