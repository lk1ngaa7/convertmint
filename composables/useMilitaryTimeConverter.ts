import { militaryToRegular } from '~/utils/military-time'

export interface MilitaryTimeConversionState {
  input: Ref<string>
  resultValue: ComputedRef<string | null>
  resultDescription: ComputedRef<string | null>
  error: ComputedRef<string | null>
  copyText: ComputedRef<string | null>
  updateInput: (value: string) => void
  setExample: (value: string) => void
  clear: () => void
}

export function useMilitaryTimeConverter(initialValue = ''): MilitaryTimeConversionState {
  const input = ref(initialValue)
  const conversion = computed(() => militaryToRegular(input.value))

  const resultValue = computed(() => conversion.value.value)
  const resultDescription = computed(() => conversion.value.explanation)
  const error = computed(() => conversion.value.error)
  const copyText = computed(() => {
    if (conversion.value.value === null) {
      return null
    }

    return `${input.value.trim()} is ${conversion.value.value} in regular time.`
  })

  function updateInput(value: string): void {
    input.value = value
  }

  function setExample(value: string): void {
    input.value = value
  }

  function clear(): void {
    input.value = ''
  }

  return {
    input,
    resultValue,
    resultDescription,
    error,
    copyText,
    updateInput,
    setExample,
    clear,
  }
}
