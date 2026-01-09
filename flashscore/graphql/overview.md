# GraphQL and odds hashes

These endpoints accept a query hash in `_hash`. Depending on the query, you may also need `eventId` and `projectId`.

## GraphQL

GET `/api/livescores/graphql`

Parameters:
- `_hash` (query, required)
- `eventId` (query, optional)
- `projectId` (query, optional)

Response: `JSONResult`

Example:
```
GET /api/livescores/graphql?_hash=dmpe2&eventId=08W6fzLP&projectId=1
```

## Odds GraphQL

GET `/api/livescores/odds`

Parameters:
- `_hash` (query, required)
- `eventId` (query, optional)
- `projectId` (query, optional)

Response: `JSONResult`

Example:
```
GET /api/livescores/odds?_hash=oce&eventId=08W6fzLP&projectId=1
```
