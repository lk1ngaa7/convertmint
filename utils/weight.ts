import { parseNonNegativeNumberInput, type ParsedNumberInput } from './validation'

export const KG_TO_LBS = 2.2046226218

export function kgToLbs(kg: number): number {
  return kg * KG_TO_LBS
}

export function lbsToKg(lbs: number): number {
  return lbs / KG_TO_LBS
}

export function parseWeightInput(input: string): ParsedNumberInput {
  return parseNonNegativeNumberInput(input, 'Weight values cannot be negative for this converter.')
}
