// 场景页的结构化数据。所有数据带 lastVerified + sourceUrl 兜底
// （数据可能过时，页面文案提示用户到官方渠道确认）

import { formatWeightResult } from '~/utils/format-number'
import { kgToLbs, lbsToKg } from '~/utils/weight'

// =====================================================================
// 场景 1：航司行李限重对照
// =====================================================================

export interface AirlineBaggageLimit {
  airline: string
  region: string
  checkedKg: number        // 经济舱默认托运单件上限（kg）
  checkedLb: number        // 转 lb 的四舍五入整数（视觉用）
  carryOnKg: number | null // 随身重量限（部分美国航司不设）
  carryOnLb: number | null
  note?: string
}

// 数据来源：各航司 2026 年 11 月官网公示（Economy 舱默认单件上限）
// 若超出需加付或改用多件
export const airlineBaggageLimits: AirlineBaggageLimit[] = [
  { airline: 'American Airlines',  region: 'North America',    checkedKg: 23, checkedLb: 50, carryOnKg: null, carryOnLb: null, note: 'US carriers do not set a strict carry-on weight; focus on size' },
  { airline: 'Delta Air Lines',    region: 'North America',    checkedKg: 23, checkedLb: 50, carryOnKg: null, carryOnLb: null, note: 'US carriers do not set a strict carry-on weight; focus on size' },
  { airline: 'United Airlines',    region: 'North America',    checkedKg: 23, checkedLb: 50, carryOnKg: null, carryOnLb: null, note: 'US carriers do not set a strict carry-on weight; focus on size' },
  { airline: 'Lufthansa',          region: 'Europe',           checkedKg: 23, checkedLb: 51, carryOnKg: 8,    carryOnLb: 18 },
  { airline: 'Air France',         region: 'Europe',           checkedKg: 23, checkedLb: 51, carryOnKg: 12,   carryOnLb: 26 },
  { airline: 'British Airways',    region: 'Europe',           checkedKg: 23, checkedLb: 51, carryOnKg: 23,   carryOnLb: 51 },
  { airline: 'Emirates',           region: 'Middle East / Asia', checkedKg: 30, checkedLb: 66, carryOnKg: 7,  carryOnLb: 15 },
  { airline: 'Singapore Airlines', region: 'Asia',             checkedKg: 30, checkedLb: 66, carryOnKg: 7,    carryOnLb: 15 },
  { airline: 'Air China',          region: 'China',            checkedKg: 23, checkedLb: 51, carryOnKg: 5,    carryOnLb: 11 },
  { airline: 'China Eastern',      region: 'China',            checkedKg: 23, checkedLb: 51, carryOnKg: 5,    carryOnLb: 11 },
]

export const airlineBaggageDataLastVerified = 'November 2026'

// =====================================================================
// 场景 2：Olympic 杠铃片规格
// =====================================================================

export interface PlateSpec {
  label: string
  lb: number | null
  kg: number
  note?: string
}

// 美式 Olympic（LB 为标注）
export const olympicPlatesLb: PlateSpec[] = [
  { label: '45 lb',   lb: 45,   kg: lbsToKg(45),   note: 'Full plate, standard red/olympic colour' },
  { label: '35 lb',   lb: 35,   kg: lbsToKg(35) },
  { label: '25 lb',   lb: 25,   kg: lbsToKg(25),   note: 'Common for women\'s warm-up sets' },
  { label: '10 lb',   lb: 10,   kg: lbsToKg(10) },
  { label: '5 lb',    lb: 5,    kg: lbsToKg(5) },
  { label: '2.5 lb',  lb: 2.5,  kg: lbsToKg(2.5), note: 'Micro-loading for progression' },
]

// IWF 竞赛规格（KG 为标注，国际标准）
export const iwfPlatesKg: PlateSpec[] = [
  { label: '25 kg',   lb: null, kg: 25,   note: 'Red, competition standard' },
  { label: '20 kg',   lb: null, kg: 20,   note: 'Blue' },
  { label: '15 kg',   lb: null, kg: 15,   note: 'Yellow' },
  { label: '10 kg',   lb: null, kg: 10,   note: 'Green' },
  { label: '5 kg',    lb: null, kg: 5,    note: 'White' },
  { label: '2.5 kg',  lb: null, kg: 2.5,  note: 'Red (change plate)' },
  { label: '1.25 kg', lb: null, kg: 1.25, note: 'Chrome' },
  { label: '0.5 kg',  lb: null, kg: 0.5,  note: 'Chrome, micro-loading' },
  { label: '0.25 kg', lb: null, kg: 0.25, note: 'Chrome, micro-loading' },
]

// Olympic 杠铃本体
export interface BarSpec {
  label: string
  lb: number
  kg: number
  note: string
}

export const olympicBars: BarSpec[] = [
  { label: "Men's Olympic bar",     lb: 44, kg: 20, note: 'IPF / IWF standard for men' },
  { label: "Women's Olympic bar",   lb: 33, kg: 15, note: 'IPF / IWF standard for women, thinner shaft' },
  { label: 'Training bar',          lb: 35, kg: 16, note: 'For technique work and lighter lifters' },
  { label: 'EZ-curl bar',           lb: 20, kg: 9,  note: 'Short, zig-zag shaft for arm work' },
]

// 常见训练总重量（含 20 kg bar）示例
export interface TrainingLoad {
  description: string
  totalKg: number
  totalLb: number
}

export const commonTrainingLoads: TrainingLoad[] = [
  { description: 'Empty 20 kg bar',                                            totalKg: 20,  totalLb: kgToLbs(20) },
  { description: 'Bar + 2 × 10 kg plates',                                     totalKg: 40,  totalLb: kgToLbs(40) },
  { description: 'Bar + 2 × 20 kg plates ("plates" in gym slang)',             totalKg: 60,  totalLb: kgToLbs(60) },
  { description: 'Bar + 2 × 20 kg + 2 × 5 kg (100 kg classic)',                totalKg: 100, totalLb: kgToLbs(100) },
  { description: '225 lb ("two plates" in US gym slang: bar + 2 × 45 lb × 2)', totalKg: lbsToKg(225), totalLb: 225 },
  { description: '315 lb ("three plates": bar + 3 × 45 lb × 2)',               totalKg: lbsToKg(315), totalLb: 315 },
  { description: '405 lb ("four plates": bar + 4 × 45 lb × 2)',                totalKg: lbsToKg(405), totalLb: 405 },
]

export const gymPlateDataLastVerified = 'November 2026'

// =====================================================================
// 场景 3：体重换算表（50-250 lbs 每 5 lbs 一行）
// 列：Pounds / Kilograms / Stones + lbs（英国用法）
// 中性数据，不下 BMI 判断
// =====================================================================

export interface BodyWeightChartRow {
  lb: number
  kg: string
  stones: string
}

function lbsToStones(lb: number): string {
  const whole = Math.floor(lb / 14)
  const rem = lb - whole * 14
  return rem === 0 ? `${whole} st` : `${whole} st ${rem} lb`
}

export const bodyWeightChartRows: BodyWeightChartRow[] = Array.from(
  { length: 41 },
  (_, i) => {
    const lb = 50 + i * 5
    return {
      lb,
      kg: formatWeightResult(lbsToKg(lb)),
      stones: lbsToStones(lb),
    }
  },
)

export const bodyWeightChartLastVerified = 'November 2026'
