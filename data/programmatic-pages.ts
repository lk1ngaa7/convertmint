// Programmatic 数字页的业务逻辑层：
// - 从每个数字值 N，生成页面所需的所有渲染 payload（title/description/canonical/相邻值表/context/FAQ）
// - 区间式的 context 段落，让每页有差异化的独特内容（避免被 Google 判定为 thin / doorway）
// 数字清单从 ./programmatic-routes.mjs 读，确保和 Nuxt routes、sitemap 脚本同步。

import type { FaqItem } from '~/components/seo/FaqBlock.vue'
import { canonicalUrl } from '~/data/pages'
import { formatWeightResult } from '~/utils/format-number'
import { kgToLbs, lbsToKg } from '~/utils/weight'

// 从 .mjs 清单引入（Nuxt 构建会处理 mjs import）
import { kgToLbsValues, lbsToKgValues, programmaticRoutes, scenarioSlugs } from '~/data/programmatic-routes.mjs'

export { kgToLbsValues, lbsToKgValues, programmaticRoutes, scenarioSlugs }

// =====================================================================
// 类型
// =====================================================================

export interface ProgrammaticPagePayload {
  value: number
  resultValue: number        // 精确浮点换算结果
  resultDisplay: string      // 2 位小数字符串
  slug: string               // '150-lbs-to-kg'
  canonical: string          // 带尾斜杠的完整 URL
  title: string              // <title> 内容
  description: string        // meta description
  h1: string                 // H1 文案
  subtitle: string           // H1 下方提示段
  resultSentence: string     // "150 lbs equals 68.04 kg."
  faqs: FaqItem[]            // 4 条模板化 FAQ
}

// =====================================================================
// lbs → kg 单个数字页 payload
// =====================================================================

export function getLbsToKgPayload(value: number): ProgrammaticPagePayload {
  const kg = lbsToKg(value)
  const kgDisplay = formatWeightResult(kg)
  const slug = `${value}-lbs-to-kg`
  return {
    value,
    resultValue: kg,
    resultDisplay: kgDisplay,
    slug,
    canonical: canonicalUrl(`/${slug}`),
    title: `${value} lbs to kg - Convert ${value} Pounds to Kilograms`,
    description: `${value} lbs equals ${kgDisplay} kg. See the formula, worked example, and a nearby-value table for fast ${value} pounds to kilograms conversion.`,
    h1: `${value} lbs to kg`,
    subtitle: `Convert ${value} pounds to kilograms with the exact factor and a nearby-value table.`,
    resultSentence: `${value} lbs equals ${kgDisplay} kg.`,
    faqs: [
      {
        question: `How many kg is ${value} lbs?`,
        answer: `${value} lb is equal to ${kgDisplay} kg when rounded to two decimals.`,
      },
      {
        question: `What is ${value} pounds in kilograms?`,
        answer: `${value} pounds is ${kgDisplay} kilograms. The exact value is ${value} ÷ 2.2046226218.`,
      },
      {
        question: `How do I convert ${value} lbs to kg?`,
        answer: `Divide ${value} by 2.20462 to get ${kgDisplay} kg. You can also multiply by 0.45359237 (the exact NIST 1959 factor).`,
      },
      {
        question: `Is ${value} lbs heavy?`,
        answer: `Whether ${value} lbs (${kgDisplay} kg) is heavy depends on context — body weight, luggage, equipment or packages all use different reference ranges. The conversion itself is a neutral number.`,
      },
    ],
  }
}

// =====================================================================
// kg → lbs 单个数字页 payload
// =====================================================================

export function getKgToLbsPayload(value: number): ProgrammaticPagePayload {
  const lbs = kgToLbs(value)
  const lbsDisplay = formatWeightResult(lbs)
  const slug = `${value}-kg-to-lbs`
  return {
    value,
    resultValue: lbs,
    resultDisplay: lbsDisplay,
    slug,
    canonical: canonicalUrl(`/${slug}`),
    title: `${value} kg to lbs - Convert ${value} Kilograms to Pounds`,
    description: `${value} kg equals ${lbsDisplay} lb. See the formula, worked example, and a nearby-value table for fast ${value} kilograms to pounds conversion.`,
    h1: `${value} kg to lbs`,
    subtitle: `Convert ${value} kilograms to pounds with the exact factor and a nearby-value table.`,
    resultSentence: `${value} kg equals ${lbsDisplay} lb.`,
    faqs: [
      {
        question: `How many pounds is ${value} kg?`,
        answer: `${value} kg is equal to ${lbsDisplay} lb when rounded to two decimals.`,
      },
      {
        question: `What is ${value} kilograms in pounds?`,
        answer: `${value} kilograms is ${lbsDisplay} pounds. The exact value is ${value} × 2.2046226218.`,
      },
      {
        question: `How do I convert ${value} kg to lbs?`,
        answer: `Multiply ${value} by 2.20462 to get ${lbsDisplay} lb. The international avoirdupois pound (NIST 1959) defines 1 kg as exactly 2.2046226218 lb.`,
      },
      {
        question: `Is ${value} kg heavy?`,
        answer: `Whether ${value} kg (${lbsDisplay} lb) is heavy depends on context — body weight, luggage, equipment or packages all use different reference ranges. The conversion itself is a neutral number.`,
      },
    ],
  }
}

// =====================================================================
// 相邻数字表（中心值 ± 2，步长 5，共 5 行）
// =====================================================================

export function getNeighborLbsToKgRows(center: number): [string, string][] {
  const step = 5
  const offsets = [-2, -1, 0, 1, 2]
  return offsets.map((k) => {
    const lb = Math.max(1, center + k * step)
    return [`${lb} lb`, `${formatWeightResult(lbsToKg(lb))} kg`] as [string, string]
  })
}

export function getNeighborKgToLbsRows(center: number): [string, string][] {
  const step = 5
  const offsets = [-2, -1, 0, 1, 2]
  return offsets.map((k) => {
    const kg = Math.max(1, center + k * step)
    return [`${kg} kg`, `${formatWeightResult(kgToLbs(kg))} lb`] as [string, string]
  })
}

// =====================================================================
// 场景化 context 段落（按值区间差异化，避免同质化 thin content）
// =====================================================================

export function getLbsContextParagraph(value: number): string {
  if (value <= 70) {
    return `${value} lb values typically come up with children's body weight, small dog breeds, or the upper limit of some checked airline bags. Most US domestic carriers cap a single checked bag at 50 lb before adding overweight fees; a ${value} lb bag ${value <= 50 ? 'sits at or under that line' : 'would push past it on most airlines'}.`
  }
  if (value <= 130) {
    return `${value} lb is a common reference for smaller adult body weight and lightweight equipment. Petite adult carry-on luggage, portable fitness gear, and most mid-sized dog breeds land in this range. It is also a frequent search result for packaging weight specifications on consumer products.`
  }
  if (value <= 180) {
    return `${value} lb sits in the average adult body weight band for the United States, which makes it one of the highest-traffic conversion queries on the web. Travel luggage above standard limits, mid-range gym plates and larger packages also often use this range for weight labels.`
  }
  if (value <= 220) {
    return `${value} lb is above the average US adult weight and commonly appears in strength training (bench press, squat) and larger athletic contexts. It is also near the upper end of what most airlines allow in a checked bag before requiring overweight handling or multiple pieces.`
  }
  return `${value} lb is a heavy-duty reference used for freight shipments, powerlifting, cargo handling, and large equipment. Most airline baggage systems refuse single pieces at this weight; it requires special freight handling or multiple pieces, and personal weighing usually needs a platform scale rather than a hand or bathroom scale.`
}

export function getKgContextParagraph(value: number): string {
  if (value <= 55) {
    return `${value} kg is a lightweight reference band often associated with smaller adults, teenagers, or lightweight sports gear. In international travel, ${value} kg is below most carry-on size limits (typically 7-10 kg). For body weight context, it is on the lower end of adult reference ranges used in most countries.`
  }
  if (value <= 75) {
    return `${value} kg is near the global average adult body weight in many regions. It is the most searched conversion band for travelers moving between metric and US customary systems, and often appears on international product and shipping labels.`
  }
  if (value <= 95) {
    return `${value} kg is above the global adult body weight average and commonly appears in strength training, larger packages, and heavy-duty travel gear. International airline checked-bag limits are usually 23 kg per piece, so ${value} kg is roughly ${Math.round(value / 23)} times a standard piece.`
  }
  return `${value} kg is a heavy reference used for athletic equipment, freight, and larger people or animals. Most consumer airline systems do not accept a single checked bag at this weight — it typically requires multiple pieces or freight handling. For body-weight context, it is above the typical adult reference ranges in most countries.`
}

// =====================================================================
// slug 校验（给动态路由页做 404 兜底用）
// =====================================================================

export function isValidLbsToKgValue(v: unknown): boolean {
  return typeof v === 'number' && lbsToKgValues.includes(v)
}

export function isValidKgToLbsValue(v: unknown): boolean {
  return typeof v === 'number' && kgToLbsValues.includes(v)
}
