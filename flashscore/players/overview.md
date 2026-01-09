# Players

## Player profile

GET `/api/livescores/players/{playerId}/profile`

Parameters:
- `playerId` (path, required)
- `projectId` (query, default `2`)
- `version` (query, default `2`)

Response: `FeedResponse`

## Player match record

GET `/api/livescores/players/{playerId}/match-record`

Parameters:
- `playerId` (path, required)
- `path` (query, optional)
- `slug` (query, optional)

Response: `PlayerMatchRecordResponse`

## Player tournaments won

GET `/api/livescores/players/{playerId}/tournaments-won`

Parameters:
- `playerId` (path, required)
- `path` (query, optional)
- `slug` (query, optional)

Response: `PlayerTournamentsWonResponse`

## Player injuries

GET `/api/livescores/players/{playerId}/injuries`

Parameters:
- `playerId` (path, required)
- `path` (query, optional)
- `slug` (query, optional)

Response: `PlayerInjuriesResponse`
