# MASTER_PROMPT — 直接发给 Codex 的总启动指令

把下面整段复制给 Codex：

```txt
你现在要为我从零开发一个英文 converter 工具站 MVP，项目名 Convert Mint。

请先完整阅读这些文件：
- AGENTS.md
- README.md
- docs/PRD.md
- docs/TECH_SPEC.md
- docs/SEO_PLAN.md
- docs/PAGE_PLAN.md
- docs/UX_GUIDE.md
- docs/CONTENT_RULES.md
- docs/CODEX_TASKS.md
- docs/CLOUDFLARE_DEPLOY.md
- docs/QA_CHECKLIST.md

然后严格按 docs/CODEX_TASKS.md 从 Task 1 开始执行。

核心要求：
1. 使用 Nuxt 3 + TypeScript + Tailwind CSS + pnpm + Vitest。
2. 第一阶段只实现 5 个页面：
   - /
   - /military-time-converter
   - /convert-kg-to-lbs
   - /convert-lbs-to-kg
   - /weight-converter
3. 前台网站文案用英文。
4. 项目文档和注释可以中文，但用户可见页面内容必须英文。
5. 工具必须在首屏可用。
6. 重量换算必须支持 kg/lbs 双向实时换算。
7. military time 必须支持 0000 到 2359，并输出 12-hour AM/PM 格式。
8. 每个页面必须有 SEO metadata、FAQ、related tools。
9. 生成静态站点，部署目标是 Cloudflare Pages，输出目录 .output/public。
10. 不要增加后端、数据库、登录、广告、Affiliate、文件转换、货币转换、programmatic 数字页。

每完成一个任务，必须运行：
- pnpm test
- pnpm typecheck
- pnpm build
- pnpm generate

如果任何命令失败，先修复再汇报。汇报时说明：改了哪些文件、实现了什么、跑了哪些命令、结果是否通过、还剩什么未完成。
```
