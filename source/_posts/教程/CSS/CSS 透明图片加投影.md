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

一般给来说，给一个盒子加阴影，可以直接使用`box-shadow`，但如果我们要给一张透明的图片加阴影的话，就不能直接使用`box-shadow`了，不然的话会变成这样。

![透明图片加box-shadow](https://gallery.yxzi.xyz/galleries/2022/07/10/透明图片加box-shadow.png)

## drop-shadow()

将投影效果应用于输入图像。

**HTML**

```html
<img class="img" src="https://gallery.yxzi.xyz/galleries/2022/06/12/Gallery.png" alt="">
```

**css**

```css
.img {
    position: absolute;
	right: 500px;
	top: 300px;
	filter: drop-shadow(0px 0px 0.3rem rgba(100, 100, 111, 1));
}
```

如果感觉效果不太好的话，可以再定义一个 `<img>`。

**HTML**

```html
<img class="img" src="https://gallery.yxzi.xyz/galleries/2022/06/12/Gallery.png" alt="">
<img class="img-bg" src="https://gallery.yxzi.xyz/galleries/2022/06/12/Gallery.png" alt="">
```

使用定位将 img-bg 完全覆盖，然后设置它的`blur()`。

```css
.img,
.img-bg {
	position: absolute;
	right: 500px;
	top: 300px;
	/* filter: drop-shadow(0px 0px 0.3rem rgba(100, 100, 111, 1)); */
}
.img-bg {
	z-index: -1;
	filter: blur(3px);
}

```

