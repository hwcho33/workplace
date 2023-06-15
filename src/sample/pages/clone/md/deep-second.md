
**Lodash** 라이브러리에서 제공하는 **clonedeep** 을 활용한 예제 입니다.

```ts
// 의존성
import { clonedeep } from 'lodash-es'

// 일반 객체 선언
let defaultObject = { a: 1, b: 1 }

// clonedeep 함수 사용한 clone
let cloneObject = clonedeep(defaultObject)

// 메모리 주소를 참조하지 않으므로 false 출력
console.log(defaultObject === cloneObject) 

// 내부 객체를 갖는 객체 선언
let hasInnerObject = { a: 1, b: 2, c: { d: 3 } }

// clonedeep 함수 사용한 clone
let cloneHasInnerObject = clonedeep(hasInnerObject)

// 메모리 주소를 참조하지 않으므로 false 출력 
console.log(cloneHasInnerObject.c === hasInnerObject.c) 

// 내부 객체 프로퍼티 변경
hasInnerObject.c.d = 5

console.log(hasInnerObject.c) // {d: 5}
console.log(cloneHasInnerObject.c) //{d: 3}
```
