<template>
  <BaseCard :labelled-by="titleId">
    <div class="space-y-5">
      <div class="space-y-2">
        <h2 :id="titleId" class="text-xl font-semibold text-gray-950">
          {{ title }}
        </h2>
        <p v-if="description" class="text-sm leading-6 text-gray-600">
          {{ description }}
        </p>
      </div>
      <slot />
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
}>()

const titleId = computed(() => props.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''))
</script>
