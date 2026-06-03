# GSC_AFTER_LAUNCH — 上线后的 Google Search Console 观察计划

## 1. 上线当天

完成：

- [ ] 添加域名到 Google Search Console；
- [ ] 提交 sitemap；
- [ ] URL Inspection 请求收录 5 个 MVP 页面；
- [ ] 检查 robots.txt；
- [ ] 检查 canonical；
- [ ] 用移动端访问每个页面。

---

## 2. 第 1 周观察

重点看：

- 页面是否 indexed；
- 是否出现 impressions；
- query 是否和目标关键词相关；
- Google 是否只抓首页、不抓工具页；
- 是否有 crawl but not indexed。

不要急着改标题。

---

## 3. 第 2-4 周观察

重点看 query：

```txt
military time converter
convert kg to lbs
kg to lbs
convert lbs to kg
weight converter
1430 military time
80 kg to lbs
50 lbs to kg
```

判断：

- military time 是否先出曝光；
- kg/lbs 是否出现长尾；
- 首页是否有泛词曝光；
- 哪些页面完全没曝光。

---

## 4. 根据数据扩展

如果出现 `kg to lbs chart`：

```txt
新增 /kg-to-lbs-chart
```

如果出现 `how to convert kg to lbs`：

```txt
新增 /how-to-convert-kg-to-lbs
```

如果出现多个数字 query：

```txt
先新增 1-3 个数字页样板，例如：
/80-kg-to-lbs
/50-lbs-to-kg
/150-lbs-to-kg
```

不要一次性生成 50-100 个页面。

---

## 5. 扩展原则

只有满足以下条件才扩页面：

- GSC 有 query 证据；
- 页面能提供独立价值；
- 不是只替换数字；
- 有工具、公式、表格、FAQ、内链；
- 可以被人工检查质量。
