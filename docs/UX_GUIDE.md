# UX_GUIDE — Converter MVP UI/UX 规范

## 1. 设计原则

Convert Mint 是工具站，不是营销站。

用户打开页面的第一目标是：马上完成换算。  
所以页面必须：

- 工具优先；
- 首屏可用；
- 输入清楚；
- 结果突出；
- 移动端好用；
- SEO 内容在工具下方。

---

## 2. 视觉风格

关键词：

```txt
clean, fast, practical, trustworthy
```

避免：

- 大面积渐变；
- 玻璃拟态；
- 炫酷动画；
- 复杂插画；
- 广告站风格；
- 过度 SaaS 化。

---

## 3. 颜色建议

```txt
Primary: #2563EB
Primary hover: #1D4ED8
Success: #16A34A
Warning: #D97706
Error: #DC2626
Text primary: #111827
Text secondary: #4B5563
Border: #E5E7EB
Page background: #F9FAFB
Card background: #FFFFFF
```

---

## 4. 字体

优先使用系统字体：

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

---

## 5. 布局

### 5.1 桌面端

工具页首屏建议双栏：

```txt
Header
Hero Section
Left:
- H1
- Subtitle
- Trust note
- Tool Card
Right:
- Result Card
- Formula summary
- Related quick links
```

### 5.2 移动端

移动端单列：

```txt
Header
H1
Subtitle
Trust note
Tool Card
Result
Formula
Examples
FAQ
Related Tools
Footer
```

移动端工具必须尽早出现，不要让用户先滚动很久。

---

## 6. 卡片规范

```txt
Card radius: 16px
Input radius: 10px
Button radius: 10px
Border: 1px solid #E5E7EB
Shadow: subtle
```

---

## 7. 输入框规范

- 高度至少 44px；
- label 必须可见；
- placeholder 只作为例子，不替代 label；
- 错误信息显示在输入框下方；
- 数值输入不要强制使用 HTML number 导致小数体验差，可以用 text + 自定义校验。

---

## 8. 按钮规范

主按钮：

- Copy result
- Clear
- Open full converter

不要使用模糊文案：

- Submit
- Go
- OK

---

## 9. 结果展示

结果必须足够突出。

示例：

```txt
80 kg = 176.37 lbs
```

下方补一句解释：

```txt
To convert kg to lbs, multiply the kilogram value by 2.20462.
```

错误时，不显示假结果。

---

## 10. 空状态

重量换算空状态：

```txt
Enter a weight value to see the conversion result.
```

军事时间空状态：

```txt
Enter a military time like 1430 to see the regular time.
```

---

## 11. 错误状态

错误提示必须明确。

非数字：

```txt
Please enter a valid number.
```

负数：

```txt
Weight values cannot be negative for this converter.
```

非法军事时间：

```txt
Enter a valid military time from 0000 to 2359.
```

---

## 12. SEO 内容区

SEO 内容放在工具下方。

推荐顺序：

1. Formula；
2. Common examples；
3. Conversion table；
4. How to use；
5. FAQ；
6. Related tools。

不要做长墙文本。使用：

- 短段落；
- 小标题；
- 表格；
- FAQ；
- 卡片链接。

---

## 13. Related Tools

Related tools 必须用卡片，不要只放纯链接。

卡片格式：

```txt
Convert lbs to kg
Convert pounds back to kilograms instantly.
```

---

## 14. 可访问性要求

必须满足：

- 所有 input 有 label；
- 错误提示和输入框有关联；
- 按钮有明确文本；
- 颜色不能作为唯一状态表达；
- 支持键盘操作；
- Tab 顺序合理；
- 动态结果区域尽量使用 aria-live="polite"；
- 页面有且只有一个 H1。

---

## 15. MVP 暂不做

- sticky CTA；
- 弹窗；
- 广告；
- 用户历史记录；
- 收藏功能；
- 多主题切换；
- 复杂动效；
- 上传文件；
- 后端接口。
