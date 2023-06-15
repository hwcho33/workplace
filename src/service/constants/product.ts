export const PRODUCT_CODE = {
  DETAIL_IMAGE_SIZE:
    // 모바일 상품이미지 = P (500 X 500)
    'Q',
  FREE_DELIVERY:
    // 배송비 구분 코드
    {
      PAID: '10', // 유료
      FREE: '20', // 무료
      PAY_ON_DELIVERY: '30' // 착불
    },
  REFUND:
    // 환불 코드
    {
      PRE: 'PRE', // 선
      POST: 'POST' // 후
    },
  REVIEW_CMD_TYPE:
    // 상품평 조회 구분값
    {
      GENERAL: '125' // 일반
    },
  APPROVED_STATUS:
    //승인 상태
    ['20', '30', '40'],
  GOODS_DISPLAY_TYPE:
    // 전시 유형
    {
      GENERAL_NO_SINGLE: '10', // 일반 -단품 없음
      GENERAL_SINGLE: '15', // 일반 - 단품 존재
      PACK: '20', // PACK 상품
      CHOICE: '25', // CHOICE 상품
      DELIVERY: '30', // 정기 배달
      FORMLESS_TRAVEL: '35', // 무형상품 - 여행
      FORMLESS_INSURANCE: '40', // 무형상품 - 보험
      FORMLESS_RENTAL: '45', // 무형상품 - 렌탈
      FORMLESS_GIFTISHOW: '50', // 무형상품 - 기프티쇼
      MOBILE_GIFTCARD: '55', // 무형 - 모바일상품권
      FORMLESS_FUNERAL: '56', // 무형상품 - 장례
      FORMLESS_PHONE: '57', // 무형상품 - 휴대폰
      FORMLESS_ADVERTISEMENT: '58', // 무형상품 - 광고
      PAPER_GIFTCARD: '60', // 실물 상품권
      GENERAL: ['10', '15', '20', '25', '30', '60'], // 일반상품
      NON_GENERAL: ['30', '55', '60'], // 비 일반 상품(제외하고 모두 일반 상품)
      CARD: ['55', '60'], // 카드(상품권) 상품
      CONSULTATION: ['35', '40', '45', '56', '57', '58', '59'], // 상담 상품
      NO_CREDITCARD_BENEFIT: ['35', '45', '55', '57', '60'] // 신용카드 무이자/일시불 혜택 정보 노출하지 않는 상품번호
    },
  DELIVERY_COST_CALCULATE:
    // 배송 비용 계산 유형
    {
      SHIP_PLACE: '10', // 출고지 기준
      PRODUCT: '20', // 상품 단위
      PACKAGE: '30' // 묶음 배송 단위
    },
  CARD_SEND_TYPE:
    // 모바일 상품권 발송 방식
    {
      MMS: '200', // 휴대폰 문자메시지(MMS)
      EMAIL: '300' // 이메일
    },
  CAT_GB:
    // 몰 구분
    {
      FOOD: '10', // 식품
      HEALTH_FOOD: '20', // 건강 식품
      CLOTHING_AND_SHOES: '30', // 의류, 슈즈
      FASHION_GOODS_AND_BEDDING: '31', // 패션잡화, 침구류
      ETC: '39', // 기타 등
      MEDICAL: '40', // 의료기기
      EVALUATION: ['10', '20', '30', '40'], // 리뷰 평가항목 다른 타입
      FOOD_GROUP: ['10', '20', '40'] // 식품 상품군
    },
  EVALUATION_ITEMS:
    // 상품평 상세 평가 항목
    {
      10: ['배송', '가격', '맛', '신선도'], // 식품
      20: ['배송', '가격', '품질'], // 건강 식품
      30: ['배송', '가격', '소재', '디자인'], // 의류, 슈즈
      39: ['배송', '가격', '품질', '디자인'], // 기타
      40: ['배송', '가격', '견고함', '디자인'] // 의료기기
    },
  EVALUATION_ANSWER:
    // 카테고리별 평가 항목 질문/답변
    {
      DELIVERY: ['빨라요', '보통이예요'],
      PRICE: ['싸게 샀어요', '적당해요', '비싼 편이에요'],
      TASTE: ['맛있어요', '보통이예요', '아쉬워요'],
      FRESHNESS: ['신선해요', '보통이에요', '생각보다 별로예요'],
      QUIALITY: ['정말 좋아요', '보통이에요', '생각보다 별로예요'],
      INTAKE: ['먹기 편해요', '보통이에요', '먹기 불편해요'],
      SOLIDITY: ['생각보다 견고해요', '보통이에요', '생각보다 부실해요'],
      DESIGN: ['아주 맘에 들어요', '보통이에요', '생각보다 별로예요'],
      MATERIALS: ['정말 좋아요', '보통이에요', '생각보다 별로예요'],
      SIZE: ['예상보다 커요', '정사이즈예요', '예상보다 작아요'],
      COLOR: ['화면보다 밝아요', '화면과 비슷해요', '화면보다 어두워요']
    },
  CHANNEL_ID: {
    // 방송 매체(busChnId, buschnId)
    TV: 'TV',
    SHOPPLUS: 'CTCOM',
    INTERNET: 'INT',
    MOBILE: 'MOBIL',
    SHOPPING_BOOK: 'SB'
  }
}
