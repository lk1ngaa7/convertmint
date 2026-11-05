// Programmatic 页面的"单一真相源"。
// 纯 ESM，同时供 TypeScript 代码 (data/programmatic-pages.ts、nuxt.config.ts)
// 和 Node 脚本 (scripts/generate-sitemap.mjs) 共用，避免清单不同步。

// lbs → kg 数字页清单（按体重/行李场景选的代表值）
export const lbsToKgValues = [50, 70, 100, 120, 130, 150, 160, 180, 200, 250]

// kg → lbs 数字页清单（按国际成人体重区间选的代表值）
export const kgToLbsValues = [50, 60, 70, 80, 90, 100, 110, 120]

// 场景页 slug 清单
export const scenarioSlugs = [
  'lbs-to-kg-body-weight-chart',
  'lbs-to-kg-luggage-weight-guide',
  'lbs-to-kg-gym-weight-plates',
]

// 合并给 Nuxt 预渲染 routes 用（路径不带尾斜杠，Nitro SSG 会写成 <path>/index.html）
export const programmaticRoutes = [
  ...lbsToKgValues.map((v) => `/${v}-lbs-to-kg`),
  ...kgToLbsValues.map((v) => `/${v}-kg-to-lbs`),
  ...scenarioSlugs.map((s) => `/${s}`),
]
