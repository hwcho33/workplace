# &#x1F4CC; input 메시지 타입

## &#x1F4C1; description
```bash
input-msg-type: input 메시지 타입

{상태}
error: root에 `is-error` class추가
warning: root에 `is-warning` class추가
```

## &#x1F4C1; code

### &#x1F4DD; @include
```scss

.ex-input-msg {
  @include input-msg;
}
```

### &#x1F4DD; template
```html
<p class="ex-input-msg">
  SNS 간편가입 아이디입니다. SNS로그인(네이버,카카오,페이코)를 이용해 주세요.
</p>
<br />
<p class="ex-input-msg is-error">
  SNS 간편가입 아이디입니다. SNS로그인(네이버,카카오,페이코)를 이용해 주세요.
</p>
<br />
<p class="ex-input-msg is-warning">
  입력하신 번호로 인증번호가 발송 되었습니다.
</p>
```


## &#x1F4C1; sample

