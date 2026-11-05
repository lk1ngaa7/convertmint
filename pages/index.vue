<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <section class="space-y-4 sm:space-y-5">
      <div class="max-w-3xl space-y-3">
        <p class="text-sm font-semibold text-blue-700">{{ page.trustNote }}</p>
        <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ page.h1 }}</h1>
        <p class="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
          Convert weight, time, and common units instantly with simple browser-based tools.
        </p>
      </div>
      <MultiUnitWeightConverter
        initial-amount="80"
        initial-from="kg"
        initial-to="lb"
        full-converter-href="/convert-kg-to-lbs"
        full-converter-label="Open full kg to lbs converter"
      />
    </section>

    <!-- 直接复用 RelatedTools 自带的 H2，避免外层 section 产生"双 H2"冗余 -->
    <RelatedTools
      title="Popular converters"
      heading-id="popular-converters"
      :tools="relatedTools.home"
    />

    <section aria-labelledby="converter-categories" class="space-y-4">
      <h2 id="converter-categories" class="text-2xl font-bold tracking-normal text-gray-950">
        Converter categories
      </h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <BaseCard>
          <h3 class="font-semibold text-gray-950">Weight Converters</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">Common weight and mass conversions.</p>
          <NuxtLink to="/weight-converter" class="mt-3 inline-flex min-h-11 items-center font-semibold text-blue-700">
            Open weight converters
          </NuxtLink>
        </BaseCard>
        <BaseCard>
          <h3 class="font-semibold text-gray-950">Time Converters</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">Military time and time format conversion tools.</p>
          <NuxtLink to="/military-time-converter" class="mt-3 inline-flex min-h-11 items-center font-semibold text-blue-700">
            Open time converter
          </NuxtLink>
        </BaseCard>
      </div>
    </section>

    <section aria-labelledby="why-use-convertminttools" class="space-y-4">
      <h2 id="why-use-convertminttools" class="text-2xl font-bold tracking-normal text-gray-950">
        Why use ConvertMintTools
      </h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <BaseCard v-for="item in trustItems" :key="item">
          <p class="text-sm font-semibold text-gray-950">{{ item }}</p>
        </BaseCard>
      </div>
    </section>

    <!-- E-E-A-T：讲清楚数据怎么来、公式依据什么，建立可信度与 AI 引擎引用价值 -->
    <section aria-labelledby="how-we-keep-conversions-accurate" class="space-y-3">
      <h2 id="how-we-keep-conversions-accurate" class="text-2xl font-bold tracking-normal text-gray-950">
        How we keep conversions accurate
      </h2>
      <div class="max-w-3xl space-y-3 text-base leading-7 text-gray-700">
        <p>
          Weight conversions use the international avoirdupois pound
          (1&nbsp;lb&nbsp;=&nbsp;0.45359237&nbsp;kg exactly, per the 1959 international agreement
          referenced by the <a href="https://www.nist.gov/pml/weights-and-measures/si-units-mass" rel="external" class="font-semibold text-blue-700">NIST definition of mass</a>).
          Time conversions treat military time as a plain 24-hour clock from 0000 to 2359,
          with no daylight-saving offset — just a direct HHMM mapping to 12-hour AM/PM.
        </p>
        <p>
          Every tool page shows the formula and a worked example so results are
          easy to verify by hand. Displayed numbers are rounded for readability;
          for engineering, medical, or legal use, re-check against a primary source.
        </p>
      </div>
    </section>

    <FaqBlock :items="faqs.home" />
    <RelatedTools :tools="relatedTools.home" />
  </main>
</template>

<script setup lang="ts">
import { faqs } from '~/data/faqs'
import { canonicalUrl, pages } from '~/data/pages'
import { relatedTools } from '~/data/related-tools'

const page = pages.home
const trustItems = [
  'Fast browser-based tools',
  'No account required',
  'Clear formulas and examples',
  'Mobile-friendly converter pages',
]

// 首页顶部结构化数据：WebSite + Organization + WebApplication
usePageSeo('home')
useHomeJsonLd()
// 首页 FAQ 区块对应的 FAQPage 结构化数据（之前漏调，AI 引擎可据此引用首页 FAQ）
useFaqJsonLd(faqs.home)
// 首页"Popular converters"列表导出为 ItemList，给 Google sitelinks / carousel 提供数据
// url 字段用 canonicalUrl 保证带尾斜杠，和 CF Pages 的实际 URL 一致
useItemListJsonLd(
  'Popular converters',
  relatedTools.home.map((tool) => ({
    name: tool.title,
    url: canonicalUrl(tool.href),
    description: tool.description,
  })),
)
</script>
