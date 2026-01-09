# Rankings

## Resolve ranking id

GET `/api/livescores/rankings/resolve`

Parameters:
- `path` (query, optional)
- `sport` (query, optional)
- `slug` (query, optional)

Response: `RankingIDResponse`

Example:
```
GET /api/livescores/rankings/resolve?path=tennis/rankings/atp
```

## Resolve ranking id by slug

GET `/api/livescores/rankings/{sport}/{slug}/id`

Parameters:
- `sport` (path, required)
- `slug` (path, required)

Response: `RankingIDResponse`

## Rankings table

GET `/api/livescores/rankings/{rankingId}`

Parameters:
- `rankingId` (path, required)
- `tab` (query, default `1`)
- `variant` (query, default `ran`, enum: `ran`, `ral`)
- `version` (query, default `2`)

Response: `FeedResponse`
