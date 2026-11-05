<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <Breadcrumbs :items="breadcrumbs" />

    <section class="space-y-4">
      <p class="text-sm font-semibold text-blue-700">Olympic bars · US plates · IWF metric plates · training loads</p>
      <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">lbs to kg gym weight plates</h1>
      <p class="max-w-3xl text-lg leading-8 text-gray-600">
        Weight plates come in two parallel universes: US-labeled plates (45 / 35 / 25 / 10 / 5 / 2.5 lb)
        and IWF-standard competition plates (25 / 20 / 15 / 10 / 5 kg). This page lists both systems and the
        standard Olympic bars, so you can plan a workout in whichever unit your gym uses.
      </p>
      <p class="text-sm text-gray-500">Last verified: {{ lastVerified }}. Conversions use the exact NIST 1959 factor.</p>
    </section>

    <section aria-labelledby="bars" class="space-y-3">
      <h2 id="bars" class="text-2xl font-bold tracking-normal text-gray-950">Olympic bars</h2>
      <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full text-sm">
          <thead class="bg-gray-50 text-left font-semibold text-gray-950">
            <tr>
              <th scope="col" class="px-3 py-2">Bar</th>
              <th scope="col" class="px-3 py-2">Pounds</th>
              <th scope="col" class="px-3 py-2">Kilograms</th>
              <th scope="col" class="px-3 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bar in olympicBars" :key="bar.label" class="border-t border-gray-100 text-gray-700">
              <td class="px-3 py-2 font-medium text-gray-950">{{ bar.label }}</td>
              <td class="px-3 py-2">{{ bar.lb }} lb</td>
              <td class="px-3 py-2">{{ bar.kg }} kg</td>
              <td class="px-3 py-2">{{ bar.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="us-plates" class="space-y-3">
      <h2 id="us-plates" class="text-2xl font-bold tracking-normal text-gray-950">US Olympic plates (labeled in lb)</h2>
      <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full text-sm">
          <thead class="bg-gray-50 text-left font-semibold text-gray-950">
            <tr>
              <th scope="col" class="px-3 py-2">Plate label</th>
              <th scope="col" class="px-3 py-2">Kilograms (exact)</th>
              <th scope="col" class="px-3 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="plate in olympicPlatesLb" :key="plate.label" class="border-t border-gray-100 text-gray-700">
              <td class="px-3 py-2 font-medium text-gray-950">{{ plate.label }}</td>
              <td class="px-3 py-2">{{ formatWeightResult(plate.kg) }} kg</td>
              <td class="px-3 py-2">{{ plate.note ?? '' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="iwf-plates" class="space-y-3">
      <h2 id="iwf-plates" class="text-2xl font-bold tracking-normal text-gray-950">IWF competition plates (labeled in kg)</h2>
      <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full text-sm">
          <thead class="bg-gray-50 text-left font-semibold text-gray-950">
            <tr>
              <th scope="col" class="px-3 py-2">Plate label</th>
              <th scope="col" class="px-3 py-2">Pounds (approx)</th>
              <th scope="col" class="px-3 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="plate in iwfPlatesKg" :key="plate.label" class="border-t border-gray-100 text-gray-700">
              <td class="px-3 py-2 font-medium text-gray-950">{{ plate.label }}</td>
              <td class="px-3 py-2">{{ formatWeightResult(kgToLbs(plate.kg)) }} lb</td>
              <td class="px-3 py-2">{{ plate.note ?? '' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="common-loads" class="space-y-3">
      <h2 id="common-loads" class="text-2xl font-bold tracking-normal text-gray-950">Common training loads in both units</h2>
      <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full text-sm">
          <thead class="bg-gray-50 text-left font-semibold text-gray-950">
            <tr>
              <th scope="col" class="px-3 py-2">Configuration</th>
              <th scope="col" class="px-3 py-2">Total (kg)</th>
              <th scope="col" class="px-3 py-2">Total (lb)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="load in commonTrainingLoads" :key="load.description" class="border-t border-gray-100 text-gray-700">
              <td class="px-3 py-2">{{ load.description }}</td>
              <td class="px-3 py-2">{{ formatWeightResult(load.totalKg) }} kg</td>
              <td class="px-3 py-2">{{ formatWeightResult(load.totalLb) }} lb</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="max-w-3xl text-sm text-gray-500">
        "Plates" in US gym slang means 45 lb plates on each side. "Two plates" (225 lb) is a common bench
        press milestone; "three plates" (315 lb) and "four plates" (405 lb) are strength training reference points.
      </p>
    </section>

    <FaqBlock :items="faqs" />

    <RelatedTools title="Related tools" :tools="relatedTools" />
  </main>
</template>

<script setup lang="ts">
import { commonTrainingLoads, gymPlateDataLastVerified, iwfPlatesKg, olympicBars, olympicPlatesLb } from '~/data/scenarios'
import { formatWeightResult } from '~/utils/format-number'
import { kgToLbs } from '~/utils/weight'

const lastVerified = gymPlateDataLastVerified

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Weight Converters', path: '/weight-converter' },
  { name: 'lbs to kg gym weight plates', path: '/lbs-to-kg-gym-weight-plates' },
]

const faqs = [
  { question: 'How many kg is a 45 lb plate?', answer: 'A 45 lb plate is 20.41 kg. It is not identical to the 20 kg IWF standard plate — close, but about 0.41 kg heavier per plate.' },
  { question: 'How many kg is a Men\'s Olympic bar?', answer: 'The men\'s Olympic bar is 20 kg (44 lb). The women\'s Olympic bar is 15 kg (33 lb), with a thinner shaft.' },
  { question: 'What does "two plates" mean?', answer: 'In US gym slang, "two plates" means 45 lb plates loaded on each side of a bar — 2 × 2 × 45 lb plus a 45 lb bar = 225 lb total (102.06 kg).' },
  { question: 'Is a 45 lb plate the same as a 20 kg plate?', answer: 'No. 45 lb = 20.41 kg, while a 20 kg IWF plate is 20 kg exactly. On a loaded bar this difference accumulates — 10 plates per side differ by about 4 kg total.' },
  { question: 'How many pounds is 100 kg on the bar?', answer: '100 kg equals 220.46 lb. A common configuration is a 20 kg bar + 2 × 20 kg plates + 2 × 20 kg plates = 100 kg (220 lb).' },
  { question: 'Why do US and international plates differ?', answer: 'US gyms historically used pound-labeled plates for bodybuilding and general training. IWF (International Weightlifting Federation) uses kilograms for Olympic competition. Many modern gyms stock both.' },
]

const relatedTools = [
  { title: 'Convert lbs to kg (any value)', description: 'Enter any pound value to see the exact kilogram equivalent.', href: '/convert-lbs-to-kg' },
  { title: 'Convert kg to lbs (any value)', description: 'Reverse direction: kilograms to pounds.', href: '/convert-kg-to-lbs' },
  { title: '100 lbs to kg', description: 'A single specific number page for 100 lb.', href: '/100-lbs-to-kg' },
]

const canonicalPath = '/lbs-to-kg-gym-weight-plates'
const title = 'lbs to kg Gym Weight Plates - Olympic Bars, US and IWF Plates'
const description = 'Olympic bars, US lb-labeled plates and IWF kg-labeled plates compared in both units. Common training loads (two plates, three plates) in kg and lb.'

useProgrammaticPageSeo({
  title,
  description,
  canonical: `https://convertminttools.com${canonicalPath}/`,
})
useBreadcrumbJsonLd(breadcrumbs)
useFaqJsonLd(faqs)
useWebApplicationJsonLdInline({
  name: 'lbs to kg gym weight plates',
  url: `https://convertminttools.com${canonicalPath}/`,
  description,
})
</script>
