---
title: CSS 渐变
date: 2021-10-12
abbrlink: 58999
categories:
        - 概念
tags:
        - 前端
        - CSS
---

# CSS 渐变

## 写在前面

### 是什么

CSS3 渐变，可以让盒子在两个或多个指定的颜色之间显示平稳的过渡。

以前，我们必须使用图像来实现这些效果。现在，使用 CSS3，可以让我们通过代码来实现渐变效果，以达到节约带宽的效果。

### 主要内容

分别介绍三种渐变效果：线性渐变、径向渐变以及重复渐变。

### 基础示例代码

index.html

```html
<div class="container"></div>
```

main.css

```
.container {
	width: 200px;
	height: 200px;
	border-radius: 3px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/29/%E6%B8%90%E5%8F%98%E5%88%9D%E5%A7%8B%E6%95%88%E6%9E%9C.png" alt="渐变初始效果" style="zoom:50%;" />

## 线性渐变

使用 `linear-gradient()`来创建一个两种或多种颜色线性渐变盒子。

### 基础线性渐变

只需指定两种颜色。这些颜色被称为色标。至少指定两个色标，也可以指定任意数量的色标。

```css
.container {
	width: 200px;
	height: 200px;
	background: linear-gradient(rgb(169, 244, 251), rgb(9, 228, 141));
	border-radius: 3px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98.png" alt="线性渐变" style="zoom:50%;" />

### 改变渐变方向

默认情况，线性渐变的方向是从上到下， 我们可以指定一个值来改变渐变的方向。

设置向右方渐变。

```css
background: linear-gradient(to right, rgb(184, 249, 255), rgb(0, 255, 153));
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E6%B8%90%E5%8F%98%E6%96%B9%E5%90%91.png" alt="渐变方向" style="zoom:50%;" />

### 对角渐变

设置像右上角渐变。

```css
background: linear-gradient(to top right, rgb(184, 249, 255), rgb(0, 255, 153));
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E5%AF%B9%E8%A7%92%E6%B8%90%E5%8F%98.png" alt="对角渐变" style="zoom:50%;" />

### 设置渐变角度

设置朝具体的角度进行渐变，正数时顺时针，负数是逆时针。它可以让我们更精确地控制渐变的方向。

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E8%AE%BE%E7%BD%AE%E6%B8%90%E5%8F%98%E8%A7%92%E5%BA%A6.png" alt="设置渐变角度" style="zoom:50%;" />

另外，`0deg` 代表从下到上渐变，`90deg` 代表渐变方向为从左到右。`180deg` 相当于 `to bottom`，这是默认值

### 多重渐变

多个渐变色用逗号分开。

```
background: linear-gradient(rgb(184, 249, 255), rgb(22, 212, 142), rgb(241, 255, 160));
```

### 渐变终止位置

在色标后面使用一个数值单位来设置当前色标的渐变终止位置。默认情况下是浏览器自动计算的终止位置。

```css
background: linear-gradient(to right, rgb(184, 249, 255) 80%, rgb(22, 212, 142));
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E6%B8%90%E5%8F%98%E9%A2%9C%E8%89%B2%E7%BB%88%E6%AD%A2%E4%BD%8D%E7%BD%AE.png" alt="渐变颜色终止位置" style="zoom:50%;" />

也可以是绝对单位 px。

```css
background: linear-gradient(to right, rgb(184, 249, 255) 20px, rgb(22, 212, 142));
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E6%B8%90%E5%8F%98%E7%BB%88%E6%AD%A2%E4%BD%8D%E7%BD%AE2.png" alt="渐变终止位置2" style="zoom:50%;" />

### 颜色分割线

将相邻的颜色终止位置设置为相同的数值，可以在者两种颜色之间创建一条实线。

```css
background: linear-gradient(to right, rgb(184, 249, 255) 30%, rgb(22, 212, 142) 30%);
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E9%A2%9C%E8%89%B2%E5%88%86%E5%89%B2%E7%BA%BF.png" alt="颜色分割线" style="zoom:50%;" />

### 堆叠渐变

将多个渐变重叠在一起，控制每个渐变的透明度，可以完成一些意想不到的效果。

```css
background: linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E5%A0%86%E5%8F%A0%E6%B8%90%E5%8F%98.png" alt="堆叠渐变" style="zoom:50%;" />

## 径向渐变

使用 `radial-gradient()`来创建一个由一个中心点（原点）向外扩散并逐渐过渡到其他颜色的渐变盒子。

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%20.png" alt="径向渐变 " style="zoom:50%;" />

### 圆的形状

#### ellipse

默认的渐变形状为椭圆。

```css
.container {
	width: 300px;
	height: 200px;
	background: repeating-radial-gradient(rgb(28, 28, 28), rgb(175, 242, 255));
	border-radius: 3px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E6%A4%AD%E5%9C%86%E6%B8%90%E5%8F%98.png" alt="椭圆渐变" style="zoom:50%;" />

#### circle

使用 `circle` 关键字来设置渐变的形状为正圆。

```css
background: repeating-radial-gradient(circle, rgb(28, 28, 28), rgb(175, 242, 255));
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E6%AD%A3%E5%9C%86%E6%B8%90%E5%8F%98.png" alt="正圆渐变" style="zoom:50%;" />

### 设置渐变的中心

使用 `at` 关键字来设置渐变的中心，它有两个参数，这两个参数分别相对于左上角（0）进行偏移，第一个参数设置水平轴偏移，第二个参数设置垂直轴偏移。

```css
background: radial-gradient(at 20% 40%, rgb(28, 28, 28), rgb(175, 242, 255));
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E8%AE%BE%E7%BD%AE%E6%B8%90%E5%8F%98%E7%9A%84%E4%B8%AD%E5%BF%83.png" alt="设置渐变的中心" style="zoom:50%;" />

### 设置径向渐变的大小

下面以 circle 举例， 用 ellipse 差别不大，只是形状不一样。

#### circle closest-side

圆的最近边，即圆的半径为渐变中心与盒子最近边缘之间的距离。

```css
.container {
	width: 300px;
	height: 200px;
	background: radial-gradient(circle closest-side at 30% 30%, rgb(28, 28, 28), rgb(175, 242, 255));
	border-radius: 3px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/circle%20closest-side.png" alt="circle closest-side" style="zoom:50%;" />

#### circle farthest-side

圆的最远边，即圆的半径为渐变中心与盒子最圆远边缘之间的距离。

```css
background: radial-gradient(circle farthest-side at 30% 30%, rgb(28, 28, 28), rgb(175, 242, 255));
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E5%9C%86%E7%9A%84%E6%9C%80%E8%BF%9C%E8%BE%B9.png" alt="圆的最远边" style="zoom:50%;" />

#### circle closest-corner

圆的最近角，即圆的半径为渐变中心与盒子最近角之间的距离。

```
background: radial-gradient(circle closest-corner at 30% 30%, rgb(28, 28, 28), rgb(175, 242, 255));
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E5%9C%86%E7%9A%84%E6%9C%80%E8%BF%91%E8%A7%92.png" alt="圆的最近角" style="zoom:50%;" />

#### circle farthest-corner

圆的最远角，即圆的半径为渐变中心与盒子最远角之间的距离，这是默认值，

```css
background: radial-gradient(circle farthest-corner at 30% 30%, rgb(28, 28, 28), rgb(175, 242, 255));
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E5%9C%86%E7%9A%84%E6%9C%80%E5%9C%86%E8%A7%92.png" alt="圆的最圆角" style="zoom:50%;" />

### 堆叠径向渐变

```css
.container {
	width: 200px;
	height: 200px;
	background: radial-gradient(circle at 50% 0, rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0) 70.71%), radial-gradient(circle at 6.7% 75%, rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0) 70.71%), radial-gradient(circle at 93.3% 75%, rgba(0, 255, 0, 0.5), rgba(0, 255, 0, 0) 70.71%) beige;
	border-radius: 3px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E5%A0%86%E5%8F%A0%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98.png" alt="堆叠径向渐变" style="zoom:50%;" />

## 圆锥渐变

圆锥渐变类似于径向渐变，两者都有一个中心点作为色标的原点，不同的是圆锥渐变是围绕中心点旋转，而径向渐变是从原点向外辐射。

正值顺时针旋转，负值逆时针旋转

与径向渐变一样，函数的参数包括旋转角度（from at ）、圆点位置（x、y）、色标

```css
border-radius: 50%;
background: conic-gradient(from 45deg, blue, red);
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/10/45%20%E5%BA%A6%E5%9C%86.png" alt="45 度圆" style="zoom:50%;" />

圆点位于 X 轴 50%、Y 轴 30% 处，顺时针旋转 四分之一圈，也就是 90°。

```css
background: conic-gradient(from 0.25turn at 50% 30%, #f69d3c, 10deg, #3f87a6, 350deg, #ebf8e1);
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/10/%E5%9C%86%E9%94%A5%E6%B8%90%E5%8F%98.png" alt="圆锥渐变" style="zoom:50%;" />

### 画一个颜色表盘

```css
border-radius: 50%;
background: conic-gradient(hsl(360, 100%, 50%), hsl(315, 100%, 50%), hsl(270, 100%, 50%), hsl(225, 100%, 50%), hsl(180, 100%, 50%), hsl(135, 100%, 50%), hsl(90, 100%, 50%), hsl(45, 100%, 50%), hsl(0, 100%, 50%));

```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/10/%E7%94%BB%E4%B8%80%E4%B8%AA%E8%89%B2%E7%9B%98.png" alt="画一个色盘" style="zoom:50%;" />

### 画饼图

```
border-radius: 50%;
	background: conic-gradient(deeppink 0, deeppink 30%, yellowgreen 30%, yellowgreen 70%, teal 70%, teal 100%);
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/10/%E7%94%BB%E9%A5%BC%E5%9B%BE.png" alt="画饼图" style="zoom:50%;" />

## 重复渐变

重复多次渐变图案直到填满当前盒子。

使用重复线性渐变`repeating-linear-gradient` 和重复径向渐变`repeating-radial-gradient`来创建一个重复渐变的盒子。

### 多个重复线性渐变

```css
.container {
	width: 500px;
	height: 500px;
	background: repeating-linear-gradient(190deg, rgba(255, 0, 0, 0.5) 40px, rgba(255, 153, 0, 0.5) 80px, rgba(255, 255, 0, 0.5) 120px, rgba(0, 255, 0, 0.5) 160px, rgba(0, 0, 255, 0.5) 200px, rgba(75, 0, 130, 0.5) 240px, rgba(238, 130, 238, 0.5) 280px, rgba(255, 0, 0, 0.5) 300px), repeating-linear-gradient(-190deg, rgba(255, 0, 0, 0.5) 30px, rgba(255, 153, 0, 0.5) 60px, rgba(255, 255, 0, 0.5) 90px, rgba(0, 255, 0, 0.5) 120px, rgba(0, 0, 255, 0.5) 150px, rgba(75, 0, 130, 0.5) 180px, rgba(238, 130, 238, 0.5) 210px, rgba(255, 0, 0, 0.5) 230px), repeating-linear-gradient(23deg, red 50px, orange 100px, yellow 150px, green 200px, blue 250px, indigo 300px, violet 350px, red 370px);
	border-radius: 3px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E5%A4%9A%E4%B8%AA%E9%87%8D%E5%A4%8D%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98.png" alt="多个重复线性渐变" style="zoom: 33%;" />

### 重复径向渐变

```css
.container {
	width: 500px;
	height: 500px;
	background: repeating-radial-gradient(black, black 5px, white 5px, white 10px);
	border-radius: 3px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E9%87%8D%E5%A4%8D%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98.png" alt="重复径向渐变" style="zoom: 33%;" />

### 重复圆锥渐变

```css
.container {
	width: 200px;
	height: 200px;
	border-radius: 3px;
	background: repeating-conic-gradient(red 0%, yellow 15%, red 33%);
}

```

![重复圆锥渐变](https://gallery.yxzi.xyz/galleries/2022/10/10/%E9%87%8D%E5%A4%8D%E5%9C%86%E9%94%A5%E6%B8%90%E5%8F%98.png)
