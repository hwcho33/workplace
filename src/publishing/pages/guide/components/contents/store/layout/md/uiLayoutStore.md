# &#x1F4CC; useUiLayoutStore

## &#x1F4C1; description
```bash
개요
- 레이아웃 컴퍼넌트 루트에 예외처리를 위한 동적 클래스 관리 스토어
- 메타 데이터의 복잡성 및 로컬 컴퍼넌트(라우터 루트가 아닌) 단에서도 핸들링 위해 작성
- src/service/composable/ui/use-layout.ts 에서 injectClass 함수로 route.path 체크후 클래스 추가 삭제함

반응성 getter
- containerClass: 레이아웃 container 루트에 연결 
- floatingRightClass: FloatingRight 컴퍼넌트 루트에 연결 

반응성 setter
- setContainerClass: 레이아웃 container className 값 set
- resetContainerClass: 레이아웃 container className 값 delete
- setFloatingRightClass: FloatingRight 컴퍼넌트 className 값 set
- resetFloatingRightClass: FloatingRight 컴퍼넌트 className 값 delete
- resetinjectClass: 모든 주입된 className 값 delete
```

### src/service/composable/ui/use-layout.ts 코드 일부
```ts
import { useUiLayoutStore } from '~/store'

const injectClass = (path: string) => {
  const uiLayoutStore = useUiLayoutStore()
  const containerIsGrayReg = /\/customer\/member|\/customer\/login/
  const floatingRightHasBottomReg = /\/publishing\/guide$|\/goods\/detail$/

  uiLayoutStore.resetinjectClass()
  if (containerIsGrayReg.test(path)) uiLayoutStore.setContainerClass('is-gray')
  if (floatingRightHasBottomReg.test(path)) uiLayoutStore.setFloatingRightClass('has-bottom')
}
```

## &#x1F4C1; code

### &#x1F4DD; ts
```ts
import { useUiLayoutStore } from '~/store'

const uiLayoutStore = useUiLayoutStore()
// ContainerClass 주입
uiLayoutStore.setContainerClass('is-gray')
// FloatingRightClass 주입
uiLayoutStore.setFloatingRightClass('has-bottom')

// ContainerClass 삭제
uiLayoutStore.resetContainerClass()
// FloatingRightClass 삭제
uiLayoutStore.resetFloatingRightClass()
// 전체 Class 삭제
uiLayoutStore.resetinjectClass()
```


## &#x1F4C1; sample
