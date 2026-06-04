<template>
  <footer class="border-t border-gray-200 bg-white">
    <div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <section v-for="group in footerGroups" :key="group.title" class="space-y-3">
          <h2 class="text-sm font-semibold text-gray-950">{{ group.title }}</h2>
          <ul class="space-y-2 text-sm text-gray-600">
            <li v-for="item in group.items" :key="item.href">
              <NuxtLink class="inline-flex min-h-8 items-center hover:text-blue-700" :to="item.href">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </section>
      </div>
      <p class="mt-8 border-t border-gray-200 pt-5 text-sm text-gray-600">
        © 2026 ConvertMintTools.com. Free browser-based converter tools.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerGroups = [
  {
    title: 'Tools',
    items: [
      { label: 'Convert kg to lbs', href: '/convert-kg-to-lbs' },
      { label: 'Convert lbs to kg', href: '/convert-lbs-to-kg' },
      { label: 'Military Time Converter', href: '/military-time-converter' },
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
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
]
</script>
