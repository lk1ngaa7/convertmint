import { formatNumber, formatWeightResult } from '../utils/format-number'

describe('number formatting', () => {
  it('formats values with up to two decimals by default', () => {
    expect(formatNumber(2)).toBe('2')
    expect(formatNumber(2.2)).toBe('2.2')
    expect(formatNumber(2.204)).toBe('2.2')
    expect(formatNumber(2.205)).toBe('2.21')
  })

  it('uses comma separators for large values', () => {
    expect(formatNumber(12345.678)).toBe('12,345.68')
  })

  it('formats weight results with two decimals at most', () => {
    expect(formatWeightResult(176.369809744)).toBe('176.37')
    expect(formatWeightResult(2)).toBe('2')
  })
})
