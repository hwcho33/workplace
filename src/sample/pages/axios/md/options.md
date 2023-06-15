
함수에 전달하는 **options**는 여러 속성을 가지고 있습니다.

```ts
// options 상세
requestOptions: {
  // 주어진 requestOptions 설정에 따라 속성 재정의가 가능합니다.
  joinPrefix: true, // add prefix to url by default
  isReturnNativeResponse: false, // use this property when you need to get response headers
  isTransformResponse: true, // need to process the returnd data
  joinParamsToUrl: false, // add parameters to the url when post request
  formatDate: true, // format submit parameter time
  // errorMessageMode: 'message', // message type
  apiUrl: '/v1', // interface address
  urlPrefix: '', // interface splicing address
  joinTime: true, // whether to add timestamp
  ignoreCancelToken: false, // 중복 request 무시
  withToken: false, // request에 token 포함 여부
  retryRequest: {
    isOpenRetry: true,
    count: 5,
    waitTime: 100
  }
}
```
위 상세는 **src/utils/request/logic.ts** 의 **createNewAxios** 함수 하위에 설정되어 있으며, 필요한 경우 이부분을 수정 후 사용하면 됩니다.
