import axios from 'axios'
import qs from 'qs'
import { setEnvValue } from '../src/system/utils/env-config/set-env-values'
import { objectEntries } from '../src/system/utils/object'

const url = 'https://common.dev-nsmall.com/util/parameter'
const prefix = `### [get-Parameter-Store]`

;(async () => {
  console.time(prefix) // 소요 시간 체크 시작
  console.info(`${prefix} 프로세스 시작`)

  try {
    console.info(`${prefix} Parameter 요청 진행`)

    const { data } = await axios.post(
      url,
      qs.stringify({
        name: '/nsm/mobileweb',
        param: 'local'
      })
    )

    console.info(`${prefix} Parameter 요청 완료`)
    console.info(`${prefix} env 파일 작성 시작`)

    objectEntries(data).map(values => {
      setEnvValue(values[0] as string, values[1])
    })

    console.info(`${prefix} env 파일 작성 완료`)
    console.timeEnd(prefix) // 소요 시간 체크 종료
  } catch (e) {
    console.error(`${prefix} env 파일 오류 발생`)
    console.error(e)
    throw new Error(`${e}`)
  }
})()
