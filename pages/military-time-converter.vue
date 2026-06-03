<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <section class="space-y-5">
      <div class="max-w-3xl space-y-3">
        <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
        <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
        <p class="text-lg leading-8 text-gray-600">{{ page.subtitle }}</p>
      </div>
      <MilitaryTimeTool />
    </section>

    <ConversionTable
      title="Military time chart"
      heading-id="military-time-chart"
      description="Use this chart to compare common military time values with regular 12-hour time."
      :headers="['Military Time', 'Regular Time']"
      :rows="militaryTimeRows"
    />

    <section aria-labelledby="common-military-time-examples" class="space-y-4">
      <h2 id="common-military-time-examples" class="text-2xl font-bold tracking-normal text-gray-950">
        Common military time examples
      </h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <BaseCard v-for="row in militaryTimeRows.slice(0, 6)" :key="row[0]">
          <p class="text-sm font-semibold text-gray-500">{{ row[0] }}</p>
          <p class="mt-2 text-xl font-bold text-gray-950">{{ row[1] }}</p>
        </BaseCard>
      </div>
    </section>

    <section aria-labelledby="how-to-read-military-time" class="space-y-3">
      <h2 id="how-to-read-military-time" class="text-2xl font-bold tracking-normal text-gray-950">
        How to read military time
      </h2>
      <p class="max-w-3xl text-sm leading-6 text-gray-600">
        Military time uses a 24-hour clock. Values from 0000 to 1159 are AM, 1200 is noon, and values from 1300 to 2359 are PM after subtracting 12 from the hour.
      </p>
    </section>

    <FaqBlock :items="faqs.militaryTime" />
    <RelatedTools :tools="relatedTools.militaryTime" />
  </main>
</template>

<script setup lang="ts">
import MilitaryTimeTool from '~/components/converter/MilitaryTimeConverter.vue'
import { militaryTimeRows } from '~/data/conversion-tables'
import { faqs } from '~/data/faqs'
import { pages } from '~/data/pages'
import { relatedTools } from '~/data/related-tools'

const page = pages.militaryTime

usePageSeo('militaryTime')
useWebApplicationJsonLd('militaryTime')
useFaqJsonLd(faqs.militaryTime)
</script>
