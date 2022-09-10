---
title: 安装 ThinkPHP
abbrlink: 33711
date: 2021-10-22 00:00:00
categories:
  - 教程
tags:
  - PHP
  - Frame
  - ThinkPHP


---

# 安装 ThinkPHP

## 写在前面

大二学 PHP，老师让我帮他安装一下 ThinkPHP（不得不说大学老师确实拉了些）。

### 主要内容

使用 Composer 来安装 ThinkPHP。

## 安装 Composer

安装 ThinkPHP 之前，先安装 [Composer](https://getcomposer.org/Composer-Setup.exe)。

安装 Composer 时开启 openssl 配置，目录为 `php.ini` 配置文件的目录中的 php.exe

比如 `D:\phpstudy_pro\Extensions\php\php7.3.4nts`

如果安装的时候报错，那么下面介绍了两个 error 的解决方法。

### 报错一

```
[Composer\Downloader\TransportException]
curl error 28 while downloading https://repo.packagist.org/packages.json: Timeout was reached
```

**解决方法**：修改全局文件（推荐）

```sh
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```

### 报错二

```
[InvalidArgumentException]
Could not find package topthink/think with version 6.0.x-dev.
```

切换 Composer 镜像地址：阿里云镜像

```sh
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

使用 `composer --version` 查看 composer 是否安装成功：



![查看 composer 版本](https://gallery.yxzi.xyz/galleries/2022/08/05/%E5%AE%89%E8%A3%85composer.png)

## 安装 Thinkphp 开发版

使用 Composer 下载开发版的 [ThinkPhp](https://www.kancloud.cn/manual/thinkphp6_0/1037479)

```sh
composer create-project topthink/think=6.0.x-dev tp
```

在上一步创建的 tp 文件夹中执行 `php think run`（确保当前目录有 think 文件）

![image-20220805165110612](https://gallery.yxzi.xyz/galleries/2022/08/05/php%20think%20ru.png)

最后打开浏览器输入 http://localhost:8000/，看到了以下内容，则说明 ThinkPHP 安装成功了。

![浏览器预览](https://gallery.yxzi.xyz/galleries/2022/08/05/%E6%B5%8F%E8%A7%88%E5%99%A8%E9%A2%84%E8%A7%88.png)
