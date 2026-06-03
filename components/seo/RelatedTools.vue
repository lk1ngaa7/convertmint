<template>
  <section :aria-labelledby="headingId" class="space-y-4">
    <h2 :id="headingId" class="text-2xl font-bold tracking-normal text-gray-950">
      {{ title }}
    </h2>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="tool in tools"
        :key="tool.href"
        :to="tool.href"
        class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md"
      >
        <h3 class="text-base font-semibold text-gray-950">
          {{ tool.title }}
        </h3>
        <p class="mt-2 text-sm leading-6 text-gray-600">
          {{ tool.description }}
        </p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface RelatedTool {
  title: string
  description: string
  href: string
}

withDefaults(
  defineProps<{
    title?: string
    headingId?: string
    tools: RelatedTool[]
  }>(),
  {
    title: 'Related tools',
    headingId: 'related-tools',
  },
)
</script>
