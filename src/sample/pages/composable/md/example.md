위에서 설명한 **컴포저블** 함수를 활용해서 **Validation Check** 와 관련된 간단한 코드를 작성하였다.

먼저 우리는 **input** 박스에 이름, 휴대폰 번호, 이메일 등을 기입할 것이다.

이때 관련된 함수를 컴포저블하게 분리 시킨 후 재사용할 계획이다.

먼저 파일 구조는 아래와 같다.

**부모** : index.vue

```vue
// index.vue

<template>
  <div class="text-nm">
    <div class="mb-20">
      <NameField />
      <br />
      <PhoneField />
      <br />
      <EmailField />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IntroductionMd from './md/introduction.md'
import ComposableMd from './md/composable.md'
import ExampleMd from './md/example.md'
import EmailField from '#/pages/composable/components/email-field.vue'
import NameField from '#/pages/composable/components/name-field.vue'
import PhoneField from '#/pages/composable/components/phone-field.vue'
</script>

```

해당 example 은 **컴포넌트 재사용**이아닌 **ts 재사용**을 위해 작성하였으므로, **컴포넌트 재사용측면**은 배제한다.

실제 부모 컴포넌트에서는 각각의 필드 **자식 컴포넌트를 불러오는 역할**뿐이다.

**자식** : email-field.vue,name-field.vue,phone-field.vue

```vue
// email-field.vue

<template>
  <input
    type="phone"
    placeholder="Email Address"
    autocomplete="off"
    v-model="input"
    @keyup="validateInput"
    @blur="validateInput"
  />
  <div class="text-red" v-if="errors">
    {{ errors.email }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useFormValidation from '@/composables/validator/useFormValidation'

let input = ref('')

// 각 필드마다 가져오는 validationField 함수가 다르다.
const { validateEmailField, errors } = useFormValidation()

onMounted(() => {
  validateInput()
})

const validateInput = () => {
  validateEmailField('email', input.value)
}
</script>

```

우리는 해당 컴포넌트의 인스턴스가 **Mount** 된다면 **validateInput** 함수를 실행하게 되며 해당 함수는 **validationEmailField** 함수를 호출한다.

해당 함수는 **useFormValidation** 컴포저블 ts 에서 받아온 각각 필드에 맞는 함수라고 생각하면 된다.

**composable ts** : useFormValidation.ts , useValidator.ts

이제 각 필드에 필요한 함수를 재사용하는 ts 파일을 본다.

```ts
// useFormValidation.ts

import { reactive } from 'vue'
import useValidators from '@/composables/validator/useValidator'

// Error 에 대한 타입을 명시해주었다.
interface errorsType {
  email?: string
  name?: string
  phone?: string
}

// 실제 반응형 상태를 저장하기 위해  reactive 를 사용하여 선언한다. 
const errors = reactive<errorsType>({})

export default function useFormValidation() {
  // 각각 Validation Util 재사용 함수를 가져온다.
  const { isNum, isEmail, isEmpty, minLength } = useValidators()

  // name, email, phone Number 에 대해서 체크할 수 있는 함수를 작성한다.
  const validateNameField = (fieldName: string, fieldValue: string) => {
    errors[fieldName] = !fieldValue
      ? isEmpty({ fieldName, fieldValue })
      : minLength({ fieldName, fieldValue, min: 2 })
  }
  const validateEmailField = (fieldName: string, fieldValue: string) => {
    errors[fieldName] = !fieldValue
      ? isEmpty({ fieldName, fieldValue })
      : isEmail({ fieldName, fieldValue })
  }

  const validatePhoneField = (fieldName: string, fieldValue: string) => {
    errors[fieldName] = !fieldValue
      ? isEmpty({ fieldName, fieldValue })
      : isNum({ fieldName, fieldValue })
  }

  // 반응형 데이터인 errors 와 각각의 체크 함수를 return 한다.
  return { errors, validateNameField, validateEmailField, validatePhoneField }
}


```

주석에도 써 놓았듯이 **Error** 의 경우 반응형 상태를 저장하고 반환한다.

그 외 Validation 을 체크할 수 있는 함수들을 함께 반환한다.

```ts
// useValidator.ts

// Validation 을 체크하기 위한 Props 의 타입을 정의한다.
interface ValidationPropsType<T> {
  fieldName: T
  fieldValue: T
  min?: number
}

export default function useValidate() {
  const isEmpty = ({ fieldName, fieldValue }: ValidationPropsType<string>) => {
    return !fieldValue ? `${fieldName} 정보를 입력해 주세요` : ''
  }

  const minLength = ({
    fieldName,
    fieldValue,
    min
  }: ValidationPropsType<string>) => {
    if (min) {
      return fieldValue.length < min
        ? `${fieldName} 은 최소 ${min}자리 이상이 필요합니다.`
        : ''
    }
  }

  const isEmail = ({ fieldName, fieldValue }: ValidationPropsType<string>) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return !re.test(fieldValue)
      ? `${fieldName} 형식을 확인하시기 바랍니다.`
      : ''
  }

  const isNum = ({ fieldName, fieldValue }: ValidationPropsType<string>) => {
    const isNum = /^[0-9]+$/.test(fieldValue)
    return !isNum ? `- 을 제외한 ${fieldName} 정보를 정확히 입력하십시오.` : ''
  }
  return { isEmail, isEmpty, minLength, isNum }
}

```

위 코드를 보면 입력값에 따라서 **Error Message** 에 대한 상태를 변경하기 위해 위와 같이 샘플코드를 작성해 보았다.


