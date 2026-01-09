# Feeds and scoreboards

## Feed endpoint

GET `/api/livescores/feed/{version}/{feed}`

Parameters:
- `version` (path, required)
- `feed` (path, required)

Response: `FeedResponse`

Example:
```
GET /api/livescores/feed/2/f_1_0_2_en_1
```

## Feed naming patterns

If you construct feed names directly, see [Feed naming patterns](feed-patterns.md) for common formats and examples.

## Common match list fields

Match list feeds commonly include these decoded fields:

- `sharedindexes_event_id` (eventId)
- `sharedindexes_match_start_utime` (scheduled start time)
- `home_name`, `away_name`
- `sharedindexes_home_current_result`, `sharedindexes_away_current_result`
- `sharedindexes_home_full_time_result`, `sharedindexes_away_full_time_result`
- `marked_as_live`
- `sharedindexes_home_red_card_count`, `sharedindexes_away_red_card_count`
- `sharedindexes_sport_id`
- `sharedindexes_tournament_name`
- `country_name`, `country_id`
- `tournament_id`
- `sharedindexes_tournament_stage_id`
- `tournament_template_id`

## Sport scoreboard

GET `/api/livescores/sports/{sportId}/scoreboard`

Parameters:
- `sportId` (path, required)
- `dayOffset` (query, default `0`)
- `lang` (query, default `en`)
- `version` (query, default `2`)

Response: `FeedResponse`

Example:
```
GET /api/livescores/sports/1/scoreboard?dayOffset=0&lang=en
```

## Sport refresh

GET `/api/livescores/sports/{sportId}/refresh`

Parameters:
- `sportId` (path, required)
- `version` (query, default `2`)

Response: `FeedResponse`

Example:
```
GET /api/livescores/sports/1/refresh
```

## Sport odds list

GET `/api/livescores/sports/{sportId}/odds`

Parameters:
- `sportId` (path, required)
- `dayOffset` (query, default `0`)
- `lang` (query, default `en`)
- `version` (query, default `2`)

Response: `FeedResponse`

Example:
```
GET /api/livescores/sports/1/odds?dayOffset=0&lang=en
```

## Sport featured

GET `/api/livescores/sports/{sportId}/featured`

Parameters:
- `sportId` (path, required)
- `scope` (query, default `0`)
- `projectId` (query, default `2`)
- `lang` (query, default `en`)
- `group` (query, default `1`)
- `version` (query, default `2`)

Response: `FeedResponse`

Example:
```
GET /api/livescores/sports/31/featured?scope=0&lang=en
```
