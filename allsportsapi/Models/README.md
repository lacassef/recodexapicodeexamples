# Response Models Reference

This folder documents the **shapes of the data** returned by the AllSportsAPI
family. Use it to write parsers, generate types, and understand how entities link
together. Field semantics are consistent across every sport — a `Team` looks the
same whether it comes from football, cricket or esports (sport‑specific fields are
simply `null` where they don't apply).

There are two complementary references here:

1. **Entity docs** (`*.md`) — a field‑by‑field description of each core object
   (`Event`, `Player`, `Team`, `Tournament`, …). Best for understanding a single
   entity in depth.
2. **Endpoint response schemas** (`json/*.json`) — machine‑readable schemas grouped
   by API area (player, team, event, statistics, odds, search, media, tournament,
   other). Each file maps concrete endpoints to the exact response model they return,
   including nullability, base response wrappers, error handling and changelog notes.

---

## The data model at a glance

Most entities hang off one hierarchy. Knowing it makes the whole API predictable:

```
Sport
└── Category              country / region / tour (e.g. "England", "ATP")
    └── UniqueTournament  a competition across seasons (e.g. "Premier League")
        └── Season        one edition (e.g. "Premier League 24/25")
            └── Tournament / UniqueStage / Round
                └── Event  a single match, game or fixture
                    ├── Team (home & away)
                    │   ├── Player  (squad members)
                    │   └── SubTeam (doubles / relay / affiliated)
                    ├── Status   (code + type + description)
                    ├── Time     (period clock, timestamps, injury time)
                    ├── Score
                    ├── Incidents     (goals, cards, substitutions, periods…)
                    └── EventStatistics (grouped, per‑period metrics)
```

How the key entities relate:

- A **Category** groups **UniqueTournaments** (and exposes the `uniqueTournamentIds`
  that belong to it). Walk *Category → UniqueTournament* to enumerate every league in
  a sport.
- A **UniqueTournament** is the competition that persists across years; a
  **Tournament** + **Season** pins it to one edition, group or stage.
- An **Event** is the atomic unit (one match). It references its `tournament`,
  `season`, both `Team`s, a `Status`, a `Time`, a `Score`, and may carry
  `roundInfo`, `venue`, `referee` and sport‑specific blocks.
- A **Player** belongs to a **Team**; transfers between teams are described by
  **Transfer**.

For the practical recipes (listing all leagues, all teams in a league, reading match
time, interpreting incidents/status codes), see the **[FAQ](../FAQ.md)**.

---

## How responses are wrapped

Most endpoints return data inside a thin wrapper rather than at the top level. The
JSON schemas describe these base types:

- **`NetworkResponse`** / **`AbstractNetworkResponse`** — carry a `head` (metadata)
  and an `error` object alongside the payload.
- Concrete responses extend these, e.g. a player‑profile endpoint returns a model
  whose payload is a `Player`.

Practical implications when parsing:

- Read the documented payload key (e.g. `events`, `event`, `player`, `standings`)
  rather than assuming the object is at the root.
- **Treat nullable fields as nullable.** Coverage varies by sport, league and match;
  always null‑check nested objects before reading them.
- Timestamps are **UNIX seconds in UTC** (see [`Event`](Event.md) `startTimestamp`,
  `endTimestamp`, `currentPeriodStartTimestamp`).

---

## Entity docs (`*.md`)

### Core hierarchy
| Model | What it represents |
|-------|--------------------|
| [Category](Category.md) | A country, region or tour that groups competitions. |
| [UniqueTournament](UniqueTournament.md) | A competition that persists across seasons (the "league" itself). |
| [Tournament](Tournament.md) | A competition pinned to a season / group / stage. |
| [UniqueStage](UniqueStage.md) | A stage within a competition (e.g. a motorsport stage). |
| [Event](Event.md) | A single match / game / fixture — the central object. |

### Participants
| Model | What it represents |
|-------|--------------------|
| [Team](Team.md) | A club or national team (includes salary‑cap, colors, venue, rankings). |
| [Subteam](Subteam.md) | An affiliated / partner side (doubles pairs, relay, reserve squads). |
| [Player](Player.md) | An individual player (profile, physical data, market value, contract). |
| [PlayerCharacteristics](PlayerCharacteristics.md) | A player's strengths/weaknesses + the characteristic‑type codes. |
| [Transfer](Transfer.md) | A player/manager move between teams (fee, type, dates). |

### Match detail
| Model | What it represents |
|-------|--------------------|
| [Incidents](Incidents.md) | Timeline events within a match (goals, cards, subs, periods). |
| [EventStatistics](EventStatistics.md) | Top‑level container of per‑period statistics. |
| [EventStatisticsPeriod](EventStatisticsPeriod.md) | Statistics for one period (e.g. "1st half"). |
| [EventStatisticsGroup](EventStatisticsGroup.md) | A named group of stats within a period. |
| [EventStatisticsItem](EventStatisticsItem.md) | A single stat row (home/away values, render hints). |

### Sport‑specific
| Model | Sport | What it represents |
|-------|-------|--------------------|
| [Inning](Inning.md) | Cricket | One innings (batting/bowling lines, extras, score). |
| [Batsman](Batsman.md) | Cricket | A batsman's line (runs, balls, boundaries, dismissal). |
| [AmericanFootballDownDistance](AmericanFootballDownDistance.md) | American Football | Current down, distance, yard line, possession. |
| [EsportsGameStatistics](EsportsGameStatistics.md) | Esports | Per‑team map stats (kills, gold, objectives, drakes…). |
| [EsportsGameStatisticsResponse](EsportsGameStatisticsResponse.md) | Esports | Home + away wrapper for game statistics. |

---

## Endpoint response schemas (`json/`)

Machine‑readable schemas, grouped by API area. Each file lists the endpoints it
covers, the shared models they return, base response wrappers, and (where present)
error‑handling, rate‑limit, caching and changelog notes.

| File | Area | Endpoints covered |
|------|------|-------------------|
| [player_response_models.json](json/player_response_models.json) | Player | profile, statistics, attributes, transfers, images |
| [team_response_models.json](json/team_response_models.json) | Team | squad, statistics, transfers, near events, standings, images |
| [event_response_models.json](json/event_response_models.json) | Event / Match | detail, lineups, incidents, best players, H2H, votes |
| [statistics_response_models.json](json/statistics_response_models.json) | Statistics | season & match statistics, leaders, top players |
| [tournament_response_models.json](json/tournament_response_models.json) | Tournament | categories, seasons, rounds, standings, schedules |
| [odds_betting_response_models.json](json/odds_betting_response_models.json) | Odds & Betting | pre‑match & featured odds, providers |
| [search_response_models.json](json/search_response_models.json) | Search | multi‑entity search (teams, players, tournaments) |
| [media_content_response_models.json](json/media_content_response_models.json) | Media | logos, player/manager images, highlights |
| [others_response_models.json](json/others_response_models.json) | Other | schedules, live, calendars and remaining utility endpoints |

> 💡 These schemas are a great starting point for **generating typed clients/DTOs**.
> Pair them with the [OpenAPI specs](../openapi/) for full path + parameter coverage.

---

## Reading these docs

- **`@NotNull`** marks fields the API always populates; everything else may be `null`
  or absent depending on sport/league/match coverage.
- Type names in `()` (e.g. `Score`, `Status`, `Venue`, `Money`) refer to nested
  objects. Where a nested type isn't broken out into its own file, the JSON schemas
  describe it inline.
- Field names are returned **exactly as written** (camelCase) in JSON responses.
