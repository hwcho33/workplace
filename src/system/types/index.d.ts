declare module '*.md'

declare type Nullable<T> = T | null

declare type NonNullable<T> = T extends null | undefined ? never : T

declare type Recordable<T = any> = Record<string, T>

declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}

declare interface Fn<T = any, R = T> {
  (...args: T[]): R
}
