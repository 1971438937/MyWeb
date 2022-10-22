---
title: CSS 变换
date: 2021-10-25
abbrlink: 58884
categories:
        - 概念
tags:
        - 前端
        - CSS
---

# CSS 变换

## 写在前面

CSS 中，使用`transforms` 和 `transform-origin` 可以让元素在二维或三维空间中进行旋转、倾斜、缩放以及位移等变换。

### 主要内容

分别介绍 2D 变换和 3D 变换以及变换的原点属性 `transform-origin`。

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
	color: white;
	background: #008c8c;
	border-radius: 3px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/01/%E5%8F%98%E6%8D%A2%E6%97%8B%E8%BD%AC.png" alt="变换旋转" style="zoom:50%;" />

## transforms 2D

`transforms` 设置了一系列的变换函数。

2D 变换指的是在 X 和 Y 轴方向上的变换。

### 旋转

`rotate()` 用于旋转元素。正数时为顺时针旋转，负数时为逆时针旋转。

该函数只支持一个值，即旋转的角度。

```css
transform: rotate(20deg);
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/01/%E5%8F%98%E6%8D%A2%E6%97%8B%E8%BD%AC%202D.png" alt="变换旋转 2D" style="zoom:50%;" />

### 倾斜

`skew()`用于倾斜元素。

当只有一个值时，只表示 X 轴方向上的倾斜，当由两个值时，则分别表示在 X 轴和 Y 轴方向上的倾斜。

```css
transform: skew(10deg, 10deg);
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/30/%E5%80%BE%E6%96%9C.png" alt="image-20220930002954846" style="zoom:50%;" />

### 缩放

`scale()` 可以通过向量形式定义的值对元素进行缩放。默认值 为 1

当只有一个值时，则 X 轴等于 Y 轴方向上的缩放。两个值时，则分别表示在 X 轴和 Y 轴方向上的缩放。

```css
transform: scale(1.5, 0.8);
```

等同于：

```css
transform: scaleX(1.5) scaleY(0.8);
```

其实就是相当于将元素的 `width` 和 `height`分别放大 1.5 倍和缩小 0.8 倍：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/30/%E7%BC%A9%E6%94%BE.png" alt="缩放" style="zoom:50%;" />

### 位移

`translate()`用于在 X 轴或 Y 轴方向对元素进行位移。值为二维向量构成。

当只有单个值时，表示只设置 X 轴方向的偏移量（正数值向右，负数值向左）；而 Y 轴方向的偏移量（正数值向下，负数值向下）默认为 0。当有两个值时，表示分别设置 X 和 Y 轴方向的偏移量。

当偏移量的值为百分比时， X 轴方向的值相对于当前元素的 `width` ；而 Y 轴方向的值相对于当前元素的`height`。

没有设置位移时：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/30/%E6%B2%A1%E6%9C%89%E4%BD%8D%E7%A7%BB.png" alt="没有位移" style="zoom:50%;" />

设置位置后：

```css
transform: translate(20%, -30%);
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/30/%E4%BD%8D%E7%A7%BB.png" alt="位移" style="zoom:50%;" />

### 矩阵

`matrix() `指定了一个由 6 个值所组成的一个 3 \* 3 的 2D 变换矩阵。

## transforms 3D

3D 变换指的是在 X、Y、Z 轴方向上的变换，只有旋转、缩放以及位移三种变换。

如果想要查看某个元素在 Z 轴方向上的变化，那么需要给其父元素添加 `perspective` 属性。

![3D 变换](https://gallery.yxzi.xyz/galleries/2022/10/01/3D%20%E5%8F%98%E6%8D%A2.png)

### 位移

`translateZ()`定义元素在 Z 轴上的位移量。正值向前位移（距离我们更近），负值向后位移（距离我们更远）。也可以用 `translate3d()` 分别定义 x、y、z 轴方向上的偏移。

### 缩放

`scaleZ()`定义元素在 Z 轴上的缩放量，正值变大，负值缩小。也可以用`scale3d()` 分别定义 x、y、z 轴方向上的缩放。

看下图，一个倾斜朝向我们的的长方体：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/01/transforms%203D%E7%BC%A9%E6%94%BE1.png" alt="transforms 3D缩放1" style="zoom:50%;" />

对其应用下面代码：

```css
transform: scale3d(0.5, 1, 1.7);
```

从上面代码中我们就可以看出来，这个正方体的宽度将会变窄，高度保持不变，长度将变得更长，如下图：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/01/transforms%203D%E7%BC%A9%E6%94%BE2.png" alt="transforms 3D缩放2" style="zoom:50%;" />

### 旋转

`rotateZ()`定义元素在 Z 轴上的旋转。正值顺时针旋转，负值逆时针旋转。也可以用 `rotate3d()` 分别定义 x、y、z 轴方向上的旋转。

看下图，一个正面朝向我们的正方体：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/01/%E5%8F%98%E6%8D%A2%E6%97%8B%E8%BD%AC%203D%20.png" alt="变换旋转 3D " style="zoom:50%;" />

对其应用下面代码，让其绕 Y 轴旋转 45：

```css
transform: rotate3d(0, 1, 0, 45deg);
```

上面代码如下图所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/01/%E6%97%8B%E8%BD%AC%E5%8F%98%E6%8D%A2%203D.png" alt="旋转变换 3D" style="zoom:50%;" />

## transform-origin

`transform-origin` 指定元素在进行 2D 和 3D 变换时的原点。默认值为元素的正中心（X、Y、Z 轴交界处）。

该属性有三个值，分别表示原点在 X、Y、Z 轴上的偏移量。

<img src="https://gallery.yxzi.xyz/galleries/2022/10/01/transform-origin.png" alt="transform-origin" style="zoom:50%;" />

原点默认值为中心。

```css
transform-origin: center;
```

上面代码如下图所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/01/center.png" alt="center" style="zoom:50%;" />

设置原点在左上角。

```css
transform-origin: top left;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/01/%E5%8E%9F%E7%82%B9%E5%9C%A8%E5%B7%A6%E4%B8%8A%E8%A7%92.png" alt="原点在左上角" style="zoom:50%;" />

设置原点在右下角，Z 轴向前方偏移 `60px`。

<img src="https://gallery.yxzi.xyz/galleries/2022/10/01/bottom%20right%2060px.png" alt="bottom right 60px" style="zoom:50%;" />
