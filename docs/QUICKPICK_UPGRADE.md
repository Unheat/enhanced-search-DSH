# ZCode-Inspired Quickpick Command Center Upgrade

This specification outlines the architectural upgrade of the Universal Palette for DeepSeek Harness Web, incorporating key design principles and UX patterns from [`zai-org/ZCode`'s Quickpick Command Center](https://github.com/zai-org/ZCode).

## Core Enhancements

### 1. Scope & Prefix Routing (`src/client/search-scope.ts`)
Users can quickly narrow search queries using explicit prefix triggers, mirroring ZCode's query scope conventions:
- `>` queries **Commands & Quick Actions**
- `#` queries **Conversations, Sessions & History**
- `@` queries **Workspaces & Directories**
- No prefix queries **All categories** simultaneously.

### 2. Interactive Scope Pills
An interactive scope filter bar is rendered directly below the search input:
- `[All]`
- `[> Commands]`
- `[# Sessions]`
- `[@ Workspaces]`
Clicking a pill automatically switches the active scope or populates the prefix in the draft input, keeping keyboard and pointer flows unified.

### 3. Match Text Highlighting (`src/client/HighlightedText.tsx`)
Following ZCode's `HighlightedMatchText`, matched words and subsequences in result titles and snippets are dynamically wrapped in `<mark>` elements using DSH design tokens (`.highlightMark`). This provides immediate visual feedback on why an item matched the query.

### 4. Search History Chips (`src/client/search-history.ts`)
- Recent search queries are persisted safely in `localStorage` (`dsh-universal-palette:search-history`), capped at 15 items and deduplicated case-insensitively.
- When opening the palette with an empty query, recent searches are displayed as clickable chips.
- Selecting a chip instantly populates the search query; a "Clear" button resets history.

### 5. Multi-Word Tokenized Fuzzy Matching (`src/client/ranking/fuzzy.ts`)
Upgraded the matcher to support multi-word queries (e.g. `music study` or `deepseek flash`):
- Every token must match across title, keywords, aliases, or snippet.
- Match ranges from all tokens are merged to power comprehensive highlight rendering.

### 6. Architectural Discipline (< 200 Lines Per Module)
In accordance with repository clean code standards:
- New modules (`search-scope.ts`, `search-history.ts`, `HighlightedText.tsx`) are single-responsibility, pure, and under 100 lines.
- Pure domain logic is decoupled from React UI rendering.
- 100% automated test coverage with 183 passing tests across 29 test suites.
