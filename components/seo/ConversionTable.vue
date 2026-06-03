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
    <div class="overflow-x-auto rounded-lg border border-gray-200 bg-white">
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
