# TECH_SPEC — 技术实现规范

## 1. 技术选型

使用 Nuxt 3 静态站点方案。

原因：

- 用户熟悉 Vue 生态；
- Nuxt 对 SEO 友好；
- 静态生成适合 converter 工具；
- Cloudflare Pages 部署简单；
- 无需后端，成本低。

---

## 2. package scripts

`package.json` 必须包含：

```json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "nuxt typecheck",
    "deploy:cloudflare": "pnpm generate && npx wrangler pages deploy .output/public --project-name convert-mint"
  }
}
```

---

## 3. Nuxt 配置要求

`nuxt.config.ts` 至少应包含：

- TypeScript；
- Tailwind；
- site url 配置；
- prerender 路由；
- SEO 基础配置；
- 静态生成兼容 Cloudflare Pages。

建议预渲染路由：

```ts
const routes = [
  '/',
  '/military-time-converter',
  '/convert-kg-to-lbs',
  '/convert-lbs-to-kg',
  '/weight-converter'
]
```

---

## 4. 核心工具函数

### 4.1 `utils/weight.ts`

需要实现：

```ts
export const KG_TO_LBS = 2.2046226218

export function kgToLbs(kg: number): number
export function lbsToKg(lbs: number): number
export function parseWeightInput(input: string): { value: number | null; error: string | null }
```

规则：

- 输入为空：`value = null`，`error = null`；
- 输入非数字：返回错误；
- 输入负数：返回错误；
- 允许小数；
- 不在工具函数里直接格式化显示文案。

### 4.2 `utils/military-time.ts`

需要实现：

```ts
export function parseMilitaryTime(input: string): {
  hours: number | null
  minutes: number | null
  error: string | null
}

export function militaryToRegular(input: string): {
  value: string | null
  explanation: string | null
  error: string | null
}
```

规则：

- 支持 `1430` 和 `14:30`；
- 小时 0-23；
- 分钟 0-59；
- `2400` 不合法；
- 返回英文错误文案，前台站点文案使用英文。

### 4.3 `utils/format-number.ts`

需要实现：

```ts
export function formatNumber(value: number, decimals?: number): string
export function formatWeightResult(value: number): string
```

规则：

- 默认 2 位小数；
- 去掉无意义的末尾 0；
- 不要把 `2.00` 显示成 `2.00`，应显示 `2`；
- 大数可使用英文逗号分隔。

---

## 5. 组件规范

### 5.1 `BidirectionalWeightConverter.vue`

功能：

- 两个输入框：kg、lbs；
- 输入 kg 自动更新 lbs；
- 输入 lbs 自动更新 kg；
- 结果区域有 copy 按钮；
- 错误清晰显示；
- 支持键盘输入。

注意：

- 不要做复杂状态管理；
- 使用本地 `ref` 即可；
- 避免循环更新导致输入抖动；
- 用户正在编辑哪个输入框，就以哪个作为 source of truth。

### 5.2 `MilitaryTimeConverter.vue`

功能：

- 输入 military time；
- 输出 regular time；
- 展示解释；
- 常见例子按钮可快速填入；
- 错误提示明确。

### 5.3 SEO 组件

`FaqBlock.vue`：

- 接收 FAQ 数组；
- 渲染 question 和 answer；
- 支持语义化结构；
- 页面层负责注入 JSON-LD。

`RelatedTools.vue`：

- 使用卡片式链接；
- 不要只放一串纯文本链接；
- 每个链接有标题和简短说明。

`ConversionTable.vue`：

- 用 table；
- 移动端可横向容器滚动，但页面不能整体横向滚动；
- 表格标题清晰。

---

## 6. 状态和错误文案

前台英文文案示例：

空输入：

```txt
Enter a value to see the conversion result.
```

非数字：

```txt
Please enter a valid number.
```

负数：

```txt
Weight values cannot be negative for this converter.
```

非法 military time：

```txt
Enter a valid military time from 0000 to 2359.
```

成功结果：

```txt
80 kg is equal to 176.37 lbs.
```

---

## 7. 测试规范

必须使用 Vitest。

测试文件：

```txt
tests/weight.test.ts
tests/military-time.test.ts
tests/format-number.test.ts
```

测试不需要覆盖 UI 组件的每个细节，但核心换算函数必须稳定。

---

## 8. 性能要求

- 首屏 JS 尽量小；
- 不引入大型依赖；
- 不使用 moment.js；
- 不引入图表库；
- 不使用运行时 API 请求；
- 静态页面应快速加载。

---

## 9. SEO 技术要求

每个页面应调用统一 composable，例如：

```ts
usePageSeo(pageKey)
```

由 `data/pages.ts` 提供：

- title；
- description；
- canonical；
- og title；
- og description；
- page type。

JSON-LD：

- 首页：`WebSite` + `WebApplication`；
- 工具页：`WebApplication` + `FAQPage`；
- 品类页：`CollectionPage` + `FAQPage`。

---

## 10. Cloudflare 兼容要求

MVP 静态生成，因此不依赖 Cloudflare Functions。

生成后产物目录：

```txt
.output/public
```

部署方式：

```bash
pnpm generate
npx wrangler pages deploy .output/public --project-name convert-mint
```
