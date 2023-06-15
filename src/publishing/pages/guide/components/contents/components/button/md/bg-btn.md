# &#x1F4CC; filled 버튼 mixin  

## &#x1F4C1; description

```bash
bg-btn-type: filled 버튼 mixin 

{인수} 
- 기본값: $height: rem(52), $font: rem(16), $color: var(--white), $bg-color: var(--ns-red)  
- $height: 버튼높이값  
- $font: 폰트사이즈  
- $color: 폰트컬러  
- $bg-color: 배경컬러  
* 기본으로 사용할시 생략 가능합니다.  
* disable class를 추가해서 disable 버튼 스타일로 사용할 수 있습니다. 
```

## &#x1F4C1; code
### &#x1F4DD; @mixin
```scss
@mixin bg-btn-type($height: rem(52), $font: rem(16), $color: var(--white), $bg-color: var(--ns-red)) {
  @include button;

  font-size: $font;
  color: $color;
  height: $height;
  border: 0;
  background-color: $bg-color;
  font-weight: 700;

  &.disable {
    background-color: var(--gray-300);
    color: var(--white);
  }
}
```

### &#x1F4DD; @include
```scss
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;
.ex-button-wrapper {
  display: flex;

  .ex-btn-05 {
    @include bg-btn-type;
  }
  .ex-btn-06 {
    @include bg-btn-type($color: var(--white), $bg-color: var(--gray-900))
  }
  .ex-btn-07 {
    @include bg-btn-type($height: rem(44), $font: rem(14));
  }
  .ex-btn-08 {
    @include bg-btn-type($height: rem(44), $font: rem(14), $color: var(--white), $bg-color: var(--gray-900))
  }
}
```
### &#x1F4DD; template
```html
<div class="ex-button-wrapper">
    <button class="ex-btn-05">
      <i style="margin-right: 5;">icon</i>filled-red
    </button>
    <a href="#" class="ex-btn-06">
      <i style="margin-right: 5;">icon</i> filled-black
    </a>
    <button class="ex-btn-06 disable">filled-disable</button>
  </div>

  <br />
  
  <div class="ex-button-wrapper">
    <button class="ex-btn-07">
      <i style="margin-right: 5;">icon</i>filled-red
    </button>
    <a href="#" class="ex-btn-08">
      <i style="margin-right: 5;">icon</i> filled-black
    </a>
    <button class="ex-btn-08 disable">filled-disable</button>
  </div>
```

## &#x1F4C1; sample

