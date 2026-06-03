<template>
  <BaseCard>
    <div class="space-y-3" aria-live="polite">
      <p class="text-sm font-semibold uppercase tracking-normal text-gray-500">
        Result
      </p>
      <p v-if="error" class="rounded-[10px] border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-800">
        Error: {{ error }}
      </p>
      <template v-else-if="value">
        <p class="text-3xl font-bold tracking-normal text-gray-950">
          {{ value }}
        </p>
        <p v-if="description" class="text-sm leading-6 text-gray-600">
          {{ description }}
        </p>
        <CopyButton :text="copyText || value" />
      </template>
      <p v-else class="text-sm leading-6 text-gray-600">
        {{ emptyText }}
      </p>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    value?: string | null
    description?: string | null
    error?: string | null
    copyText?: string | null
    emptyText?: string
  }>(),
  {
    value: null,
    description: null,
    error: null,
    copyText: null,
    emptyText: 'Enter a value to see the conversion result.',
  },
)
</script>
