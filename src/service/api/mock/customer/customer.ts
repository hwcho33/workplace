import { mockResponse } from '~/api/mock'

const idValidationData = {
  resultCode: '7703',
  resultMessage: '사용 가능한 이메일(아이디) 입니다.'
  // resultCode: '7704',
  // resultMessage: '휴면계정 아이디(이메일)입니다. 다른 이메일을 입력해 주세요.'
  // resultCode: '7705',
  // resultMessage: '이미 가입된 이메일 주소입니다. 다른 이메일을 입력해 주세요.'
}

const tvmemberCheckData = {
  // resultCode: '7706',
  // resultMessage: '핸드폰 번호로 가입 이력이 없습니다.'
  //7707 API 없음
  // resultCode: '7707',
  // resultMessage: 'TV회원으로 가입된 번호로 인증이 필요합니다.'
  // resultCode: '7708',
  // resultMessage: '{jh****@gmail.com}, {jh****@naver.com} 아이디(이메일)로 가입된 휴대폰 번호입니다.',
  // resultData: { loginIdList: ['preeor@gmail.com', 'testpreeor@naver.com'] }
  // resultData: {
  //   loginIdList: ['preeor@gmail.com', 'preeor@naver.com', 'test@naver.com', 'testteset@gmail.com', 'tesssss@naver.com']
  // }
  //7710 API 없음
  resultCode: '7710',
  resultMessage: 'TV회원으로 가입된 번호로 인증이 필요합니다.'
}

const smsCertificationData = {
  resultCode: '7713',
  resultMessage: '인증번호 전송이 완료되었습니다.',
  resultData: {
    seqNum: '356',
    vaildTm: '300'
  }
  // resultCode: '7714',
  // resultMessage: '인증번호 전송에 실패하였습니다.\n 인증번호요청을 다시 해주시기 바랍니다.',
  // resultData: null
}

const smsVerificationData = {
  resultCode: '7951',
  resultMessage: '인증번호 확인이 정상적으로 처리되었습니다.'
  // resultCode: '7715',
  // resultMessage: '인증번호를 입력하세요.'
  // resultCode: '7717',
  // resultMessage: '입력시간이 초과되었습니다.\n다시 인증을 시도해주세요.'
  // resultCode: '7718',
  // resultMessage: '인증번호가 일치하지 않습니다.'
}

const joinData = {
  resultCode: '7951',
  resultMessage: '정상적으로 처리되었습니다.',
  resultData: {
    loginId: 'preeor@naver.com',
    custNm: '김상훈',
    custNum: 0
  }
  // resultCode: '7724',
  // resultMessage: '이미 사용 중 이거나, 탈퇴한 이메일(아이디)입니다.'
  // resultCode: '7725',
  // resultMessage: '이미 가입하셨습니다. 로그아웃후 가입해주세요.'
  // resultCode: '7726',
  // resultMessage: '이미 간편회원으로 가입되어 있습니다.'
  // resultCode: '9002',
  // resultMessage: '요청 파라미터의 필수값이 누락되었습니다.'
}

export const idValidation = mockResponse(idValidationData)
export const tvmemberCheck = mockResponse(tvmemberCheckData)
export const smsCertification = mockResponse(smsCertificationData)
export const smsVerification = mockResponse(smsVerificationData)
export const join = mockResponse(joinData)
