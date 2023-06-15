```ts
import dayjs from 'dayjs'

// 현재 시각
let now = dayjs()

// ISO 기본 포맷
now.format() // 2022-10-04T16:44:39+02:00

// 시간 관련
now.format('HH:mm:ss') // 16:44:39
now.format('H:mm:ss a') // 4:44:39 pm

// 날짜 관련
now.format('dddd, MMM D YYYY') // Tuesday 04 2022
now.format('YYYY-MM-DD') // 2022-10-04

// 날짜 + 시간
now.format('YYYY-MM-DD HH:mm:ss') // 2022-10-04 16:44:39
```
