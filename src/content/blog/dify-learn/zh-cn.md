---
title: Dify学习(1)
pubDate: 2026-08-026
description: Dify的安装以及使用
category: Dify学习
image: ""
draft: true
slugId: XiZi/dify-learn
---



# Dify能做什么



## 一、聊天助手

快速构建具备上下文理解能力的对话机器人，支持多轮对话。


## 二、知识库（RAG）

轻松接入企业私有文档，实现基于自有知识的精准回答。


## 三、工作流（Workflow）

通过可视化画布编排复杂的业务逻辑，实现任务自动化。


## 四、Agent智能体

构建能够自主调用工具、拆解并完成复杂任务的智能助手。



# Dify的安装

## Step1：安装Docker Desktop

:::important

注意：Windows和MAC系统的区分

:::



## Step2：克隆Dify仓库

本质：下载Dify文件夹


## Step3：Docker环境配置

复制文件：

```bash
cp.env.example.env
```


## Step4：启动Dify

执行命令：

```bash
docker compose up -d
```


## Step5：初始化登录

注册及登录：邮箱账号和密码设置



# docker设置相关



## 一、设置镜像

```bash
"registry-mirrors": [
  "https://docker.1panelproxy.com",
  "https://2a6bf1988cb6428c877f723ec7530dbc.mirror.swr.myhuaweicloud.com",
  "https://docker.m.daocloud.io",
  "https://hub-mirror.c.163.com",
  "https://mirror.baidubce.com",
  "https://your_preferred_mirror",
  "https://dockerhub.icu",
  "https://docker.registry.cyou",
  "https://docker-cf.registry.cyou",
  "https://dockercf.jsdelivr.fyi",
  "https://docker.jsdelivr.fyi",
  "https://dockertest.jsdelivr.fyi",
  "https://mirror.aliyuncs.com",
  "https://dockerproxy.com",
  "https://mirror.baidubce.com",
  "https://docker.m.daocloud.io",
  "https://docker.nju.edu.cn",
  "https://docker.mirrors.sjtug.sjtu.edu.cn",
  "https://docker.mirrors.ustc.edu.cn",
  "https://mirror.iscas.ac.cn",
  "https://docker.rainbond.cc"
]
```


## 二、验证 docker

```bash
docker --version
```



# 运行Dify



## 一、克隆Dify仓库

```bash
git clone https://github.com/langgenius/dify.git
```


## 二、进入 Docker 目录（环境配置）

- 进入到dify文件夹下docker文件夹，将.env.example文件名改为.env
  > 切换到dify/docker文件夹下去操作，可以使用rename.env.example.env
- 也可以输入下面命令:
```bash
cd dify/docker
cp .env.example .env
```


## 三、启动Dify

- 先进入dify文件夹，找到docker文件夹，然后进入终端，再去执行下面的命令
- 输入下面的命令
```bash
docker compose up -d
```


## 四、访问应用

- 登陆: http://localhost/signin; 设置好邮箱、用户名、密码就可以登陆了