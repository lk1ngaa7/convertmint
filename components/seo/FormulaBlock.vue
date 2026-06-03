<template>
  <section :aria-labelledby="headingId" class="space-y-4">
    <h2 :id="headingId" class="text-2xl font-bold tracking-normal text-gray-950">
      {{ title }}
    </h2>
    <BaseCard>
      <div class="space-y-3">
        <p class="text-sm leading-6 text-gray-600">
          {{ description }}
        </p>
        <p class="rounded-[10px] bg-gray-50 p-4 font-mono text-sm font-semibold text-gray-950">
          {{ formula }}
        </p>
      </div>
    </BaseCard>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  headingId: string
  description: string
  formula: string
}>()
</script>
