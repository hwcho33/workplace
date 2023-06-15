import { TemplateTypeBase } from '../index'

// 탑메뉴_내비
export type T_NV_0001 = {
  content: {
    routeName: string
    title: string
    subTitle: string
    isDot: boolean
    goURL: string
  }[]
} & TemplateTypeBase

// 앵커_내비
export type T_NV_0002 = {
  content: {
    title: string
    code: string
  }[]
} & TemplateTypeBase

// 테마_내비
export type T_NV_0003 = {
  content: {
    title: string
    code: string
  }[]
} & TemplateTypeBase

// 슬라이드_테마_내비
export type T_NV_0004 = {
  content: {
    title: string
    code: string
  }[]
} & TemplateTypeBase
