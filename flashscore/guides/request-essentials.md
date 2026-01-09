# Request essentials

## Base URL

`https://live-sports-data-api.p.rapidapi.com/api/livescores`

API host: `https://live-sports-data-api.p.rapidapi.com/`

All endpoints use GET.

## Authentication

Use the RapidAPI key headers on every request:

- `X-RapidAPI-Key`: your RapidAPI key
- `X-RapidAPI-Host`: `live-sports-data-api.p.rapidapi.com`

Example:
```sh
curl "https://live-sports-data-api.p.rapidapi.com/api/livescores/sports/1/scoreboard?dayOffset=0&lang=en" \
  -H "X-RapidAPI-Key: YOUR_API_KEY" \
  -H "X-RapidAPI-Host: live-sports-data-api.p.rapidapi.com"
```

## Common defaults

- `version=2` when the endpoint accepts `version`
- `lang=en`
- `projectId=2`
- `layoutTypeId=2`
- `page=1`
- `perPage=10`
- `tab=1`
- `scope=1`

## Required parameters

- Path parameters are always required.
- Some endpoints require query parameters (for example: `sportId`, `sectionId`, `_hash`).

## Response formats

### FeedResponse

Fields:
- `version` (string)
- `feed` (string)
- `header` (object)
- `records` (array of FeedRecord)

FeedRecord:
- `fields` (object)

Values inside `fields` can be a string or an array of strings.

Example:
```json
{
  "version": "2",
  "feed": "f_1_0_2_en_1",
  "header": {
    "sharedindexes_sport_id": "1"
  },
  "records": [
    {
      "fields": {
        "sharedindexes_event_id": "08W6fzLP",
        "MW": ["16", "5", "417"]
      }
    }
  ]
}
```

### ReqResponse

Fields:
- `req` (string)
- `header` (object)
- `records` (array of FeedRecord)

### JSONResult

Free-form JSON object. The exact shape depends on the endpoint.

### ErrorResponse

Format:
```json
{
  "error": {
    "status": 400,
    "title": "Invalid request parameters.",
    "request_id": "..."
  }
}
```

## Feed normalization notes

- Feed field names are decoded when known; unknown codes remain as-is.
- Field values are either a string or an array of strings.
- If a feed already returns JSON, the response is returned unchanged.

## Content types

- `application/json` for most endpoints
- `text/html` for `/api/livescores/matches/{eventId}/report/html`
- `image/png` for `/api/livescores/images/static/{path}`
- `image/avif` for `/api/livescores/images/ott/{path}`

## Image path parameters

The `{path}` parameter may contain slashes. Pass it as a single path segment as shown in the examples.
