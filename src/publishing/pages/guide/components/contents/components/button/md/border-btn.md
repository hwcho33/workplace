## &#x1F4C1; @use
```scss
@use '~/scss/common/index' as *;
```
<br/>

# &#x1F4CC; border 버튼 mixin  

## &#x1F4C1; description

```bash
border-btn-type: border 버튼 mixin  

 {인수} 
- 기본값: $height: rem(52), $font: rem(16), $color: var(--ns-red), $border-color: var(--ns-red) 
- $height: 버튼높이값  
- $font: 폰트사이즈  
- $color: 폰트컬러  
- $border-color: 보더컬러  
* 기본으로 사용할시 생략 가능합니다.  
* disable class를 추가해서 disable 버튼 스타일로 사용할 수 있습니다. 
```
## &#x1F4C1; code
### &#x1F4DD; @mixin
```scss
@mixin border-btn-type($height: rem(52), $font: rem(16), $color: var(--ns-red), $border-color: var(--ns-red)) {
  @include button;

  font-size: $font;
  color: $color;
  height: $height;
  border: .1rem solid $border-color;
  background-color: var(--white);
  font-weight: 700;

  &.disable {
    background-color: var(--gray-100);
    border-color: var(--gray-200);
    color: var(--gray-300);
  }
}
```

### &#x1F4DD; @include
```scss
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;
.ex-button-wrapper {
  display: flex;

  .ex-btn-01 {
    @include border-btn-type;
  }
  .ex-btn-02 {
    @include border-btn-type($color: var(--gray-900), $border-color: var(--gray-900));
  }
  .ex-btn-03 {
    @include border-btn-type($height: rem(44), $font: rem(14));
  }
  .ex-btn-04 {
    @include border-btn-type($height: rem(44), $font: rem(14), $color: var(--gray-900), $border-color: var(--gray-900));
  }
}
```
### &#x1F4DD; template
```html
<div class="ex-button-wrapper">
  <button class="ex-btn-01">border-red</button>
  <button class="ex-btn-02">border-black</button>
  <button class="ex-btn-02 disable">border-disable</button>
</div>

<br />

<div class="ex-button-wrapper">
  <button class="ex-btn-03">border-red</button>
  <button class="ex-btn-04">border-black</button>
  <button class="ex-btn-04 disable">border-disable</button>
</div>
```

## &#x1F4C1; sample

