---
title: CSS 媒体查询
abbrlink: 8971
date: 2021-10-12 00:00:00
categories:
  - 概念
tags:
  - Css
  - 前端
  - 响应式设计
---

# CSS 媒体查询

## 写在前面

### 是什么

通过媒体查询（media），可以针对**不同的屏幕尺寸**设置不同的样式，比如计算机、打印机、电视、幻灯片等。

## 声明

`@media`：CSS 在手机、电脑、打印设备上都有效。

`@media screen` ：CSS 只在手机、电脑设备上有效。

`@media print`：CSS 只在打印设备上有效。

## 用法示例

```css
mobile-smallest() {
  @media (max-width: 413px) {
    {width:100px;};
  }
}

mobile-small() {
  @media (max-width: 567px) {
    {width:120px;};
  }
}

mobile() {
  @media (max-width: 767px) {
    {width:150px;};
  }
}

tablet-mobile() {
  @media (max-width: 991px) {
    {width:210px;};
  }
}

tablet-desktop() {
  @media (min-width: 768px) {
    {width:151px;};
  }
}

tablet() {
  @media (min-width: 768px) and (max-width: 991px) {
    {width:160px;};
  }
}

desktop() {
  @media (min-width: 992px) {
    {width:211;};
  }
}

desktop-large() {
  @media (min-width: 1200px) {
    {width:300	px;};
  }
}

desktop-largest() {
  @media (min-width: 1600px) {
    {width:400px;};
  }
}

```

