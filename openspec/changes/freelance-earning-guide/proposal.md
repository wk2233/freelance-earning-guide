## Why

市面上缺乏系统化、面向新手、覆盖数字技能全领域的「不上班赚钱」中文指南。同时，站长可以通过免费内容建立个人品牌和 SEO 流量资产，为后续数字产品变现打下基础。2026年AI工具普及降低了内容创作门槛，正是入局自由职业内容赛道的最佳时机。

## What Changes

- 从零构建一个基于 Astro 的静态内容网站「自由赚钱指南」
- 建立四大内容分类体系：编程开发、设计创意、写作内容、营销增长
- 实现内容型首页（文章列表 + 分类导航 + 简介）
- 实现极简阅读型文章详情页（单栏 + 目录 + 订阅CTA）
- 实现分类列表页、关于页、工具推荐页
- 部署到 Vercel（免费托管 + 自定义域名）
- 温暖活力风视觉设计（橙色系 + 暖灰）

## Capabilities

### New Capabilities

- `site-layout`: 全局布局组件（Header导航、Footer、移动端响应式）、Tailwind CSS主题配置（橙色系温暖风）、全局样式
- `homepage`: 首页文章列表（含分类标签筛选）、站点简介区、精选/最新文章排序
- `article-pages`: 文章详情页（Markdown渲染、文章目录、作者信息、订阅CTA组件）、文章元数据（分类、日期、阅读时长）
- `category-pages`: 分类列表页（按分类展示文章、分类描述）
- `static-pages`: 关于页（站长介绍+使命）、工具推荐页（外链+联盟链接）
- `seo-setup`: SEO meta标签、Open Graph、sitemap.xml、robots.txt、Umami/Plausible隐私友好分析

### Modified Capabilities

<!-- No existing capabilities to modify — this is a greenfield project -->

## Impact

- 全新项目，无现有代码依赖
- 技术栈：Astro + Tailwind CSS + Markdown/MDX
- 部署目标：Vercel（需配置自定义域名和 DNS）
- 无后端、无数据库、无用户系统（MVP范围）
