# &#x1F4CC; input Password

## &#x1F4C1; description
```bash
input-text(password): input Password mixin

{상태}
disabled : css로
focus: css로
active: root에 `is-active` class추가
complete: root에 `is-complete` class추가
error: root에 `is-error` class추가
```

## &#x1F4C1; code

### &#x1F4DD; @include

```scss
.ex-input-password-wrap {
  @include input-text(password)
}
```

### &#x1F4DD; template
```html
<div class="ex-input-password-wrap">
    <label for="userId">Default 상태</label>
    <div class="input-text-wrap">
      <input type="password" placeholder="password" name="user-id" id="userId" required />
      <div class="btns-wrap">
        <button type="button" class="view-btn">비밀번호 보기 숨기기</button>
        <button type="button" class="del-btn">삭제</button>
      </div>  
    </div>
    <p class="info-msg"></p>
  </div>
  <br/><br/>
  <div class="ex-input-password-wrap is-active">
    <label for="userId">Active 상태 <em class="required">*</em></label>
    <div class="input-text-wrap">
      <input type="password" placeholder="password" name="user-id" value="test" id="userId" />
      <div class="btns-wrap">
        <button type="button" class="view-btn">비밀번호 보기 숨기기</button>
        <button type="button" class="del-btn">삭제</button>
      </div>  
    </div>
    <p class="info-msg">영문 숫자 특수문자 2가지 이상 조합 8~16자</p>
  </div>
  <br/><br/>
  <div class="ex-input-password-wrap is-complete">
    <label for="userId">Complete 상태 <em class="required">*</em></label>
    <div class="input-text-wrap">
      <input type="password" placeholder="password" name="user-id" value="test" id="userId" />
      <div class="btns-wrap">
        <button type="button" class="view-btn">비밀번호 보기 숨기기</button>
        <button type="button" class="del-btn">삭제</button>
      </div>  
    </div>
    <p class="info-msg is-warning">
    입력하신 번호로 인증번호가 발송 되었습니다.
    </p>
  </div>
  <br/><br/>
  <div class="ex-input-password-wrap is-error">
    <label for="userId">Error 상태 <em class="required">*</em></label>
    <div class="input-text-wrap">
      <input type="password" placeholder="password" name="user-id" value="test" id="userId" />
      <div class="btns-wrap">
        <button type="button" class="view-btn">비밀번호 보기 숨기기</button>
        <button type="button" class="del-btn">삭제</button>
      </div>  
    </div>
    <p class="info-msg is-error">
    SNS 간편가입 아이디입니다. SNS로그인(네이버,카카오,페이코)를 이용해 주세요.
    </p>
  </div>
```

## &#x1F4C1; sample

