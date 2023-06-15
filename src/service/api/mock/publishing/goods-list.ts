import { mockResponse } from '~/api/mock'

const goodsItemList = [
  {
    img: '//product-image.prod-nsmall.com/new/33169348_0.jpg?s=366x366&t=contain&q=80',
    name: '[남해바다] 손질한 통영 활 바다장어(특대) 1kg (2-3미) + 소스',
    originPrice: '20,900',
    dcPrice: '18,810',
    dcRate: '10%',
    url: '/',
    id: '00000001'
  },
  {
    img: '//product-image.prod-nsmall.com/new/26208132_0.jpg?s=366x366&t=contain&q=80',
    name: '순우리한우1++등급 꽃등심/채끝 외 특가모음',
    originPrice: '0',
    dcPrice: '9,900',
    dcRate: '9,900',
    url: '/',
    id: '00000002'
  },
  {
    img: '//product-image.prod-nsmall.com/new/30280367_0.jpg?s=320x320&t=contain&q=80',
    name: '23년수확 포근포근 햇 감자 3kg',
    originPrice: '12,900',
    dcPrice: '12,900',
    dcRate: '0',
    url: '/',
    id: '00000003'
  },
  {
    img: '//product-image.prod-nsmall.com/new/32033877_0.jpg?s=320x320&t=contain&q=80',
    name: '리치앤홈1+1 폭신폭신 빨아쓰는 클라우드 베개솜 S/L',
    originPrice: '12,900',
    dcPrice: '12,900',
    dcRate: '0',
    url: '/',
    id: '00000004'
  },
  {
    img: '//product-image.prod-nsmall.com/new/33039669_0.jpg?s=320x320&t=contain&q=80',
    name: '(23년 신규색상 출시)로티캠프 원터치 육각텐트+탈착식 헥사타프',
    originPrice: '109,900',
    dcPrice: '109,900',
    dcRate: '0',
    url: '/',
    id: '00000005'
  },
  {
    img: '//product-image.prod-nsmall.com/new/33069334_0.jpg?s=320x320&t=contain&q=80',
    name: '전인화의 쿡셀 더블 블랙큐브 프라이팬X3+가마솥세트(16cm+22cm)+뚜껑X3+28양수구이+바이마르 블랙빈자기14P+거치대+손잡이X2+귀리',
    originPrice: '199,900',
    dcPrice: '199,900',
    dcRate: '0',
    url: '/',
    id: '00000006'
  },
  {
    img: '//product-image.prod-nsmall.com/new/32291768_0.jpg?s=320x320&t=contain&q=80',
    name: '호주산 소갈비살200g4팩 외 택1/2세트구매신송쌈장+양파소스2팩추가배송',
    originPrice: '21,900',
    dcPrice: '21,900',
    dcRate: '0',
    url: '/',
    id: '00000007'
  },
  {
    img: '//product-image.prod-nsmall.com/new/33008425_0.jpg?s=320x320&t=contain&q=80',
    name: '쫄깃쫄깃한 포항 동해안 국내손질 반건조오징어 10마리/20마리',
    originPrice: '17,900',
    dcPrice: '17,900',
    dcRate: '0',
    url: '/',
    id: '00000008'
  }
]

/** @path /goodsList */
export const goodsList = mockResponse(goodsItemList)
