const root = '/sample'
const namePrefix = 'Sample'

const meta = (payload: object = {}) => {
  const defaultProperties = { layout: 'sample' }
  return payload ? { ...defaultProperties, ...payload } : { ...defaultProperties }
}

const login = [
  {
    name: `${namePrefix}SampleLogin`,
    path: `${root}/login`,
    component: () => import('#/pages/login/index.vue'),
    meta: { layout: 'blank' }
  }
]

const guide = [
  {
    name: `${namePrefix}MakePage`,
    path: `${root}/make-page`,
    component: () => import('#/pages/make-page/index.vue'),
    meta: { ...meta() }
  }
]

const component = [
  {
    name: `${namePrefix}HigherOrderComponent`,
    path: `${root}/component/higher-order-component`,
    component: () => import('#/pages/component/higher-order-component/index.vue'),
    meta: { ...meta() }
  },
  {
    name: `${namePrefix}ProvideInject`,
    path: `${root}/component/provide-inject`,
    component: () => import('#/pages/component/provide-inject/index.vue'),
    meta: { ...meta() }
  }
]

const axios = [
  {
    name: `${namePrefix}Axios`,
    path: `${root}/axios`,
    component: () => import('#/pages/axios/index.vue'),
    meta: { ...meta() }
  }
]

const clone = [
  {
    name: `${namePrefix}Shallow`,
    path: `${root}/shallow`,
    component: () => import('#/pages/clone/shallow.vue'),
    meta: { ...meta() }
  },
  {
    name: `${namePrefix}Deep`,
    path: `${root}/deep`,
    component: () => import('#/pages/clone/deep.vue'),
    meta: { ...meta() }
  }
]

const scroll = [
  {
    name: `${namePrefix}InfiniteScroll`,
    path: `${root}/infinite-scroll`,
    component: () => import('#/pages/infinite-scroll/index.vue'),
    meta: { ...meta() }
  }
]

const cypress = [
  {
    name: `${namePrefix}Cypress`,
    path: `${root}/cypress-guide`,
    component: () => import('#/pages/cypress/index.vue'),
    meta: { ...meta() }
  }
]

const storage = [
  {
    name: `${namePrefix}Storage`,
    path: `${root}/storage`,
    component: () => import('#/pages/storage/index.vue'),
    meta: { ...meta() }
  }
]

const dayJs = [
  {
    name: `${namePrefix}DayJs`,
    path: `${root}/day-js`,
    component: () => import('#/pages/day-js/index.vue'),
    meta: { ...meta() }
  }
]

const transition = [
  {
    name: `${namePrefix}Transition`,
    path: `${root}/transition`,
    component: () => import('#/pages/transition/index.vue'),
    meta: { ...meta() }
  },
  {
    name: `${namePrefix}TransitionGroup`,
    path: `${root}/transition-group`,
    component: () => import('#/pages/transition-group/index.vue'),
    meta: { ...meta() }
  }
]

const auth = [
  {
    name: `${namePrefix}Auth`,
    path: `${root}/auth`,
    component: () => import('#/pages/auth/token.vue'),
    meta: { ...meta() }
  },
  {
    name: `${namePrefix}AuthSession`,
    path: `${root}/auth/session`,
    component: () => import('#/pages/auth/session.vue'),
    meta: { ...meta() }
  }
]

const composable = [
  {
    name: `${namePrefix}Composable`,
    path: `${root}/composable`,
    component: () => import('#/pages/composable/index.vue'),
    meta: { ...meta() }
  }
]

const envConfig = [
  {
    name: `${namePrefix}ComposableSample`,
    path: `${root}/env-config`,
    component: () => import('#/pages/env-config/index.vue'),
    meta: { ...meta() }
  }
]

const toast = [
  {
    name: `${namePrefix}ToastSample`,
    path: `${root}/toast`,
    component: () => import('#/pages/toast/index.vue'),
    meta: { ...meta() }
  }
]

const dialog = [
  {
    name: `${namePrefix}Dialog`,
    path: `${root}/dialog`,
    component: () => import('#/pages/dialog/index.vue'),
    meta: { ...meta({ type: 'defaultDialog' }) }
  },
  {
    name: `${namePrefix}DialogModalSlot`,
    path: `${root}/dialog-modal-slot`,
    component: () => import('#/pages/dialog/index.vue'),
    meta: { ...meta({ type: 'slotDialog' }) }
  },
  {
    name: `${namePrefix}DialogModalProps`,
    path: `${root}/dialog-modal-prop`,
    component: () => import('#/pages/dialog/index.vue'),
    meta: { ...meta({ type: 'propDialog' }) }
  },
  {
    name: `${namePrefix}DialogModalPropsSlot`,
    path: `${root}/dialog-modal-both`,
    component: () => import('#/pages/dialog/index.vue'),
    meta: { ...meta({ type: 'bothDialog' }) }
  }
]

const fileUpload = [
  {
    name: `${namePrefix}FileUpload`,
    path: `${root}/file-upload`,
    component: () => import('#/pages/file-upload/index.vue'),
    meta: { ...meta() }
  }
]

const videoPlayer = [
  {
    name: `${namePrefix}Video-player`,
    path: `${root}/video-player`,
    component: () => import('#/pages/video-player/index.vue'),
    meta: { ...meta() }
  }
]

const spinner = [
  {
    name: `${namePrefix}Spinner`,
    path: `${root}/spinner`,
    component: () => import('#/pages/spinner/index.vue'),
    meta: { ...meta() }
  }
]

const native = [
  {
    name: `${namePrefix}Native`,
    path: `${root}/native`,
    component: () => import('#/pages/native/index.vue'),
    meta: { ...meta() }
  }
]

const sample = [
  ...login,
  ...guide,
  ...component,
  ...axios,
  ...clone,
  ...scroll,
  ...cypress,
  ...storage,
  ...dayJs,
  ...transition,
  ...auth,
  ...composable,
  ...envConfig,
  ...toast,
  ...dialog,
  ...fileUpload,
  ...videoPlayer,
  ...spinner,
  ...native
]

export default sample
