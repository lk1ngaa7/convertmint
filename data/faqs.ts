import type { FaqItem } from '~/components/seo/FaqBlock.vue'

export const faqs: Record<string, FaqItem[]> = {
  home: [
    {
      question: 'What can I convert on Convert Mint?',
      answer: 'The MVP includes kilograms to pounds, pounds to kilograms, a weight converter, and a military time converter.',
    },
    {
      question: 'Do I need to sign up?',
      answer: 'No. The tools work directly in your browser without an account.',
    },
    {
      question: 'Are the converters free?',
      answer: 'Yes. Convert Mint MVP tools are free to use.',
    },
    {
      question: 'Can I use these tools on mobile?',
      answer: 'Yes. The pages are designed to work on mobile, tablet, and desktop screens.',
    },
  ],
  kgToLbs: [
    {
      question: 'How do you convert kg to lbs?',
      answer: 'Multiply the kilogram value by 2.20462. For example, 80 kg × 2.20462 = 176.37 lbs.',
    },
    {
      question: 'What is 1 kg in pounds?',
      answer: '1 kg is equal to about 2.2 lbs when rounded to two decimal places.',
    },
    {
      question: 'What is the kg to lbs formula?',
      answer: 'The formula is pounds = kilograms × 2.20462.',
    },
    {
      question: 'Is 1 kg equal to 2.2 lbs?',
      answer: 'Yes, 1 kg is commonly rounded to 2.2 lbs. The more precise factor is 2.2046226218.',
    },
    {
      question: 'How many pounds is 80 kg?',
      answer: '80 kg is equal to 176.37 lbs.',
    },
  ],
  lbsToKg: [
    {
      question: 'How do you convert lbs to kg?',
      answer: 'Divide the pound value by 2.20462. For example, 150 lbs ÷ 2.20462 = 68.04 kg.',
    },
    {
      question: 'What is 1 lb in kilograms?',
      answer: '1 lb is equal to about 0.45 kg when rounded to two decimal places.',
    },
    {
      question: 'What is the lbs to kg formula?',
      answer: 'The formula is kilograms = pounds ÷ 2.20462.',
    },
    {
      question: 'How many kilograms is 150 lbs?',
      answer: '150 lbs is equal to 68.04 kg.',
    },
    {
      question: 'Can I convert decimal pounds?',
      answer: 'Yes. Enter a decimal value such as 12.5 lbs and the converter will calculate the kilogram result.',
    },
  ],
  weightConverter: [
    {
      question: 'What does this weight converter support?',
      answer: 'The MVP supports kilograms to pounds and pounds to kilograms.',
    },
    {
      question: 'What is the kg to lbs conversion factor?',
      answer: 'The conversion factor is 2.2046226218 pounds per kilogram.',
    },
    {
      question: 'What is the lbs to kg conversion factor?',
      answer: 'To convert pounds to kilograms, divide by 2.2046226218.',
    },
    {
      question: 'Can I use decimals?',
      answer: 'Yes. Decimal values are supported for both kilograms and pounds.',
    },
    {
      question: 'Does the converter support negative weights?',
      answer: 'No. Negative values are rejected in this converter because MVP weight conversions are intended for ordinary non-negative values.',
    },
  ],
  militaryTime: [
    {
      question: 'What is military time?',
      answer: 'Military time is a 24-hour time format that runs from 0000 at midnight to 2359 one minute before midnight.',
    },
    {
      question: 'How do you convert military time to regular time?',
      answer: 'For times from 1300 to 2359, subtract 12 from the hour and use PM. For 0000, use 12:00 AM.',
    },
    {
      question: 'What is 1430 in regular time?',
      answer: '1430 is 2:30 PM in regular 12-hour time.',
    },
    {
      question: 'Is 0000 midnight?',
      answer: 'Yes. 0000 is midnight, which is 12:00 AM in regular time.',
    },
    {
      question: 'Is 1200 AM or PM in military time?',
      answer: '1200 is 12:00 PM, noon. Midnight is 0000.',
    },
  ],
}
