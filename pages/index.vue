<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <section class="space-y-4 sm:space-y-5">
      <div class="max-w-3xl space-y-3">
        <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
        <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
        <p class="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">{{ page.subtitle }}</p>
      </div>
      <BidirectionalWeightConverter
        default-unit="kg"
        initial-value="80"
        full-converter-href="/convert-kg-to-lbs"
        full-converter-label="Open full kg to lbs converter"
      />
    </section>

    <section aria-labelledby="popular-converters" class="space-y-4">
      <h2 id="popular-converters" class="text-2xl font-bold tracking-normal text-gray-950">
        Popular converters
      </h2>
      <RelatedTools title="Popular tools" heading-id="popular-tools" :tools="relatedTools.home" />
    </section>

    <section aria-labelledby="weight-converters" class="space-y-4">
      <h2 id="weight-converters" class="text-2xl font-bold tracking-normal text-gray-950">
        Weight converters
      </h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <NuxtLink
          v-for="tool in relatedTools.weightConverter"
          :key="tool.href"
          :to="tool.href"
          class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md"
        >
          <h3 class="font-semibold text-gray-950">{{ tool.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">{{ tool.description }}</p>
        </NuxtLink>
      </div>
    </section>

    <section aria-labelledby="time-converters" class="space-y-4">
      <h2 id="time-converters" class="text-2xl font-bold tracking-normal text-gray-950">
        Time converters
      </h2>
      <BaseCard>
        <NuxtLink to="/military-time-converter" class="block">
          <h3 class="font-semibold text-gray-950">Military Time Converter</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">
            Convert values like 1430 or 23:45 to regular 12-hour time.
          </p>
        </NuxtLink>
      </BaseCard>
    </section>

    <FaqBlock :items="faqs.home" />
    <RelatedTools :tools="relatedTools.home" />
  </main>
</template>

<script setup lang="ts">
import { faqs } from '~/data/faqs'
import { pages } from '~/data/pages'
import { relatedTools } from '~/data/related-tools'

const page = pages.home

usePageSeo('home')
useHomeJsonLd()
</script>
