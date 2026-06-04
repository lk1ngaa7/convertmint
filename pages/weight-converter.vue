<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <Breadcrumbs :items="breadcrumbs" />
    <section class="space-y-5">
      <div class="max-w-3xl space-y-3">
        <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
        <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
        <p class="text-lg leading-8 text-gray-600">{{ page.subtitle }}</p>
      </div>
      <MultiUnitWeightConverter initial-amount="80" initial-from="kg" initial-to="lb" />
    </section>

    <section aria-labelledby="popular-weight-conversions" class="space-y-4">
      <h2 id="popular-weight-conversions" class="text-2xl font-bold tracking-normal text-gray-950">
        Popular weight conversions
      </h2>
      <RelatedTools title="Weight tools" heading-id="weight-tools" :tools="relatedTools.weightConverter" />
    </section>

    <ConversionTable
      title="Common weight conversions"
      heading-id="common-weight-conversions"
      description="Use these common unit relationships as quick references."
      :headers="['Unit', 'Equivalent']"
      :rows="weightUnitRows"
    />

    <section aria-labelledby="common-weight-units" class="space-y-3">
      <h2 id="common-weight-units" class="text-2xl font-bold tracking-normal text-gray-950">
        Common weight units
      </h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <BaseCard>
          <h3 class="font-semibold text-gray-950">Metric units</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">
            Kilograms, grams, milligrams, and metric tons are common in scientific, shipping, food, and international contexts.
          </p>
        </BaseCard>
        <BaseCard>
          <h3 class="font-semibold text-gray-950">US and imperial units</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">
            Pounds, ounces, stone, and US tons are common for body weight, package weight, and everyday measurements in the United States and the UK.
          </p>
        </BaseCard>
      </div>
    </section>

    <FaqBlock :items="faqs.weightConverter" />
    <RelatedTools :tools="relatedTools.weightConverter" />
  </main>
</template>

<script setup lang="ts">
import { weightUnitRows } from '~/data/conversion-tables'
import { faqs } from '~/data/faqs'
import { pages } from '~/data/pages'
import { relatedTools } from '~/data/related-tools'

const page = pages.weightConverter
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Weight Converters', path: '/weight-converter' },
]

usePageSeo('weightConverter')
useCollectionPageJsonLd('weightConverter')
useFaqJsonLd(faqs.weightConverter)
useBreadcrumbJsonLd(breadcrumbs)
</script>
