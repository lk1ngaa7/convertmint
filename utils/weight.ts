import { parseNonNegativeNumberInput, type ParsedNumberInput } from './validation'

export const KG_TO_LBS = 2.2046226218

export type WeightUnitCode = 'kg' | 'g' | 'mg' | 'lb' | 'oz' | 'stone' | 'metric-ton' | 'us-ton'

export interface WeightUnitDefinition {
  value: WeightUnitCode
  label: string
  shortLabel: string
  kilograms: number
}

export interface WeightConversionResult {
  value: number | null
  error: string | null
}

export const weightUnits: WeightUnitDefinition[] = [
  { value: 'kg', label: 'Kilograms', shortLabel: 'kg', kilograms: 1 },
  { value: 'g', label: 'Grams', shortLabel: 'g', kilograms: 0.001 },
  { value: 'mg', label: 'Milligrams', shortLabel: 'mg', kilograms: 0.000001 },
  { value: 'lb', label: 'Pounds', shortLabel: 'lb', kilograms: 1 / KG_TO_LBS },
  { value: 'oz', label: 'Ounces', shortLabel: 'oz', kilograms: 1 / 35.27396195 },
  { value: 'stone', label: 'Stone', shortLabel: 'stone', kilograms: 14 / KG_TO_LBS },
  { value: 'metric-ton', label: 'Metric tons', shortLabel: 'metric ton', kilograms: 1000 },
  { value: 'us-ton', label: 'US tons', shortLabel: 'US ton', kilograms: 2000 / KG_TO_LBS },
]

export function kgToLbs(kg: number): number {
  return kg * KG_TO_LBS
}

export function lbsToKg(lbs: number): number {
  return lbs / KG_TO_LBS
}

export function parseWeightInput(input: string): ParsedNumberInput {
  return parseNonNegativeNumberInput(input, 'Weight values cannot be negative for this converter.')
}

export function getWeightUnit(unit: WeightUnitCode): WeightUnitDefinition {
  const definition = weightUnits.find((item) => item.value === unit)

  if (definition === undefined) {
    throw new Error(`Unsupported weight unit: ${unit}`)
  }

  return definition
}

export function convertWeight(value: number, from: WeightUnitCode, to: WeightUnitCode): number {
  const kilograms = value * getWeightUnit(from).kilograms

  return kilograms / getWeightUnit(to).kilograms
}

export function parsePositiveWeightInput(input: string): ParsedNumberInput {
  const parsed = parseWeightInput(input)

  if (parsed.error !== null || parsed.value === null) {
    return parsed
  }

  if (parsed.value === 0) {
    return { value: null, error: 'Please enter a positive number.' }
  }

  return parsed
}
