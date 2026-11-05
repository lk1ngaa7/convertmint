<template>
  <main class="mx-auto max-w-4xl space-y-8 px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
    <Breadcrumbs :items="breadcrumbs" />
    <section class="space-y-3">
      <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
      <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
      <p class="text-lg leading-8 text-gray-600">{{ page.subtitle }}</p>
    </section>

    <BaseCard>
      <div class="space-y-4 text-base leading-7 text-gray-700">
        <p>
          ConvertMintTools is a collection of simple browser-based converter tools built to help users
          get fast, clear answers without signing up. Maintained by the ConvertMintTools team since 2026.
        </p>
        <p>
          The current tools focus on weight and time conversions, including kg to lbs, lbs to kg,
          multi-unit weight conversion, and military time conversion. Every converter runs entirely
          in the browser — no server call, no tracking of your input values.
        </p>

        <h2 class="pt-2 text-xl font-semibold text-gray-950">How we calculate</h2>
        <p>
          Weight conversions use the <strong>international avoirdupois pound</strong>:
          1&nbsp;lb&nbsp;=&nbsp;0.45359237&nbsp;kg exactly (1959 international agreement).
          This is the definition referenced by the
          <a href="https://www.nist.gov/pml/weights-and-measures/si-units-mass" rel="external" class="font-semibold text-blue-700">U.S. National Institute of Standards and Technology (NIST)</a>
          and the <a href="https://www.bipm.org/en/measurement-units" rel="external" class="font-semibold text-blue-700">International Bureau of Weights and Measures (BIPM)</a>.
          The reciprocal factor used in displays is 1&nbsp;kg&nbsp;=&nbsp;2.2046226218&nbsp;lb.
        </p>
        <p>
          Military time conversions treat the 24-hour clock from 0000 to 2359 with no daylight-saving
          offset. 0000 maps to 12:00&nbsp;AM, 1200 to 12:00&nbsp;PM, and 2400 is rejected as invalid.
        </p>

        <h2 class="pt-2 text-xl font-semibold text-gray-950">Accuracy and rounding</h2>
        <p>
          Displayed numbers are rounded for readability (typically 2 decimal places for weight,
          exact HH:MM for time). For engineering, medical, legal, or financial decisions,
          always re-check against a primary source before acting.
        </p>

        <h2 class="pt-2 text-xl font-semibold text-gray-950">Updates and feedback</h2>
        <p>
          Spot a bug or want a new converter? Reach out through the
          <NuxtLink class="font-semibold text-blue-700" to="/contact">contact page</NuxtLink>.
          For data handling, see our
          <NuxtLink class="font-semibold text-blue-700" to="/privacy">privacy policy</NuxtLink>
          and
          <NuxtLink class="font-semibold text-blue-700" to="/terms">terms of service</NuxtLink>.
        </p>
      </div>
    </BaseCard>
  </main>
</template>

<script setup lang="ts">
import { pages } from '~/data/pages'

const page = pages.about
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Company', path: '/about' },
  { name: 'About ConvertMintTools', path: '/about' },
]

usePageSeo('about')
useBreadcrumbJsonLd(breadcrumbs)
</script>
