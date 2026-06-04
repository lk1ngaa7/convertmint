<template>
  <main class="mx-auto max-w-4xl space-y-8 px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
    <Breadcrumbs :items="breadcrumbs" />
    <section class="space-y-3">
      <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
      <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
      <p class="text-lg leading-8 text-gray-600">{{ page.subtitle }}</p>
    </section>

    <BaseCard>
      <div class="space-y-4 text-base leading-7 text-gray-700">
        <p>ConvertMintTools is a collection of simple browser-based converter tools built to help users get fast, clear answers without signing up.</p>
        <p>The current tools focus on weight and time conversions, including kg to lbs, lbs to kg, multi-unit weight conversion, and military time conversion.</p>
        <p>Conversion results are based on standard conversion factors and are designed for everyday reference. For engineering, medical, legal, or financial decisions, check results independently.</p>
        <p>
          Learn more through the
          <NuxtLink class="font-semibold text-blue-700" to="/contact">contact page</NuxtLink>,
          <NuxtLink class="font-semibold text-blue-700" to="/privacy">privacy policy</NuxtLink>, and
          <NuxtLink class="font-semibold text-blue-700" to="/terms">terms of service</NuxtLink>.
        </p>
      </div>
    </BaseCard>
  </main>
</template>

<script setup lang="ts">
import { pages } from '~/data/pages'

const page = pages.about
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Company', path: '/about' },
  { name: 'About ConvertMintTools', path: '/about' },
]

usePageSeo('about')
useBreadcrumbJsonLd(breadcrumbs)
</script>
