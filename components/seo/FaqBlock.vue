<template>
  <section :aria-labelledby="headingId" class="space-y-4">
    <h2 :id="headingId" class="text-2xl font-bold tracking-normal text-gray-950">
      {{ title }}
    </h2>
    <div class="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
      <details v-for="item in items" :key="item.question" class="group p-5 sm:block" :open="!isMobileDefaultCollapsed">
        <summary class="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-gray-950">
          <span>{{ item.question }}</span>
          <span class="text-lg text-gray-400 group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p class="mt-2 text-sm leading-6 text-gray-600">
          {{ item.answer }}
        </p>
      </details>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface FaqItem {
  question: string
  answer: string
}

withDefaults(
  defineProps<{
    title?: string
    headingId?: string
    items: FaqItem[]
    isMobileDefaultCollapsed?: boolean
  }>(),
  {
    title: 'Frequently asked questions',
    headingId: 'faq',
    isMobileDefaultCollapsed: true,
  },
)
</script>
