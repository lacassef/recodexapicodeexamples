# Media and assets

## Banners

GET `/api/livescores/banners`

Response: `JSONResult`

## Remote stats

GET `/api/livescores/remote-stats`

Response: `JSONResult`

## Static images

GET `/api/livescores/images/static/{path}`

Parameters:
- `path` (path, required)

Response: `image/png`

Example:
```
GET /api/livescores/images/static/res/image/data/bookmakers/80-915.png
```

## Media images

GET `/api/livescores/images/ott/{path}`

Parameters:
- `path` (path, required)

Response: `image/avif`

Example:
```
GET /api/livescores/images/ott/r300xfq60/26bb49b4-4e3b-4899-9055-dc456da25e10.avif
```
