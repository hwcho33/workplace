## &#x1F4C1; @use
```scss
@use '~/scss/common/index' as *;
```
<br/>

# &#x1F4CC; input text

## &#x1F4C1; description
```bash
input-text: input text mixin

{상태}
disabled : css로
focus: css로
active: root에 `is-active` class추가
auto-complete: root에 is-active is-auto-complete class추가
complete: root에 `is-complete` class추가
error: root에 `is-error` class추가
```

## &#x1F4C1; code

### &#x1F4DD; @include

```scss
.ex-input-text-wrap {
  @include input-text
}
```

### &#x1F4DD; template
```html
<!-- disabled input disabled 속성 추가 -->
<div class="ex-input-text-wrap">
  <label for="userId">disabled 상태</label>
  <div class="input-text-wrap">
    <input type="text" placeholder="아이디" name="user-id" id="userId" disabled />
    <div class="btns-wrap">
      <button type="button" class="del-btn">삭제</button>
    </div>  
  </div>
  <p class="info-msg"></p>
</div>

<!-- Default -->
<div class="ex-input-text-wrap">
  <label for="userId">Default 상태</label>
  <div class="input-text-wrap">
    <input type="text" placeholder="아이디" name="user-id" id="userId" required />
    <div class="btns-wrap">
      <button type="button" class="del-btn">삭제</button>
    </div>  
  </div>
</div>

<!-- Active 상태:  root에 is-active class추가 -->
<div class="ex-input-text-wrap is-active">
  <label for="userId">Active 상태 <em class="required">*</em></label>
  <div class="input-text-wrap">
    <input type="text" placeholder="아이디" name="user-id" value="test" id="userId" />
    <div class="btns-wrap">
      <button type="button" class="del-btn">삭제</button>
    </div>  
  </div>
  <p class="info-msg">
  영문 숫자 특수문자 2가지 이상 조합 8~16자
  </p>
</div>

<!-- 자동완성 상태:  root에 is-active is-auto-complete class추가 -->
<div class="ex-input-text-wrap is-active is-auto-complete">
    <label for="userId">Active 자동완성 상태 <em class="required">*</em></label>
    <div class="input-text-wrap">
      <input type="text" placeholder="아이디" name="user-id" value="test" id="userId" />
      <div class="btns-wrap">
        <button type="button" class="del-btn">삭제</button>
      </div>
      <ul class="input-complete-wrap">
        <li><span class="user-id">oww1220@</span>naver.com </li>
        <li><span class="user-id">oww1220@</span>hanmail.net </li>
        <li><span class="user-id">oww1220@</span>gmail.com </li>
        <li><span class="user-id">oww1220@</span>nate.com </li>
        <li><span class="user-id">oww1220@</span>daum.net </li>
        <li><span class="user-id">oww1220@</span>kakao.com </li>
        <li><span class="user-id">oww1220@</span>hotmail.com </li>
        <li><span class="user-id">oww1220@</span>korea.com </li>
        <li><span class="user-id">oww1220@</span>icloud.com </li>
      </ul>  
    </div>
  </div>

<!-- Complete 상태:  root에 is-complete class추가 -->
<div class="ex-input-text-wrap is-complete">
  <label for="userId">Complete 상태 <em class="required">*</em></label>
  <div class="input-text-wrap">
    <input type="text" placeholder="아이디" name="user-id" value="test" id="userId" />
    <div class="btns-wrap">
      <button type="button" class="del-btn">삭제</button>
    </div>  
  </div>
  <p class="info-msg is-warning">
  입력하신 번호로 인증번호가 발송 되었습니다.
  </p>
</div>

<!-- Error 상태:  root에 is-error class추가 -->
<div class="ex-input-text-wrap is-error">
  <label for="userId">Error 상태 <em class="required">*</em></label>
  <div class="input-text-wrap">
    <input type="text" placeholder="아이디" name="user-id" value="test" id="userId" />
    <div class="btns-wrap">
      <button type="button" class="del-btn">삭제</button>
    </div>  
  </div>
  <p class="info-msg is-error">
  SNS 간편가입 아이디입니다. SNS로그인(네이버,카카오,페이코)를 이용해 주세요.
  </p>
</div>

<div class="ex-input-text-wrap">
    <label for="userId">Default 인증번호 입력</label>
    <div class="input-text-wrap">
      <input type="text" placeholder="예) 1234" name="user-id" id="userId" />
      <div class="cert-num-wrap">
        <span>04:59</span>
      </div>  
    </div>
  </div>

  <!-- Active 상태:  root에 is-active class추가 -->
  <div class="ex-input-text-wrap is-active">
    <label for="userId">Active 인증번호 입력</label>
    <div class="input-text-wrap">
      <input type="text" placeholder="예) 1234" value="2213" name="user-id" id="userId" />
      <div class="cert-num-wrap">
        <span>04:59</span>
      </div>  
    </div>
  </div>

  <!-- Error 상태:  root에 is-error class추가 -->
  <div class="ex-input-text-wrap is-error">
    <label for="userId">Error 인증번호 입력</label>
    <div class="input-text-wrap">
      <input type="text" placeholder="예) 1234" value="2213" name="user-id" id="userId" />
      <div class="cert-num-wrap">
        <span>04:59</span>
      </div>  
    </div>
    <p class="info-msg is-error">
    인증번호를 확인 후 다시 입력해 주세요.
    </p>
  </div>
```

## &#x1F4C1; sample

