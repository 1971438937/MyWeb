---
title: CSS 透视
date: 2021-10-07
abbrlink: 58822
categories:
        - 概念
tags:
        - 前端
        - CSS
---

# CSS 透视

## 写在前面

在使用 `transform` 3D 变换时，因为电脑屏幕是一个 2D 平面，因此我们并不能感知到屏幕中元素在 Z 轴方向上的变化，只能通过在脑海里想象，但是我们可以用过透视呈现出「**近大远小**」的效果。

### 是什么

`perspective`指定了观察者与 z = N 平面的距离，使具有三维变换的元素产生透视效果。

当为元素定义 `perspective` 属性后，其子元素会获得透视效果，而不是元素本身，这个时候，我们在对子元素加上 3D 变化的效果，就能看到明显的变化。

### 主要内容

理解`perspective`属性

### 基础示例代码

index.html

```html
<div class="container">
	<div class="item"></div>
</div>
```

main.css

```css
.container {
	width: 300px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #008c8c;
	border-radius: 3px;
}

.item {
	width: 100px;
	height: 100px;
	color: white;
	font-size: 50px;
	background: #282828;
	border-radius: 3px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/30/%E9%80%8F%E8%A7%86%E5%9B%BE%E5%88%9D%E5%A7%8B%E4%BB%A3%E7%A0%81%E6%95%88%E6%9E%9C.png" alt="透视图初始代码效果" style="zoom:50%;" />

## perspective

多说无益，直接上代码，给子元素添加 3D 变换代码，让其沿 Y 轴向前（我们与屏幕的方向）平移 300px，这会使元素距离我们更近，所以元素应该在我们的视觉中变大。

```css
.item {
	width: 100px;
	height: 100px;
	color: white;
	font-size: 50px;
	background: #282828;
	border-radius: 3px;
	transform: translateZ(300px);
}
```

但实际上并没有任何变化，依旧如此：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/30/%E9%80%8F%E8%A7%86%E5%9B%BE%E5%88%9D%E5%A7%8B%E4%BB%A3%E7%A0%81%E6%95%88%E6%9E%9C.png" alt="透视图初始代码效果" style="zoom:50%;" />

我们再给父元素添加上 `perspective` 属性看看。

`perspective: 900px` 可以让我们在距离屏幕 `900px` 的地方观察其子元素。

```css
.container {
	width: 300px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #008c8c;
	border-radius: 3px;
	perspective: 900px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/30/%E5%8A%A0%E4%B8%8A%E9%80%8F%E8%A7%86%E5%9B%BE%E5%B1%9E%E6%80%A7.png" alt="加上透视图属性" style="zoom:50%;" />

可以明显看到，子元素变大了，但其实子元素本身并没有变大，而是它距离我们更近了，也就是开头所提到的「近大远小」的道理。

而「更近」则是通过 `translateZ(300px)` 让子元素沿 Y 轴朝前平移了 `300px`。

我们也可以让子元素距离我们更远一些：

```css
.item {
	width: 100px;
	height: 100px;
	color: white;
	font-size: 50px;
	background: #282828;
	border-radius: 3px;
	transform: translateZ(-300px);
}
```

可以看到子元素变小了，同时也表示距离我们更远了：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/30/%E9%80%8F%E8%A7%86%E5%9B%BE2.png" alt="透视图2" style="zoom:50%;" />

> 举一个例子，有一辆汽车在小明的正前方 9 米处，小刚驾驶汽车前进 3 米，在小明的视角中汽车就会变大（车子本身没变大）；如果小刚驾驶汽车后退 3 米，汽车在小明的视角中就会缩小。

汽车 = `item`。

小刚驾驶汽车前进和后退 = `translateZ()` 控制 `item` 在 Z 轴方向上前进或后退。

小明站在距离汽车 9 米处的地方观察汽车 = 我们人在距离 `item 900px` 处的地方观察 `item`。
