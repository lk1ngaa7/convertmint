<template>
  <div class="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
    <ConverterCard
      title="Weight converter"
      description="Enter either kilograms or pounds. The other field updates instantly."
    >
      <div class="grid gap-4 sm:grid-cols-2">
        <BaseInput
          id="kilograms"
          :model-value="kgInput"
          label="Kilograms"
          placeholder="e.g. 80"
          inputmode="decimal"
          :error="activeUnit === 'kg' ? error : null"
          @update:model-value="updateKg"
        />
        <BaseInput
          id="pounds"
          :model-value="lbsInput"
          label="Pounds"
          placeholder="e.g. 176.37"
          inputmode="decimal"
          :error="activeUnit === 'lbs' ? error : null"
          @update:model-value="updateLbs"
        />
      </div>
      <div class="rounded-lg border border-blue-100 bg-blue-50 p-3 lg:hidden" aria-live="polite">
        <p class="text-xs font-semibold uppercase tracking-normal text-blue-700">
          Result
        </p>
        <p v-if="error" class="mt-2 text-sm font-medium text-red-800">
          Error: {{ error }}
        </p>
        <template v-else-if="resultValue">
          <p class="mt-1 text-[32px] font-bold leading-tight tracking-normal text-gray-950">
            {{ resultValue }}
          </p>
          <div class="mt-3">
            <CopyButton :text="copyText || resultValue" />
          </div>
        </template>
        <p v-else class="mt-1 text-sm leading-6 text-gray-600">
          Enter a weight value to see the conversion result.
        </p>
      </div>
      <div class="flex flex-wrap gap-3">
        <BaseButton variant="secondary" @click="clear">
          Clear
        </BaseButton>
        <NuxtLink
          v-if="fullConverterHref"
          :to="fullConverterHref"
          class="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
        :copy-text="copyText"
        empty-text="Enter a weight value to see the conversion result."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { WeightUnit } from '~/composables/useWeightConverter'

const props = withDefaults(
  defineProps<{
    defaultUnit?: WeightUnit
    initialValue?: string
    fullConverterHref?: string
    fullConverterLabel?: string
  }>(),
  {
    defaultUnit: 'kg',
    initialValue: '',
    fullConverterHref: '',
    fullConverterLabel: 'Open full converter',
  },
)

const {
  kgInput,
  lbsInput,
  activeUnit,
  error,
  resultValue,
  resultDescription,
  copyText,
  updateKg,
  updateLbs,
  clear,
} = useWeightConverter(props.defaultUnit, props.initialValue)
</script>
