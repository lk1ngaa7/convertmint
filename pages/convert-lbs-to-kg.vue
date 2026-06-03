<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <section class="space-y-5">
      <div class="max-w-3xl space-y-3">
        <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
        <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
        <p class="text-lg leading-8 text-gray-600">{{ page.subtitle }}</p>
      </div>
      <BidirectionalWeightConverter default-unit="lbs" initial-value="150" />
    </section>

    <FormulaBlock
      title="lbs to kg formula"
      heading-id="lbs-to-kg-formula"
      description="To convert pounds to kilograms, divide the pound value by 2.20462."
      formula="kilograms = pounds ÷ 2.20462"
    />

    <ConversionTable
      title="Common lbs to kg conversions"
      heading-id="common-lbs-to-kg-conversions"
      description="Use these common pound values as quick reference examples."
      :headers="['Pounds', 'Kilograms']"
      :rows="lbsToKgRows"
    />

    <section aria-labelledby="how-to-convert-lbs-to-kg" class="space-y-3">
      <h2 id="how-to-convert-lbs-to-kg" class="text-2xl font-bold tracking-normal text-gray-950">
        How to convert lbs to kg
      </h2>
      <p class="max-w-3xl text-sm leading-6 text-gray-600">
        Enter the pound value in the converter above, or divide the lbs value by 2.20462. The result is the equivalent weight in kilograms.
      </p>
    </section>

    <FaqBlock :items="faqs.lbsToKg" />
    <RelatedTools :tools="relatedTools.lbsToKg" />
  </main>
</template>

<script setup lang="ts">
import { lbsToKgRows } from '~/data/conversion-tables'
import { faqs } from '~/data/faqs'
import { pages } from '~/data/pages'
import { relatedTools } from '~/data/related-tools'

const page = pages.lbsToKg

usePageSeo('lbsToKg')
useWebApplicationJsonLd('lbsToKg')
useFaqJsonLd(faqs.lbsToKg)
</script>
