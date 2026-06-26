# Getting daily matches & events

The old flat per‑date feed — `GET /api/matches/{day}/{month}/{year}` (football) and
`GET /api/{sport}/matches|events/{day}/{month}/{year}` (other sports) — is **retired**.
No single call returns every match of a day anymore. Instead you **assemble the day per
competition**: find what's running, then pull each one's schedule.

This guide is the complete recipe for every sport. For response shapes see the
[Models reference](Models/README.md); for auth and the per‑sport host table see the
[README](README.md).

> **Time zones.** Schedule endpoints return a window of **±12 h around UTC midnight**, so
> a "day" can include a few matches from the neighbouring UTC dates. Filter by
> `event.startTimestamp` to the user's local day — see
> [`filter_schedule_by_timezone`](Examples/filter_schedule_by_timezone.py).

---

## Quick reference

| Sport family | Step 1 — discover the day's competitions | Step 2 — fetch the schedule |
|---|---|---|
| **Football** | `GET /api/scheduled-tournaments/{day}/{month}/{year}/page/{page}` | per tournament, or `GET /api/category/{id}/events/{day}/{month}/{year}` |
| **Team sports**¹ | `GET /api/{sport}/scheduled-tournaments/{day}/{month}/{year}/page/{page}` | per tournament, or `GET /api/{sport}/category/{id}/events/{day}/{month}/{year}` |
| **Tennis / Table‑tennis** | `GET /api/{sport}/calendar/{day}/{month}/{year}/categories` | `GET /api/{sport}/category/{id}/events/{day}/{month}/{year}` |
| **MMA** | `GET /api/mma/main-events/{date}/extended` *(direct, by ISO date)* | — |
| **Motorsport** | `GET /api/motorsport/stage/scheduled/{date}` *(direct, by ISO date)* | — |
| **Cycling** | walk team → season → races (no by‑date endpoint) | `GET /api/cycling/team/{id}/stage/season/{seasonId}/races` |

¹ basketball, baseball, handball, cricket, rugby, volleyball, ice‑hockey,
american‑football, esport.

---

## Team sports (football + the "matches" sports)

Applies to **football, basketball, baseball, handball, cricket, rugby, volleyball,
ice‑hockey, american‑football, esport**.

### Option A — date‑aware tournament index · *recommended*

One paginated call lists the tournaments that **actually have matches that day** — no
guessing, no empty competitions:

`GET /api/{sport}/scheduled-tournaments/{day}/{month}/{year}/page/{page}` — football:
`GET /api/scheduled-tournaments/{day}/{month}/{year}/page/{page}`.

`page` is **0‑based**; walk pages until one comes back empty (or `204`). Then pull each
tournament's matches:

- **ISO date** — football, cricket, esport:
  `GET /api/{sport}/tournament/{tournament_id}/scheduled-events/{YYYY-MM-DD}`
- **day/month/year** — football, basketball, handball, rugby, volleyball, ice‑hockey,
  cricket: `GET /api/{sport}/tournament/{tournament_id}/schedules/{day}/{month}/{year}`

```bash
# Football — tournaments with matches on 22 Jul 2025 (first page)
HOST=footapi7.p.rapidapi.com
curl -s "https://$HOST/api/scheduled-tournaments/22/7/2025/page/0" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" -H "X-RapidAPI-Host: $HOST"
```

### Option B — by category (country / tour) · *works for all of them*

One cheap, cacheable discovery call, then one call per category.

1. **List categories** (countries / regions):
   `GET /api/{sport}/tournament/categories` — football: `GET /api/tournament/categories`.
2. **Fetch each category's schedule for the day:**
   `GET /api/{sport}/category/{category_id}/events/{day}/{month}/{year}` — football:
   `GET /api/category/{category_id}/events/{day}/{month}/{year}`.
3. **Union** the results and dedupe by `event.id`.

```bash
# Football — every match in England (category 1) on 7 March 2026
HOST=footapi7.p.rapidapi.com
curl -s "https://$HOST/api/tournament/categories" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" -H "X-RapidAPI-Host: $HOST"     # → category ids
curl -s "https://$HOST/api/category/1/events/7/3/2026" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" -H "X-RapidAPI-Host: $HOST"     # → that day's matches
```

### Option C — by tournament · *when you only track specific leagues*

1. List tournaments in a category:
   `GET /api/{sport}/tournament/all/category/{category_id}`.
2. Fetch a tournament's day, whichever form the sport exposes:
   - **ISO date** — football, cricket, esport:
     `GET /api/{sport}/tournament/{tournament_id}/scheduled-events/{YYYY-MM-DD}`
   - **day/month/year** — football, basketball, handball, cricket, rugby, volleyball,
     ice‑hockey:
     `GET /api/{sport}/tournament/{tournament_id}/schedules/{day}/{month}/{year}`

> **Football quirks:** no sport slug, and its category schedule is also exposed as
> `GET /api/category/{id}/matches/{day}/{month}/{year}` (alias of the `events` form).

---

## Tennis & table‑tennis

These publish a **daily category index**, so you skip the full category list and touch
only competitions that actually have play that day.

1. **Categories with play that day:**
   `GET /api/{sport}/calendar/{day}/{month}/{year}/categories`
2. **Fetch each one:**
   `GET /api/{sport}/category/{category_id}/events/{day}/{month}/{year}`

`{sport}` is `tennis` or `table-tennis`. Tennis tournaments also support
`GET /api/tennis/tournament/{tournament_id}/scheduled-events/{YYYY-MM-DD}`.

---

## MMA

Organised by **organization → tournament → event**.

- **Direct (simplest)** — all main events on a date:
  `GET /api/mma/main-events/{date}/extended` (`{date}` = `YYYY-MM-DD`).
- **By organization:**
  1. Organizations (UFC, KSW, …): `GET /api/mma/categories`
  2. Their tournaments: `GET /api/mma/category/{category_id}/unique-tournaments`
  3. A tournament's day:
     `GET /api/mma/unique-tournament/{tournament_id}/schedules/{day}/{month}/{year}`
     (or the whole month: `.../schedules/{month}/{year}`)
- **Which months have events:**
  `GET /api/mma/calendar/unique-tournament/{id}/{timezoneOffset}/months-with-events`

---

## Motorsport

Organised by **category → stage** (a stage is a race weekend / session).

- **Direct** — stages scheduled on a date:
  `GET /api/motorsport/stage/scheduled/{date}` (`{date}` = `YYYY-MM-DD`).
- **By category:**
  1. Categories (Formula 1, MotoGP, WRC, …): `GET /api/motorsport/categories`
  2. Their stages: `GET /api/motorsport/category/{category_id}/stages/all`
  3. Stage detail / sessions: `GET /api/motorsport/stage/{stage_id}` and
     `GET /api/motorsport/stage/{stage_id}/substages`
- **Next featured event:** `GET /api/motorsport/stage/featured`

---

## Cycling

Cycling has **no by‑date endpoint** — reach races through teams and seasons.

1. Find a team / stage ID: `GET /api/cycling/search/{term}` (or `GET /api/search/all`).
2. A team's seasons: `GET /api/cycling/team/{team_id}/stage/seasons`
3. That season's races: `GET /api/cycling/team/{team_id}/stage/season/{season_id}/races`
4. Race detail: `GET /api/cycling/stage/{stage_id}/...`

To narrow to dates that actually have racing, use the days‑with‑events helper below.

---

## Helpers (every sport)

| Need | Endpoint |
|---|---|
| **Live right now** (in‑play only) | `GET /api/matches/live` · `GET /api/{sport}/matches/live` · `GET /api/{sport}/events/live` (tennis / table‑tennis) |
| **Which days have play in a season** | `GET /api/calendar/season/{season_id}/{year}/days-with-events` |

---

## Conventions

- **Date formats.** `{day}/{month}/{year}` are integers, not zero‑padded (e.g. `7/3/2026`);
  `{date}` is ISO `YYYY-MM-DD` (e.g. `2026-03-07`).
- **`{sport}` slug.** `basketball`, `baseball`, `handball`, `cricket`, `rugby`,
  `volleyball`, `ice-hockey`, `american-football`, `esport`, `tennis`, `table-tennis`,
  `mma`, `motorsport`, `cycling`. **Football omits the slug** (`/api/...`).
- **Host per sport.** Set `X-RapidAPI-Host` to the sport's RapidAPI host — see the
  [README host table](README.md).
- **`204` = valid route, no data** for those parameters. Treat it as "nothing scheduled",
  not an error.
- **Cache** the category / tournament lists; they change slowly, so you only pay for the
  per‑day calls. The [`list_all_leagues`](Examples/list_all_leagues.py) example shows the
  enumeration.
