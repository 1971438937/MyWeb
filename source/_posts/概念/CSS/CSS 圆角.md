---
title: CSS 圆角
date: 2021-10-29
abbrlink: 58878
categories:
        - 概念
tags:
        - 前端
        - CSS
---

# CSS 圆角

## 写在前面

### 是什么

`birder-radius`是一个 CSS3 新增属性，可以为盒子添加圆角效果，也是一个简写属性。

### 主要内容

`birder-radius` 属性详解。

用 `birder-radius`  画一个圆。

### 基础示例代码

index.html

```html
<div class="container"></div>
```

main.css

```css
.container {
	margin: 200px auto;
	width: 200px;
	height: 200px;
	background-color: #008c8c;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/29/%E5%9C%86%E8%A7%92%E5%88%9D%E5%A7%8B%E5%AE%9E%E4%BE%8B%E6%95%88%E6%9E%9C.png" alt="圆角初始实例效果" style="zoom:50%;" />

## border-radius 属性详解

该属性完整写法有 8 个值，顺序为：左上角水平半径、右上角水平半径、右下角水平半径、左下角水平半径 / 左上角直半径、右上角垂直半径、右下角直半径、左下角垂直半径。

```css
.container {
	margin: 200px auto;
	width: 200px;
	height: 200px;
	background-color: #008c8c;
	border-radius: 5% 10% 15% 20%/25% 30% 35% 40%;
}
```

`border-radius` 的 `%`值时，相当于盒子本身的宽度和高度的百分比。

上面代码效果如下所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/23/border%20radius%20%E8%A7%A3%E6%9E%90.png" alt="border radius 解析" style="zoom:50%;" />

当只有 4 个值时，分别是左上角半径，右上角半径、右下角半径、左下角半径

```css
border-radius: 5% 10% 15% 20%;
```

上面代码效果如下所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/24/border%20radius%20%E8%A7%A3%E6%9E%902.png" alt="border radius 解析2" style="zoom:50%;" />

当只有 3 个值时，分别是左上角半径、右上角/左下角半径、右下角半径。

```css
border-radius: 10% 20% 30%;
```

上面代码效果如下所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/24/border%20radius%20%E8%A7%A3%E6%9E%903.png" alt="border radius 解析3" style="zoom:50%;" />

当只有两个值时，分别是左上角/右下角半径、右上角/左下角半径。

```css
border-radius: 10% 30%;
```

上面代码效果如下所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/24/border%20radius%20%E8%A7%A3%E6%9E%904.png" alt="border radius 解析4" style="zoom:50%;" />

当只有一个值时（常用），这个值就是四个方向的半径。

```css
border-radius: 10%;
```

上面代码效果如下所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/24/border%20radius%20%E8%A7%A3%E6%9E%905.png" alt="border radius 解析5" style="zoom:50%;" />

## 画圆

### 画正圆

使用`birder-radius`画正圆时，需要保证其**盒模型**的长宽相等，然后 `border-radius` 的值为长宽的一半，也就是 `50%`。

某些情况下也可以用 100% 来实现相同的效果，但是不建议用 100%，这是因为 W3C 对于「重合曲线」有那么一条规范：如果两个相邻角的半径和超过了对应的盒子的边的长度，那么浏览器要重新计算保证它们不会重合。所以最后形成的效果和 `50%` 是一样的

```css
.container {
	margin: 200px auto;
	width: 200px;
	height: 200px;
	background-color: #008c8c;
	border-radius: 50%;
}
```

上面代码效果如下所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/24/birder-radius%20%E7%94%BB%E5%9C%86.png" alt="birder-radius 画圆" style="zoom:50%;" />

### 画椭圆

如果将其左右 `padding` 和上下 `padding` 设置成不相等的值，就可以得到一个椭圆：

```css
.container {
	margin: 200px auto;
	width: 200px;
	padding: 10px 40px;
	height: 200px;
	background-color: #008c8c;
	border-radius: 50%;
}
```

因为 200 + 10 + 10 不等于 200 + 40 + 40，所以造成了一个不规则的圆：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/24/birder-radius%20%E7%94%BB%E5%9C%862.png" alt="birder-radius 画圆2" style="zoom:50%;" />

### 画半实心圆和半空心圆

半空心圆是盒子的 content，半实心圆是盒子的 border。

```css
.container {
	margin: 200px auto;
	width: 100px;
	height: 200px;
	border: 1px solid #008c8c;
	border-left: 100px solid #008c8c;
	border-radius: 50%;
}
```

上面代码效果如下所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E5%8D%8A%E5%AE%9E%E5%BF%83%E5%9C%86%E5%92%8C%E5%8D%8A%E7%A9%BA%E5%BF%83%E5%9C%86.png" alt="半实心圆和半空心圆" style="zoom:50%;" />

## 不和谐的圆角

当盒子的长和宽相差过大，且 `border-radius` 的值较小十，也会导致不和谐的圆角弧度：

```css
.container {
	margin: 200px auto;
	width: 200px;
	padding: 10px 100px;
	height: 200px;
	background-color: #008c8c;
	border-radius: 10%;
}
```

上面代码效果如下所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/24/birder-radius%20%E7%94%BB%E5%9C%863.png" alt="birder-radius 画圆3" style="zoom:50%;" />
