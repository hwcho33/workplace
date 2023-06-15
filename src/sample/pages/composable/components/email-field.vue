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
import useFormValidation from '@/composables/validator/use-form-validation'

let input = ref('')

const { validateEmailField, errors } = useFormValidation()

onMounted(() => {
  validateInput()
})

const validateInput = () => {
  validateEmailField('email', input.value)
}
</script>
