# Symbol Subresources

All symbol-specific routes hang off `/api/skalpha/symbols/{slug}` unless noted otherwise. Slugs follow the same validation rules as other endpoints (alphanumeric plus `: . _ -`). This page groups the 27 symbol endpoints into domains so you can quickly find the one that matches your use case.

## Corporate actions & ownership

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/symbols/{slug}/dividends` | Dividend history. | `slug` | `years`, `group_by`, `sort` | `group_by` accepts `year`, `fiscal_year`, or `month`. |
| `/api/skalpha/symbols/{slug}/splits` | Split history. | `slug` | — | Returns split ratios and effective dates. |
| `/api/skalpha/symbols/{slug}/option-expirations` | Available option expirations. | `slug` | — | Useful for constructing `/options/chain` queries. |
| `/api/skalpha/symbols/{slug}/payout_ratios` | Dividend payout ratios over time. | `slug` | — | Returns trailing payout ratios by period. |
| `/api/skalpha/symbols/{slug}/shares` | Share statistics. | `slug` | — | Includes share counts and float metrics. |

## Financial statements & sector metrics

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/symbols/{slug}/fundamentals_metrics` | Financial statements converted to a target currency. | `slug`, `period_type`, `statement_type`, `target_currency` | — | `period_type` ∈ `annual`, `quarterly`, `ttm`; `statement_type` ∈ `income-statement`, `balance-sheet`, `cash-flow-statement`. |
| `/api/skalpha/symbols/{slug}/sector_metrics` | Peer comparison metrics for the symbol’s sector. | `slug` | `filter_fields` | Provide specific metric field identifiers via `filter_fields` to reduce payload size. |
| `/api/skalpha/symbols/{slug}/earning_summaries` | Earnings summary cards. | `slug` | `referral_type`, `referral_date` | Use referral metadata to mirror the UI context that generated the summary. |
| `/api/skalpha/symbols/{slug}/invested_etfs` | ETFs with holdings in the symbol. | `slug` | — | Returns exposure weightings per ETF. |

## Research & content feeds

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/symbols/{slug}/analysis` | Analysis articles for the symbol. | `slug` | `filter_related`, `filter_since`, `filter_until`, `id`, `include`, `isMounting`, `page_size`, `page_number` | Timestamp filters use Unix seconds; cursor-based pagination uses `id`. |
| `/api/skalpha/symbols/{slug}/related-analysis` | Additional analysis related to the symbol. | `slug` | `filter_since`, `filter_until`, `id`, `include`, `isMounting`, `page_size`, `page_number` | Use when you need context beyond the primary analysis feed. |
| `/api/skalpha/symbols/{slug}/news` | Symbol-scoped news. | `slug` | `filter_category`, `filter_since`, `filter_until`, `id`, `include`, `isMounting`, `page_size`, `page_number` | `filter_category` accepts the symbol-news subset noted in the request guide. |
| `/api/skalpha/symbols/{slug}/press-releases` | Symbol press releases. | `slug` | `filter_until`, `id`, `include`, `isMounting`, `page_size`, `page_number` | `filter_until` is a Unix timestamp upper bound. |
| `/api/skalpha/symbols/{slug}/sec-filings` | SEC filings tied to the symbol. | `slug` | `filter_filing_category`, `include`, `isMounting`, `page_size`, `page_number` | `filter_filing_category` must match the general category token pattern. |
| `/api/skalpha/symbols/{slug}/transcripts` | Earnings call transcripts. | `slug` | `filter_only`, `filter_until`, `id`, `include`, `isMounting`, `page_size`, `page_number` | Use `filter_only` to restrict to specific transcript types (for example `prepared_remarks`). |

## Ratings, discussions, and community

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/symbols/{slug}/author_ratings` | Ratings from contributing authors. | `slug` | `include`, `page_size`, `page_number` | Paginated; `include` can sideload author profiles. |
| `/api/skalpha/symbols/{slug}/rating/histories` | Historical rating changes. | `slug` | `page_number` | Results are paginated with `page_number`. |
| `/api/skalpha/symbols/{slug}/rating/periods` | Available rating periods. | `slug` | `filter_periods` | `filter_periods` values must be between -23 and 23. |
| `/api/skalpha/symbols/{slug}/discussions` | Recent discussion threads. | `slug` | `include`, `page_size` | For a richer payload, include `primaryTickers` or `author`. |
| `/api/skalpha/symbols/{slug}/top_discussions` | Top discussions. | `slug` | `include`, `page_size`, `page_number` | Supports pagination for leaderboard-style views. |

## Discovery & recommendations

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/symbols/{slug}/people_also_follow` | Symbols followed by users who watch this one. | `slug` | `include` | Use `include` to load related ticker metadata. |
| `/api/skalpha/symbols/{slug}/suggested` | Suggested symbols to explore. | `slug` | `source_type`, `variation` | Useful for A/B-tested suggestion widgets. |
| `/api/skalpha/symbols/{slug}/peers/stocks/most_mentioned` | Most-mentioned stock peers. | `slug` | — | Returns peer symbols sorted by mention volume. |
| `/api/skalpha/symbols/{slug}/peers/stocks/people_follow` | Peer stocks followed by users. | `slug` | — | Highlights audience overlap. |
| `/api/skalpha/symbols/{slug}/peers/etfs/exposure` | ETF peers sharing exposure. | `slug` | — | Lists ETFs and exposure percentages. |

## Utilities

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/symbols/{slug}/faq` | Frequently asked questions for the symbol. | `slug` | — | Returns curated Q&A content. |
| `/api/skalpha/tickers` | Look up ticker metadata by slug. | `filter_slugs` | `include`, `include_gics`, `per_page` | `filter_slugs` accepts comma-separated slugs; `include_gics=false` is stripped automatically. |
