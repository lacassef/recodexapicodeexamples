# Request Essentials

Use this guide as the single source of truth for how the SKAlpha proxy validates and forwards incoming requests. It covers query aliasing, accepted token formats, enum values, and screener payload rules.

## Query alias translation

Many upstream endpoints expect array-style keys (for example `filter[category]`). The proxy accepts flatter aliases and rewrites them. Use the left column when calling `/api/skalpha`; the proxy emits the right column upstream.

| Acceptable query key | Forwarded key | Notes |
| --- | --- | --- |
| `all_list` | `all[]` | Comma-separated list becomes repeated `all[]` entries. |
| `any_primary_list` | `any_primary[]` | Comma-separated list. |
| `any_tags_list` | `any_tags[]` | Comma-separated list. |
| `fields_article` | `fields[article]` | Use comma-separated field names. |
| `fields_author` | `fields[author]` | Use comma-separated field names. |
| `fields_list` | `fields[]` | Comma-separated list. |
| `fields_news` | `fields[news]` | Comma-separated field names. |
| `fields_tag` | `fields[tag]` | Comma-separated field names. |
| `filter_algos` | `filter[algos][]` | Each algorithm token becomes its own `filter[algos][]`. |
| `filter_category` | `filter[category]` | See [Filter categories](#filter-categories). |
| `filter_currency` | `filter[currency]` | ISO currency code. |
| `filter_defunct` | `filter[defunct]` | Boolean gate; `false` is stripped (see below). |
| `filter_end_date` | `filter[end_date]` | Date in accepted formats. |
| `filter_fields` | `filter[fields]` | Comma-separated field names. |
| `filter_for_date` | `filter[for_date]` | Date in accepted formats. |
| `filter_list` | `filter[list]` | Used by search. |
| `filter_only` | `filter[only]` | Restrict transcript subsets. |
| `filter_period` | `filter[period]` | Identifier token (see symbol ratings). |
| `filter_periods` | `filter[periods][]` | Comma-separated integers. |
| `filter_query` | `filter[query]` | Non-empty string. |
| `filter_related` | `filter[related]` | Identifier token. |
| `filter_selected_date` | `filter[selected_date]` | Date in accepted formats. |
| `filter_show_by` | `filter[show_by]` | Accepts `day`, `week`, or `month`. |
| `filter_since` | `filter[since]` | Unix timestamp; zeros are dropped. |
| `filter_slugs` | `filter[slugs]` | Comma-separated slugs. |
| `filter_start_date` | `filter[start_date]` | Date in accepted formats. |
| `filter_tags` | `filter[tags][]` | Comma-separated tokens. |
| `filter_type` | `filter[type]` | Accepts specific search scopes. |
| `filter_until` | `filter[until]` | Unix timestamp; zeros are dropped. |
| `include_gics` | `include[gics]` | Boolean gate; `false` is stripped. |
| `metrics_list` | `metrics[]` | Comma-separated metric identifiers. |
| `models_list` | `models[]` | Comma-separated feed models. |
| `page_number` | `page[number]` | Positive integer. |
| `page_size` | `page[size]` | Between 1 and 40. |
| `referral_date` | `referral[date]` | Date in accepted formats. |
| `referral_type` | `referral[type]` | Identifier token. |
| `slugs_list` | `slugs[]` | Comma-separated slugs. |
| `ticker_ids` | `ticker_ids[]` | Comma-separated positive integers. |
| `without_list` | `without[]` | Comma-separated tokens. |

If you pass the bracketed form directly, it is forwarded unchanged.

## Validation rules by data type

- **Slugs** (`slug`, `sa_slugs`, `slugs_list`, `filter_slugs`): alphanumeric plus `: . _ -`. Empty values are rejected.
- **Numeric identifiers** (`sa_ids`, `ticker_id`, `ticker_ids`, `filter_periods`): positive integers only. Lists of IDs are split on commas.
- **Dates**: Accepts ISO `YYYY-MM-DD`, relaxed `YYYY-M-D`, many common RFC 822/3339 variants, or Unix epoch seconds. When providing date ranges use the same format consistently.
- **Timestamps** (`filter_since`, `filter_until`): Unix epoch in seconds. A value of `0` is ignored.
- **Booleans**: Accepts `true`, `false`, `1`, or `0`. For gating toggles (`filter_defunct`, `filter_with_rating`, `include_gics`) sending `false` removes the parameter entirely so you do not inadvertently enable a filter.
- **Comma-separated lists**: Any alias that forwards to a `[]` key (`metrics_list`, `fields_list`, `models_list`, etc.) accepts comma-separated tokens. Blanks are skipped.
- **Sorting**:
  - `sort` parameters must match `^-?[A-Za-z0-9_.:-]+$`.
  - Screener sorts must include both `fieldName` and `direction` (`asc` or `desc`).
- **Pagination**:
  - `page[size]` (`page_size`) is clamped to 1–40.
  - `page[number]` (`page_number`) must be a positive integer.
  - `per_page` query parameters accept 1–100 items unless otherwise noted in the endpoint.
  - Screener result bodies allow `per_page` up to 1000.
- **Symbol fundamentals**:
  - `group_by`: `year`, `fiscal_year`, or `month`.
  - `period_type`: `annual`, `quarterly`, or `ttm`.
  - `statement_type`: `income-statement`, `balance-sheet`, `cash-flow-statement`.
  - `scope` (search scopes): `all`, `articles`, `headlines`, `news`, `pages`, `people`, `symbols`.
  - `filter_algos`: `main_quant`, `dividends`, `etf`, `reit`, `reit_dividend`.
  - `period` (chart durations): `1D`, `5D`, `1M`, `6M`, `1Y`, `3Y`, `5Y`, `10Y`, `YTD`, `MAX`.
  - `filter_show_by`: `day`, `week`, or `month`.
  - `relative_periods`: comma-separated integers between -23 and 23.
  - `return_window`: positive integer (days).
- **Search filters**:
  - `filter_type`: comma-separated combination of `people`, `symbols`, `pages`, `shortcuts`.
  - `filter_defunct`: boolean toggle stripped when set to `false`.
- **Currencies** (`filter_currency`, `target_currency`): three-letter uppercase ISO codes.

## Filter categories

Use the following tokens with `filter_category` or related parameters. Values are case-insensitive.

### Article categories

`dividends`, `dividends::dividend-ideas`, `dividends::dividend-quick-picks`, `dividends::dividend-strategy`, `dividends::reits`, `editors-picks`, `education::401k`, `education::cryptocurrency`, `education::dividends`, `education::etf`, `education::investing`, `education::portfolio-management`, `etfs-and-funds`, `etfs-and-funds::closed-end-funds`, `etfs-and-funds::etf-analysis`, `etfs-and-funds::mutual-funds`, `investing-strategy`, `investing-strategy::fixed-income`, `investing-strategy::portfolio-strategy`, `investing-strategy::retirement`, `latest-articles`, `podcast`, `market-outlook`, `market-outlook::commodities`, `market-outlook::cryptocurrency`, `market-outlook::economy`, `market-outlook::forex`, `market-outlook::gold-and-precious-metals`, `market-outlook::todays-market`, `sectors::communication-services`, `sectors::consumer-staples`, `sectors::energy`, `sectors::real-estate`, `stock-ideas`, `stock-ideas::basic-materials`, `stock-ideas::consumer-goods`, `stock-ideas::financial`, `stock-ideas::healthcare`, `stock-ideas::industrial-goods`, `stock-ideas::ipos`, `stock-ideas::long-ideas`, `stock-ideas::quick-picks`, `stock-ideas::technology`, `stock-ideas::utilities`.

### News categories

`earnings::earnings-news`, `market-news::all`, `market-news::buybacks`, `market-news::commodities`, `market-news::consumer`, `market-news::crypto`, `market-news::dividend-funds`, `market-news::dividend-stocks`, `market-news::earnings`, `market-news::energy`, `market-news::financials`, `market-news::global`, `market-news::guidance`, `market-news::healthcare`, `market-news::ipos`, `market-news::issuance`, `market-news::m-a`, `market-news::market-pulse`, `market-news::mlps`, `market-news::notable-calls`, `market-news::on-the-move`, `market-news::politics`, `market-news::reits`, `market-news::spacs`, `market-news::technology`, `market-news::trending`, `market-news::top-news`, `market-news::us-economy`.

### Symbol news categories

`dividend_news`, `earnings_news`, `m_n_a_news`, `news_card`.

## Screener request body

POST `/api/skalpha/screener-results` accepts JSON payloads with the following constraints:

- Required fields: `filter`, `page`, `per_page`, `sort` (use `null` when unsorted), `total_count`, `type`.
- `type` must be `stock` or `etf`.
- `page` starts at 1.
- `per_page` must be between 1 and 1000.
- `filter` must be a non-null JSON object. Each entry may include optional `in` and `not_in` arrays but not both simultaneously. Arrays must contain meaningful values (no empty strings or nulls).
- `sort`, when not `null`, must be an object containing both `fieldName` and `direction` (`asc` or `desc`) and may include additional fields that the upstream endpoint understands.
- `total_count` is a boolean; set it to `true` when you need aggregate counts.

## Handling errors

All error responses use the `{"error": {...}}` envelope described in the OpenAPI components:

- **400 Bad Request** — validation failed locally. The message highlights the offending parameter or body field.
- **502 Bad Gateway** — the upstream service failed or responded with an unexpected status.

Use the `request_id` in the payload when coordinating with support teams.
