
위 예시에서 볼 수 있듯이, **얇은 복사**는 원본을 참조하는 방식으로 복사가 됩니다.

따라서, 원본 객체의 **속성 값**을 변경 할 경우,
복사된 객체 또한 **속성**이 동일하게 변경됩니다.

따라서, **확실히 분리된 객체**로 복사할 경우 사용하면 안됩니다.

```ts
// 원 객체 선언
const sampleObject = { a: 1, b: 2 } 

// 얇은 복사(Shallow Copy)
const copyObject = sampleObject 

// 복사된 객체 출력 {a: 1, b: 2}
console.log(copyObject) 

console.log(copyObject === sampleObject) // true

// 원 객체 속성 변경
sampleObject.a = 2 

// 복사된 객체 출력 {a: 2, b: 2}
console.log(copyObject) 

console.log(copyObject === sampleObject) // true
```
