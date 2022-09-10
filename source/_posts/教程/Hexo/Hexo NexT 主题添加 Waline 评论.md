---
title: Hexo NexT 主题添加 Waline 评论
abbrlink: 48467
date: 2022-08-10 00:00:00
categories:
  - 教程
tags:
  - Hexo
---

# Hexo NexT 主题添加 Waline 评论

需要注意 Next 主题源码中的 layout.njk 中是否有 `{{- next_inject('head') }}` 和 `{{- next_inject('bodyEnd') }}`这两条语句，若没有，则会影响 Waline 的显示。
