# Mocking Guide
## 서론
mocking module은 .env 환경 파일의 VITE_MODE가 `test`이거나 호출 url의 문자열에 `test***`가 포함된 경우에 활성화 됩니다.

<br />

작업 순서
- mock data 작성
- 호출

<br />

## 1. mock data 작성
mock data는 `src\service\api\mock` 하위에 위치해야 합니다. mock 패키지 하위에 폴더를 생성하여 데이터를 구성합니다.

아래 소스 코드는 인증 기반 목업 데이터 예시입니다. `(참고)`
```ts
import { mockResponse } from '~/api/mock'

const tokenData = {
  accessToken: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOi',
  expiresIn: 300,
  refreshToken: 'JIUzI1NiIsInR5cCIgOiAiSldUIiwiac',
  refreshExpiresIn: 1800
}

export const token = mockResponse(tokenData)
```

`mockResponse`함수를 통해 데이터를 감싸면 기본 응답 형태를 만들어 줍니다.

<br />

## 2. 호출
Axios를 통한 API 호출 시 `url` 에 `test***` 문자열을 추가하고 작성해둔 `mock` 파일명을 작성해야 합니다. **(중요 - 파일명을 기준으로 탐색합니다.)**

```ts
import { request } from '@/utils/request'

request
  .post({
    url: '/test***/token'
  })
  .then(res => {
    console.info(res)
  })
```
