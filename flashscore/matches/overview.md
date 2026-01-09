# Matches

All match detail endpoints require `eventId` in the path. Unless noted, they return `FeedResponse` and accept `version` (default `2`).

## Finding eventId

Use a scoreboard or tournament list feed and read `records[].fields.sharedindexes_event_id`.

## Availability

Not every match returns data for every detail endpoint. When a feed is not available, the response may be empty.

## Match detail feeds

- GET `/api/livescores/matches/{eventId}/hashes`
- GET `/api/livescores/matches/{eventId}/stats`
- GET `/api/livescores/matches/{eventId}/timeline`
- GET `/api/livescores/matches/{eventId}/commentary`
- GET `/api/livescores/matches/{eventId}/commentary-only`
- GET `/api/livescores/matches/{eventId}/point-by-point`
- GET `/api/livescores/matches/{eventId}/h2h`
- GET `/api/livescores/matches/{eventId}/news`
- GET `/api/livescores/matches/{eventId}/report`
- GET `/api/livescores/matches/{eventId}/tv/long`
- GET `/api/livescores/matches/{eventId}/tv/short`
- GET `/api/livescores/matches/{eventId}/odds-detail`
- GET `/api/livescores/matches/{eventId}/highlights`
- GET `/api/livescores/matches/{eventId}/highlights/videos`
- GET `/api/livescores/matches/{eventId}/top-scorers`
- GET `/api/livescores/matches/{eventId}/detail-config`

## Overview

GET `/api/livescores/matches/{eventId}/overview`

Parameters:
- `tab` (query, default `1`)
- `version` (query, default `2`)

Response: `FeedResponse`

## News layout

GET `/api/livescores/matches/{eventId}/news-layout`

Parameters:
- `layoutTypeId` (query, default `2`)
- `projectId` (query, default `2`)

Response: `JSONResult`

## Report HTML

GET `/api/livescores/matches/{eventId}/report/html`

Parameters:
- `version` (query, default `2`)

Response: `text/html`

## Example

```
GET /api/livescores/matches/08W6fzLP/stats
```
