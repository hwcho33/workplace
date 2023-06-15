import { mockResponse } from '~/api/mock'

/**
 * 아이디 찾기 > 인증번호 요청 mock
 */
export const idSearchSend = mockResponse({
  // 7806 정상
  resultCode: '7806',
  resultMessage: '인증번호 전송이 완료되었습니다.',
  resultData: {
    vaildTm: '300',
    seqNum: '1234'
  }
  // 7807 실패
  // resultCode: '7807',
  // resultMessage: '인증번호 전송에 실패하였습니다. 인증번호요청을 다시 해주시기 바랍니다.',
  // resultData: {}
  // 7808 실패
  // resultCode: '7808',
  // resultMessage: '회원 정보를 찾을 수 없습니다.',
  // resultData: {}
})

/**
 * 아이디 찾기 > 인증번호 확인 mock
 */
export const idSearchVerification = mockResponse({
  // 7809 성공
  resultCode: '7809',
  resultMessage: '인증번호가 확인되었습니다.',
  resultData: {
    loginIdList: [
      { loginId: 'myidid1@naver.com' },
      { loginId: 'myidid2@naver.com' },
      { loginId: 'myidid3@naver.com' },
      { loginId: 'myidid4@naver.com' },
      { loginId: 'myidid5@naver.com' },
      { loginId: 'myidid6@naver.com' },
      { loginId: 'myidid7@naver.com' },
      { loginId: 'myidid8@naver.com' },
      { loginId: 'myidid9@naver.com' },
      { loginId: 'myidid10@naver.com' }
    ]
  }
  // 7810 실패
  // resultCode: '7810',
  // resultMessage: '인증번호가 일치하지 않습니다.',
  // resultData: {}
  // 7811 실패
  // resultCode: '7811',
  // resultMessage: '입력시간이 초과되었습니다. 다시 인증을 시도해주세요.',
  // resultData: {}
  // 7808 실패
  // resultCode: '7808',
  // resultMessage: '회원정보를 찾을수 없습니다.',
  // resultData: {}
})

/**
 * 비밀번호 찾기 > 아이디 확인 mock
 */
export const idCheck = mockResponse({
  // 7951 정상
  resultCode: '7951',
  resultMessage: '정상적으로 처리되었습니다.',
  resultData: {}
  // 7812 실패
  // resultCode: '7812',
  // resultMessage: '이름 또는 이메일(아이디)을 다시 확인해 주세요.',
  // resultData: {}
})

/**
 * 비밀번호 찾기 > 인증번호 요청 mock
 */
export const passwordSearchSend = mockResponse({
  // 7806 정상
  resultCode: '7806',
  resultMessage: '인증번호 전송이 완료되었습니다.',
  resultData: {
    vaildTm: '300',
    seqNum: '1234'
  }
  // 7807 실패
  // resultCode: '7807',
  // resultMessage: '인증번호 전송에 실패하였습니다. 인증번호요청을 다시 해주시기 바랍니다.',
  // resultData: {}
  // 7808 실패
  // resultCode: '7808',
  // resultMessage: '회원 정보를 찾을 수 없습니다.',
  // resultData: {}
})

/**
 * 비밀번호 찾기 > 인증번호 확인 mock
 */
export const passwordSearchVerification = mockResponse({
  // 7809 성공
  resultCode: '7809',
  resultMessage: '인증번호가 확인되었습니다.',
  resultData: {}
  // 7810 실패
  // resultCode: '7810',
  // resultMessage: '인증번호가 일치하지 않습니다.',
  // resultData: {}
  // 7811 실패
  // resultCode: '7811',
  // resultMessage: '입력시간이 초과되었습니다. 다시 인증을 시도해주세요.',
  // resultData: {}
  // 7808 실패
  // resultCode: '7808',
  // resultMessage: '회원정보를 찾을수 없습니다.',
  // resultData: {}
})

/**
 * 비밀번호 찾기 > 비밀번호 변경
 */
export const passwordChange = mockResponse({
  // 7951 성공
  resultCode: '7951',
  resultMessage: '정상적으로 처리되었습니다.',
  resultData: null
  // 7734 실패
  // resultCode: '7734',
  // resultMessage: '공백이나 한글은 사용할 수 없습니다.',
  // resultData: null
  // 7735 실패
  // resultCode: '7735',
  // resultMessage: '글자수는 8~16자 이내여야 합니다.',
  // resultData: null
  // 7736 실패
  // resultCode: '7736',
  // resultMessage: '영문대문자, 소문자, 숫자, 특수문자 중 두가지 이상을 조합해야 합니다.',
  // resultData: null
  // 7737 실패
  // resultCode: '7737',
  // resultMessage: '연속문자열(1234, abcd, qwer 등)은 4연속하여 포함할 수 없습니다.',
  // resultData: null
  // 7738 실패
  // resultCode: '7738',
  // resultMessage: '동일한 문자를 3연속하여 포함할 수 없습니다.',
  // resultData: null
  // 7739 실패 TODO: 추가 되어야할 기능.
  // resultCode: '7739',
  // resultMessage: '현재 사용중인 비밀번호입니다.',
  // resultData: null
})
