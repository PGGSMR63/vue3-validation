<script setup lang="ts">
import { ref } from "vue";
import SomeInput from "./SomeInput.vue";

import Validator from "../validator";
import { required, isNumber } from "../validationRules";

const login = ref('');
const email = ref('');
const password = ref("");
const result = ref("");
const validator = new Validator();

type TPassword = string;

let passwordErrors = ref<TPassword>("");

function onPasswordInput() {
  passwordErrors = validator.validate( password.value, [ someRule1, someRule2 ] );
}

if ( !passwordErrors.length ) {
  'do somethink'
}
// validator.addFields(email, [required, isEmail]);
// validator.addFields(login, [required, isNumber]);

function send() {
  // if (validator.validateAll()) {
    // result = "Успешно отправлено";
  // }
}
</script>

<template>
  <div>
    <SomeInput v-model="email" error="ошибка валидации" />
    {{ email }}
  </div>
  <div>
    <SomeInput v-model="login" />
  </div>
  <div>
    <SomeInput v-model="password" @input="onPasswordInput" />
    <div v-if="passwordErrors">{{ passwordErrors[0] }}</div>
  </div>

  <button @click="send">Отправить форму</button>

  <span>
    {{ result }}
  </span>
</template>
