---
title: MASM 5.0 下载安装与运行
date: 2022-12-24 00:00:00
abbrlink: 296524
categories:
  - 教程
tags:
  - Masm
  - asm
---

# MASM 5.0 下载安装与运行

下载 MASM 5.0 并安装

桌面打开 DOSBOX 

挂载存放 MASM 的目录：命令行输入`Mount E: E:\Code\Assembly\MASM`，这里是挂载到 E 盘

编写 demo.asm 文件放到 MASM 的根目录

进入我们刚刚挂载的磁盘

命令行输入 masm 命令，回车输入我们刚刚编写的 demo 文件名，四次回车，没有错误就可以开始下一步。

进行 link 操作，输入 `link demo.obj`，可以看到 MASM 根目录出现了个 **DEMO.OBJ** 文件。

接下来我们生成 exe 文件，命令行输入 demo.exe，两次回车

接着命令行输入 `demo.exe`，可以运行 exe 中的代码

输入 `debug demo.exe` 调试程序，再输入相关调试指令查看结果