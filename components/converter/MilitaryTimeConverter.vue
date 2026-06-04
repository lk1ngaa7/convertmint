<template>
  <div class="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
    <ConverterCard title="Military time converter" description="Convert in either direction with examples.">
      <div class="grid gap-2 rounded-lg bg-gray-100 p-1 sm:grid-cols-2" role="tablist" aria-label="Military time converter mode">
        <button
          type="button"
          class="min-h-11 rounded-md px-3 text-sm font-semibold"
          :class="mode === 'military-to-regular' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600'"
          role="tab"
          :aria-selected="mode === 'military-to-regular'"
          @click="setMode('military-to-regular')"
        >
          Military to Regular
        </button>
        <button
          type="button"
          class="min-h-11 rounded-md px-3 text-sm font-semibold"
          :class="mode === 'regular-to-military' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600'"
          role="tab"
          :aria-selected="mode === 'regular-to-military'"
          @click="setMode('regular-to-military')"
        >
          Regular to Military
        </button>
      </div>

      <BaseInput
        id="time-input"
        :model-value="input"
        :label="inputLabel"
        :placeholder="placeholder"
        :inputmode="mode === 'military-to-regular' ? 'numeric' : 'text'"
        :hint="hint"
        :error="error"
        @update:model-value="input = $event"
      />

      <div class="flex flex-wrap gap-2" :aria-label="examplesLabel">
        <BaseButton
          v-for="example in examples"
          :key="example"
          variant="secondary"
          @click="input = example"
        >
          {{ example }}
        </BaseButton>
      </div>

      <BaseButton variant="secondary" @click="input = ''">
        Clear
      </BaseButton>
    </ConverterCard>

    <ConverterResult
      :value="resultValue"
      :description="resultDescription"
      :error="error"
      :copy-text="copyText"
      :empty-text="emptyText"
    />
  </div>
</template>

<script setup lang="ts">
import { militaryToRegular, regularToMilitary } from '~/utils/military-time'

type Mode = 'military-to-regular' | 'regular-to-military'

const mode = ref<Mode>('military-to-regular')
const input = ref('1430')

const militaryExamples = ['0000', '0600', '0900', '1200', '1430', '1700', '1800', '2359']
const regularExamples = ['12:00 AM', '6:00 AM', '9:00 AM', '12:00 PM', '2:30 PM', '5:00 PM', '6:00 PM', '11:59 PM']

const conversion = computed(() => (
  mode.value === 'military-to-regular'
    ? militaryToRegular(input.value)
    : regularToMilitary(input.value)
))

const inputLabel = computed(() => (mode.value === 'military-to-regular' ? 'Military time' : 'Regular time'))
const placeholder = computed(() => (mode.value === 'military-to-regular' ? 'e.g. 1430 or 14:30' : 'e.g. 2:30 PM'))
const hint = computed(() => (mode.value === 'military-to-regular' ? 'Use 0000 through 2359. A colon is optional.' : 'Use a 12-hour time with AM or PM.'))
const examples = computed(() => (mode.value === 'military-to-regular' ? militaryExamples : regularExamples))
const examplesLabel = computed(() => (mode.value === 'military-to-regular' ? 'Common military time examples' : 'Common regular time examples'))
const emptyText = computed(() => (mode.value === 'military-to-regular' ? 'Enter a military time like 1430 to see the regular time.' : 'Enter a regular time like 2:30 PM to see military time.'))
const resultValue = computed(() => conversion.value.value)
const resultDescription = computed(() => conversion.value.explanation)
const error = computed(() => conversion.value.error)
const copyText = computed(() => conversion.value.explanation)

function setMode(nextMode: Mode): void {
  mode.value = nextMode
  input.value = nextMode === 'military-to-regular' ? '1430' : '2:30 PM'
}
</script>
