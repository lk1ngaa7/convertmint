# ConvertMintTools.com Phase 1 改进 PRD

## 0. 给 Codex 的执行说明

你现在要在现有 ConvertMintTools.com 代码仓库中执行第一阶段改造。

请先阅读本 PRD，再检查当前项目结构、package.json、Nuxt 配置、页面文件、组件文件和部署配置。不要重建项目，不要推翻现有实现，而是在现有代码基础上增量修改。

本阶段目标不是扩大量页面矩阵，而是把当前已经上线的 MVP 站点做厚、做可信、做移动端可用、做 SEO 基础完整。

当前线上核心页面为：

```txt
/
首页

/convert-kg-to-lbs/
kg to lbs 工具页

/convert-lbs-to-kg/
lbs to kg 工具页

/military-time-converter/
军事时间转换页

/weight-converter/
重量换算品类页
```

本阶段新增基础页面：

```txt
/about/
/contact/
/privacy/
/terms/
/sitemap/
```

本阶段允许新增或修改的范围：

```txt
1. Header / Footer / Layout
2. 首页信息架构
3. 现有 4 个工具/品类页面
4. About / Contact / Privacy / Terms / HTML Sitemap
5. 404 页面
6. SEO metadata / canonical / schema
7. 移动端体验
8. 工具核心功能
9. 单元测试
10. Cloudflare Pages 部署配置
```

本阶段禁止事项：

```txt
1. 不要新增 50+ converter 页面矩阵
2. 不要新增博客系统
3. 不要新增广告
4. 不要新增 affiliate 推荐模块
5. 不要新增用户登录
6. 不要新增数据库
7. 不要新增后端 API
8. 不要新增多语言
9. 不要新增 PWA / Service Worker
10. 不要新增暗色模式
11. 不要新增 A/B 测试框架
12. 不要新增大量 programmatic number pages
13. 不要引入重型 UI 组件库
```

网站页面文案必须使用英文。代码注释可以英文。PRD 和任务说明为中文。

---

## 1. 项目目标

### 1.1 业务目标

ConvertMintTools.com 是一个面向英文用户的在线 converter 工具站。

Phase 1 的目标：

```txt
1. 提升站点可信度
2. 提升移动端可用性
3. 修复当前工具功能缺口
4. 增强现有页面内容深度
5. 建立清晰站点架构
6. 补齐基础 SEO 技术设施
7. 保持纯前端、静态部署、低维护成本
```

### 1.2 SEO 目标

本阶段不追求立刻扩张页面数量，而是提升当前 5 个核心页面质量。

主要 SEO 目标：

```txt
1. 每个页面有唯一且准确的 title / description / canonical
2. 每个工具页有明确的 H1、工具首屏、公式、表格、FAQ、相关工具
3. 首页减少重复链接和重复 section
4. Footer 增加站点结构链接
5. 新增 About / Contact / Privacy / Terms 增强信任
6. 新增 BreadcrumbList schema
7. FAQ 内容变成真实用户问题，而不是只写“免费吗/需要注册吗”
8. Sitemap 和 robots 保持正确
```

### 1.3 UX 目标

```txt
1. 工具必须在首屏可见
2. 移动端输入框和按钮必须易点
3. 移动端表格不能依赖横向滚动
4. 换算结果必须足够醒目
5. 错误提示必须明确
6. Related tools 不要重复堆叠
7. Footer 必须能帮助用户发现页面
```

---

## 2. 技术约束

### 2.1 技术栈

沿用现有项目技术栈。如果现有项目已经是 Nuxt 3，则继续使用：

```txt
Nuxt 3
Vue 3 Composition API
TypeScript
Tailwind CSS
pnpm
Vitest
Cloudflare Pages
```

如果当前项目缺少某些脚本或测试配置，请补齐，但不要引入复杂工具链。

### 2.2 构建与部署

请确保以下命令可用：

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm build
pnpm generate
```

如果当前 package.json 没有 `typecheck`、`test`、`generate` 脚本，请根据项目实际情况补充。

建议脚本：

```json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "typecheck": "nuxt typecheck",
    "test": "vitest run"
  }
}
```

Cloudflare Pages 推荐配置：

```txt
Build command: pnpm generate
Build output directory: .output/public
```

如使用 Wrangler Direct Upload，部署命令：

```bash
npx wrangler pages deploy .output/public --project-name convertminttools
```

如果项目已经有 Cloudflare Pages Git 集成，只需确保 build command 和 output directory 正确，不要强行改为 Direct Upload。

---

## 3. 页面范围

### 3.1 保留并改造的页面

```txt
/
首页

/convert-kg-to-lbs/
Convert kg to lbs

/convert-lbs-to-kg/
Convert lbs to kg

/military-time-converter/
Military Time Converter

/weight-converter/
Weight Converter
```

### 3.2 新增基础页面

```txt
/about/
About ConvertMintTools

/contact/
Contact ConvertMintTools

/privacy/
Privacy Policy

/terms/
Terms of Service

/sitemap/
HTML Sitemap
```

### 3.3 新增错误页面

```txt
/404
Custom 404 page
```

Nuxt 中可用 `error.vue` 或项目现有方式实现。

---

## 4. 信息架构改造

### 4.1 Header 改造

当前页面数量少，但要为后续扩展留结构。

桌面端 Header：

```txt
Logo: ConvertMintTools

Nav:
- Popular
  - kg to lbs
  - lbs to kg
  - Military Time
  - Weight Converter

- Categories
  - Weight Converters
  - Time Converters

- Resources
  - About
  - Contact
  - Sitemap
```

移动端 Header：

```txt
Logo + hamburger menu
点击 hamburger 后展开分组导航
每个导航项触摸高度 >= 44px
```

实现要求：

```txt
1. Header 高度保持轻量，不要压缩首屏工具区域
2. 当前页面导航项需要 active state
3. 移动端不要让 4-6 个链接横向挤在顶部
4. 不要引入重型菜单库
```

### 4.2 Footer 改造

新增完整 Footer。Footer 必须出现在所有页面底部。

Footer 分组：

```txt
Tools
- Convert kg to lbs
- Convert lbs to kg
- Military Time Converter
- Weight Converter

Categories
- Weight Converters
- Time Converters

Company
- About
- Contact
- Privacy Policy
- Terms of Service

Resources
- Sitemap
```

Footer 底部文案：

```txt
© 2026 ConvertMintTools.com. Free browser-based converter tools.
```

Footer 要求：

```txt
1. 移动端为单列或两列布局
2. 桌面端为 4 列布局
3. 链接文字清晰
4. 不要只写一行 slogan
```

### 4.3 面包屑导航

所有工具页和基础页面加入面包屑。

示例：

```txt
Home > Weight Converters > Convert kg to lbs
Home > Time Converters > Military Time Converter
Home > Company > Privacy Policy
```

实现要求：

```txt
1. 使用统一 Breadcrumb 组件
2. 移动端可读，不要过小
3. 添加 BreadcrumbList JSON-LD
4. 首页不需要 breadcrumb
```

---

## 5. 首页改造

### 5.1 首页定位

首页定位为：

```txt
Converter tools hub + quick converter
```

不要让首页变成单一 kg/lbs 页面，也不要重复堆同一批工具链接。

### 5.2 首页结构

首页建议结构：

```txt
1. Hero
2. Quick Converter
3. Popular Converters
4. Converter Categories
5. Why Use ConvertMintTools
6. FAQ
7. Footer
```

### 5.3 Hero

H1：

```txt
Free Unit Converter
```

Subtitle：

```txt
Convert weight, time, and common units instantly with simple browser-based tools.
```

Trust note：

```txt
No sign-up required · Instant results · Works in your browser
```

### 5.4 Quick Converter

默认展示 Weight Converter，默认方向为 kg to lbs。

要求：

```txt
1. 用户打开首页即可输入数值并看到结果
2. 支持 kg、g、mg、lb、oz、stone、metric ton、US ton
3. 首页工具可以简化，但必须可用
4. 结果区域要明显
```

### 5.5 Popular Converters

只保留一个热门工具区，不要多处重复展示。

卡片：

```txt
Convert kg to lbs
Convert kilograms to pounds instantly.

Convert lbs to kg
Convert pounds to kilograms instantly.

Military Time Converter
Convert military time to regular time and regular time to military time.

Weight Converter
Convert between kg, g, mg, lb, oz, stone, and tons.
```

### 5.6 Converter Categories

```txt
Weight Converters
Common weight and mass conversions.

Time Converters
Military time and time format conversion tools.
```

未来扩展 Length/Temperature，但本阶段不要新增未实现页面的入口。

### 5.7 Why Use ConvertMintTools

新增轻量信任说明：

```txt
Fast browser-based tools
No account required
Clear formulas and examples
Mobile-friendly converter pages
```

### 5.8 首页 FAQ

FAQ 数量 4-6 个即可。

建议问题：

```txt
Are these converter tools free?
Do I need to create an account?
Are the calculations done in my browser?
How accurate are the conversion results?
Which converters are available now?
```

---

## 6. /military-time-converter/ 改造

### 6.1 核心目标

当前页面必须升级为双向军事时间转换器。

必须支持：

```txt
Military Time -> Regular Time
Regular Time -> Military Time
```

### 6.2 页面结构

```txt
1. Breadcrumb
2. H1 + subtitle + trust note
3. Converter tabs
4. Result card
5. Common examples
6. Military time chart
7. How to read military time
8. FAQ
9. Related tools
```

H1：

```txt
Military Time Converter
```

Subtitle：

```txt
Convert military time to regular time and regular time to military time instantly.
```

### 6.3 工具功能

Tab 1：

```txt
Military Time to Regular Time
```

输入支持：

```txt
1430
14:30
0000
00:00
2359
23:59
```

输出示例：

```txt
1430 = 2:30 PM
0000 = 12:00 AM
1200 = 12:00 PM
```

Tab 2：

```txt
Regular Time to Military Time
```

输入支持：

```txt
2:30 PM
12:00 AM
12:00 PM
11:59 PM
```

输出示例：

```txt
2:30 PM = 1430
12:00 AM = 0000
12:00 PM = 1200
```

错误提示：

```txt
Please enter a valid military time between 0000 and 2359.
Please enter a valid regular time, such as 2:30 PM.
Minutes must be between 00 and 59.
```

### 6.4 快捷按钮

Military -> Regular 快捷按钮：

```txt
0000
0600
0900
1200
1430
1700
1800
2359
```

Regular -> Military 快捷按钮：

```txt
12:00 AM
6:00 AM
9:00 AM
12:00 PM
2:30 PM
5:00 PM
6:00 PM
11:59 PM
```

按钮移动端最小高度 44px，间距至少 8px。

### 6.5 FAQ

至少 8 个问题：

```txt
What is military time?
How do you convert military time to regular time?
How do you convert regular time to military time?
What is 0000 in regular time?
What is 1200 in military time?
Is 2400 a valid military time?
Is military time the same as 24-hour time?
How do you say 0730 in military time?
```

### 6.6 Related Tools

```txt
Convert kg to lbs
Convert lbs to kg
Weight Converter
```

---

## 7. /weight-converter/ 改造

### 7.1 核心目标

当前页面必须从只支持 kg/lbs 升级为真正的 Weight Converter。

支持单位：

```txt
kg
g
mg
lb
oz
stone
metric ton
US ton
```

内部单位建议统一换算为 kilograms。

### 7.2 页面结构

```txt
1. Breadcrumb
2. H1 + subtitle + trust note
3. Multi-unit Weight Converter
4. Common weight conversions
5. Weight units guide
6. FAQ
7. Related tools
```

H1：

```txt
Weight Converter
```

Subtitle：

```txt
Convert between kilograms, grams, milligrams, pounds, ounces, stone, and tons.
```

### 7.3 工具功能

字段：

```txt
Amount input
From unit select
To unit select
Result
Swap button
Copy result button
Clear button
```

默认：

```txt
Amount: 80
From: kg
To: lb
```

结果：

```txt
80 kg = 176.37 lb
```

实现要求：

```txt
1. 实时换算
2. 支持 swap from/to
3. 支持 copy result
4. 支持清空输入
5. 输入负数时提示 Please enter a positive number.
6. 非数字时提示 Please enter a valid number.
7. 结果默认最多 2 位小数
8. 内部计算可保留更多精度
```

### 7.4 常见换算表

展示常见单位关系：

```txt
1 kg = 2.20462 lb
1 lb = 0.453592 kg
1 oz = 28.3495 g
1 stone = 14 lb
1 metric ton = 1000 kg
1 US ton = 2000 lb
```

移动端以卡片形式展示，不要横向滚动。

### 7.5 FAQ

至少 8 个问题：

```txt
What units does this weight converter support?
How do you convert kg to lbs?
How do you convert lbs to kg?
How many ounces are in a pound?
How many pounds are in a stone?
What is the difference between a metric ton and a US ton?
Can I use this converter for body weight?
How accurate are the results?
```

### 7.6 Related Tools

```txt
Convert kg to lbs
Convert lbs to kg
Military Time Converter
```

---

## 8. /convert-kg-to-lbs/ 改造

### 8.1 核心目标

保留当前页面定位，增强内容深度、移动端体验、FAQ 和相关工具。

H1：

```txt
Convert kg to lbs
```

Title：

```txt
Convert kg to lbs - Kilograms to Pounds Converter
```

Meta description：

```txt
Convert kg to lbs instantly with a free kilograms to pounds calculator. Enter any kg value, see the formula, and use common kg to lbs conversion tables.
```

### 8.2 页面结构

```txt
1. Breadcrumb
2. H1 + subtitle + trust note
3. kg to lbs converter
4. Result explanation
5. kg to lbs formula
6. Common kg to lbs conversions
7. Body weight conversion table
8. How to convert kg to lbs
9. FAQ
10. Related tools
```

### 8.3 工具功能

页面主工具默认：

```txt
From: kg
To: lb
Default amount: 80
```

但工具必须支持双向输入或至少明显链接到 `/convert-lbs-to-kg/`。

结果示例：

```txt
80 kg = 176.37 lb
```

公式：

```txt
pounds = kilograms × 2.2046226218
```

### 8.4 表格

至少两组表格：

```txt
Common kg to lbs conversions:
1 kg, 5 kg, 10 kg, 20 kg, 50 kg, 60 kg, 70 kg, 80 kg, 90 kg, 100 kg

Body weight conversions:
40 kg, 45 kg, 50 kg, 55 kg, 60 kg, 65 kg, 70 kg, 75 kg, 80 kg, 85 kg, 90 kg, 95 kg, 100 kg, 110 kg, 120 kg
```

移动端表格改为卡片列表或紧凑双列，不要横向滚动。

### 8.5 内容增强

新增简短说明，不要写成百科长文。

必须覆盖：

```txt
1. When to use kg and lbs
2. Why the exact factor is 2.2046226218
3. When 2.2 is enough for quick estimates
4. Body weight use case
5. Shipping/package weight use case
```

### 8.6 FAQ

至少 8 个问题：

```txt
How do you convert kg to lbs?
What is 1 kg in pounds?
Is 1 kg exactly 2.2 lbs?
How many pounds is 80 kg?
Why do some people use kg and others use lbs?
Can I use this converter for body weight?
Can I use this converter for package weight?
How accurate is this kg to lbs converter?
```

### 8.7 Related Tools

```txt
Convert lbs to kg
Weight Converter
Military Time Converter
```

---

## 9. /convert-lbs-to-kg/ 改造

### 9.1 核心目标

该页面不能只是 kg-to-lbs 的镜像复制。要强化 lbs -> kg 的独立意图和不同使用场景。

H1：

```txt
Convert lbs to kg
```

Title：

```txt
Convert lbs to kg - Pounds to Kilograms Converter
```

Meta description：

```txt
Convert lbs to kg instantly with a free pounds to kilograms calculator. Enter any pound value, see the formula, and use common lbs to kg conversion tables.
```

### 9.2 页面结构

```txt
1. Breadcrumb
2. H1 + subtitle + trust note
3. lbs to kg converter
4. Result explanation
5. lbs to kg formula
6. Common lbs to kg conversions
7. Travel and body weight conversion table
8. How to convert lbs to kg
9. FAQ
10. Related tools
```

### 9.3 工具功能

默认：

```txt
From: lb
To: kg
Default amount: 180
```

结果示例：

```txt
180 lb = 81.65 kg
```

公式：

```txt
kilograms = pounds ÷ 2.2046226218
```

### 9.4 内容差异化

必须覆盖和 kg->lbs 不同的场景：

```txt
1. US body weight to metric weight
2. Gym equipment or weight plates
3. Travel luggage weight
4. International package weight
5. Why kg is commonly used outside the US
```

### 9.5 FAQ

至少 8 个问题：

```txt
How do you convert lbs to kg?
What is 1 lb in kg?
How many kilograms is 180 lbs?
Is pounds to kilograms the same as lbs to kg?
Can I use this for luggage weight?
Can I use this for gym weights?
How accurate is this lbs to kg converter?
What is the difference between pounds and kilograms?
```

### 9.6 Related Tools

```txt
Convert kg to lbs
Weight Converter
Military Time Converter
```

---

## 10. 新增 About 页面

URL：

```txt
/about/
```

Title：

```txt
About ConvertMintTools
```

H1：

```txt
About ConvertMintTools
```

内容要求：

```txt
1. 简短介绍 ConvertMintTools 是什么
2. 强调提供免费、快速、浏览器内运行的 converter 工具
3. 说明工具结果基于标准换算系数
4. 说明目前聚焦 weight 和 time converter
5. 链接到 Contact、Privacy、Terms
```

示例文案方向：

```txt
ConvertMintTools is a collection of simple browser-based converter tools built to help users get fast, clear answers without signing up.
```

不要虚构大型团队、虚构历史、虚构用户数量。

---

## 11. 新增 Contact 页面

URL：

```txt
/contact/
```

Title：

```txt
Contact ConvertMintTools
```

H1：

```txt
Contact ConvertMintTools
```

内容要求：

```txt
1. 说明用户可以反馈错误、建议新工具、报告问题
2. 如果项目已有邮箱，使用真实邮箱
3. 如果没有真实邮箱，使用占位符并在代码中标记 TODO
4. 不要实现后端表单提交
5. 可以使用 mailto 链接
```

建议：

```txt
Email: hello@convertminttools.com
```

如果没有该邮箱，不要强行写死，改为配置项。

---

## 12. 新增 Privacy Policy 页面

URL：

```txt
/privacy/
```

Title：

```txt
Privacy Policy
```

H1：

```txt
Privacy Policy
```

内容要求：

```txt
1. 说明转换计算在浏览器中完成
2. 说明当前不要求登录
3. 说明当前不主动存储用户输入的转换数值
4. 如项目使用 analytics，说明会收集匿名访问数据
5. 说明 Cloudflare 可能处理访问日志/CDN 日志
6. 说明 cookie 情况
7. 说明联系方式
8. 显示 Last updated 日期
```

不要写无法保证的承诺。例如不要写 “we collect no data at all”，除非确认没有任何 analytics、日志或第三方脚本。

---

## 13. 新增 Terms of Service 页面

URL：

```txt
/terms/
```

Title：

```txt
Terms of Service
```

H1：

```txt
Terms of Service
```

内容要求：

```txt
1. 工具仅供一般信息和便利用途
2. 尽力保证准确，但不承担因使用结果导致的损失
3. 用户应在工程、医疗、法律、财务等高风险场景中自行复核
4. 禁止滥用网站
5. 知识产权说明
6. 联系方式
7. Last updated 日期
```

---

## 14. 新增 HTML Sitemap 页面

URL：

```txt
/sitemap/
```

Title：

```txt
Sitemap
```

H1：

```txt
Sitemap
```

内容结构：

```txt
Main pages
- Home
- About
- Contact
- Privacy Policy
- Terms of Service

Weight converters
- Weight Converter
- Convert kg to lbs
- Convert lbs to kg

Time converters
- Military Time Converter
```

每个链接带一句简短描述。

---

## 15. 404 页面

新增自定义 404。

内容：

```txt
H1: Page not found
Text: The page you are looking for does not exist or may have moved.
Links:
- Home
- Convert kg to lbs
- Convert lbs to kg
- Military Time Converter
- Weight Converter
```

要求：

```txt
1. 返回正确 404 状态
2. 不要跳转首页
3. 页面视觉与全站一致
```

---

## 16. 移动端体验要求

全站必须满足：

```txt
1. 输入框高度 >= 48px
2. 按钮高度 >= 44px
3. 关键 CTA 按钮高度 >= 48px
4. 正文字号 >= 16px
5. H1 移动端 >= 28px
6. H2 移动端 >= 22px
7. 结果字号移动端 >= 32px
8. 任何页面不得出现水平滚动
9. 表格在移动端不能依赖横向滚动
10. 导航移动端使用 hamburger menu
11. FAQ 移动端默认折叠
12. 相关工具卡片移动端可以单列展示
```

输入框：

```txt
type="text" 或 type="number" 需结合实际体验
inputmode="decimal" 用于数值输入
军事时间可使用 inputmode="numeric" 或 text + pattern
```

错误提示：

```txt
1. 不要只用红色表达错误
2. 错误文字和输入框要有关联
3. 动态结果区域尽量使用 aria-live="polite"
```

---

## 17. SEO 技术要求

### 17.1 每页 metadata

每个页面必须有：

```txt
title
meta description
canonical
og:title
og:description
og:type
og:url
```

Canonical 要求：

```txt
1. 每个页面 canonical 指向自己
2. /convert-kg-to-lbs/ 和 /convert-lbs-to-kg/ 不互相 canonical
3. 两个页面通过差异化内容避免重复
```

### 17.2 Schema

实现以下结构化数据：

```txt
1. WebSite schema：全站
2. WebApplication schema：工具页
3. FAQPage schema：有 FAQ 的页面
4. BreadcrumbList schema：非首页页面
5. Organization schema：首页或全站 layout
```

不要使用不存在或不确定的 schema 类型。优先使用稳定、通用、可验证的 schema。

### 17.3 sitemap.xml

确保 sitemap.xml 包含：

```txt
/
/convert-kg-to-lbs/
/convert-lbs-to-kg/
/military-time-converter/
/weight-converter/
/about/
/contact/
/privacy/
/terms/
/sitemap/
```

如果项目使用 Nuxt sitemap 模块，确保新增页面自动进入 sitemap。

### 17.4 robots.txt

确保存在 robots.txt，至少包含：

```txt
User-agent: *
Allow: /

Sitemap: https://convertminttools.com/sitemap.xml
```

### 17.5 URL 规范

```txt
1. 全部小写
2. 使用连字符
3. 保持现有 URL 不变
4. 不要随意改变已经上线页面 URL
```

---

## 18. 内容质量要求

全站英文文案风格：

```txt
clear
practical
trustworthy
tool-first
not hype-driven
not keyword-stuffed
```

每个工具页必须包含：

```txt
1. 工具首屏
2. 明确结果
3. 公式
4. 示例
5. FAQ
6. 相关工具
7. 简短场景说明
```

禁止：

```txt
1. 大段重复 SEO 文案
2. 同一段落在多个页面复制粘贴
3. 虚构团队、用户数、评分
4. 过度营销话术
5. 工具区域上方放广告或无关内容
```

---

## 19. 组件建议

如果项目已有类似组件，优先复用并改造。若没有，可新增：

```txt
components/layout/SiteHeader.vue
components/layout/SiteFooter.vue
components/layout/Breadcrumbs.vue
components/layout/MobileMenu.vue

components/converter/WeightConverter.vue
components/converter/MilitaryTimeConverter.vue
components/converter/ConverterResult.vue
components/converter/CopyButton.vue
components/converter/UnitSelect.vue

components/seo/FaqBlock.vue
components/seo/RelatedTools.vue
components/seo/ConversionTable.vue
components/seo/JsonLd.vue

components/ui/BaseButton.vue
components/ui/BaseInput.vue
components/ui/BaseCard.vue
```

纯逻辑建议放在：

```txt
utils/weight.ts
utils/military-time.ts
utils/format-number.ts
utils/validation.ts
```

数据建议放在：

```txt
data/pages.ts
data/faqs.ts
data/related-tools.ts
data/conversion-tables.ts
data/units.ts
```

---

## 20. 单元测试要求

必须新增或更新测试。

### 20.1 weight 测试

测试文件建议：

```txt
tests/weight.test.ts
```

必须覆盖：

```txt
kg to lb
lb to kg
g to kg
mg to g
oz to g
stone to lb
metric ton to kg
US ton to lb
swap units
invalid input
negative input
formatting
```

关键期望：

```txt
1 kg = 2.20462 lb
1 lb = 0.453592 kg
1 stone = 14 lb
1 metric ton = 1000 kg
1 US ton = 2000 lb
```

### 20.2 military time 测试

测试文件建议：

```txt
tests/military-time.test.ts
```

必须覆盖：

```txt
0000 -> 12:00 AM
1200 -> 12:00 PM
1430 -> 2:30 PM
2359 -> 11:59 PM
14:30 -> 2:30 PM

12:00 AM -> 0000
12:00 PM -> 1200
2:30 PM -> 1430
11:59 PM -> 2359

invalid: 2460
invalid: 2360
invalid: abc
invalid: empty
```

### 20.3 构建测试

完成后必须运行：

```bash
pnpm test
pnpm typecheck
pnpm build
pnpm generate
```

如果任何命令失败，必须修复后再交付。

---

## 21. Codex 执行任务拆分

请按以下顺序执行，不要把所有改动混在一个巨大提交里。

### Task 1：基础架构和导航

目标：

```txt
1. 重构 Header
2. 重构 Footer
3. 新增移动端 hamburger menu
4. 新增 Breadcrumb 组件
5. 新增基础 layout 支撑
```

验收：

```txt
1. 桌面端导航分组清晰
2. 移动端无横向溢出
3. Footer 包含 Tools / Categories / Company / Resources
4. 非首页页面显示 breadcrumb
```

### Task 2：新增基础页面

目标：

```txt
1. /about/
2. /contact/
3. /privacy/
4. /terms/
5. /sitemap/
6. 404 页面
```

验收：

```txt
1. 所有页面可访问
2. Footer 链接正确
3. sitemap 页面列出所有核心页面
4. 404 不跳首页
5. 每页 metadata 完整
```

### Task 3：军事时间双向转换

目标：

```txt
1. /military-time-converter/ 支持双向转换
2. 添加 tabs 或等效交互
3. 添加快捷按钮
4. 更新 FAQ
5. 更新测试
```

验收：

```txt
1. 1430 -> 2:30 PM
2. 2:30 PM -> 1430
3. 0000 -> 12:00 AM
4. 12:00 AM -> 0000
5. 输入非法时间有明确错误提示
6. 移动端按钮可点
```

### Task 4：Weight Converter 多单位

目标：

```txt
1. /weight-converter/ 支持 8 种重量单位
2. 首页 quick converter 使用同一逻辑
3. 支持 swap / copy / clear
4. 更新 FAQ
5. 更新测试
```

验收：

```txt
1. kg/g/mg/lb/oz/stone/metric ton/US ton 都可互转
2. 默认 80 kg -> 176.37 lb
3. swap 后结果正确
4. 非数字/负数提示明确
```

### Task 5：kg/lbs 两个工具页内容增强

目标：

```txt
1. 优化 /convert-kg-to-lbs/
2. 优化 /convert-lbs-to-kg/
3. 增加差异化内容
4. 增加更多 FAQ
5. 移动端表格卡片化
```

验收：

```txt
1. 两页内容不只是镜像复制
2. 两页 canonical 各自指向自己
3. 两页都有公式、表格、FAQ、related tools
4. 移动端无横向滚动
```

### Task 6：SEO 收尾和部署配置

目标：

```txt
1. metadata 完整
2. canonical 完整
3. FAQPage schema
4. BreadcrumbList schema
5. WebApplication schema
6. sitemap.xml 更新
7. robots.txt 更新
8. Cloudflare Pages 构建配置确认
```

验收：

```txt
1. pnpm test 通过
2. pnpm typecheck 通过
3. pnpm build 通过
4. pnpm generate 通过
5. .output/public 存在
6. sitemap.xml 包含新增页面
7. robots.txt 指向正确 sitemap
```

---

## 22. 最终验收清单

### 22.1 页面验收

必须可访问：

```txt
/
/convert-kg-to-lbs/
/convert-lbs-to-kg/
/military-time-converter/
/weight-converter/
/about/
/contact/
/privacy/
/terms/
/sitemap/
```

### 22.2 功能验收

```txt
1. 首页 quick converter 可用
2. Weight Converter 8 个单位互转可用
3. kg to lbs 页面可用
4. lbs to kg 页面可用
5. military time 双向转换可用
6. copy result 可用
7. clear 可用
8. swap 可用
9. 错误提示可用
```

### 22.3 移动端验收

使用浏览器 DevTools 检查 390px 宽度：

```txt
1. 无横向滚动
2. Header 不拥挤
3. hamburger 可展开
4. 输入框易点
5. 按钮高度足够
6. 结果字号足够大
7. 表格不横向滚动
8. FAQ 折叠可用
```

### 22.4 SEO 验收

```txt
1. 每页只有一个 H1
2. 每页 title 唯一
3. 每页 description 唯一
4. 每页 canonical 正确
5. sitemap.xml 正确
6. robots.txt 正确
7. schema 不报明显错误
8. 内链无死链
```

### 22.5 构建验收

必须通过：

```bash
pnpm test
pnpm typecheck
pnpm build
pnpm generate
```

---

## 23. 交付说明

完成后请输出：

```txt
1. 修改了哪些页面
2. 新增了哪些组件
3. 新增了哪些 utils/tests
4. 哪些命令已运行
5. 是否所有命令通过
6. Cloudflare Pages 构建配置建议
7. 仍需人工配置的事项
```

如果 Cloudflare 部署需要账号权限或 API token，不要伪造已部署成功。只需要确保项目可以通过：

```bash
pnpm generate
```

生成静态产物，并说明可用以下命令部署：

```bash
npx wrangler pages deploy .output/public --project-name convertminttools
```

或通过 Cloudflare Pages Git 集成配置：

```txt
Build command: pnpm generate
Build output directory: .output/public
```

---

## 24. 本阶段不做但保留到后续 Roadmap 的事项

以下事项不要在本次 PRD 中实现：

```txt
1. Length converter 页面矩阵
2. Temperature converter 页面矩阵
3. Volume converter 页面矩阵
4. 50+ 单位换算页面
5. kg/lbs programmatic 数字页
6. 博客系统
7. PDF chart 下载
8. 批量转换
9. 暗色模式
10. 历史记录
11. 广告/affiliate
12. 多语言
13. PWA
14. A/B 测试
15. 用户评价/社交证明
```

等当前 5 个核心页面在 GSC 中有稳定 impressions 后，再进入 Phase 2。

