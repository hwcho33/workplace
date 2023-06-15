```ts
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween.js'

// between 플러그인 사용 선언
dayjs.extend(isBetween)

const dayOne = dayjs('2022-01-19')
const dayTwo = dayjs('2022-02-20')
const dayThree = dayjs('2022-03-22')
const dayFour = dayjs('2022-01-19')

dayOne.isSame(dayFour) // true
dayTwo.isAfter(dayOne) // true
dayThree.isBefore(dayTwo) // false

const dDay = '2018-05-19'

dDay.isBetween('2018-05-10', '2018-05-25') // true
```
