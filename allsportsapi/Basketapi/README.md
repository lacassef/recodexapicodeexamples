# Basketball Examples

Examples for the [Basketball API (basketapi1)](https://rapidapi.com/fluis.lacasse/api/basketapi1/)
focused on **shot data**: plotting a shotmap, building a shot‑density heatmap, and
classifying shots into court zones.

| File | What it does |
|------|--------------|
| [`basketball-shotmap.py`](basketball-shotmap.py) | Draws a half‑court with Matplotlib, plots made/missed shots, and renders a shot‑density heatmap (Seaborn + NumPy). |
| [`PlayerShotActionAreas.md`](PlayerShotActionAreas.md) | Explains how to classify a shot's `(x, y)` into a named court zone (corner three, top of the key, paint, …). |

---

## Endpoints

| Data | Endpoint |
|------|----------|
| Team shotmap (match) | `GET /api/basketball/match/{id}/team/{teamId}/shotmap` |
| Player shotmap (match) | `GET /api/basketball/match/{id}/player/{playerId}/shotmap` |
| Player shot‑action areas (season) | `GET /api/basketball/player/{id}/tournament/{tournamentId}/season/{seasonId}/shot-actions/{regularSeason\|playoffs}` |
| Tournament shot‑action areas (season) | `GET /api/basketball/tournament/{tournamentId}/season/{seasonId}/shot-actions/areas/{regularSeason\|playoffs}` |

Host: `basketapi1.p.rapidapi.com` (or `allsportsapi2.p.rapidapi.com` with the bundle path).

---

## Shot data shape

Each shot in the response carries a court position plus made/missed/saved counts:

```json
{ "x": -233, "y": -2, "made": 1, "missed": 1, "saved": 0 }
```

| Field | Meaning |
|-------|---------|
| `x` | Horizontal position. `0` is the centre; negative = left, positive = right. |
| `y` | Distance from the baseline toward half‑court. |
| `made` / `missed` / `saved` | Counts for the outcome at that spot. |

### Coordinate system

The examples use a hoop‑centred system that matches the drawn court:

- **Origin `(0, 0)` is the basket.**
- `x` runs roughly **‑250 … 250** (court width).
- `y` runs **0 … 470** (baseline toward half‑court).
- The three‑point arc sits at radius ≈ **238**; the paint is ±**80** wide.

These same thresholds drive the zone classification in
[`PlayerShotActionAreas.md`](PlayerShotActionAreas.md).

---

## Running the Python example

```bash
pip install matplotlib numpy seaborn
python basketball-shotmap.py
```

`basketball-shotmap.py` ships with sample shot data and two views:

1. **Shotmap** — made shots in green, missed in red, drawn over a half‑court.
2. **Heatmap** — a 2‑D histogram of shot density (Seaborn) over the same court.

To use live data, fetch one of the shotmap endpoints and pass the returned list to
`plot_shotmap()` / `plot_heatmap()` (each item needs `x`, `y`, `made`, `missed`):

```python
import os, requests

headers = {
    "X-RapidAPI-Key": os.environ["RAPIDAPI_KEY"],
    "X-RapidAPI-Host": "basketapi1.p.rapidapi.com",
}
url = "https://basketapi1.p.rapidapi.com/api/basketball/match/{id}/team/{teamId}/shotmap"
shots = requests.get(url, headers=headers, timeout=15).json()  # adapt to the payload key
plot_shotmap(shots)
```

---

## Classifying shots into zones

See [`PlayerShotActionAreas.md`](PlayerShotActionAreas.md) for the full algorithm. In
short: check the corner‑three regions first, then use the distance from the basket to
separate two‑pointers from three‑pointers, then split each band left/centre/right. This
turns raw `(x, y)` coordinates into human‑readable zones (e.g. *top‑left outside*,
*centre middle*, *bottom right*) for aggregations and labelled charts.

---

## Notes & best practices

- **Keep your API key server‑side** — never embed it in client code (see the
  [root README](../README.md) and [FAQ](../FAQ.md)).
- Cache finished‑match shotmaps; they don't change after the game ends.
- Season "shot‑action areas" endpoints are pre‑aggregated by zone — handy when you want
  shooting splits without computing them yourself.
