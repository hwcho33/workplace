interface ValidationPropsType<T> {
  fieldName: T
  fieldValue: T
  min?: number
}

export default function useValidate() {
  const isEmpty = ({ fieldName, fieldValue }: ValidationPropsType<string>) => {
    return !fieldValue ? `${fieldName} 정보를 입력해 주세요` : ''
  }

  const minLength = ({ fieldName, fieldValue, min }: ValidationPropsType<string>) => {
    if (min) {
      return fieldValue.length < min ? `${fieldName} 은 최소 ${min}자리 이상이 필요합니다.` : ''
    }
  }

  const isEmail = ({ fieldName, fieldValue }: ValidationPropsType<string>) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return !re.test(fieldValue) ? `${fieldName} 형식을 확인하시기 바랍니다.` : ''
  }

  const isNum = ({ fieldName, fieldValue }: ValidationPropsType<string>) => {
    const isNum = /^[0-9]+$/.test(fieldValue)
    return !isNum ? `- 을 제외한 ${fieldName} 정보를 정확히 입력하십시오.` : ''
  }
  return { isEmail, isEmpty, minLength, isNum }
}
