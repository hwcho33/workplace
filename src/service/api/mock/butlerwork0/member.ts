import { mockResponse } from '~/api/mock'

// 성인인증
const MEMBER_ADULT_CERTIFICATION_INFO = {
  resultCode: '7801',
  resultMessage: '성인인증이 완료 되었습니다.',
  resultData: {}
}
export const MEMBER_ADULT_CERTIFICATION = mockResponse(MEMBER_ADULT_CERTIFICATION_INFO)
