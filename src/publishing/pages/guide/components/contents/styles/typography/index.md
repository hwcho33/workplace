# &#x1F4CC; Pretendard

## &#x1F4C1; description

- 타이포그래피(Typography)는 서비스와 사용자가 커뮤니케이션하는 주요 요소입니다.
- 텍스트 목적과 기능에 따라 서체 및 스타일을 유의해 사용합니다.
- NSmall 5.0은 OS 구분없는 웹포트 Pretendard 제작 됩니다.
- Font Weight는 Regular, Medium, Bold (700, 500, 400) 3가지를 사용합니다.
- Font Style은 각 영역 쓰임새에 따라 구분하여 사용 합니다.
- 폰트 최소 사이즈는 12로 정하되 10은 가독성을 고려해 예외 케이스에 한정해 사용합니다.
- 가변 다이나믹 서브셋 웹폰트 사용 **'Pretendard Variable'**
- Pretendard github (https://github.com/orioncactus/pretendard)

## &#x1F4C1; code

- 시스템에 가능한 맞추고자 한다면 아래와 같은 font-family 구성을 추천합니다.

```scss
/* 폰트 초기화 */
body,
input,
textarea,
select,
button,
table {
  font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard Variable', Roboto,
    'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
}
```

- 어디서든 동일한 환경을 가지고자 한다면 아래와 같은 font-family 구성을 추천합니다.

```scss
/* 폰트 초기화 */
body,
input,
textarea,
select,
button,
table {
  font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
    'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif;
}
```

## &#x1F4C1; sample

- Regular 400, Medium 500, Bold 700
