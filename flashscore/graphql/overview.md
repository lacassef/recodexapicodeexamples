# GraphQL and odds hashes

These endpoints accept a query hash in `_hash`. Hashes are endpoint-specific; using the wrong endpoint or an outdated hash usually returns "Query not stored". Each hash expects specific params.

## GraphQL

GET `/api/livescores/graphql`

Parameters:
- `_hash` (query, required)
- `eventId` (query, optional; required by some hashes)
- `projectId` (query, optional; required by some hashes)

Hashes:

| `_hash` | Required params |
| --- | --- |
| `dlie2` | `eventId`, `projectId` |
| `dmpe2` | `eventId`, `projectId` |
| `dsos2` | `eventId`, `projectId` |
| `epmsd` | `eventId`, `providerId` |
| `epmsdp` | `eventId`, `playerId`, `providerId` |
| `epmsse` | `eventId`, `projectId` |
| `epmsspe` | `eventId`, `projectId`, `playerId` |
| `fsa` | `articleId`, `projectId` |
| `fsned` | `entityId`, `layoutTypeId`, `projectId` |

Response: `JSONResult`

Example:
```
GET /api/livescores/graphql?_hash=dmpe2&eventId=08W6fzLP&projectId=1
```

## Odds GraphQL

GET `/api/livescores/odds`

Parameters:
- `_hash` (query, required)
- `eventId` (query, optional; required by some hashes)
- `projectId` (query, optional; required by some hashes)

Hashes:

| `_hash` | Required params |
| --- | --- |
| `oce` | `eventId`, `projectId`, `geoIpCode`, `geoIpSubdivisionCode` |
| `ope2` | `eventId`, `bookmakerId`, `betType`, `betScope` |
| `pobtm` | `eventId`, `projectId`, `geoIpCode`, `geoIpSubdivisionCode` |

Other known hashes:
- `fsnulae`: entity layout
- `lobtm`: live odds betting menu (same params as `pobtm`)

Response: `JSONResult`

Example:
```
GET /api/livescores/odds?_hash=oce&eventId=08W6fzLP&projectId=1
```
