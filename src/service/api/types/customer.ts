export interface TermsRequest {
  termCd: string
}
export interface TermsResponse {
  termsCtnt: string
}
export interface IdValidationRequest {
  loginId: string
}
export interface TvMemberCheckRequest {
  phoneNum: string
}
export interface TvMemberCheckResponse {
  loginIdList: string[]
}
export interface SmsCertificationRequest {
  phoneNum: string
}
export interface SmsCertificationResponse {
  seqNum: string
  vaildTm: number
}
export interface SmsVerificationRequest {
  certNum: string
  seqNum: string
}
export interface JoinRequest {
  phoneNum: string
  mktYes: string
  snsUserId?: string
  loginId: string
  custNm: string
  loginPwrd: string
  snsCode?: string
  refreshToken?: string
  ci?: string
  di?: string
  custNum?: number
  birth: string
  sexCd: string
  snsLinkCtnt?: string
  isCertPass: string
  isTvMember: string
  certSeq?: string
  prinfValidDur: string
}
export interface JoinResponse {
  loginId: string
  custNm: string
  custNum: number
}
export interface LoginRequest {
  loginId: string
  loginPassword: string
}
export interface LoginResponse {
  loginInfo: { loginYn: string; failCount: number; access_token: string; refresh_token: string }
}

////////////////////////////////////////////////////////////
// ID, PASSWORD 찾기
////////////////////////////////////////////////////////////
/**
 * ID, PASSWORD 찾기 - 검색 타입
 */
export type SearchType = 'EMAIL' | 'PHONE'

/**
 * ID 찾기 - 인증번호 요청 Request
 */
export interface IdSearchSendRequest {
  srchType: SearchType
  phoneNum?: string
  email?: string
  custNm: string
}

/**
 * ID 찾기 - 인증번호 요청 Response
 */
export interface IdSearchSendResponse {
  vaildTm: string | number
  seqNum: string | number
}

/**
 * ID 찾기 - 인증번호 확인 Request
 */
export interface IdSearchVerificationRequest {
  srchType: SearchType
  phoneNum?: string
  email?: string
  custNm: string
  certNum: number
  seqNum: number
}

/**
 * ID 찾기 - 인증번호 확인 Response
 */
export interface IdSearchVerificationResponse {
  loginIdList: Array<{ loginId: string }>
}

/**
 * PASSWORD 찾기 - 아이디 체크 Request
 */
export interface IdCheckRequest {
  loginId: string
}

/**
 * PASSWORD 찾기 - 아이디 체크 Response
 */
export type IdCheckResponse = Record<string, never>

/**
 * PASSWORD 찾기 - 인증번호 요청 Request
 */
export interface PasswordSearchSendRequest {
  srchType: SearchType
  phoneNum?: string
  email?: string
  custNm: string
  loginId: string
}

/**
 * PASSWORD 찾기 - 인증번호 요청 Response
 */
export interface PasswordSearchSendResponse {
  vaildTm: string | number
  seqNum: string | number
}

/**
 * PASSWORD 찾기 - 인증번호 확인 Request
 */
export interface PasswordSearchVerificationRequest {
  loginId: string
  certNum: number
  seqNum: number
}

/**
 * PASSWORD 찾기 - 인증번호 확인 Response
 */
export type PasswordSearchVerificationResponse = null

/**
 * PASSWORD 찾기 - 비밀번호 변경 Request TODO: 변경 예정
 */
export interface PasswordChangeRequest {
  loginId: string
  paramComb: string
}

/**
 * PASSWORD 찾기 - 비밀번호 변경 Response TODO: 변경 예정
 */
export type PasswordChangeResponse = null

////////////////////////////////////////////////////////////
// 휴면 아이디 - 개인정보 유효기간
////////////////////////////////////////////////////////////
/**
 * 휴면 아이디 - 개인정보 유효기간 조회 Request
 */
export interface ValidDurationRequest {
  accessToken?: string
  loginId?: string
}

/**
 * 휴면 아이디 - 개인정보 유효기간 조회 Response
 */
export interface ValidDurationResponse {
  validDur: string
}

/**
 * 휴면 아이디 - 개인정보 유효기간 변경 Request
 */
export interface DormantVaildDurationRequest {
  accessToken: string
  validDur: string
}

/**
 * 휴면 아이디 - 개인정보 유효기간 변경 Response
 */
export type DormantVaildDurationResponse = null

/**
 * 휴면 아이디 - 휴면 고객 복원 Request
 */
export interface CustRecativeRequest {
  accessToken: string
}

/**
 * 휴면 아이디 - 휴면 고객 복원 Response
 */
export type CustRecativeResponse = null

/**
 * 본인인증 약관 조회
 */
export interface SelfCertTermRequest {
  cmnctEnt: string
}

export interface SelfCertTermResponse {
  termsList: [
    {
      termsCtnt: string
      termsTitle: string
      termsApplyStartDd: string
    }
  ]
}

/**
 * 본인인증 인증번호 전송
 */
export interface SelfCertCertNumRequest {
  custNm: string
  birth: string
  hpno: string
  sex: string
  cmnctEnt: string
  pageNm: string
}
export interface SelfCertCertNumResponse {
  date: string
  certNum: string
  check1: string
  check2: string
  check3: string
}

/**
 * 본인인증 인증번호 재전송
 */
export interface SelfCertCertNumRetryRequest {
  certNum: string
  check1: string
  check2: string
  check3: string
  pageNm: string
}
export interface SelfCertCertNumRetryResponse {
  certNum: string
  check1: string
  check2: string
  check3: string
}

/**
 * 본인인증 인증번호 확인
 */
export interface SelfCertCertNumCheckRequest {
  smsNum: string
  certNum: string
  check1: string
  check2: string
  check3: string
  pageNm: string
}
export interface SelfCertCertNumCheckResponse {
  CI: string
  DI: string
  certNum: string
  check1: string
  check2: string
  check3: string
}
