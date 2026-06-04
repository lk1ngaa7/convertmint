import { militaryToRegular, parseMilitaryTime, regularToMilitary } from '../utils/military-time'

describe('military time conversion', () => {
  it.each([
    ['0000', '12:00 AM'],
    ['0030', '12:30 AM'],
    ['0900', '9:00 AM'],
    ['1200', '12:00 PM'],
    ['1430', '2:30 PM'],
    ['2359', '11:59 PM'],
    ['23:59', '11:59 PM'],
    ['0:00', '12:00 AM'],
  ])('converts %s to %s', (input, expected) => {
    expect(militaryToRegular(input)).toMatchObject({
      value: expected,
      error: null,
    })
  })

  it('handles empty input without an error', () => {
    expect(parseMilitaryTime('')).toEqual({ hours: null, minutes: null, error: null })
  })

  it.each([
    ['12:00 AM', '0000'],
    ['12:00 PM', '1200'],
    ['2:30 PM', '1430'],
    ['11:59 PM', '2359'],
    ['6:00 AM', '0600'],
  ])('converts regular time %s to military time %s', (input, expected) => {
    expect(regularToMilitary(input)).toMatchObject({
      value: expected,
      error: null,
    })
  })

  it.each(['24:00', '2400', '2360', '2460', '25:00', '12 PM', 'abc'])('rejects invalid time %s', (input) => {
    expect(militaryToRegular(input)).toEqual({
      value: null,
      explanation: null,
      error: 'Enter a valid military time from 0000 to 2359.',
    })
  })

  it.each(['abc', '', '13:00 PM', '2:60 PM'])('handles regular time validation for %s', (input) => {
    const result = regularToMilitary(input)

    if (input === '') {
      expect(result).toEqual({ value: null, explanation: null, error: null })
    } else {
      expect(result.value).toBeNull()
      expect(result.error).not.toBeNull()
    }
  })
})
