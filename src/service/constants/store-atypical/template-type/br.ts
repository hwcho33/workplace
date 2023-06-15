import { TemplateTypeBase } from '../index'

// 고정_S_배너
export type T_BR_0001 = {
  content: {
    title: string
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// S_배너
export type T_BR_0002 = {
  content: {
    title: string
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// M_배너
export type T_BR_0003 = {
  content: {
    title: string
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// L_배너
export type T_BR_0004 = {
  content: {
    title: string
    subTitle: string
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// 슬라이드_H_배너_A
export type T_BR_0005 = {
  groupTitle: string
  content: {
    title: string
    subTitle: string
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// 슬라이드_H_배너_B
export type T_BR_0006 = {
  groupTitle: string
  content: {
    title: string
    subTitle: string
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// 슬라이드_M_배너
export type T_BR_0007 = {
  content: {
    title: string
    imageURL: string
    goURL: string
  }[]
} & TemplateTypeBase

// XS_배너
export type T_BR_0008 = {
  groupTitle: string
  content: {
    title: string
    imageURL: string
    goURL: string
    badge: string
  }[]
} & TemplateTypeBase

// 원형_XS_배너
export type T_BR_0009 = {
  groupTitle: string
  content: {
    title: string
    imageURL: string
    goURL: string
    badge: string
  }[]
} & TemplateTypeBase

// 슬라이드_원형_XS_배너
export type T_BR_0010 = {
  groupTitle: string
  content: {
    title: string
    imageURL: string
    goURL: string
    badge: string
  }[]
} & TemplateTypeBase
