## 1. 项目初始化

- [x] 1.1 初始化 Astro 项目（`npm create astro@latest`），选择空白模板
- [x] 1.2 安装 Tailwind CSS v4 并配置橙/暖灰色主题（`tailwind.config.ts`）
- [x] 1.3 配置 `astro.config.mjs`（Markdown 支持、sitemap、部署适配）
- [x] 1.4 创建项目目录结构（`src/components/`, `src/content/`, `src/layouts/`, `src/pages/`, `public/`）

## 2. 全局布局与导航

- [x] 2.1 创建 `BaseLayout.astro`（全局外壳：Header + `<slot />` + Footer）
- [x] 2.2 创建 Header 组件（固定顶栏，Logo + 导航链接：首页/分类/工具/关于）
- [x] 2.3 实现移动端汉堡菜单（<768px 时折叠，点击展开下拉）
- [x] 2.4 创建 Footer 组件（版权信息 + 站点名称）
- [x] 2.5 全局 CSS 变量和 Tailwind 基础样式（字体、颜色、间距）

## 3. 首页

- [x] 3.1 创建首页 `index.astro`，使用 BaseLayout
- [x] 3.2 实现 Hero 区域（标题"不上班，也能自由赚钱" + 副标题 + 暖橙背景）
- [x] 3.3 实现分类筛选标签（全部/编程开发/设计创意/写作内容/营销增长）
- [x] 3.4 实现文章卡片列表（标题、描述、分类标签、日期、按日期降序）
- [x] 3.5 实现分类筛选交互（点击标签过滤文章，无需JS可选使用CSS anchor 或 Astro 静态路由）

## 4. 文章详情页

- [x] 4.1 配置 Astro Content Collections（`src/content/config.ts`，定义 article schema）
- [x] 4.2 创建文章动态路由 `src/pages/[category]/[slug].astro`
- [x] 4.3 实现 Markdown 渲染为 HTML（使用 `render()` 或 `<Content />` 组件）
- [x] 4.4 实现文章头部元信息（标题、日期、分类标签、阅读时长）
- [x] 4.5 实现文章目录自动生成（从 Markdown headings 提取，渲染为锚点链接列表）
- [x] 4.6 创建 SubscribeCTA 组件（邮箱输入框 + 订阅按钮 + 描述文字）
- [x] 4.7 实现相关文章推荐（同分类下最多3篇，排除当前文章）

## 5. 分类列表页

- [x] 5.1 创建分类动态路由 `src/pages/[category]/index.astro`
- [x] 5.2 显示分类名称、描述、文章计数
- [x] 5.3 列出该分类所有文章（标题 + 日期 + 简介，按日期降序）
- [x] 5.4 处理空分类状态（显示"该分类暂无文章，敬请期待！"）

## 6. 静态页面

- [x] 6.1 创建关于页 `src/pages/about.astro`（站点使命 + 创作者介绍）
- [x] 6.2 创建工具推荐页 `src/pages/tools.astro`（分类工具列表：接单平台/设计/写作/效率，含外链和联盟声明）

## 7. SEO 与性能

- [x] 7.1 实现全局 SEO 组件（`<title>`, `<meta description>`, Open Graph tags，根据页面类型动态变化）
- [x] 7.2 配置 `@astrojs/sitemap` 自动生成 sitemap.xml
- [x] 7.3 创建 `public/robots.txt`（Allow all + sitemap 链接）
- [x] 7.4 添加 favicon 和社交分享图（OG image）

## 8. 种子内容与部署

- [x] 8.1 编写首页引导文章 1-2 篇（Markdown + frontmatter）
- [ ] 8.2 配置 Vercel 部署（`@astrojs/vercel` 或静态导出 + 连接 Git 仓库）
- [ ] 8.3 验证部署结果（所有页面可访问、SEO 标签正确、移动端适配正常）
