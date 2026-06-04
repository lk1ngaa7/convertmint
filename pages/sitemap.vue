<template>
  <main class="mx-auto max-w-5xl space-y-8 px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
    <Breadcrumbs :items="breadcrumbs" />
    <section class="space-y-3">
      <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
      <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
      <p class="text-lg leading-8 text-gray-600">{{ page.subtitle }}</p>
    </section>

    <div class="grid gap-6 md:grid-cols-3">
      <BaseCard v-for="group in sitemapGroups" :key="group.title">
        <h2 class="text-xl font-bold text-gray-950">{{ group.title }}</h2>
        <ul class="mt-4 space-y-4">
          <li v-for="item in group.items" :key="item.href">
            <NuxtLink :to="item.href" class="font-semibold text-blue-700">{{ item.label }}</NuxtLink>
            <p class="mt-1 text-sm leading-6 text-gray-600">{{ item.description }}</p>
          </li>
        </ul>
      </BaseCard>
    </div>
  </main>
</template>

<script setup lang="ts">
import { pages } from '~/data/pages'

const page = pages.sitemap
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Resources', path: '/sitemap' },
  { name: 'Sitemap', path: '/sitemap' },
]

const sitemapGroups = [
  {
    title: 'Main pages',
    items: [
      { label: 'Home', href: '/', description: 'Start with the unit converter hub and quick converter.' },
      { label: 'About', href: '/about', description: 'Learn what ConvertMintTools provides.' },
      { label: 'Contact', href: '/contact', description: 'Send feedback or report an issue.' },
      { label: 'Privacy Policy', href: '/privacy', description: 'Read how privacy is handled for the current tools.' },
      { label: 'Terms of Service', href: '/terms', description: 'Review terms for using the converter tools.' },
    ],
  },
  {
    title: 'Weight converters',
    items: [
      { label: 'Weight Converter', href: '/weight-converter', description: 'Convert between kg, g, mg, lb, oz, stone, and tons.' },
      { label: 'Convert kg to lbs', href: '/convert-kg-to-lbs', description: 'Convert kilograms to pounds with formula and tables.' },
      { label: 'Convert lbs to kg', href: '/convert-lbs-to-kg', description: 'Convert pounds to kilograms with formula and tables.' },
    ],
  },
  {
    title: 'Time converters',
    items: [
      { label: 'Military Time Converter', href: '/military-time-converter', description: 'Convert military time to regular time and regular time to military time.' },
    ],
  },
]

usePageSeo('sitemap')
useBreadcrumbJsonLd(breadcrumbs)
</script>
