export interface ParsedMilitaryTime {
  hours: number | null
  minutes: number | null
  error: string | null
}

export interface MilitaryTimeResult {
  value: string | null
  explanation: string | null
  error: string | null
}

const MILITARY_TIME_ERROR = 'Enter a valid military time from 0000 to 2359.'

function normalizeMilitaryTimeInput(input: string): string | null {
  const trimmed = input.trim()

  if (/^\d{4}$/.test(trimmed)) {
    return `${trimmed.slice(0, 2)}:${trimmed.slice(2)}`
  }

  if (/^\d{1,2}:\d{2}$/.test(trimmed)) {
    return trimmed
  }

  return null
}

export function parseMilitaryTime(input: string): ParsedMilitaryTime {
  const normalized = normalizeMilitaryTimeInput(input)

  if (input.trim() === '') {
    return { hours: null, minutes: null, error: null }
  }

  if (normalized === null) {
    return { hours: null, minutes: null, error: MILITARY_TIME_ERROR }
  }

  const [hoursText, minutesText] = normalized.split(':')
  const hours = Number(hoursText)
  const minutes = Number(minutesText)

  if (!Number.isInteger(hours) || !Number.isInteger(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return { hours: null, minutes: null, error: MILITARY_TIME_ERROR }
  }

  return { hours, minutes, error: null }
}

export function militaryToRegular(input: string): MilitaryTimeResult {
  const parsed = parseMilitaryTime(input)

  if (parsed.error !== null) {
    return { value: null, explanation: null, error: parsed.error }
  }

  if (parsed.hours === null || parsed.minutes === null) {
    return { value: null, explanation: null, error: null }
  }

  const period = parsed.hours >= 12 ? 'PM' : 'AM'
  const regularHours = parsed.hours % 12 === 0 ? 12 : parsed.hours % 12
  const minutes = String(parsed.minutes).padStart(2, '0')
  const value = `${regularHours}:${minutes} ${period}`

  return {
    value,
    explanation: `${input.trim()} is ${value} in regular time.`,
    error: null,
  }
}
