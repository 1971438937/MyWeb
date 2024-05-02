---
title: MySQL 错误集合
date: 2023-12-21
categories:
        - 数据库
tags:
        - SQL
        - MySQL


---

#  MySQL错误集合

## doesn't have a default value

```sql
SQLSTATE[HY000]: General error: 1364 Field 'id' doesn't have a default value (SQL: insert into images ....
```

### reason

1. MySQL 使用了严格验证方式
2. 位于数据库中的 images 表中的 id 字段无默认值

### Solution Method one

我们可以修改mysql 配置文件，有my.ini的就找这个文件，没有的就找my.cnf（位于 /ect/my.conf ）。
找到这个文件就去找 [mysqld] 这个配置
然后找

`sql-mode="STRICT_TRANS_TABLESNO_ENGINE_SUBSTITUTION`

改为：
`sql-mode=NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION`

### Solution Method two

1. 打开数据库管理工具（如 PhPMyAdmin 等）。

2. 选择你的数据库和对应的数据表（在这个例子中是 images 表）。

3. 找到`id`字段，点击编辑或修改按钮。

4. 在字段属性中，将`NULL`改为`AUTO_INCREMENT`，并设置一个初始值（例如 1），最后保存更改。

   ![doesn't have a default value](https://gallery.yxzi.xyz/galleries/2023/12/21/doesn't%20have%20a%20default%20value.png) 