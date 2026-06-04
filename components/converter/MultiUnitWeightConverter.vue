<template>
  <div class="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
    <ConverterCard title="Weight converter" description="Convert between common metric and US weight units.">
      <BaseInput
        id="weight-amount"
        :model-value="amount"
        label="Amount"
        placeholder="e.g. 80"
        inputmode="decimal"
        :error="error"
        @update:model-value="amount = $event"
      />

      <div class="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-end">
        <label class="grid gap-2 text-sm font-medium text-gray-700">
          <span>From unit</span>
          <select v-model="fromUnit" class="min-h-12 rounded-[10px] border border-gray-300 bg-white px-3 text-base text-gray-950 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20">
            <option v-for="unit in weightUnits" :key="unit.value" :value="unit.value">
              {{ unit.label }}
            </option>
          </select>
        </label>

        <BaseButton variant="secondary" @click="swapUnits">
          Swap
        </BaseButton>

        <label class="grid gap-2 text-sm font-medium text-gray-700">
          <span>To unit</span>
          <select v-model="toUnit" class="min-h-12 rounded-[10px] border border-gray-300 bg-white px-3 text-base text-gray-950 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20">
            <option v-for="unit in weightUnits" :key="unit.value" :value="unit.value">
              {{ unit.label }}
            </option>
          </select>
        </label>
      </div>

      <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 lg:hidden" aria-live="polite">
        <p class="text-xs font-semibold uppercase tracking-normal text-blue-700">Result</p>
        <p v-if="error" class="mt-2 text-sm font-medium text-red-800">Error: {{ error }}</p>
        <template v-else-if="resultValue">
          <p class="mt-1 text-[32px] font-bold leading-tight tracking-normal text-gray-950">{{ resultValue }}</p>
          <div class="mt-3">
            <CopyButton :text="resultValue" />
          </div>
        </template>
        <p v-else class="mt-1 text-sm leading-6 text-gray-600">Enter a value to see the conversion result.</p>
      </div>

      <div class="flex flex-wrap gap-3">
        <BaseButton variant="secondary" @click="clear">
          Clear
        </BaseButton>
        <NuxtLink
          v-if="fullConverterHref"
          :to="fullConverterHref"
          class="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {{ fullConverterLabel }}
        </NuxtLink>
      </div>
    </ConverterCard>

    <div class="hidden lg:block">
      <ConverterResult
        :value="resultValue"
        :description="resultDescription"
        :error="error"
        :copy-text="resultValue"
        empty-text="Enter a value to see the conversion result."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatWeightResult } from '~/utils/format-number'
import { convertWeight, getWeightUnit, parseWeightInput, weightUnits, type WeightUnitCode } from '~/utils/weight'

const props = withDefaults(
  defineProps<{
    initialAmount?: string
    initialFrom?: WeightUnitCode
    initialTo?: WeightUnitCode
    fullConverterHref?: string
    fullConverterLabel?: string
  }>(),
  {
    initialAmount: '80',
    initialFrom: 'kg',
    initialTo: 'lb',
    fullConverterHref: '',
    fullConverterLabel: 'Open full converter',
  },
)

const amount = ref(props.initialAmount)
const fromUnit = ref<WeightUnitCode>(props.initialFrom)
const toUnit = ref<WeightUnitCode>(props.initialTo)

const parsed = computed(() => {
  const parsedValue = parseWeightInput(amount.value)

  if (parsedValue.error === 'Weight values cannot be negative for this converter.') {
    return { value: null, error: 'Please enter a positive number.' }
  }

  return parsedValue
})

const error = computed(() => parsed.value.error)

const resultValue = computed(() => {
  if (parsed.value.value === null || error.value !== null) {
    return null
  }

  const result = convertWeight(parsed.value.value, fromUnit.value, toUnit.value)

  return `${formatWeightResult(parsed.value.value)} ${getWeightUnit(fromUnit.value).shortLabel} = ${formatWeightResult(result)} ${getWeightUnit(toUnit.value).shortLabel}`
})

const resultDescription = computed(() => {
  if (resultValue.value === null) {
    return null
  }

  return `Converted from ${getWeightUnit(fromUnit.value).label.toLowerCase()} to ${getWeightUnit(toUnit.value).label.toLowerCase()} using standard weight conversion factors.`
})

function swapUnits(): void {
  const nextFrom = toUnit.value
  toUnit.value = fromUnit.value
  fromUnit.value = nextFrom
}

function clear(): void {
  amount.value = ''
}
</script>
