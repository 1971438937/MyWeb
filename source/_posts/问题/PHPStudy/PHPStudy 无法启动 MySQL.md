---
title: PHPStudy 无法启动 MySQL
categories:
  - 问题
tags:
  - PHPStudy
abbrlink: 36993
date: 2022-04-20 00:00:00
---

# PHPStudy 无法启动 MySQL

## 写在前面

以下错误场景所对应的解决方案仅限于 **MySQL 5.7.26** 版本，其他版本自测。

## 场景一

打开 PHPStudy，启动 MySQL 失败，但用 CMD 可以正常启动 MySQL。

### 解决方法

管理员运行 CMD 输入

```
net stop mysql
sc delete mysql
```

提示`[SC] DeleteService 成功`后，重新打开 PHPStudy，一般来说 MySQL 就可以启动了。

## 场景二

PHPStudy 中启动 MySQL 出现错误信息：

```sh
1045 access denied for user 'root'@'localhost' using password yes
```

### 解决方法

1. 停用 MySQL 服务（没启动可以省略）

     ```sh
     net stop mysql
     ```

2. 找到 MySQL 安装路径下的 `my.ini`

3. 打开 `my.ini` 找到 `[mysqld]` 字段然后在下面加上 

     ```
     [mysqld]
     skip_grant_tables
     ```

     `skip_grant_tables`表示启动 MySQL 服务时跳过权限表认证。

4. 启动数据库并修改密码

5. 刷新权限，执行命令： `flush privileges`

6. 再将的 **my.ini** 里的 **skip_grant_tables** 删掉，因为启动 MySQL 服务的时候不能让它跳过权限表认证。

7. 最后重启 MySQL 即可。
