```ts
import { generateStorage } from '@/utils/storage'

/**
 * @param key 스토리지 키값
 * @param value 스토리지에 저장될 값 OR 설명
 * @param expires 유효기간 (Optional) - 시간 단위
 */

const popupStorage = generateStorage()

// 현재 시간 기준으로 24시간 설정
popupStorage.set('popup-expired-time', '팝업 유효시간에 대한 스토리지 값입니다.', 24) 

// 스토리지 만료 여부 확인 - key값을 통해 조회
console.log(popupStorage.isExpired('popup-expired-time')) 
// true(만료) || false(유효)
```
