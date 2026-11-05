#!/usr/bin/env node
// 自动从 data/programmatic-routes.mjs 和核心页清单生成 public/sitemap.xml。
// 在 package.json 的 generate 之前跑，保证 SSG 产出前 sitemap 已更新。

import { writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { kgToLbsValues, lbsToKgValues, scenarioSlugs } from '../data/programmatic-routes.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(__dirname, '..')
const outputPath = resolve(projectRoot, 'public/sitemap.xml')

const siteUrl = 'https://convertminttools.com'
const today = new Date().toISOString().slice(0, 10)

// 核心静态页（含特定 lastmod 和优先级）
const corePages = [
  { path: '/',                         lastmod: today,        changefreq: 'monthly', priority: '1.0' },
  { path: '/military-time-converter/', lastmod: today,        changefreq: 'monthly', priority: '0.8' },
  { path: '/convert-kg-to-lbs/',       lastmod: today,        changefreq: 'monthly', priority: '0.8' },
  { path: '/convert-lbs-to-kg/',       lastmod: today,        changefreq: 'monthly', priority: '0.8' },
  { path: '/weight-converter/',        lastmod: today,        changefreq: 'monthly', priority: '0.8' },
  { path: '/about/',                   lastmod: today,        changefreq: 'yearly',  priority: '0.5' },
  { path: '/contact/',                 lastmod: today,        changefreq: 'yearly',  priority: '0.4' },
  { path: '/privacy/',                 lastmod: '2026-06-04', changefreq: 'yearly',  priority: '0.3' },
  { path: '/terms/',                   lastmod: '2026-06-04', changefreq: 'yearly',  priority: '0.3' },
  { path: '/sitemap/',                 lastmod: today,        changefreq: 'monthly', priority: '0.4' },
]

// Programmatic 数字页（优先级略低于核心）
const programmaticPages = [
  ...lbsToKgValues.map((v) => ({
    path: `/${v}-lbs-to-kg/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.7',
  })),
  ...kgToLbsValues.map((v) => ({
    path: `/${v}-kg-to-lbs/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.7',
  })),
]

// 场景页（内容深度高，优先级同核心工具页）
const scenarioPages = scenarioSlugs.map((slug) => ({
  path: `/${slug}/`,
  lastmod: today,
  changefreq: 'monthly',
  priority: '0.8',
}))

const allPages = [...corePages, ...programmaticPages, ...scenarioPages]

const urlEntries = allPages
  .map(
    (p) => `  <url>
    <loc>${siteUrl}${p.path}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

await writeFile(outputPath, xml, 'utf8')
console.log(`[sitemap:generate] wrote ${allPages.length} URLs to ${outputPath}`)
