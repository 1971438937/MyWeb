---
title: Window 各版本激活方法
abbrlink: 46294
date: 2022-01-02 00:00:00
categories:
  - 教程
tags:
  - Windows
---

# Window 各版本激活方法

## 写在前面

这篇文章并不是给新买了电脑的朋友看的，因为一般新买的电脑所自带了 Windows 的，联网后就自动激活了，一般情况无需我们去手动激活。

最近我是在研究虚拟机，用的是 Vmware，过程中不乏会用到各种版本的 Windows 系统，因此，我想着将 Windows 各版本激活方法给汇总一下。

### 主要内容

额，目前只有 Windows 7/10 专业版/家庭版的激活方法。

## Windows 7 

激活密钥：很6K2KY-BFH24-PJW6W-9GK29-TMPWP

## Windows 10 专业版

管理员运行 CMD，依次输入

```sh
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
slmgr /skms kms.03k.org
slmgr /ato
```

## Windows 10 家庭版

管理员运行 CMD，依次输入：

```sh
slmgr /ipk TX9XD-98N7V-6WMQ6-BX7FG-H8Q99
slmgr /skms kms.03k.org
slmgr /ato
```

