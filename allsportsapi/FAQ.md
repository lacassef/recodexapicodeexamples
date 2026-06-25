# FAQ

Common questions about the AllSportsAPI family. New here? Start with the
[README](README.md), then come back for specifics. For response shapes, see the
[Models reference](Models/README.md).

**Contents**

- [How do I get live and pre‑match data?](#how-do-i-get-live-and-pre-match-data)
- [How do I retrieve player statistics from a match?](#how-do-i-retrieve-player-statistics-from-a-match)
- [How do I display images on my website?](#how-do-i-display-images-on-my-website)
- [How do I determine the match time?](#how-do-i-determine-the-match-time)
- [Do you provide betting odds?](#do-you-provide-betting-odds)
- [How do I interpret match incidents and status?](#how-do-i-interpret-match-incidents-and-status)
- [How do I navigate the API?](#how-do-i-navigate-the-api)
- [Why don't you provide widgets?](#why-dont-you-provide-widgets)
- [How do I get all leagues of a sport?](#how-do-i-get-all-leagues-of-a-sport)
- [How do I retrieve all teams in a league?](#how-do-i-retrieve-all-teams-in-a-league)
- [How do I get all matches on a specific date?](#how-do-i-get-all-matches-on-a-specific-date)
- [Why do schedule endpoints return matches from the previous/next day?](#why-do-schedule-endpoints-return-matches-from-the-previousnext-day)
- [What if the data I need isn't available?](#what-if-the-data-i-need-isnt-available)
- [What do the team transfer types mean?](#what-do-the-team-transfer-types-mean)
- [Where can I get help?](#where-can-i-get-help)

---

## How do I get live and pre‑match data?

Live and pre‑match data (statistics, incidents, odds, and more) lives in the endpoints
labelled **"Match"**. The quickest way to find them is the search box on the API's
**Endpoints** tab on RapidAPI — type `Match` and you'll get the full list (statistics,
incidents, odds, lineups, etc.).

---

## How do I retrieve player statistics from a match?

There are two ways:

1. **Match Lineups** endpoint (e.g. *Football Match Lineups*) — returns every
   participating player together with their statistics.
2. **Match Player Statistics** endpoint — pass a specific player's `id` to get just
   that player's statistics.

Both are easy to find via the search box on the Endpoints tab.

---

## How do I display images on my website?

All image/logo endpoints return **`image/png`** (placeholders are the only exception —
they return SVG). Because the calls need authorization headers, you can't point an
`<img src>` directly at the endpoint. Pick one of these approaches:

1. **Fetch API** — use `fetch` (or Axios) to GET the endpoint with your headers, then
   set the response (as a Blob/object URL) as an `<img>` source.
2. **Base64** — convert the fetched bytes to a base64 data URL for inline rendering.
3. **Server‑side proxy** — your backend makes the authorized request and serves the
   image to the front‑end. This keeps your API key off the client. **Recommended.**
4. **Canvas API** — fetch the image, then draw it onto a `<canvas>` when you need to
   manipulate it.

Working code for each pattern is in [`Examples/`](Examples/).

---

## How do I determine the match time?

Every match endpoint returns enough information to compute elapsed time across all
active periods. The key attributes are `status`, `lastPeriod` and `time`.

### Key attributes

- **`status`** — current match status.
  - `code` — numeric status code.
  - `description` — text description (e.g. `"1st half"`).
  - `type` — general type (e.g. `inprogress`, `finished`).
- **`lastPeriod`** — the most recent active period (e.g. `"period1"`, `"period2"`).
- **`time`** — timing details.
  - `initial` — time before the period starts (often `0`).
  - `max` — maximum regular time for the period (e.g. `2700` s = 45 min).
  - `extra` — additional allocated time (e.g. `540` s).
  - `currentPeriodStartTimestamp` — UNIX timestamp (seconds) when the current period started.

### Calculating total period time

The **Total Period Time** is the cumulative time across all active periods.

1. **Identify active periods.** Periods typically range from `period1` to `period7`;
   include only those that are active for your sport/league.
2. **Compute each active period's time.** For period `i`:
   - If the match is **in progress** (`status.type == "inprogress"`), the current active
     period is `period i` (`lastPeriod == "periodi"`), and `currentPeriodStartTimestamp > 0`:
     `ElapsedTime_i = CurrentTimeInSeconds − time.currentPeriodStartTimestamp`
   - Otherwise use the recorded time:
     `RecordedTime_i = time.initial + time.max + time.extra`
3. **Sum all period times:** `TotalPeriodTime = Σ PeriodTime_i` for `i = 1…7`.

### Example

```json
{
  "status": { "code": 6, "description": "1st half", "type": "inprogress" },
  "lastPeriod": "period1",
  "time": {
    "initial": 0,
    "max": 2700,
    "extra": 540,
    "currentPeriodStartTimestamp": 1727861400
  }
}
```

Assume the current system time is `1727862000` (UNIX seconds).

- Active period: `period1`.
- The match is in progress and `period1` is active, so
  `ElapsedTime_1 = 1727862000 − 1727861400 = 600` s (10 minutes).
- **TotalPeriodTime = 600 s.**

### Handling added time

To show "time + added time", treat anything beyond the period's regular duration
(`time.max`) as added time:

- If `(CurrentTimeInSeconds − time.currentPeriodStartTimestamp) > time.max`, then
  `AddedTime_i = (CurrentTimeInSeconds − time.currentPeriodStartTimestamp) − time.max`.

Football example: with `time.max = 2700` s and an elapsed time of `2800` s,
`AddedTime = 2800 − 2700 = 100` s (1:40).

### Injury time

The `time` object also includes **`injuryTime`** — the maximum additional time granted
by the referee. Factor it in if you want to account for stoppages.

### Important notes

- All timestamps are in **seconds** (UNIX format).
- Make sure the clock you use for `CurrentTimeInSeconds` is accurate.
- Adjust the period range (`1…7`) to the sport/league you're tracking.
- Handle the case where `currentPeriodStartTimestamp` is missing or `0`.

### Pseudocode

```text
function calculateTotalPeriodTime(event):
    totalPeriodTime = 0
    currentTime = getCurrentSystemTimeInSeconds()
    lastPeriod = event.lastPeriod
    statusType = event.status.type
    currentPeriodStart = event.time.currentPeriodStartTimestamp

    // Standard recorded time per period
    recordedTime = event.time.initial + event.time.max + event.time.extra

    for i from 1 to 7:
        periodIdentifier = "period" + i
        if (statusType == "inprogress" and lastPeriod == periodIdentifier and currentPeriodStart > 0):
            elapsedTime = currentTime - currentPeriodStart
            totalPeriodTime += elapsedTime
        else:
            totalPeriodTime += recordedTime

    return totalPeriodTime
```

> ℹ️ `lastPeriod` and `time` are top‑level fields of the event (siblings of `status`),
> not nested inside `status`.

---

## Do you provide betting odds?

Yes. Except for motorsport and esports, odds are available for all sports, primarily
sourced from **bet365**, for general/referential use.

For more detailed, sport‑specific odds, consider our dedicated odds services:
[Pinaculo](https://rapidapi.com/fluis.lacasse/api/pinaculo) and
[Uniodds](https://rapidapi.com/fluis.lacasse/api/uniodds4).

---

## How do I interpret match incidents and status?

### Incidents

Read an incident's nature from `incidentType` (refined by `incidentClass` or `text`):

- **`incidentType`**: `period`, `penaltyShootout`, `card`, `substitution`, `injuryTime`,
  `goal`, `varDecision`, `inGamePenalty`.
- **`incidentClass`** (depends on type):
  - `penaltyShootout`: `scored`, `missed`
  - `card`: `red`, `yellow`, `yellowRed`
  - `goal`: `penalty`, `regular`, `ownGoal`
  - `substitution`: `injury`, `null`
  - `varDecision`: `penaltyNotAwarded`, `goalAwarded`, `cardUpgrade` (plus a `confirmed`
    flag that may be `true`/`false`)
  - `inGamePenalty`: `missed`
- **`text`** (for `period`): `HT`, `FT`, `ET`, `PEN`.

See the [Incidents model](Models/Incidents.md) for every field.

### Status

The match status has three properties:

- **`code`** — integer status code. Examples:

  | Code | Meaning |
  |------|---------|
  | 31 | HT (Halftime) |
  | 32 | AwET (Awaiting Extra Time) |
  | 33 | ETHT (Extra Time Halftime) |
  | 34 | AwP (Awaiting Penalties) |
  | 40 | OT (Overtime) |
  | 41 | ET1 (1st Extra Time Period) |
  | 42 | ET2 (2nd Extra Time Period) |
  | 50 | PEN (Penalties) |
  | 110 | AET (After Extra Time) |
  | 120 | AP (After Penalties) |

- **`type`** — general status: `inprogress`, `finished`, `postponed`, `interrupted`,
  `canceled`, `notstarted`, `preliminary`, `suspended`, `willcontinue`, `delayed`.
- **`description`** — human‑readable text, varies by sport/circumstance, e.g.
  `1st half`, `2nd half`, `Halftime`, `Ended`, `Postponed`, `Canceled`, `Not started`,
  `AP` (After Penalties), `AET` (After Extra Time), `1st extra`,
  `Extra time halftime`, `2nd extra`, `Awaiting penalties`, `Penalties`,
  `Awaiting extra time`, `First break`, `Second break`, `Third break`, `FT`.

---

## How do I navigate the API?

The API combines several sports into one consistent structure. If it feels large, take
it one sport at a time — the endpoint structure is the same across every host:

- [Football/Soccer](https://rapidapi.com/fluis.lacasse/api/footapi7/)
- [Tennis](https://rapidapi.com/fluis.lacasse/api/tennisapi1/)
- [Ice Hockey](https://rapidapi.com/fluis.lacasse/api/icehockeyapi/)
- [American Football](https://rapidapi.com/fluis.lacasse/api/americanfootballapi/)
- [Baseball](https://rapidapi.com/fluis.lacasse/api/baseballapi/)
- [Basketball](https://rapidapi.com/fluis.lacasse/api/basketapi1/)
- [Cricket](https://rapidapi.com/fluis.lacasse/api/cricketapi21/)
- [Esports](https://rapidapi.com/fluis.lacasse/api/esportapi1/)
- [Motorsport](https://rapidapi.com/fluis.lacasse/api/motorsportapi/)
- [Rugby](https://rapidapi.com/fluis.lacasse/api/rugbyapi2/)

Endpoints are grouped into four main areas:

- **Matches** — schedules, lineups, statistics, incidents, highlights, odds.
- **Teams** — squads, statistics, logos, transfers.
- **Players** — statistics, images, transfer history.
- **Managers** — career history, images, recent matches.

Still stuck? Reach out — we're happy to help and open to feature suggestions.

---

## Why don't you provide widgets?

To protect your API key. Widgets can expose your key to end users, which is a security
risk. Instead of widgets, we offer **free development support** — reach out during
build‑out and we'll help you wire things up safely (e.g. via a server‑side proxy).

---

## How do I get all leagues of a sport?

Walk the tree top‑down — list categories, then list tournaments per category:

1. **List all categories.** Categories represent the country, tour or game of the
   tournaments. Use `/api/tournament/categories` for football, or
   `/api/{sport}/tournament/categories` for other sports.
2. **List tournaments within each category.** Use
   `/api/tournament/all/category/{category_id}` for football, or
   `/api/{sport}/tournament/all/category/{category_id}` for other sports.
3. **(Optional) Get a category's schedule for a day.** Use
   `/api/category/{category_id}/events/{day}/{month}/{year}` for football, or
   `/api/{sport}/category/{category_id}/events/{day}/{month}/{year}` for other sports.

See the [Category](Models/Category.md) and [Tournament](Models/Tournament.md) models for
the shapes you'll get back.

---

## How do I retrieve all teams in a league?

Use the **standings** endpoint for the league/season. It returns every team in the
competition along with their record (wins, losses, draws, goal difference, etc.) — a
solid foundation for league tables and team listings.

---

## How do I get all matches on a specific date?

The flat per‑date feed — `GET /api/matches/{day}/{month}/{year}` (football) and
`GET /api/{sport}/matches|events/{day}/{month}/{year}` (other sports) — is being
**retired**. Assemble the day **per competition** instead: find what's running that
day, then pull each one's schedule. Use whichever entry point fits — and for the full
per‑sport recipe (including MMA, motorsport and cycling) see the dedicated
[**DailyMatches** guide](DailyMatches.md).

**Option 1 — by category (country / tour).** The most complete; it reuses the
[league tree walk](#how-do-i-get-all-leagues-of-a-sport).

1. List categories: `/api/tournament/categories` (football) or
   `/api/{sport}/tournament/categories`.
2. For each category, fetch that day's schedule:
   `/api/category/{category_id}/events/{day}/{month}/{year}` (football) or
   `/api/{sport}/category/{category_id}/events/{day}/{month}/{year}`.

**Option 2 — by tournament, ISO date.** Available for **football, cricket, esport and
tennis**: `/api/{sport}/tournament/{tournament_id}/scheduled-events/{YYYY-MM-DD}`.
The other team sports expose the day/month/year form instead:
`/api/{sport}/tournament/{tournament_id}/schedules/{day}/{month}/{year}`.

**Tennis & table‑tennis shortcut.** Ask which categories actually have play that day,
then pull only those — no full category list needed:
`/api/{sport}/calendar/{day}/{month}/{year}/categories` →
`/api/{sport}/category/{category_id}/events/{day}/{month}/{year}`.

**Helpers**

- **Live right now:** `GET /api/matches/live` (football) /
  `GET /api/{sport}/matches/live` — unaffected by the change, but in‑play only.
- **Which days have play:**
  `GET /api/calendar/season/{season_id}/{year}/days-with-events` — skip empty dates
  before you fan out.

> Football is the exception: no sport prefix, and its category schedule is also exposed
> as `/api/category/{category_id}/matches/{day}/{month}/{year}`.

Two practical notes: schedule responses span **±12 h around UTC midnight**, so filter to
the user's local day yourself (see
[the next question](#why-do-schedule-endpoints-return-matches-from-the-previousnext-day)
and the [`filter_schedule_by_timezone`](Examples/filter_schedule_by_timezone.py)
example); and **cache the category / tournament lists** — they change slowly, so you
only pay for the per‑day calls. The
[`list_all_leagues`](Examples/list_all_leagues.py) example shows the enumeration.

---

## Why do schedule endpoints return matches from the previous/next day?

To cover every time zone. Schedule timestamps are in **GMT/UTC+00**, so the endpoint
returns matches spanning **12 hours of the previous day and 12 hours of the next day**
relative to UTC midnight. Filter to your users' local day on your side.

> In short, the endpoint returns matches independent of the user's time zone. You can
> filter the matches according to your time zone — and we're happy to help you do so.

More detail in these discussions:
[allsportsapi2](https://rapidapi.com/fluis.lacasse/api/allsportsapi2/discussions/38225) ·
[footapi7](https://rapidapi.com/fluis.lacasse/api/footapi7/discussions/33473).

---

## What if the data I need isn't available?

If a data point isn't provided here, try the
[Allscores API](https://rapidapi.com/fluis.lacasse/api/allscores/), which may cover your
use case. Either way, feel free to reach out — we're glad to point you in the right
direction.

---

## What do the team transfer types mean?

Transfers are categorized by the `type` field:

| `type` | Meaning |
|--------|---------|
| **1** | **Loan** — the player moves temporarily to another team. |
| **2** | **End of loan** — the player returns to their original team. |
| **3** | **Permanent transfer** — the player is bought/sold outright. |

See the [Transfer model](Models/Transfer.md) for the full field list.

---

## Where can I get help?

Reach out via the **About** tab of any API on RapidAPI, or open a discussion on the
API's RapidAPI page. Support during development is **free** — whether it's a technical
issue or best‑practice advice, we're happy to help.
