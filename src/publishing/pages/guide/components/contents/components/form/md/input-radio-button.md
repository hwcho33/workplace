# &#x1F4CC; input Radio Button

## &#x1F4C1; description
```bash
input-radio: input radio mixin
```

## &#x1F4C1; code

### &#x1F4DD; @include
```scss

.ex-custom-radio {
  @include input-radio;
}
.ex-radio-wrap {
  @include input-radio-wrapper;
}
```

### &#x1F4DD; template
```html
<div class="ex-custom-radio">
  <input
    id="test_radio_1"
    name="radio01"
    type="radio"
    value="test_radio_value1"
  />
  <label for="test_radio_1">기본 라디오1</label>
</div>
<br /><br />
<div class="ex-custom-radio">
  <input
    id="test_radio_2"
    name="radio01"
    type="radio"
    value="test_radio_value2"
  />
  <label for="test_radio_2">기본 라디오2</label>
</div>
<br /><br />
<div class="ex-custom-radio">
  <input
    id="test_radio_3"
    name="radio01"
    type="radio"
    value="test_radio_value2"
    disabled
  />
  <label for="test_radio_3">disabled 라디오</label>
</div>
<br /><br />
```

## &#x1F4C1; sample

