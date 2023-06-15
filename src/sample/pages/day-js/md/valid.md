```ts
import dayjs from 'dayjs'

const correctDate = dayjs('2018-12-12')
correctDate.isValid() // true

const wrongDate = dayjs('2018-11-ks')
wrongDate.isValid() // false
```
