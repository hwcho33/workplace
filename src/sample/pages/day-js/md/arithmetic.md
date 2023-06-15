```ts
import dayjs from 'dayjs'

const now = dayjs()

// 오늘 날짜로부터 14일 증감
now.add(14, 'day').format('YYYY-MM-DD')

// 오늘 날짜로부터 3년 차감
now.subtract(3, 'year').format('YYYY-MM-DD')
```