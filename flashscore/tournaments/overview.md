# Tournaments

## Discovering IDs

Common places to find IDs:

- `/api/livescores/sports/{sportId}/categories` and `/categories/{categoryId}/tournaments` for `categoryId` and `templateId`
- Match list feeds for `tournament_id`, `sharedindexes_tournament_stage_id`, and `tournament_template_id`
- Tournament resolve for `tournamentId` and `stageId`

## Tournament match lists (by template)

### Matches

GET `/api/livescores/tournaments/{sportId}/{categoryId}/{templateId}/matches`

Parameters:
- `sportId` (path, required)
- `categoryId` (path, required)
- `templateId` (path, required)
- `lang` (query, default `en`)
- `version` (query, default `2`)

Response: `FeedResponse`

Example:
```
GET /api/livescores/tournaments/1/98/COuk57Ci/matches?lang=en
```

### Fixtures

GET `/api/livescores/tournaments/{sportId}/{categoryId}/{templateId}/fixtures`

Parameters:
- `sportId` (path, required)
- `categoryId` (path, required)
- `templateId` (path, required)
- `round` (query, required)
- `page` (query, default `1`)
- `lang` (query, default `en`)
- `version` (query, default `2`)

Response: `FeedResponse`

Example:
```
GET /api/livescores/tournaments/1/98/COuk57Ci/fixtures?round=187&lang=en
```

### Results

GET `/api/livescores/tournaments/{sportId}/{categoryId}/{templateId}/results`

Parameters:
- `sportId` (path, required)
- `categoryId` (path, required)
- `templateId` (path, required)
- `segment` (query, default `1`)
- `projectId` (query, default `2`)
- `lang` (query, default `en`)
- `page` (query, default `1`)
- `group` (query, default `s`)
- `version` (query, default `2`)

Response: `FeedResponse`

Example:
```
GET /api/livescores/tournaments/2/182/GrsQDFC0/results?segment=1&lang=en&group=s
```

## Tournament data (by tournamentId)

### Tables

GET `/api/livescores/tournaments/{tournamentId}/tables/{stageId}`

Parameters:
- `tournamentId` (path, required)
- `stageId` (path, required)
- `version` (query, default `2`)

Response: `FeedResponse`

Example:
```
GET /api/livescores/tournaments/M1c7lv64/tables/tKE3WZmL
```

### Top scorers

GET `/api/livescores/tournaments/{tournamentId}/top-scorers/{stageId}`

Parameters:
- `tournamentId` (path, required)
- `stageId` (path, required)
- `version` (query, default `2`)

Response: `FeedResponse`

### Overview

GET `/api/livescores/tournaments/{tournamentId}/overview/{stageId}`

Parameters:
- `tournamentId` (path, required)
- `stageId` (path, required)
- `tab` (query, default `1`)
- `version` (query, default `2`)

Response: `FeedResponse`

### List

GET `/api/livescores/tournaments/{tournamentId}/list/{stageId}`

Parameters:
- `tournamentId` (path, required)
- `stageId` (path, required)
- `version` (query, default `2`)

Response: `FeedResponse`

### Draw

GET `/api/livescores/tournaments/{tournamentId}/draw/{stageId}`

Parameters:
- `tournamentId` (path, required)
- `stageId` (path, required)
- `groupId` (query, optional)
- `version` (query, default `2`)

Response: `FeedResponse`

### Seasons

GET `/api/livescores/tournaments/{tournamentId}/seasons/{stageId}`

Parameters:
- `tournamentId` (path, required)
- `stageId` (path, required)
- `projectId` (query, default `2`)

Response: `JSONResult`

## Tournament metadata

### Resolve

GET `/api/livescores/tournaments/resolve`

Parameters:
- `path` (query, optional)
- `sport` (query, optional)
- `country` (query, optional)
- `slug` (query, optional)

Response: `TournamentResolveResponse`

Example:
```
GET /api/livescores/tournaments/resolve?path=football/england/premier-league
```

### Archive

GET `/api/livescores/tournaments/archive`

Parameters:
- `path` (query, optional)
- `sport` (query, optional)
- `country` (query, optional)
- `slug` (query, optional)

Response: `TournamentArchiveResponse`

Example:
```
GET /api/livescores/tournaments/archive?path=football/england/premier-league
```

## Season calendar

GET `/api/livescores/sports/{sportId}/season-calendar`

Parameters:
- `sportId` (path, required)
- `projectId` (query, default `2`)

Response: `JSONResult`

Example:
```
GET /api/livescores/sports/2/season-calendar?projectId=2
```
