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

    <!-- Phase 2 场景页入口 -->
    <section aria-labelledby="scenario-guides" class="space-y-4">
      <h2 id="scenario-guides" class="text-2xl font-bold tracking-normal text-gray-950">
        Scenario guides
      </h2>
      <p class="max-w-3xl text-sm text-gray-600">
        Context-specific weight guides for travel, body weight reference, and gym training.
      </p>
      <div class="grid gap-4 sm:grid-cols-3">
        <NuxtLink
          v-for="guide in scenarioGuides"
          :key="guide.href"
          :to="guide.href"
          class="group block rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-700"
        >
          <p class="text-base font-semibold text-gray-950 group-hover:text-blue-700">{{ guide.title }}</p>
          <p class="mt-2 text-sm leading-6 text-gray-600">{{ guide.description }}</p>
        </NuxtLink>
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

const scenarioGuides = [
  { title: 'lbs to kg body weight chart', description: '50-250 lb body weight reference table with kilograms and UK stones.', href: '/lbs-to-kg-body-weight-chart' },
  { title: 'lbs to kg luggage weight guide', description: 'Checked and carry-on weight limits for 10 major airlines in both units.', href: '/lbs-to-kg-luggage-weight-guide' },
  { title: 'lbs to kg gym weight plates', description: 'Olympic bars, US lb plates, IWF metric plates, and common training loads.', href: '/lbs-to-kg-gym-weight-plates' },
]

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
