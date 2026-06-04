<template>
  <section :aria-labelledby="headingId" class="space-y-4">
    <div class="space-y-2">
      <h2 :id="headingId" class="text-2xl font-bold tracking-normal text-gray-950">
        {{ title }}
      </h2>
      <p v-if="description" class="text-sm leading-6 text-gray-600">
        {{ description }}
      </p>
    </div>
    <div class="grid gap-3 sm:hidden">
      <article v-for="row in rows" :key="row.join('-')" class="rounded-lg border border-gray-200 bg-white p-4">
        <dl class="grid grid-cols-2 gap-3 text-sm">
          <div v-for="(cell, index) in row" :key="`${headers[index]}-${cell}`">
            <dt class="font-semibold text-gray-500">{{ headers[index] }}</dt>
            <dd class="mt-1 text-base font-semibold text-gray-950">{{ cell }}</dd>
          </div>
        </dl>
      </article>
    </div>
    <div class="hidden rounded-lg border border-gray-200 bg-white sm:block">
      <table class="min-w-full divide-y divide-gray-200 text-left text-sm">
        <thead class="bg-gray-50 text-gray-700">
          <tr>
            <th v-for="header in headers" :key="header" scope="col" class="px-4 py-3 font-semibold">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 text-gray-700">
          <tr v-for="row in rows" :key="row.join('-')">
            <td v-for="cell in row" :key="cell" class="px-4 py-3">
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  headingId: string
  description?: string
  headers: string[]
  rows: string[][]
}>()
</script>
