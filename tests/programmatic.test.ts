import { describe, expect, it } from 'vitest'
import {
  getKgContextParagraph,
  getKgToLbsPayload,
  getLbsContextParagraph,
  getLbsToKgPayload,
  getNeighborKgToLbsRows,
  getNeighborLbsToKgRows,
  isValidKgToLbsValue,
  isValidLbsToKgValue,
  kgToLbsValues,
  lbsToKgValues,
  programmaticRoutes,
  scenarioSlugs,
} from '../data/programmatic-pages'
import {
  airlineBaggageLimits,
  bodyWeightChartRows,
  commonTrainingLoads,
  iwfPlatesKg,
  olympicBars,
  olympicPlatesLb,
} from '../data/scenarios'

describe('programmatic routes 清单', () => {
  it('lbsToKgValues 和 kgToLbsValues 规模符合计划（10 + 8）', () => {
    expect(lbsToKgValues).toHaveLength(10)
    expect(kgToLbsValues).toHaveLength(8)
    expect(scenarioSlugs).toHaveLength(3)
  })

  it('programmaticRoutes 合并数字页 + 场景页，共 21 条', () => {
    expect(programmaticRoutes).toHaveLength(21)
    expect(programmaticRoutes).toContain('/150-lbs-to-kg')
    expect(programmaticRoutes).toContain('/80-kg-to-lbs')
    expect(programmaticRoutes).toContain('/lbs-to-kg-luggage-weight-guide')
  })
})

describe('getLbsToKgPayload', () => {
  it('150 lbs 的核心字段正确', () => {
    const p = getLbsToKgPayload(150)
    expect(p.value).toBe(150)
    expect(p.resultDisplay).toBe('68.04')
    expect(p.slug).toBe('150-lbs-to-kg')
    expect(p.canonical).toBe('https://convertminttools.com/150-lbs-to-kg/')
    expect(p.title).toContain('150 lbs to kg')
    expect(p.description).toContain('68.04')
    expect(p.resultSentence).toBe('150 lbs equals 68.04 kg.')
    expect(p.faqs).toHaveLength(4)
    // FAQ 问题应包含具体数值
    expect(p.faqs[0]?.question).toBe('How many kg is 150 lbs?')
  })

  it('50 lbs 的 result 正确（22.68）', () => {
    expect(getLbsToKgPayload(50).resultDisplay).toBe('22.68')
  })

  it('250 lbs 的 result 正确（113.4）', () => {
    // formatWeightResult 去掉 trailing zero → '113.4'（而非 '113.40'）
    expect(getLbsToKgPayload(250).resultDisplay).toBe('113.4')
  })
})

describe('getKgToLbsPayload', () => {
  it('80 kg 的核心字段正确', () => {
    const p = getKgToLbsPayload(80)
    expect(p.value).toBe(80)
    expect(p.resultDisplay).toBe('176.37')
    expect(p.slug).toBe('80-kg-to-lbs')
    expect(p.canonical).toBe('https://convertminttools.com/80-kg-to-lbs/')
    expect(p.resultSentence).toBe('80 kg equals 176.37 lb.')
    expect(p.faqs[0]?.question).toBe('How many pounds is 80 kg?')
  })

  it('100 kg 的 result 正确（220.46）', () => {
    expect(getKgToLbsPayload(100).resultDisplay).toBe('220.46')
  })
})

describe('getNeighborLbsToKgRows', () => {
  it('以 150 lbs 为中心返回 5 行（140-160，步长 5）', () => {
    const rows = getNeighborLbsToKgRows(150)
    expect(rows).toHaveLength(5)
    expect(rows[0]?.[0]).toBe('140 lb')
    expect(rows[2]?.[0]).toBe('150 lb')
    expect(rows[4]?.[0]).toBe('160 lb')
    expect(rows[2]?.[1]).toBe('68.04 kg')
  })

  it('低值不会生成 ≤ 0 的行（50 lb 为中心 → 最小值 ≥ 1 lb）', () => {
    const rows = getNeighborLbsToKgRows(50)
    for (const [label] of rows) {
      const n = Number(label.split(' ')[0])
      expect(n).toBeGreaterThanOrEqual(1)
    }
  })
})

describe('getNeighborKgToLbsRows', () => {
  it('以 80 kg 为中心返回 5 行（70-90，步长 5）', () => {
    const rows = getNeighborKgToLbsRows(80)
    expect(rows).toHaveLength(5)
    expect(rows[0]?.[0]).toBe('70 kg')
    expect(rows[2]?.[0]).toBe('80 kg')
    expect(rows[4]?.[0]).toBe('90 kg')
  })
})

describe('context 段落按区间差异化', () => {
  it('lbs 五个区间返回不同段落', () => {
    const p1 = getLbsContextParagraph(50)
    const p2 = getLbsContextParagraph(100)
    const p3 = getLbsContextParagraph(150)
    const p4 = getLbsContextParagraph(200)
    const p5 = getLbsContextParagraph(250)
    // 全部非空且互不相同
    for (const p of [p1, p2, p3, p4, p5]) {
      expect(p.length).toBeGreaterThan(50)
    }
    expect(new Set([p1, p2, p3, p4, p5]).size).toBe(5)
  })

  it('kg 四个区间返回不同段落', () => {
    const p1 = getKgContextParagraph(50)
    const p2 = getKgContextParagraph(70)
    const p3 = getKgContextParagraph(90)
    const p4 = getKgContextParagraph(120)
    for (const p of [p1, p2, p3, p4]) {
      expect(p.length).toBeGreaterThan(50)
    }
    expect(new Set([p1, p2, p3, p4]).size).toBe(4)
  })
})

describe('slug 校验', () => {
  it('合法的 lbs 值通过，非法值被拒', () => {
    expect(isValidLbsToKgValue(150)).toBe(true)
    expect(isValidLbsToKgValue(50)).toBe(true)
    expect(isValidLbsToKgValue(42)).toBe(false)
    expect(isValidLbsToKgValue('150')).toBe(false)
  })

  it('合法的 kg 值通过，非法值被拒', () => {
    expect(isValidKgToLbsValue(80)).toBe(true)
    expect(isValidKgToLbsValue(100)).toBe(true)
    expect(isValidKgToLbsValue(42)).toBe(false)
  })
})

describe('scenarios 数据完整性', () => {
  it('bodyWeightChartRows 覆盖 50-250 lbs 每 5 磅一行', () => {
    expect(bodyWeightChartRows).toHaveLength(41)
    expect(bodyWeightChartRows[0]?.lb).toBe(50)
    expect(bodyWeightChartRows[40]?.lb).toBe(250)
    // 第 21 行（index 20）应该是 150 lb
    expect(bodyWeightChartRows[20]?.lb).toBe(150)
    expect(bodyWeightChartRows[20]?.kg).toBe('68.04')
    expect(bodyWeightChartRows[20]?.stones).toBe('10 st 10 lb')
  })

  it('airlineBaggageLimits 覆盖 10 家航司', () => {
    expect(airlineBaggageLimits).toHaveLength(10)
    // 验证一家北美 + 一家欧洲 + 一家亚洲
    expect(airlineBaggageLimits.find((a) => a.airline === 'American Airlines')?.checkedKg).toBe(23)
    expect(airlineBaggageLimits.find((a) => a.airline === 'Lufthansa')?.carryOnKg).toBe(8)
    expect(airlineBaggageLimits.find((a) => a.airline === 'Emirates')?.checkedKg).toBe(30)
  })

  it('olympicBars + plates 规格完整', () => {
    expect(olympicBars).toHaveLength(4)
    expect(olympicBars.find((b) => b.label.includes("Men's"))?.kg).toBe(20)
    expect(olympicPlatesLb[0]?.lb).toBe(45)
    expect(iwfPlatesKg[0]?.kg).toBe(25)
  })

  it('commonTrainingLoads 包含美国俚语 two/three/four plates', () => {
    const descriptions = commonTrainingLoads.map((l) => l.description)
    expect(descriptions.some((d) => d.includes('two plates'))).toBe(true)
    expect(descriptions.some((d) => d.includes('three plates'))).toBe(true)
    expect(descriptions.some((d) => d.includes('four plates'))).toBe(true)
  })
})
