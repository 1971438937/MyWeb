---
title: Css 百分比
abbrlink: 42016
date: 2021-10-12 00:00:00
categories:
  - 概念
tags:
  - Css
  - 前端
  - 响应式设计
---

# 百分比

## 写在前面

### 是什么

当浏览器的宽度或者高度发生变化时，通过`%`单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。

下面我们来具体分析子元素中的百分比，到底是相对于包含块的哪些属性，这里的包含块不能简单的理解成父元素。

## width、height

对于 `width` 和 `height` 两个属性，我们都知道子元素是直接相对于父元素的宽和高的。

## padding、margin

子元素的 `padding` 和 `margin`，如果设置为百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的 `width`，而与父元素的 `height` 无关。

## top、bottom 、left、right

这几个属性一般用于定位，子元素的 `top` 和 `bottom` 如果设置为百分比，则相对于直接非 `static` 定位的父元素的高度，

子元素的 `left` 和 `right` 如果设置百分比，则相对于直接非`static` 定位父元素的宽度。

## border-radius

如果设置 `border-radius` 为百分比，则是相对于自身的宽度，而非父元素。

除了 `border-radius` 外，还有比如 `translate`、`background-size` 等都是相对于自身宽度的。

## 百分比的应用

### 实现固定比例 4 : 3 的自适应长方形

通过 `padding` 来实现，因为 `padding` 不管是垂直方向还是水平方向，百分比单位都相对于父元素的宽度，因此我们可以设置 `padding-top`为 75%（4:3）来实现：

index.html：

```html
<div class="rectangle"></div>
```

main.css：

```css
.rectangle{
  height:0;
  width:100%;
  padding-top:75%;
}
```

## 