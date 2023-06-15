# &#x1F4CC; input Checkbox 

## &#x1F4C1; description
```bash
input-checkbox: input checkbox mixin
```

## &#x1F4C1; code

### &#x1F4DD; @include
```scss

.ex-custom-check {
  @include input-checkbox;
}
```

### &#x1F4DD; template
```html
<div class="ex-custom-check">
  <input
    id="test_1"
    name=""
    type="checkbox"
    value="test"
  />
  <label for="test_1">기본 체크박스</label>
</div>
<br /><br />
<div class="ex-custom-check">
  <input
    id="test_2"
    name=""
    type="checkbox"
    value="test"
    disabled
  />
  <label for="test_2">disabled 체크박스</label>
</div>
<br /><br />
```

## &#x1F4C1; sample

