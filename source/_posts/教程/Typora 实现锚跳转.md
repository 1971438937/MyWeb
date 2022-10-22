---
title: Typora 实现锚跳转
date: 2022-09-25 00:00:00
abbrlink: 34358
categories:
  - 教程
tags:
  - Typora
---

# Typora 实现锚跳转

## 写在前面

熟悉 HTML 的朋友应该知道，HTML 的 `<a>` 标签可以实现锚跳转功能，而在 Typora 中，我们也可以使用类似的功能，这里介绍两种方法。

### 主要内容

介绍在 Typora 中实现锚跳转的两种方式。

## 使用 Markdown

将以下内容复制到 Typora，保证正文内容大于屏幕高度，然后按住 Ctrl 并点击`[点我跳转到三级标题](#三级标题)`才能实现跳转到目标定位点，不按 Ctrl 系统会认为你是要移动焦点。

1 到 6 级标题都支持。

```markdown
[点我跳转到三级标题](#三级标题)


正文内容需要大于屏幕高度...


### 三级标题
```

## 使用 HTML

用法和上面一样，只是将 Markdown 语法换成了 HTML 语法。

目标点支持 `name` 和 `id`。

```html
<a href="#anchor">我想笑</a>

<span name = "233anchor">233</span>

<span id = "233anchor">233</span>
```