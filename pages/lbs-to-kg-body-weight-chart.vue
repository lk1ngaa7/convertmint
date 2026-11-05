<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <Breadcrumbs :items="breadcrumbs" />

    <section class="space-y-4">
      <p class="text-sm font-semibold text-blue-700">Full reference table · No sign-up · Browser-based</p>
      <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">lbs to kg body weight chart</h1>
      <p class="max-w-3xl text-lg leading-8 text-gray-600">
        A quick reference table of body weight values from 50 lb to 250 lb in 5-pound increments.
        Each row shows the equivalent weight in kilograms and in UK stones (st) notation.
      </p>
      <p class="text-sm text-gray-500">Last verified: {{ lastVerified }}. Conversion uses the exact NIST 1959 factor (1 lb = 0.45359237 kg).</p>
    </section>

    <section aria-labelledby="chart" class="space-y-3">
      <h2 id="chart" class="text-2xl font-bold tracking-normal text-gray-950">Body weight reference table (50-250 lb)</h2>

      <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full text-sm">
          <thead class="bg-gray-50 text-left font-semibold text-gray-950">
            <tr>
              <th scope="col" class="px-4 py-2">Pounds</th>
              <th scope="col" class="px-4 py-2">Kilograms</th>
              <th scope="col" class="px-4 py-2">Stones (UK)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in bodyWeightChartRows" :key="row.lb" class="border-t border-gray-100 text-gray-700">
              <td class="px-4 py-2 font-medium">{{ row.lb }} lb</td>
              <td class="px-4 py-2">{{ row.kg }} kg</td>
              <td class="px-4 py-2">{{ row.stones }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="how-to-read" class="space-y-3">
      <h2 id="how-to-read" class="text-2xl font-bold tracking-normal text-gray-950">How to use this chart</h2>
      <div class="max-w-3xl space-y-3 text-base leading-7 text-gray-700">
        <p>
          <strong>If you know a weight in pounds</strong> (common on US bathroom scales and medical charts),
          scan the left column, then read the kilogram value directly to the right. For UK users, the third
          column shows the same weight in stones and leftover pounds — the format most commonly used in UK
          medical settings and some news reporting.
        </p>
        <p>
          <strong>If you want a value not on the chart</strong> (for example 157 lb), round to the nearest
          5-pound row for a quick estimate, or use the full converter linked below for an exact result.
        </p>
        <p>
          This chart is intentionally neutral: it maps numbers to numbers without implying any judgment about
          health, fitness, or ideal weight. Interpretation of body weight depends on height, body composition,
          age and many other factors that are outside the scope of a conversion tool. For medical questions,
          consult a qualified healthcare professional.
        </p>
      </div>
    </section>

    <FaqBlock :items="faqs" />

    <RelatedTools title="Related tools" :tools="relatedTools" />
  </main>
</template>

<script setup lang="ts">
import { bodyWeightChartLastVerified, bodyWeightChartRows } from '~/data/scenarios'

const lastVerified = bodyWeightChartLastVerified

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Weight Converters', path: '/weight-converter' },
  { name: 'lbs to kg body weight chart', path: '/lbs-to-kg-body-weight-chart' },
]

const faqs = [
  { question: 'What is 150 lb in kg?', answer: '150 lb equals 68.04 kg when rounded to two decimals, or 10 st 10 lb in UK stones notation.' },
  { question: 'How do UK stones (st) relate to pounds?', answer: '1 stone equals 14 pounds. So 70 lb is 5 st 0 lb, 150 lb is 10 st 10 lb, and 200 lb is 14 st 4 lb.' },
  { question: 'Is this chart accurate for medical use?', answer: 'The conversions use the exact NIST 1959 factor (1 lb = 0.45359237 kg). Display rounding is to two decimals. For clinical decisions always use the chart or scale calibration your facility prescribes.' },
  { question: 'Why does this chart only go from 50 to 250 lb?', answer: 'That range covers most adult body weight reference use cases. For values outside the range, use the full converter linked below.' },
  { question: 'Does this chart make BMI or health judgments?', answer: 'No. The chart is a neutral number map. Interpretation of body weight depends on height, body composition and age, which are outside the scope of a unit conversion tool.' },
  { question: 'Can I print this chart?', answer: 'Yes. Browser print should render the table cleanly on a single sheet. Use landscape orientation for best fit.' },
]

const relatedTools = [
  { title: 'Convert lbs to kg (any value)', description: 'Full pounds to kilograms converter with a bidirectional input.', href: '/convert-lbs-to-kg' },
  { title: 'Convert kg to lbs (any value)', description: 'Reverse direction: enter kilograms, get pounds.', href: '/convert-kg-to-lbs' },
  { title: 'Weight Converter', description: 'Multi-unit weight hub for kg, g, mg, lb, oz, stone, tons.', href: '/weight-converter' },
]

const canonicalPath = '/lbs-to-kg-body-weight-chart'
const title = 'lbs to kg Body Weight Chart - 50 to 250 Pounds in Kilograms'
const description = 'A full lbs to kg body weight reference table from 50 lb to 250 lb in 5-pound steps, with kilogram and UK stones equivalents. Neutral conversion only; no BMI judgment.'

useProgrammaticPageSeo({
  title,
  description,
  canonical: `https://convertminttools.com${canonicalPath}/`,
})
useBreadcrumbJsonLd(breadcrumbs)
useFaqJsonLd(faqs)
useWebApplicationJsonLdInline({
  name: 'lbs to kg body weight chart',
  url: `https://convertminttools.com${canonicalPath}/`,
  description,
})
</script>
