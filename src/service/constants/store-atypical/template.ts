// 템플릿 타입
export const TEMPLATE_TYPE = {
  BR: 'BR',
  BP: 'BP',
  BT: 'BT',
  NV: 'NV',
  PD: 'PD',
  ET: 'ET'
} as const
export type TEMPLATE_TYPE = (typeof TEMPLATE_TYPE)[keyof typeof TEMPLATE_TYPE]

// 배너
export const TEMPLATE_BR_ID = {
  T_BR_0001: 'T_BR_0001',
  T_BR_0002: 'T_BR_0002',
  T_BR_0003: 'T_BR_0003',
  T_BR_0004: 'T_BR_0004',
  T_BR_0005: 'T_BR_0005',
  T_BR_0006: 'T_BR_0006',
  T_BR_0007: 'T_BR_0007',
  T_BR_0008: 'T_BR_0008',
  T_BR_0009: 'T_BR_0009',
  T_BR_0010: 'T_BR_0010'
} as const
export type TEMPLATE_BR_ID = (typeof TEMPLATE_BR_ID)[keyof typeof TEMPLATE_BR_ID]

// 배너 조합
export const TEMPLATE_BP_ID = {
  T_BP_0001: 'T_BP_0001',
  T_BP_0002: 'T_BP_0002',
  T_BP_0003: 'T_BP_0003'
} as const
export type TEMPLATE_BP_ID = (typeof TEMPLATE_BP_ID)[keyof typeof TEMPLATE_BP_ID]

// 버튼
export const TEMPLATE_BT_ID = {
  T_BT_0001: 'T_BT_0001',
  T_BT_0002: 'T_BT_0002'
} as const
export type TEMPLATE_BT_ID = (typeof TEMPLATE_BT_ID)[keyof typeof TEMPLATE_BT_ID]

// 네비게이션
export const TEMPLATE_NV_ID = {
  T_NV_0001: 'T_NV_0001',
  T_NV_0002: 'T_NV_0002',
  T_NV_0003: 'T_NV_0003',
  T_NV_0004: 'T_NV_0004'
} as const
export type TEMPLATE_NV_ID = (typeof TEMPLATE_NV_ID)[keyof typeof TEMPLATE_NV_ID]

// 상품
export const TEMPLATE_PD_ID = {
  T_PD_0001: 'T_PD_0001',
  T_PD_0002: 'T_PD_0002',
  T_PD_0003: 'T_PD_0003',
  T_PD_0004: 'T_PD_0004',
  T_PD_0005: 'T_PD_0005',
  T_PD_0006: 'T_PD_0006',
  T_PD_0007: 'T_PD_0007',
  T_PD_0008: 'T_PD_0008',
  T_PD_0009: 'T_PD_0009',
  T_PD_0010: 'T_PD_0010',
  T_PD_0011: 'T_PD_0011'
} as const
export type TEMPLATE_PD_ID = (typeof TEMPLATE_PD_ID)[keyof typeof TEMPLATE_PD_ID]

// 기타
export const TEMPLATE_ET_ID = {
  T_ET_0001: 'T_ET_0001',
  T_ET_0002: 'T_ET_0002',
  T_ET_0003: 'T_ET_0003',
  T_ET_0004: 'T_ET_0004'
} as const
export type TEMPLATE_ET_ID = (typeof TEMPLATE_ET_ID)[keyof typeof TEMPLATE_ET_ID]

// 템플릿 ID 모음
export const TEMPLATE_ID = {
  ...TEMPLATE_BR_ID,
  ...TEMPLATE_BP_ID,
  ...TEMPLATE_BT_ID,
  ...TEMPLATE_NV_ID,
  ...TEMPLATE_PD_ID,
  ...TEMPLATE_ET_ID
} as const
type TEMPLATE_ID = (typeof TEMPLATE_ID)[keyof typeof TEMPLATE_ID]

// 템플릿 기본 타입
export type TemplateTypeBase = {
  templateId: string
  templateName: string
  areaId: string
  areaName: string
}
