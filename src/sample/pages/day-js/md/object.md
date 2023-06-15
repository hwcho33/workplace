```ts
/* 문자열을 파싱하여 객체를 생성 */
// 값이 비어있으면 오늘 날짜 적용
console.log(dayjs('2018-06-03').format()) // 2018-06-03T00:00:00+09:00

/* 유닉스 타임스탬프를 사용하는 방법 */
console.log(dayjs.unix(1530471537).format()) // 2018-07-02T03:58:57+09:00

/* 자바스크립트 내장 Date 객체를 활용하는 방법 */
console.log(dayjs(new Date(2011, 11, 22)).format()) // 2011-12-22T00:00:00+09:00
```