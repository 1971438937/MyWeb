---
title: CSS 瀑布流实现方式总结
abbrlink: 58872
date: 2021-12-12
categories:
        - Note
tags:
        - Css
        - 前端
---

# CSS 瀑布流实现方式总结

## 写在前面

记录几种瀑布流布局的实现方式。

### 是什么

瀑布流是页面上的一种**参差不齐**的多栏布局，类似下图，随着页面滚动条向下滚动，这种布局还会不断加载数据块并附加至当前尾部，大部分为图片，这些图片一般等宽不等高（等高不等宽），每行排满后，新的图片添加到最底部。

![什么是瀑布流](https://gallery.yxzi.xyz/galleries/2022/09/20/%E4%BB%80%E4%B9%88%E6%98%AF%E7%80%91%E5%B8%83%E6%B5%81.png)

## 优缺点

### 优点

- 节省空间，降低页面的复杂度。
- 对于触屏设备非常友好，通过向上滑动浏览，交互方式更符合直。
- 良好的视觉体验，浏览时不会被页面整整齐齐的高度影响，参差不齐，降低浏览的疲劳。

### 缺点

- 内容总长度，无法掌握。
- 数据过多时，容易造成页面，加载的负荷。
- 再次加载时 很难定位上一次浏览的内容。
  

## 多列布局

使用 `column-count` 将容器内容分为多列展示。

### 有点

简单，两句代码即可完成瀑布流。

### 缺点

图片排列顺序只能是**先从从上到下，再从左至右**，如果我们需要一些动态加载图片的业务，那么新加入的图片将不会出现到页面的最底端，这也是多列布局的缺点。

### 注意

有时候页面会出现某列的最后一个元素的内容被自动断开，一部分在当前列尾，一部分在下一列的列头。这时候子元素可以用 `break-inside` 设置为不被截断 `avoid` 来控制。

### 代码实现

index.html

```html
<!DOCTYPE html>
<html lang="en" manifest="manifest.appcache">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>多列布局瀑布流</title>
    </head>

    <body>
        <div class="container">
            <div class="item">
                <img src="https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img2.baidu.com/it/u=2048195462,703560066&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img0.baidu.com/it/u=2441133694,3563177909&fm=253&fmt=auto&app=138&f=JPEG?w=363&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=3384796346,381674655&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=2658939207,2791674017&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img2.baidu.com/it/u=383380894,3933217319&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img0.baidu.com/it/u=2015061810,2831036482&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img0.baidu.com/it/u=2936446523,119844249&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img0.baidu.com/it/u=1187714936,1649669646&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=2734240624,2848071286&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=2734240624,2848071286&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=531206794,3118197967&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=499"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img2.baidu.com/it/u=1813045417,2961866640&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=4266088221,3070878564&fm=253&fmt=auto&app=138&f=JPEG?w=758&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img0.baidu.com/it/u=1187714936,1649669646&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=2734240624,2848071286&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=2734240624,2848071286&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=531206794,3118197967&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=499"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img2.baidu.com/it/u=1813045417,2961866640&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=4266088221,3070878564&fm=253&fmt=auto&app=138&f=JPEG?w=758&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img0.baidu.com/it/u=1187714936,1649669646&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=2734240624,2848071286&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=2734240624,2848071286&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=531206794,3118197967&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=499"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img2.baidu.com/it/u=1813045417,2961866640&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=4266088221,3070878564&fm=253&fmt=auto&app=138&f=JPEG?w=758&h=500"
                        alt="">
            </div>
        </div>

    </body>

</html>
```

main.css

```css
.container {
	box-sizing: border-box;
	column-count: 5;
	column-gap: 0;
}

.item {
	position: relative;
	box-sizing: border-box;
	padding: 2px;
	counter-increment: item-counter;
}

.item img {
	width: 100%;
	height: auto;
	display: block;
}

.item::after {
	position: absolute;
	top: 0;
	left: 0;
	font-size: 16px;
	background-color: rgb(0, 0, 0);
	color: rgb(255, 255, 255);
	content: counter(item-counter);
}

```

以上代码最终效果图如下：

![多列布局瀑布流最终效果](https://gallery.yxzi.xyz/galleries/2022/09/21/%E5%A4%9A%E5%88%97%E5%B8%83%E5%B1%80%E7%80%91%E5%B8%83%E6%B5%81%E6%9C%80%E7%BB%88%E6%95%88%E6%9E%9C.png)

## Flex 布局

### 泳道思想

通俗的说是类似泳道一样，先设置泳道列数，一列一列的，然后往里加东西，就自动往下面走了。

原理分析：

首先比如有四个元素了，并且设置四列。

![泳道思想1](https://gallery.yxzi.xyz/galleries/2022/09/20/%E6%B3%B3%E9%81%93%E6%80%9D%E6%83%B31.png)

那么第五个应该在哪里呢？

![泳道思想2](https://gallery.yxzi.xyz/galleries/2022/09/20/%E6%B3%B3%E9%81%93%E6%80%9D%E6%83%B32.png)

答案是下面图的位置上，高度为所有列中最小的项目下方。

![泳道思想3](https://gallery.yxzi.xyz/galleries/2022/09/20/%E6%B3%B3%E9%81%93%E6%80%9D%E6%83%B33.png)第六个的位置依旧是剩余列中高度最小的项目下方。

![泳道思想4](https://gallery.yxzi.xyz/galleries/2022/09/20/%E6%B3%B3%E9%81%93%E6%80%9D%E6%83%B34.png)

### 实现思路

先设置容器，使其纵向从上到下排列所有项目，注意这里需要手动计算一下高度。

```css
.container {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width: 100%;
    /*高度需要手动计算*/
	height: 900px;
}

```

再用伪元素标记元素顺序。

```css
.item {
	position: relative;
	box-sizing: border-box;
	/* 呈 5 列 */
	width: 20%;
	padding: 10px;
	/* 定义计数器变量 */
	counter-increment: item-counter;
	border-radius: 3px;
	overflow: hidden;
}

.item img {
	width: 100%;
	display: block;
}
/* 显示左上角编号 */
.item::after {
	position: absolute;
	top: 10px;
	left: 10px;
	font-size: 16px;
	background-color: rgb(0, 0, 0);
	color: rgb(255, 255, 255);
	/* 使用计数器变量 */
	content: counter(item-counter);
}
```

![flex 实现瀑布流1](https://gallery.yxzi.xyz/galleries/2022/09/21/flex%20%E5%AE%9E%E7%8E%B0%E7%80%91%E5%B8%83%E6%B5%811.png)

可以看到排列是先从上至下，第一列排满后再排第二列，很明显这和多列布局的效果一样，但我们可以使用 flex 布局的 `order` 属性来巧妙的解决这个不足。

```css

.item:nth-child(5n + 1) {
	order: 1;
}

.item:nth-child(5n + 2) {
	order: 2;
}

.item:nth-child(5n + 3) {
	order: 3;
}
.item:nth-child(5n + 4) {
	order: 4;
}

.item:nth-child(5n) {
	order: 5;
}

```

上面代码，将指定行上的元素分别排列到第 1 至 第 5 列。

最终效果如下图所示：

![flex 瀑布流最终效果](https://gallery.yxzi.xyz/galleries/2022/09/21/flex%20%E7%80%91%E5%B8%83%E6%B5%81%E6%9C%80%E7%BB%88%E6%95%88%E6%9E%9C.png)

### 实现代码

index.html

```css
<!DOCTYPE html>
<html lang="en" manifest="manifest.appcache">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>flex 瀑布流</title>
    </head>

    <body>

        <div class="container">
            <div class="item">
                <img src="https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img2.baidu.com/it/u=2048195462,703560066&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img2.baidu.com/it/u=694773797,1520510657&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=3384796346,381674655&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=2658939207,2791674017&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img2.baidu.com/it/u=383380894,3933217319&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img0.baidu.com/it/u=2015061810,2831036482&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img0.baidu.com/it/u=2936446523,119844249&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img0.baidu.com/it/u=1187714936,1649669646&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=2734240624,2848071286&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img2.baidu.com/it/u=2890830300,1721859624&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img0.baidu.com/it/u=535862246,1009430706&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img2.baidu.com/it/u=1813045417,2961866640&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=4266088221,3070878564&fm=253&fmt=auto&app=138&f=JPEG?w=758&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img0.baidu.com/it/u=1149498394,1442276907&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=500"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img2.baidu.com/it/u=3249190058,1171654952&fm=253&fmt=auto&app=120&f=JPEG?w=1197&h=800"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img0.baidu.com/it/u=3485269656,617316610&fm=253&fmt=auto&app=138&f=JPEG?w=660&h=440"
                        alt="">
            </div>

            <div class="item">
                <img src="https://img2.baidu.com/it/u=4246954929,2435597812&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=797"
                        alt="">
            </div>
            <div class="item">
                <img src="https://img1.baidu.com/it/u=2085017318,1818001871&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=355"
                        alt="">
            </div>
        </div>
    </body>

</html>
```

main.css

```css
body,
html {
	margin: 0;
	padding: 0;
	width: 100%;
}
.container {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width: 100%;
	/* 高度需要手动计算 */
	height: 900px;
}

.item {
	position: relative;
	box-sizing: border-box;
	/* 呈 5 列 */
	width: 20%;
	padding: 10px;
	/* 定义计数器变量 */
	counter-increment: item-counter;
	border-radius: 3px;
	overflow: hidden;
}

.item img {
	width: 100%;
	display: block;
}

/* 显示左上角编号 */
.item::after {
	position: absolute;
	top: 10px;
	left: 10px;
	font-size: 16px;
	background-color: rgb(0, 0, 0);
	color: rgb(255, 255, 255);
	/* 使用计数器变量 */
	content: counter(item-counter);
}

.item:nth-child(5n + 1) {
	order: 1;
}

.item:nth-child(5n + 2) {
	order: 2;
}

.item:nth-child(5n + 3) {
	order: 3;
}
.item:nth-child(5n + 4) {
	order: 4;
}

.item:nth-child(5n) {
	order: 5;
}

```

## 参考链接

> https://blog.csdn.net/Smile_666666/article/details/124728121