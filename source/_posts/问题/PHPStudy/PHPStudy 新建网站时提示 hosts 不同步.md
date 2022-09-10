---
title: PHPStudy 新建网站时提示 hosts 不同步
abbrlink: 15197
date: 2022-04-20 00:00:00
categories:
  - 问题
tags:
  - PHPStudy
---

# PHPStudy 新建网站时提示 hosts 不同步

## 写在前面

今天使用 PHPStudy 建站时，提示 host 不同步，随即上网查了查，很快找到了解决方案。

## 场景

PHPStudy 新建网站时，弹出 hosts 不同步的对话框，导致无法新建网站。

### 原因

大概率是 **C:\Windows\System32\drivers\etc** 路径中的 hosts 出现了以下问题：

- hosts 文件的后缀名不对，hosts 文件是没有后缀名的。
- hosts 文件中的内容为空。
- hosts 文件中的内容最底部没有添加网站域名。

### 解决方法

编辑 `C:\Windows\System32\drivers\etc`文件，添加网站 IP 和域名域名

```yaml
# Copyright (c) 1993-1999 Microsoft Corp.

# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.

# This file contains the mappings of IP addresses to host names. Each

# entry should be kept on an individual line. The IP address should

# be placed in the first column followed by the corresponding host name.

# The IP address and the host name should be separated by at least one

# space.

# Additionally, comments (such as these) may be inserted on individual

# lines or following the machine name denoted by a '#' symbol.

# For example:

# 102.54.94.97 rhino.acme.com # source server

# 38.25.63.10 x.acme.com # x client host

# 添加网站域名
127.0.0.1 localhost

127.0.0.1 a.com
```
