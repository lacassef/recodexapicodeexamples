# Tennis Examples

Examples for the [Tennis API (tennisapi1)](https://rapidapi.com/fluis.lacasse/api/tennisapi1/).

| File | What it does |
|------|--------------|
| [`tennis-new-cuptrees.html`](tennis-new-cuptrees.html) | Renders a tournament **draw / bracket** ("cup tree") as an interactive D3.js tree, with selectors for cup tree, view and match group. |

---

## Cup trees (tournament draw / bracket)

A **cup tree** is the knockout structure of a tournament — the bracket that pairs
competitors round by round until a winner. The API returns it as a nested tree you can
walk or render directly.

### Endpoints

| Data | Endpoint |
|------|----------|
| Tournament draw / bracket | `GET /api/tennis/tournament/{tournamentId}/season/{seasonId}/cup-trees` |
| Older draw format | `GET /api/tennis/tournament/{tournamentId}/season/{seasonId}/cup-trees/old` |

Host: `tennisapi1.p.rapidapi.com` (or `allsportsapi2.p.rapidapi.com` with the bundle path).

### Response shape

The response has a `cupTrees[]` array. Each cup tree has:

- `id`, `name` — e.g. *"2023 Toronto, Canada, Qualifying"*.
- `currentView` and `views` — a draw can have multiple **views** (e.g. main draw vs
  qualifying); each view contains one or more **match groups**.
- Each match group is a **binary tree**: a node holds `eventIds`, `blockId`, `finished`
  and `eventInProgress`, plus `left` / `right` children pointing at the two matches that
  feed into it. The root is the final; leaves are the earliest round.

Use `eventIds` to fetch the underlying [Event](../Models/Event.md) for any tie
(scores, players, status).

---

## How the demo works

`tennis-new-cuptrees.html` loads with bundled sample data and uses **D3.js v5**:

1. Three dropdowns let you choose the **cup tree**, the **view**, and the **match group**.
2. `d3.hierarchy(...)` turns the selected `left`/`right` node tree into a layout.
3. The bracket is drawn as nodes (matches) connected by links (progression).

To use live data, fetch the `cup-trees` endpoint from your backend and replace the
`rawData` object with the response. The same selectors and rendering code work unchanged
as long as the `cupTrees → views → match group → left/right` shape is preserved.

---

## Notes & best practices

- **Keep your API key server‑side** — never embed it in client code (see the
  [root README](../README.md) and [FAQ](../FAQ.md)).
- A draw is stable once published but node `finished`/`eventInProgress` flags change as
  matches play out — refresh while a tournament is live, then cache when it ends.
- To show live scores in the bracket, resolve each node's `eventIds` against the match
  endpoints and merge the results in.
