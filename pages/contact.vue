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
        <p>You can contact ConvertMintTools to report a conversion issue, suggest a new converter, or share feedback about the current tools.</p>
        <p>This site does not use a backend contact form in Phase 1.</p>
        <p>
          Email:
          <a class="font-semibold text-blue-700" href="mailto:hello@convertminttools.com">hello@convertminttools.com</a>
        </p>
      </div>
    </BaseCard>
  </main>
</template>

<script setup lang="ts">
import { pages } from '~/data/pages'

const page = pages.contact
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Company', path: '/about' },
  { name: 'Contact ConvertMintTools', path: '/contact' },
]

usePageSeo('contact')
useBreadcrumbJsonLd(breadcrumbs)
</script>
