import type { VNodeChild, PropType as VuePropType } from 'vue'

declare type PropType<T> = VuePropType<T>

declare type VueNode = VNodeChild | JSX.Element
