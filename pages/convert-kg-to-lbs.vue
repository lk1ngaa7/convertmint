<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <Breadcrumbs :items="breadcrumbs" />
    <section class="space-y-5">
      <div class="max-w-3xl space-y-3">
        <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
        <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
        <p class="text-lg leading-8 text-gray-600">{{ page.subtitle }}</p>
      </div>
      <BidirectionalWeightConverter default-unit="kg" initial-value="80" />
    </section>

    <section aria-labelledby="kg-to-lbs-result-explanation" class="space-y-3">
      <h2 id="kg-to-lbs-result-explanation" class="text-2xl font-bold tracking-normal text-gray-950">
        Result explanation
      </h2>
      <p class="max-w-3xl text-sm leading-6 text-gray-600">
        80 kg = 176.37 lb. To convert kilograms to pounds, multiply the kg value by the standard factor 2.2046226218.
      </p>
    </section>

    <FormulaBlock
      title="kg to lbs formula"
      heading-id="kg-to-lbs-formula"
      description="To convert kilograms to pounds, multiply the kilogram value by 2.20462."
      formula="pounds = kilograms × 2.20462"
    />

    <ConversionTable
      title="Common kg to lbs conversions"
      heading-id="common-kg-to-lbs-conversions"
      description="Use these common kilogram values as quick reference examples."
      :headers="['Kilograms', 'Pounds']"
      :rows="kgToLbsRows"
    />

    <ConversionTable
      title="Body weight conversions"
      heading-id="body-weight-kg-to-lbs-conversions"
      description="Common body weight values converted from kilograms to pounds."
      :headers="['Kilograms', 'Pounds']"
      :rows="bodyWeightKgToLbsRows"
    />

    <section aria-labelledby="how-to-convert-kg-to-lbs" class="space-y-3">
      <h2 id="how-to-convert-kg-to-lbs" class="text-2xl font-bold tracking-normal text-gray-950">
        How to convert kg to lbs
      </h2>
      <p class="max-w-3xl text-sm leading-6 text-gray-600">
        Enter the kilogram value in the converter above, or multiply the kg value by 2.20462. The exact factor is 2.2046226218, while 2.2 is often enough for a quick estimate. This is useful for body weight, package weight, and shipping labels that use pounds.
      </p>
    </section>

    <section aria-labelledby="when-to-use-kg-and-lbs" class="space-y-3">
      <h2 id="when-to-use-kg-and-lbs" class="text-2xl font-bold tracking-normal text-gray-950">
        When to use kg and lbs
      </h2>
      <p class="max-w-3xl text-sm leading-6 text-gray-600">
        Kilograms are common in metric countries, science, and international shipping. Pounds are common in the United States for body weight, package weight, and product labels.
      </p>
    </section>

    <FaqBlock :items="faqs.kgToLbs" />
    <RelatedTools :tools="relatedTools.kgToLbs" />
  </main>
</template>

<script setup lang="ts">
import { bodyWeightKgToLbsRows, kgToLbsRows } from '~/data/conversion-tables'
import { faqs } from '~/data/faqs'
import { pages } from '~/data/pages'
import { relatedTools } from '~/data/related-tools'

const page = pages.kgToLbs
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Weight Converters', path: '/weight-converter' },
  { name: 'Convert kg to lbs', path: '/convert-kg-to-lbs' },
]

usePageSeo('kgToLbs')
useWebApplicationJsonLd('kgToLbs')
useFaqJsonLd(faqs.kgToLbs)
useBreadcrumbJsonLd(breadcrumbs)
</script>
