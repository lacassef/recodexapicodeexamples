# OpenAPI Specifications

Machine‑readable **OpenAPI 3.0** descriptions of the AllSportsAPI endpoints. Import them
into Swagger UI / Editor, Postman, Insomnia, or an OpenAPI client generator to explore
the API and scaffold typed clients.

## What's here

| File | Scope | Paths |
|------|-------|------:|
| `allsports_openapi.yaml` | **Everything** — all sports merged into one spec, fully expanded. | 952 |
| `allsports_simplified_openapi.yaml` | Same coverage, **compacted** using path enums (one template per path family instead of every concrete route). Smaller and easier to skim. | 296 |
| `football_openapi.yaml` | Football / Soccer only | 179 |
| `basketball_openapi.yaml` | Basketball only | 133 |
| `tennis_openapi.yaml` | Tennis only | 99 |
| `american_football_openapi.yaml` | American Football only | 91 |
| `ice_hockey_openapi.yaml` | Ice Hockey only | 89 |
| `table_tennis_openapi.yaml` | Table Tennis only | 83 |
| `baseball_openapi.yaml` | Baseball only | 79 |
| `handball_openapi.yaml` | Handball only | 79 |
| `cricket_openapi.yaml` | Cricket only | 75 |
| `esports_openapi.yaml` | Esports only | 71 |
| `rugby_openapi.yaml` | Rugby only | 68 |
| `volleyball_openapi.yaml` | Volleyball only | 66 |
| `mma_openapi.yaml` | MMA only | 55 |
| `motorsport_openapi.yaml` | Motorsport only | 45 |
| `cycling_openapi.yaml` | Cycling only | 34 |

> Path counts are approximate and will drift as endpoints are added or removed.

## Which one should I use?

- **Browsing / learning a single sport** → the per‑sport file (e.g. `tennis_openapi.yaml`).
- **A quick overview of the whole surface** → `allsports_simplified_openapi.yaml`
  (the compacted enums keep it readable).
- **Code generation or exhaustive tooling** → `allsports_openapi.yaml` (every concrete
  route spelled out).

## Point it at the real server

The `servers` URL in each file is a placeholder (`http://localhost:8080`). To make real
calls, target the RapidAPI host for the sport and send your auth headers:

- **Base URL:** `https://{host}.p.rapidapi.com` (e.g. `https://footapi7.p.rapidapi.com`)
- **Headers:** `X-RapidAPI-Key` and `X-RapidAPI-Host` — see the [root README](../README.md).

In Swagger UI you can override the server URL and add the two headers under
**Authorize** / request headers; in Postman, set them as collection variables.

## Notes

- These specs describe **paths, parameters and response wrappers**. For the detailed
  shape of each response object, pair them with the [Models reference](../Models/).
- The `204` responses mean "the route is valid but there's no data for those parameters"
  — handle it distinctly from `200`.
- Endpoint paths are consistent across sports: football uses `/api/...`, other sports
  prefix the sport name (e.g. `/api/tennis/...`).
