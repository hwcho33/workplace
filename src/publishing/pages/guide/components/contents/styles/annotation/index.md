# &#x1F4CC; VUE 주석 작성법

## &#x1F4C1; Class 속성 케이스별 주석

### &#x1F4DD; description
```bash
- 해당 태그 상단에 작성합니다.
- 해당 class 속성 에는 대괄호([])로 표기 합니다.
- 기본 케이스 태그를 제외한 모두 주석 처리 합니다.
```

### &#x1F4DD; sample
```html
<!-- 
    [D]:컨테이너 박스 가로 늘어남 ex> class="container [full-width]",  
    [D]:컨텐츠 박스 가로 늘어남 ex> class="layout-contents-wrap [full-width]",
    [D]:모바일 헤더 상단만 있을 경우 컨테이너 높이 계산됨  ex>class="container [only-header-top]",
    [D]:헤더 상단 없을 경우 컨테이너 높이 계산됨  ex> class="container [header-none]",
  -->
  <div id="container" class="container">
<!-- <div id="container" class="container full-width"> -->
```

<br />

## &#x1F4C1; Tag 케이스별 주석

### &#x1F4DD; description
```bash
- 화면 아이디가 없고, 2개 이상의 케이스를 노출 시켜야 할 경우 디자인 관점에서 
  화면이 틀어지지 않으면 여러 케이스를 노출 시키고, 다음 SAMPLE(1) 보기처럼 
  최상위 태그 상단에 주석을 작성합니다.
- 여러 케이스를 노출 시켰을 경우 케이스별 화면 아이디가 있거나 또는 디자인 관점에서 
  화면이 틀어질 경우에는 라우터를 이용해 케이스가 보이도록 처리합니다. 
  그리고 SAMPLE(2) 보기처럼 최상위 태그 상단에 주석을 작성합니다.
```

### &#x1F4DD; sample
```html
- SAMPLE(1)
  <!-- [CASE1]: 컨테이너 박스 가로 늘어나는 경우 -->
  <!-- <div class="case1">
  </div> -->
  <!-- [CASE2]: 컨테이너 박스 세로로 늘어나는 경우 -->
  <!-- <div class="case2">
  </div> -->

- SAMPLE(2)
  <!-- [CASE1]: 컨테이너 박스 가로 늘어나는 경우: /PATH02/PATH01?view=1 -->
  <!-- <div class="case1">
  </div> -->
  <!-- [CASE2]: 컨테이너 박스 세로로 늘어나는 경우: /PATH02/PATH01?view=2  -->
  <!-- <div class="case2">
  </div> -->
```

<br />

## &#x1F4C1; 개발 전달된 후 수정이 발생한 경우

### &#x1F4DD; description
```bash
- 수정된 태그 상단에 작성합니다.
- 수정된 태그에 하위 태그도 수정되었을 경우는 수정된 태그에 가장 상위 태그 상단에 주석을 작성합니다.
- 수정이 여러번 발생한 경우는 기존 주석은 삭제하지 말고, 최근 수정된 주석이 상단에 오도록 작성합니다.
```

### &#x1F4DD; sample
```html
<!-- 
    [MODIFY] 작성일/작성자/변경사유(기획변경, 디자인변경)
    [D]: 텍스트, 태그, 구조, class 속성 수정함.
  -->
  <div id="container" class="container">  
- SAMPLE
  <!-- 
    [MODIFY] 2023-05-11/김갑수/기획변경
    [D]: class 속성 수정함  
    [MODIFY] 2023-05-10/홍길동/기획변경
    [D]: class 속성 수정함
  -->
  <div id="container" class="container case1">  
```




