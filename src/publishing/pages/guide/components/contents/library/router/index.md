## &#x1F4C1; description
```bash
- vue-router 케이스 가이드
```
- [vue-router api 로 이동](https://router.vuejs.org/)

<br />

# &#x1F4CC; router-link

## &#x1F4C1; router-link 사용법

### &#x1F4DD; description
```bash
- 기획에서 명확히 페이지 이동으로 표기된 것만 router-link 태그를 사용하고, 그 외에는 button으로 처리합니다.
```

### &#x1F4DD; sample
```html
<!-- 기본 -->
<router-link to="/publishing/customer/member/join-complete">TEST</router-link>
```

<br />

# &#x1F4CC; useRouter

## &#x1F4C1; description
```bash
- 라우터 코어 객체로 라우터 기능을 사용할수 있음(페이지 이동, 히스토리, Navigation Guards
 등)
- Returns the router instance.
- Equivalent to using $router inside templates.
```

## &#x1F4C1; code

### &#x1F4DD; template
```html
<button
  class="ex-link"
  @click="$router.push({ path: '/publishing/customer/member/simple-join', query: { testId: 12 } })"
>
  template router
</button>
<br /><br />
<button class="ex-link" @click="_onClickChangeId">ts router</button>
```

### &#x1F4DD; ts
```ts
const router = useRouter()
const _onClickChangeId = () => {
  router.push({ path: '/publishing/customer/member/simple-join', query: { testId: 12 } })
}
```

<br />

# &#x1F4CC; useRoute

## &#x1F4C1; description
```bash
- query string, hash, meta 등 현재페이지의 정보가 담긴 반응성 객체
- Returns the current route location.
- Equivalent to using $route inside templates.
```

## &#x1F4C1; code


### &#x1F4DD; template
```html
<!-- template 에서 query string 접근 -->
<div v-if="$route.query.detail">test query string(true)</div>
<div v-if="!$route.query.detail">test query string(false)</div>
```

### &#x1F4DD; ts
```ts
// ts에서 query string 접근
const route = useRoute()
const query = route.query.cur
console.log(query)
```

## &#x1F4C1; sample
