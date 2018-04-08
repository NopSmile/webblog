自从jdk9版本后，JDK的目录结构就发生变化，去除原有的jre目录。下面以JDK9作为分界线，分别JDK9版本前的配置，和JDK9版本后的配置。（安装过程省略）

(这部分配置其实个人感觉是为了最开始某些的标准)

* 公共部分
计算机-->属性-->高级系统设置-->高级-->环境变量
* JDK9以后版本（9-10）

```JAVA_HOME

D:\Java\jdk-10

JRE_HOME

D:\Java\jre10

PATH

.;%JAVA_HOME%\bin;%JRE_HOME%\bin

CLASSPATH

.;%JAVA_HOME%\lib;%JRE_HOME%\lib
```
* JDK9以前版本（1.5-1.8）

```
JAVA_HOME

D:\Java\jdk1.7.0_51

PATH

.;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin

CLASSPATH

.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar
```
----

个人觉得classpath其实是不用配置的，经过测试，环境没问题
引“不要被旧书误导了，jdk6以后的版本都不用再配CLASSPATH，而且也不建议去配。
理论上java安装完一个变量都不需要配置，只不过为了命令行敲起来方便，所以通常会把jdk/bin目录下加入到path变量中。JAVA_HOME这个变量的作用是一些基于java开发的工具会用到，比如tomcat,groovy,vertx.....，如果不用这个工具这个变量也可以免了。
不过通常为了方便以后用java开发的小工具，一般都会设置JAVA_HOME，然后把$JAVA_HOME/bin追加到PATH中”
