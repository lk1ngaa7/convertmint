<template>
  <section :aria-labelledby="headingId" class="space-y-4">
    <h2 :id="headingId" class="text-2xl font-bold tracking-normal text-gray-950">
      {{ title }}
    </h2>
    <div class="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
      <article v-for="item in items" :key="item.question" class="p-5">
        <h3 class="text-base font-semibold text-gray-950">
          {{ item.question }}
        </h3>
        <p class="mt-2 text-sm leading-6 text-gray-600">
          {{ item.answer }}
        </p>
      </article>
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
  }>(),
  {
    title: 'Frequently asked questions',
    headingId: 'faq',
  },
)
</script>
