# Content & Media Endpoints

Content-oriented routes surface news, articles, press releases, filings, author stats, and curated feed cards. Every section below highlights the available paths, required inputs, and validation notes. Reuse the shared guidance in [Request essentials](../guides/request-essentials.md) for filter tokens, pagination limits, and query aliasing.

## News

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/breaking-news` | Latest market-moving headlines. | — | — | Short-cache response tuned for rapid refresh; no query parameters are accepted. |
| `/api/skalpha/news` | General news feed with filtering. | — | `fields_news`, `fields_tag`, `filter_category`, `filter_since`, `filter_until`, `include`, `isMounting`, `page_size`, `page_number` | `filter_category` must match a token from the category lists; timestamps are Unix seconds. |
| `/api/skalpha/news/trending` | Trending news items. | — | `filter_category`, `include`, `page_size`, `page_number` | Shares the same category tokens and pagination limits as the main news feed. |
| `/api/skalpha/news/{id}` | Fetch a specific news item. | `id` | `include`, `lang` | `id` is the upstream article identifier; optional `lang` switches localization when available. |
| `/api/skalpha/news-page-content-recommendations` | Related content for a news item. | — | `market_current_id`, `variation` | Use when building sidebars or recommendation units. |
| `/api/skalpha/full-news/trending` | Extended trending news with richer relationships. | — | `fields_news`, `fields_tag`, `filter_category`, `include`, `isMounting`, `page_size`, `page_number` | Same category and pagination rules; include fields lists to limit payload size. |
| `/api/skalpha/leading-news-stories` | Curated top stories. | — | — | Returns a small curated list without pagination. |

## Press releases

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/press-releases/{id}` | Retrieve a single press release. | `id` | `include` | `id` is the press release identifier. Use `include` to side-load tickers or authors. |
| `/api/skalpha/press-releases/{id}/comment-maps` | Comment thread metadata for a press release. | `id` | `include`, `sort` | `sort` follows the general sort token rules. |

## Articles

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/articles` | Article feed with category filters. | — | `fields_article`, `filter_category`, `filter_since`, `filter_until`, `include`, `isMounting`, `page_size`, `page_number` | Category tokens are shared with news; timestamps are Unix seconds. |
| `/api/skalpha/articles/trending` | Trending analysis articles. | — | `fields_article`, `fields_author`, `filter_category`, `include`, `page_size`, `page_number` | Include author fields to enrich author metadata in the response. |
| `/api/skalpha/articles/{id}` | Fetch a specific article. | `id` | `include`, `lang` | `id` is the article identifier; `lang` applies localized variants when available. |
| `/api/skalpha/articles/{id}/author` | Author details for an article. | `id` | `include` | Useful for populating author cards without a separate lookup. |
| `/api/skalpha/articles/{id}/comment-maps` | Comment aggregation for an article. | `id` | `include`, `sort` | `sort` uses the standard sort token format. |
| `/api/skalpha/article-page-content-recommendations` | Recommended reading for an article. | — | `article_id`, `variation` | Omit optional params to receive the default recommendation set. |

## Filings

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/filings/{id}` | Retrieve a filing record. | `id` | `include` | `id` is numeric. Include relationships (for example `ticker`) to enrich the payload. |
| `/api/skalpha/filings/{id}/comment-maps` | Filing comment aggregation. | `id` | `include`, `sort` | Mirrors the comment map behavior used by articles and press releases. |
| `/api/skalpha/filings/pdf/{id}` | Direct link metadata for filing PDFs. | `id` | — | Returns delivery details for the underlying PDF. |

## Authors

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/authors/{slug}` | Author profile. | `slug` | `include` | `slug` must match the author slug pattern; include relationships to load stats or social data. |
| `/api/skalpha/authors/{slug}/article/ticker-counts` | Count of tickers covered by an author. | `slug` | — | Returns aggregate counts by ticker. |
| `/api/skalpha/authors/{slug}/top-covered-symbols` | Top symbols associated with an author. | `slug` | — | Useful for highlighting frequent coverage areas. |

## Feed

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/feed` | Mixed content feed used on the homepage. | `models_list` | `all_list`, `any_tags_list`, `any_primary_list`, `include`, `page_size`, `page_number`, `filter_since`, `filter_until`, `custom_sort`, `without_list`, `isMounting` | `models_list` chooses the block types to return (for example `Article,MarketCurrent`). Timestamp filters use Unix seconds. |
