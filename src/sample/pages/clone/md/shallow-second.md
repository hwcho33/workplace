다음 예제는 **구조분해할당** 으로 객체를 **Clone** 하는 예제입니다.

참조로 걸리지 않기 때문에 비교문에서 **false**가 출력 되는 것을 볼 수 있습니다.

하지만, **내부 객체**가 존재하는 객체일 경우 결과가 다릅니다.

**내부 객체가** 존재하는 경우에는 객체를 Clone 후 객체 비교시 참조가 걸려 비교문에서 출력시 **true**가 발생합니다.
또한, 본래 객체의 값을 변경할 경우 Clone 된 객체 역시 변경되는 것을 확인할 수 있습니다.

따라서, 이러한 부분을 **고려하여** 개발해야 합니다.

```ts
// 구조분해할당(Destructing Assignment) 사용
// 일반 객체 선언
let defaultObject = { a: 1, b: 2 }

// 구조분해 할당을 통해 객체 Clone
let cloneObject = { ...defaultObject }

console.log(cloneObject === defaultObject) // false

// 내부 객체가 존재하는 객체 선언
let hasInnerObject = { a: 1, b: 2, c: { d: 3 } }

// 구조분해 할당을 통해 객체 Clone
let cloneHasInnerObject = { ...hasInnerObject }

// 내부객체 여부 확인 시 true
console.log(hasInnerObject.c === cloneHasInnerObject.c)

// 내부 객체 프로퍼티 변경
hasInnerObject.c.d = 4

// 객체 참조가 걸려있으므로, 변경된 값 출력
// a: 1 b: 2 c: {d: 4}
console.log(hasInnerObject) 

// a: 1 b: 2 c: {d: 4}
console.log(cloneHasInnerObject) 
```
