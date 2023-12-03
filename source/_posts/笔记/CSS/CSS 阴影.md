---
title: CSS 阴影
date: 2021-10-27
abbrlink: 58823
categories:
        - 概念
tags:
        - 前端
        - CSS
---

# CSS 阴影

## 写在前面

在 CSS 中，有两种阴影效果，分别是文本阴影 `text-shadow` 与盒子阴影 `box-shadow` 。

### 主要内容

分别介绍两种阴影效果。

### 基础示例代码

index.html

```html
<h1>变换</h1>
```

main.css

```css
h1 {
	font-weight: normal;
	font-size: 70px;
	color: black;
}
```

## 文字阴影

`text-shadow` 为文字添加阴影。

该属性有四个值，分别为：

1. 阴影相对于文字的的水平偏移量，正值向右偏移、负值向作偏移。
2. 阴影相对于文字的的垂直偏移量，正值向下偏移、负值向上偏移。
3. 阴影的模糊半径。值越大，阴影就越大越淡。
4. 阴影颜色。可以在偏移量之前或之后指定。

```css
h1 {
	font-weight: normal;
	font-size: 70px;
	color: black;
	text-shadow: 10px 3px 10px #000;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E6%96%87%E5%AD%97%E9%98%B4%E5%BD%B1.png" alt="文字阴影" style="zoom:50%;" />

### 多个阴影

一个盒子可以设置多个阴影效果，每个阴影效果用逗号区别。

```css
h1 {
	font-weight: normal;
	font-size: 70px;
	color: black;
	text-shadow: 5px 5px 10px #000, -5px -5px 10px rgb(20, 255, 216);
}
```

上面代码用了两个阴影，效果如下图所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E5%A4%9A%E4%B8%AA%E9%98%B4%E5%BD%B1.png" alt="多个阴影" style="zoom:50%;" />

## 盒子阴影

`box-shadow`为盒子添加阴影。

推荐一个有很多漂亮的 box-shadow 示例的网站 [Beautiful CSS box-shadow examples](https://getcssscan.com/css-box-shadow-examples?ref=producthunt)，该网站底部还有关于 Button、Shape 的 CSS 示例

该属性可设置的值：

1. 阴影相对于盒子的的水平偏移量，正值向右偏移、负值向作偏移。
2. 阴影相对于盒子的的垂直偏移量，正值向下偏移、负值向上偏移。
3. 阴影的模糊半径，值越大，阴影就越大越淡。
4. 阴影的扩散半径。取正值时，阴影扩大；取负值时，阴影收缩。
5. 阴影颜色。

```

.container {
	width: 200px;
	height: 200px;
	background-color: #008c8c;
	box-shadow: 10px 10px 10px 1px rgb(77, 77, 77);
	border-radius: 3px;
}

```

上面代码如下图所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E7%9B%92%E5%AD%90%E9%98%B4%E5%BD%B1.png" alt="盒子阴影" style="zoom:50%;" />

### 盒子内部阴影

使用 `inset` 关键字使阴影落在盒子内部，这样看起来就像是内容部分被压低了。此时阴影会在边框之内、背景之上、内容之下。

```css
box-shadow: 10px 10px 10px 1px rgb(77, 77, 77) inset;
```

上面代码如下图所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E7%9B%92%E5%AD%90%E5%86%85%E9%83%A8%E9%98%B4%E5%BD%B1.png" alt="image-20220927173402554" style="zoom:50%;" />
