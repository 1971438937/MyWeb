---
title: Windows C 盘满了如何清理
abbrlink: 32117
date: 2022-09-09 00:00:00
categories:
  - 问题
tags:
  - Windows
---

# Windows C 盘满了如何清理

## hiberfile.sys 休眠文件

休眠文件 `hiberfile.sys` 会占据很大的空间。

### 清理方法：

以管理员身份运行 cmd，再执行命令：`powercfg -h off`，休眠文件便不再存在。

一般这个方法可以清理出 5G 左右的空间。

## apple 缓存

电脑上安装了 iTunes 的，这个软件的缓存文件非常大。

### 清理方法

打开路径`C:\Users\你的用户名\AppData\Roaming\Apple Computer` 

![image-20220909162710857](https://gallery.yxzi.xyz/galleries/2022/09/09/apple%20%E7%BC%93%E5%AD%98%E6%96%87%E4%BB%B6.png)

重点观察 MobileSync 和 iTunes 下的 iPhone Software Updates 文件夹，前者是手机备份，后者 IOS 安装文件。

如果你用手机连电脑更新过 iOS，那么你的电脑肯定会有很多缓存文件，因此，在我们更新完后，完全可以删除。

我这里一共大概有二十多个 G。