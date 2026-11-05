<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <Breadcrumbs :items="breadcrumbs" />
    <section class="space-y-5">
      <div class="max-w-3xl space-y-3">
        <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
        <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
        <p class="text-lg leading-8 text-gray-600">{{ page.subtitle }}</p>
      </div>
      <BidirectionalWeightConverter default-unit="lbs" initial-value="180" />
    </section>

    <section aria-labelledby="lbs-to-kg-result-explanation" class="space-y-3">
      <h2 id="lbs-to-kg-result-explanation" class="text-2xl font-bold tracking-normal text-gray-950">
        Result explanation
      </h2>
      <p class="max-w-3xl text-sm leading-6 text-gray-600">
        180 lb = 81.65 kg. To convert pounds to kilograms, divide the pound value by the standard factor 2.2046226218.
      </p>
    </section>

    <FormulaBlock
      title="lbs to kg formula"
      heading-id="lbs-to-kg-formula"
      description="To convert pounds to kilograms, divide the pound value by 2.20462. Based on the international avoirdupois pound (NIST 1959 agreement; 1 lb = 0.45359237 kg exactly)."
      formula="kilograms = pounds ÷ 2.20462"
    />

    <ConversionTable
      title="Common lbs to kg conversions"
      heading-id="common-lbs-to-kg-conversions"
      description="Use these common pound values as quick reference examples."
      :headers="['Pounds', 'Kilograms']"
      :rows="lbsToKgRows"
    />

    <ConversionTable
      title="Travel and body weight conversions"
      heading-id="travel-body-lbs-to-kg-conversions"
      description="Common luggage, gym, and body weight values converted from pounds to kilograms."
      :headers="['Pounds', 'Kilograms']"
      :rows="travelLbsToKgRows"
    />

    <section aria-labelledby="how-to-convert-lbs-to-kg" class="space-y-3">
      <h2 id="how-to-convert-lbs-to-kg" class="text-2xl font-bold tracking-normal text-gray-950">
        How to convert lbs to kg
      </h2>
      <p class="max-w-3xl text-sm leading-6 text-gray-600">
        Enter the pound value in the converter above, or divide the lbs value by 2.20462. This is useful for US body weight to metric weight, gym equipment, travel luggage limits, and international package weights.
      </p>
    </section>

    <section aria-labelledby="why-kg-is-common" class="space-y-3">
      <h2 id="why-kg-is-common" class="text-2xl font-bold tracking-normal text-gray-950">
        Why kg is commonly used outside the US
      </h2>
      <p class="max-w-3xl text-sm leading-6 text-gray-600">
        Kilograms are part of the metric system, which is used by most countries and many international shipping, travel, and product standards.
      </p>
    </section>

    <!-- Phase 2 programmatic 内链：把具体数字页暴露出来，让 Google crawlLinks 发现 + 传递内链权重 -->
    <section aria-labelledby="popular-lbs-to-kg" class="space-y-4">
      <h2 id="popular-lbs-to-kg" class="text-2xl font-bold tracking-normal text-gray-950">
        Popular lbs to kg conversions
      </h2>
      <p class="max-w-3xl text-sm text-gray-600">
        Jump to a specific pound value for a worked example, nearby values, and context.
      </p>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <NuxtLink
          v-for="n in lbsToKgValues"
          :key="n"
          :to="`/${n}-lbs-to-kg`"
          class="inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-950 hover:border-blue-700 hover:text-blue-700"
        >
          {{ n }} lbs to kg
        </NuxtLink>
      </div>
    </section>

    <FaqBlock :items="faqs.lbsToKg" />
    <RelatedTools :tools="relatedTools.lbsToKg" />
  </main>
</template>

<script setup lang="ts">
import { lbsToKgRows, travelLbsToKgRows } from '~/data/conversion-tables'
import { faqs } from '~/data/faqs'
import { pages } from '~/data/pages'
import { lbsToKgValues } from '~/data/programmatic-pages'
import { relatedTools } from '~/data/related-tools'

const page = pages.lbsToKg
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Weight Converters', path: '/weight-converter' },
  { name: 'Convert lbs to kg', path: '/convert-lbs-to-kg' },
]

usePageSeo('lbsToKg')
useWebApplicationJsonLd('lbsToKg')
useFaqJsonLd(faqs.lbsToKg)
useBreadcrumbJsonLd(breadcrumbs)
</script>
