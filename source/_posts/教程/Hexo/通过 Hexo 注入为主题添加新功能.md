---
title: 通过 Hexo 注入为主题添加新功能
categories:
  - 教程
tags:
  - Hexo
abbrlink: 21178
date: 2022-08-10 00:00:00
---

# 通过 Hexo 注入为主题添加新功能

## 写在前面

虽然 Hexo 本身有各式各样的主题，其中最经典的非 Nex 莫属，但因为每个人的审美的需求都有所不同，因此，我并不满足于原生的 Next 主题。

一开始我采取的是直接修改 Hexo 源码的方式，但这种方式所带来的问题也很明显：一旦我升级主题，那么我之前修改的代码就又被还原了。有些人可能会说：“那我不升级主题不就行了”，那你不升级吧哈哈哈。

后来仔细阅读了下 Hexo 官方文档，发现 Hexo 的[Injects](https://hexo.io/zh-cn/api/injector.html) 可是个好东西，但这写的似乎不太通俗易懂，过段放弃打开百度，果然没有让我失望，找到了我可以看懂的文章。

### 主要内容

使用 Hexo 注入自定义样式

## Hexo 注入

[Hexo 注入器](https://hexo.io/zh-cn/api/injector.html)是 Hexo 5 版本自身加入的一项新功能，因此，所有的 Hexo 主题都是支持这个功能的。它可以将代码片段注入生成页面的 `<head>` 和 `<body>` 节点中。

编写注入代码，需要在博客的根目录下创建 `scripts` 文件夹，然后在里面任意命名创建一个 js 文件即可。（当时我就是卡在了这一步，不知道将代码写到哪个位置和路径）。

### 注入 CSS 文件

创建一个 `/Blog/scripts/Custom.js`。

```js
hexo.extend.filter.register('theme_inject', function (injects) {
    // 样式文件
	injects.style.push('source/_data/Custom.styl');
});
```

### 注入 JavaScrip 文件

在实际使用中，我建议你将自定义的 js 代码独立出来，存放在博客的 `source/js/` 目录下，然后在 `scripts` 里通过 `Injector.js` 统一引入。

例如，创建一个 `/source/js/Custom.js`，里面包含初始化的 js 代码，然后在 `/scripts/Injector.js` 里写入：

```js
hexo.extend.injector.register(
	'body_end',
	`
<script src="/js/Custom.js"></script>
`
);
```



## 参考链接 

> https://hexo.fluid-dev.com/posts/hexo-injector/