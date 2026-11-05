#!/usr/bin/env node
// 用 sharp 把 public/og-default.svg 渲染成 1200x630 的 PNG
// 一次性脚本：改 SVG 后手动跑 `pnpm run og:generate` 产出 PNG，提交到 git
// 不进入 build/postinstall 流程，避免 CI 安装 sharp 增加时间

import { readFile, writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(__dirname, '..')
const svgPath = resolve(projectRoot, 'public/og-default.svg')
const pngPath = resolve(projectRoot, 'public/og-default.png')

console.log(`[og:generate] 读取 SVG：${svgPath}`)
const svgBuffer = await readFile(svgPath)

console.log('[og:generate] 渲染为 1200x630 PNG')
const pngBuffer = await sharp(svgBuffer, { density: 192 })
  .resize(1200, 630, { fit: 'cover' })
  .png({ quality: 90, compressionLevel: 9 })
  .toBuffer()

await writeFile(pngPath, pngBuffer)
console.log(`[og:generate] 已写出：${pngPath}  (${(pngBuffer.length / 1024).toFixed(1)} KB)`)
