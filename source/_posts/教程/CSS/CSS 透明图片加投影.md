---
title: Css 透明图片加投影
abbrlink: 38500
date: 2021-10-16 00:00:00
categories:
        - 教程
tags:
        - 前端
        - CSS
---

# CSS 透明图片加投影

## 写在前面

一般给来说，给一个盒子加阴影，可以直接使用 `box-shadow`，但如果我们要给一张**透明**的图片加阴影的话，就不能直接使用 `box-shadow`了，不然的话会变成这样。

<img src="https://gallery.yxzi.xyz/galleries/2022/07/10/透明图片加box-shadow.png" alt="透明图片加box-shadow" style="zoom:50%;" />

这显然不是我们想要的效果。

### 基础示例代码

index.html

```html
<img class="img" src="https://gallery.yxzi.xyz/galleries/2022/06/12/Gallery.png" alt="" />
```

main.css

```css
.img {
	position: absolute;
	right: 500px;
	top: 300px;
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/06/12/Gallery.png" alt="投影实例突破" style="zoom:50%;" />

## drop-shadow()

使用 `CSS filter` 的 `drop-shadow()` 可以将投影效果应用于图像。

main.css

```css
.img {
	position: absolute;
	right: 500px;
	top: 300px;
	filter: drop-shadow(0px 0px 0.3rem rgba(100, 100, 111, 1));
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E9%80%8F%E6%98%8E%E5%9B%BE%E7%89%87%E6%B7%BB%E5%8A%A0%E9%98%B4%E5%BD%B1.png" alt="透明图片添加阴影" style="zoom:50%;" />

如果感觉效果不太好的话，还可以再定义一个 `<img>`。

index.html

```html
<img class="img" src="https://gallery.yxzi.xyz/galleries/2022/06/12/Gallery.png" alt="" /> <img class="img-bg" src="https://gallery.yxzi.xyz/galleries/2022/06/12/Gallery.png" alt="" />
```

main.css

用定位将 img-bg 和 img 重叠，img 处于上方，然后再设置 img-bg 的 `filter:blur()` ，使处于下方 img-bg 产生高斯模糊的效果，最后就可以得到一个更加优雅的图片投影效果，

```css
.img,
.img-bg {
	position: absolute;
	right: 500px;
	top: 300px;
}
.img-bg {
	z-index: -1;
	filter: blur(3px);
}
```

<img src="https://gallery.yxzi.xyz/galleries/2022/09/27/%E9%80%8F%E6%98%8E%E5%9B%BE%E7%89%87%E6%B7%BB%E5%8A%A0%E9%98%B4%E5%BD%B12.png" alt="透明图片添加阴影2" style="zoom:50%;" />
