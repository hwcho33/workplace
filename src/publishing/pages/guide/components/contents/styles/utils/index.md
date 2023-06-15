## &#x1F4C1; @use
```scss
@use '~/scss/common/utils' as *;
```
<br/>

# &#x1F4CC; rem

## &#x1F4C1; description
```bash
rem: px 값 → rem 값 변경 유틸리티 함수

{인수} 
- 기본값: $base: 10px
- $px(필수): rem으로 변경시킬 px
- $base: rem변경 기준값
```

## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@function rem($px, $base: $base-rem-size) {
  @return (remove-unit(math.div($px, $base))) * 1rem;
}
```

### &#x1F4DD; @include

```scss
.utils-rem {
  font-size: rem(17);
}
```

### &#x1F4DD; compiling result

```scss
.utils-rem {
  font-size: 1.7rem;
}
```
<br />

# &#x1F4CC; vw

## &#x1F4C1; description

```bash
vw: px 값 → vw 값 변경 유틸리티 함수

{인수} 
- 기본값: $base: 1000
- $px(필수): vw으로 변경시킬 px
- $base: vw변경 기준값
```

## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@function vw($px, $base: $base-vw-size) {
  @return (remove-unit(math.div($px, $base))) * 100vw;
}
```

### &#x1F4DD; @include

```scss
.utils-vw {
  font-size: vw(20);
}
```

### &#x1F4DD; compiling result

```scss
.utils-vw {
  font-size: 2vw;
}
```
<br />


# &#x1F4CC; ease

## &#x1F4C1; description

```bash
ease: 물리 움직임을 표현하는 이징 함수 반환 유틸리티 함수

{인수} 
- $keyword(필수): ease
* $keyword 값은 다음 중 하나입니다
| in-sine | out-sine | inout-sine | in-quad | out-quad | inout-quad | in-cubic | 
out-cubic | inout-cubic | in-quart | out-quart | inout-quart | in-quint | out-quint | 
inout-quint | in-expo | out-expo | inout-expo | in-circ | out-circ | inout-circ | 
in-back | out-back | inout-back
```

## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@function ease($keyword) {
  @if map-has-key($easings, $keyword) {
    @return map-get($easings, $keyword);
  }

  @else {
    @error "ease() 함수에 전달 가능한 값은 다음 중 하나입니다 → #{map-keys($easings)}";
  }
}
```

### &#x1F4DD; @include

```scss
.utils-ease {
  transition: opacity 0.32s ease(out-expo);
  transition: opacity 0.32s ease(in-sine);
}
```

### &#x1F4DD; compiling result

```scss
.utils-ease {
  transition: opacity 0.32s cubic-bezier(0.19, 1, 0.22, 1);
  transition: opacity 0.32s cubic-bezier(0.47, 0, 0.745, 0.715);
}
```
<br />

# &#x1F4CC; safe-area-bottom

## &#x1F4C1; description

```bash
safe-area-bottom: safe-area bottom

{인수} 
- 기본값: $px: 0
- $px: bottom area px
```

## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@mixin safe-area-bottom($px: 0) {
  @if ($px == 0) {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }

  @else {
    padding-bottom: calc(constant(safe-area-inset-bottom) + #{$px}px);
    padding-bottom: calc(env(safe-area-inset-bottom) + #{$px}px);
  }
}
```

### &#x1F4DD; @include

```scss
.mixins-safe-area-bottom {
  @include safe-area-bottom;
}
.mixins-safe-area-bottom2 {
  @include safe-area-bottom(15);
}
```

### &#x1F4DD; compiling result

```scss
.mixins-safe-area-bottom {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.mixins-safe-area-bottom2 {
  padding-bottom: calc(constant(safe-area-inset-bottom) + 15px);
  padding-bottom: calc(env(safe-area-inset-bottom) + 15px);
}
```
<br />

# &#x1F4CC; safe-area

## &#x1F4C1; description

```bash
safe-area: ios노치 (분기 포함)

{인수} 
- 없음
```

## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@mixin safe-area {
  padding-bottom: 0;

  @include safe-area-bottom;

  .app-ios-notch & {
    @include safe-area-bottom(15);
  }
}

```

### &#x1F4DD; @include

```scss
.mixins-safe-area {
  @include safe-area;
}

```

### &#x1F4DD; compiling result

```scss
.mixins-safe-area {
  padding-bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.app-ios-notch .mixins-safe-area {
  padding-bottom: calc(constant(safe-area-inset-bottom) + 15px);
  padding-bottom: calc(env(safe-area-inset-bottom) + 15px);
}

```
<br />


# &#x1F4CC; hide-txt

## &#x1F4C1; description

```bash
hide-txt: 폰트 삭제 믹스인

{인수} 
- 없음
```

## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@mixin hide-txt {
  font-size: 0;
  line-height: 0;
}
```

### &#x1F4DD; @include

```scss
.mixins-hide-txt {
  @include hide-txt;
}
```

### &#x1F4DD; compiling result

```scss
.mixins-hide-txt {
  font-size: 0;
  line-height: 0;
}
```
<br />


# &#x1F4CC; word-wrap

## &#x1F4C1; description
```bash
word-wrap: Word Wrapping 믹스인

{인수} 
- 없음
```

## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@mixin word-wrap {
  hyphens: auto;
  word-break: keep-all;
  word-wrap: break-word;
}
```

### &#x1F4DD; @include

```scss
.mixins-word-wrap {
  @include word-wrap;
}
```

### &#x1F4DD; compiling result

```scss
.mixins-word-wrap {
  hyphens: auto;
  word-break: keep-all;
  word-wrap: break-word;
}
```
<br />

# &#x1F4CC; blind

## &#x1F4C1; description

```bash
blind: blind 믹스인

{인수} 
- 없음
```

## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@mixin blind {
  clip: rect(0 0 0 0);
  color: transparent;
  font-size: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  text-indent: -999.9rem;
  width: 0;
  z-index: -1;
}

```

### &#x1F4DD; @include

```scss
.mixins-blind {
  @include blind;
}
```

### &#x1F4DD; compiling result

```scss
.mixins-blind {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  text-indent: -999.9rem;
  color: transparent;
  clip: rect(0 0 0 0);
}
```
<br />


# &#x1F4CC; eline-clamp

## &#x1F4C1; description

```bash
eline-clamp: 텍스트 생략(Ellipsis) 믹스인

{인수} 
- 기본값: $lines: 1
- $lines: 파라미터 n값에 따라 n줄 생략
```
## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@mixin eline-clamp($lines: 1) {
  @if ($lines == 1) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @else {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: $lines;
    -webkit-box-orient: vertical;
  }
}
```

### &#x1F4DD; @include

```scss
.mixins-eline-clamp {
  @include eline-clamp;
}
.mixins-eline-clamp2 {
  @include eline-clamp(2);
}
```

### &#x1F4DD; compiling result

```scss
.mixins-eline-clamp {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mixins-eline-clamp2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```
<br />


# &#x1F4CC; clear

## &#x1F4C1; description

```bash
clear: 플로팅 clear 믹스인

{인수} 
- 없음
```

## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@mixin clear {
  &::after {
    clear: both;
    content: "";
    display: block;
  }
}
```

### &#x1F4DD; @include

```scss
.mixins-clear {
  @include clear;
}
```

### &#x1F4DD; compiling result

```scss
.mixins-clear::after {
  content: '';
  display: block;
  clear: both;
}
```
<br />


# &#x1F4CC; inline-scrolling

## &#x1F4C1; description

```bash
inline-scrolling: 인라인 가로스크롤

{인수} 
- 없음
```

## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@mixin inline-scrolling {
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  overflow-x: visible;
  overflow-y: hidden;
  padding-bottom: .2rem;
  white-space: nowrap;
  width: 100%;
}
```

### &#x1F4DD; @include

```scss
.mixins-inline-scrolling {
  @include inline-scrolling;
}
```

### &#x1F4DD; compiling result

```scss
.mixins-inline-scrolling {
  box-sizing: border-box;
  overflow-x: visible;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  padding-bottom: 0.2rem;
}
```
<br />


# &#x1F4CC; media

## &#x1F4C1; description

```bash
media: media 믹스인

{인수} 
- $breakpoint(필수): 미디어 쿼리 분기
* $breakpoint 값은 다음 중 하나입니다
| tablet | desktop
```

```scss
// breakpoint
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1264px;
```

## &#x1F4C1; code

### &#x1F4DD; @mixin
```scss
@mixin media($breakpoint) {
  @if ($breakpoint == tablet) {
    @media (min-width: $breakpoint-tablet) {
      @content;
    }
  }

  @else if ($breakpoint == desktop) {
    @media (min-width: $breakpoint-desktop) {
      @content;
    }
  }

  @else {
    @error "UNKNOWN MEDIA BREAKPOINT #{$breakpoint}";
  }
}

```

### &#x1F4DD; @include

```scss
.mixins-media {
  @include media(tablet) {
    font-size: 17px;
  }
  @include media(desktop) {
    font-size: 20px;
  }
}
```

### &#x1F4DD; compiling result

```scss
@media (min-width: 768px) .mixins-media {
  font-size: 17px;
}
@media (min-width: 1264px) .mixins-media {
  font-size: 20px;
}
```
<br />


## &#x1F4C1; sample
