<template>
  <section :aria-labelledby="labelledBy" class="min-w-0 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  labelledBy?: string
}>()
</script>
