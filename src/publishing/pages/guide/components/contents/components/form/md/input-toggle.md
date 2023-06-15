# &#x1F4CC; input Toggle 

## &#x1F4C1; description
```bash
input-toggle: input toggle mixin
```

## &#x1F4C1; code

### &#x1F4DD; @include
```scss

.ex-toggle {
  @include input-toggle;
}

.ex-toggle-big {
  @include input-toggle(big);
}
```

### &#x1F4DD; template
```html
<label class="ex-toggle">
  <input type="checkbox" name="" />
  <span></span>
</label>

<label class="ex-toggle">
  <input type="checkbox" name="" />
  <span>내 문의글만 보기</span>
</label>

<label class="ex-toggle-big">
  <input type="checkbox" name="" />
  <span></span>
</label>

<label class="ex-toggle-big">
  <input type="checkbox" name="" />
  <span>내 문의글만 보기</span>
</label>
```

## &#x1F4C1; sample

