## Context

这是一个从零开始构建的全新项目。用户是程序员但不想手写代码，由 AI 全权负责实现。当前目录为 OpenSpec 初始化后的项目骨架，无现有代码。目标是建立一个 Astro 静态内容网站，MVP 阶段以内容展示为主，后续逐步添加变现功能。

## Goals / Non-Goals

**Goals:**
- 建立可运行的 Astro 静态站点，包含首页、文章页、分类页、关于页、工具页
- Tailwind CSS 温暖活力风主题（橙色系）
- Markdown 作为内容源，易于 AI 维护
- SEO 友好（meta标签、sitemap、OG）
- 部署到 Vercel 免费托管
- 移动端响应式

**Non-Goals:**
- 用户注册/登录（MVP不包含）
- 支付/付费内容（MVP不包含）
- CMS后台（直接编辑Markdown文件）
- 社区/评论功能
- 搜索功能（MVP可加Algolia，非必需）

## Decisions

### 1. Astro 而非 Next.js

**决策**: 使用 Astro 作为静态站点生成器

**理由**:
- Astro 默认零 JavaScript，对内容站更友好，首屏加载更快
- Markdown 原生支持更好，无需额外配置 Contentlayer 等工具
- 代码量显著少于 Next.js，AI 更容易维护
- 内置 Islands 架构，后期需要交互时可引入 React/Vue/Svelte 组件
- 部署 Vercel 零配置

**替代方案考虑**: Next.js 更灵活但更重；Hugo/11ty 更快但模板语法学习成本高

### 2. Tailwind CSS 而非 CSS Module / Styled Components

**决策**: 直接使用 Tailwind CSS v4

**理由**:
- 原子化 CSS、响应式方便、与 Astro 集成无需额外配置
- 通过 tailwind.config.ts 定义品牌色板（橙色系），保证一致性
- 生产构建时自动 PurgeCSS，体积最小

### 3. 单栏文章布局

**决策**: 文章详情页采用极简单栏居中布局（max-width 680px）

**理由**:
- 聚焦阅读体验，减少干扰
- 移动端天然兼容
- 与"内容型"品牌调性一致
- 可在文章底部和中间嵌入订阅CTA，不影响阅读

### 4. 目录结构

```
/
├── public/           # 静态资源（favicon, robots.txt, 图片）
├── src/
│   ├── components/   # Astro/框架组件
│   ├── content/      # Markdown 文章（按分类分文件夹）
│   │   ├── programming/
│   │   ├── design/
│   │   ├── writing/
│   │   └── marketing/
│   ├── layouts/      # 页面布局组件
│   ├── pages/        # 路由页面
│   │   ├── index.astro          # 首页
│   │   ├── [category]/          # 分类列表
│   │   ├── [category]/[slug]/   # 文章详情
│   │   ├── about.astro          # 关于页
│   │   └── tools.astro          # 工具推荐
│   ├── styles/       # 全局样式
│   └── utils/        # 工具函数
├── astro.config.mjs
├── tailwind.config.ts
└── package.json
```

### 5. 内容管理策略

- 文章存储为 Markdown 文件，frontmatter 包含: title, description, category, date, tags, readingTime
- 文章 assets（图片等）放在 `src/content/<category>/assets/` 下
- 后续可迁移到 Content Collections API（Astro v2+）

### 6. 部署策略

- Vercel 连接 GitHub 仓库，push main 自动部署
- 自定义域名通过 Vercel DNS 或 CNAME 配置
- 无服务器功能、无环境变量（MVP阶段）

## Risks / Trade-offs

- **[风险] Markdown 文件管理 vs CMS**: 没有后台管理界面，写文章需要编辑 .md 文件 → 对程序员友好，对非技术人员不友好。当前用户是程序员，可接受
- **[风险] SEO 冷启动**: 新域名需要 3-6 个月才能获得搜索流量 → 配合社交媒体分发加速
- **[风险] 变现周期长**: 纯内容站从建站到盈利通常需要 6-12 个月 → 接受长期主义策略
- **[风险] Astro 社区 vs Next.js**: Astro 生态更小，后期复杂功能可能需要更多工作 → 但内容站很少超出 Astro 能力范围
