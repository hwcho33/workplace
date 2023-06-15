```ts
// 모듈 호출
const userStore = useUserStore()

function login() {
  // 유저 정보
  const payload = {
    username: 'testasdf',
    password: 'test1234'
  }
  userStore.login(payload) // 로그인 시도
}

function getExpiredTime() {
  console.info(userStore.getExpiredTime)
}
```
