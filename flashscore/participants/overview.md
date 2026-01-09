# Participants

## Participant matches

GET `/api/livescores/participants/{participantId}/matches`

Parameters:
- `participantId` (path, required)
- `sportId` (query, required)
- `categoryId` (query, required)
- `lang` (query, default `en`)
- `version` (query, default `2`)

Response: `FeedResponse`

## Participant squad

GET `/api/livescores/participants/{participantId}/squad`

Parameters:
- `participantId` (path, required)
- `path` (query, optional)
- `slug` (query, optional)

Response: `ParticipantSquadResponse`

## Participant news

GET `/api/livescores/participants/{participantId}/news`

Parameters:
- `participantId` (path, required)
- `version` (query, default `2`)

Response: `FeedResponse`

## Participant transfers

GET `/api/livescores/participants/{participantId}/transfers`

Parameters:
- `participantId` (path, required)
- `tab` (query, default `1`)
- `page` (query, default `1`)
- `version` (query, default `2`)

Response: `FeedResponse`

## Participant events

GET `/api/livescores/participants/{participantId}/events`

Parameters:
- `participantId` (path, required)
- `projectTypeId` (query, default `1`)
- `projectId` (query, default `2`)
- `version` (query, default `2`)

Response: `FeedResponse`

## Participant event detail

GET `/api/livescores/participants/{participantId}/events/{eventId}/detail`

Parameters:
- `participantId` (path, required)
- `eventId` (path, required)
- `projectTypeId` (query, default `1`)
- `version` (query, default `2`)

Response: `FeedResponse`

## Participant last matches

GET `/api/livescores/participants/{participantId}/last-matches`

Parameters:
- `participantId` (path, required)
- `scope` (query, default `1`)
- `version` (query, default `2`)

Response: `JSONResult`
