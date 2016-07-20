---
layout: post
title: "在单元测试中进行依赖注入"
date: 2015-10-15 09:30:47 +0000
comments: true
categories:
---
####在单元测试中，通常用一下方法进行依赖注入:
1. **在构造函数传入一个接口实例，并把它保存在成员变量中**
2. **通过公有成员接受一个接口的实例**
3. **在调用被测试的方法之前用如下的方法之一接受一个接口的实例**
    - 通过方法的参数传入一个接口的实例(paramter injection)
    - 通过一个工厂类(factory class)
    - 通过一个本地的工厂方法(factory method)
    - 以上几种方法的组合

####Further Readings:
Inversion of Control(IoC) Principle
