**baseURL**을 지정하고, request 함수 호출을 각각의 메서드로 진행

>params: URL에 들어가는 Query String

>data: Request Body

```html
<script lang="ts" setup>
import { request } from '@/utils/request'

// 유저 목록 조회 [GET]
function getUserList() {
  request
    .get({
      url: '/user', // target url
      params: { page: 2 } // query params
    })
    .then(res => {
      // 성공
      console.info(res)
    })
    .catch(err => {
      // 에러 발생
      console.error(err)
    })
}

// 유저 정보 저장 [POST]
function postUserData() {
  request
    .post({
      url: '/user', // target url
      data: { name: 'morpheus', job: 'leader' } // data
    })
    .then(res => {
      // 성공
      console.log(res)
    })
    .catch(err => {
      // 에러 발생
      console.error(err)
    })
}
</script>
```
