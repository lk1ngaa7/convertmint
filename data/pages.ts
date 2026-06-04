export type PageKey = 'home' | 'kgToLbs' | 'lbsToKg' | 'militaryTime' | 'weightConverter'

export interface PageMeta {
  path: string
  title: string
  description: string
  h1: string
  subtitle: string
  trustNote: string
  ogTitle: string
  ogDescription: string
  type: 'website' | 'article'
}

export const siteUrl = 'https://convertminttools.com'

export const pages: Record<PageKey, PageMeta> = {
  home: {
    path: '/',
    title: 'Free Unit Converter - Convert Weight and Time Online',
    description: 'Convert units online with fast browser-based tools. Convert kg to lbs, lbs to kg, military time, and more with simple formulas and examples.',
    h1: 'Free Unit Converter',
    subtitle: 'Convert weight and time units instantly with simple browser-based tools.',
    trustNote: 'No sign-up required · Fast results · Works in your browser',
    ogTitle: 'Free Unit Converter - Convert Weight and Time Online',
    ogDescription: 'Fast browser-based converter tools for weight and time.',
    type: 'website',
  },
  kgToLbs: {
    path: '/convert-kg-to-lbs',
    title: 'Convert kg to lbs - Kilograms to Pounds Converter',
    description: 'Convert kg to lbs instantly with a free kilograms to pounds calculator. Enter any kg value, see the formula, and use the kg to lbs conversion table.',
    h1: 'Convert kg to lbs',
    subtitle: 'Enter a weight in kilograms and get the pound value instantly, with formula and conversion table.',
    trustNote: 'Instant conversion · No sign-up · Browser-based',
    ogTitle: 'Convert kg to lbs - Kilograms to Pounds Converter',
    ogDescription: 'Convert kilograms to pounds instantly with formula and common examples.',
    type: 'article',
  },
  lbsToKg: {
    path: '/convert-lbs-to-kg',
    title: 'Convert lbs to kg - Pounds to Kilograms Converter',
    description: 'Convert lbs to kg instantly with a free pounds to kilograms calculator. Enter any lbs value, see the formula, and use the lbs to kg conversion table.',
    h1: 'Convert lbs to kg',
    subtitle: 'Enter a weight in pounds and get the kilogram value instantly, with formula and conversion table.',
    trustNote: 'Instant conversion · No sign-up · Browser-based',
    ogTitle: 'Convert lbs to kg - Pounds to Kilograms Converter',
    ogDescription: 'Convert pounds to kilograms instantly with formula and common examples.',
    type: 'article',
  },
  militaryTime: {
    path: '/military-time-converter',
    title: 'Military Time Converter - Convert Military Time to Regular Time',
    description: 'Convert military time to regular 12-hour time instantly. Enter values like 1430 or 23:45 and see the AM/PM result with examples and a military time chart.',
    h1: 'Military Time Converter',
    subtitle: 'Convert military time like 1430 or 23:45 to regular 12-hour time instantly.',
    trustNote: 'Fast conversion · Clear examples · No sign-up',
    ogTitle: 'Military Time Converter - Convert Military Time to Regular Time',
    ogDescription: 'Convert military time like 1430 or 23:45 to regular AM/PM time.',
    type: 'article',
  },
  weightConverter: {
    path: '/weight-converter',
    title: 'Weight Converter - Convert kg, lbs, Pounds and Kilograms',
    description: 'Use a simple weight converter to convert kilograms to pounds, pounds to kilograms, and common weight units with formulas and conversion examples.',
    h1: 'Weight Converter',
    subtitle: 'Convert kilograms, pounds, and common weight units with simple formulas and examples.',
    trustNote: 'Fast weight conversion · Clear formulas · No sign-up',
    ogTitle: 'Weight Converter - Convert kg, lbs, Pounds and Kilograms',
    ogDescription: 'Convert kilograms and pounds with simple formulas and examples.',
    type: 'article',
  },
}
