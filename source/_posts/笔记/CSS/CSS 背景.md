---
title: CSS 背景
date: 2021-09-15
abbrlink: 58873
categories:
        - 概念
tags:
        - 前端
        - CSS
---

# CSS 背景

## 写在前面

### 是什么

用于设置元素的背景。

### 主要内容

详细介绍 `background`相关的属性。

### 基础实例代码

index.html

```html
<div class="container"></div>
```

main.css

```css
.container {
	width: 500px;
	height: 500px;
	border-radius: 3px;
	background-color: #008c8c;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/08/background%20%E5%88%9D%E5%A7%8B%E6%95%88%E6%9E%9C.png" alt="background 初始效果" style="zoom:50%;" />

## background 属性

`background` 用于定义元素的背景，是一个简写属性，简化了下列属性：

- `background-color`，定义背景颜色。
- `background-clip`，设置元素背景的延伸范围。
- `background-image`，设置元素的背景为图像。
- `background-origin`，指定背景图像的原点相对于哪里（内容盒左上角、内边距盒左上角、边框盒左上角）定位。
- `background-position`，控制背景图像在元素中位置。
- `background-repeat`，定义背景图像的重复方式。
- `background-size`，设置背景图像的大小。
- `background-attachment`，当我们滑动网页时，控制背景图像是在视口内固定，还是随着包含它元素滚动。

## background 属性详解

`background`的多个属性值可以按任意顺序放置。

### background-color

设置元素背景色，不多赘述。

```css
background-color: #008c8c;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/08/background%20%E5%88%9D%E5%A7%8B%E6%95%88%E6%9E%9C.png" alt="background 初始效果" style="zoom:50%;" />

### background-image

设置元素的背景为图像。

示例图地址

[头像](https://gallery.yxzi.xyz/galleries/2022/07/02/渐隐.png)

<img src="https://gallery.yxzi.xyz/galleries/2022/07/02/渐隐.png" alt="示例图1" style="zoom:25%;" />

[雪糕](https://gallery.yxzi.xyz/galleries/2022/10/09/雪糕.png)

![示例图2](https://gallery.yxzi.xyz/galleries/2022/10/09/雪糕.png)

#### 图像超出元素部分会被裁剪

当图像的原始大小可以铺满元素并超出元素时，图像超出的部分会被裁剪：

```css
background-image: url('https://gallery.yxzi.xyz/galleries/2022/07/02/渐隐.png');
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E5%9B%BE%E5%83%8F%E8%B6%85%E5%87%BA%E5%85%83%E7%B4%A0%E5%A4%A7%E5%B0%8F.png" alt="图像超出元素大小" style="zoom:50%;" />

#### 重复图像铺满元素

默认情况下，当图像的原始大小不可以铺满元素时，图像会一直重复绘制，直到铺满整个元素为止，相当于 `background-repeat: repeat`。

```css
background-image: url('https://gallery.yxzi.xyz/galleries/2022/10/09/雪糕.png');
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E5%9B%BE%E5%83%8F%E6%97%A0%E6%B3%95%E8%B6%85%E5%87%BA%E5%85%83%E7%B4%A0%E5%A4%A7%E5%B0%8F.png" alt="图像无法超出元素大小" style="zoom:50%;" />

#### 延 Z 轴堆叠

在绘制时，图像在`z`轴上进行堆叠。最先指定的图像会在之后指定的图像上面绘制。因此，最先指定的图像永远在最上方。

```css
background-image: url('https://gallery.yxzi.xyz/galleries/2022/10/09/雪糕.png'), url('https://gallery.yxzi.xyz/galleries/2022/07/02/渐隐.png');
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E5%85%88%E6%8C%87%E5%AE%9A%E7%9A%84%E5%9B%BE%E5%83%8F%E5%9C%A8%E4%B8%8A%E6%96%B9.png" alt="先指定的图像在上方" style="zoom:50%;" />

元素的 `border` 会绘制在所有图像之上。

```css
border: 20px solid #000;
background-image: url('https://gallery.yxzi.xyz/galleries/2022/10/09/雪糕.png'), url('https://gallery.yxzi.xyz/galleries/2022/07/02/渐隐.png');
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/border%20%E7%BB%98%E5%88%B6%E5%9C%A8%E5%9B%BE%E5%83%8F%E4%B8%8A.png" alt="border 绘制在图像上" style="zoom:50%;" />

### background-clip

设置元素的背景（图像或颜色）延伸范围（边框盒、内边距盒、内容盒）。

`border-box`，背景延伸到边框盒，默认值。

```css
background-clip: border-box;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E8%BE%B9%E6%A1%86%E7%9B%92.png" alt="边框盒" style="zoom:50%;" />

如果背景是图像，需要设置 `background-origin` 为 `border-box` 才能让图像的左上角部分延伸到边框盒。

`padding-box`，延伸到内边距盒。

```css
background-clip: padding-box;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E5%86%85%E8%BE%B9%E8%B7%9D%E7%9B%92.png" alt="内边距盒" style="zoom:50%;" />

延伸到内容盒。如果元素没有设置 `padding`，则效果与 `padding-box` 一样。

```css
padding: 20px;
background-clip: content-box;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E5%86%85%E5%AE%B9%E7%9B%92.png" alt="内容盒" style="zoom:50%;" />

图像作为元素的文字的前景色，部分浏览器会不兼容。

index.html

```html
<div class="container">背景</div>
```

main.css

```css
.container {
	width: 300px;
	height: 300px;
	font-size: 50px;
	color: transparent;
	border-radius: 3px;
	background-color: #008c8c;
	border: 20px dashed #000;
	background-clip: text;
	/* 兼容 chrome、safari */
	-webkit-background-clip: text;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E6%96%87%E5%AD%97%E5%89%8D%E6%99%AF%E8%89%B2.png" alt="文字前景色" style="zoom:50%;" />

### background-origin

指定背景图像的原点相对于哪里（内容盒左上角、内边距盒左上角、边框盒左上角）定位。

从内边距左上角开始绘制，默认值。

```css
background-size: 100%;
background-image: url('https://gallery.yxzi.xyz/galleries/2022/10/09/仙气.jpeg');
background-origin: padding-box;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E5%86%85%E8%BE%B9%E8%B7%9D%E5%BC%80%E5%A7%8B.png" alt="内边距开始" style="zoom:50%;" />

因为 `background-clip: border-box` 的原因， 边框区域会重复图像，我们可以设置其为 `padding-box`。

```css
background-size: 100%;
background-clip: padding-box;
background-image: url('https://gallery.yxzi.xyz/galleries/2022/10/09/仙气.jpeg');
background-origin: padding-box;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E5%9B%BE%E5%83%8F%E5%BB%B6%E4%BC%B8%E5%88%B0%E5%86%85%E8%BE%B9%E8%B7%9D.png" alt="图像延伸到内边距" style="zoom:50%;" />

从边框左上角开始绘制。

```
background-size: 100%;
background-image: url('https://gallery.yxzi.xyz/galleries/2022/10/09/仙气.jpeg');
background-origin: border-box;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E4%BB%8E%E8%BE%B9%E6%A1%86%E5%B7%A6%E4%B8%8A%E8%A7%92%E5%BC%80%E5%A7%8B.png" alt="从边框左上角开始" style="zoom:50%;" />

从内容盒左上角开始绘制。

```css
background-size: 100%;
padding: 20px;
background-image: url('https://gallery.yxzi.xyz/galleries/2022/10/09/仙气.jpeg');
background-origin: content-box;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E4%BB%8E%E5%86%85%E5%AE%B9%E7%9B%92%E5%B7%A6%E4%B8%8A%E8%A7%92.png" alt="从内容盒左上角" style="zoom:50%;" />

因为 `background-clip: border-box` 的原因， 边框区域会重复图像，我们可以设置其为 `content-box`。

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E4%BB%8E%E5%86%85%E5%AE%B9%E7%9B%92%E5%BC%80%E5%A7%8B%E7%BB%98%E5%88%B62.png" alt="从内容盒开始绘制2" style="zoom:50%;" />

### background-position

控制背景图像在元素中位置。默认还元素最右上角的位置，`left top` 或 `0% 0%`。

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/background-position.png" alt="image-20221009180535105" style="zoom:50%;" />

单个值可以为左`left`、右 `right`、底部`bottom`、顶部 `top`以及正中心 `center` 。

紧靠元素顶边居中。

```css
background-repeat: no-repeat;
background-image: url('https://gallery.yxzi.xyz/galleries/2022/10/09/仙气.jpeg');
background-position: center;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E9%A1%B6%E9%83%A8%E5%B1%85%E4%B8%AD.png" alt="顶部居中" style="zoom:50%;" />

`center`，居于元素正中间。

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E5%9B%BE%E5%83%8F%E7%9A%84%E4%BA%94%E4%B8%AA%E6%96%B9%E5%90%91.png" alt="图像的五个方向" style="zoom:50%;" />

单个值为百分比或 `px `时，这个值是相对于左边界的 `x` 轴，y 轴默认被设置成 `50%`。

两个值的时候， 一个定义 x 坐标，另一个定义 y 坐标。

三个值的时候，两个值是关键字值，第三个是前面值的偏移量。

四个值的时候， 第一个和第三个值是定义 `X` 和 `Y` 轴上的关键字值。第二个和第四个值是前面 `X` 轴和 Y 轴关键字值的坐标偏移量。

### background-repeat

定义背景图像的重复方式。图像可以沿着 `x` 轴， `y` 轴重复，或者根本不重复。

1. 默认值为重复，最后一张图像如果大小超出元素，则会被裁剪。

```css
.container {
	width: 300px;
	height: 300px;
	font-size: 50px;
	border-radius: 3px;
	border: 2px solid #000;
	background-size: 30%;
	background-repeat: repeat;
	background-image: url('https://gallery.yxzi.xyz/galleries/2022/10/09/仙气.jpeg');
}

```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E8%83%8C%E6%99%AF%E9%87%8D%E5%A4%8D.png" alt="背景重复" style="zoom:50%;" />

2. 不重复，图像的位置可以由 `background-position` 来控制。


```css
background-repeat: no-repeat;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E9%A1%B6%E9%83%A8%E5%B1%85%E4%B8%AD.png" alt="顶部居中" style="zoom:50%;" />

3. 沿 x 轴重复，最后一张图像如果超出元素，则会被裁剪。

```css
background-repeat: repeat-x;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E6%B2%BF%E7%9D%80%20x%20%E8%BD%B4%E9%87%8D%E5%A4%8D.png" alt="沿着 x 轴重复" style="zoom:50%;" />

4. `space`，背景图像以**相同的间距**平铺且填充满整个容器或某个方向。。

```css
background-repeat: space;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E4%B8%8D%E8%A3%81%E5%89%AA%20space.png" alt="不裁剪 space" style="zoom:50%;" />

5. `round`，背景图像自动缩放直到适应且填充满整个容器或某个方向，无间距。

```css
background-repeat: round;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/round.png" alt="round" style="zoom:50%;" />

### background-size

设置背景图片大小。

只有一个值时，这个数值将作为宽度值大小，高度值将被设定为  `auto`。

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E8%83%8C%E6%99%AF%E5%A4%A7%E5%B0%8F%E5%8D%95%E4%B8%AA%E5%80%BC.png" alt="背景大小单个值" style="zoom:50%;" />

如果有两个值时，第一个将作为宽度值大小，第二个作为高度值大小。

设置固定的宽高，超出元素的部分会被裁剪。

```css
.container {
	width: 300px;
	height: 300px;
	font-size: 50px;
	border-radius: 3px;
	border: 2px solid #000;
	background-size: 80% 400px;
	background-repeat: no-repeat;
	background-image: url('https://gallery.yxzi.xyz/galleries/2022/10/09/仙气.jpeg');
}

```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E7%94%A8%E5%9B%BA%E5%AE%9A%E7%9A%84%E6%95%B0%E5%80%BC%E6%88%96%E7%99%BE%E5%88%86%E6%AF%94%E8%AE%BE%E7%BD%AE%E5%9B%BE%E5%83%8F%E7%9A%84%E9%AB%98%E5%92%8C%E5%AE%BD.png" alt="用固定的数值或百分比设置图像的高和宽" style="zoom:50%;" />

`cover`，当背景图像小于元素尺寸，则背景图像会进行等比例放大（图片不会出现变形），直至图像完全覆盖元素区域，超出部分被裁剪。

```css
.container {
	width: 400px;
	height: 300px;
	font-size: 50px;
	border-radius: 3px;
	border: 2px solid #000;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url('https://gallery.yxzi.xyz/galleries/2022/10/09/仙气.jpeg');
}

```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E8%83%8C%E6%99%AF%20cover.png" alt="背景 cover" style="zoom:50%;" />

`contain`，对背景图片进行等比例的放大/缩小处理，直至背景图片能够完完整整的展示出来，不足部分会留白。

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E8%83%8C%E6%99%AF%20contain.png" alt="背景 contain" style="zoom:50%;" />

### background-attachment

当我们滑动网页时，控制背景图像是在视口内固定，还是随着包含它元素滚动。

背景图相对于元素固定，背景随页面滚动而移动，即背景和内容绑定。

`scroll`，背景相对于元素本身固定。

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E8%83%8C%E6%99%AF%20scroll.gif" alt="背景滚动 scroll" style="zoom:50%;" />

`fixed`，背景相对于视口固定。即使元素拥有滚动机制，其背景也不会随着元素的内容而滚动。

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E8%83%8C%E6%99%AF%E6%BB%9A%E5%8A%A8%20fixed.gif" alt="背景滚动 fixed" style="zoom:50%;" />

`local`，背景相对于元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动。

<img src="https://gallery.yxzi.xyz/galleries/2022/10/09/%E8%83%8C%E6%99%AF%E6%BB%9A%E5%8A%A8%20local.gif" alt="GIF 2022-10-9 23-51-33" style="zoom:50%;" />

