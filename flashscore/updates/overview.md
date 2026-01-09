# Updates and system

## Updates

GET `/api/livescores/updates`

Parameters:
- `sportId` (query, required)
- `scope` (query, default `1`)
- `version` (query, default `2`)

Response: `FeedResponse`

## Updates list

GET `/api/livescores/updates/list`

Parameters:
- `sportId` (query, required)
- `scope` (query, default `1`)
- `version` (query, default `2`)

Response: `FeedResponse`

## Update counts

GET `/api/livescores/updates/counts`

Parameters:
- `projectId` (query, default `2`)
- `version` (query, default `2`)

Response: `FeedResponse`

## System status

GET `/api/livescores/system/status`

Parameters:
- `scope` (query, default `1`)
- `version` (query, default `2`)

Response: `FeedResponse`
