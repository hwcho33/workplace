import { reactive } from 'vue'
import useValidators from '@/composables/validator/use-validator'

interface errorsType {
  email?: string
  name?: string
  phone?: string
}
const errors = reactive<errorsType>({})

export default function useFormValidation() {
  const { isNum, isEmail, isEmpty, minLength } = useValidators()

  const validateNameField = (fieldName: string, fieldValue: string) => {
    errors[fieldName] = !fieldValue ? isEmpty({ fieldName, fieldValue }) : minLength({ fieldName, fieldValue, min: 4 })
  }

  const validateEmailField = (fieldName: string, fieldValue: string) => {
    errors[fieldName] = !fieldValue ? isEmpty({ fieldName, fieldValue }) : isEmail({ fieldName, fieldValue })
  }

  const validatePhoneField = (fieldName: string, fieldValue: string) => {
    errors[fieldName] = !fieldValue ? isEmpty({ fieldName, fieldValue }) : isNum({ fieldName, fieldValue })
  }

  return { errors, validateNameField, validateEmailField, validatePhoneField }
}
