<template>
  <input
    type="name"
    placeholder="Name"
    autocomplete="off"
    v-model="input"
    @keyup="validateInput"
    @blur="validateInput"
  />
  <div class="text-red" v-if="errors">
    {{ errors.name }}
  </div>
</template>

<script lang="ts" setup>
import useFormValidation from '@/composables/validator/use-form-validation'

let input = ref<string>('')

const { validateNameField, errors } = useFormValidation()

onMounted(() => {
  validateInput()
})
const validateInput = () => {
  validateNameField('name', input.value)
}
</script>
