import { formatWeightResult } from '~/utils/format-number'
import { kgToLbs, lbsToKg, parseWeightInput } from '~/utils/weight'

export type WeightUnit = 'kg' | 'lbs'

export interface WeightConversionState {
  kgInput: Ref<string>
  lbsInput: Ref<string>
  activeUnit: Ref<WeightUnit>
  error: ComputedRef<string | null>
  resultValue: ComputedRef<string | null>
  resultDescription: ComputedRef<string | null>
  copyText: ComputedRef<string | null>
  updateKg: (value: string) => void
  updateLbs: (value: string) => void
  clear: () => void
}

export function useWeightConverter(defaultUnit: WeightUnit = 'kg', initialValue = ''): WeightConversionState {
  const kgInput = ref('')
  const lbsInput = ref('')
  const activeUnit = ref<WeightUnit>(defaultUnit)

  const activeInput = computed(() => (activeUnit.value === 'kg' ? kgInput.value : lbsInput.value))
  const parsed = computed(() => parseWeightInput(activeInput.value))

  const error = computed(() => parsed.value.error)

  const resultValue = computed(() => {
    if (error.value !== null || parsed.value.value === null) {
      return null
    }

    if (activeUnit.value === 'kg') {
      return `${formatWeightResult(parsed.value.value)} kg = ${formatWeightResult(kgToLbs(parsed.value.value))} lbs`
    }

    return `${formatWeightResult(parsed.value.value)} lbs = ${formatWeightResult(lbsToKg(parsed.value.value))} kg`
  })

  const resultDescription = computed(() => {
    if (error.value !== null || parsed.value.value === null) {
      return null
    }

    if (activeUnit.value === 'kg') {
      return 'To convert kilograms to pounds, multiply the kilogram value by 2.20462.'
    }

    return 'To convert pounds to kilograms, divide the pound value by 2.20462.'
  })

  const copyText = computed(() => resultValue.value)

  function updateKg(value: string): void {
    activeUnit.value = 'kg'
    kgInput.value = value

    const next = parseWeightInput(value)
    lbsInput.value = next.value === null || next.error !== null ? '' : formatWeightResult(kgToLbs(next.value))
  }

  function updateLbs(value: string): void {
    activeUnit.value = 'lbs'
    lbsInput.value = value

    const next = parseWeightInput(value)
    kgInput.value = next.value === null || next.error !== null ? '' : formatWeightResult(lbsToKg(next.value))
  }

  function clear(): void {
    kgInput.value = ''
    lbsInput.value = ''
    activeUnit.value = defaultUnit
  }

  if (initialValue.trim() !== '') {
    if (defaultUnit === 'kg') {
      updateKg(initialValue)
    } else {
      updateLbs(initialValue)
    }
  }

  return {
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
  }
}
