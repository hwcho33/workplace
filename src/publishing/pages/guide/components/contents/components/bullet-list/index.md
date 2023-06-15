## &#x1F4C1; @use
```scss
@use '~/scss/common/index' as *;
```
<br/>

## &#x1F4C1; description
```bash
bullet-list: bullet list mixin
```

## &#x1F4C1; code

### &#x1F4DD; @include
```scss
.ex-bullet-list {
  @include bullet-list;
}
```

### &#x1F4DD; template
```html
<ul class="ex-bullet-list">
  <li>
  비회원 주문조회는 주문번호와 주문 시 설정한 비밀번호를 통해 확인 할 수 있습니다.
  </li>
  <li>
  주문번호는 주문완료 시 이메일 또는 문자로 자동 발송 됩니다.
  </li>
  <li>
  주문번호가 기억나지 않으시면 고객센터 <span>(1800-0770(유료)</span>로 문의하시기 바랍니다.
  </li>
</ul>
```
## &#x1F4C1; sample