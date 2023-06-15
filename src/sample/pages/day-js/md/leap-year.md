```ts
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear.js';

// 윤년 플러그인 적용
dayjs.extend(isLeapYear)

// 연도 목록
let years = [ 2000, 2002, 2004, 2008, 2012, 2016, 2020, 1900, 1800, 1600 ];

// 배열 순회
for (const year of years) {
    let ym = dayjs([year]);

    if (ym.isLeapYear()) {
      console.log(`${year} 해당 연도는 윤년입니다.`);
    } else {
      console.log(`${year} 해당 연도는 윤년이 아닙니다.`);
    }
}
```
