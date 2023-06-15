import { TemplateTypeBase } from '../index'

// 와이드_상품_리스트
export type T_PD_0001 = {
  groupTitle: string
  content: {
    title: string
    price: string
    discountPrice: string
    discountPercent: string
    benefit: string // 10%할인 | 10%적립
    emblem: string
    label: string[]
    productRating: string
    purchaseCount: number
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// 정방형_상품_리스트
export type T_PD_0002 = {
  groupTitle: string
  content: {
    title: string
    price: string
    discountPrice: string
    discountPercent: string
    label: string[]
    productRating: string
    purchaseCount: number
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// 슬라이드_정방형_상품_리스트
export type T_PD_0003 = {
  groupTitle: string
  content: {
    title: string
    price: string
    discountPrice: string
    discountPercent: string
    label: string[]
    productRating: string
    purchaseCount: number
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// 그룹_상품_리스트
export type T_PD_0004 = {
  groupTitle: string
  mainImageURL: string
  subImageURL: string[]
  content: {
    title: string
    price: string
    discountPrice: string
    discountPercent: string
    label: string[]
    productRating: string
    purchaseCount: number
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// 기본_리스트_상품
export type T_PD_0005 = {
  content: {
    title: string
    price: string
    discountPrice: string
    discountPercent: string
    emblem: string
    label: string[]
    productRating: string
    productReviewCount: number
    purchaseCount: number
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// 슬라이드_테마_상품_리스트
export type T_PD_0006 = {
  groupTitle: string
  groupSubTitle: string
  content: {
    title: string
    price: string
    discountPrice: string
    discountPercent: string
    emblem: string
    productRating: string
    productReviewCount: number
    purchaseCount: number
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// 타임딜_와이드_상품
export type T_PD_0007 = {
  groupTitle: string
  groupSubTitle: string
  timer: string
  content: {
    title: string
    price: string
    discountPrice: string
    discountPercent: string
    benefit: string
    emblem: string
    productRating: string
    productReviewCount: number
    purchaseCount: number
    salesStatus: string // 판매상태
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// 타임딜_정방형_상품
export type T_PD_0008 = {
  groupTitle: string
  groupSubTitle: string
  timer: string
  content: {
    title: string
    price: string
    discountPrice: string
    discountPercent: string
    benefit: string
    emblem: string
    productRating: string
    productReviewCount: number
    purchaseCount: number
    salesStatus: string // 판매상태
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// [T_PD_0009] 영상_와이드_상품 > 템플릿 삭제 (2023.5.10/1차 집체검토)

// 기본_리스트_상품
export type T_PD_0010 = {
  groupTitle: string
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

// 알림_원형_상품_리스트
export type T_PD_0011 = {
  groupTitle: string
  content: {
    title: string
    price: string
    imageURL: string
    goURL: string
    isNotifyActive: boolean
  }[]
} & TemplateTypeBase
