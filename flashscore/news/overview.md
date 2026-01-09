# News

## News list

GET `/api/livescores/news`

Parameters:
- `sportId` (query, required)
- `sectionId` (query, required)
- `categoryId` (query, optional, alias for `sectionId`)
- `version` (query, default `2`)

Response: `FeedResponse`

Example:
```
GET /api/livescores/news?sportId=1&sectionId=59
```

## News article

GET `/api/livescores/news/articles/{articleId}`

Parameters:
- `articleId` (path, required)
- `projectId` (query, default `2`)

Response: `JSONResult`

## News entities

GET `/api/livescores/news/entities/{entityTypeId}/{entityId}`

Parameters:
- `entityTypeId` (path, required)
- `entityId` (path, required)
- `layoutTypeId` (query, default `2`)
- `page` (query, default `1`)
- `perPage` (query, default `10`)
- `projectId` (query, default `2`)

Response: `JSONResult`
