import { TemplateTypeBase } from '../index'

// 더보기_링크
export type T_BT_0001 = {
  title: string
  goURL: string
} & TemplateTypeBase

// 소카테고리_링크
export type T_BT_0002 = {
  content: {
    title: string
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase
