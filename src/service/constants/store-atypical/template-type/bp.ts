import { TemplateTypeBase } from '../index'

// 슬라이드_원형_XS_배너
export type T_BP_0001 = {
  groupTitle: string
  groupImageURL: string
  groupGoURL: string
  groupBgColor: string
  content: {
    title: string
    price: string
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// 슬라이드_M_배너_상품연결조합
export type T_BP_0002 = {
  groupTitle: string
  groupImageURL: string
  groupGoURL: string
  groupBgColor: string
  content: {
    title: string
    price: string
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// M_배너_상품연결조합
export type T_BP_0003 = {
  groupTitle: string
  groupSubTitle: string
  groupImageURL: string
  groupGoURL: string
  groupBgColor: string
  content: {
    title: string
    price: string
    discountPrice: string
    discountPercent: string
    label: string[]
    productRating: string
    productReviewCount: number
    purchaseCount: number
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase
