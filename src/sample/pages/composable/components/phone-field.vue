<template>
  <input
    type="phone"
    placeholder="Phone Number"
    autocomplete="off"
    v-model="input"
    @keyup="validateInput"
    @blur="validateInput"
  />
  <div class="text-red" v-if="errors">
    {{ errors.phone }}
  </div>
</template>

<script lang="ts" setup>
import useFormValidation from '@/composables/validator/use-form-validation'

let input = ref('')

const { validatePhoneField, errors } = useFormValidation()

onMounted(() => {
  validateInput()
})

const validateInput = () => {
  validatePhoneField('phone', input.value)
}
</script>
