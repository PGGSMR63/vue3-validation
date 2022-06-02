<script setup lang="ts">
interface Props {
  modelValue: string;
  error?: string;
}

const emit = defineEmits(["update:modelValue"]);

const props = defineProps<Props>();

function updateValue(value) {
  emit("update:modelValue", value);
}
</script>

<template>
  <input
    v-bind="$attrs"
    class="krasota-input"
    :value="props.modelValue"
    v-on:input="updateValue($event.target.value)"
  />
  <span class="krasota-error"> {{ props.error }} </span>
</template>

<style scoped>
.krasota-input {
  display: block;
  width: 480px;
  padding: 12px 18px;
  font: normal 400 16px /1.2 arial;
}

.krasota-error {
  display: block;
  padding: 12px 18px;
  height: 24px;
  font: normal 400 16px /1.2 arial;
  color: red;
}
</style>
