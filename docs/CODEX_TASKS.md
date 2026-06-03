# CODEX_TASKS — 给 Codex 的分阶段任务清单

> 不要一次性让 Codex 做完整站。按下面任务顺序执行，每次只做一个任务。

---

## Task 1 — 初始化 Nuxt 项目

### Prompt

```txt
请先阅读 AGENTS.md、README.md、docs/PRD.md、docs/TECH_SPEC.md。

执行 Task 1：初始化 Nuxt 3 + TypeScript + Tailwind CSS 项目。

要求：
1. 使用 pnpm。
2. 创建推荐目录结构。
3. 创建 5 个 MVP 页面占位：/、/military-time-converter、/convert-kg-to-lbs、/convert-lbs-to-kg、/weight-converter。
4. 创建 SiteHeader 和 SiteFooter。
5. 配置 Tailwind。
6. 配置 package scripts：dev、build、generate、preview、test、typecheck、deploy:cloudflare。
7. 不要实现完整换算逻辑。
8. 不要增加后端、数据库、登录、广告、programmatic 页面。

完成前运行：pnpm test、pnpm typecheck、pnpm build、pnpm generate。
```

---

## Task 2 — 实现核心换算逻辑和测试

### Prompt

```txt
请阅读 AGENTS.md、docs/TECH_SPEC.md。

执行 Task 2：实现核心换算逻辑和单元测试。

需要创建：
- utils/weight.ts
- utils/military-time.ts
- utils/format-number.ts
- utils/validation.ts，如果需要
- tests/weight.test.ts
- tests/military-time.test.ts
- tests/format-number.test.ts

必须覆盖：
1. kg to lbs；
2. lbs to kg；
3. 小数输入；
4. 空输入；
5. 非数字输入；
6. 负数输入；
7. military time 合法值；
8. military time 非法值。

不要修改页面 UI，除非为了接入测试需要。

完成前运行：pnpm test、pnpm typecheck、pnpm build、pnpm generate。
```

---

## Task 3 — 实现通用 UI 组件

### Prompt

```txt
请阅读 AGENTS.md、docs/UX_GUIDE.md、docs/TECH_SPEC.md。

执行 Task 3：实现通用 UI 和 SEO 组件。

需要实现：
- components/ui/BaseCard.vue
- components/ui/BaseButton.vue
- components/ui/BaseInput.vue
- components/converter/ConverterCard.vue
- components/converter/ConverterResult.vue
- components/converter/CopyButton.vue
- components/seo/FaqBlock.vue
- components/seo/RelatedTools.vue
- components/seo/ConversionTable.vue
- components/seo/FormulaBlock.vue

要求：
1. 移动端可用；
2. input 和 button 高度至少 44px；
3. 所有 input 有 label；
4. 错误不能只靠颜色表达；
5. 不要引入重型 UI 库。

完成前运行：pnpm test、pnpm typecheck、pnpm build、pnpm generate。
```

---

## Task 4 — 实现重量换算页面

### Prompt

```txt
请阅读 AGENTS.md、docs/PAGE_PLAN.md、docs/SEO_PLAN.md。

执行 Task 4：实现以下页面：
- /convert-kg-to-lbs
- /convert-lbs-to-kg
- /weight-converter

要求：
1. 工具必须在首屏可用。
2. /convert-kg-to-lbs 和 /convert-lbs-to-kg 必须支持双向实时换算。
3. 每个工具页必须有 formula、examples table、FAQ、related tools。
4. 每页必须有 title、meta description、canonical。
5. 前台文案使用英文。
6. 不要新增其他页面。

完成前运行：pnpm test、pnpm typecheck、pnpm build、pnpm generate。
```

---

## Task 5 — 实现 Military Time 页面

### Prompt

```txt
请阅读 AGENTS.md、docs/PAGE_PLAN.md、docs/SEO_PLAN.md。

执行 Task 5：实现 /military-time-converter 页面。

要求：
1. 支持输入 0000 到 2359。
2. 支持 1430 和 14:30 两种形式。
3. 输出 12-hour AM/PM 格式。
4. 错误提示清晰。
5. 页面包含 military time chart、examples、FAQ、related tools。
6. 工具必须在首屏可用。
7. 前台文案使用英文。

完成前运行：pnpm test、pnpm typecheck、pnpm build、pnpm generate。
```

---

## Task 6 — 实现首页和全站 SEO 收尾

### Prompt

```txt
请阅读 AGENTS.md、docs/SEO_PLAN.md、docs/PAGE_PLAN.md、docs/CLOUDFLARE_DEPLOY.md。

执行 Task 6：实现首页和全站 SEO/部署收尾。

要求：
1. 首页默认提供 kg to lbs quick converter。
2. 首页链接到所有 MVP 页面。
3. 添加 sitemap。
4. 添加 robots.txt。
5. 添加 canonical。
6. 添加 Open Graph metadata。
7. 添加 FAQ JSON-LD 或 WebApplication JSON-LD。
8. 确保 pnpm generate 输出 .output/public。
9. 不要新增 programmatic 数字页。

完成前运行：pnpm test、pnpm typecheck、pnpm build、pnpm generate。
```

---

## Task 7 — Cloudflare Pages 部署

### Prompt

```txt
请阅读 docs/CLOUDFLARE_DEPLOY.md。

执行 Task 7：准备 Cloudflare Pages 部署。

要求：
1. 确认 pnpm generate 成功。
2. 确认静态输出目录是 .output/public。
3. 确认 package.json 有 deploy:cloudflare 命令。
4. 如需要，补充部署说明到 README。
5. 不要泄露或写入任何 Cloudflare API Token。

完成前运行：pnpm test、pnpm typecheck、pnpm build、pnpm generate。
```
