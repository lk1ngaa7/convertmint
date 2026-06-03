export interface ParsedNumberInput {
  value: number | null
  error: string | null
}

export function parseNonNegativeNumberInput(input: string, negativeMessage: string): ParsedNumberInput {
  const trimmed = input.trim()

  if (trimmed === '') {
    return { value: null, error: null }
  }

  const value = Number(trimmed)

  if (!Number.isFinite(value)) {
    return { value: null, error: 'Please enter a valid number.' }
  }

  if (value < 0) {
    return { value: null, error: negativeMessage }
  }

  return { value, error: null }
}
