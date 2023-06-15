/**
 * @description
 * `주문` 상태 코드
 * - D: 결제대기
 * - M: 결제완료, 신청완료
 * - T: 주문전달
 * - I: 상품 준비중
 * - O: 배송중
 * - S: 배송완료
 */
export const ORDER = {
  STATUS: {
    PAYMENT_WAIT: 'D',
    PAYMENT_COMPLETE: 'M',
    ORDER_SEND: 'T',
    PRODUCT_PREPARE: 'I',
    SHIPPING: 'O',
    DELIVERY_COMPLETE: 'S'
  }
}

/**
 * @description
 * `선물하기` 상태 코드
 * - 10: 수락대기
 * - 20: 수락완료
 * - 30: 선물거절
 * - 40: 주문자 취소
 * - 50: 자동(전산) 취소
 */
export const PRESENT = {
  STATUS: {
    ACCEPT_WAIT: '10',
    ACCEPT_COMPLETE: '20',
    ACCEPT_REFUSAL: '30',
    BUYER_CANCEL: '40',
    AUTO_CANCEL: '50'
  }
}
