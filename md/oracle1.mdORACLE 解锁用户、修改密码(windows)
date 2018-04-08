### 【解锁用户、修改密码】

如果scott用户方案已安装但未解锁或未设置密码：
```
[oracle@oracle ~]$ sqlplus / as sysdba
SYS@PROD>alter user scott identified by tiger account unlock;
SYS@PROD>conn scott/tiger
Connected.
SCOTT@PROD>
```

### 【设置sqlplus命令提示符glogin.sql】

```
vi $ORACLE_HOME/sqlplus/admin/glogin.sql

define _editor=vi
set sqlprompt "_user'@'_connect_identifier>"
set linesize 100
set pagesize 100



```

关系型数据库命令类别：
* 数据操纵语言：DML: select; insert; delete; update; merge.
* 事务控制语言：TCL: commit; rollback; savepoint.
* 数据控制语言：DCL: grant; revoke.
