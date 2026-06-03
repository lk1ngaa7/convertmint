# AGENTS.md — Convert Mint 项目给 Codex 的执行说明

> 本文件是给 Codex / coding agent 读取的最高优先级项目说明。  
> 在执行任何代码任务前，必须先阅读本文件、`README.md`、`docs/PRD.md`、`docs/TECH_SPEC.md`、`docs/PAGE_PLAN.md`。

---

## 1. 项目定位

项目名称：`Convert Mint`

这是一个面向英文 Google 搜索用户的在线 converter 工具站。  
MVP 目标不是做复杂 SaaS，也不是做大而全的单位换算平台，而是先验证：

1. converter 工具页是否能被 Google 收录；
2. `military time converter` 是否能作为低 KD 快速验证页出曝光；
3. `convert kg to lbs` / `convert lbs to kg` 是否能作为长期重量换算流量资产；
4. Nuxt + 静态生成 + Cloudflare Pages 的工具站流水线是否跑通。

站点气质：

- clean
- fast
- practical
- trustworthy
- mobile-first
- tool-first

不要做成：

- AI SaaS 落地页
- 复杂后台系统
- 广告站
- 过度营销 landing page
- 有登录注册的产品
- 需要后端接口的系统

---

## 2. MVP 页面范围

Codex 第一阶段只允许实现以下 5 个页面：

| URL | 页面类型 | 主要关键词 | 目标 |
|---|---|---|---|
| `/` | 首页 / 工具导航页 | unit converter | 建立整站主题，给工具页传内链 |
| `/military-time-converter` | 工具页 | military time converter | 快速 SEO 验证页 |
| `/convert-kg-to-lbs` | 工具页 | convert kg to lbs | 长期主力工具页 |
| `/convert-lbs-to-kg` | 工具页 | convert lbs to kg | 反向精准工具页 |
| `/weight-converter` | 品类聚合页 | weight converter | 重量换算主题页和内链枢纽 |

第一阶段不要实现：

- `/kg-to-lbs-chart`
- `/how-to-convert-kg-to-lbs`
- `/80-kg-to-lbs`
- `/50-lbs-to-kg`
- 任何 programmatic number pages
- currency converter
- file/image converter
- timezone converter
- PDF converter
- 下载器类工具

可以在代码结构里为后续扩展预留数据层，但不要生成路由、不要生成页面。

---

## 3. 技术栈要求

必须使用：

- Nuxt 3
- Vue 3 Composition API
- TypeScript
- Tailwind CSS
- pnpm
- Vitest
- 静态生成部署到 Cloudflare Pages

不允许使用：

- 后端数据库
- 服务端 API
- 登录系统
- 用户账号
- 重型 UI 组件库
- jQuery
- Bootstrap
- 广告脚本
- Affiliate 区块
- 统计脚本，除非用户后续明确要求

---

## 4. 推荐目录结构

Codex 应创建或维护如下结构：

```txt
convert-mint/
├── AGENTS.md
├── README.md
├── package.json
├── nuxt.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── app.vue
├── pages/
│   ├── index.vue
│   ├── military-time-converter.vue
│   ├── convert-kg-to-lbs.vue
│   ├── convert-lbs-to-kg.vue
│   └── weight-converter.vue
├── components/
│   ├── layout/
│   │   ├── SiteHeader.vue
│   │   └── SiteFooter.vue
│   ├── converter/
│   │   ├── ConverterCard.vue
│   │   ├── ConverterInput.vue
│   │   ├── ConverterResult.vue
│   │   ├── BidirectionalWeightConverter.vue
│   │   ├── MilitaryTimeConverter.vue
│   │   └── CopyButton.vue
│   ├── seo/
│   │   ├── FaqBlock.vue
│   │   ├── RelatedTools.vue
│   │   ├── ConversionTable.vue
│   │   └── FormulaBlock.vue
│   └── ui/
│       ├── BaseCard.vue
│       ├── BaseButton.vue
│       └── BaseInput.vue
├── composables/
│   ├── useWeightConverter.ts
│   ├── useMilitaryTimeConverter.ts
│   └── usePageSeo.ts
├── data/
│   ├── pages.ts
│   ├── faqs.ts
│   ├── related-tools.ts
│   └── conversion-tables.ts
├── utils/
│   ├── weight.ts
│   ├── military-time.ts
│   ├── format-number.ts
│   └── validation.ts
├── tests/
│   ├── weight.test.ts
│   ├── military-time.test.ts
│   └── format-number.test.ts
└── docs/
    ├── PRD.md
    ├── TECH_SPEC.md
    ├── SEO_PLAN.md
    ├── PAGE_PLAN.md
    ├── UX_GUIDE.md
    ├── CONTENT_RULES.md
    ├── CODEX_TASKS.md
    ├── CLOUDFLARE_DEPLOY.md
    └── QA_CHECKLIST.md
```

---

## 5. 开发规则

### 5.1 代码组织

- 纯换算逻辑必须放在 `utils/` 下。
- 组件不要写复杂业务逻辑。
- 页面元信息集中维护在 `data/pages.ts`。
- FAQ 集中维护在 `data/faqs.ts`。
- Related tools 集中维护在 `data/related-tools.ts`。
- Conversion table 数据集中维护在 `data/conversion-tables.ts`。
- 页面文件只负责组合组件和导入数据。

### 5.2 TypeScript

- 所有工具函数必须有明确输入输出类型。
- 不要使用 `any`，除非不可避免，并说明原因。
- 解析用户输入时必须显式处理：空值、非数字、负数、非法时间。

### 5.3 UI

- 每个工具页首屏必须能直接使用工具。
- 不允许先放大段 SEO 文案再放工具。
- 移动端优先。
- 输入框和按钮高度至少 44px。
- 不能出现横向滚动。
- 结果必须容易复制。

### 5.4 SEO

每个页面必须具备：

- `<title>`
- meta description
- canonical URL
- H1
- 结构清晰的 H2
- FAQ 区块
- Related tools 内链
- Open Graph 基础信息
- JSON-LD：FAQPage 或 WebApplication，视页面而定

### 5.5 Accessibility

- 所有 input 必须有 label。
- 错误信息必须和 input 关联。
- 错误不能只靠颜色表达。
- 按钮文案必须清楚。
- 使用 semantic HTML。
- 动态结果区域建议使用 `aria-live="polite"`。

---

## 6. 换算准确性规则

### 6.1 kg ↔ lbs

公式：

```txt
lbs = kg * 2.2046226218
kg = lbs / 2.2046226218
```

显示规则：

- 常规结果显示 2 位小数。
- 公式说明中可以展示 2.20462。
- 空输入显示提示，不报错。
- 非数字输入显示明确错误。
- MVP 阶段拒绝负数。
- 允许小数，例如 `7.5 kg`。

### 6.2 Military time

支持输入：

- `0000`
- `0930`
- `1430`
- `23:59`
- `0:00`

不支持输入：

- `2460`
- `2400`
- `25:00`
- `12 PM`
- `abc`

规则：

- 小时范围：0-23
- 分钟范围：0-59
- 输出 12-hour AM/PM 格式。
- `0000` 输出 `12:00 AM`
- `1200` 输出 `12:00 PM`
- `1430` 输出 `2:30 PM`

---

## 7. 测试要求

必须添加 Vitest 单元测试，覆盖：

### weight

- 1 kg = 2.20 lbs
- 10 kg = 22.05 lbs
- 100 kg = 220.46 lbs
- 1 lb = 0.45 kg
- 150 lbs = 68.04 kg
- 小数输入
- 空输入
- 非数字输入
- 负数输入

### military time

- `0000` → `12:00 AM`
- `0030` → `12:30 AM`
- `0900` → `9:00 AM`
- `1200` → `12:00 PM`
- `1430` → `2:30 PM`
- `2359` → `11:59 PM`
- `24:00` 非法
- `2360` 非法
- `abc` 非法

---

## 8. 必须提供的 npm scripts

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

如果 `nuxt typecheck` 缺依赖，应安装 Nuxt 官方需要的类型检查依赖，而不是删除 `typecheck` 命令。

---

## 9. Cloudflare Pages 部署要求

MVP 使用静态生成。

Cloudflare Pages Git 集成建议配置：

```txt
Framework preset: Nuxt
Build command: pnpm generate
Build output directory: .output/public
Root directory: /
```

Direct Upload 建议命令：

```bash
pnpm generate
npx wrangler pages deploy .output/public --project-name convert-mint
```

---

## 10. 完成标准 Definition of Done

每个任务完成前，必须运行：

```bash
pnpm test
pnpm typecheck
pnpm build
pnpm generate
```

若任一命令失败，必须修复后再报告完成。

完成回复必须包含：

1. 修改了哪些文件；
2. 实现了哪些功能；
3. 跑了哪些命令；
4. 测试是否通过；
5. 是否还有未完成项。

### 10.1 Git 提交与推送

- 每次完成代码、文档或配置改动后，必须把本次改动内容总结到 commit message 中。
- commit message 必须说明：本次为什么改、改了什么、跑了哪些验证命令、是否有未测试项。
- 提交前必须检查 `git status`，只暂存和本次任务直接相关的文件，不能把无关的本地改动混进提交。
- 提交完成后必须推送到远端当前分支。
- 当前项目的 Wrangler 已登录；每次修改验证通过、提交并推送后，必须默认执行 `pnpm deploy:cloudflare` 直接部署到 Cloudflare Pages。
- 部署失败时不能隐瞒；必须在最终回复里说明失败命令、失败原因和当前是否已完成提交推送。
- 只有当用户明确要求不提交/不推送/不部署，或远端不可用、权限不足、验证失败、部署失败时，才可以跳过对应步骤；跳过时必须在最终回复里说明原因。

---

## 11. 严禁事项

未经用户明确要求，不得：

- 增加新页面；
- 增加后端；
- 增加数据库；
- 增加登录；
- 增加广告；
- 增加分析脚本；
- 增加 programmatic 数字页；
- 改变技术栈；
- 删除测试；
- 跳过 build；
- 为了通过测试而降低功能要求。
