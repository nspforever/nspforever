---
layout: post
title: "Windows上Python开发环境的安装与配置"
date: 2015-10-17 01:44:17 +0000
comments: true
categories:
---
## 安装 Python
1. 从https://www.python.org/downloads/windows/下载Windows x86-64 executable installer
2. 下载完成后，双击python-x.x.x-amd64.exe,并且勾选"Add Python x.x to PATH"，并点击"Install Now"
3. 当你看到下面这个对话框，则代表安装成功

## 安装 pip
1. 下载get-pip.py (https://bootstrap.pypa.io/get-pip.py)
2. 运行python get-pip.py

## 安装 virtualenvwrapper-win
1. pip install virtualenvwrapper-win
2. 更多关于virtualenvwrapper-win的信息，详见https://github.com/davidmarble/virtualenvwrapper-win/

## 安装 PyCharm
1. 访问https://www.jetbrains.com/pycharm/download/ 下载相应的PyCharm版本
2. 安装PyCharm，并接受默认选项

## 设置 PyCharm的字体大小
1. File->Settings->Apperance
2. 选中"Override default fonts by(not recommended)"，设置合适的字体大小
3. 在Settings对话框中选择Editor->General，勾选
    - "Change font size with Ctrol + Mouse Wheel"
    - "Highlight current scope"
4. 在Settings对话框中选择Editor->Apperance，勾选
    - "Show line numbers"
    - "Show method separators"
    - "Show white spaces"
5. 在Editor->Colors & Fonts->Font中
    - 在Theme下拉框中选择"Twilight"并点击"Save As..."按钮
    - 在字体下拉框中选择"Source Code Pro"，并设置合适的字体大小

