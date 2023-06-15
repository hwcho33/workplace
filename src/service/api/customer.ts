import { request } from '@/utils/request'
import { customer } from '~/api/index'
import type {
  TermsRequest,
  TermsResponse,
  IdValidationRequest,
  TvMemberCheckRequest,
  TvMemberCheckResponse,
  SmsCertificationRequest,
  SmsCertificationResponse,
  SmsVerificationRequest,
  JoinRequest,
  JoinResponse,
  LoginRequest,
  LoginResponse,
  IdSearchSendRequest,
  IdSearchSendResponse,
  IdSearchVerificationRequest,
  IdSearchVerificationResponse,
  IdCheckRequest,
  IdCheckResponse,
  PasswordSearchSendRequest,
  PasswordSearchSendResponse,
  PasswordSearchVerificationRequest,
  PasswordSearchVerificationResponse,
  PasswordChangeRequest,
  PasswordChangeResponse,
  SelfCertTermRequest,
  SelfCertTermResponse,
  SelfCertCertNumRequest,
  SelfCertCertNumResponse,
  SelfCertCertNumRetryRequest,
  SelfCertCertNumRetryResponse,
  SelfCertCertNumCheckRequest,
  SelfCertCertNumCheckResponse,
  ValidDurationRequest,
  ValidDurationResponse,
  DormantVaildDurationRequest,
  DormantVaildDurationResponse,
  CustRecativeRequest,
  CustRecativeResponse
} from '~/api/types/customer'

import type { NsApiResponse } from '~/api/types/index'

export function getTermsOfUse(params: TermsRequest): Promise<NsApiResponse<TermsResponse>> {
  return request.get({
    url: `${customer}/admission/terms`,
    params
  })
}

export function getVerifiedId(params: IdValidationRequest): Promise<NsApiResponse<null>> {
  return request.get({
    // url: '/test***/idValidation',
    url: `${customer}/member/information/id-validation`,
    params
  })
}

export function getTvMemberCheck(params: TvMemberCheckRequest): Promise<NsApiResponse<TvMemberCheckResponse>> {
  return request.get({
    // url: '/test***/tvmemberCheck',
    url: `${customer}/admission/tvmember-check`,
    params
  })
}

export function smsCertification(data: SmsCertificationRequest): Promise<NsApiResponse<SmsCertificationResponse>> {
  return request.post({
    url: '/test***/smsCertification',
    // url: `${customer}/admission/sms-certification`,
    data
  })
}

export function smsVerification(params: SmsVerificationRequest): Promise<NsApiResponse<null>> {
  return request.get({
    url: '/test***/smsVerification',
    // url: `${customer}/admission/sms-verification`,
    params
  })
}

export function join(data: JoinRequest): Promise<NsApiResponse<JoinResponse>> {
  return request.post({
    // url: '/test***/join',
    url: `${customer}/admission/join`,
    data
  })
}

export function login(data: LoginRequest): Promise<NsApiResponse<LoginResponse>> {
  return request.post({
    url: `${customer}/login`,
    data
  })
}

////////////////////////////////////////////////////////////
// ID, PASSWORD 찾기
////////////////////////////////////////////////////////////
/**
 * ID 찾기 - 인증번호 요청
 */
export function postIdSearchSend(data: IdSearchSendRequest): Promise<NsApiResponse<IdSearchSendResponse>> {
  return request.post({
    // url: `${customer}/member/id-search-send`,
    url: '/test***/idSearchSend',
    data
  })
}

/**
 * ID 찾기 - 인증번호 확인
 */
export function getIdSearchVerification(
  params: IdSearchVerificationRequest
): Promise<NsApiResponse<IdSearchVerificationResponse>> {
  return request.get({
    // url: `${customer}/member/id-search-verification`,
    url: '/test***/idSearchVerification',
    params
  })
}

/**
 * PASSWORD 찾기 - 아이디 체크
 */
export function getIdCheck(params: IdCheckRequest): Promise<NsApiResponse<IdCheckResponse>> {
  return request.post({
    // url: `${customer}/member/id-check`,
    url: '/test***/idCheck',
    params
  })
}

/**
 * PASSWORD 찾기 - 인증번호 요청
 */
export function postPasswordSearchSend(
  data: PasswordSearchSendRequest
): Promise<NsApiResponse<PasswordSearchSendResponse>> {
  return request.post({
    // url: `${customer}/member/password-search-send`,
    url: '/test***/passwordSearchSend',
    data
  })
}

/**
 * PASSWORD 찾기 - 인증번호 확인
 */
export function getPasswordSearchVerification(
  params: PasswordSearchVerificationRequest
): Promise<NsApiResponse<PasswordSearchVerificationResponse>> {
  return request.get({
    // url: `${customer}/member/password-search-verification`,
    url: '/test***/passwordSearchVerification',
    params
  })
}

/**
 * PASSWORD 찾기 - 비밀번호 변경 TODO: API 변경 예정
 */
export function putPasswordChange(data: PasswordChangeRequest): Promise<NsApiResponse<PasswordChangeResponse>> {
  return request.put({
    // url: `${customer}/member/password-change`,
    url: '/test***/passwordChange',
    data
  })
}

////////////////////////////////////////////////////////////
// 휴면 아이디 - 개인정보 유효기간
////////////////////////////////////////////////////////////

/**
 * 개인정보 유효기간 조회
 */
export function getValidDuration(params: ValidDurationRequest): Promise<NsApiResponse<ValidDurationResponse>> {
  return request.get({
    // url: `${customer}/member/information/valid-duration`,
    url: '/test***/validDuration',
    params
  })
}

/**
 * 개인정보 유효기간 변경
 */
export function postDormantVaildDuration(
  data: DormantVaildDurationRequest
): Promise<NsApiResponse<DormantVaildDurationResponse>> {
  return request.get({
    // url: `${customer}/member/dormant/dormant-vaild-duration`,
    url: '/test***/dormantVaildDuration',
    data
  })
}

/**
 * 휴면 고객 복원
 */
export function putCustRecative(data: CustRecativeRequest): Promise<NsApiResponse<CustRecativeResponse>> {
  return request.get({
    // url: `${customer}/member/dormant/cust-recative`,
    url: '/test***/custRecative',
    data
  })
}

/**
 * 본인인증 약관 조회 - 본인인증 약관을 조회한다.
 */
export function getSelfCertTerm(params: SelfCertTermRequest): Promise<NsApiResponse<SelfCertTermResponse>> {
  // return request.get({
  //   url: `${customer}/member/selfCert-term`,
  //   params
  // })
  return request.get({
    url: '/test***/selfCertTerm',
    params
  })
}

/**
 * 본인인증 인증번호 전송
 */
export function postSelfCertCertNum(data: SelfCertCertNumRequest): Promise<NsApiResponse<SelfCertCertNumResponse>> {
  return request.post({
    // url: `${customer}/member/selfCert-certNum`,
    url: '/test***/selfCertCertNum',
    data
  })
}

/**
 * 본인인증 인증번호 재전송
 */
export function postSelfCertCertNumRetry(
  data: SelfCertCertNumRetryRequest
): Promise<NsApiResponse<SelfCertCertNumRetryResponse>> {
  return request.post({
    // url: `${customer}/member/selfCert-certNum-retry`,
    url: '/test***/selfCertCertNumRetry',
    data
  })
}

/**
 * 본인인증 인증번호 확인
 */
export function postSelfCertCertNumCheck(
  data: SelfCertCertNumCheckRequest
): Promise<NsApiResponse<SelfCertCertNumCheckResponse>> {
  return request.post({
    // url: `${customer}/member/selfCert-certNum-check`,
    url: '/test***/selfCertCertNumCheck',
    data
  })
}
