---
title: CSS 过渡
date: 2021-10-15
abbrlink: 58884
categories:
        - 概念
tags:
        - 前端
        - CSS
---

# CSS 过渡

## 写在前面

当给元素设置一些动画效果时，比如当鼠标悬停在某个元素上，该元素的大小、颜色会发生改变。

通常我们会使用 `hover` 选择器来实现，这时候就会面临一个问题：「动画太生硬」，不够平滑，也不够优雅。

### 是什么

使元素在一定时间内进行一系列**平滑**的变化。

### 主要内容

介绍 `transition` 的各属性以及缓动函数。

### 基础示例代码

index.html

```html
<div class="container">变换</div>
```

main.css

```css
.container {
	width: 300px;
	height: 200px;
	display: flex;
	font-size: 50px;
	color: white;
	background: #008c8c;
	border-radius: 3px;
}

.container:hover {
	width: 500px;
	height: 250px;
	color: blueviolet;
	background-color: rgb(126, 255, 212);
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/03/无过渡.gif" alt="GIF 2022-10-3 23-31-12" style="zoom:50%;" />

可以看出这个悬停的动画效果十分的生硬，我们加上过渡试试：

```css
.container {
	width: 300px;
	height: 200px;
	display: flex;
	font-size: 50px;
	color: white;
	background: #008c8c;
	transition: all 1s linear 0.1s;
	border-radius: 3px;
}
```

上面代码如下图所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/03/CSS%20%E8%BF%87%E6%B8%A1.gif" alt="CSS 过渡" style="zoom:50%;" />

可以看出加上过渡之后，悬停效果的动画就很优美了。

## transition 属性

`transition` 用于定义元素的过渡效果，它是一个简写属性，简化了下列属性：

- `transition-property`，过渡属性名。
- `transition-duration`，过渡时间。
- `transition-timing-function`，过渡执行时的时序函数。
- `transition-delay`，过渡延迟时间

当给元素设置好过渡后，就可以通过一些行为（点击、悬浮等）来触发该元素的过渡效果。

## transition 各属性详解

### transition-property

指定过渡的属性名称，多个值用逗号隔开，用 `all` 来表示对任何属性都应用过渡。

下列属性都可以应用到过渡：

1. 颜色属性
2. 取值为数值的属性
3. 转换属性
4. 渐变属性
5. 阴影属性

### transition-duration

以秒或毫秒为单位指定过渡动画持续的时间

可以指定多个时长，每个时长会被分别应用到由 `transition-property` 指定的对应属性上。如果指定的时长个数小于属性个数，那么时长列表会重复。如果时长列表更长，那么该列表会被裁减。

### transition-timing-function

指定过渡动画的时序函数。

通过这个函数会建立一条加速度曲线，因此在整个过渡的变化过程中，这个变化速度是可以不断改变的。

可选值有：

- `linear` ，全程匀速进行过渡。相当于`cubic-bezier(0,0,1,1)`。
- `ease`，慢速开始，中间加快，慢速结束进行过渡，相当于 `cubic-bezier(0.25,0.1,0.25,1)`。
- `ease-in` ，慢速开始，逐渐加快的进行过渡，相当于 `cubic-bezier(0.42,0,1,1)`。
- `ease-out` ，快速开始，逐渐变慢的过渡效果，相当于 `cubic-bezier(0,0,0.58,1)`。
- `ease-in-out` ，慢速开始，中间匀速，慢速结束的过渡效果，相当于 `cubic-bezier(0.42,0,0.58,1)`。
- `cubic-bezier()`缓动函数，详见 [缓动函数](#缓动函数)。

### transition-delay

指定了在过渡效果开始之前需要等待的时间。

## 缓动函数

`cubic-bezier()` 是**三次方贝塞尔曲线函数**，用于控制过渡的变化速度曲线。所有三次方贝塞尔曲线都是由起点、终点和两个控制点组成。起点和终点的坐标是固定的，分别是`(0,0)`和`(1,1)`，因此，`cubic-bezier()` 支持的参数值只有 4 个，代表了两个控制点的坐标，语法如下：

```css
cubic-bezier(x1, y1, x2, y2)
```

### 三次方贝塞尔曲线函数定制地址

https://cubic-bezier.com/#.23,.66,.76,.52

### 小球落地又弹起 demo 地址

http://codepen.io/aSuncat/pen/gwLBWz
