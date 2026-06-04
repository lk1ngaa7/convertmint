import { convertWeight, kgToLbs, lbsToKg, parseWeightInput } from '../utils/weight'
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

  it('converts supported weight units', () => {
    expect(formatWeightResult(convertWeight(1, 'kg', 'lb'))).toBe('2.2')
    expect(formatWeightResult(convertWeight(1, 'lb', 'kg'))).toBe('0.45')
    expect(formatWeightResult(convertWeight(1000, 'g', 'kg'))).toBe('1')
    expect(formatWeightResult(convertWeight(1000, 'mg', 'g'))).toBe('1')
    expect(formatWeightResult(convertWeight(1, 'oz', 'g'))).toBe('28.35')
    expect(formatWeightResult(convertWeight(1, 'stone', 'lb'))).toBe('14')
    expect(formatWeightResult(convertWeight(1, 'metric-ton', 'kg'))).toBe('1,000')
    expect(formatWeightResult(convertWeight(1, 'us-ton', 'lb'))).toBe('2,000')
  })

  it('keeps swap conversions equivalent', () => {
    const pounds = convertWeight(80, 'kg', 'lb')

    expect(formatWeightResult(convertWeight(pounds, 'lb', 'kg'))).toBe('80')
  })
})
