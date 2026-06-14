## ADDED Requirements

### Requirement: Category listing page
Each content category SHALL have a dedicated listing page showing all articles in that category.

#### Scenario: Visitor browses a category
- **WHEN** a visitor navigates to a category URL (e.g., `/programming`)
- **THEN** the page displays the category name and description
- **AND** lists all articles belonging to that category sorted by date (newest first)

### Requirement: Category page shows article count
The category page SHALL display the total number of articles in that category.

#### Scenario: Article count visible
- **WHEN** a category page is loaded
- **THEN** the page shows the count of articles (e.g., "共 5 篇文章")

### Requirement: Empty category state
When a category has no articles, the page SHALL show a clear empty state message.

#### Scenario: No articles in category
- **WHEN** a category page is loaded for a category with zero articles
- **THEN** a message "该分类暂无文章，敬请期待！" is displayed
