# QA_CHECKLIST — MVP 验收清单

## 1. 页面访问

确认以下页面均可访问：

- [ ] `/`
- [ ] `/military-time-converter`
- [ ] `/convert-kg-to-lbs`
- [ ] `/convert-lbs-to-kg`
- [ ] `/weight-converter`

---

## 2. 功能验收

### kg to lbs

- [ ] 输入 `1` kg，结果约 `2.2 lbs`
- [ ] 输入 `80` kg，结果约 `176.37 lbs`
- [ ] 输入 `7.5` kg，结果正常
- [ ] 输入 `abc`，显示错误
- [ ] 输入 `-1`，显示错误
- [ ] 点击 Copy result 正常
- [ ] Clear 正常

### lbs to kg

- [ ] 输入 `1` lbs，结果约 `0.45 kg`
- [ ] 输入 `150` lbs，结果约 `68.04 kg`
- [ ] 输入 `abc`，显示错误
- [ ] 输入 `-1`，显示错误
- [ ] Copy result 正常

### military time

- [ ] `0000` → `12:00 AM`
- [ ] `0030` → `12:30 AM`
- [ ] `0900` → `9:00 AM`
- [ ] `1200` → `12:00 PM`
- [ ] `1430` → `2:30 PM`
- [ ] `23:59` → `11:59 PM`
- [ ] `2400` 显示错误
- [ ] `2360` 显示错误
- [ ] `abc` 显示错误

---

## 3. UI 验收

- [ ] 工具在首屏可见；
- [ ] 移动端无横向滚动；
- [ ] 输入框高度至少 44px；
- [ ] 按钮高度至少 44px；
- [ ] 结果区域明显；
- [ ] 错误提示清晰；
- [ ] FAQ 可读；
- [ ] Related tools 是卡片，不是纯链接堆叠。

---

## 4. SEO 验收

每个页面检查：

- [ ] title；
- [ ] meta description；
- [ ] canonical；
- [ ] H1 唯一；
- [ ] H2 结构清晰；
- [ ] FAQ；
- [ ] Related tools；
- [ ] Open Graph；
- [ ] JSON-LD；
- [ ] sitemap 包含该 URL；
- [ ] robots.txt 不阻止收录。

---

## 5. 工程验收

必须通过：

```bash
pnpm test
pnpm typecheck
pnpm build
pnpm generate
```

确认：

- [ ] `.output/public` 存在；
- [ ] 静态页面生成成功；
- [ ] 没有 TypeScript 错误；
- [ ] 没有测试失败；
- [ ] 没有明显 console error。

---

## 6. Cloudflare 验收

部署后检查：

- [ ] Cloudflare Pages 部署状态成功；
- [ ] 生产域名可访问；
- [ ] 5 个页面都不是 404；
- [ ] sitemap 可访问；
- [ ] robots.txt 可访问；
- [ ] 移动端访问正常；
- [ ] GSC 可以验证域名；
- [ ] sitemap 已提交到 GSC。
