본 프로젝트에서는 **AS-IS** 와 마찬가지로 **env** 환경파일을 구동 **Mode** 에 따라서 달리 활용한다.

현재 **AWS -> ParameterStore** 값을 받아오는 부분을 서비스 구동 시 호출하여 각 **env** 파일에 작성 혹은 재기재 하는 방식으로 진행된다.

따라서, 이번에도 프로세스는 동일하게 가져가되 일련의 로직을 **Util** 로 분리하여 **utils/env-config** 하위에 따로 작성하였다.

코드 설명은 주석으로 대체한다.

```ts

import fs from 'fs'
import os from 'os'
import path from 'path'

/**
 * @name setEnvValue
 * @description
 * - 현재 구동된 Mode 에 따른 env.XXX 파일에 Key, Value 값을 추가한다.
 * @param key env File 내 추가 할 Key 값
 * @param value env File 내 추가 할 value 값
 */

export const setEnvValue = (key: string, value: string) => {
  // Command 에서 전달받은 현재 Environment Mode (local, dev, stage, production)
  const stage = process.argv[2]

  // 해당 파일 Path 확인
  const envFilePath = path.resolve(process.cwd(), `.env.${stage}`)
  const envValues = fs.readFileSync(envFilePath, 'utf-8').split(os.EOL)

  // 동일한 Key 존재 시 Target 특정
  const targetLine = envValues.find(
    line => line.split('=')[0] === `VITE_${key}`
  )

  if (targetLine !== undefined) {
    // 동일한 key 존재 시 변경된 값으로 해당 Line 재작성
    const targetLineIndex = envValues.indexOf(targetLine)

    envValues.splice(targetLineIndex, 1, `VITE_${key}="${value}"`)
  } else {
    // 신규 Property Line 추가
    envValues.push(`VITE_${key}="${value}"`)
  }

  fs.writeFileSync(envFilePath, envValues.join(os.EOL))
}

```

우리는 이제 **Node** 구동 시 해당 원하는 값을 해당 함수를 통해서 **env** 파일에 추가 혹은 수정할 수 있다.

**ts-node** 의존성을 탑재하였고, 이를 통해 우리가 **Node** 구동 시 **ts** 파일을 커멘드로 실행 시킬 수 있다.

```json
Package.json

// script
"dev": "ts-node get-parameter-store.ts local && vite",
...

// devDependency
"ts-node": "^10.9.1",
```

결과적으로 우리는 아래와 같이 불러서 구동 초기에 사용에 필요한 상수(CONST) 값을 활용하기 위한 정보를 추가한다.

```ts
import axios from 'axios'
import qs from 'qs'
import { setEnvValue } from './src/system/utils/env-config/set-env-values'
;(async () => {
  console.log('### [get-Parameter-Store] 프로세스 시작')

  const requestParam = {
    name: '/nsm/mobileweb',
    param: 'local'
  }

  const url = 'https://common.dev-nsmall.com/util/parameter'

  try {
    console.log('### [get-Parameter-Store] Parameter 요청 진행')
    const { data } = await axios.post(url, qs.stringify(requestParam))

    console.log('### [get-Parameter-Store] Parameter 요청 완료')

    console.log('### [get-Parameter-Store] env 파일 작성 시작')

    Object.entries(data).map(values => {
      setEnvValue(values[0], values[1] as string)
    })

    console.log('### [get-Parameter-Store] env 파일 작성 완료')
  } catch (e) {
    console.log('### [get-Parameter-Store] env 파일 오류 발생')
    throw new Error(`${e}`)
  }
})()

```

