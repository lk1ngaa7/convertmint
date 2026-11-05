<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <Breadcrumbs :items="breadcrumbs" />

    <section class="space-y-4">
      <p class="text-sm font-semibold text-blue-700">10 major airlines · checked + carry-on · pounds and kilograms</p>
      <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">lbs to kg luggage weight guide</h1>
      <p class="max-w-3xl text-lg leading-8 text-gray-600">
        Every major airline publishes luggage limits in either pounds or kilograms, which means travelers constantly
        need to cross-check the two. This guide lists the default economy-class per-piece limits for 10 major
        international carriers, in both units, so you can quickly see whether a bag is within spec.
      </p>
      <p class="text-sm text-gray-500">
        Last verified: {{ lastVerified }}. Limits change — always confirm the current policy on the airline's
        official website before you travel, especially for premium cabins, codeshare flights, and route-specific exceptions.
      </p>
    </section>

    <section aria-labelledby="airline-table" class="space-y-3">
      <h2 id="airline-table" class="text-2xl font-bold tracking-normal text-gray-950">Economy-class default luggage limits</h2>

      <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full text-sm">
          <thead class="bg-gray-50 text-left font-semibold text-gray-950">
            <tr>
              <th scope="col" class="px-3 py-2">Airline</th>
              <th scope="col" class="px-3 py-2">Region</th>
              <th scope="col" class="px-3 py-2">Checked (per piece)</th>
              <th scope="col" class="px-3 py-2">Carry-on</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in airlineBaggageLimits" :key="row.airline" class="border-t border-gray-100 text-gray-700">
              <td class="px-3 py-2 font-medium text-gray-950">{{ row.airline }}</td>
              <td class="px-3 py-2">{{ row.region }}</td>
              <td class="px-3 py-2">{{ row.checkedLb }} lb / {{ row.checkedKg }} kg</td>
              <td class="px-3 py-2">
                <template v-if="row.carryOnKg === null">
                  No strict weight (size-based)
                </template>
                <template v-else>
                  {{ row.carryOnLb }} lb / {{ row.carryOnKg }} kg
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-sm text-gray-500">
        US carriers (American, Delta, United) do not publish a strict carry-on weight limit for standard
        economy on domestic flights; they focus on size and ability to self-lift the bag. On international
        routes they may apply a weight limit — always check the specific itinerary.
      </p>
    </section>

    <section aria-labelledby="checked-vs-carry" class="space-y-3">
      <h2 id="checked-vs-carry" class="text-2xl font-bold tracking-normal text-gray-950">Checked vs carry-on in plain English</h2>
      <div class="max-w-3xl space-y-3 text-base leading-7 text-gray-700">
        <p>
          <strong>Checked bag</strong>: goes in the aircraft hold. Most international standard is
          <strong>23 kg (51 lb)</strong> per piece in economy; Middle East and some Asia-Pacific carriers
          allow <strong>30 kg (66 lb)</strong>. Exceeding the limit usually triggers an overweight fee or
          forces you to split into two pieces.
        </p>
        <p>
          <strong>Carry-on</strong>: stays with you in the cabin. Weight limits in Europe and Asia are
          typically <strong>7-10 kg (15-22 lb)</strong>, enforced at the gate on some low-cost or
          budget-focused routes. US full-service carriers rarely enforce a specific carry-on weight,
          but size (the three-dimensional bin fit) is always checked.
        </p>
        <p>
          <strong>Personal item</strong>: in addition to the carry-on, most carriers allow a small laptop
          bag or purse that fits under the seat. This is usually not weighed.
        </p>
      </div>
    </section>

    <section aria-labelledby="how-to-weigh" class="space-y-3">
      <h2 id="how-to-weigh" class="text-2xl font-bold tracking-normal text-gray-950">How to weigh your luggage at home</h2>
      <div class="max-w-3xl space-y-3 text-base leading-7 text-gray-700">
        <p>
          A <strong>luggage scale</strong> (handheld, around 10 USD) is the most accurate option. Hook it
          through the top handle and lift briefly; most scales hold the reading.
        </p>
        <p>
          A <strong>bathroom scale</strong> works too: weigh yourself first, then weigh yourself holding the
          bag, and subtract. This is less precise but good enough to tell whether you're near the limit.
        </p>
        <p>
          Pack 1-2 kg (2-4 lb) under the stated limit. Airline check-in scales can read slightly high,
          and this buffer avoids last-minute repacking at the counter.
        </p>
      </div>
    </section>

    <FaqBlock :items="faqs" />

    <RelatedTools title="Related tools" :tools="relatedTools" />
  </main>
</template>

<script setup lang="ts">
import { airlineBaggageDataLastVerified, airlineBaggageLimits } from '~/data/scenarios'

const lastVerified = airlineBaggageDataLastVerified

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Weight Converters', path: '/weight-converter' },
  { name: 'lbs to kg luggage weight guide', path: '/lbs-to-kg-luggage-weight-guide' },
]

const faqs = [
  { question: 'What is the standard checked bag weight limit?', answer: 'For most international economy tickets it is 23 kg (51 lb) per piece. Middle East and Southeast Asia carriers often allow 30 kg (66 lb).' },
  { question: 'How many kg is 50 lb?', answer: '50 lb equals 22.68 kg. US carriers use 50 lb as the standard checked-bag limit, which is close to but not identical to the 23 kg international standard.' },
  { question: 'How many lb is 23 kg?', answer: '23 kg equals 50.71 lb. This is the standard European and international per-piece checked limit for economy class.' },
  { question: 'Do US airlines have a carry-on weight limit?', answer: 'Full-service US carriers (American, Delta, United) typically do not enforce a strict carry-on weight on domestic economy. They check size (the bin fit). Low-cost carriers and international routes may differ.' },
  { question: 'What happens if my bag is 1 lb over the limit?', answer: 'Policy varies. Some carriers waive 1-2 lb without comment; others charge the full overweight fee (often 100 USD or more). Pack with a 1-2 kg buffer to be safe.' },
  { question: 'Is the data on this page always current?', answer: 'This guide reflects published economy-class defaults as of November 2026. Always confirm on the airline\'s official website for your specific route and fare class.' },
]

const relatedTools = [
  { title: 'Convert lbs to kg (any value)', description: 'Enter any pound value to see the exact kilogram equivalent.', href: '/convert-lbs-to-kg' },
  { title: 'Convert kg to lbs (any value)', description: 'Reverse direction: kilograms to pounds.', href: '/convert-kg-to-lbs' },
  { title: 'lbs to kg body weight chart', description: 'A 50-250 lb body weight reference table.', href: '/lbs-to-kg-body-weight-chart' },
]

const canonicalPath = '/lbs-to-kg-luggage-weight-guide'
const title = 'lbs to kg Luggage Weight Guide - Airline Baggage Limits Compared'
const description = 'Luggage weight limits for 10 major airlines in both pounds and kilograms. Checked, carry-on, how to weigh at home, and standard international allowances.'

useProgrammaticPageSeo({
  title,
  description,
  canonical: `https://convertminttools.com${canonicalPath}/`,
})
useBreadcrumbJsonLd(breadcrumbs)
useFaqJsonLd(faqs)
useWebApplicationJsonLdInline({
  name: 'lbs to kg luggage weight guide',
  url: `https://convertminttools.com${canonicalPath}/`,
  description,
})
</script>
