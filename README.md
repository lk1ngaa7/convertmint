# Convert Mint — Converter 工具站 MVP

这是一个用 Nuxt 3 + TypeScript + Tailwind CSS 构建的英文 converter 工具站项目说明包。  
本仓库目标是让 Codex 直接按文档生成代码、跑测试、静态构建，并部署到 Cloudflare Pages。

---

## 1. 项目目标

`Convert Mint` 是一个面向英文搜索用户的轻量在线转换工具站。MVP 只做 5 个页面：

```txt
/
/military-time-converter
/convert-kg-to-lbs
/convert-lbs-to-kg
/weight-converter
```

项目策略：

- `military time converter`：低 KD、低竞争，用于快速验证 SEO 收录和曝光。
- `convert kg to lbs`：搜索量大、长尾丰富，用于建立长期权重资产。
- `convert lbs to kg`：承接反向精准意图。
- `weight converter`：作为重量品类页，给两个工具页传递主题和内链。
- 首页：作为 unit converter 枢纽页，不期待 MVP 阶段拿下大词，只负责主题聚合和站内权重传递。

---

## 2. 为什么先做这些页面

当前 SEO 判断：

- converter 是纯前端可实现方向，适合一人工具站冷启动。
- `convert kg to lbs` 搜索量高，但 Google SERP 顶部有单位换算 Widget，主词点击会被截流。
- `military time converter` 更适合快速验证，因为没有同等强度的 Google Widget 干扰。
- kg/lbs 的真正机会在：双向换算、换算表、FAQ、移动端体验、后续数字长尾页。

因此 MVP 不追求一次铺满 18 页，而是先做 5 页，确保每页质量足够高。

---

## 3. 技术栈

- Nuxt 3
- Vue 3 Composition API
- TypeScript
- Tailwind CSS
- pnpm
- Vitest
- Cloudflare Pages

---

## 4. 本地启动

### 4.1 安装依赖

```bash
pnpm install
```

### 4.2 本地开发

```bash
pnpm dev
```

默认访问：

```txt
http://localhost:3000
```

### 4.3 测试

```bash
pnpm test
```

### 4.4 类型检查

```bash
pnpm typecheck
```

### 4.5 生产构建

```bash
pnpm build
```

### 4.6 静态生成

```bash
pnpm generate
```

静态产物目录：

```txt
.output/public
```

---

## 5. Cloudflare Pages 部署

### 5.1 Git 集成部署

在 Cloudflare Pages 新建项目后，建议设置：

```txt
Framework preset: Nuxt
Build command: pnpm generate
Build output directory: .output/public
Root directory: /
```

### 5.2 Wrangler Direct Upload

如果使用命令行直接上传：

```bash
pnpm generate
npx wrangler pages deploy .output/public --project-name convert-mint
```

如果 Cloudflare 账号下还没有项目，先在 Cloudflare Dashboard 创建 Pages 项目，或者按 Wrangler 提示创建。

---

## 6. 给 Codex 的推荐启动 Prompt

把下面这段直接发给 Codex：

```txt
请先完整阅读 AGENTS.md、README.md、docs/PRD.md、docs/TECH_SPEC.md、docs/SEO_PLAN.md、docs/PAGE_PLAN.md、docs/UX_GUIDE.md、docs/CODEX_TASKS.md。

请按 docs/CODEX_TASKS.md 的 Task 1 开始执行：初始化 Nuxt 3 + TypeScript + Tailwind CSS 项目，并创建 MVP 页面占位。

要求：
1. 严格遵守 AGENTS.md。
2. 第一阶段只实现这 5 个 URL：/、/military-time-converter、/convert-kg-to-lbs、/convert-lbs-to-kg、/weight-converter。
3. 不要增加后端、数据库、登录、广告、programmatic 数字页。
4. 每个任务完成前运行 pnpm test、pnpm typecheck、pnpm build、pnpm generate。
5. 如果命令失败，先修复再汇报。
```

---

## 7. 交付标准

MVP 完成后必须满足：

- 5 个页面全部可访问；
- 工具在首屏可用；
- 移动端无横向滚动；
- kg/lbs 双向换算准确；
- military time 校验准确；
- 每个页面有 title、meta description、canonical；
- 每个工具页有 FAQ、formula、examples、related tools；
- `pnpm test` 通过；
- `pnpm typecheck` 通过；
- `pnpm build` 通过；
- `pnpm generate` 通过；
- `.output/public` 可部署到 Cloudflare Pages。
