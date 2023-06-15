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
  let envFilePath = ''
  if (stage === undefined) {
    throw new Error("[get-parameter-store] 'stage' 매개변수를 입력하세요 (e.g. ts-node get-parameter-store.js [dev])")
  } else {
    switch (stage) {
      case 'local':
      case 'dev':
      case 'prod':
      case 'test':
        envFilePath = path.resolve(process.cwd(), `.env.${stage}`)
        break

      default:
        throw new Error("[get-parameter-store] 'stage' 매개변수가 올바르지 않습니다 (e.g. local, dev, test, prod)")
    }
  }
  // 해당 파일 Path 확인

  const envValues = fs.readFileSync(envFilePath, 'utf-8').split(os.EOL)

  // 동일한 Key 존재 시 Target 특정
  const targetLine = envValues.find(line => line.split('=')[0] === `VITE_${key}`)

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
