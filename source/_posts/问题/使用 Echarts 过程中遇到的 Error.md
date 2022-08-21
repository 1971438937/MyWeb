---
title: 使用 Echarts 过程中遇到的 Error
categories:
  - 问题
tags:
  - Echarts
abbrlink: 16774
date: 2021-11-06 00:00:00
---

# 使用 Echarts 过程中遇到的 Error

## 写在前面

最近在做一个可视化大屏，自然而然的用到了 [Echarts](https://echarts.apache.org/zh/index.html) 这个库，跟着文档也做出了一个像样的大屏。

这篇文章主要总结一下我在使用 Echarts 的过程中，所遇到的一些 error。

## 场景一

今天使用 Echarts 绘制地图时，浏览器控制台出现以下错误：

```js
Uncaught DOMException: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The image argument is a canvas element with a width or height of 0.
```

### 错误原因

没有设置指定元素的宽高。

### 解决方法

只需要给需要被绘制的元素设置 CSS 属性`width`和`height`即可。
