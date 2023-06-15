import { chunk, objectValues, omit, pick } from 'src/system/utils/object/base'

/**
 * @describe
 * 결과가 [], {} 로 감싸졌을 경우 'toBe' 외 다른
 * Matcher(toStrictEqual, toMatchObject..) 등을 사용권장
 */
describe('base 함수 테스트', () => {
  it('Object Value 함수', () => {
    const languages = {
      rust: 1,
      swift: 2,
      javascript: 3
    } as const
    expect(objectValues(languages)).toStrictEqual([1, 2, 3])
  })
  it('omit 함수', () => {
    const country = {
      KR: 'KR',
      US: 'US',
      JP: 'JP'
    } as const
    expect(omit(country, ['KR'])).toStrictEqual({ JP: 'JP', US: 'US' })
  })

  it('pick 함수', () => {
    const country = {
      KR: 'KR',
      US: 'US',
      JP: 'JP'
    } as const

    expect(pick(country, ['US'])).toStrictEqual({ US: 'US' })
  })

  it('Chunk 함수', () => {
    expect(chunk([], 3)).toStrictEqual([])
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6]
    ])
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 2)).toStrictEqual([[1, 2], [3, 4], [5, 6], [7]])
  })
})
