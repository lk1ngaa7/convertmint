<template>
  <header class="border-b border-gray-200 bg-white">
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="inline-flex min-h-11 items-center whitespace-nowrap text-lg font-semibold text-gray-950">
        ConvertMintTools
      </NuxtLink>

      <nav aria-label="Main navigation" class="hidden items-center gap-1 text-sm font-medium text-gray-600 md:flex">
        <NuxtLink
          v-for="item in desktopNavItems"
          :key="item.href"
          :to="item.href"
          class="inline-flex min-h-11 items-center rounded-lg px-3 hover:bg-gray-50 hover:text-blue-700"
          active-class="bg-blue-50 text-blue-700"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <button
        type="button"
        class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 md:hidden"
        :aria-expanded="isOpen"
        aria-controls="mobile-navigation"
        @click="isOpen = !isOpen"
      >
        <span class="sr-only">Toggle navigation</span>
        <span aria-hidden="true">{{ isOpen ? 'Close' : 'Menu' }}</span>
      </button>
    </div>

    <nav
      v-if="isOpen"
      id="mobile-navigation"
      aria-label="Mobile navigation"
      class="border-t border-gray-200 bg-white px-4 py-3 md:hidden"
    >
      <div class="mx-auto grid max-w-6xl gap-4">
        <section v-for="group in navGroups" :key="group.title" class="space-y-2">
          <h2 class="text-xs font-semibold uppercase tracking-normal text-gray-500">{{ group.title }}</h2>
          <div class="grid gap-1">
            <NuxtLink
              v-for="item in group.items"
              :key="item.href"
              :to="item.href"
              class="inline-flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-700"
              active-class="bg-blue-50 text-blue-700"
              @click="isOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </section>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const desktopNavItems = [
  { label: 'Weight Converter', href: '/weight-converter' },
  { label: 'Military Time', href: '/military-time-converter' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const navGroups = [
  {
    title: 'Popular',
    items: [
      { label: 'kg to lbs', href: '/convert-kg-to-lbs' },
      { label: 'lbs to kg', href: '/convert-lbs-to-kg' },
      { label: 'Military Time', href: '/military-time-converter' },
      { label: 'Weight Converter', href: '/weight-converter' },
    ],
  },
  {
    title: 'Categories',
    items: [
      { label: 'Weight Converters', href: '/weight-converter' },
      { label: 'Time Converters', href: '/military-time-converter' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
]
</script>
