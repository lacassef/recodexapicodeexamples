# AllSportsAPI — Code Examples, Models & Guides

Practical, copy‑paste examples, response‑model documentation and OpenAPI
specifications for the **AllSportsAPI** family of sports‑data APIs published on
[RapidAPI](https://rapidapi.com/fluis.lacasse).

Everything here works the same way across every sport: the same authentication,
the same response shapes and the same endpoint structure. Learn one API and you
know them all.

---

## What you get from the API

A single, consistent interface to live and historical sports data:

- **Live & pre‑match scores** and event schedules (by day, by category, by tournament).
- **Match detail**: lineups, statistics, incidents (goals, cards, substitutions),
  best players, head‑to‑head, votes, highlights and **odds**.
- **Standings / league tables** and the full league → season → round tree.
- **Teams**: squads, transfers, statistics, near events, logos.
- **Players**: profile, season & match statistics, attributes, transfer history, images.
- **Media**: team logos, player and manager photos, tournament/league images.
- Sport‑specific data such as football shotmaps & heatmaps, basketball shotmaps,
  cricket innings/batting, American‑football down & distance, and esports map stats.

---

## The API family

Every sport is a separate API on RapidAPI but shares the same paths and models.
Subscribe to **All Sports** for one key that covers the bundled sports, or use a
single‑sport API if you only need one.

| Sport | RapidAPI page | Host header (`X-RapidAPI-Host`) |
|-------|---------------|---------------------------------|
| **All Sports** (bundle) | [allsportsapi2](https://rapidapi.com/fluis.lacasse/api/allsportsapi2) | `allsportsapi2.p.rapidapi.com` |
| Football / Soccer | [footapi7](https://rapidapi.com/fluis.lacasse/api/footapi7/) | `footapi7.p.rapidapi.com` |
| Tennis | [tennisapi1](https://rapidapi.com/fluis.lacasse/api/tennisapi1/) | `tennisapi1.p.rapidapi.com` |
| Ice Hockey | [icehockeyapi](https://rapidapi.com/fluis.lacasse/api/icehockeyapi/) | `icehockeyapi.p.rapidapi.com` |
| American Football | [americanfootballapi](https://rapidapi.com/fluis.lacasse/api/americanfootballapi/) | `americanfootballapi.p.rapidapi.com` |
| Baseball | [baseballapi](https://rapidapi.com/fluis.lacasse/api/baseballapi/) | `baseballapi.p.rapidapi.com` |
| Basketball | [basketapi1](https://rapidapi.com/fluis.lacasse/api/basketapi1/) | `basketapi1.p.rapidapi.com` |
| Cricket | [cricketapi21](https://rapidapi.com/fluis.lacasse/api/cricketapi21/) | `cricketapi21.p.rapidapi.com` |
| Esports | [esportapi1](https://rapidapi.com/fluis.lacasse/api/esportapi1/) | `esportapi1.p.rapidapi.com` |
| Motorsport | [motorsportapi](https://rapidapi.com/fluis.lacasse/api/motorsportapi/) | `motorsportapi.p.rapidapi.com` |
| Rugby | [rugbyapi2](https://rapidapi.com/fluis.lacasse/api/rugbyapi2/) | `rugbyapi2.p.rapidapi.com` |

**Standalone APIs** (not part of the All Sports bundle because of import‑size limits,
but identical in structure):

| Sport | RapidAPI page | Host header |
|-------|---------------|-------------|
| Volleyball | [volleyballapi](https://rapidapi.com/fluis.lacasse/api/volleyballapi) | `volleyballapi.p.rapidapi.com` |
| Handball | [handballapi](https://rapidapi.com/fluis.lacasse/api/handballapi) | `handballapi.p.rapidapi.com` |
| MMA | [mmaapi](https://rapidapi.com/fluis.lacasse/api/mmaapi) | `mmaapi.p.rapidapi.com` |

> ℹ️ **Always copy the exact host from RapidAPI.** Open the API's **Endpoints** tab,
> pick any endpoint, and read the `X-RapidAPI-Host` value in the auto‑generated code
> snippet. The hosts above follow RapidAPI's `{slug}.p.rapidapi.com` convention.

---

## Authentication & your first request

Every request needs two headers:

| Header | Value |
|--------|-------|
| `X-RapidAPI-Key` | Your personal RapidAPI key (from the RapidAPI dashboard) |
| `X-RapidAPI-Host` | The host of the API you are calling (see tables above) |

> 🔒 **Never ship your API key in client‑side code.** Anyone can read it in the
> browser. Call the API from your own backend and proxy the result to the front‑end.
> See [Best practices](#best-practices) and the [FAQ](FAQ.md).

### cURL

```bash
curl --request GET \
  --url 'https://footapi7.p.rapidapi.com/api/matches/live' \
  --header 'X-RapidAPI-Key: YOUR_API_KEY' \
  --header 'X-RapidAPI-Host: footapi7.p.rapidapi.com'
```

### JavaScript (fetch)

```js
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,        // keep this on the server
    'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
  }
};

const res = await fetch('https://footapi7.p.rapidapi.com/api/matches/live', options);
const data = await res.json();
console.log(data.events?.length, 'live matches');
```

### Python (requests)

```python
import os, requests

url = "https://footapi7.p.rapidapi.com/api/matches/live"
headers = {
    "X-RapidAPI-Key": os.environ["RAPIDAPI_KEY"],
    "X-RapidAPI-Host": "footapi7.p.rapidapi.com",
}

resp = requests.get(url, headers=headers, timeout=15)
resp.raise_for_status()
print(len(resp.json().get("events", [])), "live matches")
```

> 📌 Endpoint paths differ slightly per sport. Football uses `/api/...`, while other
> sports prefix the sport name, e.g. `/api/tennis/...` or `/api/basketball/...`.
> Use the [OpenAPI specs](openapi/) or the RapidAPI **Endpoints** tab as the source of truth.

---

## Understanding the data model

Most sports share the same hierarchy. Understanding it makes navigation predictable:

```
Sport
└── Category            (a country, region or tour — e.g. "England", "ATP")
    └── UniqueTournament (a competition across seasons — e.g. "Premier League")
        └── Season       (one edition — e.g. "Premier League 24/25")
            └── Tournament / Round
                └── Event (a single match / game / fixture)
                    ├── Team (home / away)
                    │   └── Player
                    ├── Status & Time
                    ├── Score
                    ├── Incidents
                    └── Statistics
```

To list every league in a sport you walk the tree top‑down: list **categories**,
then list **tournaments per category**. See the
[FAQ → "How to get all leagues"](FAQ.md) and the
[Models guide](Models/README.md) for the full picture and field‑by‑field reference.

---

## Common workflows

| Goal | How |
|------|-----|
| **Live matches** | `GET /api/matches/live` (football) — search "live" in the Endpoints tab for other sports. |
| **Matches on a date** | `GET /api/matches/{day}/{month}/{year}` — returns a 48‑hour window around UTC (see FAQ on time zones). |
| **All leagues of a sport** | List categories → list tournaments per category. |
| **All teams in a league** | Use the **standings** endpoint for the season. |
| **Match detail** | Find any "Match" endpoint: `lineups`, `statistics`, `incidents`, `best-players`, `odds`, `shotmap`, `highlights`. |
| **Player / team statistics** | Use the `Match Lineups` or `Match Player Statistics` endpoints (see FAQ). |
| **Images** | Logo/photo endpoints return `image/png`; placeholders return SVG. See [Examples](Examples/). |

---

## Best practices

1. **Keep your key on the server.** Proxy API calls through your backend; never expose
   `X-RapidAPI-Key` in a browser, mobile app, or public repo.
2. **Cache aggressively.** Schedules, standings, squads and historical results change
   slowly. Cache them (minutes to hours) to stay within your plan's quota and to keep
   your app fast. Reserve frequent polling for live endpoints only.
3. **Poll live data sensibly.** A 10–30 s interval is plenty for live scores. Tighter
   loops mostly burn quota.
4. **Handle every status code.** Expect `200` (data), `204` (route valid but no data
   yet), `429` (rate‑limited — back off), and `5xx` (retry with exponential backoff).
5. **Convert timestamps yourself.** All times are UNIX seconds in UTC. Schedule
   endpoints intentionally return ±12 h around UTC midnight so every time zone is
   covered — filter to the user's local day on your side.
6. **Treat optional fields as optional.** Coverage varies by sport, league and match.
   Null‑check before reading nested objects.
7. **Don't hard‑code IDs.** Resolve teams/tournaments/players through search or the
   tree, then store the IDs you need.

More answers in the **[FAQ](FAQ.md)**.

---

## Repository layout

```
allsportsapi/
├── README.md                ← you are here
├── FAQ.md                   Frequently asked questions (auth, images, time, odds, leagues…)
├── Models/                  Response‑model reference
│   ├── README.md            Data‑model guide + index of every model
│   ├── *.md                 Field‑by‑field docs (Event, Player, Team, Tournament…)
│   └── json/                Endpoint → response‑schema JSON (player, team, event, odds…)
├── openapi/                 OpenAPI 3.0 specs (per sport + combined + simplified)
├── Examples/                Runnable Python & Node examples (quickstart, proxy, FAQ recipes) + image snippets
├── Footapi/                 Football examples: shotmap, heatmap, pitch asset
├── Basketapi/               Basketball examples: shotmap, shot‑zone classification
└── Tennisapi/               Tennis examples: cup‑tree (bracket) visualization
```

- **New to the API?** Start with this README, then skim the [FAQ](FAQ.md). For a first
  program, run the [quickstart](Examples/quickstart.py) (Python) or
  [quickstart.js](Examples/quickstart.js) (Node).
- **Want runnable recipes?** The [Examples](Examples/) folder has the quickstart, a
  key‑safe [server‑side proxy](Examples/server_proxy_express.js), a
  [match‑clock calculator](Examples/match_clock.py), a
  [list‑all‑leagues](Examples/list_all_leagues.py) walk, and
  [timezone schedule filtering](Examples/filter_schedule_by_timezone.py).
- **Building a response parser?** Read the [Models guide](Models/README.md) and the
  [JSON schemas](Models/json/).
- **Generating a client?** Import an [OpenAPI spec](openapi/) into your tool of choice.
- **Want visualizations?** See [Footapi](Footapi/), [Basketapi](Basketapi/) and
  [Tennisapi](Tennisapi/).

---

## Need data we don't provide?

If a data point isn't available here, try the
[Allscores API](https://rapidapi.com/fluis.lacasse/api/allscores/).

## Support

Questions or feature requests? Reach out via the **About** tab of any API on RapidAPI,
or open a discussion on the API's RapidAPI page. Support during development is free.
```
