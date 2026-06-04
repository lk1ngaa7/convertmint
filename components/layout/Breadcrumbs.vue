<template>
  <nav aria-label="Breadcrumb" class="text-sm text-gray-600">
    <ol class="flex flex-wrap items-center gap-2">
      <li v-for="(item, index) in items" :key="item.path" class="flex min-h-8 items-center gap-2">
        <NuxtLink
          v-if="index < items.length - 1"
          :to="item.path"
          class="rounded-md hover:text-blue-700"
        >
          {{ item.name }}
        </NuxtLink>
        <span v-else class="font-medium text-gray-950" aria-current="page">{{ item.name }}</span>
        <span v-if="index < items.length - 1" aria-hidden="true" class="text-gray-400">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '~/composables/useStructuredData'

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>
