import { mockResponse } from '~/api/mock'

// 본인인증 인증번호 전송
const selfCertCertNumInfo = {
  resultCode: '0000',
  resultMessage: '정상적으로 처리되었습니다.',
  resultData: {
    date: '',
    certNum: '0000',
    check1: 'check1',
    check2: 'check2',
    check3: 'check3'
  }
}
export const selfCertCertNum = mockResponse(selfCertCertNumInfo)

// 본인인증 인증번호 재전송
const selfCertCertNumRetryInfo = {
  resultCode: '0000',
  resultMessage: '정상적으로 처리되었습니다.',
  resultData: {
    certNum: '1111',
    check1: 'check1-retry',
    check2: 'check2-retry',
    check3: 'check3-retry'
  }
}
export const selfCertCertNumRetry = mockResponse(selfCertCertNumRetryInfo)

// 본인인증 인증번호 확인
const selfCertCertNumCheckInfo = {
  resultCode: '0000',
  resultMessage: '정상적으로 처리되었습니다.',
  resultData: {
    CI: 'CI',
    DI: 'DI',
    certNum: '2222',
    check1: 'check1-check',
    check2: 'check2-check',
    check3: 'check3-check'
  }
}
export const selfCertCertNumCheck = mockResponse(selfCertCertNumCheckInfo)
