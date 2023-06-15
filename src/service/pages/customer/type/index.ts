export interface JoinFormUser {
  [key: string]: string | number | boolean
  nIntervId: number
  isResendCnt: number
  personalInfo: boolean
  marketingAgree: boolean
  openTermLayer: boolean
  isFocusStatusOfUserId: boolean
  isShowPw: boolean
  isValidPw: boolean
  isValidName: boolean
  isValidBirth: boolean
  isResend: boolean
  verifiedIdCode: string
  pwErrorMessage: string
  telErrorMessage: string
  tvMemberCheckCode: string
  smsCertificationCode: string
  smsVerificationCode: string
  smsVerificationErrorMessage: string
  birthErrorMessage: string
  time: string
  seqNum: string
  termsOfUse: string
}
