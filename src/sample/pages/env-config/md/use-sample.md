실제로 우리가 추가한 값을 개발 시 사용하는 방법이 기존에서 조금 변화가 있다.

기존 우리는 **process.env** 모듈을 통해서 해당 값에 접근하였다.

하지만, **Vite** 로 넘어오면서 변경되었다.

```ts
// AS-IS
console.log('env 파일 값 : ', process.env)

// TO-BE
console.log('env 파일 값 : ', import.meta.env)

```