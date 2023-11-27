---
id: installation
title: 安装
sidebar_label: 安装
---

## 本地运行指南

要在本地运行Pictode，只需按照以下步骤操作：

1. 首先，将Pictode克隆到本地：

```shell
git clone https://github.com/JessYan0913/pictode.git
```

2. 进入项目目录并安装依赖：

> 请确保您的Node版本在 16.14.0 以上。

```shell
cd pictode

npm i -g pnpm # 如果已安装pnpm可跳过

pnpm bootstrap
```

3. 启动画板项目：

```shell
pnpm pictode
```

4. 项目启动后，打开浏览器访问 `http://localhost:8800/#/` 即可进入画板。

## 无样式嵌入

Pictode 除了仓库中的画板应用外，最大的亮点的是支持项目嵌入。您可以根据自己的需求定制专属画板，Pictode支持无样式引入。

### 获取Pictode

探索Pictode，您只需在Npm仓库中搜索 `@pictode`，即可轻松找到相关的依赖包。其中，最为核心的是 `@pictode/core` 包，内含了整合了 `Konva.js` 和 `Pictode` 应用类的关键功能。让您尽情享受绘图编辑的便捷和灵活！

```shell
npm i @pictode/core
```

### 挂载画布到页面

安装`@pictode/core`后，实例化Pictode的`App`类。

```shell
import { App } from '@pictode/core';

const app = new App();
```

挂载画布到容器节点即可

```html

<div id="container"></div>

<script>
  const containerElement = document.queryE
</script>
```