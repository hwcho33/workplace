// utils
import svg from '@/components/feather-icon/svg-index.json'

interface MenuData {
  id: number
  label: string
  icon: string
  children?: any
}

// 무작위 아이콘 return
function getIcon(): string {
  return svg[Math.floor(Math.random() * svg.length)]
}

// 메뉴 객체 생성
function menuMapper(id: number, label: string, child?: any) {
  const result: MenuData = { id, label, icon: getIcon() }
  if (child) {
    result['children'] = [...child]
  }
  return result
}

// 루트 패스
const root = '/sample'

// id 순번
let count = 99

export default [
  menuMapper(count++, 'Guide', [
    {
      id: count++,
      label: 'makePage',
      to: `${root}/make-page`
    }
  ]),

  menuMapper(count++, 'Component', [
    {
      id: count++,
      label: 'higherOrderComponent',
      to: `${root}/component/higher-order-component`
    },
    {
      id: count++,
      label: 'provideInject',
      to: `${root}/component/provide-inject`
    }
  ]),

  menuMapper(count++, 'Axios', [
    {
      id: count++,
      label: 'axios',
      to: `${root}/axios`
    }
  ]),

  menuMapper(count++, 'Clone', [
    {
      id: count++,
      label: 'deep',
      to: `${root}/deep`
    },
    {
      id: count++,
      label: 'shallow',
      to: `${root}/shallow`
    }
  ]),

  menuMapper(count++, 'Scroll', [
    {
      id: count++,
      label: 'infiniteScroll',
      to: `${root}/infinite-scroll`
    }
  ]),

  menuMapper(count++, 'Cypress', [
    {
      id: count++,
      label: 'cypress',
      to: `${root}/cypress-guide`
    }
  ]),

  menuMapper(count++, 'Storage', [
    {
      id: count++,
      label: 'storage',
      to: `${root}/storage`
    }
  ]),

  menuMapper(count++, 'Day Js', [
    {
      id: count++,
      label: 'dayJs',
      to: `${root}/day-js`
    }
  ]),

  menuMapper(count++, 'Transition', [
    {
      id: count++,
      label: 'transition',
      to: `${root}/transition`
    },
    {
      id: count++,
      label: 'transitionGroup',
      to: `${root}/transition-group`
    }
  ]),

  menuMapper(count++, 'Auth', [
    {
      id: count++,
      label: 'auth',
      to: `${root}/auth`
    },
    {
      id: count++,
      label: 'session',
      to: `${root}/auth/session`
    }
  ]),

  menuMapper(count++, 'Composable', [
    {
      id: count++,
      label: 'composable',
      to: `${root}/composable`
    }
  ]),

  menuMapper(count++, 'Environment File Setting', [
    {
      id: count++,
      label: 'environment file setting',
      to: `${root}/env-config`
    }
  ]),

  menuMapper(count++, 'Toast Sample', [
    {
      id: count++,
      label: 'toastSample',
      to: `${root}/toast`
    }
  ]),

  menuMapper(count++, 'Dialog', [
    {
      id: count++,
      label: 'dialog',
      to: `${root}/dialog`
    }
  ]),

  menuMapper(count++, 'File Upload', [
    {
      id: count++,
      label: 'fileUpload',
      to: `${root}/file-upload`
    }
  ]),

  menuMapper(count++, 'Video Player', [
    {
      id: count++,
      label: 'videoPlayer',
      to: `${root}/video-player`
    }
  ]),

  menuMapper(count++, 'Spinner', [
    {
      id: count++,
      label: 'spinner',
      to: `${root}/spinner`
    }
  ]),

  menuMapper(count++, 'Native', [
    {
      id: count++,
      label: 'native',
      to: `${root}/native`
    }
  ])
]
