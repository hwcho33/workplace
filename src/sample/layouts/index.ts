export interface ContextModel {
  id: number
  parentId?: number
  to?: string
  title?: string
  icon?: string
  favorite: boolean | undefined
  active?: string
}

export interface MenuModel {
  label?: string
  to?: string
  icon?: string
  alt?: string
  children?: Array<ContextModel>
}
