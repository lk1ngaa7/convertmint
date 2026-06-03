import { kgToLbs, lbsToKg, parseWeightInput } from '../utils/weight'
import { formatWeightResult } from '../utils/format-number'

describe('weight conversion', () => {
  it('converts kg to lbs', () => {
    expect(formatWeightResult(kgToLbs(1))).toBe('2.2')
    expect(formatWeightResult(kgToLbs(10))).toBe('22.05')
    expect(formatWeightResult(kgToLbs(100))).toBe('220.46')
  })

  it('converts lbs to kg', () => {
    expect(formatWeightResult(lbsToKg(1))).toBe('0.45')
    expect(formatWeightResult(lbsToKg(150))).toBe('68.04')
  })

  it('supports decimal inputs', () => {
    const parsed = parseWeightInput('7.5')

    expect(parsed).toEqual({ value: 7.5, error: null })
    expect(formatWeightResult(kgToLbs(parsed.value ?? 0))).toBe('16.53')
  })

  it('handles empty input without an error', () => {
    expect(parseWeightInput('')).toEqual({ value: null, error: null })
    expect(parseWeightInput('   ')).toEqual({ value: null, error: null })
  })

  it('rejects non-number input', () => {
    expect(parseWeightInput('abc')).toEqual({
      value: null,
      error: 'Please enter a valid number.',
    })
  })

  it('rejects negative input', () => {
    expect(parseWeightInput('-1')).toEqual({
      value: null,
      error: 'Weight values cannot be negative for this converter.',
    })
  })
})
