---
title: 修改 Hexo NexT 主题动画速度
categories:
  - 教程
tags:
  - Hexo
abbrlink: 9570
date: 2022-08-10 00:00:00
---

# 修改 Hexo NexT 主题动画速度

## 写在前面

每次打开博客，都会有一段动画过渡效果，最开始也许会感觉没什么，但久而久之就会感觉这个动画播放的速度有些慢了。

最开始，我是打算在配置文件直接关闭动画效果，但后来发现关闭动画之后又会使博客有点生硬了，便开始打算直接从源码中修改，确实成功了，但这依旧不可取，因为我不可能每次更新博客都重新修改一次博客源码吧，最后，我用了 Hexo 的注入才完美的将这个问题解决。

### 主要内容

在不修改主题源码的情况下，使用 Hexo 注入修改 NexT 主题的动画速度。

### 环境准备

VS Code

NexT version 8.12.3

Windows 10

## 找到动画源码

找到`themes/next/source/js/src/motion.js`，这个`motion.js`就是动画效果相关的 JavaScrip 代码。

```
/* global CONFIG */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const doSaveScroll = () => {
    localStorage.setItem('bookmark' + location.pathname, window.scrollY);
  };

  const scrollToMark = () => {
    let top = localStorage.getItem('bookmark' + location.pathname);
    top = parseInt(top, 10);
    // If the page opens with a specific hash, just jump out
    if (!isNaN(top) && location.hash === '') {
      // Auto scroll to the position
      window.anime({
        targets  : document.scrollingElement,
        duration : 200,
        easing   : 'linear',
        scrollTop: top
      });
    }
  };
  // Register everything
  const init = function(trigger) {
    // Create a link element
    const link = document.querySelector('.book-mark-link');
    // Scroll event
    window.addEventListener('scroll', () => link.classList.toggle('book-mark-link-fixed', window.scrollY === 0), { passive: true });
    // Register beforeunload event when the trigger is auto
    if (trigger === 'auto') {
      // Register beforeunload event
      window.addEventListener('beforeunload', doSaveScroll);
      document.addEventListener('pjax:send', doSaveScroll);
    }
    // Save the position by clicking the icon
    link.addEventListener('click', () => {
      doSaveScroll();
      window.anime({
        targets : link,
        duration: 200,
        easing  : 'linear',
        top     : -30,
        complete: () => {
          setTimeout(() => {
            link.style.top = '';
          }, 400);
        }
      });
    });
    scrollToMark();
    document.addEventListener('pjax:success', scrollToMark);
  };

  init(CONFIG.bookmark.save);
});

```

其中 `duration`字段就是动画效果的持续时间，数值越大动画速度越慢。

但我并不建议你直接修改主题的源代码，因为这不方便我们后期升级主题。

## 注入到主题中

我全选复制上面 `themes/next/source/js/src/motion.js` 中的代码，将其粘贴到博客根目录下`source/js/motion.js`（没有目录的话则新建），然后在博客根目录下的`\scripts\Injector.js`中写入：

```js
hexo.extend.injector.register(
	'body_end',
	`
<script src="/js/motion.js"></script>
`
);
```

即可将 `source/js/motion.js` 注入到主题中，但现在我们还没有对其`motion.js`进行修改。

## 修改自定义的 motion.js

找到我们自定义的 `motion.js` ，对两个 `duration`字段后面的数字进行减少（越小越快），我这里是全部改成了 100。

下面是经过我简单修改后的文件，供参考：

```js
/* global NexT, CONFIG */
// 动画配置
NexT.motion = {};

NexT.motion.integrator = {
	queue: [],
	init: function () {
		this.queue = [];
		return this;
	},
	add: function (fn) {
		const sequence = fn();
		if (CONFIG.motion.async) this.queue.push(sequence);
		else this.queue = this.queue.concat(sequence);
		return this;
	},
	bootstrap: function () {
		console.log(this.queue);
		if (!CONFIG.motion.async) this.queue = [this.queue];
		this.queue.forEach((sequence) => {
			const timeline = window.anime.timeline({
				duration: 100,
				easing: 'linear',
			});
			sequence.forEach((item) => {
				if (item.deltaT) timeline.add(item, item.deltaT);
				else timeline.add(item);
			});
		});
	},
};

NexT.motion.middleWares = {
	header: function () {
		const sequence = [];

		function getMistLineSettings(targets) {
			sequence.push({
				targets,
				scaleX: [0, 1],
				duration: 100,
				deltaT: '-=200',
			});
		}

		function pushToSequence(targets, sequenceQueue = false) {
			sequence.push({
				targets,
				opacity: 1,
				top: 0,
				deltaT: sequenceQueue ? '-=200' : '-=0',
			});
		}

		pushToSequence('header.header');
		CONFIG.scheme === 'Mist' && getMistLineSettings('.logo-line');
		CONFIG.scheme === 'Muse' && pushToSequence('.custom-logo-image');
		pushToSequence('.site-title');
		pushToSequence('.site-brand-container .toggle', true);
		pushToSequence('.site-subtitle');
		(CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini') && pushToSequence('.custom-logo-image');

		document.querySelectorAll('.menu-item').forEach((targets) => {
			sequence.push({
				targets,
				complete: () => targets.classList.add('animated', 'fadeInDown'),
				deltaT: '-=200',
			});
		});

		return sequence;
	},

	subMenu: function () {
		const subMenuItem = document.querySelectorAll('.sub-menu .menu-item');
		if (subMenuItem.length > 0) {
			subMenuItem.forEach((element) => {
				element.classList.add('animated');
			});
		}
		return [];
	},

	postList: function () {
		const sequence = [];
		const { post_block, post_header, post_body, coll_header } = CONFIG.motion.transition;

		function animate(animation, selector) {
			if (!animation) return;
			document.querySelectorAll(selector).forEach((targets) => {
				sequence.push({
					targets,
					complete: () => targets.classList.add('animated', animation),
					deltaT: '-=100',
				});
			});
		}

		animate(post_block, '.post-block, .pagination, .comments');
		animate(coll_header, '.collection-header');
		animate(post_header, '.post-header');
		animate(post_body, '.post-body');

		return sequence;
	},

	sidebar: function () {
		const sidebar = document.querySelector('.sidebar');
		const sidebarTransition = CONFIG.motion.transition.sidebar;
		// Only for Pisces | Gemini.
		if (sidebarTransition && (CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini')) {
			return [
				{
					targets: sidebar,
					complete: () => sidebar.classList.add('animated', sidebarTransition),
				},
			];
		}
		return [];
	},

	footer: function () {
		return [
			{
				targets: document.querySelector('.footer'),
				opacity: 1,
			},
		];
	},
};

```

重新执行 `hexo s`，不出意外，打开浏览器即可发现动画的持续效果变快了。

