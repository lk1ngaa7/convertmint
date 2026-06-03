<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <section class="space-y-5">
      <div class="max-w-3xl space-y-3">
        <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
        <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
        <p class="text-lg leading-8 text-gray-600">{{ page.subtitle }}</p>
      </div>
      <BidirectionalWeightConverter
        default-unit="kg"
        initial-value="70"
        full-converter-href="/convert-kg-to-lbs"
        full-converter-label="Open full kg to lbs converter"
      />
    </section>

    <section aria-labelledby="popular-weight-conversions" class="space-y-4">
      <h2 id="popular-weight-conversions" class="text-2xl font-bold tracking-normal text-gray-950">
        Popular weight conversions
      </h2>
      <RelatedTools title="Weight tools" heading-id="weight-tools" :tools="relatedTools.weightConverter" />
    </section>

    <div class="grid gap-6 lg:grid-cols-2">
      <FormulaBlock
        title="kg to lbs formula"
        heading-id="weight-kg-to-lbs-formula"
        description="To convert kilograms to pounds, multiply the kilogram value by 2.20462."
        formula="pounds = kilograms × 2.20462"
      />
      <FormulaBlock
        title="lbs to kg formula"
        heading-id="weight-lbs-to-kg-formula"
        description="To convert pounds to kilograms, divide the pound value by 2.20462."
        formula="kilograms = pounds ÷ 2.20462"
      />
    </div>

    <section aria-labelledby="common-weight-units" class="space-y-3">
      <h2 id="common-weight-units" class="text-2xl font-bold tracking-normal text-gray-950">
        Common weight units
      </h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <BaseCard>
          <h3 class="font-semibold text-gray-950">Kilograms</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">
            Kilograms are commonly used in metric countries for body weight, packages, food, and product weights.
          </p>
        </BaseCard>
        <BaseCard>
          <h3 class="font-semibold text-gray-950">Pounds</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">
            Pounds are commonly used in the United States for body weight, shipping, and consumer product weights.
          </p>
        </BaseCard>
      </div>
    </section>

    <FaqBlock :items="faqs.weightConverter" />
    <RelatedTools :tools="relatedTools.weightConverter" />
  </main>
</template>

<script setup lang="ts">
import { faqs } from '~/data/faqs'
import { pages } from '~/data/pages'
import { relatedTools } from '~/data/related-tools'

const page = pages.weightConverter

usePageSeo('weightConverter')
useWebApplicationJsonLd('weightConverter')
useFaqJsonLd(faqs.weightConverter)
</script>
