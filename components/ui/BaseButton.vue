<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'inline-flex min-h-11 items-center justify-center rounded-[10px] px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      variantClasses,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'ghost'
    disabled?: boolean
  }>(),
  {
    type: 'button',
    variant: 'primary',
    disabled: false,
  },
)

const variantClasses = computed(() => {
  if (props.variant === 'secondary') {
    return 'border border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
  }

  if (props.variant === 'ghost') {
    return 'bg-transparent text-gray-700 hover:bg-gray-100'
  }

  return 'bg-blue-600 text-white hover:bg-blue-700'
})
</script>
