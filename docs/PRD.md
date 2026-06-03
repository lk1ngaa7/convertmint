# PRD — Convert Mint 工具站 MVP 产品需求文档

## 1. 背景

用户正在做英文工具站副业，已上线 barcode generator 项目，并希望复用“工具首屏可用 + SEO 内容在下方 + Related tools 内链”的模式，启动 converter 工具站。

converter 方向的优势：

- 纯前端可实现；
- 无版权风险；
- 无平台依赖；
- 页面模板可复用；
- 适合做小而多的 SEO 工具页；
- 可以部署为静态站点，成本极低。

MVP 不追求一次覆盖所有单位换算，而是先验证一个最小闭环。

---

## 2. 产品目标

### 2.1 MVP 目标

在 1-2 周内上线一个可被 Google 收录的 converter 工具站，验证：

1. Nuxt + Cloudflare Pages 部署链路；
2. Converter 工具页模板；
3. Google Search Console 收录和 impression；
4. `military time converter` 快速验证词表现；
5. `convert kg to lbs` 长期主力词表现。

### 2.2 非目标

MVP 不做：

- 用户登录；
- 数据库；
- 后端 API；
- 广告位；
- Affiliate；
- 文件转换；
- 货币转换；
- 时区转换；
- PDF 转换；
- programmatic 数字页；
- 大量自动生成薄页面。

---

## 3. 目标用户

### 3.1 搜索型用户

用户从 Google 搜索进入，典型 query：

```txt
convert kg to lbs
convert lbs to kg
military time converter
weight converter
```

用户目标非常明确：

- 立刻得到结果；
- 不想注册；
- 不想看长篇内容；
- 不想被广告遮挡；
- 希望结果可以复制；
- 如果需要，可以看到公式和例子。

### 3.2 用户场景

重量换算：

- 健身/体重；
- 国际购物；
- 包裹重量；
- 食谱重量；
- 学习作业。

军事时间：

- 工作排班；
- 医疗/护理；
- 航空/军队/安保；
- 英文时间格式学习；
- 快速把 1430 转成 2:30 PM。

---

## 4. MVP 页面

### 4.1 首页 `/`

定位：unit converter 主题入口和导航枢纽。

首屏默认提供一个快速 kg to lbs converter，降低首页空泛感。

主要模块：

1. Hero；
2. Quick converter；
3. Popular converters；
4. Weight converters；
5. Time converters；
6. FAQ；
7. Footer。

### 4.2 `/military-time-converter`

定位：快速 SEO 验证页。

功能：

- 输入 military time；
- 输出 regular 12-hour time；
- 校验非法时间；
- 展示常见 military time chart；
- FAQ 和 related tools。

### 4.3 `/convert-kg-to-lbs`

定位：长期主力工具页。

功能：

- kg 输入；
- lbs 结果；
- 同屏支持反向 lbs 输入；
- 展示公式；
- 展示常见体重换算表；
- FAQ；
- Related tools。

### 4.4 `/convert-lbs-to-kg`

定位：反向精准搜索意图页。

功能同 kg to lbs，但默认输入是 lbs，主要文案围绕 pounds to kilograms。

### 4.5 `/weight-converter`

定位：重量换算品类页。

功能：

- mini weight converter；
- 链接到 kg to lbs 和 lbs to kg；
- 展示常用重量单位；
- 解释重量换算公式；
- FAQ。

---

## 5. 成功标准

### 5.1 产品成功标准

用户进入任意工具页后，5 秒内能完成：

1. 看懂页面是干什么的；
2. 找到输入框；
3. 输入值；
4. 看到结果；
5. 复制结果或继续查看公式/表格。

### 5.2 工程成功标准

- 页面能静态生成；
- Cloudflare Pages 能部署；
- 测试通过；
- 类型检查通过；
- 移动端可用；
- 无明显无障碍问题；
- 无横向滚动。

### 5.3 SEO 成功标准

上线后 2-4 周观察：

- GSC 是否收录；
- 5 个页面是否有 impressions；
- 哪些 query 触发展示；
- military time 是否比 kg/lbs 更快出曝光；
- 是否出现长尾 query，例如 `80 kg to lbs`、`50 lbs to kg`。
