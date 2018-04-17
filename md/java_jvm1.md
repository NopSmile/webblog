###JVM(java virtual machine)相关知识(part 1)
* JVM启动流程
![](../images/jvm/java_jvm1.png 'java_jvm1.png')

* JVM基本结构
![](../images/jvm/java_jvm2.png 'java_jvm2.png')

#####方法区

* ######保存装载的类信息

  类型的常量池

  字段，方法信息

  方法字节码

* ######通常和永久区(Perm)关联在一起

#####java堆

  和程序开发密切相关

  应用系统对象都保存在Java堆中

  所有线程共享Java堆

  对分代GC来说，堆也是分代的

  GC的主要工作区间

![](../images/jvm/java_jvm3.png 'java_jvm3.png')

#####java栈

  线程私有

  栈由一系列帧组成（因此Java栈也叫做帧栈）

  帧保存一个方法的局部变量、操作数栈、常量池指针

  每一次方法调用创建一个帧，并压栈

* 局部变量表（包含参数和局部变量）

![](../images/jvm/java_jvm4.png 'java_jvm4.png')
注意：一个实例方法 第一个单元放this

* 函数调用组成帧

例如：下面递归函数（最后结果应该是内存溢出）
![](../images/jvm/java_jvm5.png 'java_jvm5.png')

* 操作数栈(javap -verbose class)
![](../images/jvm/java_jvm6.png 'java_jvm6.png')

* 栈上分配
![](../images/jvm/java_jvm7.png 'java_jvm7.png')

![](../images/jvm/java_jvm8.png 'java_jvm8.png')

  小对象（一般几十个bytes），在没有逃逸的情况下，可以直接分配在栈上

  直接分配在栈上，可以自动回收，减轻GC压力

  大对象或者逃逸对象无法栈上分配

* 栈、堆、方法区交互
![](../images/jvm/java_jvm9.png 'java_jvm9.png')

* 内存模型

  每一个线程有一个工作内存和主存独立

  工作内存存放主存中变量的值的拷贝
  ![](../images/jvm/java_jvm10.png 'java_jvm10.png')

  ![](../images/jvm/java_jvm11.png 'java_jvm11.png')

  * volatile
```
public class VolatileStopThread extends Thread{
private volatile boolean stop = false;
public void stopMe(){
stop=true;
}

public void run(){
int i=0;
while(!stop){
i++;
             }
           System.out.println("Stop thread");
}

public static void main(String args[]) throws InterruptedException{
VolatileStopThread t=new VolatileStopThread();
t.start();
Thread.sleep(1000);
t.stopMe();
Thread.sleep(1000);
}
}
结果：
没有volatile -server 运行 无法停止

------------------------------------

volatile 不能代替锁
一般认为volatile 比锁性能好（不绝对）

选择使用volatile的条件是：
语义是否满足应用

```

* 可见性

一个线程修改了变量，其他线程可以立即知道

* 保证可见性的方法

  volatile

  synchronized （unlock之前，写变量值回主存）

  final(一旦初始化完成，其他线程就可见)

* 有序性

  在本线程内，操作都是有序的

  在线程外观察，操作都是无序的。（指令重排 或 主内存同步延时）

* 指令重排

  ######线程内串行语义

  * 写后读	a = 1;b = a;	写一个变量之后，再读这个位置。
  * 写后写	a = 1;a = 2;	写一个变量之后，再写这个变量。
  * 读后写	a = b;b = 1;	读一个变量之后，再写这个变量。
  * 以上语句不可重排
  * 编译器不考虑多线程间的语义
  * 可重排： a=1;b=2;

* 指令重排 – 破坏线程间的有序性
  ![](../images/jvm/java_jvm12.png 'java_jvm12.png')

* 指令重排 – 保证有序性的方法(synchronized)
  ![](../images/jvm/java_jvm13.png 'java_jvm13.png')

* 指令重排的基本原则

  * 序顺序原则：一个线程内保证语义的串行性
  * volatile规则：volatile变量的写，先发生于读
  * 锁规则：解锁(unlock)必然发生在随后的加锁(lock)前
  * 传递性：A先于B，B先于C 那么A必然先于C
  * 线程的start方法先于它的每一个动作
  * 线程的所有操作先于线程的终结（Thread.join()）
  * 线程的中断（interrupt()）先于被中断线程的代码
  * 对象的构造函数执行结束先于finalize()方法

* 解释运行
  * 解释执行以解释方式运行字节码
  * 解释执行的意思是：读一句执行一句
* 编译运行（JIT）
  * 将字节码编译成机器码
  * 直接执行机器码
  * 运行时编译
  * 编译后性能有数量级的提升

总结：
* JVM启动流程
* JVM基本结构
* 内存模型
* 编译和解释运行的概念
