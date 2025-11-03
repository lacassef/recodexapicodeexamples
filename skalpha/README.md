# SKAlpha Proxy API Documentation

This documentation set explains how to call the SKAlpha endpoints that are exposed under the `/api/skalpha` path. The goal is to help you assemble valid requests that return the data you expect.

- The full OpenAPI description lives at `skalpha/openapi/openapi-seekingalpha.yaml`.
- Errors use a JSON:API style wrapper; see [Request essentials](guides/request-essentials.md#handling-errors) for details.

## Documentation map

- [Request essentials](guides/request-essentials.md) — query aliases, validation rules, pagination limits, and screener payload requirements.
- [Content & media endpoints](content/overview.md) — news, articles, press releases, filings, authors, and feed cards.
- [Market data endpoints](market-data/overview.md) — prices, quotes, options, market status, charts, ETF performance, and aggregated symbol data.
- [Symbol subresources](symbols/overview.md) — per-symbol fundamentals, content feeds, peers, ratings, and discovery helpers.
- [Reference & discovery endpoints](reference/overview.md) — metrics, calendars, screeners, and search APIs.

## Example request

```sh
curl "https://{api-host}/api/skalpha/news?filter_category=market-news::technology&page_size=20"
```

`{api-host}` represents whatever host exposes this proxy. Parameters must satisfy the validation rules documented in the guides; otherwise the proxy will return `400 Bad Request`.
