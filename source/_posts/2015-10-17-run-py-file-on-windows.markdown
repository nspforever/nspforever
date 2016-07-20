---
layout: post
title: "Run .py file on windows"
date: 2015-10-17 05:08:51 +0000
comments: true
categories:
---
```
C:\>assoc .py=Python
C:\>ftype Python="%VIRTUAL_ENV%\scripts\python.exe %1 %*"
```