import { formatWeightResult } from '~/utils/format-number'
import { kgToLbs, lbsToKg } from '~/utils/weight'

const commonKgValues = [1, 5, 10, 20, 50, 60, 70, 80, 90, 100]
const bodyKgValues = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 110, 120]
const commonLbsValues = [1, 5, 10, 20, 50, 100, 150, 180, 200, 250]
const travelLbsValues = [50, 75, 100, 120, 130, 140, 150, 160, 170, 180, 200, 220, 250, 300]

export const kgToLbsRows = commonKgValues.map((kg) => [
  `${kg} kg`,
  `${formatWeightResult(kgToLbs(kg))} lbs`,
])

export const lbsToKgRows = commonLbsValues.map((lbs) => [
  `${lbs} lbs`,
  `${formatWeightResult(lbsToKg(lbs))} kg`,
])

export const bodyWeightKgToLbsRows = bodyKgValues.map((kg) => [
  `${kg} kg`,
  `${formatWeightResult(kgToLbs(kg))} lb`,
])

export const travelLbsToKgRows = travelLbsValues.map((lbs) => [
  `${lbs} lb`,
  `${formatWeightResult(lbsToKg(lbs))} kg`,
])

export const weightUnitRows = [
  ['1 kg', '2.20462 lb'],
  ['1 lb', '0.453592 kg'],
  ['1 oz', '28.3495 g'],
  ['1 stone', '14 lb'],
  ['1 metric ton', '1000 kg'],
  ['1 US ton', '2000 lb'],
]

export const militaryTimeRows = [
  ['0000', '12:00 AM'],
  ['0100', '1:00 AM'],
  ['0600', '6:00 AM'],
  ['0900', '9:00 AM'],
  ['1200', '12:00 PM'],
  ['1300', '1:00 PM'],
  ['1430', '2:30 PM'],
  ['1800', '6:00 PM'],
  ['2100', '9:00 PM'],
  ['2359', '11:59 PM'],
]
