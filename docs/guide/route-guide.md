## routing 가이드

해당 가이드는 프로젝트 내 `sample` 기준으로 작성합니다.

실제 본개발 프로젝트에 진행 할 경우 실 적용 가이드가 추가될 수 있습니다.

실제로 컴포넌트를 개발하고 `routing` 을 연결할 경우 작성해야 할 부분은 3가지 입니다.

1. `src/store/data/menu.ts`
   - 실제 연결 할 `component` 내 로직(sample 의 경우 메뉴버튼)
   <br />
2. `src/router/index.ts`
   - `src/router` 하위 파일(실제 route 정보 작성)
   <br />
3. `system/router.ts`
   - `system` 하위 `router`(**해당 파일은 설정 파일이므로 담당자만 수정**)

위와 같이 3가지의 파일이 관련되어 있다고 보시면 됩니다.

## 1. menu.ts

해당 파일은 `sample` 영역 에서만 적용되는 방식이기 떄문에 참고만 하시면 됩니다.

실제 라우팅을 진행할 카테고리 버튼을 만들기 위해 작성합니다.

```ts
// 메뉴 객체 생성

/* 
menuMapper 에서는 3가지 props 를 전달 받습니다.
 1. id : 카테고리 별 고유번호
 2. label: 노출 문구
 3. child : 하위 카테고리 정보
위 세가지를 받아 result 객체에 구조분해 할당을 통하여 추가합니다.
*/
function menuMapper(id: number, label: string, child?) {
  const result = { id, label, icon: getIcon() }
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
```

위 작업을 진행하면 이제 `routing` 을 진행할 수 있는 컴포넌트를 만들었다고 생각하시면 됩니다.

![image](https://user-images.githubusercontent.com/56063287/217715374-228c2115-d2aa-4df0-9aa3-4738d8e3247c.png)

**실제 본개발 시에는 이부분이 대부분 컴포넌트의 버튼이나, 여러가지 기능적인 구현 요소가 될 것이기 때문에 참고만 하시면 될 것 같습니다.**



## 2. router/index.ts

`index.ts` 파일에서 실제 활용될 라우팅 정보를 작성합니다.

```ts

...
const guide = [
  {
    name: 'MakePage',
    path: `${rootPath}/make-page`,
    component: () => import('#/pages/make-page/index.vue'),
    meta: { ...meta() }
  }
]

const component = [
  {
    name: 'HigherOrderComponent',
    path: `${rootPath}/component/higher-order-component`,
    component: () =>
      import('#/pages/component/higher-order-component/index.vue'),
    meta: { ...meta() }
  },
  {
    name: 'ProvideInject',
    path: `${rootPath}/component/provide-inject`,
    component: () => import('#/pages/component/provide-inject/index.vue'),
    meta: { ...meta() }
  }
]

...

```

먼저 위 `component` 배열 내에 요소 객체들을 확인할 수 있습니다.

각 객체에는 해당 카테고리의 `name` , `routing path` , `component path`, `meta` 정보 가 담겨 있습니다.

### meta

```ts
const meta = (payload: object = {}) => {
  const defaultProperties = {
    layout: 'sample'
  }
  return payload
    ? { ...defaultProperties, ...payload }
    : { ...defaultProperties }
}

```

메타 정보는 `payload` 를 전달받아 가공하는 역할을 합니다.

위와 같이 작성을 한 후 하단에 구조분해 할당으로 이러한 정보들을 배열로 감싸고 `export` 하게 됩니다.

```ts

...

const sample = [
  ...guide,
  ...component,
  ...modal,
  ...axios,
  ...slide,
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
  ...dialog
]

export default sample

```

위처럼 작성한 개별 단위의 배열들을 구조분해를 통해 하나의 변수에 담아서 내보내는 방식으로 진행됩니다.

이후 실제 통합은 `src/util/router.ts` 에서 진행됩니다.

**결과적으로 개발자분들께서는 분들은 1번, 2번 테스크만 작성하면 됩니다.**

해당 가이드는 추가적으로 본개발 진행 시 환경에 따라 본개발 가이드에 맞게 추가될 예정입니다.