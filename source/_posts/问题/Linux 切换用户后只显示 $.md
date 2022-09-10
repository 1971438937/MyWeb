---
title: Linux 切换用户后只显示 $
abbrlink: 33526
date: 2022-08-03 00:00:00
categories:
  - 问题
tags:
  - Linux
---

# Linux 切换用户后只显示 $

只需要以管理员身份修改 /etc/passwd配置文件，你新建的用户用的是不是bash,不是的话就改过来
user1:x:1001:1001::/home/user1:/bin/sh

改成：
user1:x:1001:1001::/home/user1:/bin/bash