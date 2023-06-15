export interface IterItem {
  category: string
  id: string
}

export interface MapIds {
  current: Ref<string>
  iter: Ref<Set<IterItem>>
}

export interface PageToggle {
  pageToggleState: Ref<boolean>
  changePageToggle: () => void
}

export const MapIdKey: InjectionKey<MapIds> = Symbol('MapIds')
export const PageToggleKey: InjectionKey<PageToggle> = Symbol('PageToggle')
