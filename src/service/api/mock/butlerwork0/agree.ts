import { mockResponse } from '~/api/mock'

// 개인정보이용 동의
const selfCertTermInfo = {
  resultCode: '0000',
  resultMessage: '정상적으로 처리되었습니다.',
  resultData: {
    termsList: [
      {
        termsTitle: '개인정보이용 동의',
        termsCtnt: `<h3>개인정보이용 내용</h3>`,
        termsApplyStartDd: ''
      },
      {
        termsTitle: '고유식별정보처리 동의',
        termsCtnt: `<h3>고유식별정보처리 내용</h3>`,
        termsApplyStartDd: ''
      },
      {
        termsTitle: '서비스이용약관 동의',
        termsCtnt: `<h3>서비스이용약관 내용</h3>`,
        termsApplyStartDd: ''
      },
      {
        termsTitle: '통신사이용약관 동의',
        termsCtnt: `<h3>통신사이용약관 내용</h3>`,
        termsApplyStartDd: ''
      },
      {
        termsTitle: '제3자 정보제공 동의',
        termsCtnt: `<h3>제3자 정보제공 내용</h3>`,
        termsApplyStartDd: ''
      }
    ]
  }
}
export const selfCertTerm = mockResponse(selfCertTermInfo)
