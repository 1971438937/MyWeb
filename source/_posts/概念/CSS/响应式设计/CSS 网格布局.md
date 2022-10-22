---
title: CSS 网格布局
abbrlink: 405
date: 2021-10-12 00:00:00
categories:
  - 改啊您
tags:
  - Css
  - 前端
  - 响应式设计
---

#  CSS 网格布局

## 写在前面

### 是什么

CSS 网格是一种二维布局。

Flex 布局是轴线布局，只能指定「项目」相对于轴线的位置，可以看作是一种**一维布局**。

Grid 布局则是将容器划分成「行」和「列」，产生单元格，然后指定「项目所在」的单元格，可以看作是**二维布局**。Grid 布局远比 Flex 布局强大。

## 基本概念

### 容器和项目

采用网格布局的区域，称为「容器」。容器内部采用网格定位的子元素，称为「项目」。

```html
<div>
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```

上面代码中，最外层的`<div>`就是容器，内层的三个 `<div>`就是项目。

另外，项目只能是容器的直接子元素，不包含项目的子元素，比如上面代码中的 `<p>` 就不是项目。Grid 布局只对项目生效。

### 行和列

容器里面的水平区域称为「行」（row），垂直区域称为「列」（column）。

下图中，水平的深色区域就是「行」，垂直的深色区域就是「列」

![行和列](https://gallery.yxzi.xyz/galleries/2022/09/17/%E8%A1%8C%E5%92%8C%E5%88%97.png)

### 单元格

行和列的交叉区域，称为「单元格」（cell）。

正常情况下，`n`行和`m`列会产生 `n` * `m` 个单元格。比如，3 行3 列会产生 9 个单元格。

### 网格线

划分网格的线，叫「网格线」（grid line）。水平网格线划分出行，垂直网格线划分出列。

正常情况下，`n` 行有 `n + 1` 根水平网格线；`m`列有`m + 1`根垂直网格线，比如 3 行就有 4 根水平网格线；7 行 就有 8 根垂直网格线。

下图是一个 4 x 4 的网格，共有 5 根水平网格线和 5 根垂直网格线。

![网格线](https://gallery.yxzi.xyz/galleries/2022/09/17/%E7%BD%91%E6%A0%BC%E7%BA%BF.png)

## 容器属性

块盒使用网格布局： `display: grid;`

行块盒使用网格布局：  `display: inline-grid;`

注意，设为网格布局以后，容器项目的 `float`、`display: inline-block`、`display: table-cell`、`vertical-align`和`column-* `等设置都将失效。

### 列和行

`grid-template-columns` 定义每一列的列宽。

`grid-template-rows`定义每一行的行高。

下面代码定义了一个 3 行 3 列的网格，列宽和行高都是`100px`。

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```

#### repeat()

通过上面代码看可以发现，行列如果太多的话，重复书写将会很麻烦，这时，可以使用 `repeat()` 函数，简化重复的值。上面的代码用`repeat()`改写如下：

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
}
```

`repeat() `接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值。

还可以重复某种固定的模式：

```css
grid-template-columns: repeat(2, 100px 20px 80px);
```

上面的代码定义了 6 列，第 1 列和第 4 列的宽度为 `100px`，第 2列和第 5 列为 `20px`，第 3 列和第 6 列为 `80px`。

#### auto-fill 关键字

有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用`auto-fill`关键字表示自动填充。

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```

上方代码，表示每列宽度`100px`，然后自动填充，直到容器不能放置更多的列。

#### fr 关键字

为了表示比例关系，网格布局提供了 `fr` 关键字（fraction）。如果两列的宽度分别为 `1fr` 和 `2fr `，就表示后者是前者的两倍。

```css
grid-template-rows: 1fr 2fr 3fr;
```

上面代码，表示第 2 行是第 1 行的两倍，第 3 行是第 1 行的三倍。

效果如图所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/17/fr%20%E5%85%B3%E9%94%AE%E5%AD%971.png" alt="fr 关键字1" style="zoom:50%;" />

另外，`fr` 可以与一般的长度单位混合使用，比如 `grid-template-columns: 300px 2fr 1fr`，那么第一列宽度是`300px`，剩下的两列会根据容器宽度减去 `300px` 后的可用空间按比例分配。

<img src="https://gallery.yxzi.xyz/galleries/2022/09/17/fr%20%E9%85%8D%E5%90%88%E7%BB%9D%E5%AF%B9%E5%8D%95%E4%BD%8D.png" alt="fr 配合绝对单位" style="zoom:50%;" />

#### minmax()

`minmax()`产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

```css
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
```

#### auto 关键字

`auto` 关键字表示由浏览器自己决定长度。

```css
grid-template-columns: 100px auto 100px;
```

#### 网格线的名称

在 `grid-template-columns`  和  `grid-template-rows` 中，可以使用 `[]` 来指定每一根网格线的名字，方便以后的引用。

```css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

上面代码指定网格布局为 3 行  *  3 列，分别有 4 根垂直网格线和 4 根水平网格线。`[]` 中依次是这 8 根线的名字。

另外，网格布局允许同一根线有多个名字，比如`[fifth-line row-5]`。

### 网格间距

`grid-column-gap` 定义列间距。

`grid-row-gap` 定义行间距。

`grid-gap` 可以同时设定两者，第一个值是行间距，第二个值是列间距。

```css
.container {
  grid-gap: 20px 20px;
}
```

如果 `grid-gap `省略了第二个值，则第二个值等于第一个值。

```css
.container {
  grid-gap: 20px 20px;
}
```

如 果`grid-gap `省略了第二个值，浏览器认为第二个值等于第一个值。

间距距离可以用任何长度单位包括百分比来表示，但不能使用 `fr` 单位。

<img src="https://gallery.yxzi.xyz/galleries/2022/09/17/%E7%BD%91%E6%A0%BC%E9%97%B4%E9%9A%99.png" alt="网格间隙" style="zoom: 50%;" />

### 隐式网格

使用`grid-auto-rows ` 和 `grid-auto-columns` 设定隐式网格的大小。

隐式网格就是为了放显式网格放不下的元素，默认情况下，浏览器根据已经定义的显式网格自动生成的网格部分。

### grid-template-areas

网格布局允许指定「区域」（area），一个区域由单个或多个单元格组成，类似合并单元格。`grid-template-areas  `用于定义这个区域。

index.html

```html
<div class="container">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
</div>
```

main.css

```css
.container {
	box-sizing: border-box;
	height: 100%;
	display: inline-grid;
	width: 500px;
	border: 1px solid #000;
	grid-template-columns: 30% 30% 40%;
	grid-template-areas:
		'header header .'
		'. body body'
		'footer footer footer';
	grid-template-rows: 1fr 1fr 1fr;
}

.container .one {
	grid-area: header;
	height: 100%;
	width: 100%;
	background-color: rgb(150, 236, 236);
}

.container .two {
	grid-area: body;
	height: 100%;
	width: 100%;
	font-size: 50px;
	background-color: rgb(226, 235, 104);
}

.container .three {
	grid-area: footer;
	height: 100%;
	width: 100%;
	background-color: rgb(21, 201, 27);
}

```

上面代码将 9 个单元格分成`header`、`body`、`footer`三个区域， `.` 表示空单元格。

项目的`grid-area` 属性指定当前项目放在容器的哪一个区域。

效果如图所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/18/grid-template-areas.png" alt="grid-template-areas" style="zoom:50%;" />

注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为 `区域名-start`，终止网格线自动命名为 `区域名-end`。

比如，区域名为`header`，则起始位置的水平网格线和垂直网格线叫做 `header-start`，终止位置的水平网格线和垂直网格线叫做 `header-end`。

### grid-auto-flow

划分网格以后，容器的项目会按照顺序，自动放置在每一个网格。默认的放置顺序是「先行后列」，即先填满第一行，再开始放入第二行，即下图排列顺序：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/18/grid-auto-flow.png" alt="grid-auto-flow" style="zoom:50%;" />

这个顺序由 `grid-auto-flow` 属性决定，默认值是`row`，即「先行后列」。也可以将它设成 `column`，变成「先列后行」，即先排第一列，在排第二列，以此类推。

![grid-auto-flow2](https://gallery.yxzi.xyz/galleries/2022/09/18/grid-auto-flow2.png)

### row dense 与 column dense

这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。

让 1 号项目和 2 号项目各占据两个单元格，然后在默认的 `grid-auto-flow: row` 情况下，会产生下面这样的布局：

<img src="https://gallery.yxzi.xyz/galleries/2022/09/18/grid-auto-flow:%20row%20dense.png" alt="grid-auto-flow: row dense" style="zoom:50%;" />

上图中， 1 号项目后面的位置是空的，这是因为 3 号项目默认跟着2 号项目，所以它会排在 2 号项目后面。

现在将其修改为 `row dense`，表示「先行后列」，并且尽可能紧密填满，尽量不出现空格。

```css
grid-auto-flow: row dense;
```



<img src="https://gallery.yxzi.xyz/galleries/2022/09/18/grid-auto-flow:%20row%20dense2.png" alt="grid-auto-flow: row dense2" style="zoom:50%;" />

上图中，会先填满第 1 行，再填满第 2 行，所以 3 号项目就会紧跟在 1 号项目的后面，4 号项目跟着 3 号后面，5、6、7、8、9  依次排列。

### justify-items 、align-items 、place-items

`justify-items` 设置单元格内容的水平位置（左中右）。

`align-items` 单元格内容的垂直位置（上中下）。

它们都有 4 个值：

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。

类似于 Excel 中的 六种单元格对齐方式。

`place-items` 是`align-items` 和`justify-items` 的合并简写形式。

第一个值是 `align-items`，第二个值是 `justify-items`，如果省略第二个值，则第一个值等于第二个值。

### justify-content、align-content、place-content

`justify-content` 是整个内容区域（（所有项目所占区域））在容器里面的水平位置（左中右）。

`align-content` 是整个内容区域（所有项目所占区域）的垂直位置（上中下）。

`start`：对齐容器的起始边框。

![对齐容器的起始边框](https://gallery.yxzi.xyz/galleries/2022/09/19/%E5%AF%B9%E9%BD%90%E5%AE%B9%E5%99%A8%E7%9A%84%E8%B5%B7%E5%A7%8B%E8%BE%B9%E6%A1%86.png)

`end`：对齐容器的结束边框。

![image-20220919002921436](https://gallery.yxzi.xyz/galleries/2022/09/19/%E5%AF%B9%E9%BD%90%E5%AE%B9%E5%99%A8%E7%9A%84%E7%BB%93%E6%9D%9F%E8%BE%B9%E6%A1%86.png)

`center`：容器内部居中。

![容器内部居中](https://gallery.yxzi.xyz/galleries/2022/09/19/%E5%AE%B9%E5%99%A8%E5%86%85%E9%83%A8%E5%B1%85%E4%B8%AD.png)

`stretch`：项目大小没有指定时，拉伸占据整个网格容器。

![拉伸占据整个网格容器](https://gallery.yxzi.xyz/galleries/2022/09/19/%E6%8B%89%E4%BC%B8%E5%8D%A0%E6%8D%AE%E6%95%B4%E4%B8%AA%E7%BD%91%E6%A0%BC%E5%AE%B9%E5%99%A8.png)

`space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。

![项目之间的间隔比项目与容器边框的间隔大一倍](https://gallery.yxzi.xyz/galleries/2022/09/19/%E9%A1%B9%E7%9B%AE%E4%B9%8B%E9%97%B4%E7%9A%84%E9%97%B4%E9%9A%94%E6%AF%94%E9%A1%B9%E7%9B%AE%E4%B8%8E%E5%AE%B9%E5%99%A8%E8%BE%B9%E6%A1%86%E7%9A%84%E9%97%B4%E9%9A%94%E5%A4%A7%E4%B8%80%E5%80%8D.png)

`space-between`：项目与项目的间隔相等，项目与容器边框之间没有间隔。

![项目与容器边框之间没有间隔](https://gallery.yxzi.xyz/galleries/2022/09/19/%E9%A1%B9%E7%9B%AE%E4%B8%8E%E5%AE%B9%E5%99%A8%E8%BE%B9%E6%A1%86%E4%B9%8B%E9%97%B4%E6%B2%A1%E6%9C%89%E9%97%B4%E9%9A%94.png)

`space-evenly`：项目与项目的间隔相等，项目与容器边框之间的间隔也和前者相同。

![image-20220919003313678](https://gallery.yxzi.xyz/galleries/2022/09/19/%E9%A1%B9%E7%9B%AE%E4%B8%8E%E5%AE%B9%E5%99%A8%E8%BE%B9%E6%A1%86%E4%B9%8B%E9%97%B4%E4%B9%9F%E6%98%AF%E5%90%8C%E6%A0%B7%E9%95%BF%E5%BA%A6%E7%9A%84%E9%97%B4%E9%9A%94.png)

`place-content` 是`align-content` 和`justify-content` 的合并简写形式。第一个之是 `align-content` ，第二个值是 `justify-content` 。

## 项目属性

### grid-column-start 、grid-column-end 

### grid-row-start、grid-row-end

指定项目的四个边框，分别定位在哪根网格线上。

![网格线](https://gallery.yxzi.xyz/galleries/2022/09/17/%E7%BD%91%E6%A0%BC%E7%BA%BF.png)

上图中，就是容器的网格线，而这四个属性就是指定项目的四个边框分别在哪一根网格线上。

比如：

```css
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 4;
```

除了指定第几个网格线，还可以指定为网格线的名字。

使用这四个属性，如果产生了项目的重叠，则可以使用 `z-index` 属性来指定项目的重叠顺序。

#### span

这四个属性的值还可以使用 `span` 关键字，表示「跨越」，即从容器的左右边框（上下边框）开始，要跨越多少个网格。

#### grid-column、grid-row

`grid-column` 是`grid-column-start`和`grid-column-end`的合并简写形式。

`grid-row`属性是`grid-row-start`属性和`grid-row-end` 的合并简写形式。

需要注意两个值之间需要用 `/` 分开。

```css
.item {
  grid-column: <start-line> / <end-line>;
  grid-row: <start-line> / <end-line>;
}
```

例如：

```css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* 等同于 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
```

也可以使用 `span `关键字，表示跨越多少个网格。

```css
.item-1 {
  background: #b03532;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  background: #b03532;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

`/` 以及后面的部分可以省略，默认跨越一个网格。

```css
.item-1 {
  grid-column: 1;
  grid-row: 1;
}
```

上面代码中，项目 `item-1 `占据左上角第 1 个网格。

### grid-area

指定项目放在哪一个区域，区域由 `grid-template-areas` 定义。



```css
.item-1 {
  grid-area: header;
}
```

`grid-area` 也可以使 `grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end `的合并简写形式，直接指定项目的位置。

```css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

### justify-self、align-self、place-self

`justify-self`设置单元格内容的水平位置（左中右），与`justify-items`的用法完全一致，但只作用于单个项目。

`align-self` 设置单元格内容的垂直位置（上中下），跟`align-items` 的用法完全一致，也是只作用于单个项目。

```css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

这两个属性的属性值与 `justify-items` 和 `align-items` 的一样。

## 参考链接

> https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html