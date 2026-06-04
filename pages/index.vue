<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <section class="space-y-4 sm:space-y-5">
      <div class="max-w-3xl space-y-3">
        <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
        <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
        <p class="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
          Convert weight, time, and common units instantly with simple browser-based tools.
        </p>
      </div>
      <MultiUnitWeightConverter
        initial-amount="80"
        initial-from="kg"
        initial-to="lb"
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

    <section aria-labelledby="converter-categories" class="space-y-4">
      <h2 id="converter-categories" class="text-2xl font-bold tracking-normal text-gray-950">
        Converter categories
      </h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <BaseCard>
          <h3 class="font-semibold text-gray-950">Weight Converters</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">Common weight and mass conversions.</p>
          <NuxtLink to="/weight-converter" class="mt-3 inline-flex min-h-11 items-center font-semibold text-blue-700">
            Open weight converters
          </NuxtLink>
        </BaseCard>
        <BaseCard>
          <h3 class="font-semibold text-gray-950">Time Converters</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">Military time and time format conversion tools.</p>
          <NuxtLink to="/military-time-converter" class="mt-3 inline-flex min-h-11 items-center font-semibold text-blue-700">
            Open time converter
          </NuxtLink>
        </BaseCard>
      </div>
    </section>

    <section aria-labelledby="why-use-convertminttools" class="space-y-4">
      <h2 id="why-use-convertminttools" class="text-2xl font-bold tracking-normal text-gray-950">
        Why use ConvertMintTools
      </h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <BaseCard v-for="item in trustItems" :key="item">
          <p class="text-sm font-semibold text-gray-950">{{ item }}</p>
        </BaseCard>
      </div>
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
const trustItems = [
  'Fast browser-based tools',
  'No account required',
  'Clear formulas and examples',
  'Mobile-friendly converter pages',
]

usePageSeo('home')
useHomeJsonLd()
</script>
