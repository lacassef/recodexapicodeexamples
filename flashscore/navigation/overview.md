# Navigation and categories

## Req endpoint

GET `/api/livescores/req/{req}`

Parameters:
- `req` (path, required)

Response: `ReqResponse`

Notes:
- Some `req` values return JSON (commonly `m_*` patterns).
- Other values may return raw content instead of `ReqResponse`.

Example:
```
GET /api/livescores/req/m_1_17
```

## Navigation by sport and country

GET `/api/livescores/navigation/{sportId}/{countryId}`

Parameters:
- `sportId` (path, required)
- `countryId` (path, required)

Response: `ReqResponse`

Example:
```
GET /api/livescores/navigation/1/17
```

## Sport categories

GET `/api/livescores/sports/{sportId}/categories`

Parameters:
- `sportId` (path, required)
- `path` (query, optional)

Response: `CategoriesResponse`

Example:
```
GET /api/livescores/sports/3/categories
GET /api/livescores/sports/32/categories?path=motorsport/auto-racing
```

## Category tournaments

GET `/api/livescores/sports/{sportId}/categories/{categoryId}/tournaments`

Parameters:
- `sportId` (path, required)
- `categoryId` (path, required)
- `projectId` (query, default `2`)
- `lang` (query, default `en`)
- `flag` (query, default `y`, enum: `y`, `n`)
- `group` (query, default `1`)
- `version` (query, default `2`)

Response: `FeedResponse`

Example:
```
GET /api/livescores/sports/1/categories/98/tournaments?lang=en&flag=y&group=1
```
