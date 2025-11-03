# Symbol Endpoints

Symbol-scoped routes share the `/api/skalpha/symbols/{slug}` prefix unless noted otherwise. Slugs follow the aliasing rules described in [Request essentials](../guides/request-essentials.md), which cover allowed characters, pagination defaults, and common filter tokens.

## Corporate actions & ownership

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/symbols/{slug}/dividends` | Dividend history with grouping and sorting. | `slug` | `years`, `group_by`, `sort` | `group_by` accepts `year`, `fiscal_year`, or `month`; use `sort=-date` for reverse chronology. |
| `/api/skalpha/symbols/{slug}/splits` | Stock split history. | `slug` | — | Returns split ratios and their effective dates. |
| `/api/skalpha/symbols/{slug}/option-expirations` | Available option expiration dates. | `slug` | — | Useful for seeding downstream option chain requests. |
| `/api/skalpha/symbols/{slug}/payout_ratios` | Dividend payout ratios over time. | `slug` | — | Response maps each fiscal period (e.g., `2025-07-31`) to its ratio. |
| `/api/skalpha/symbols/{slug}/shares` | Share count and float breakdown. | `slug` | — | Breaks ownership out by holder type and surfaces `meta.totalShares`. |
| `/api/skalpha/symbols/{slug}/invested_etfs` | ETFs holding the symbol. | `slug` | — | Lists ETFs with allocation metadata when available. |

## Financials & sector metrics

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/symbols/{slug}/fundamentals_metrics` | Financial statements converted to a target currency. | `slug`, `period_type`, `statement_type`, `target_currency` | — | `period_type` ∈ `annual`, `quarterly`, `ttm`; `statement_type` ∈ `income-statement`, `balance-sheet`, `cash-flow-statement`; `target_currency` expects an ISO code. |
| `/api/skalpha/symbols/{slug}/earning_summaries` | Earnings summary widget data. | `slug` | `referral_type`, `referral_date` | Provide referral metadata to reproduce UI-context payloads. |
| `/api/skalpha/symbols/{slug}/sector_metrics` | Sector peer metrics for the symbol. | `slug` | `filter_fields` | Supply specific metric field identifiers to limit the response. |

## Research & filings

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/symbols/{slug}/analysis` | Analysis articles scoped to the symbol. | `slug` | `filter_related`, `filter_since`, `filter_until`, `id`, `include`, `isMounting`, `page_size`, `page_number` | Timestamp filters use Unix seconds; `id` acts as the cursor for pagination (max `page_size` 40). |
| `/api/skalpha/symbols/{slug}/related-analysis` | Related analysis feed. | `slug` | `filter_since`, `filter_until`, `id`, `include`, `isMounting`, `page_size`, `page_number` | Mirrors the primary analysis feed but surfaces contextually related content. |
| `/api/skalpha/symbols/{slug}/news` | Symbol-focused news feed. | `slug` | `filter_category`, `filter_since`, `filter_until`, `id`, `include`, `isMounting`, `page_size`, `page_number` | `filter_category` tokens come from the symbol news enum; `id` provides cursor-style pagination. |
| `/api/skalpha/symbols/{slug}/press-releases` | Press releases for the symbol. | `slug` | `filter_until`, `id`, `include`, `isMounting`, `page_size`, `page_number` | `filter_until` is a Unix timestamp upper bound; `page_size` tops out at 40. |
| `/api/skalpha/symbols/{slug}/sec-filings` | SEC filings tied to the symbol. | `slug` | `filter_filing_category`, `include`, `isMounting`, `page_size`, `page_number` | Use filing-category tokens (e.g., `all`, `10-k`); include `form_type` when you need form metadata. |
| `/api/skalpha/symbols/{slug}/transcripts` | Earnings call transcripts and events. | `slug` | `filter_only`, `filter_until`, `id`, `include`, `isMounting`, `page_size`, `page_number` | `filter_only` narrows to specific transcript types such as `transcripts` or `prepared_remarks`; pagination max 40. |
| `/api/skalpha/symbols/{slug}/faq` | Frequently asked questions. | `slug` | — | Returns curated investor Q&A content. |

## Ratings & community

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/symbols/{slug}/author_ratings` | Contributor ratings tied to the symbol. | `slug` | `include`, `page_size`, `page_number` | Use `include=article,author` to sideload related content (page size ≤ 40). |
| `/api/skalpha/symbols/{slug}/rating/periods` | Available author rating periods. | `slug` | `filter_periods` | Provide comma-separated integers between -23 and 23 to target specific lookbacks. |
| `/api/skalpha/symbols/{slug}/rating/histories` | Daily author rating history. | `slug` | `page_number` | Paginate through the history with `page_number`. |
| `/api/skalpha/symbols/{slug}/discussions` | Latest discussion threads. | `slug` | `include`, `page_size` | Include `subject`, `subject.author`, or `comments.user` to hydrate thread context (page size ≤ 40). |
| `/api/skalpha/symbols/{slug}/top_discussions` | Top discussion threads. | `slug` | `include`, `page_size`, `page_number` | Same includes as `/discussions`; supports pagination for leaderboard-style views. |

## Discovery & recommendations

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/symbols/{slug}/people_also_follow` | Symbols co-followed by the audience. | `slug` | `include` | Use `include=ticker` to sideload related ticker metadata. |
| `/api/skalpha/symbols/{slug}/suggested` | Suggested symbols to explore. | `slug` | `source_type`, `variation` | `source_type` tokens identify the recommendation engine (e.g., `correlations`, `similarities`); `variation` toggles experiment buckets. |
| `/api/skalpha/symbols/{slug}/peers/stocks/most_mentioned` | Stocks most mentioned with the symbol. | `slug` | — | Returns peers ranked by mention volume. |
| `/api/skalpha/symbols/{slug}/peers/stocks/people_follow` | Stocks co-followed with the symbol. | `slug` | — | Highlights audience overlap between tickers. |
| `/api/skalpha/symbols/{slug}/peers/etfs/exposure` | ETF peers sharing exposure. | `slug` | — | Lists ETFs and their exposure percentages. |

## Utility lookup

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/tickers` | Look up ticker metadata by slug. | `filter_slugs` | `include`, `include_gics`, `per_page` | Provide comma-separated slugs; set `include_gics=true` to add classification data (max `per_page` 100). |
