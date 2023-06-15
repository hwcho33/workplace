export const SYSTEM = {
  IS_END: '종료하시겠습니까?',
  APP_NAME: 'NS홈쇼핑',
  WAS_ERROR: '서비스가 지연되고 있습니다. 잠시 후 시도하시기 바랍니다.',
  UNRESPONSE_HOST: '서버로부터 응답이 없습니다. 통신상태를 확인 후 다시 시도해 주십시오.',
  REQUEST_TIMEOUT: '서버로부터 응답이 없습니다. 통신상태를 확인 후 다시 시도해 주십시오.',
  PROCEDURE_ERROR: '데이터를 불러오는 중 문제가 발생했습니다. 잠시 후 다시 시도해 주십시오.',
  UNSUPPORTED_VERSION: '지원하지 않는 버전입니다. 어플리케이션 업데이트 후 사용하십시오.',
  TRANSACTION_FAIL: '서비스가 지연되고 있습니다. 잠시 후 다시 시도하여 주십시오.',
  TRANSACTION_ERROR: '서버와 통신이 원할하지 못합니다. 잠시 후 다시 시도해 주십시오.',
  UNEXPECTED_ERROR: '예기치 않은 문제가 발생했습니다. 잠시 후 다시 시도해 주십시오.',
  LOGIN_REQUIRED: '로그인 필요한 메뉴입니다.',
  DIRECT_UPDATE: '업데이트를 사용할 수 있습니다.'
}

export const EMAIL = {
  MESSAGE: {
    SERVER_ERROR: '서버 통신 오류가 발생했습니다.',
    AFTER_SEND_CODE: '인증 메일이 발송 되었습니다.',
    TIMEOUT: '인증번호 입력 시간이 초과하였습니다. 다시 시도해 주세요',
    INVALID_INPUT: '이메일 형식이 올바르지 않습니다.',
    DUPLICATED_EMAIL: '이미 가입된 이메일입니다.',
    EMPTY_VERIFICATION_CODE: '인증번호를 입력해주세요.',
    INVALID_VERIFICATION_CODE: '인증번호를 다시 한 번 확인 후 입력해주세요.'
  },
  BUTTON_NAME: '인증메일 전송'
}

export const LOGIN = {
  MESSAGE: {
    '00': '로그인에 성공하였습니다.',
    10: '로그인에 성공하였습니다.',
    20: '아이디 또는 비밀번호를 다시 확인해 주세요.',
    21: 'SNS간편가입 아이디입니다. SNS 로그인(네이버, 카카오, 페이코)를 이용해주세요.',
    30: '당사의 운영방침에 따라 쇼핑몰 이용이 어렵습니다. 감사합니다.',
    40: '고객님께서는 탈퇴를 신청하셨습니다. 탈퇴 신청을 취소하시려면 고객센터를 이용해 주세요',
    50: '로그인에 성공하였습니다.',
    60: '고객님의 휴면계정이 활성화 되었습니다. 이제 Nsmall에서 다양한 혜택을 제공 받으실 수 있습니다. Nsmall은 앞으로 고객님의 개인정보를 소중히 관리하고, 편리한 서비스를 제공할 수 있도록 더 노력하겠습니다. 감사합니다.',
    70: '휴면 해제하기가 완료되지 못했습니다. 고객센터(1800-0770)를 통해 문의 바랍니다.',
    80: '정보보호를 위해 자동입력 방지문자를 함께 입력해 주세요.',
    90: '네이버 계정 연동이 완료되었습니다!',
    100: '페이코 계정 연동이 완료되었습니다!',
    901: 'ID가 형식에 맞지 않습니다.',
    902: '아이디를 입력해 주세요.',
    903: '비밀번호를 입력해 주세요.',
    904: '아이디를 정확하게 입력해 주세요.',
    '000': ''
  }
}

export const MEMBER = {
  MESSAGE: {
    HISTORYBACK_TITLE: '가입을 취소 하시겠습니까?​',
    HISTORYBACK: '입력하신 회원가입 정보가 모두 삭제됩니다.',
    EMAILTITLE: '아이디 입력',
    EMAILPLACEHOLDER: '이메일 주소(아이디)',
    EMP_MAILID_PLACEHOLDER: '이메일 아이디',
    LOGINIDPLACEHOLDER: '아이디 또는 이메일주소',
    JOIN_LOGINIDPLACEHOLDER: 'NSmall 아이디 또는 이메일',
    ORDERNUMTITLE: '주문번호 입력',
    ORDERNUMPLACEHOLDER: '주문번호',
    PASSTITLE: '비밀번호 입력',
    PASSPLACEHOLDER: '비밀번호',
    JOIN_PASSPLACEHOLDER: 'NSmall 비밀번호',
    PASSCHANGETITLE: '새로운 비밀번호',
    PASSCHANGEPLACEHOLDER: '새 비밀번호 입력',
    PASSCHANGECONFIRMTITLE: '비밀번호 확인',
    PASSCHANGECONFIRMPLACEHOLDER: '새 비밀번호 확인',
    NAMETITLE: '이름 입력',
    NAMEPLACEHOLDER: '이름',
    PHONETITLE: '휴대전화 입력',
    PHONEPLACEHOLDER: "휴대폰 번호('-' 없이 입력)",
    PHONEPLACEHOLDER02: "등록한 휴대폰 번호('-' 없이 입력)",
    PHONEPLACEHOLDER03: '휴대폰번호 입력',
    PHONEAUTHTITLE: '인증번호 4자리',
    PHONEAUTHPLACEHOLDER: '인증번호 4자리',
    EMAIL01: '이메일 형식이 올바르지 않습니다.',
    EMAIL02: '아이디(이메일)를 입력해 주세요.',
    EMAIL03: '휴면계정 아이디(이메일)입니다. 다른 이메일을 입력해 주세요.',
    EMAIL04: '이미 가입된 이메일 주소입니다. 다른 이메일을 입력해 주세요.',
    EMAIL05: ' 아이디(이메일)로 가입된 휴대폰 번호 입니다.<br>신규 가입하실 경우, 휴대폰 인증해 주세요.',
    EMAIL06: '이메일주소 입력',
    EMAIL07: '이메일',
    // EMAIL08: '입력하신 이메일로 계정정보를 찾을 수 없습니다.<br>확인 후 다시 이용해 주세요.',
    EMAIL09: '이메일을 입력해 주세요.',
    EMAIL10: '이미 가입된 이메일입니다.<br>다른 이메일을 입력해 주세요.',
    EMAIL11: '연동 할 메일주소를 입력해 주세요.',
    EMAIL12: '가입되지 않은 아이디 입니다. 확인 후 다시 입력해 주세요.',
    EMAIL13: '4~40자 이내로 입력해 주세요.',
    EMAIL14: ' 아이디(이메일)로 가입된 휴대폰 번호 입니다.',
    PASS01: '영문 숫자 특수문자 2가지 이상 조합 8~16자',
    PASS02: '비밀번호는 8~16자 이내여야 합니다.',
    PASS03: '비밀번호가 일치하지 않습니다.',
    PASS04: '비밀번호를 입력해 주세요.',
    PASS05: '아이디 또는 비밀번호를 다시 확인해 주세요.',
    PASS06: '비밀번호를 다시 확인해주세요.',
    PASS07: '주문번호 또는 비밀번호를 다시 확인해 주세요.',
    NAME01: '이름을 정확히 입력해 주세요.',
    NAME02: '이름은 두자 이상 입력해주세요.',
    NAME03: '이름은 한글과 영문만 입력 가능합니다.',
    NAME04: '이름을 입력해 주세요.',
    PHONE00: '휴대폰 번호를 입력해 주세요.',
    PHONE01: '입력하신 번호로 인증번호가 발송되었습니다.',
    PHONE02: '인증번호를 다시 한번 확인 후 입력해 주세요.',
    PHONE03: '인증되었습니다. 가입을 진행해 주세요.',
    PHONE04: '이미 인증되었습니다.',
    PHONE05: '인증 번호가 이미 발송되었습니다.\n다시 받으시겠습니까?',
    PHONE06: '인증 번호가 잘못되었습니다.',
    PHONE07: '먼저 전송 버튼을 눌러주세요.',
    PHONE08: '인증번호를 입력해주세요.',
    PHONE09: '인증시간이 초과 되었습니다.\r\n다시한번 전송버튼을 클릭해주세요.',
    PHONE10: '인증번호 입력 시간이 초과하였습니다.<br>다시 시도해 주세요.',
    PHONE11: '인증되었습니다.',
    PHONE12: '휴대폰 번호를 정확하게 입력해 주세요.',
    PHONE13: '휴대폰 번호를 입력해 주세요.',
    PHONE14: '휴대폰 인증을 해주시기 바랍니다.',
    PHONE15: '휴대폰인증이 정상적으로 진행되지 않았습니다. <br> 다시 진행해 주시기 바랍니다.',
    PHONE16:
      'TV회원으로 가입했다가 탈퇴한 번호로 본인인증이 필요합니다. 통합가입을 원하시면 모바일 회원가입 후 콜센터로 문의해주세요.',
    PHONE17: '입력한 휴대폰번호와 \r\n 본인인증한 휴대폰번호가 다릅니다. \r\n 다시 확인해 주세요.',
    PHONE18:
      'NSmall에 이미 가입된 휴대폰 번호입니다. <br> <span>회원가입 문의사항은 NSmall 고객센터에서 안내해드리겠습니다.</span>',
    AUTHFAILMSG: '인증번호를 다시 한번 확인 후 입력해 주세요.',
    AUTHEMAILBTNNAME: '인증메일 전송',
    AUTHEMAILRESENDBTNNAME: '인증메일 재발송',
    AUTHBTNNAME: '인증번호 전송',
    AUTHRESENDBTNNAME: '인증번호 재발송',
    AUTHSENDNAME01: '전송',
    AUTHSENDNAME02: '재전송',
    AUTHSENDMSG: '인증 번호가 발송 되었습니다.',
    AUTHSENDMSG2: '인증 메일이 발송 되었습니다.',
    AUTHSENDERRMSG: '입력하신 정보와 일치하는 회원정보가 없습니다.',
    AUTHSENDERRMSG2: '현재 사용 중인 휴대폰 번호입니다.',
    AUTHSENDERRMSG3: '인증을 해주세요.',
    AUTHSENDERRMSG4: '회원정보와 본인인증 휴대폰 번호가 \r\n 다릅니다. 다시 확인해 주세요.',
    AUTHSENDERRMSG5: '회원정보와 본인인증 고객명이 \r\n 다릅니다. 다시 확인해 주세요.',
    AUTHEMAILRESENDMSG: '인증메일이 이미 발송되었습니다.\n다시 받으시겠습니까?',
    TVMEMBERMSG:
      'TV회원으로 가입된 번호로 본인인증이 필요합니다.<br>통합가입을 원하시면 모바일 회원가입 후 콜센터로 문의해주세요.',
    TVMEMBERCERTMSG: 'TV회원으로 가입된 번호로 본인인증이 필요합니다.<br>통합가입을 위해 본인인증해주세요.',
    TVMEMBERPOPUPMSG:
      '일치하는 고객이 없거나 다수입니다.<br>통합가입을 원하시면 모바일 회원가입 후<br>콜센터로 문의해주세요.',
    AGREEAUTHSUCCESS: '약관 동의가 완료됐습니다.',
    BIRTH01: '생년월일',
    BIRTH02: '생년월일 8자리 (예:19840123)',
    BIRTH03: '숫자 8자리로 입력해 주세요.',
    BIRTH04: '숫자만 입력하실 수 있습니다.',
    BIRTH05: '14세 미만은 회원가입이 불가합니다.',
    BIRTH06: '생년월일을 다시 한 번 확인해 주세요.',
    BIRTH07: '성별 및 생년월일을 입력해 주세요.',
    BIRTH08: '생년월일을 입력해 주세요.',
    GENDER01: '성별을 선택해 주세요.',
    GENDER02: '본인인증된 계정이므로 변경할 수 없습니다.',
    ORDERNUM01: '주문번호를 입력해 주세요.',
    ORDERNUM02: '주문번호를 정확히 입력해 주세요.',
    DORMANT_MSG: '휴면계정이 활성화 되었습니다.',
    PASSWORD_CHANGE_SUCCESS: '비밀번호가 변경되었습니다.\n다시 로그인해주세요.',
    MESSAGE_MAXLENGTH_OVER: '자를 초과 할 수 없습니다.',
    SAVE_LATER_TITLE: '선택된 정보가 있습니다.',
    SAVE_LATER: '입력하지 않고 다음에 진행하시겠습니까?',
    SAVE_LATER_NOW: '선택정보 저장',
    NEXT_TIME: '다음에 하기',
    DORMANT_TITLE: '휴면 아이디 재사용',
    DORMANT_MESSAGES:
      '회원님의 계정은 1년이상 로그인 되지 않아 휴면계정으로 전환되었습니다.\n아래 버튼을 클릭하시면 휴면계정해제 되어 서비스 이용이 가능합니다.',
    DORMANT_BUTTON: '휴면해제하기',
    RE_LOGIN_MESSAGES: '다시 로그인해주세요.',
    NO_MEMBER_RESULT_ERROR01:
      '고객님의 요청에 의해 삭제된 주문건입니다.\n자세한 문의사항은 고객센터(1688-7700)으로 문의 주세요.',
    NO_MEMBER_RESULT_ERROR02: '주문번호 또는 비밀번호를 다시 확인해 주세요.',
    EMPLOYEER_API_FAIL: '죄송합니다. 인증 메일을 발송하지 못했습니다. 잠시 후 다시 인증요청을 해주시면 감사하겠습니다.',
    SNS_PASSWORD_IS_REGISTERED: '비밀번호가 등록되지 않은 아이디입니다.\nSNS 로그인을 이용해 주세요.',
    SAVE: '저장 되었습니다.',
    CHANGE: '정상적으로 변경 되었습니다.',
    AGREE_CHANGE: '수신 설정이 정상적으로 변경되었습니다.',
    SERVER_COMMUNICATION: '서버 통신 오류가 발생했습니다.',
    SERVICE_PROC_ERROR: '서비스 연동중 문제가 발생하였습니다.메인화면으로 이동합니다.',
    SERVICE_PROC_ERROR_COMMON: '일시적인 서비스 장애로 인하여 서비스 이용이 원활하지 않습니다.',
    PROCEDURE_ERROR: '데이터를 불러오는 중 문제가 발생했습니다.\n잠시 후 다시 시도해 주십시오.',
    SYSTEM_ERROR: '잠시 후 다시 시도해 주세요',
    SUBMIT_CONFIRM_MSG:
      '탈퇴 시 보유하고 계신 적립금, 톨, 쿠폰 및 환급 미신청 예치금은 자동 소멸되며 다시 복구할 수 없습니다.\n 정말로 탈퇴하시겠습니까?',
    SUBMIT_VALIDATION: {
      REASON_CHECK: '탈퇴 사유를 선택해 주세요.',
      AGREE_CHECK: '회원탈퇴 안내를 모두 확인하신 후 탈퇴에 동의해 주세요.',
      DEPOSIT_CHECK: '환급계좌 정보를 입력해 주세요.'
    },
    ERROR_MSG: {
      ML01: '정상적으로 처리되지 않았습니다.\n잠시후 다시 시도해주세요.',
      ML02: '진행중인 주문 및 1:1 문의가 있습니다.\n확인 후 다시 시도해 주세요.',
      ML03: '진행중인 주문이 있습니다.\n확인 후 다시 시도해 주세요.',
      ML04: '진행중인 1:1 문의가 있습니다.\n확인 후 다시 시도해 주세요.',
      ML05: 'NS상품권 잔액을 보유하고 계신 고객님은 고객센터(1800-0770)를 통해서 회원 탈퇴가 가능합니다.',
      ML06: '고객센터(1800-0770)를 통해서 회원 탈퇴가 가능합니다.'
    },
    NO_POSSIBLE_LEAVE:
      '고객 서비스가 완료되지 않은 경우나, 배송/반품 등의 거래가 진행 중인 경우라면 진행 중인 거래를 처리 후 회원 탈퇴를 신청해 주시기 바랍니다.'
  }
}

export const PHONE = {
  MESSAGE: {
    SERVER_ERROR: '서버 통신 오류가 발생했습니다.',
    AFTER_SEND_CODE: '입력하신 번호로 인증번호가 발송되었습니다.',
    TIMEOUT: '인증번호 입력 시간이 초과하였습니다. 다시 시도해 주세요.',
    INVALID_INPUT: '인증번호를 다시 한번 확인 후 입력해 주세요.',
    EMPTY_VERIFICATION_CODE: '인증번호를 입력해주세요',
    SUCCESS: '인증되었습니다. 가입을 진행해 주세요.',
    EXPIRED: '인증이 만료 되었습니다. 재인증 해주세요.'
  }
}

export const PRODUCT = {
  SOLDOUT: '품절되었습니다. 빠른 시간 내에 상품을 준비하겠습니다.',
  VIP_ONLY: 'VIP회원 전용 상품입니다.',
  LIVE_ONLY: '해당 상품은 방송시간 중에만 구매하실 수 있습니다.',
  NO_REVIEW: '등록된 상품평이 없습니다.'
}
