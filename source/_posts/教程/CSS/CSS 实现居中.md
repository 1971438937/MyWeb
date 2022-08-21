---
title: CSS 实现居中
categories:
  - 教程
tags:
  - CSS
  - 前端
abbrlink: 58870
date: 2021-10-17 00:00:00
---

# CSS 实现居中

## 写在前面

CSS 居中的方法有很多，在这里作一个居中总结。

## 垂直水平居中一

绝对定位，兼容性不错的主流绝对定位居中方法，给需要居中的元素应用下列样式，**将其居于包含块的正中间**。

```css
width: 600px;
height: 400px;
position: absolute;
left: 50%;
top: 50%;
margin-top: -200px; /* 高度的一半 */
margin-left: -300px; /* 宽度的一半 */
```

## 垂直水平居中二

`transform` 属性，`transform` 中 `translate` 偏移的百分比值是相对于自身大小的，可以这样实现 CSS 绝对定位居中，给需要居中的元素应用下列样式，**将其居于包含块的正中间**，注意：这个方法有一些未知的 Bug。

```css
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
```

## 垂直水平居中三

flex，给需要居中的 `item` 的 `container` 应用下列样式，**将其居于父元素的正中间**。

当 item 为水平排列时。

```css
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
```

当 item 为水平排列时。

```css
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
```

## 垂直居中

flex，给需要垂直据居中的 `item` 的 `container` 应用下列样式，将实现 `item` 相对于 `container` 的垂直居中。

其实就是使用`align-items`：它定义 `item` 在 `container` 的交叉轴上如何对齐。

```css
display: flex;
align-items: center;
```
