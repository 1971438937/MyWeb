---
title: Css 弹性布局
abbrlink: 52408
date: 2021-10-12 00:00:00
categories:
  - 概念
tags:
  - Css
  - 前端
  - 响应式设计
---

# 弹性布局

## 写在前面

### 是什么

弹性布局是一种用于按行或按列布局元素的一维布局方法。元素可以膨胀以填充额外的空间，收缩以适应更小的空间。

一个 Flex 元素，其子元素的 `float`、`clear`和`vertical-align `属性将失效。

## 为什么用

- 解决元素居中问题。
- 自动弹性伸缩，适配不同大小的屏幕，电脑、手机等。

## 基本概念

### 容器和项目

采用 Flex 布局的元素，称为 「容器」（container）。

容器的所有子元素自动成为容器的「项目」（item）。

![基本概念](https://gallery.yxzi.xyz/galleries/2022/09/16/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.png)

### 主轴和交叉轴

容器默认存在两根轴，水平的主轴（main axis）和垂直的交叉轴（cross axis）。

主轴的开始位置（与边框的交叉点）叫做 `main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列，单个项目占据的主轴空间叫做 `main size`，占据的交叉轴空间叫做`cross size`。

## 容器属性

### flex-direction

决定主轴的方向，即 item 的排列方向。

`row`（默认值）：主轴为水平方向，起点在左端。

![flex-direction:row](https://gallery.yxzi.xyz/galleries/2022/09/16/flex-direction:row.png)

`row-reverse`：主轴为水平方向，起点在右端。

![flex-direction:row-reverse](https://gallery.yxzi.xyz/galleries/2022/09/16/flex-direction:row-reverse.png)

`column`：主轴为垂直方向，起点在上沿。

![flex-direction:colum](https://gallery.yxzi.xyz/galleries/2022/09/16/flex-direction:colum.png)

`column-reverse`：主轴为垂直方向，起点在下沿。

![flex-direction:colum-colmn](https://gallery.yxzi.xyz/galleries/2022/09/16/flex-direction:colum-colmn.png)

### flex-wrap

默认情况下，项目都排在一条轴线上，`flex-wrap`定义的是，如果一条轴线排不下，如何进行换行。

`nowrap`（默认）：不换行。

![flex-wrap:nowrap](https://gallery.yxzi.xyz/galleries/2022/09/16/flex-wrap:nowrap.png)

`wrap`：换行，在第一行下方。

![flex-wrap:wrap](https://gallery.yxzi.xyz/galleries/2022/09/16/flex-wrap:wrap.png)

`wrap-reverse`：换行，在第一行上方。

![flex-wrap:wrap-reverse](https://gallery.yxzi.xyz/galleries/2022/09/16/flex-wrap:wrap-reverse.png)

### flex-flow

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式。

### justify-content

定义了项目在主轴上的对齐方式，下面的值假设 `flex-direction:row`。

`flex-start`（默认值）：左对齐

![justify-content:flex-start](https://gallery.yxzi.xyz/galleries/2022/09/16/justify-content:flex-start.png)

`flex-end`：右对齐

![justify-content:flex-end](https://gallery.yxzi.xyz/galleries/2022/09/16/justify-content:flex-end.png)

`center`： 居中对齐。
![项目居中对齐](https://gallery.yxzi.xyz/galleries/2022/09/16/%E9%A1%B9%E7%9B%AE%E5%B1%85%E4%B8%AD%E5%AF%B9%E9%BD%90.png)

`space-between`：两端对齐，item 之间的间隔都相等。

![项目两端对齐](https://gallery.yxzi.xyz/galleries/2022/09/16/%E9%A1%B9%E7%9B%AE%E4%B8%A4%E7%AB%AF%E5%AF%B9%E9%BD%90.png)

`space-around`：每个 item 两侧的间隔相等。所以，项目与项目之间的间隔要比项目与容器边框的间隔大 1 倍。

![每个 item 两侧的间隔相等](https://gallery.yxzi.xyz/galleries/2022/09/16/%E6%AF%8F%E4%B8%AA%20item%20%E4%B8%A4%E4%BE%A7%E7%9A%84%E9%97%B4%E9%9A%94%E7%9B%B8%E7%AD%89.png)

`space-evenly`：项目与项目之间的间隔，项目与边框的间隔，都均匀分配，。

![space-evenly](https://gallery.yxzi.xyz/galleries/2022/09/16/space-evenly.png)

### align-items

定义项目在交叉轴上如何对齐。下面假设 `flex-direction: column;`

`flex-start`：交叉轴的起点对齐。

![交叉轴的起点对齐](https://gallery.yxzi.xyz/galleries/2022/09/16/%E4%BA%A4%E5%8F%89%E8%BD%B4%E7%9A%84%E8%B5%B7%E7%82%B9%E5%AF%B9%E9%BD%90.png)

`flex-end`：交叉轴的终点对齐。

![交叉轴的终点对齐](https://gallery.yxzi.xyz/galleries/2022/09/16/%E4%BA%A4%E5%8F%89%E8%BD%B4%E7%9A%84%E7%BB%88%E7%82%B9%E5%AF%B9%E9%BD%90.png)

`center`：交叉轴的中点对齐。

![交叉轴的中点对齐](https://gallery.yxzi.xyz/galleries/2022/09/16/%E4%BA%A4%E5%8F%89%E8%BD%B4%E7%9A%84%E4%B8%AD%E7%82%B9%E5%AF%B9%E9%BD%90.png)

`baseline`: 项目的第一行文字的基线对齐。

![image-20220916164133863](https://gallery.yxzi.xyz/galleries/2022/09/16/%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%AC%AC%E4%B8%80%E8%A1%8C%E6%96%87%E5%AD%97%E7%9A%84%E5%9F%BA%E7%BA%BF%E5%AF%B9%E9%BD%90.png)

`stretch`（默认值）：如果项目有高度，则效果与 `flex-start`一样；如果项目未设置高度或设为 auto，将占满整个容器的高度。

![stretch](https://gallery.yxzi.xyz/galleries/2022/09/16/stretch.png)

### align-content

定义了**多根轴线的对齐方式**。如果项目只有一根轴线，则该属性不起作用，即需要设置 `flex-wrap`属性。

`flex-start`：与交叉轴的起点对齐，留白部分在下方。

![与交叉轴的起点对齐](https://gallery.yxzi.xyz/galleries/2022/09/16/%E4%B8%8E%E4%BA%A4%E5%8F%89%E8%BD%B4%E7%9A%84%E8%B5%B7%E7%82%B9%E5%AF%B9%E9%BD%90.png)

`flex-end`：与交叉轴的终点对齐，留白部分在上方。

![与交叉轴的终点对齐](https://gallery.yxzi.xyz/galleries/2022/09/16/%E4%B8%8E%E4%BA%A4%E5%8F%89%E8%BD%B4%E7%9A%84%E7%BB%88%E7%82%B9%E5%AF%B9%E9%BD%90.png)

`center`：与交叉轴的中点对齐，上下留白上下相同。

![与交叉轴的中点对齐，](https://gallery.yxzi.xyz/galleries/2022/09/16/%E4%B8%8E%E4%BA%A4%E5%8F%89%E8%BD%B4%E7%9A%84%E4%B8%AD%E7%82%B9%E5%AF%B9%E9%BD%90%EF%BC%8C.png)

`space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。

![与交叉轴两端对齐](https://gallery.yxzi.xyz/galleries/2022/09/16/%E4%B8%8E%E4%BA%A4%E5%8F%89%E8%BD%B4%E4%B8%A4%E7%AB%AF%E5%AF%B9%E9%BD%90.png)

`space-around`：每根轴线两侧的间隔都相等。所以，轴线与轴线之间的间隔比轴线与边框的间隔大 1 倍。

![align-content:space-around](https://gallery.yxzi.xyz/galleries/2022/09/16/align-content:space-around.png)

`stretch`（默认值）：轴线占满整个交叉轴。

## 项目属性

### order

定义项目的排列顺序。数值越小，排列越靠前，默认为 0。

![order](https://gallery.yxzi.xyz/galleries/2022/09/16/order.png)

### flex-grow

定义当存在剩余空间时，项目的放大比例，默认为 0。即不会放大。

![定义项目的放大比例](https://gallery.yxzi.xyz/galleries/2022/09/16/%E5%AE%9A%E4%B9%89%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%94%BE%E5%A4%A7%E6%AF%94%E4%BE%8B.png)

如果所有项目的 `flex-grow `都为 1，则它们将等分剩余空间（如果有的话）。

如果其中一个项目的 `flex-grow` 为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多 1 倍，其他项目等分剩余空间。

### flex-shrink

定义当剩余空间不足时，项目的缩小比例，默认为 1，即该项目将缩小。

如果一个项目的 `flex-shrink` 为 0，其他项目都为 1，则空间不足时，前者不会缩小，其他项目会缩小。

![项目的缩小比例](https://gallery.yxzi.xyz/galleries/2022/09/16/%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%BC%A9%E5%B0%8F%E6%AF%94%E4%BE%8B.png)

负值对该属性无效。

### flex-basis

`flex-basis` 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 `auto`，即项目的内容盒（content-box）尺寸。

### flex

此属性是`flex-grow`、`flex-shrink` 和 `flex-basis`的简写，第一个属性必须，后两个属性可选。

### align-self

此属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 `align-items`。默认值为 auto，表示继承父元素的 `align-items` 属性，如果没有父元素，则等同于 `stretch`。

![align-self](https://gallery.yxzi.xyz/galleries/2022/09/17/align-self.png)

该属性可能取6个值，除了 auto，其他都与`align-items` 属性完全一致。

## 参考链接

> https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html