# Reference & Discovery Endpoints

These helper endpoints power dashboards, screeners, and search workflows. Follow the shared validation rules in [Request essentials](../guides/request-essentials.md) for aliases, enums, and pagination.

## Metrics & grades

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/metrics` | Core metric snapshots keyed by slug. | `filter_fields`, `filter_slugs` | `minified` | Fields and slugs are comma-separated; set `minified=true` to drop verbose metadata. |
| `/api/skalpha/ticker-metric-grades` | Quant, dividend, ETF, and REIT grades. | `filter_fields`, `filter_slugs` | `filter_algos`, `minified` | `filter_algos` accepts the predefined list (`main_quant`, `dividends`, `etf`, `reit`, `reit_dividend`). |
| `/api/skalpha/fundamental-metrics` | Fundamental ratios by numeric ticker ID. | `ticker_ids` | `fields_list` | `ticker_ids` is a comma-separated list of SA ticker IDs; use `fields_list` to limit the response. |

## Calendars

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/earnings-calendar/days` | Daily earnings calendar view. | — | `filter_start_date`, `filter_end_date`, `filter_with_rating`, `filter_currency` | Dates accept ISO strings; `filter_with_rating=false` is removed automatically. |
| `/api/skalpha/earnings-calendar/tickers` | Earnings calendar focused on tickers. | `filter_selected_date` | `filter_with_rating`, `filter_currency` | `filter_selected_date` is required; other toggles behave like the days endpoint. |

## Screeners

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/screener-filters` | Filter metadata for a screener type. | `type`, `variation` | — | `type` must be `stock` or `etf`; `variation` selects the filter bundle. |
| `/api/skalpha/screeners` | Public screener directory. | `type` | — | Returns available screener definitions for the specified universe. |
| `/api/skalpha/screeners/{id}` | Screener definition by ID. | `id` | — | Useful for hydrating saved screeners. |
| `/api/skalpha/screener-results` (POST) | Execute a screener. | JSON body | — | See [Screener request body](../guides/request-essentials.md#screener-request-body) for required fields and validation. |

## Search

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/search` | Autocomplete across symbols, indices, and crypto. | `term` | `limit`, `symbols`, `indices`, `crypto`, `actively_traded`, `currency` | Toggle parameters accept `0` or `1`; `currency` expects an ISO code. |
| `/api/skalpha/searches` | Global search with filters. | — | `filter_query`, `filter_type`, `filter_list`, `filter_period`, `page_size`, `page_number` | `filter_type` accepts comma-separated scopes from the standard search list. |
| `/api/skalpha/searches/{scope}` | Scoped search collections. | `scope` | `filter_query`, `filter_list`, `filter_period`, `filter_tags`, `filter_defunct`, `page_size`, `page_number` | `scope` must match one of the allowed values (`all`, `articles`, `headlines`, `news`, `pages`, `people`, `symbols`). |
