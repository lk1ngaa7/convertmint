<template>
  <div class="min-w-0 space-y-2">
    <label :for="id" class="block text-sm font-semibold text-gray-900">
      {{ label }}
    </label>
    <input
      :id="id"
      :value="modelValue"
      :name="name"
      :placeholder="placeholder"
      :inputmode="inputmode"
      :autocomplete="autocomplete"
      :aria-describedby="error ? errorId : hint ? hintId : undefined"
      :aria-invalid="error ? 'true' : 'false'"
      class="min-h-12 w-full rounded-[10px] border border-gray-300 bg-white px-3 py-2 text-base text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      @input="handleInput"
    >
    <p v-if="hint && !error" :id="hintId" class="text-sm text-gray-500">
      {{ hint }}
    </p>
    <p v-if="error" :id="errorId" class="text-sm font-medium text-red-700">
      Error: {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id: string
    label: string
    modelValue: string
    name?: string
    placeholder?: string
    hint?: string
    error?: string | null
    inputmode?: 'text' | 'decimal' | 'numeric'
    autocomplete?: string
  }>(),
  {
    name: undefined,
    placeholder: '',
    hint: '',
    error: null,
    inputmode: 'text',
    autocomplete: 'off',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const errorId = computed(() => `${props.id}-error`)
const hintId = computed(() => `${props.id}-hint`)

function handleInput(event: Event): void {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
