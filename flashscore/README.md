# Live Sports Data API Documentation

This documentation set explains how to call the Live Sports Data API endpoints that live under the `/api/livescores` path. Use it to build requests and understand response shapes.

- The full OpenAPI spec lives at `flashscore/flashscore_openapi.yaml`.
- Start with request essentials for base URL, auth headers, defaults, errors, and response formats.

## Documentation map

- [Request essentials](guides/request-essentials.md) - base URL, defaults, errors, and response formats.
- [Feeds and scoreboards](feeds/overview.md) - raw feeds and sport scoreboards.
- [Feed naming patterns](feeds/feed-patterns.md) - common feed name patterns for `/feed`.
- [Navigation and categories](navigation/overview.md) - navigation, categories, and tournament lists.
- [Tournaments](tournaments/overview.md) - fixtures, results, tables, and tournament metadata.
- [Matches](matches/overview.md) - match detail endpoints.
- [Participants](participants/overview.md) - team and participant resources.
- [Players](players/overview.md) - player profiles and stats tables.
- [Rankings](rankings/overview.md) - ranking discovery and tables.
- [News](news/overview.md) - news lists and articles.
- [Search](search/overview.md) - search and suggestions.
- [Updates and system](updates/overview.md) - updates and status.
- [GraphQL and odds hashes](graphql/overview.md) - hash-based query endpoints.
- [Media and assets](media/overview.md) - banners, stats, and images.
- [Schemas](reference/schemas.md) - response object shapes.
- [Sport IDs](reference/sport-ids.md) - known sportId values.

## Example request

```sh
curl "https://live-sports-data-api.p.rapidapi.com/api/livescores/sports/1/scoreboard?dayOffset=0&lang=en"
```

Common flow:

1) Call a scoreboard endpoint and read `sharedindexes_event_id` from `records[].fields`.
2) Use that `eventId` with match detail endpoints (see [Matches](matches/overview.md)).
