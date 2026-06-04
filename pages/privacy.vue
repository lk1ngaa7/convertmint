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
        <p>ConvertMintTools provides browser-based converter tools. The current tools do not require sign-up and do not intentionally store the conversion values you enter.</p>
        <section>
          <h2 class="text-xl font-bold text-gray-950">Browser-based calculations</h2>
          <p class="mt-2">Conversions are calculated in your browser. The site does not need a backend calculation API for the current tools.</p>
        </section>
        <section>
          <h2 class="text-xl font-bold text-gray-950">Analytics and logs</h2>
          <p class="mt-2">This project does not include an analytics script in the current codebase. Cloudflare may process access logs, CDN logs, and security logs when serving the website.</p>
        </section>
        <section>
          <h2 class="text-xl font-bold text-gray-950">Cookies</h2>
          <p class="mt-2">The current site does not set its own account or advertising cookies. Cloudflare or browser infrastructure may use technical cookies or similar mechanisms where required.</p>
        </section>
        <section>
          <h2 class="text-xl font-bold text-gray-950">Contact</h2>
          <p class="mt-2">Questions about privacy can be sent to <a class="font-semibold text-blue-700" href="mailto:hello@convertminttools.com">hello@convertminttools.com</a>.</p>
        </section>
      </div>
    </BaseCard>
  </main>
</template>

<script setup lang="ts">
import { pages } from '~/data/pages'

const page = pages.privacy
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Company', path: '/about' },
  { name: 'Privacy Policy', path: '/privacy' },
]

usePageSeo('privacy')
useBreadcrumbJsonLd(breadcrumbs)
</script>
