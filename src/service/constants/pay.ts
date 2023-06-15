export const PAY_TYPE = {
  CREDIT_CARD: '100',
  DEPOSIT_WITHOUT_BANKBOOK: '200',
  REALTIME_ACCOUNT_TRANSFER: '300',
  MOBILE: '400',
  PAYCO: '1400',
  NAVER_PAY: '1500',
  NS_PAY_CREDIT_CARD: '1600',
  NS_PAY_ACCOUNT_TRANSFER: '1700',
  INFO: {
    CREDIT_CARD: { CODE: '100', EN: 'CREDIT_CARD', KO: '신용카드' },
    DEPOSIT_WITHOUT_BANKBOOK: {
      CODE: '200',
      EN: 'DEPOSIT_WITHOUT_BANKBOOK',
      KO: '무통장입금'
    },
    REALTIME_ACCOUNT_TRANSFER: {
      CODE: '300',
      EN: 'REALTIME_ACCOUNT_TRANSFER',
      KO: '실시간계좌이체'
    },
    MOBILE: { CODE: '400', EN: 'MOBILE', KO: '휴대폰' },
    PAYCO: { CODE: '1400', EN: 'PAYCO', KO: '페이코' },
    NAVER_PAY: { CODE: '1500', EN: 'NAVER_PAY', KO: '네이버페이' },
    NS_PAY_CREDIT_CARD: {
      CODE: '1600',
      EN: 'NS_PAY_CREDIT_CARD',
      KO: 'NS페이 신용카드'
    },
    NS_PAY_ACCOUNT_TRANSFER: {
      CODE: '1700',
      EN: 'NS_PAY_ACCOUNT_TRANSFER',
      KO: 'NS페이 계좌이체'
    }
  },
  CODES: ['100', '200', '300', '400', '1400', '1500', '1600', '1700']
}

export const PAY_ASSIST = {
  DEPOSIT_AMT: '500',
  RESERVED_AMT: '600',
  NS_GIFT_CARD: '700',
  OK_CASHBAG: '800',
  NETI_WELL: '900',
  HAPPY_MONEY: '1000',
  ANNUAL_COUPONS: '1100',
  INFO: {
    DEPOSIT_AMT: {
      CODE: '500',
      EN: 'DEPOSIT_AMT',
      KO: '예치금',
      DEFINE_VALUE_KEY: 'depositAmount'
    },
    RESERVED_AMT: {
      CODE: '600',
      EN: 'RESERVED_AMT',
      KO: '적립금',
      DEFINE_VALUE_KEY: 'reservedAmt'
    },
    NS_GIFT_CARD: {
      CODE: '700',
      EN: 'NS_GIFT_CARD',
      KO: 'NS상품권',
      DEFINE_VALUE_KEY: 'giftCardAmount'
    },
    OK_CASHBAG: {
      CODE: '800',
      EN: 'OK_CASHBAG',
      KO: 'OK캐쉬백',
      DEFINE_VALUE_KEY: 'okCashbag'
    },
    NETI_WELL: {
      CODE: '900',
      EN: 'NETI_WELL',
      KO: '네티웰',
      DEFINE_VALUE_KEY: 'netiWell'
    },
    HAPPY_MONEY: {
      CODE: '1000',
      EN: 'HAPPY_MONEY',
      KO: '해피머니',
      DEFINE_VALUE_KEY: 'happyMoney'
    },
    ANNUAL_COUPONS: {
      CODE: '1100',
      EN: 'ANNUAL_COUPONS',
      KO: '연간할인권',
      DEFINE_VALUE_KEY: 'annualCoupons'
    }
  },
  CODES: ['500', '600', '700', '800', '900', '1000', '1100']
}
