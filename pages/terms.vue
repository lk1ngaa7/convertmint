<template>
  <main class="mx-auto max-w-4xl space-y-8 px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
    <Breadcrumbs :items="breadcrumbs" />
    <section class="space-y-3">
      <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
      <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
      <p class="text-lg leading-8 text-gray-600">{{ page.subtitle }}</p>
    </section>

    <BaseCard>
      <div class="space-y-5 text-base leading-7 text-gray-700">
        <section>
          <h2 class="text-xl font-bold text-gray-950">General information only</h2>
          <p class="mt-2">ConvertMintTools is provided for general information and convenience. Converter results should be reviewed before important use.</p>
        </section>
        <section>
          <h2 class="text-xl font-bold text-gray-950">Accuracy and responsibility</h2>
          <p class="mt-2">We try to use standard conversion factors, but we do not guarantee that every result is suitable for every situation. Check results independently for engineering, medical, legal, financial, or other high-risk uses.</p>
        </section>
        <section>
          <h2 class="text-xl font-bold text-gray-950">Acceptable use</h2>
          <p class="mt-2">Do not misuse the website, interfere with its operation, or attempt to access systems that are not intended for public use.</p>
        </section>
        <section>
          <h2 class="text-xl font-bold text-gray-950">Intellectual property</h2>
          <p class="mt-2">The site design, text, and code are protected by applicable intellectual property laws unless otherwise stated.</p>
        </section>
        <section>
          <h2 class="text-xl font-bold text-gray-950">Contact</h2>
          <p class="mt-2">Questions about these terms can be sent to <a class="font-semibold text-blue-700" href="mailto:hello@convertminttools.com">hello@convertminttools.com</a>.</p>
        </section>
      </div>
    </BaseCard>
  </main>
</template>

<script setup lang="ts">
import { pages } from '~/data/pages'

const page = pages.terms
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Company', path: '/about' },
  { name: 'Terms of Service', path: '/terms' },
]

usePageSeo('terms')
useBreadcrumbJsonLd(breadcrumbs)
</script>
