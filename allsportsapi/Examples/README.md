# Examples

Self‑contained examples that apply to **every** AllSportsAPI sport. Each one is
provided in **Python and Node** (where it makes sense) and follows the same
conventions: read the key from the environment, send the two auth headers, and handle
`204`/`429`/`5xx` gracefully. The default host is football (`footapi7.p.rapidapi.com`);
switch sports with `RAPIDAPI_HOST` (see the [root README](../README.md)).

## Setup

```bash
export RAPIDAPI_KEY="your_key_here"      # never hard-code this
pip install requests flask               # for the Python examples
npm install express                      # only for the Express proxy (Node 18+ has fetch)
```

## Runnable examples

| Example | Python | Node | What it shows |
|---------|--------|------|---------------|
| **Quickstart client** | [`quickstart.py`](quickstart.py) | [`quickstart.js`](quickstart.js) | Auth → fetch live matches → parse the `Event` model → print scores, with retry/backoff on `429`/`5xx`. |
| **Server‑side proxy** | [`server_proxy_flask.py`](server_proxy_flask.py) | [`server_proxy_express.js`](server_proxy_express.js) | Keep your key secret: the browser calls your server, which adds headers and forwards to the API (JSON **and** images). |
| **Match‑clock calculator** | [`match_clock.py`](match_clock.py) | [`match_clock.js`](match_clock.js) | The FAQ's match‑time algorithm as real code: elapsed time, added time, display clock. Runs offline on a sample event. |
| **List all leagues** | [`list_all_leagues.py`](list_all_leagues.py) | [`list_all_leagues.js`](list_all_leagues.js) | The categories → tournaments tree walk that enumerates every league of a sport. |
| **Timezone schedule filter** | [`filter_schedule_by_timezone.py`](filter_schedule_by_timezone.py) | [`filter_schedule_by_timezone.js`](filter_schedule_by_timezone.js) | Assemble a day's schedule per category (the flat per‑date feed is retired) and filter the ±12 h UTC window down to a user's local calendar day (DST‑safe). |

> The **match‑clock** example needs no network — run it straight away to see the output.
> The others call the live API, so they need a valid `RAPIDAPI_KEY`.

---

## Working with images

The rest of this folder focuses on the most common image "gotcha": image endpoints
return **binary PNG** (`image/png`), not JSON or a URL — and they require your auth
headers, so you can't just point an `<img src>` at them. (Placeholder images are the one
exception — they return SVG.)

| File | Stack | What it shows |
|------|-------|---------------|
| [`player_image.html`](player_image.html) | Vanilla JS (`fetch`) | Fetch an image as a Blob and render it in plain HTML. |
| [`image_as_blob_with_react.js`](image_as_blob_with_react.js) | React | Same pattern as a component, with object‑URL cleanup. |
| [`player_image_asynchronous.js`](player_image_asynchronous.js) | axios | Fetch as a Blob (browser) or array buffer (Node) and display/save it. |

---

## Why you can't use the URL directly

```html
<!-- ❌ This will NOT work: the endpoint needs auth headers an <img> can't send -->
<img src="https://allsportsapi2.p.rapidapi.com/api/player/3041/image" />
```

Browsers don't attach `X-RapidAPI-Key` / `X-RapidAPI-Host` to plain `<img>` requests, so
the call is rejected. Instead, fetch the bytes **with** the headers, then hand the
result to the `<img>`.

## The pattern (Fetch → Blob → object URL)

```js
const res = await fetch(`https://${HOST}/api/player/${playerId}/image`, {
  headers: { "X-RapidAPI-Key": KEY, "X-RapidAPI-Host": HOST }
});
if (!res.ok) throw new Error(`Request failed: ${res.status}`);

const blob = await res.blob();
const url = URL.createObjectURL(blob);
imgElement.src = url;
imgElement.onload = () => URL.revokeObjectURL(url); // free memory when done
```

## Four ways to display images (recap of the FAQ)

1. **Fetch / Blob** — request the bytes, create an object URL, set it as the `src`
   (shown above; simplest for one‑off images).
2. **Base64** — convert the bytes to a data URL; handy for inlining or storing.
3. **Server‑side proxy** — your backend fetches the image (key stays secret) and
   serves it to the front‑end. **Recommended for production.**
4. **Canvas** — draw the fetched image onto a `<canvas>` when you need to manipulate it.

See the [FAQ](../FAQ.md) for the trade‑offs.

## Python (download to a file)

```python
import os, requests

host = "allsportsapi2.p.rapidapi.com"
player_id = 3041
url = f"https://{host}/api/player/{player_id}/image"
headers = {"X-RapidAPI-Key": os.environ["RAPIDAPI_KEY"], "X-RapidAPI-Host": host}

resp = requests.get(url, headers=headers, timeout=15)
resp.raise_for_status()
with open("player.png", "wb") as f:
    f.write(resp.content)   # resp.content is the raw PNG bytes
```

---

## Notes & best practices

- 🔒 **Never expose your API key in the browser.** The examples accept a key inline only
  so they run standalone — in production, proxy through your own backend (option 3) and
  the front‑end never sees the key. See the [root README](../README.md).
- **Endpoints vary by sport.** Football uses `/api/player/{id}/image`; other sports
  prefix the sport, e.g. `/api/tennis/player/{id}/image`. Some entities have moved
  between `/player/` and `/team/` over time — confirm the current path on the RapidAPI
  **Endpoints** tab.
- **Cache images.** Logos and photos rarely change; cache them (or your proxy's
  responses) to save quota and speed up your UI.
- **Always check `response.ok` / status** before reading the body, and revoke object
  URLs you create to avoid leaks.
