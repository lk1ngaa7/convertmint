<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <SiteHeader />
    <main class="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <section class="space-y-3">
        <p class="text-sm font-semibold text-blue-700">404</p>
        <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">Page not found</h1>
        <p class="text-lg leading-8 text-gray-600">The page you are looking for does not exist or may have moved.</p>
      </section>

      <BaseCard>
        <h2 class="text-xl font-bold text-gray-950">Try one of these pages</h2>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <NuxtLink v-for="link in links" :key="link.href" :to="link.href" class="inline-flex min-h-11 items-center rounded-lg border border-gray-200 px-3 font-semibold text-blue-700 hover:border-blue-300">
            {{ link.label }}
          </NuxtLink>
        </div>
      </BaseCard>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: {
    statusCode?: number
  }
}>()

const links = [
  { label: 'Home', href: '/' },
  { label: 'Convert kg to lbs', href: '/convert-kg-to-lbs' },
  { label: 'Convert lbs to kg', href: '/convert-lbs-to-kg' },
  { label: 'Military Time Converter', href: '/military-time-converter' },
  { label: 'Weight Converter', href: '/weight-converter' },
]

useHead({
  title: 'Page not found',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>
