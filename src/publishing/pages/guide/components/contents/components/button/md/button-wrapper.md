
# &#x1F4CC; button wrapper mixin

## &#x1F4C1; description
```bash
button-wrapper: button wrapper mixin

{인수} 
- 기본값: $margin: rem(8)
- $margin: 버튼간의 간격  
* 기본으로 사용할시 생략 가능합니다.  
```

## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@mixin button-wrapper($margin: rem(8)) {
  display: flex;
  justify-content: space-between;

  > button,
  > a {
    padding: 0;

    + button,
    + a {
      margin-left: $margin;
    }
  }
}
```


### &#x1F4DD; @include
```scss
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;

.ex-button-wrapper-type1 {
  @include button-wrapper;
}
.ex-button-wrapper-type2 {
  @include button-wrapper(rem(10));
}
.ex-button-wrapper-type3 {
  @include button-wrapper(rem(3));
}
```

### &#x1F4DD; template
```html
<div class="ex-button-wrapper-type1">
  <button class="ex-btn-05">medium-filled-red</button>
  <button class="ex-btn-01">medium-ghost-red</button>
</div>
<br /><br />
<div class="ex-button-wrapper-type2">
  <button class="ex-btn-05"><i style="margin-right: 5;">icon</i>medium-filled-red</button>
  <a class="ex-btn-01"><i style="margin-right: 5;">icon</i> medium-ghost-red</a>
  <button class="ex-btn-02">medium-ghost-black</button>
</div>
<br /><br />
<div class="ex-button-wrapper-type3">
  <a class="ex-btn-01" style="width: 10rem;"><i style="margin-right: 5;">icon</i></a>
  <button class="ex-btn-05">medium-filled-red</button>
  <button class="ex-btn-02">medium-ghost-black</button>
</div>
```

## &#x1F4C1; sample

