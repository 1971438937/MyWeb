---
title: CSS 居中总结
abbrlink: 58870
date: 2021-10-17 00:00:00
categories:
        - 教程
tags:
        - CSS
        - 前端
---

# CSS 居中总结

## 写在前面

CSS 居中的方法有很多，这里总结一下 CSS 中的几种优雅的居中方式。

### 主要内容

介绍使用 absolute、transform、flex 实现垂直、水平、垂直水平居中的方式。

### 基础示例代码

index.html

```html
<div class="container">
	<div>item 1</div>
</div>
```

mian.css

```css
.container {
	width: 300px;
	height: 200px;
	background: #008c8c;
	border-radius: 3px;
}

.container div {
	width: 50px;
	height: 50px;
	background-color: rgb(0, 0, 0);
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/29/%E5%B1%85%E4%B8%AD%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81.png" alt="image-20220929154644342" style="zoom:50%;" />

## absolute 居中

此方式只适合**单个子元素**相对于包含块居中的场景，多个子元素无法居中。

### 垂直水平居中

子元素的定宽高，且需要注意子元素的 `margin-top` 和 `margin-left` 必须分别是其 `height` 和 `width` 的二分之一。

```css
.container {
	position: relative;
	width: 300px;
	height: 200px;
	background: #008c8c;
	border-radius: 3px;
}

.container div {
	width: 50px;
	height: 50px;
	background-color: rgb(0, 0, 0);
	position: absolute;
	left: 50%;
	top: 50%;
	margin-top: -25px;
	margin-left: -25px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/29/%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.png" alt="绝对定位水平垂直居中" style="zoom:50%;" />

### 垂直居中

只需去掉`margin-left` 和 `top` 属性即可。

```css
.container div {
	width: 50px;
	height: 50px;
	background-color: rgb(0, 0, 0);
	position: absolute;
	top: 50%;
	margin-top: -25px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/29/%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.png" alt="绝对定位垂直居中" style="zoom:50%;" />

### 水平居中

与垂直居中同理，去掉`margin-top` 和 `left` 属性即可。

```css
.container div {
	width: 50px;
	height: 50px;
	background-color: rgb(0, 0, 0);
	position: absolute;
	left: 50%;
	margin-left: -25px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/29/%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD.png" alt="绝对定位水平居中" style="zoom:50%;" />

## transform 居中

`transform` 属性的 `translate()` 偏移的百分比值是相对于自身大小的，因此用它可以配合绝对定位实现居中。

这种方式只适合**单个子元素**相对于包含块居中的场景，多个子元素无法居中。

### 垂直水平居中

```css
.container {
	position: relative;
	width: 300px;
	height: 200px;
	background: #008c8c;
	border-radius: 3px;
}

.container div {
	width: 50px;
	height: 50px;
	background-color: rgb(0, 0, 0);
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
```

### 垂直居中

将 `left `和 `translate()` 的第一个值变为 0 即可。。

```css
.container div {
	width: 50px;
	height: 50px;
	background-color: rgb(0, 0, 0);
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
}
```

### 水平居中

将 `top` 和 `translate()` 的第二个值去掉。

```css
.container div {
	width: 50px;
	height: 50px;
	background-color: rgb(0, 0, 0);
	position: absolute;
	left: 50%;
	transform: translate(-50%);
}
```

## flex 居中

一种很优雅的居中方式

这种方式适合**单个或多个子元素**相对于包含块居中的场景。

### 垂直水平居中

给要居中的元素的父元素设置两个属性：

- `justify-content: center`：水平居中。
- `align-items: center`垂直居中

同时使用则为垂直水平居中。

```css
.container {
	position: relative;
	width: 300px;
	height: 200px;
	background: #008c8c;
	border-radius: 3px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.container div {
	width: 50px;
	height: 50px;
	margin: 2px;
	background-color: rgb(0, 0, 0);
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/29/flex%20%E5%9E%82%E7%9B%B4%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD.png" alt="flex 垂直水平居中" style="zoom:50%;" />

当 `flex-direction` 为 `column` 时也同理：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/29/flex column 垂直水平居中.png" alt="flex column 垂直水平居中" style="zoom:50%;" />
