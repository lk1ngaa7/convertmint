# PAGE_PLAN — MVP 页面详细规划

## 1. 首页 `/`

### 1.1 页面目标

首页不是为了短期拿下 `unit converter` 大词，而是为了：

1. 说明站点主题；
2. 提供快速入口；
3. 给核心工具页传递内链；
4. 让用户进站后马上能用。

### 1.2 页面结构

```txt
Header
Hero
Quick Converter
Popular Converters
Weight Converters
Time Converters
FAQ
Footer
```

### 1.3 文案

H1：

```txt
Free Unit Converter
```

Subtitle：

```txt
Convert weight and time units instantly with simple browser-based tools.
```

Trust note：

```txt
No sign-up required · Fast results · Works in your browser
```

### 1.4 首屏工具

默认工具：kg to lbs。

输入：

```txt
Kilograms
```

输出：

```txt
Pounds
```

CTA：

```txt
Open full kg to lbs converter
```

### 1.5 Popular converters

卡片：

1. Convert kg to lbs
2. Convert lbs to kg
3. Military Time Converter
4. Weight Converter

---

## 2. `/convert-kg-to-lbs`

### 2.1 页面目标

承接 `convert kg to lbs`、`kg to lbs converter`、`kilograms to pounds` 等精准搜索意图。

### 2.2 页面结构

```txt
Header
Hero
Bidirectional Weight Converter
Result Explanation
kg to lbs Formula
Common kg to lbs Conversions
kg to lbs Conversion Table
How to convert kg to lbs
FAQ
Related Tools
Footer
```

### 2.3 首屏文案

H1：

```txt
Convert kg to lbs
```

Subtitle：

```txt
Enter a weight in kilograms and get the pound value instantly, with formula and conversion table.
```

Trust note：

```txt
Instant conversion · No sign-up · Browser-based
```

### 2.4 工具要求

必须双向：

- kg 输入框；
- lbs 输入框；
- 输入 kg 自动计算 lbs；
- 输入 lbs 自动计算 kg；
- copy result 按钮；
- clear 按钮。

### 2.5 结果说明

示例：

```txt
80 kg is equal to 176.37 lbs.
To convert kilograms to pounds, multiply the kg value by 2.20462.
```

### 2.6 换算表

至少包含：

- 1 kg to 10 kg；
- 20 kg to 100 kg；
- 常见体重：50、55、60、65、70、75、80、85、90、100、120 kg。

表格标题：

```txt
Common kg to lbs conversions
```

### 2.7 FAQ

至少 5 个问题。

---

## 3. `/convert-lbs-to-kg`

### 3.1 页面目标

承接反向搜索意图，不和 `/convert-kg-to-lbs` 混在同一个 SEO 页面里。

### 3.2 页面结构

同 kg to lbs，但默认输入是 lbs。

### 3.3 首屏文案

H1：

```txt
Convert lbs to kg
```

Subtitle：

```txt
Enter a weight in pounds and get the kilogram value instantly, with formula and conversion table.
```

### 3.4 结果说明

示例：

```txt
150 lbs is equal to 68.04 kg.
To convert pounds to kilograms, divide the pound value by 2.20462.
```

---

## 4. `/military-time-converter`

### 4.1 页面目标

快速验证 SEO 策略，承接 `military time converter`。

### 4.2 页面结构

```txt
Header
Hero
Military Time Converter
Result Explanation
Military Time Chart
Common Military Time Examples
How to Read Military Time
FAQ
Related Tools
Footer
```

### 4.3 首屏文案

H1：

```txt
Military Time Converter
```

Subtitle：

```txt
Convert military time like 1430 or 23:45 to regular 12-hour time instantly.
```

Trust note：

```txt
Fast conversion · Clear examples · No sign-up
```

### 4.4 工具要求

输入 placeholder：

```txt
e.g. 1430 or 23:45
```

输出示例：

```txt
1430 is 2:30 PM in regular time.
```

常见快捷按钮：

- 0000
- 0900
- 1200
- 1430
- 1800
- 2359

### 4.5 Chart

表格至少包含：

| Military Time | Regular Time |
|---|---|
| 0000 | 12:00 AM |
| 0100 | 1:00 AM |
| 0600 | 6:00 AM |
| 0900 | 9:00 AM |
| 1200 | 12:00 PM |
| 1300 | 1:00 PM |
| 1430 | 2:30 PM |
| 1800 | 6:00 PM |
| 2100 | 9:00 PM |
| 2359 | 11:59 PM |

---

## 5. `/weight-converter`

### 5.1 页面目标

建立 weight converter 主题页，作为重量工具的上级分类。

### 5.2 页面结构

```txt
Header
Hero
Mini Weight Converter
Popular Weight Conversions
Weight Conversion Formulas
Common Weight Units
FAQ
Related Tools
Footer
```

### 5.3 首屏文案

H1：

```txt
Weight Converter
```

Subtitle：

```txt
Convert kilograms, pounds, and common weight units with simple formulas and examples.
```

### 5.4 Popular conversions

卡片：

1. kg to lbs
2. lbs to kg

后续可以扩：

- grams to ounces
- ounces to grams
- stone to pounds

MVP 只放前两个，避免死链。
