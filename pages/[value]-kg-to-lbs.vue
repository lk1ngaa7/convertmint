<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <Breadcrumbs :items="breadcrumbs" />

    <section class="space-y-5">
      <div class="max-w-3xl space-y-3">
        <p class="text-sm font-semibold text-blue-700">Instant conversion · No sign-up · Browser-based</p>
        <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ payload.h1 }}</h1>
        <p class="text-lg leading-8 text-gray-600">{{ payload.subtitle }}</p>
        <p class="text-xl font-semibold text-gray-950">{{ payload.resultSentence }}</p>
      </div>
      <BidirectionalWeightConverter default-unit="kg" :initial-value="String(value)" />
    </section>

    <FormulaBlock
      title="Conversion formula"
      heading-id="conversion-formula"
      description="To convert kilograms to pounds, multiply by 2.20462. Based on the international avoirdupois pound (NIST 1959 agreement; 1 lb = 0.45359237 kg exactly)."
      formula="pounds = kilograms × 2.20462"
    />

    <ConversionTable
      title="Nearby kilograms to pounds values"
      heading-id="nearby-values"
      description="A quick reference for values around this one."
      :headers="['Kilograms', 'Pounds']"
      :rows="neighborRows"
    />

    <section aria-labelledby="context-paragraph" class="space-y-3">
      <h2 id="context-paragraph" class="text-2xl font-bold tracking-normal text-gray-950">
        Common context for {{ value }} kg
      </h2>
      <p class="max-w-3xl text-base leading-7 text-gray-700">
        {{ contextParagraph }}
      </p>
    </section>

    <FaqBlock :items="payload.faqs" />

    <RelatedTools
      title="Related tools"
      :tools="relatedTools"
    />
  </main>
</template>

<script setup lang="ts">
import {
  getKgContextParagraph,
  getKgToLbsPayload,
  getNeighborKgToLbsRows,
  isValidKgToLbsValue,
} from '~/data/programmatic-pages'

const route = useRoute()
const parsedValue = Number(route.params.value)

if (!Number.isFinite(parsedValue) || !isValidKgToLbsValue(parsedValue)) {
  throw createError({ statusCode: 404, statusMessage: 'Programmatic kg-to-lbs value not available', fatal: true })
}

const value = parsedValue
const payload = getKgToLbsPayload(value)
const neighborRows = getNeighborKgToLbsRows(value)
const contextParagraph = getKgContextParagraph(value)

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Weight Converters', path: '/weight-converter' },
  { name: 'Convert kg to lbs', path: '/convert-kg-to-lbs' },
  { name: `${value} kg to lbs`, path: `/${value}-kg-to-lbs` },
]

const relatedTools = [
  { title: 'Convert kg to lbs (any value)', description: 'Full kilograms to pounds converter with a bidirectional input.', href: '/convert-kg-to-lbs' },
  { title: 'Weight Converter', description: 'Multi-unit weight hub for kg, g, mg, lb, oz, stone, tons.', href: '/weight-converter' },
  { title: 'lbs to kg body weight chart', description: 'A 50-250 lb body weight reference table with kilograms and stones.', href: '/lbs-to-kg-body-weight-chart' },
]

useProgrammaticPageSeo({
  title: payload.title,
  description: payload.description,
  canonical: payload.canonical,
})
useBreadcrumbJsonLd(breadcrumbs)
useFaqJsonLd(payload.faqs)
useWebApplicationJsonLdInline({
  name: payload.h1,
  url: payload.canonical,
  description: payload.description,
})
</script>
