## ADDED Requirements

### Requirement: Per-page SEO meta tags
Every page SHALL include appropriate SEO meta tags (title, description, Open Graph).

#### Scenario: Homepage meta tags
- **WHEN** the homepage is loaded
- **THEN** the `<title>` tag is "自由赚钱指南 - 不上班也能赚钱"
- **AND** `<meta name="description">` contains the site description
- **AND** Open Graph tags (`og:title`, `og:description`, `og:type`) are present

#### Scenario: Article page meta tags
- **WHEN** an article page is loaded
- **THEN** the `<title>` tag is "{Article Title} - 自由赚钱指南"
- **AND** `<meta name="description">` uses the article's frontmatter description

### Requirement: Sitemap generation
The site SHALL auto-generate a sitemap.xml listing all published pages.

#### Scenario: Sitemap contains all articles
- **WHEN** `sitemap.xml` is accessed
- **THEN** it contains URLs for: homepage, all article pages, all category pages, about page, tools page
- **AND** each URL includes `<lastmod>` based on the page's last modification date

### Requirement: Robots.txt
The site SHALL include a robots.txt file allowing all crawlers and pointing to the sitemap.

#### Scenario: Robots.txt accessible
- **WHEN** `robots.txt` is accessed
- **THEN** it contains `User-agent: *` with `Allow: /`
- **AND** it references the sitemap URL

### Requirement: Privacy-friendly analytics
The site SHALL integrate a lightweight analytics solution that respects visitor privacy.

#### Scenario: Analytics script loads
- **WHEN** any page is loaded
- **THEN** the analytics script (Umami or Plausible) loads without cookies or personal data collection
- **AND** page views are tracked anonymously
