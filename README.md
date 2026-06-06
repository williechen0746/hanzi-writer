# 汉字书写和笔顺

展示汉字笔顺动画和笔顺图示的工具。

## 功能

- 输入任意汉字查看笔顺动画
- 显示笔画分解图
- 自动记忆最近查看的汉字
- 响应式设计，支持移动端
- **离线支持**：Service Worker 缓存笔顺数据，首次访问后可在离线状态使用

## 技术栈

- 原生 HTML/CSS/JavaScript
- [HanziWriter](https://github.com/chanind/hanzi-writer) - 笔顺动画
-思源宋体 (Noto Serif SC) - 回退字体

## 本地开发

```bash
node server.js
# 访问 http://localhost:8080
```

## 版权与许可

### 笔顺数据

笔顺数据来自 [hanzi-writer-data](https://github.com/chanind/hanzi-writer-data)，基于 [Make Me A Hanzi](https://github.com/skishore/makemeahanzi) 项目。

数据使用 **Arphic Public License** 授权：

> Copyright (C) 1999 Arphic Technology Co., Ltd.
>
> 字体数据可自由复制、分发和修改，但需：
> - 保留许可证文件不变
> - 修改版本必须同样免费公开
> - 保留对 Arphic Technology Co., Ltd. 的署名
>
> 完整许可证条款见 [hanzi-writer-data/ARPHICPL.TXT](hanzi-writer-data/ARPHICPL.TXT)

### 字体

- **Noto Serif SC**：Google Fonts，开源协议 [SIL Open Font License 1.1](https://scripts.sil.org/OFL)
- **其他系统字体**：操作系统内置字体

### HanziWriter

笔顺动画库通过 CDN 加载，遵循其开源协议。详见 [github.com/chanind/hanzi-writer](https://github.com/chanind/hanzi-writer)

## 部署

项目已配置 GitHub Pages，push 到 main 分支自动部署。

笔顺数据（hanzi-writer-data/）已包含在仓库中，随网站一同部署，支持离线访问。