---
title: PHPStudy 启动服务器时报错
date: 2022-04-20
categories:
        - 问题
tags:
        - PHPStudy
---

# PHPStudy 启动服务器时报错

## 写在前面

以下错误场景所对应的解决方案仅限于 **MySQL 5.7.26** 版本，其他版本自测。

## 场景

使用 PHPStudy 启动 Apache 和 Nginx 的时候，启动失败，提示的错误信息为 `AH......`巴拉巴拉       

### 原因

这是因为 **PHPStudy 不能被安装到带有空格的文件夹中**，否则会导致 Apache 或 Nginx 无法启动。

### 解决方法

重新将 PHPStudy 安装到不带有空格的文件夹中即可。
