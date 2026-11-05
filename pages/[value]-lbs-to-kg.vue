<template>
  <main class="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
    <Breadcrumbs :items="breadcrumbs" />

    <section class="space-y-5">
      <div class="max-w-3xl space-y-3">
        <p class="text-sm font-semibold text-blue-700">Instant conversion · No sign-up · Browser-based</p>
        <h1 class="text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">{{ payload.h1 }}</h1>
        <p class="text-lg leading-8 text-gray-600">{{ payload.subtitle }}</p>
        <!-- SSR 独立渲染的 result 文案，保证不随用户交互覆盖 -->
        <p class="text-xl font-semibold text-gray-950">{{ payload.resultSentence }}</p>
      </div>
      <BidirectionalWeightConverter default-unit="lbs" :initial-value="String(value)" />
    </section>

    <FormulaBlock
      title="Conversion formula"
      heading-id="conversion-formula"
      description="To convert pounds to kilograms, divide by 2.20462. Based on the international avoirdupois pound (NIST 1959 agreement; 1 lb = 0.45359237 kg exactly)."
      formula="kilograms = pounds ÷ 2.20462"
    />

    <ConversionTable
      title="Nearby pounds to kilograms values"
      heading-id="nearby-values"
      description="A quick reference for values around this one."
      :headers="['Pounds', 'Kilograms']"
      :rows="neighborRows"
    />

    <section aria-labelledby="context-paragraph" class="space-y-3">
      <h2 id="context-paragraph" class="text-2xl font-bold tracking-normal text-gray-950">
        Common context for {{ value }} lbs
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
  getLbsContextParagraph,
  getLbsToKgPayload,
  getNeighborLbsToKgRows,
  isValidLbsToKgValue,
} from '~/data/programmatic-pages'

// route.params.value 是字符串，解析并校验在预设清单内
const route = useRoute()
const parsedValue = Number(route.params.value)

if (!Number.isFinite(parsedValue) || !isValidLbsToKgValue(parsedValue)) {
  // SSG 时不会被触发（因为 routes 数组控制了），但对手动输入一个不存在的数字做 404 兜底
  throw createError({ statusCode: 404, statusMessage: 'Programmatic lbs-to-kg value not available', fatal: true })
}

const value = parsedValue
const payload = getLbsToKgPayload(value)
const neighborRows = getNeighborLbsToKgRows(value)
const contextParagraph = getLbsContextParagraph(value)

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Weight Converters', path: '/weight-converter' },
  { name: 'Convert lbs to kg', path: '/convert-lbs-to-kg' },
  { name: `${value} lbs to kg`, path: `/${value}-lbs-to-kg` },
]

const relatedTools = [
  { title: 'Convert lbs to kg (any value)', description: 'Full pounds to kilograms converter with a bidirectional input.', href: '/convert-lbs-to-kg' },
  { title: 'Weight Converter', description: 'Multi-unit weight hub for kg, g, mg, lb, oz, stone, tons.', href: '/weight-converter' },
  { title: 'lbs to kg body weight chart', description: 'A 50-250 lb body weight reference table with kilograms and stones.', href: '/lbs-to-kg-body-weight-chart' },
]

// SEO + 结构化数据
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
