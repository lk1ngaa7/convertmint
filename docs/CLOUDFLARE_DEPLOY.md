# CLOUDFLARE_DEPLOY — Cloudflare Pages 部署指南

## 1. 部署策略

Convert Mint MVP 使用静态生成部署。

原因：

- 当前工具不需要后端；
- 不需要数据库；
- 不需要 Cloudflare Functions；
- 静态页面速度快；
- Cloudflare Pages 成本低；
- SEO 页面可以预渲染。

---

## 2. 本地生成静态文件

执行：

```bash
pnpm generate
```

成功后应生成：

```txt
.output/public
```

这是 Cloudflare Pages 需要部署的静态目录。

---

## 3. 方式一：Cloudflare Pages Git 集成

适合正式上线。

步骤：

1. 将项目推送到 GitHub。
2. 登录 Cloudflare Dashboard。
3. 进入 Workers & Pages / Pages。
4. 创建 Pages 项目。
5. 连接 GitHub 仓库。
6. 设置构建参数。

建议配置：

```txt
Framework preset: Nuxt
Build command: pnpm generate
Build output directory: .output/public
Root directory: /
```

如果 Cloudflare 没有自动识别 pnpm，需要确认仓库包含 `pnpm-lock.yaml`。

---

## 4. 方式二：Wrangler Direct Upload

适合本地快速部署测试。

先登录：

```bash
npx wrangler login
```

生成静态文件：

```bash
pnpm generate
```

部署：

```bash
npx wrangler pages deploy .output/public --project-name convert-mint
```

也可以使用 package script：

```bash
pnpm deploy:cloudflare
```

---

## 5. 不要提交敏感信息

不要把以下信息写入仓库：

- Cloudflare API Token；
- Account ID；
- 邮箱；
- 部署密钥；
- `.env` 里的敏感变量。

MVP 当前不需要环境变量。

---

## 6. 上线前检查

部署前必须运行：

```bash
pnpm test
pnpm typecheck
pnpm build
pnpm generate
```

检查：

```txt
.output/public/index.html
.output/public/military-time-converter/index.html
.output/public/convert-kg-to-lbs/index.html
.output/public/convert-lbs-to-kg/index.html
.output/public/weight-converter/index.html
```

如果某个页面没有生成，检查 Nuxt prerender 和页面路由。

---

## 7. 上线后检查

部署成功后检查：

1. 首页是否可访问；
2. 5 个 MVP 页面是否可访问；
3. 移动端是否无横向滚动；
4. 输入和换算是否正常；
5. copy result 是否正常；
6. sitemap 是否可访问；
7. robots.txt 是否可访问；
8. canonical 是否正确；
9. title / description 是否正确；
10. 用 Google Search Console 提交 sitemap。

---

## 8. 推荐 Cloudflare Pages 设置

### Build settings

```txt
Build command: pnpm generate
Build output directory: .output/public
```

### Production branch

```txt
main
```

### Environment variables

MVP 不需要。

如果 Cloudflare 构建环境需要指定 Node，可以在 Cloudflare Pages 环境变量里设置与 `package.json` 一致的 Node LTS 版本，例如：

```txt
NODE_VERSION=22
```

具体以你的 Cloudflare 构建环境支持为准。

---

## 9. 常见问题

### 9.1 部署后页面 404

检查：

- `pnpm generate` 是否成功；
- `.output/public` 是否存在；
- Cloudflare Pages output directory 是否填 `.output/public`；
- 页面文件是否在 `pages/` 下；
- 是否有动态路由未被预渲染。

### 9.2 样式丢失

检查：

- Tailwind 是否正确安装；
- CSS 是否在 app.vue 或 assets/css 中引入；
- build 是否报错；
- Cloudflare output directory 是否正确。

### 9.3 Wrangler 未登录

执行：

```bash
npx wrangler login
```

再部署。

### 9.4 不确定项目名

可以把 `convert-mint` 替换为实际 Cloudflare Pages 项目名。
