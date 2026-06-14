## ADDED Requirements

### Requirement: Global site shell
The site SHALL provide a consistent shell comprising a fixed top navigation bar and a footer across all pages.

#### Scenario: Navigation bar renders on all pages
- **WHEN** user visits any page on the site
- **THEN** a top navigation bar is visible with the site logo, and links to: 首页, 分类, 工具, 关于
- **AND** the nav bar remains fixed at the top during scrolling

#### Scenario: Footer renders on all pages
- **WHEN** user visits any page on the site
- **THEN** a footer is visible containing copyright info and the site name "自由赚钱指南"

### Requirement: Responsive navigation
The navigation SHALL adapt to mobile screen sizes.

#### Scenario: Mobile navigation collapses to hamburger menu
- **WHEN** user visits the site on a viewport narrower than 768px
- **THEN** the nav links collapse into a hamburger menu toggle
- **AND** tapping the toggle reveals the nav links in a dropdown

### Requirement: Orange warm color theme
The site SHALL use a warm orange-based color scheme defined via Tailwind CSS.

#### Scenario: Consistent brand colors
- **WHEN** any page is rendered
- **THEN** the primary accent color is `#f97316` (orange-500)
- **AND** the background tint is `#fff7ed` (orange-50)
- **AND** text colors use warm gray `#78716c` (stone-500) for secondary text
