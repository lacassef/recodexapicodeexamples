# Football / Soccer Examples

Self‑contained, browser‑ready visualizations built on the
[Football API (footapi7)](https://rapidapi.com/fluis.lacasse/api/footapi7/). Each file
ships with **sample data** so you can open it directly, and shows how to swap in **live
data** from the API.

| File | What it does |
|------|--------------|
| [`football_shotmap.html`](football_shotmap.html) | Renders a match **shotmap** on a half‑pitch: every shot placed by location, sized by xG, colored by outcome, with shot→goal lines and tooltips. Includes an API loader. |
| [`football_heatmap.html`](football_heatmap.html) | Renders a positional **heatmap** (D3.js) over a pitch image, with live radius/opacity controls. |
| [`soccer_field.png`](soccer_field.png) | Pitch background used by the heatmap. |

---

## Shotmap

### Endpoints

| Data | Endpoint |
|------|----------|
| Whole‑match shotmap | `GET /api/match/{id}/shotmap` |
| Single player's shots | `GET /api/match/{id}/player/{playerId}/shotmap` |

Host: `footapi7.p.rapidapi.com` (or `allsportsapi2.p.rapidapi.com` with the bundle path).

### Response shape (per shot)

Each entry in `shotmap[]` describes one shot:

| Field | Meaning |
|-------|---------|
| `player` | The shooter ([Player](../Models/Player.md), trimmed). |
| `isHome` | `true` = home team, `false` = away. |
| `shotType` | Outcome: `goal`, `save`, `miss`, `block`, `post`. |
| `situation` | Build‑up: `regular`, `assisted`, `corner`, `set-piece`, `fast-break`, … |
| `bodyPart` | `left-foot`, `right-foot`, `head`, `other`. |
| `playerCoordinates` | Where the shot was taken (`x`, `y`, `z`). |
| `goalMouthCoordinates` | Where it crossed the goal line (`y` = horizontal in goal, `z` = height). |
| `blockCoordinates` | Where a blocked/saved shot was stopped (when applicable). |
| `xg`, `xgot` | Expected Goals and Expected Goals on Target. |
| `time`, `addedTime` | Minute of the shot. |

### Coordinates

`playerCoordinates` and `goalMouthCoordinates` are pitch coordinates relative to the
attacking direction. In the demo we map them onto a **half‑pitch** SVG: the lateral
position drives the horizontal axis and the distance‑from‑goal drives the vertical axis,
so shots cluster realistically around the box. For goals, a line is drawn from the shot
location to the goal‑mouth point. Marker **size encodes xG** and **color encodes
outcome** (green = goal).

> 💡 Because the exact normalization can differ between data sets, the safest approach
> is to inspect a live response and scale to your own pitch graphic — exactly what the
> demo's `createShot()` function shows.

### Try it with live data

1. Open `football_shotmap.html` in a browser — it renders the bundled sample immediately.
2. Paste your **RapidAPI key** and a **Match ID**, then click **Load Shots**.
3. On any error it falls back to the sample data (and tells you in the status line).

> Find a Match ID from any schedule/live endpoint (`event.id`).

---

## Heatmap

### Endpoints

| Data | Endpoint |
|------|----------|
| Player positions in a match | `GET /api/match/{id}/player/{playerId}/heatmap` |
| Team positions in a match | `GET /api/match/{id}/team/{teamId}/heatmap` |
| Player positions across a season | `GET /api/player/{id}/tournament/{tournamentId}/season/{seasonId}/heatmap` |

### How the demo works

`football_heatmap.html` uses **D3.js v6**. The data is a list of `{x, y}` points on a
0–100 pitch grid (length × width). The script:

1. Aggregates repeated points into a `count` (density).
2. Draws one circle per location over [`soccer_field.png`](soccer_field.png),
   converting pitch coordinates to pixels (`cx = x/100 * width`,
   `cy = height − y/100 * height`, flipping Y for SVG).
3. Lets you tune **radius** and **opacity** with the sliders to taste.

To use live data, fetch one of the heatmap endpoints from your backend and replace the
`data` array with the returned points (each has `x`/`y`).

---

## Notes & best practices

- **Keep your API key server‑side.** These HTML files prompt for a key only so you can
  experiment locally — in production, proxy the request through your backend (see the
  [root README](../README.md) and [FAQ](../FAQ.md)).
- Shotmaps/heatmaps are available only for matches with that coverage — check the event
  flags (`hasEventPlayerHeatMap`, `hasXg`) on the [Event](../Models/Event.md) first.
- Cache match shotmaps/heatmaps once a match has finished; they no longer change.
