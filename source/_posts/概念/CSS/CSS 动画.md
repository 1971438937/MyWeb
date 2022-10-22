---
title: CSS 动画
date: 2021-10-05
abbrlink: 58881
categories:
  - 概念
tags:
  - 前端
  - CSS
---

# CSS 动画

## 写在前面

### 是什么

可通过设置多个关键帧来精确控制一个或一组动画，用它可以实现更复杂的动画效果。

### 主要内容

介绍关键帧、 `animation`各属性以及阶梯函数。

使用动画时所遇到的常见问题。

### 基础示例代码

index.html

```html
<div class="container">动画</div>
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
	transition: all 1s linear 0.1s;
	border-radius: 3px;
}

```

上面代码如下图所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/04/%E5%8A%A8%E7%94%BB%E5%88%9D%E5%A7%8B%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81.png" alt="动画初始示例代码" style="zoom:50%;" />

## @keyframes

`@keyframes` 指定动画在执行时的关键帧。

关键帧中出现的 `!important` 将会被忽略。

### 语法

```css
@keyframes animationName {
	0%{
        /*此时的 CSS 样式*/
    }
	10%{
           /*此时的 CSS 样式*/
    }
	...
	100%{
           /*此时的 CSS 样式*/
    }
}

```

还可以用 `from` 和 `to` 这样的写法：

```css
@keyframes animationName {
	from{
        /*此时的 CSS 样式*/
    }
	10%{
           /*此时的 CSS 样式*/
    }
	...
	to{
           /*此时的 CSS 样式*/
    }
}
```

### 示例

定义一个改变元素背景色的动画关键帧，然后应用到 `container` 元素：

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
    /* 将动画应用到元素 */
	animation: First 10s;
}


@keyframes First {
	0% {
		background-color: rgb(243, 162, 162);
	}
	30% {
		background-color: rgb(183, 183, 255);
	}
	50% {
		background-color: rgb(113, 216, 194);
	}
	70% {
		background-color: rgb(187, 187, 255);
	}
	100% {
		background-color: rgb(255, 181, 181);
	}
}

```

由红到粉色渐变：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/05/%E5%9F%BA%E7%A1%80%E8%83%8C%E6%99%AF%E6%B8%90%E5%8F%98%E5%8A%A8%E7%94%BB.gif" alt="基础背景渐变动画" style="zoom:50%;" />



## animation 属性

`animation` 用于调用由  `@keyframes`  定义的动画效果。它是一个简写属性，简化了下列属性：

- `animation-name`，动画名称。
- `animation-duration`，动画单次执行的所需时间。
- `animation-timing-function`，指定在运行动画时应该如何进行变换。
- `animation-delay`，动画的延迟执行时间。
- `animation-iteration-count`，动画的重复次数。
- `animation-direction`，控制动画是否反向播放。
- `animation-fill-mode`，指定元素在动画执行前后的样式。
- `animation-play-state`，控制动画是否运行或者暂停。

定义动画时，必须定义动画的名称和动画的持续时间。

### 语法

```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

比如：

```css
animation:myAnim 1s linear 1s infinite alternate both running;
```

## animation 各属性详解

### animation-name

指定被调用动画（`@keyframes`）的名称。

### animation-duration

指定整个动画单次执行的时间，值越小，动画执行的越快，反之越慢。

动画 3 秒运行完成：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/05/%E5%8A%A8%E7%94%BB%203%20%E7%A7%92%E5%AE%8C%E6%88%90.gif" alt="动画 3 秒完成" style="zoom:50%;" />

动画 10 秒运行完成：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/05/%E5%9F%BA%E7%A1%80%E8%83%8C%E6%99%AF%E6%B8%90%E5%8F%98%E5%8A%A8%E7%94%BB.gif" alt="基础背景渐变动画" style="zoom:50%;" />

### animation-timing-function

指定在运行动画时应该如何进行变换。

可选值与 `transition`  的 `transition-timing-function`是一样的。并且还多了下面三个值：

- `step-start` ，在变化过程中，都是以**下一帧**的显示效果来填充间隔动画，会忽略第一帧上的动画样式（红色）。

```css
animation: First 10s step-start;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/06/step-start.gif" alt="step-start" style="zoom:50%;" />

- `step-end` ，在变化过程中，都是以**上一帧**的显示效果来填充间隔动画，会忽略最后一帧上的动画样式（粉色）。

```css
animation: First 10s step-end;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/06/step-end.gif" alt="step-end" style="zoom:50%;" />

- `steps()`阶梯函数。详见 [steps()](#阶梯函数)

### animation-delay

指定动画的延迟执行时间，以 `s` 和 `ms` 为单位。

```css
animation: First 10s infinite 3s;
```

将动画延迟三秒后执行：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/05/%E5%8A%A8%E7%94%BB%E5%BB%B6%E8%BF%9F%E4%B8%89%E7%A7%92.gif" alt="动画延迟三秒" style="zoom:50%;" />

### animation-iteration-count

指定动画的重复次数，默认只运行 1 次。

如果指定了多个值，每次播放动画时，将使用值列表中的下一个值，在使用最后一个值后循环回到第一个值。

可选值为：

- `number`，定义应该播放多少次动画。

动画只运行 2 次：

```css
animation: First 10s 2
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/05/%E9%87%8D%E5%A4%8D%E4%B8%A4%E6%AC%A1%E5%8A%A8%E7%94%BB.gif" alt="重复两次动画" style="zoom:50%;" />

- `infinite`，无限循环播放动画。

动画无限循环运行：

```css
animation: First 10s infinite;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/05/%E5%8A%A8%E7%94%BB%E8%83%8C%E6%99%AF%E6%B8%90%E5%8F%98.gif" alt="动画背景渐变" style="zoom:50%;" />

### animation-direction

控制动画是否反向播放。如果动画被设置为只播放一次，则该属性将不起作用。

可选值为：

- `alternate`，从头部开始来回运行动画。

```css
animation: First 10s 3 alternate;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/05/alternate.gif" alt="alternate" style="zoom:50%;" />

第一次：红 — 粉

第二次：粉 — 红

第三次：红 — 粉......

- `reverse`，每次都从尾部开始运行动画。

```css
animation: First 10s 3 reverse;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/06/reverse.gif" alt="reverse" style="zoom:50%;" />

第一次：粉 — 红

第二次：粉 — 红

第三次：粉 — 红......

- `alternate-reverse`，从尾部开始来回运行动画。

```css
animation: First 10s 3 alternate-reverse;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/06/alternate-reverse.gif" alt="alternate-reverse" style="zoom:50%;" />

第一次：粉 — 红

第二次：红 — 粉

第三次：粉 — 红......

### animation-fill-mode

规定当动画未开始播放时、当动画完成时、当动画有延迟未开始播放时，要应用到元素的样式，整个样式将覆盖元素本身的样式。

可选值为：

- `none`，当动画运行完成后，显示元素本身的样式。

<img src="https://gallery.yxzi.xyz/galleries/2022/10/05/%E5%9F%BA%E7%A1%80%E8%83%8C%E6%99%AF%E6%B8%90%E5%8F%98%E5%8A%A8%E7%94%BB.gif" alt="基础背景渐变动画" style="zoom:50%;" />

可以看到，当元素运行完成后，显示的是元素本身的样式：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/04/%E5%8A%A8%E7%94%BB%E5%88%9D%E5%A7%8B%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81.png" alt="动画初始示例代码" style="zoom:50%;" />


- `forwards`，当动画未运行时，会将动画运行到**最后一个关键帧**时的样式应用到元素。

```css
animation: First 10s forwards;
```

<img src="https://gallery.yxzi.xyz/galleries/2022/10/06/forwards.gif" alt="forwards" style="zoom:50%;" />

可以看到，当元素运行完成后，显示的是动画运行到 100 % 时的样式：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/06/动画运行到 100 %.png" alt="动画运行到 100 %" style="zoom:50%;" />


- `backwards`，当动画未运行时，会将动画运行到**第一个关键帧**时的样式应用到元素。效果似乎和 `none` 是一样的。
- `both`，动画将遵循 `forwards` 和 `backwards` 的规则，从而在两个方向上扩展动画属性。

### animation-play-state

控制动画是否运行或者暂停。

可选值为：

- `running`，当前动画正在运行。
- `paused`，当前动画已被停止。

当鼠标悬停到元素上时，元素的动画会暂停，移开元素后继续运行动画，~~因为我的 GIF 录制软件无法看到光标，但我们可以在动画暂停的时自行脑补光标~~。

额外使用一个 hover 选择器来控制。

```css
.container:hover {
	animation-play-state: paused;
}
```

上面代码效果如图所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/06/hover%20%E6%9A%82%E5%81%9C%E5%8A%A8%E7%94%BB.gif" alt="hover 暂停动画" style="zoom:50%;" />

## 阶梯函数

`steps()`是一个定时函数，允许我们将动画或者过渡分割成段，而不是从一种状态持续到另一种状态的过渡。

第一个参数是一个正值，指定我们希望动画分割的段数。

第二个参数定义了这个要点在我们的 `@keyframes` 中申明的动作将会发生的关键。这个值是可选的，在没有传递参数时，默认为  `end`。

### start 和 end 

方向为 `start` 表示一个左持续函数，在动画开始时，动画的第一帧将会马上完成（跳过第一帧），来到第一个 step 的结尾处。

<img src="https://gallery.yxzi.xyz/galleries/2022/10/06/steps%20start.png" alt="steps start" style="zoom:67%;" />

方向为 `end` 表示一个右持续函数。动画开始时，从第一帧的起点开始正常运行，

<img src="https://gallery.yxzi.xyz/galleries/2022/10/06/step%20end%202.png" alt="step end 2" style="zoom:80%;" />

到动画的最后一帧的起点时，会跳过下一帧（最后一帧），直接回到整个动画的起点，并开始第二次东爱护。



<img src="https://gallery.yxzi.xyz/galleries/2022/10/06/steps%20end.png" alt="steps end" style="zoom:67%;" />



`steps()`的动态解析图：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/06/%E9%98%B6%E6%A2%AF%E5%87%BD%E6%95%B0%E5%8A%A8%E6%80%81%E8%A7%A3%E6%9E%90%E5%9B%BE%20.gif" alt="阶梯函数动态解析图" style="zoom:80%;" />

### 填充模式和迭代次数的影响

`animation-iteration-count` 和 `animation-fill-mode` 会对 `steps()` 产生影响。

## 常见问题

### @keyframes 不能实现突变的状态变化

```css
@keyframes First {
    100% { 
		opacity: 1;
		visibility: visible;
	}
	100% { 
		opacity: 0;
		visibility: hidden;
	}
}
```

代替方案：

元素会占据原本空间，visiblity +opacity

```css
@keyframes First {
	0% {
		opacity: 0;
		visibility: hidden;
	}
	100% {
		opacity: 1;
		visibility: visible;
	}
}

```

上面代码效果如图所示：

<img src="https://gallery.yxzi.xyz/galleries/2022/10/06/visiblity%20%E5%8A%A8%E7%94%BB.gif" alt="visiblity 动画" style="zoom:50%;" />

## 参考链接

> http://t.csdn.cn/dhwqZ
>
> https://segmentfault.com/a/1190000007042048
