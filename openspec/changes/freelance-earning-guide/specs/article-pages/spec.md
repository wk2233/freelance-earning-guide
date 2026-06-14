## ADDED Requirements

### Requirement: Article detail page renders from Markdown
Each article SHALL have a dedicated detail page that renders its Markdown content as styled HTML.

#### Scenario: Visitor reads an article
- **WHEN** a visitor navigates to an article URL (e.g., `/programming/remote-freelance-guide`)
- **THEN** the page displays the article title, publication date, reading time, and category
- **AND** the Markdown body is rendered as formatted HTML (headings, lists, links, code blocks, images)

### Requirement: Article table of contents
Each article SHALL include an auto-generated table of contents based on the Markdown headings.

#### Scenario: TOC renders from headings
- **WHEN** an article page is loaded
- **THEN** a table of contents is displayed near the top of the article
- **AND** TOC items link to their corresponding heading sections within the page

### Requirement: Article metadata in frontmatter
Each article Markdown file SHALL include structured frontmatter with title, description, category, date, and optional tags.

#### Scenario: Valid article frontmatter
- **WHEN** a Markdown article file is parsed
- **THEN** the frontmatter contains: `title` (string), `description` (string), `category` (one of: programming, design, writing, marketing), `date` (YYYY-MM-DD format)
- **AND** optional fields: `tags` (array of strings), `readingTime` (number in minutes, auto-calculated if omitted)

### Requirement: Subscribe CTA on article pages
Each article page SHALL include an email subscription call-to-action component.

#### Scenario: Subscribe CTA renders at article bottom
- **WHEN** visitor scrolls to the bottom of an article
- **THEN** a subscribe section is displayed with an email input field and a "订阅" button
- **AND** the CTA text encourages visitors to subscribe for weekly freelancing tips

### Requirement: Related articles
Each article page SHALL display links to related articles from the same category.

#### Scenario: Related articles shown
- **WHEN** an article page is loaded
- **THEN** a "相关文章" section is displayed below the article content
- **AND** it lists up to 3 other articles from the same category (excluding the current article)
