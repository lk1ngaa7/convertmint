# SEO_PLAN — Converter MVP SEO 策略

## 1. SEO 总原则

这个站不是内容博客，而是工具站。SEO 的核心不是堆长文，而是：

1. 搜索意图精准匹配；
2. 工具首屏可用；
3. 页面结构清晰；
4. 内链关系明确；
5. 每页只打一个主关键词；
6. 内容辅助工具，而不是压过工具。

---

## 2. 页面关键词映射

| URL | 主关键词 | 次关键词 | 页面角色 |
|---|---|---|---|
| `/` | unit converter | online unit converter, unit of measurement converter | 首页/主题枢纽 |
| `/military-time-converter` | military time converter | convert time into military time, military time chart | 快速验证工具页 |
| `/convert-kg-to-lbs` | convert kg to lbs | kg to lbs converter, kilograms to pounds, kg to lbs chart | 长期主力工具页 |
| `/convert-lbs-to-kg` | convert lbs to kg | lbs to kg converter, pounds to kilograms | 反向工具页 |
| `/weight-converter` | weight converter | weight calculator converter, unit converter weight | 品类聚合页 |

---

## 3. 当前 SEO 判断

### 3.1 military time

优点：

- KD 较低；
- Google Widget 干扰弱；
- 竞品质量相对低；
- 适合快速验证收录和曝光。

策略：

- 页面一定要完整；
- 首屏工具要好用；
- 下方补 chart、examples、FAQ；
- 不需要先做 `/time-converter` 品类页。

### 3.2 kg to lbs

优点：

- 搜索量高；
- 长尾丰富；
- 适合长期做权重资产；
- 后续可扩 chart、how-to、具体数字页。

难点：

- Google SERP 顶部存在单位换算 Widget；
- Top 10 站点权重高；
- 主词点击会被截流；
- 短期不应期待 Top 3。

策略：

- 主页面做强，不做薄页；
- 强调双向实时换算；
- 做更好的 common conversion tables；
- FAQ 补齐；
- 后续根据 GSC 决定是否做数字长尾页。

---

## 4. 页面 SEO 结构

每个工具页统一结构：

```txt
Header
Hero
Tool Card
Result / Explanation
Formula
Common Examples / Conversion Table
How to use
FAQ
Related Tools
Footer
```

不要把 SEO 内容放在工具前面。

---

## 5. Title / Meta 规范

### `/convert-kg-to-lbs`

Title：

```txt
Convert kg to lbs - Kilograms to Pounds Converter
```

Meta：

```txt
Convert kg to lbs instantly with a free kilograms to pounds calculator. Enter any kg value, see the formula, and use the kg to lbs conversion table.
```

H1：

```txt
Convert kg to lbs
```

### `/convert-lbs-to-kg`

Title：

```txt
Convert lbs to kg - Pounds to Kilograms Converter
```

Meta：

```txt
Convert lbs to kg instantly with a free pounds to kilograms calculator. Enter any lbs value, see the formula, and use the lbs to kg conversion table.
```

H1：

```txt
Convert lbs to kg
```

### `/military-time-converter`

Title：

```txt
Military Time Converter - Convert Military Time to Regular Time
```

Meta：

```txt
Convert military time to regular 12-hour time instantly. Enter values like 1430 or 23:45 and see the AM/PM result with examples and a military time chart.
```

H1：

```txt
Military Time Converter
```

### `/weight-converter`

Title：

```txt
Weight Converter - Convert kg, lbs, Pounds and Kilograms
```

Meta：

```txt
Use a simple weight converter to convert kilograms to pounds, pounds to kilograms, and common weight units with formulas and conversion examples.
```

H1：

```txt
Weight Converter
```

### `/`

Title：

```txt
Free Unit Converter - Convert Weight and Time Online
```

Meta：

```txt
Convert units online with fast browser-based tools. Convert kg to lbs, lbs to kg, military time, and more with simple formulas and examples.
```

H1：

```txt
Free Unit Converter
```

---

## 6. 内链规则

### 首页

首页链接到：

- `/convert-kg-to-lbs`
- `/convert-lbs-to-kg`
- `/weight-converter`
- `/military-time-converter`

### weight converter

`/weight-converter` 强链接到：

- `/convert-kg-to-lbs`
- `/convert-lbs-to-kg`

### kg/lbs 工具页

`/convert-kg-to-lbs` 链接到：

- `/convert-lbs-to-kg`
- `/weight-converter`
- `/military-time-converter`

`/convert-lbs-to-kg` 链接到：

- `/convert-kg-to-lbs`
- `/weight-converter`
- `/military-time-converter`

### military time

`/military-time-converter` 链接到：

- `/`
- `/convert-kg-to-lbs`
- `/weight-converter`

---

## 7. FAQ 策略

FAQ 不是堆关键词，而是覆盖真实问题。

### kg to lbs FAQ 示例

- How do you convert kg to lbs?
- What is 1 kg in pounds?
- What is the kg to lbs formula?
- Is 1 kg equal to 2.2 lbs?
- How many pounds is 80 kg?

### military time FAQ 示例

- What is military time?
- How do you convert military time to regular time?
- What is 1430 in regular time?
- Is 0000 midnight?
- Is 1200 AM or PM in military time?

---

## 8. 后续扩展策略，不在 MVP 实现

MVP 上线后，根据 GSC 数据决定是否新增：

```txt
/kg-to-lbs-chart
/how-to-convert-kg-to-lbs
/80-kg-to-lbs
/50-lbs-to-kg
/convert-grams-to-ounces
/convert-celsius-to-fahrenheit
/convert-mm-to-inches
```

Programmatic 数字页必须满足：

- 有明确答案；
- 有可编辑工具；
- 有公式；
- 有相邻数字表；
- 有 FAQ；
- 有 related conversions；
- 不是只替换数字的薄页。
