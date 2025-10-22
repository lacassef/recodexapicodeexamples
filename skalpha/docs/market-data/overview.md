# Market Data Endpoints

These endpoints deliver quotes, historical prices, options, market status, charts, ETF performance, and aggregated symbol metrics. Combine them with the validation hints in [Request essentials](../guides/request-essentials.md) to avoid proxy-side rejections.

## Prices

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/historical-prices` | End-of-day price history. | `slug` | `slugs_list`, `from`, `to`, `sort`, `filter_show_by`, `filter_for_date` | `from`/`to` accept dates or timestamps; `filter_show_by` accepts `day`, `week`, or `month`. |

## Intraday & derivatives

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/quotes/realtime` | Real-time snapshot quotes. | — | `sa_ids`, `sa_slugs` | Provide at least one of `sa_ids` or `sa_slugs`; values are comma-separated. |
| `/api/skalpha/options/chain` | Options chain for a ticker. | `ticker_id`, `expiration_date` | — | `expiration_date` must be a valid date; `ticker_id` is the numeric Seeking Alpha ID. |

## Market overview

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/market-open` | Current US trading session status. | — | — | Returns `marketOpen` and next open/close timestamps. |
| `/api/skalpha/day-watch` | Intraday movers snapshot. | — | `sort` | Sort token follows standard rules (for example `percent_change`). |
| `/api/skalpha/global-indices` | Major global indices. | — | `include` | Use `include` to sideload related tickers when needed. |

## Charts

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/charts/lua` | Intraday LUA-format chart data. | `ticker_id` | `period`, `from`, `to` | Choose `period` from the predefined list (`1D`, `5D`, `1M`, `6M`, `1Y`, `3Y`, `5Y`, `10Y`, `YTD`, `MAX`). |

## ETFs

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/etf-performance-categories` | Available ETF performance groupings. | — | — | Use to discover valid category slugs for the detailed endpoint. |
| `/api/skalpha/etf-performance-categories/{category}` | Performance snapshot for a category. | `category` | — | `category` must match a slug returned by the categories endpoint. |

## Symbol data aggregates

| Path | Purpose | Required params | Optional params | Notes |
| --- | --- | --- | --- | --- |
| `/api/skalpha/symbol-data` | General-purpose symbol attributes. | `slugs` | `fields_list` | Accepts comma-separated slugs; use `fields_list` to limit payload size. |
| `/api/skalpha/symbol-data/charting` | Aggregated chart metrics. | — | `start`, `end`, `metrics`, `metrics_list`, `slugs_list` | Provide either `metrics` or `metrics_list` (not both). Dates accept the same formats as price history. |
| `/api/skalpha/symbol-data/estimates` | Estimate and revision time series. | — | `estimates_data_items`, `revisions_data_items`, `period_type`, `relative_periods`, `group_by_month`, `return_window`, `ticker_ids` | `relative_periods` values must be between -23 and 23; `ticker_ids` is a comma-separated list of numeric IDs. |
| `/api/skalpha/symbol-data/estimated-earning-announces` | Upcoming earnings announcements. | `slug` | — | Returns schedule metadata for the supplied symbol. |
| `/api/skalpha/symbol-data/profile` | Company profile snapshot. | `slugs` | — | Supply one or more comma-separated slugs. |
| `/api/skalpha/symbol-data/widgets` | Precomputed widget data. | `slug` | `date` | `date` is an epoch timestamp; omit it for the latest snapshot. |
