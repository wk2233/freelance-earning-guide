## ADDED Requirements

### Requirement: Homepage displays article list
The homepage SHALL display a list of published articles with title, description, category, and date.

#### Scenario: Visitor sees articles on homepage
- **WHEN** a visitor navigates to the homepage (`/`)
- **THEN** a list of articles is displayed, each showing: title, brief description, category label, and publication date
- **AND** articles are sorted by publication date (newest first)

### Requirement: Homepage hero section
The homepage SHALL include a hero section with the site name and tagline.

#### Scenario: Hero section renders
- **WHEN** a visitor navigates to the homepage
- **THEN** a hero section is displayed with the heading "不上班，也能自由赚钱"
- **AND** a subtitle "从 0 到 1 掌握数字技能 · 实现时间和地点自由"
- **AND** the hero section uses the warm orange background (#fff7ed)

### Requirement: Category filter on homepage
The homepage SHALL provide category filter tabs to allow visitors to filter articles by category.

#### Scenario: Filter articles by category
- **WHEN** visitor clicks a category filter tab (e.g., "编程开发")
- **THEN** only articles belonging to that category are displayed
- **WHEN** visitor clicks the "全部" tab
- **THEN** all articles are displayed regardless of category
